---
sidebar_position: 1
---

# Versjonskontroll

- [Versjonskontroll](#versjonskontroll)
  - [Beskyttelse av brancher](#beskyttelse-av-brancher)
  - [Bruke en ferdig løsning eller hoste selv](#bruke-en-ferdig-løsning-eller-hoste-selv)
  - [Backup](#backup)
  - [Tilgjengelighet](#tilgjengelighet)

Bruk av et versjonskontroll er viktig for å holde orden på utviklingen av et prosjekt. Systemet inneholder som minimum kildekode, men kan også inneholde [dokumentasjon](02_documentation.md), definisjon av [CI/CD](../03_bygge/bruk-av-ci-cd.md)-systemer, releases av systemet og mye mer. Det finnes flere ulike systemer og tjenester for versjonskontroll. I dag er de fleste bygget rundt verktøyet [`git`](https://en.wikipedia.org/wiki/Git), med datalagring i skytjenester som [GitHub](https://www.github.com), [Azure DevOps Repos](https://dev.azure.com) eller selv-hostede løsninger.

## Beskyttelse av brancher

En av de mer grunnleggende beskyttelsene man bør sette på er beskyttelse av brancher, spesielt de som blir benyttet i [CI/CD](../03_bygge/bruk-av-ci-cd.md). Den vanligste beskyttelsen som settes på er krav til bruk av pull requests med et visst antall personer som godkjenner. Andre vanlige muligheter er å kjøre automatiske tester, sikkerhetssjekker av [pakker](biblioteker.md) eller å ha krav til alle innsjekkinger av kode er signerte.

## Bruke en ferdig løsning eller hoste selv

I noen tilfeller vil du ønske å ha 

## Backup

## Tilgjengelighet

- Bruk versjonskontroll for prosjektet
- Sørg for at produksjons-branchen (ofte `main` eller `master`) er beskyttet
  - Sett gjerne et krav om at pull requests må ha minst to godkjenninger før den kan merges
- Hvor lagres kildekoden?
  - Versjonskontroll skal benyttes. `git` er foretrukket
- On-prem eller i skyen?
  - Backup-rutiner (også av skytjenester)
  - Tilgjengelighet
  - Autentisering
- Public eller private repository?
  - Vurderes per system
