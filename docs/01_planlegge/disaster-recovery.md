---
sidebar_position: 3
---

# Disaster Recovery

<WorkInProgress />

_Disaster Recovery_ i planleggingsfasen handler om å utvikle et planverk for hva som skal gjøres for å få et system som opplever problemer, raskest mulig tilbake til normaltilstand. Det kan være nyttig å tenkte på dette som "actions on", altså; _"Viss X inntreffer, så gjør vi Y"_.

## Målsetting

Når man setter opp en Disaster Recovery-plan er det mye å tenke på. Under finner du noen av de viktigste temaene man bør diskutere med produkteier/kunde for å komme fram til et fornuftig ambisjonsnivå med hensyn til kostnad vs. nytte. En Disaster Recovery plan bør ofte sees i sammenheng med en [Business Continuity](business-continuity.md) plan, da disse er nært beslektet og kan påvirke hverandre.

Ikke alle prosjekter har behov for å ha en "formelt korrekt" plan. Men det kan fortsatt være fornuftig å la seg inspirere av disse punktene.

- Recovery Time Objective ([RTO](https://en.wikipedia.org/wiki/disaster_recovery#Recovery_Time_Objective))
  - Definerer hva som akseptabel tid for å oppnå normaltilstand etter svikt.
- Recovery Point Objective ([RPO](https://en.wikipedia.org/wiki/disaster_recovery#Recovery_Point_Objective))
  - Definerer hva som er akseptabelt datatap (målt i tid). Merk at RPO kan være ulik for ulike deler av et system, for eksempel kan man akseptere at generert eller midlertidig data blir tapt, mens transaksjonsdata må ha kopier hvert kvarter.
- Service Level Agreement ([SLA](https://en.wikipedia.org/wiki/Service-level_agreement))
  - Hva er tilgjengeligheten for komponentene ditt system bruker. For eksempel hva lover Azure av tilgjengelighet på sine tjenester
  - Hva er den beregnede/sammensatte SLA'en du kan tilby dine konsumenter videre, det vil si hvor tilgjengelig er systemet ditt sett som en helhet

## Personer og roller

Det er viktig å vite hvem man skal kontakte når man står i en situasjon hvor unødvendig tidsbruk kan bli kostbart. Tenk igjennom:

- Hvem skal kontaktes ved sikkerhetshendelser?
  - Hvem er kontaktperson _inn_ i teamet når det oppdages sikkerhetshendelser på utsiden?
  - Hvem er kontaktpersoner for sikkerhet hos kunden?
- Hvem godkjenner at en gjennopprettingsprosess iverksettes?
  - Gjennopretting av et system vil ofte føre til tap av data i en periode, dette koster penger
  - Gjennoprettingsprosessen kan ikke alltid gjennomføres uten av systemet blir tatt ned
- Hvem kan utføre gjennopprettingen?
  - Trenger du spesielle rettigheter?
  - Trenger man støtte fra eksterne, for eksempel for å legge inn rettigheter i et eksternt system?

## Gjennoppretting

Det vil ikke være nødvendig å gjennskape tjenestene i alle _disaster_ hendelser. Ofte man man slippe unna med mindre omfattende, manuell feilretting. Allikevell bør man ha en plan for fullstendig gjennoppretting. Har man det kan man redde seg fra de fleste situasjoner.

- Fysisk infrastruktur (brann, flom, jordskjelv, etc.)
  - Har vi servere et annet sted vi kan benytte?
  - Kan vi flytte til et alternativt datasenter?
- Virtuell infrastruktur
  - Kan infrastruktur gjenskapes korrekt og raskt nok?
  - Dokumenter ressurser, avhengigheter, og operasjonelleprosedyrer i en [runbook](../07_drifte/08_runbook.md)
  - Her vil bruk av Infrastructure as Code (IaC) være et viktig bidrag
- Data og databaser
  - Total / bulkgjennopretting: Hvordan gjenoppretter du store mengder data / hele volumer?
  - Enkeltfiler: Hvordan gjenoppretter du en enkelt fil?
  - Les mer om [backup](../07_drifte/07_storage.md)
- Støttesystemer
  - Husk at støttesystemer kan spille en viktig rolle i det totale systmet. Disse må også kunne erstattes eller gjennopprettes ved hendelser
  - Eksempelvis: Git, CI-pipeline, logging og monitorering

## Scenarier som kan diskuteres

- Slettet tjeneste: Hvordan gjenoppretter du en tjeneste som har blitt slettet?
- Korrupt tjeneste: Reparerer eller gjenoppretter man en VM eller andre tjenester med problemer?
- Utilgjengelig tjeneste: Hva skjer om tjenestene blir utilgjengelige? Her trenger du definisjonen av hva som er midlertidig / kortvarig nedetid. Skal du deploye ny tjeneste, har du allerede en som kjører som hot-swap eller går det greit uten en periode?
- Kompromittert sikkerhet: Hvordan håndterer du det når et passord har blitt lekket på noe vis?
- Utgått passord: hvordan gjenopptar du driften hvis et passord eller sertifikat har utløpt? (Hint: prøv å unngå dette)
- Kompromittert identitet / tjenestebruker: Hva gjør du hvis en managed identitet eller en tjenestebruker har blitt kompromittert?
- Utilgjengelige passord: Hva gjør du hvis key vaulttjenesten i regionen du bruker går ned? Har du backup og failover i en annen region?
- Malware: Hvordan gjenoppretter du systemet etter et cryptolockerangrep? Trenger du en delvis eller total gjenoppbygging av alle tjenester?
- Konfidensialitetsbrudd: Hvordan håndterer du at noen har kommet seg inn i tjenesten(e) du drifter?
- Kompromittert admin: Trenger du å planlegge for hva som skjer om eieren av subscription sletter hele Azure-subscriptionen din?
- Kritisk sårbarhet: Hva skjer når noen oppdager en kritisk sårbarhet i din applikasjon? Det kan være lurt å ha protokoller klare for når du skal ta et valg om du stenger tjenesten ned.
