// Finner ut hvem som har tekst igjen i hver artikkel, og skriver to filer:
//
//   data/forfattere.json     leses av layouts/_partials/page-meta.html
//   FORFATTERE.md            full oversikt til internt bruk (gitignorert)
//
// Hugo kan ikke gjøre dette selv. `enableGitInfo` gir bare siste commit som
// rørte fila, ikke en liste over bidragsytere. Derfor kjøres dette før hugo,
// se `_hugo` i package.json.
//
// Metoden er `git blame` og ikke commit-telling, fordi commit-telling
// krediterer den som har gjort flest småfikser framfor den som skrev teksten.
// `-w` ignorerer ren formatering, `-C` følger tekst som er flyttet mellom
// filer, slik at innhold beholder opphavet sitt gjennom omstruktureringer.
// `.mailmap` i repo-roten plukkes opp av git automatisk, så identiteter er
// allerede slått sammen når vi teller.
//
// Bare de norske artiklene blames. Norsk er originalteksten og engelsk er
// oversatt fra den, så begge språk viser samme liste. Oppslaget skjer på
// `translationKey`, som er det eneste begge språk deler.
import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const KILDE = join(ROOT, "content/no");

// En forfatter må eie minst denne andelen av brødteksten for å bli listet på
// nettstedet. Uten terskelen havner den som rettet én skrivefeil på lista.
const MIN_ANDEL = 0.1;
// ...og minst så mange linjer, men bare i artikler som faktisk er lange nok.
// Er hele artikkelen kortere enn dette, gir linjetelling ingen mening, og
// prosenten står alene.
const MIN_LINJER = 15;
// Maks antall navn per artikkel.
const MAKS_NAVN = 6;

// Folk som har sluttet. De vises ikke på nettstedet, men står fortsatt i
// FORFATTERE.md slik at oversikten over hvem som faktisk skrev hva er
// komplett. Navnene må være de kanoniske, altså slik .mailmap skriver dem.
const SLUTTET = ["thomfre"];

// Maskinelle commits skal ikke krediteres.
const BOTER = [/^github-actions/i, /\[bot\]$/i, /^dependabot/i];

// Filer som ikke er artikler, og derfor ikke skal ha forfatter:
//   _index.md        seksjonsintroer. Rene inngangstekster uten eget innhold
//                    — alt som står der skal også finnes i artiklene under.
//   endringslogg.md  oppsummering av endringer, ikke en artikkel.
const IKKE_ARTIKLER = ["_index.md", "endringslogg.md"];

function mdFiler(dir) {
  return readdirSync(dir).flatMap((navn) => {
    const sti = join(dir, navn);
    if (statSync(sti).isDirectory()) return mdFiler(sti);
    return navn.endsWith(".md") && !IKKE_ARTIKLER.includes(navn) ? [sti] : [];
  });
}

// Linjenummeret der front matter slutter. Alt over er metadata, ikke tekst.
function forsteTekstlinje(innhold) {
  const linjer = innhold.split("\n");
  if (linjer[0]?.trim() !== "---") return 1;
  for (let i = 1; i < linjer.length; i++) {
    if (linjer[i].trim() === "---") return i + 2;
  }
  return 1;
}

// Returnerer Map(navn -> antall linjer) for linjene under front matter.
function blame(sti, fraLinje) {
  let ut;
  try {
    ut = execFileSync(
      "git",
      ["blame", "-w", "-C", "--line-porcelain", "HEAD", "--", relative(ROOT, sti)],
      { cwd: ROOT, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 },
    );
  } catch {
    return new Map(); // fila er ikke committet ennå
  }

  const per = new Map();
  let linjenr = 0;
  let navn = null;
  for (const linje of ut.split("\n")) {
    const hode = linje.match(/^[0-9a-f]{40} \d+ (\d+)/);
    if (hode) {
      linjenr = Number(hode[1]);
      navn = null;
    } else if (linje.startsWith("author ")) {
      navn = linje.slice(7).trim();
    } else if (linje.startsWith("author-time ") && navn && linjenr >= fraLinje) {
      if (BOTER.some((b) => b.test(navn))) continue;
      const tid = Number(linje.slice(12).trim());
      const f = per.get(navn) ?? { linjer: 0, sist: 0 };
      f.linjer += 1;
      f.sist = Math.max(f.sist, tid);
      per.set(navn, f);
    }
  }
  return per;
}

// --- samle inn ------------------------------------------------------------

const artikler = []; // { sti, nokkel, total, andeler: [{navn, linjer, andel}] }

for (const sti of mdFiler(KILDE)) {
  const innhold = readFileSync(sti, "utf8");
  const per = blame(sti, forsteTekstlinje(innhold));
  const total = [...per.values()].reduce((a, b) => a + b.linjer, 0);
  if (!total) continue;

  artikler.push({
    sti: relative(KILDE, sti),
    nokkel: innhold.match(/^translationKey:\s*(\S+)\s*$/m)?.[1] ?? null,
    total,
    andeler: [...per.entries()]
      .map(([navn, f]) => ({ navn, linjer: f.linjer, sist: f.sist, andel: f.linjer / total }))
      .sort((a, b) => b.andel - a.andel),
  });
}

