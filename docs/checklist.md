--- 
title: Sjekklisten for sikkerhet
---

# Sjekklisten for sikkerhet
Sikkerhet handler ikke bare om tekniske tiltak og kodeskanning, men også mye annet. Denne sjekklisten gir et utgangspunkt for å vurdere sikkerhetsnivå, ansvar og risiko i leveranser, og alle utviklingsteam skal ha et forhold til innholdet med mindre annet er avtalt med kunden. 

Det er ikke gitt at alle punktene er relevante i alle prosjekter, eller at innføring av alle tiltak er ønskelig. Hvert enkelt team og leveranseansvarlig må selv vurdere kost/nytte og hvilket ansvar og risiko en påtar seg ved å ikke innføre tiltak. Sikkerhet krever kontinuerlig arbeid, så se over sjekklista jevnlig for å se om det er tiltak som kan eller bør innføres slik at en ikke overser noe. 

Last ned [sjekklisten](https://raw.githubusercontent.com/bouvet/sikkerhet.bouvet.no/main/docs/checklist.md) og implementer den som en del av kildekoden i ditt prosjekt!

## Planlegge
1.	[Er det klart hvilket ansvar vi har i leveransen og er øvrig ansvar klart fordelt?](./01_planlegge/01_ansvarsfordeling.md)
2.	[Er data i systemet klassifisert og håndteres deretter?](./01_planlegge/02_data_og_klassifisering.md#klassifisering)
3.	[Håndteres data i utvikling- og test-miljø også i henhold til klassifisering?](./01_planlegge/02_data_og_klassifisering.md#data-til-bruk-under-utvikling-og-testing)
4.	[Dersom applikasjonen blir utilgjengelig i kortere eller lengre perioder, hvilke følger får dette for oss og kunden?](./01_planlegge/03_business_continuity.md)     
5.	[Er det definert en SLA for applikasjonen?](./01_planlegge/03_business_continuity.md#kundens-forventninger)
6.	[Ved en hendelse, har vi avklart hvem som skal kontaktes i Bouvet og hos kunden?](./01_planlegge/03_business_continuity.md#håndtering-av-hendelser)
7.	[Er det definert en plan for hvordan og hvor ofte backup skal tas?](./01_planlegge/03_business_continuity.md#backup)
8.	[Er det definert en plan for disaster recovery?](/01_planlegge/03_business_continuity.md#disaster-recovery)
9.	[Har teamet avklart hvilke verktøy som skal brukes og hvordan disse skal håndteres?](./01_planlegge/04_verktoy_og_bruk.md)
10. [Er det definert kontrollmekanismer for å opprettholde sikkerhet i prosjektet?](./01_planlegge/05_sikkerhetsgater.md) 

## Designe
1.	[Er det klart hvilke sikkerhetskrav som gjelder for løsningen?](./02_designe/01_sikkerhetskrav.md) 
2.	[Er nødvendige skisser/diagrammer av systemet laget og oppdatert?](./02_designe/02_systemskisser.md)
3.	[Har teamet den nødvendige oversikten over nettverket som systemet bruker?](./02_designe/02a_network.md)
4.	[Er miljøene segregert for å reduserer eksponering av hendelser?](./02_designe/03_segregering.md) 
5.	[Er det satt opp nødvendig autentisering på tilgang til systemet?](./02_designe/04_autentisering.md#autentisering)
6.	[Er det satt opp nødvendig autorisering på handlinger i systemet?](./02_designe/04_autentisering.md#autorisering) 
7.	[Er det gjennomført trusselmodellering av løsningen?](./02_designe/05_trusselmodellering.md)
8.	[Har teamet den nødvendige kompetansen for prosjektet?](./02_designe/06_kompetanseheving.md)

## Utvikle
1.	[Er utviklingsmiljøene godt beskrevet?](./03_utvikle/01_utviklingsmiljoer.md) 
2.	[Håndteres hemmeligheter og liknende i henhold til gjeldende best-practice?](./03_utvikle/02_secrets.md) 
3.	[Valideres data som hentes fra andre systemer?](./03_utvikle/03_datavalidering.md) 
4.	[Er det rutiner for å sikre mot dagens vanligste angrepstyper?](./03_utvikle/04_sikkerhetspraksiser.md)
5.	[Er det rutiner for å sikre seg mot software supply chain angrep?](./03_utvikle/05_software_supply_chain.md)
6.	[Er det rutiner for å sikre interne komponenter som driftes av teamet?](./03_utvikle/06_interne_komponenter.md)
7.	[Analyseres sikkerheten gjennom testing eller annen form for analyse?](./03_utvikle/08_sikkerhetstesting.md)
8.	[Er nødvendig informasjon om systemet dokumentert, oppdatert og lagret på et sikkert sted?](./03_utvikle/09_dokumentasjon.md)

## Deploye
1.	[Hvordan utføres bygging og deployment av løsningen?](./04_deploye/01_cicd.md) 
    1. Ved bruk av pipelines, er disse underlagt samme regime som applikasjonskoden mtp endringshåndtering? 
    2. [Har teamet et forhold til sikring av byggmiljø?](./04_deploye/02_bygg.md)
    3. [Kjøres det review i forkant av deployment?](./04_deploye/03_deploy.md)
3.	[Er det planlagt for penetrasjonstesting i forbindelse med deployment?](./04_deploye/04_pentesting.md) 

## Forvalte
1.	[Har teamet verifisert at nettverksdiagrammet er korrekt implementert?](./05_forvalte/01_verifisering_av_design.md)
    1.	At forventede porter er åpne mot angitte IP-addresser
    2.	At det ikke er uventede eller unødvendige porter eller tjenester som eksponeres? 
    3.	At trafikk filtreres korrekt av brannmur inn mot løsningen? 
2.	[Dersom kunde eller andre krever audit av løsningen, har teamet planlagt for hvordan dette kan foregå?](./05_forvalte/02_audit.md) 
    * Slik testing bør kunne gjennomføres på reelle data, men gjerne i et eget isolert miljø. 
3.	[Logging er viktig dersom en hendelse oppstår.](./05_forvalte/03_logging_monitorering.md) Har teamet kontroll på 
    1.	at en logger nok informasjon til å detektere hendelser – NB: Husk GDPR
    2.	at loggene ikke lagres i et miljø en angriper kan manipulere 
    4.	sikkerhetsrelaterte hendelser
    5.	andre uventede hendelser
    6.  for relevante funn, vet teamet hvem de skal eskalere til - sikkerhet- eller driftsteam hos Bouvet, kunde eller liknende?
4.	[Har vi en rutine som sikrer at avhengigheter holdes oppdatert](./05_forvalte/04_forvaltning_avhengigheter.md), og at teamet vet og forstår sårbarheter som avdekkes i disse? Dette påvirker trusselmodellen samt residuell risiko, og kan tvinge frem aksjoner for å ta ned risiko. 
5.	[Har teamet en rutine for å sjekke at backups blir tatt](./05_forvalte/05_preparedness.md), og testet at en faktisk er i stand til å restore ved behov? 
    1.	Gjelder også offline/offsite backups. 
6.	[Har teamet en prosedyre for hendelseshåndtering og en beredskapsplan dersom løsningen angripes](./05_forvalte/06_incident_response.md) eller går ned, og har denne blitt testet ut internt i teamet eller med kunde? 
