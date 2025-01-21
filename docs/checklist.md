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
4.	[Er miljøene segregert for å redusere eksponering av hendelser?](./02_designe/03_segregering.md) 
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
1.	[Er det satt opp automatiserte sikkerhetstiltak?](./04_deploye/01_cicd.md) 
2.  [Har teamet et forhold til sikring av byggmiljø?](./04_deploye/02_bygg.md)
3.  [Kjøres det review i forkant av deployment?](./04_deploye/03_deploy.md)
4.	[Er det planlagt for penetrasjonstesting i forbindelse med deployment?](./04_deploye/04_pentesting.md) 

## Forvalte
1.	[Har teamet verifisert at nettverksdiagrammet er korrekt implementert?](./05_forvalte/01_verifisering_av_design.md)
2.	[Dersom kunde eller andre krever audit av løsningen, har teamet planlagt for hvordan dette kan foregå?](./05_forvalte/02_audit.md) 
3.	[Er det satt opp nødvendig logging for å oppdage og få oversikt over uønskede hendelser?](./05_forvalte/03_logging_monitorering.md)
4.	[Lagres loggene slik at de ikke kan manipuleres?](./05_forvalte/03_logging_monitorering.md#hvordan-logger-vi)
5.	[Har teamet en rutine for å sikre mot sårbare avhengigheter?](./05_forvalte/04_forvaltning_avhengigheter.md)
6.	[Har teamet en rutine for å øve på gjenoppretting av systemet?](./05_forvalte/05_preparedness.md)
7.	[Har teamet en prosedyre for hendelseshåndtering og en beredskapsplan dersom løsningen angripes eller går ned?](./05_forvalte/06_incident_response.md)
