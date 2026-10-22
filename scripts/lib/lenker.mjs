// Felles uthenting og klassifisering av lenker fra innholdsfilene. Brukes av
// både scripts/lenker.mjs (genererer lista) og scripts/sjekk-lenker.mjs
// (sjekker at de svarer), slik at de to ikke kan komme i utakt om hva som
// regnes som en lenke og hva som hører til hvilken kategori.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

export const ROOT = new URL("../..", import.meta.url).pathname.replace(/\/$/, "");
const INNHOLD = join(ROOT, "content");

// Nettstedet selv. Skal ikke stå som ekstern lenke i det hele tatt.
const EGET = "sikkerhet.bouvet.no";

function mdFiler(dir) {
  return readdirSync(dir).flatMap((navn) => {
    const sti = join(dir, navn);
    if (statSync(sti).isDirectory()) return mdFiler(sti);
    return navn.endsWith(".md") ? [sti] : [];
  });
}

export function vert(url) {
  try {
    return new URL(url).hostname.toLowerCase();
  } catch {
    return null;
  }
}

// Tre kategorier:
//
//   eget        nettstedet selv, skal ikke lenkes absolutt
//   bouvet      subdomener under bouvet.no, for eksempel info. og bsd.
//               Disse ligger som regel bak innlogging, så en HTTP-sjekk
//               utenfra gir falske feil. De samles i en egen liste til
//               manuell gjennomgang.
//   ekstern     alt annet, inkludert bouvet.no og www.bouvet.no som er
//               offentlige og kan sjekkes maskinelt.
export function kategori(v) {
  if (v === null) return "ugyldig";
  if (v === EGET) return "eget";
  if (v === "bouvet.no" || v === "www.bouvet.no") return "ekstern";
  if (v === "bouvet.no" || v.endsWith(".bouvet.no")) return "bouvet";
  return "ekstern";
}

// Returnerer [{ url, vert, kategori, artikler: [...] }], hver lenke én gang.
export function hentLenker() {
  const per = new Map();
  for (const fil of mdFiler(INNHOLD)) {
    const tekst = readFileSync(fil, "utf8");
    const artikkel = relative(INNHOLD, fil);
    for (const treff of tekst.matchAll(/https?:\/\/[^\s)<>\]"']+/g)) {
      // Markdown lar skilletegn henge igjen på slutten av en bar URL.
      const url = treff[0].replace(/[.,;:]+$/, "");
      if (!per.has(url)) per.set(url, new Set());
      per.get(url).add(artikkel);
    }
  }
  return [...per.entries()]
    .map(([url, artikler]) => {
      const v = vert(url);
      return { url, vert: v, kategori: kategori(v), artikler: [...artikler].sort() };
    })
    .sort((a, b) => (a.vert ?? "").localeCompare(b.vert ?? "") || a.url.localeCompare(b.url));
}