// Samme filter som nettstedet bruker, slik at rapporten ikke kan komme i
// utakt med det som faktisk vises.
const passerer = (f, total) =>
  f.andel >= MIN_ANDEL &&
  (total < MIN_LINJER || f.linjer >= MIN_LINJER) &&
  !SLUTTET.includes(f.navn);

// Navnene slik de vises, sortert på siste bidrag som fortsatt står.
const visesFor = (a) =>
  a.andeler
    .filter((f) => passerer(f, a.total))
    .slice()
    .sort((x, y) => y.sist - x.sist)
    .slice(0, MAKS_NAVN);

// --- data/forfattere.json -------------------------------------------------

const data = {};
for (const a of artikler) {
  if (!a.nokkel) continue;
  const navn = visesFor(a).map((f) => f.navn);
  if (navn.length) data[a.nokkel] = navn;
}

mkdirSync(join(ROOT, "data"), { recursive: true });
writeFileSync(join(ROOT, "data/forfattere.json"), JSON.stringify(data, null, 2) + "\n");

// --- FORFATTERE.md --------------------------------------------------------

const perPerson = new Map();
for (const a of artikler) {
  for (const f of a.andeler) {
    const e = perPerson.get(f.navn) ?? { navn: f.navn, linjer: 0, artikler: [] };
    e.linjer += f.linjer;
    e.artikler.push({ sti: a.sti, andel: f.andel, linjer: f.linjer, vises: visesFor(a).some((v) => v.navn === f.navn) });
    perPerson.set(f.navn, e);
  }
}

const pct = (x) => `${Math.round(x * 100)} %`;
const rader = [...perPerson.values()].sort((a, b) => b.linjer - a.linjer);

let md = `# Forfattere i sikkerhet.bouvet.no

Generert av \`scripts/forfattere.mjs\`. Grunnlaget er \`git blame -w -C\` over de
norske artiklene, med \`.mailmap\` anvendt, bots filtrert bort og front matter
holdt utenfor. Prosentene er andelen av brødteksten i artikkelen som
fremdeles står der i dag — ikke hvor mye som en gang ble skrevet.

Engelsk er ikke målt. Norsk er originalteksten, engelsk er oversatt fra den.

For å vises på nettstedet må en forfatter ha minst ${pct(MIN_ANDEL)} av
artikkelen *og* minst ${MIN_LINJER} linjer. Alle bidrag er med i denne
oversikten, også de som ikke passerer.

`;

if (SLUTTET.length) {
  md += `Markert med ✖ er folk som har sluttet. De står i oversikten, men vises
ikke på nettstedet: ${SLUTTET.join(", ")}.\n\n`;
}

md += `---\n\n## Per person\n\n`;

for (const p of rader) {
  const sluttet = SLUTTET.includes(p.navn) ? " ✖" : "";
  const over = p.artikler.filter((a) => a.vises).length;
  md += `### ${p.navn}${sluttet}\n\n`;
  md += `${p.linjer} linjer fordelt på ${p.artikler.length} artikler, hvorav ${over} passerer filteret.\n\n`;
  md += `| Artikkel | Andel | Linjer | |\n|---|---:|---:|---|\n`;
  for (const a of p.artikler.sort((x, y) => y.andel - x.andel)) {
    md += `| \`${a.sti}\` | ${pct(a.andel)} | ${a.linjer} | ${a.vises ? "vises" : "—"} |\n`;
  }
  md += `\n`;
}

md += `---\n\n## Per artikkel\n\n| Artikkel | Linjer | Fordeling |\n|---|---:|---|\n`;
for (const a of artikler.sort((x, y) => x.sti.localeCompare(y.sti, "nb"))) {
  const f = a.andeler.map((x) => `${x.navn} ${pct(x.andel)}`).join(", ");
  md += `| \`${a.sti}\` | ${a.total} | ${f} |\n`;
}

md += `\n---\n\n## Etter filter — dette vises på nettstedet\n\n`;
md += `Samme artikler, men bare navnene som passerer ${pct(MIN_ANDEL)} og ${MIN_LINJER} linjer.\n`;
md += `Rekkefølgen er den som vises: siste bidrag som fortsatt står, først.\n\n`;
md += `| Artikkel | Vises som |\n|---|---|\n`;
for (const a of artikler) {
  const v = visesFor(a).map((x) => x.navn);
  md += `| \`${a.sti}\` | ${v.length ? v.join(", ") : "_ingen_"} |\n`;
}

const uten = artikler.filter((a) => !visesFor(a).length);
if (uten.length) {
  md += `\nUten forfatter etter filtrering: ${uten.length} av ${artikler.length}. Det er korte\nfiler der ingen enkeltperson når ${MIN_LINJER} linjer.\n`;
}

writeFileSync(join(ROOT, "FORFATTERE.md"), md);

console.log(
  `forfattere: ${Object.keys(data).length} artikler til data/forfattere.json, ` +
    `${rader.length} personer til FORFATTERE.md`,
);
