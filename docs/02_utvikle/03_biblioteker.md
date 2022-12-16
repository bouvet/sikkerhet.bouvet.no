---
sidebar_position: 3
---

# Biblioteker

import WorkInProgress from '../_work_in_progress.mdx'

<WorkInProgress />

Med _Biblioteker_ her menes implisitt _tredjepartsbiblioteker_, dvs. kode som importeres inn til vårt prosjekt, eksekverer på våre servere, men hvor vi ikke selv har skrevet koden.

Sikkerhetsrisikoen knyttet til biblioteker er 2-delt.

 1. De kan inneholde kjente sårbarheter ([CVE](https://cve.mitre.org)) som lar seg utnytte om vi ikke oppgraderer raskt nok
 2. De kan inneholde ondsinnet kode som får full tilgang til vårt system

For å beskytte systemet mot disse truslene er det flere effektive tiltak vi kan gjøre.

- OpenSource vs Proprietær (vurder nøye...)
- Vurder lisensmodell
  - Kostnad i kroner
  - Åpent for kommersielt bruk?
  - "Copy-left"
- Vurder seriøsitet og aktivitet (lever biblioteket om 5 år? Mottar det 
sikkerhetsfikser?)
  - Oppdateringsfrekvens
  - Sårbarhetshistorikk
  - Nedlastingsfrekvens
- Bruk lock-filer (i kildekode)
  - NPM -> npm ci --ignore-scripts
  - beskytter mot ny, ondsinnet pakkeeier
- Hold oppdatert (etabler rutiner)
- Vær oppmerksom på
   - typosquatting, i.e. ondsinnede pakker med navn som ligner på legitim pakke
   - dependency confusion. Angripere overstyrer pakkenavn fra internt pakkerepo med ondsinnet pakke med samme navn fra public pakkerepo.
- Kjør automatisk sjekk av depedencies i CI
