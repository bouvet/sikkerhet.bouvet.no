// Sjekker at de eksterne lenkene svarer. Kjøres for seg, ikke ved bygg:
//
//   npm run sjekk:lenker
//
// Bygget skal ikke stoppe fordi et tredjeparts nettsted er nede, og det
// krever nettverkstilgang som en byggagent ikke nødvendigvis har.
//
// Bare lenker som feiler rapporteres. Går alt bra, skriver skriptet én linje
// og avslutter med 0.
//
// Subdomener under bouvet.no sjekkes ikke — de ligger bak innlogging og ville
// gitt falske feil. De står i `bouvetSubdomener` i lenker.json til manuell
// gjennomgang. `bouvet.no` og `www.bouvet.no` er offentlige og sjekkes her.
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { hentLenker, ROOT } from "./lib/lenker.mjs";

const SAMTIDIGE = 8;
const TIDSAVBRUDD_MS = 15000;
// Noen nettsteder avviser forespørsler uten nettleser-UA.
const UA =
  "Mozilla/5.0 (compatible; sikkerhet.bouvet.no lenkesjekk; +https://sikkerhet.bouvet.no/)";

// Les fra lenker.json hvis den finnes, ellers hent direkte fra innholdet.
// Da virker skriptet også uten at byggsteget har kjørt først.
function lenker() {
  try {
    const fil = JSON.parse(readFileSync(join(ROOT, "lenker.json"), "utf8"));
    if (Array.isArray(fil.eksterne)) return fil.eksterne;
  } catch {
    /* ikke generert ennå */
  }
  return hentLenker().filter((l) => l.kategori === "ekstern");
}

async function hent(url, metode) {
  const avbryt = AbortSignal.timeout(TIDSAVBRUDD_MS);
  return fetch(url, {
    method: metode,
    redirect: "follow",
    signal: avbryt,
    headers: { "user-agent": UA, accept: "*/*" },
  });
}

// Returnerer null hvis lenka er i orden, ellers en forklaring.
async function sjekk(url) {
  try {
    // HEAD først, det er billigst. Mange servere svarer 405 eller 403 på
    // HEAD selv om GET fungerer, så vi faller tilbake på GET.
    let svar = await hent(url, "HEAD");
    if (!svar.ok && [403, 405, 404, 501].includes(svar.status)) {
      svar = await hent(url, "GET");
    }
    if (svar.ok) return null;
    return `HTTP ${svar.status}`;
  } catch (feil) {
    const navn = feil?.cause?.code ?? feil?.name ?? "ukjent";
    return navn === "TimeoutError" ? `tidsavbrudd etter ${TIDSAVBRUDD_MS / 1000}s` : navn;
  }
}

const alle = lenker();
if (!alle.length) {
  console.log("sjekk-lenker: fant ingen eksterne lenker");
  process.exit(0);
}

process.stdout.write(`sjekker ${alle.length} eksterne lenker`);

const feilet = [];
let ferdig = 0;
const kø = [...alle];

await Promise.all(
  Array.from({ length: Math.min(SAMTIDIGE, kø.length) }, async () => {
    while (kø.length) {
      const l = kø.shift();
      const grunn = await sjekk(l.url);
      if (grunn) feilet.push({ ...l, grunn });
      if (++ferdig % 10 === 0) process.stdout.write(".");
    }
  }),
);

process.stdout.write("\n\n");

if (!feilet.length) {
  console.log(`Alle ${alle.length} lenker svarte.`);
  process.exit(0);
}

// Feiler absolutt alt med en nettverksfeil, er det nesten alltid maskinen og
// ikke lenkene. Da er en liste over 142 «døde» lenker verre enn ingenting.
const NETTFEIL = ["ENOTFOUND", "EAI_AGAIN", "ECONNREFUSED", "ECONNRESET", "UND_ERR_CONNECT_TIMEOUT"];
if (feilet.length === alle.length && feilet.every((f) => NETTFEIL.includes(f.grunn))) {
  console.log(
    `Alle ${alle.length} lenkene feilet med nettverksfeil (${feilet[0].grunn}).\n` +
      "Det tyder på at denne maskinen ikke har utgående nett, ikke på at\n" +
      "lenkene er døde. Kjør skriptet et sted med nettilgang.",
  );
  process.exit(2);
}

feilet.sort((a, b) => a.url.localeCompare(b.url));
console.log(`${feilet.length} av ${alle.length} lenker feilet:\n`);
for (const f of feilet) {
  console.log(`  ${f.grunn}`);
  console.log(`  ${f.url}`);
  for (const a of f.artikler) console.log(`      ${a}`);
  console.log("");
}
console.log(
  "Merk at 403 ofte betyr at nettstedet avviser automatiske oppslag, ikke at\n" +
    "lenka er død. Verifiser disse i nettleser før du endrer noe.",
);

process.exit(1);
