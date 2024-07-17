---
sidebar_position: 3
---

# Business Continuity
:::tip Kort oppsummert
Dersom en katastrofal hendelse oppstår må vi vite hvem som skal kontaktes, og hvilke krav løsningen og leveranseteamet må forholde seg til. Dette går ikke bare på typiske krav relatert til tilgjengelighet men også hvor lang tid en kan bruke på gjenoppretting, hvordan dette skal gjøres og hva som er akseptabelt tap av data.
:::

_Business Continuity Planning_ er _ikke_ utelukkende et IT-teknisk anliggende, men det er vårt ansvar som leverandører av et IT-system å minne kunden på at systemet kan bli utilgjengelig.  
Svaret fra denne planleggingen vil være med å beskrive hvilke krav som stilles til løsningens robusthet og sikkerhetsnivå, og er avgjørende for å finne riktig balanse på kostnad og ytelse hos systemet. 

Her er det viktig å ha et forhold til 
* Kritikaliteten av løsningen
* Eventuelle workarounds dersom løsningen er utilgjengelig
* Konsekvenser eller merarbeid som følge av utilgjengelighet eller når løsningen igjen blir tilgjengelig.

## Kundens forventninger 
Har vi definert en Service Level Agreement (SLA) med kunden som legger føringer på oppetid, tilgjengelighet og liknende, eller har kunden implisitte forventninger til dette? 

Dette må avklares slik at en kjenner konsekvensene nedetid vil få. I mange prosjekter benyttes det skykomponenter der en ikke har kontroll over alle variabler selv. Derfor er det viktig å tidlig i prosjektet gå opp de faktiske behovene med kunden. Vi kan sikre redundans på alle fronter dersom kunden ønsker det, men det koster da deretter. 

Dersom en går opp dette i forkant er det lettere å henvise til dokumentasjon og avtaler når løsningen blir utilgjengelig for å unngå dårlig stemning. 

## Håndtering av hendelser
Alle kunder i Bouvet skal ha et definert kontaktpunkt for  hendelser i Kunder (CRM). Dersom det er andre kontaktpunkter fra teamet inn mot kunde som sikkerhetssenter (SOC) eller liknende er det lurt å dokumentere dette også slik at en kan løse oppståtte hendelser så raskt som mulig. 

Dersom en hendelse oppstår og kunde eller andre har behov for kontakt med teamet, er det vanlige at leveranseleder er det formelle kontaktpunktet i Bouvet-teamet. 

# Backup
Backup er viktig i alle prosjekter. Selv om vi i mange prosjekter ikke har noe ansvar for drift av infrastruktur, kildekodesystemer eller andre verktøy, bør vi gjøre oss kjent med rutiner og begrensninger på området. 

Dersom vi har ansvar for drift har vi også ansvar for at backup gjennomføres. Vanlige begrep her er 
* Recovery Time Objective (RTO) - akseptabel tid for å oppnå normaltilstand etter svikt
* Recovery Point Objective (RPO) - hva er akseptabelt datatap etter svikt (målt i tid)

Løsning for backup og recovery må designes ut ifra disse kravene, og vi må sikre at dette ivaretas. En må sammen med kunden ta stilling til 
* Hvor mye?
  * Hvilken data og systemer skal være underlagt backupregimet. Kan det differensieres?
* Hvor ofte?
  * Skal vi ta backup 1 gang i uken, hver natt, eller hver time?
* Hvor langt tilbake?
  * Hvor lenge skal vi lagre backupene?

En vanlig tilnærming til backup er å kjøre 
* Daglige backups - disse lagres i 30 dager
* Ukentlige backups - disse lagres i 6 måneder
* Månedtlige backups - disse lagres i 2 år

Det er også viktig å ha et forhold til hvor backupene lagres, slik at en kan være best mulig rigget mot katastrofale hendelser. Dette kan løses ved å ha offline og offsite backups, altså backups lagret på eksempelvis tape og oppbevart på en annen fysisk lokasjon enn øvrige backups. 

:::caution Test!
Backup som ikke testes har ingen verdi - innfør rutiner for å teste at du kan restore fra backup!
:::

# Disaster recovery
_Disaster Recovery_ i planleggingsfasen handler om å utvikle et planverk for hva som skal gjøres for å raskest mulig komme tilbake til normaltilstand. Det kan være nyttig å tenkte på dette som "actions on", altså; _"Hvis X inntreffer, så gjør vi Y"_.

## Gjenoppretting

Det vil ikke være nødvendig å gjenskape tjenestene i alle _disaster_ hendelser. Ofte kan man slippe unna med mindre omfattende og manuell feilretting. Uavhengig av dette bør man uansett ha en plan for fullstendig gjennoppretting. Har man det kan man redde seg fra de fleste situasjoner.

* Fysisk infrastruktur (brann, flom, jordskjelv, etc.)
  * Har vi servere et annet sted vi kan benytte?
  * Kan vi flytte til et alternativt datasenter?
* Virtuell infrastruktur
  * Kan infrastruktur gjenskapes korrekt og raskt nok?
  * Dokumenter ressurser, avhengigheter, og operasjonelle prosedyrer
  * Her vil bruk av Infrastructure as Code (IaC) være et viktig bidrag
* Data og databaser
  * Total / bulkgjennopretting: Hvordan gjenoppretter du store mengder data / hele volumer?
  * Enkeltfiler: Hvordan gjenoppretter du en enkelt fil?
* Støttesystemer
  * Husk at støttesystemer kan spille en viktig rolle i det totale systmet. Disse må også kunne erstattes eller gjennopprettes ved hendelser
  * Eksempelvis: Git, CI-pipeline, logging og monitorering

## Scenarier som kan diskuteres

* Slettet tjeneste: Hvordan gjenoppretter du en tjeneste som har blitt slettet?
* Korrupt tjeneste: Reparerer eller gjenoppretter man en VM eller andre tjenester med problemer?
* Utilgjengelig tjeneste: Hva skjer om tjenestene blir utilgjengelige? Her trenger du definisjonen av hva som er midlertidig / kortvarig nedetid. Skal du deploye ny tjeneste, har du allerede en som kjører som hot-swap eller går det greit uten en periode?
* Kompromittert sikkerhet: Hvordan håndterer du det når et passord har blitt lekket på noe vis?
* Utgått passord: hvordan gjenopptar du driften hvis et passord eller sertifikat har utløpt? (Hint: prøv å unngå dette)
* Kompromittert identitet / tjenestebruker: Hva gjør du hvis en managed identitet eller en tjenestebruker har blitt kompromittert?
* Utilgjengelige passord: Hva gjør du hvis key vaulttjenesten i regionen du bruker går ned? Har du backup og failover i en annen region?
* Malware: Hvordan gjenoppretter du systemet etter et cryptolockerangrep? Trenger du en delvis eller total gjenoppbygging av alle tjenester?
* Konfidensialitetsbrudd: Hvordan håndterer du at noen har kommet seg inn i tjenesten(e) du drifter?
* Kompromittert admin: Trenger du å planlegge for hva som skjer om eieren av subscription sletter hele Azure-subscriptionen din?
* Kritisk sårbarhet: Hva skjer når noen oppdager en kritisk sårbarhet i din applikasjon? Det kan være lurt å ha protokoller klare for når du skal ta et valg om du stenger tjenesten ned.

# Veien videre
* [Wikipedia: Disaster Recovery](https://en.wikipedia.org/wiki/IT_disaster_recovery)