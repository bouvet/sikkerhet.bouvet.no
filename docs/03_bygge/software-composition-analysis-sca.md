---
sidebar_position: 3
title: Software composition analysis (SCA)
---

# Software composition analysis (SCA)

Alle avhengigheter som taes med inn i et system kan ha kjente sårbarheter (CVE). Disse kan oppdages, og om satt opp riktig, automatisk patches.
Denne prosessen omtales som _SCA_ (Software Composition Analysis).

Et SCA-verktøy analyserer dine avhengigheter og gir deg beskjed dersom det finnes en kjent sårbarhet.

- [Snyk Open Source](https://docs.snyk.io/products/snyk-open-source) (Python, Java, JavaScript, C#, Go, Docker, ++)
- [Mend Bolt](https://www.mend.io/free-developer-tools/bolt/)
- [Dependency-Track](https://dependencytrack.org)
- [pip-audit](https://github.com/pypa/pip-audit) (Python)
- [npm audit](https://docs.npmjs.com/cli/v8/commands/npm-audit) (JavaScript)
- [clair](https://quay.github.io/clair/) (Docker)

Vær oppmerksom på at man må ha en rutine på plass for å systematisk gjennomgå varslene fra disse verktøyene og det må settes av tid til å analysere sårbarhetene som vil dukke opp.
Man kan ofte være tjent med å oppgradere til nyeste versjon av et bibliotek fremfor å bruke mye tid på å analysere om man er truffet av en gitt sårbarhet.
Det kan derfor være hensiktsmessig å også se på verktøy som kan automatiskere deler av den generelle prosessen for å oppgradere tredjeparts avhengigheter.

Dette er en liste over verktøy som gir beskjed når det er kommet en ny versjon av en avhengighet og de kan også automatisk lage pull requests. Disse verktøyene vil gi beskjed om nye versjoner uavhengig av om det er en sikkerhetsrelatert oppgradering.

- [Mend Renovate](https://www.mend.io/free-developer-tools/renovate/) (Python, Java, JavaScript, C#, Go, ++)
- [Dependabot](https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates) (Github) (Python, Java, JavaScript, C#, Go, ++)
