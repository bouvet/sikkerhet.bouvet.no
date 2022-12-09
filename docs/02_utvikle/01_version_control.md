---
sidebar_position: 1
---

# Versjonskontroll

- [Versjonskontroll](#versjonskontroll)
  - [Tilgjengelighet og skrivetilgang](#tilgjengelighet-og-skrivetilgang)
  - [Beskyttelse av brancher](#beskyttelse-av-brancher)
  - [Bruke en ferdig løsning eller hoste selv](#bruke-en-ferdig-løsning-eller-hoste-selv)
  - [Backup](#backup)

Bruk av et versjonskontroll er viktig for å holde orden på utviklingen av et prosjekt. Systemet inneholder som minimum kildekode, men kan også inneholde [dokumentasjon](02_documentation.md), definisjon av [CI/CD](../03_bygge/bruk-av-ci-cd.md)-systemer, releases av systemet og mye mer. Det finnes flere ulike systemer og tjenester for versjonskontroll. I dag er de fleste bygget rundt verktøyet [`git`](https://en.wikipedia.org/wiki/Git), med datalagring i skytjenester som [GitHub](https://www.github.com), [Azure DevOps Repos](https://dev.azure.com) eller selv-hostede løsninger.

## Tilgjengelighet og skrivetilgang

I Github kan prosjekter ha tre ulike tilgjengelighetsnivåer. Dette kan velges per prosjekt, eller være styrt av organisasjonen. Andre tjenester har tilsvarende muligheter.

- Public: tilgjengelig for alle
- Internal: tilgjengelig for alle i samme Github-organisasjon
- Private: tilgjengelig for de du har gitt tilgang til

:::caution Advarsel

Selv om et repository er privat eller internt nå bør du ha i tankene at det kan gjøres om til public senere, enten med vilje eller et uhell. Ikke last opp eller gjør tilgengelig informasjon som du ikke tåler at kommer ut.

:::

I tillegg til hvem som kan lese repoet bør du velge hvem som får skrive til det. Hvilke muligheter du har avhenger av om repoet er tilkoblet en organisasjon eller ikke, og hvordan organisasjonen er konfigurert. Punktene under bør sjekkes:

- Hvem kan kan skrive til repoet (lage egne branches eller endre eksisterende)?
- Hvem kan lage pull requests mot repoet?
- Hvem kan konfigurere / administrere repoet?
  - Minst to personer bør ha admintilgang, spesielt om repoet ikke er eid av en organisasjon
- Hvem kan godkjenne og merge pull requests?
- Hvem kan endre og starte actions?

## Beskyttelse av brancher

En av de mer grunnleggende beskyttelsene man bør sette på er beskyttelse av brancher, spesielt de som blir benyttet i [CI/CD](../03_bygge/bruk-av-ci-cd.md). Den vanligste beskyttelsen som settes på er krav til bruk av pull requests med et visst antall personer som godkjenner. Andre vanlige muligheter er å kjøre automatiske tester, sikkerhetssjekker av [pakker](biblioteker.md) eller å ha krav til alle innsjekkinger av kode er signerte.

## Bruke en ferdig løsning eller hoste selv

Det er forskjeller mellom å hoste versjonskontroll selv og å bruke en hostet tjeneste som GitHub. Når du hoster selv, har du full kontroll over serveren, nettverket og oppsett av tjenesten. Dette kan være en fordel hvis du har spesielle behov eller krav til sikkerhet og integrasjon. På den annen side krever dette også at du setter opp og administrerer serveren selv, noe som kan være tidkrevende og komplisert.

En hostet tjeneste tar seg av serverdrift, administrasjon og tilgangsstyring for deg, men kan gi litt færre valg. Dette kan være en fordel om du ikke ønsker å bruke tid på drift, men gir deg mindre kontrol over konfigurasjonen og sikkerheten.

## Backup

Github-repositories inneholder mye informasjon man ikke kan miste. Avhengig av bruken kan man ha både kildekode, actions, issues og secrets / konfigurasjon som trenger sikkerhetskopiering.

:::caution Advarsel

Ikke baser deg på at alle utviklere har lokale kopier av kode på sine laptoper, det er ikke en pålitelig eller fullverdig backup

:::

Noen organisasjoner setter opp backup på organisasjonsnivå, mens andre lar det være opp til enkeltteam å konfigurere backup.

- Finn ut om organisasjonen har felles backupløsning
- Hvis ja
  - Finn ut hva de tar backup av
  - Finn prosedyrer og kontaktpunkter for gjenoppretting
- Hvis nei så må du sette opp en egen løsning
  - Sjekk om det er en godkjent / anbefalt metode i organisasjonen
  - Sjekk kommersielle aktører du kjøper fra
    - Er tjenesten godkjent av din bedrift?
    - Hvor lagres dataene?
    - Hvem har tilgang til dine data?
    - Kan tjenesten benytte dine data til andre ting?
  - Ta backup av både data (kildekode, actions, issues m.m.) og konfigurasjon. Dokumenter konfigurasjon som ikke kan eksporteres i en backup
- Legg prosedyrer inn i [business continuity](../01_planlegge/business-continuity.md) og [disaster recovery](../01_planlegge/disaster-recovery.md)-planer
