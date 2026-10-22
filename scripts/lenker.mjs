// Genererer lenker.json: alle lenker ut av nettstedet, hver oppført én gang
// med artiklene de står i. Kjøres som en del av byggsteget, se `_hugo` i
// package.json.
//
// Fila deles i to lister:
//
//   bouvetSubdomener  info.bouvet.no, bsd.bouvet.no og liknende. Ligger som
//                     regel bak innlogging og kan ikke sjekkes maskinelt
//                     utenfra — denne lista går til manuell gjennomgang.
//   eksterne          alt annet, inkludert www.bouvet.no. Dette er lista
//                     scripts/sjekk-lenker.mjs går gjennom.
//
// Selve sjekken ligger bevisst i et eget skript som ikke kjører ved bygg.
// Bygget skal ikke være avhengig av at tredjeparts nettsteder svarer.
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { hentLenker, ROOT } from "./lib/lenker.mjs";

const alle = hentLenker();
const i = (kat) => alle.filter((l) => l.kategori === kat).map(({ url, vert, artikler }) => ({ url, vert, artikler }));

const eget = i("eget");
const ugyldig = i("ugyldig");

const ut = {
  generert: new Date().toISOString(),
  bouvetSubdomener: i("bouvet"),
  eksterne: i("ekstern"),
};

// Absolutte lenker til nettstedet selv hører ikke hjemme i innholdet — bruk
// {{< relref >}}. Tas med så de ikke går stille forbi.
if (eget.length) ut.absolutteInterne = eget;
if (ugyldig.length) ut.ugyldige = ugyldig;

writeFileSync(join(ROOT, "lenker.json"), JSON.stringify(ut, null, 2) + "\n");

console.log(
  `lenker: ${ut.eksterne.length} eksterne, ${ut.bouvetSubdomener.length} bouvet-subdomener` +
    (eget.length ? `, ${eget.length} absolutte interne (bør være relref)` : "") +
    (ugyldig.length ? `, ${ugyldig.length} ugyldige` : "") +
    " skrevet til lenker.json",
);
