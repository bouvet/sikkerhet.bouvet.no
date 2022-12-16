---
sidebar_position: 3
---

# Disaster Recovery

import WorkInProgress from '../_work_in_progress.mdx'

<WorkInProgress />

_Disaster Recovery_ handler om hva vi kan gjøre _prevantivt_ for å få et system som opplever problemer, raskest mulig tilbake til normaltilstand

- Kan infrastruktur gjenskapes korrekt og raskt nok?
  - Infrastructure as Code (Suppler med dokumentasjon)
  - Dokumenter grundig oppsett, skriv runbook
  - Automatiser
  - Test!
  - Støttesystemer (git, CI, logging)
- Backup

## Diskusjonstemaer til disaster recovery

Når man setter opp en Disaster Recovery-plan er det mye å tenke på. Under finner du en liste med diskusjonstemaer du kan diskutere med produkteier / kunde. I noen tilfeller settes det opp en BCDR-plan, som også inneholder [Business Continuity](business-continuity.md), siden disse er nært beslektet.

Disse emnene bør man ha kontroll på for alle systemer

### Recovery Time Objective (RTO)

[Recovery Time Objective (RTO)](https://en.wikipedia.org/wiki/disaster_recovery#Recovery_Time_Objective) definerer hva som akseptabel tid for å oppnå normaltilstand etter svikt.

### Recovery Point Objective (RPO)

[Recovery Point Objective (RPO)](https://en.wikipedia.org/wiki/disaster_recovery#Recovery_Point_Objective) definerer hva som er akseptabelt datatap etter svikt (målt i tid). Merk at RPO kan være ulik for ulike deler av et system, for eksempel kan man kanskje akseptere at generert eller midlertidig data blir tapt, mens transaksjonsdata må ha kopier hvert 15. minutt.

### Service Level Agreement (SLA)

En diskusjon rundt service level agreement (SLA) sier noe om to deler av systemet:

- Hva er tilgjengeligheten for komponentene ditt system bruker, for eksempel hva lover Azure av tilgjengelighet på sine komponenter
- Hva er den beregnede / sammensatte SLA'en du kan tilby dine konsumenter videre, det vil si hvor tilgjengelig er systemet ditt sett som en helhet

#### Definer hva som er midlertidig / kortvarig nedetid

En viktig del av SLA er å vite grensene mellom hva som er et midlertidig problem og hva som krever at man starter på et BCDR-scenario. Skal man starte en recovery om en tjeneste er nede i fem minutter, eller kan den være nede i et par timer uten at noe påvirkes for mye?

### Automatisk eller manuell failover

Skal systemene gjøre valg om failover automatisk, eller skal dette startes manuelt?

## Personer og roller

Det er viktig å vite hvem man skal kontakte når man står i en BCDR-situasjon. Tenk igjennom:

- Hvem godkjenner at en recoveryprosess gjøres?
  - Gjennopretting av data / et system vil ofte føre til tap av data i en periode, dette koster penger
  - Gjennoprettingsprosessen kan ta en stund, noe som fører til at systemet går helt ned
- Hvem kan kontaktes med sikkerhetsspørsmål?
  - Hvem er kontaktperson _inn_ i teamet når det oppdages sikkerhetsspørsmål på utsiden?
  - Hvem er kontaktpersoner for sikkerhet hos kunden?
- Hvem kan utføre gjennopprettingen?
  - Trenger du spesielle rettigheter for å utføre dette?
  - Trenger man eksterne kontakter for å utføre dette, for eksempel for å legge inn rettigheter i et eksternt system?

## Scenarier som kan diskuteres

### Gjennoppretting av data

De fleste systemer inneholder flere typer data, både konfigurasjon, programkode, permanent og midlertidig data.

- Korrupt data: Hvordan forholder du deg til at data eller konfigurasjon har blitt korrupt?
- Gjennopretting av data
  - Enkeltfiler: Hvordan gjenoppretter du en enkelt fil?
  - Total / bulkgjennopretting: Hvordan gjenoppretter du store mengder data / hele volumer?

### Gjenoppretting av tjenester

Tjenester og VM'er kan enten bli utilgjengelige, korrupte eller slettet helt.

- Slettet tjeneste: Hvordan gjenoppretter du en tjeneste som har blitt slettet?
- Korrupt tjeneste: Reparerer eller gjenoppretter man en VM eller andre tjenester med problemer?
- Utilgjengelig tjeneste: Hva skjer om tjenestene blir utilgjengelige? Her trenger du definisjonen av hva som er midlertidig / kortvarig nedetid. Skal du deploye ny tjeneste, har du allerede en som kjører som hot-swap eller går det greit uten en periode?

### Passord, sertifikater og identiteter

Passord, sertifikater og identiter er kritiske for å vedlikeholde drift i systemer, og kan få flere ulike problemer.

- Kompromittert sikkerhet: Hvordan håndterer du det når et passord har blitt lekket på noe vis?
- Utgått passord: hvordan gjenopptar du driften hvis et passord eller sertifikat har utløpt? (Hint: prøv å unngå dette)
- Kompromittert identitet / tjenestebruker: Hva gjør du hvis en managed identitet eller en tjenestebruker har blitt kompromittert?
  - Slettet / deaktivert identitet / tjenestebruker: Hva gjør du hvis den samme brukeren har blitt slettet eller deaktivert?
- Utilgjengelige passord: Hva gjør du hvis key vaulttjenesten i regionen du bruker går ned? Har du backup og failover i en annen region?

### Sikkerhetsproblemer

Sikkerhet kan påvirke tjenesten på mange måter, enten som utløsende årsak eller som en driftsforstyrrelse.

- Malware / cryptolockerangrep: Hvordan gjenoppretter du systemet etter et cryptolockerangrep? Trenger du en delvis eller total gjenoppbygging av alle tjenester?
- Sikkerhetsbrudd: Hvordan håndterer du at noen har kommet seg inn i tjenesten(e) du drifter?
- Kompromittert admin / subscriptioneier: Trenger du å planlegge for hva som skjer om eieren av subscription sletter hele Azure-subscriptionen din (eller tilsvarende)? Dette er sannsynligvis out of scope de fleste steder, men kan være relevant i noen tilfeller.
- Kritisk sårbarhet: Hva skjer når noen oppdager en kritisk sårbarhet i din applikasjon, eller i pakker du bruker fra for eksempel Nuget eller NPM? Det kan være lurt å ha protokoller klare for når du skal ta et valg om du stenger tjenesten ned.
