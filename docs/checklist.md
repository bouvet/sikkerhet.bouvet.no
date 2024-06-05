--- 
title: Sjekklisten for sikkerhet
---

# Sjekklisten for sikkerhet
Denne sjekklisten kan brukes som et startpunkt for å vurdere prosjektets sikkerhet.

Her finner du en liste med JA/NEI spørsmål som hvert utviklingsteam burde besvare.  
Målet er å svare JA på alle spørsmål, men dette er selvsagt åpent for vurdering av systemet og kundens behov.
- Svares det JA på et punkt skal det forklares hvordan dette er løst.
- Svares det NEI på et punkt skal det forklares hvorfor det ikke er løst eller settes en frist for ny vurdering.

Last ned [sjekklisten](https://raw.githubusercontent.com/bouvet/sikkerhet.bouvet.no/main/docs/checklist.md) og implementere den som en del av kildekoden i ditt prosjektet.

## Planlegge
1.	Ansvarsfordeling: Er det klart hvilket ansvar vi har i leveransen og er øvrig ansvar klart fordelt? Er det risiko for at det kan oppstå forvirring rundt ansvar i fremtiden, eksempelvis i forbindelse med sikkerhetshendelser?
    * Dersom Bouvet hoster løsningen på vegne av kunde, faller den inn under vår sertifisering på ISO 27001. 
    * Dette betyr at leveranseteamet har en del ekstra ansvar for informasjonssikkerheten. Referer til SOA for videre informasjon. 
    1.	Dersom vi drifter; hvilket ansvar har vi til infrastruktur og evt IAC? 
    2.	Dersom andre drifter, hvordan overleveres applikasjonen til disse? 
2.	Klassifisering og data 
    1.	Er applikasjonen vurdert mtp klassifisering av data? Hvilke krav følger av klassifiseringen? 
    2.	Er det klart om, og hvorvidt personopplysninger behandles i applikasjonen?
    3.	Hvordan håndteres testdata i prosjektet? Hvordan anonymiseres eller ivaretas eventuelle hensyn til sensitivitet og personvern? 
3.	Disaster recovery, backup og business continuity planning
    1.	Er det definert en SLA for applikasjonen? Hvilke forventninger har kunden? 
    2.	Ved en hendelse, hvem er kontaktpersoner i Bouvet og hos kunden? 
    3.	Er det definert en plan for diaster recovery? 
    4.	Hvordan håndteres backup? Hvor ofte? 
    5.	Hvordan sikres sensitive data ifm backup, herunder også sletting av data?
    6.	Dersom applikasjonen blir utilgjengelig i kortere eller lengre perioder, hvilke følger får dette for oss og kunden?     
        * Finnes det alternativer eller workarounds for løsningen? 
        * Er disse dokumentert og beskrevet, også med tanke på eventuelt ekstraarbeid som må gjøres etter at løsningen bli tilgjengelig igjen? 
4.	Er det definert hvilke verktøy som skal brukes og hvordan disse skal håndteres av teamet? 
    1.	Er kildekodesystemer satt opp med fornuftige policyer? (beskyttet main, code review ifm PR, dokumentering av endringer? 
    2.	CI/CD? 
    3.	 Hvor data utover kildekode lagres?

## Designe
1.	Er det klart hvilke sikkerhetskrav som gjelder for løsningen? 
    1.	Standardkrav
    2.	Lovpålagte krav
    3.	Kundekrav
2.	Er følgende systemskisser og diagrammer laget? 
    1.	Overordnet systemskisse med de viktigste logiske komponentene
    2.	Detaljert nettverksskisse med ressurser, tjenester og nettverk
    3.	Dataflytdiagram
    4.	IAM-diagram
    5.	Viktigste avhengigheter – andre systemer, tjenester, ressurser, onprem/cloud
3.	Hvordan skal segregering mellom miljøene håndteres? 
4.	Hvordan håndteres autentisering og autorisering? 
5.	Er det gjennomført trusselmodellering av løsningen? Hvilke rutiner har teamet for
    1.	Oppfølging av funn
    2.	Oppdatering av trusselmodell
    3.	Mitigering av residuell risiko? 
    4.	Er det klart hvem som eier risiko og ansvar?
6.	Hva er behovet for kompetanseheving innad i teamet, og er det laget en plan for hvordan dette skal håndteres? 

## Utvikle
1.	Er utviklingsmiljøene godt beskrevet? 
    1.	Brukes dedikerte devservere/devbokser, laptoper, annet? 
    2.	Er oppsett godt dokumentert, slik at en unngår feil eller svakheter pga feilkonfigurering?  
2.	Hvordan håndteres secrets, nøkler, connection strings og liknende? 
    1.	Skannes kildekoden for disse? 
    2.	Roteres secrets med jevnlige intervall? 
    3.	Har teamet sjekket at kryptografiske nøkler og hashalgoritmer følger gjeldende best-practice? 
3.	Hvordan valideres data som hentes fra andre systemer? 
4.	Har teamet innført noen rutiner som sikrer mot vanlige angrepstyper, f.eks. som beskrevet av OWASP Top 10? 
5.	Hvordan vurderer og sikrer teamet seg mot software supply-chain-attacks? 
    1.	Gjøres det noen vurderinger ift å bruke en avhengighet vs å lage selv? 
6.	Krever applikasjonen tredjepartssoftware som teamet selv må drifte? F.eks. webservere, meldingstjenester, andre typer serverkomponenter?
    1.	Har teamet en rutine for å holde disse oppdatert? 
7.	Har teamet en rutine for sikkerhetstesting, eller valideres den sikkerhetsmessige kvaliteten på annet vis? 
    1.	SAST
    2.	DAST
8.	Hvordan håndterer teamet dokumentasjon? 
    1.	Hva dokumenteres utover det grunnleggende i denne sjekklista?
    2.	Hvor oppbevares dokumentasjonen? 

## Deploye
1.	Hvordan utføres bygging og deployment av løsningen? 
    1.	Ved bruk av CI/CD, er pipelines underlagt samme regime som applikasjonskoden mtp endringshåndtering? 
2.	Er det definert noen kontroller for når deployment skal feile?
    1.	Utdaterte/sårbare avhengigheter? 
    2.	Testfunn over en viss kritikalitet eller totalsum? 
    3.	Annet?
3.	Er det planlagt for penetrasjonstesting i forbindelse med deployment? 

## Forvalte
1.	Har teamet verifisert at nettverksdiagrammet er korrekt implementert? 
    1.	At forventede porter er åpne mot angitte IP-addresser
    2.	At det ikke er uventede eller unødvendige porter eller tjenester som eksponeres? 
    3.	At trafikk filtreres korrekt av brannmur inn mot løsningen? 
2.	Dersom kunde eller intern revisor krever audit av løsningen, har teamet planlagt for hvordan dette kan foregår? 
    1.	Uten å forstyrre produksjon
    2.	I et eget identisk men isolert miljø?
3.	Logging er viktig dersom en hendelse oppstår. Har teamet kontroll på 
    1.	At en logger nok informasjon til å detektere hendelser – NB: Husk GDPR
    2.	At loggene ikke lagres i et miljø en angriper kan manipulere 
4.	Har teamet en rutine på monitorering av logg og utsjekk av 
    1.	sikkerhetsrelaterte hendelser
    2.	andre uventede hendelser
5.	Har vi en rutine som sikrer at avhengigheter holdes oppdatert, og at teamet vet og forstår sårbarheter som avdekkes i disse? Dette påvirker trusselmodellen samt residuell risiko, og kan tvinge frem aktiviteter for å ta ned risiko. 
6.	Har teamet en prosedyre for hendelseshåndtering og en beredskapsplan dersom løsningen angripes eller går ned, og har denne blitt testet ut innad i teamet? 
7.	Har teamet en rutine for å sjekke at backups blir tatt, og at en faktisk er i stand til å restore ved behov? 
    1.	Gjelder også offline/offsite backups. 
