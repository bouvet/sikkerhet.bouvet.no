--- 
title: Sjekklisten for sikkerhet
---

# Sjekklisten for sikkerhet
Sikkerhet handler ikke bare om tekniske tiltak og kodeskanning, men også mye annet. Denne sjekklisten gir et utgangspunkt for å vurdere sikkerhetsnivå, ansvar og risiko i leveranser, og alle utviklingsteam skal ha et forhold til innholdet med mindre annet er avtalt med kunden. 

Det er ikke gitt at alle punktene er relevante i alle prosjekter, eller at innføring av alle tiltak er ønskelig. Hvert enkelt team må selv vurdere kost/nytte og hvilket ansvar og risiko en påtar seg på de ulike stegene.

Målet er ikke at alle skal gjøre alt som står under, men det er viktig at vi har det i bakhodet og tar det opp i teamet jevnlig for å vurdere om rammene har endret seg.

Last ned [sjekklisten](https://raw.githubusercontent.com/bouvet/sikkerhet.bouvet.no/main/docs/checklist.md) og implementer den som en del av kildekoden i ditt prosjekt!

## Planlegge

1.	Ansvarsfordeling: Er det klart hvilket ansvar vi har i leveransen og er øvrig ansvar klart fordelt? Er det risiko for at det kan oppstå forvirring rundt ansvar i fremtiden, eksempelvis i forbindelse med sikkerhetshendelser?
    * Dersom Bouvet hoster løsningen på vegne av kunde, faller den inn under vår sertifisering på ISO 27001. 
    * Dette betyr at leveranseteamet har en del ekstra ansvar for informasjonssikkerheten. Referer til SOA for videre informasjon. 
    1.	Dersom vi drifter; hvilket ansvar har vi for infrastruktur og evt infrastruktur som kode (IAC)? 
    2.	Dersom andre drifter, hvordan overleveres applikasjonen til disse? 
        1. Har vi en klar ansvarsfordeling mellom oss og andre? 
2.	Klassifisering og data 
    1.	Er applikasjonen vurdert mtp klassifisering av data? Hvilke krav følger av klassifiseringen: 
    2.	Er det klart om, og hvorvidt personopplysninger behandles i applikasjonen?
    3.	Hvordan håndteres testdata i prosjektet? 
        * Hvordan anonymiseres eller ivaretas eventuelle hensyn til sensitivitet og personvern? 
3.	Backup, disaster recovery og business continuity planning
    1.	Er det lagt en plan for hvordan og hvor ofte backup skal tas?  
        * Husk også på backup av kildekodesystemer og andre relevante verktøy!
    2.	Hvordan sikres sensitive data ifm backup, herunder også sletting av data?
    3.	Er det definert en SLA for applikasjonen? 
        * Hvilke forventninger har kunden og har vi rigget oss riktig for å møte disse? 
    4.	Ved en hendelse, har vi avklart hvem som skal kontaktes i Bouvet og hos kunden? 
    5.	Er det definert en plan for disaster recovery?
        * Har teamet dokumentert og eventuelt testet hvordan applikasjonen kan gjøres tilgjengelig vet plutselige hendelser, eksempelvis ved bortfall av datasenter hos oss eller eksterne leverandører, også inkludert skyleverandører?         
    6.	Dersom applikasjonen blir utilgjengelig i kortere eller lengre perioder, hvilke følger får dette for oss og kunden?     
        * Finnes det alternativer eller workarounds for løsningen? 
        * Er disse dokumentert og beskrevet, også med tanke på eventuelt ekstraarbeid som må gjøres etter at løsningen bli tilgjengelig igjen? 
        * Er det andre konsekvenser for oss eller kunde som må hensynstas? 
4.	Har teamet definert hvilke verktøy som skal brukes og hvordan disse skal håndteres? 
    1.	Er kildekodesystemer satt opp med fornuftige policyer? 
        * Dette kan være beskyttet mainbranch, spesifikk branching strategi, code review ifm PR, dokumentering av endringer?
    2.	Pipelines brukt i forbindelse med bygging, deployment, testing og annet?
    3.	Har vi kontroll på hvor data og kildekode lagres? 
        * Noen selskaper har restriksjoner på hvor data kan oppbevares, eksempelvis kun på innenlands datasentre, innenfor EU eller i land dekket av samarbeidsavtaler. 

## Designe
1.	Er det klart hvilke sikkerhetskrav som gjelder for løsningen? 
    1.	Standardkrav
    2.	Kundekrav
    3.	Lovpålagte krav
2.	Er følgende systemskisser og diagrammer laget? 
    * Dette er viktig dokumentasjon for å vurdere risiko og mulige trusler som kan påvirke løsningen, og også i forbindelse med onboarding av teammedlemmer eller handover.
    1.	Overordnet systemskisse med de viktigste logiske komponentene
    2.	Detaljert nettverksskisse med ressurser, tjenester og nettverk
    3.	Dataflytdiagram
    4.	IAM-diagram
    5.	Viktigste avhengigheter – andre systemer, tjenester, ressurser, onprem/cloud
3.	Hvordan skal segregering av miljøer håndteres? 
4.	Hvordan håndteres autentisering og autorisering? 
5.	Er det gjennomført trusselmodellering av løsningen? Har teamet rutiner for
    1.	Jevnlig oppdatering av trusselmodell
    2.	Oppfølging av funn
    3.	Mitigering av risiko? 
    4.	Er det klart hvem som eier risiko og ansvar - hvilken risiko kan aksepteres?
        * Dersom den totale risikoen overgår en gitt grense bør teamet vurdere en dedikert periode for å ta ned risiko til akseptabelt nivå.  
6.	Hva er behovet for kompetanseheving innad i teamet, og er det laget en plan for hvordan dette skal håndteres? 

## Utvikle
1.	Er utviklingsmiljøene godt beskrevet? 
    1.	Brukes dedikerte devservere/devbokser, laptoper, annet? 
        * Har teamet et kontaktpunkt inn mot leverandøren av disse?
    2.	Er oppsett godt dokumentert, slik at en unngår feil eller svakheter pga feilkonfigurering?
        * Gjelder både utviklingsmiljø og kjøremiljø.  
2.	Hvordan håndteres secrets, nøkler, connection strings og liknende? 
    1.	Skannes kildekoden for disse? 
    2.	Roteres secrets med jevnlige intervall? 
    3.	Har teamet sjekket at kryptografiske nøkler og hashalgoritmer følger gjeldende best-practice? 
3.	Hvordan valideres data som hentes fra andre systemer? 
4.	Har teamet innført noen rutiner som sikrer mot vanlige angrepstyper, f.eks. som beskrevet i OWASP Top 10?
5.	Hvordan vurderer og sikrer teamet seg mot software supply-chain-attacks? 
    1.	Gjøres det noen vurderinger ift å bruke en avhengighet vs å lage selv? 
6.	Krever applikasjonen tredjepartssoftware som teamet selv må drifte? F.eks. webservere, meldingstjenester, andre typer serverkomponenter?
    1.	Har teamet en rutine for å holde disse oppdatert? 
    2.  Inkluderes disse i eventuelle trusselvurderinger?
7.	Har teamet en rutine for sikkerhetstesting, eller valideres dette på annet vis? 
    1.	SAST
    2.	DAST
8.	Hvordan håndterer teamet dokumentasjon? 
    1.	Hva dokumenteres utover det grunnleggende i denne sjekklista?
    2.	Hvor oppbevares dokumentasjonen? 
    3.  Har teamet en rutine for å holde dokumentasjon oppdatert? 

## Deploye
1.	Hvordan utføres bygging og deployment av løsningen? 
    1.	Ved bruk av pipelines, er disse underlagt samme regime som applikasjonskoden mtp endringshåndtering? 
2.	Er det definert noen grenser for når deployment skal feile eller avbrytes?
    1.	Utdaterte/sårbare avhengigheter? 
    2.	Funn over gitt kritikalitet i forbindelse med automatisert sikkerhetstesting? 
    3.  Total residuell risiko fra trusselmodell?
    4.	Annet?
3.	Er det planlagt for penetrasjonstesting i forbindelse med deployment? 

## Forvalte
1.	Har teamet verifisert at nettverksdiagrammet er korrekt implementert? 
    1.	At forventede porter er åpne mot angitte IP-addresser
    2.	At det ikke er uventede eller unødvendige porter eller tjenester som eksponeres? 
    3.	At trafikk filtreres korrekt av brannmur inn mot løsningen? 
2.	Dersom kunde eller andre krever audit av løsningen, har teamet planlagt for hvordan dette kan foregå? 
    * Slik testing bør kunne gjennomføres på reelle data, men gjerne i et eget isolert miljø. 
3.	Logging er viktig dersom en hendelse oppstår. Har teamet kontroll på 
    1.	At en logger nok informasjon til å detektere hendelser – NB: Husk GDPR
    2.	At loggene ikke lagres i et miljø en angriper kan manipulere 
4.	Har teamet en rutine på monitorering av logg og utsjekk av 
    1.	sikkerhetsrelaterte hendelser
    2.	andre uventede hendelser
    3.  For relevante funn, vet teamet hvem de skal eskalere til - sikkerhet- eller driftsteam hos Bouvet, kunde eller liknende?
5.	Har vi en rutine som sikrer at avhengigheter holdes oppdatert, og at teamet vet og forstår sårbarheter som avdekkes i disse? Dette påvirker trusselmodellen samt residuell risiko, og kan tvinge frem aksjoner for å ta ned risiko. 
6.	Har teamet en prosedyre for hendelseshåndtering og en beredskapsplan dersom løsningen angripes eller går ned, og har denne blitt testet ut internt i teamet eller med kunde? 
7.	Har teamet en rutine for å sjekke at backups blir tatt, og testet at en faktisk er i stand til å restore ved behov? 
    1.	Gjelder også offline/offsite backups. 
