---
title: "Sjekklisten for sikkerhet"
weight: 2
translationKey: checklist
description: >
  Sikkerhet handler ikke bare om tekniske tiltak og kodeskanning, men også mye annet. Denne sjekklisten gir et utgangspunkt for å vurdere sikkerhetsnivå, ansvar og risiko i leveranser, og alle utviklingsteam skal ha et forhold til innholdet med mindre annet er avtalt med kunden. 
---
Det er ikke gitt at alle punktene er relevante i alle prosjekter, eller at innføring av alle tiltak er ønskelig. Hvert enkelt team og leveranseansvarlig må selv vurdere kost/nytte og hvilket ansvar og risiko en påtar seg ved å ikke innføre tiltak. Sikkerhet krever kontinuerlig arbeid, så se over sjekklista jevnlig for å se om det er tiltak som kan eller bør innføres slik at en ikke overser noe. 

Last ned [sjekklisten](https://raw.githubusercontent.com/bouvet/sikkerhet.bouvet.no/main/docs/checklist.md) og implementer den som en del av kildekoden i ditt prosjekt!

## Planlegge
1.	[Er det klart hvilket ansvar vi har i leveransen og er øvrig ansvar klart fordelt?](no/planlegge/ansvarsfordeling)
2.	[Er data i systemet klassifisert og håndteres deretter?](no/planlegge/data-og-klassifisering#klassifisering)
3.	[Håndteres data i utvikling- og test-miljø også i henhold til klassifisering?](no/planlegge/data-og-klassifisering#data-til-bruk-under-utvikling-og-testing)
4.	[Dersom applikasjonen blir utilgjengelig i kortere eller lengre perioder, hvilke følger får dette for oss og kunden?](no/planlegge/business-continuity)     
5.	[Er det definert en SLA for applikasjonen?](no/planlegge/business-continuity#kundens-forventninger)
6.	[Ved en hendelse, har vi avklart hvem som skal kontaktes i Bouvet og hos kunden?](no/planlegge/business-continuity#håndtering-av-hendelser)
7.	[Er det definert en plan for hvordan og hvor ofte backup skal tas?](no/planlegge/business-continuity#backup)
8.	[Er det definert en plan for disaster recovery?](planlegge/business-continuity#disaster-recovery)
9.	[Har teamet avklart hvilke verktøy som skal brukes og hvordan disse skal håndteres?](no/planlegge/verktoy-og-bruk)
10. [Er det definert kontrollmekanismer for å opprettholde sikkerhet i prosjektet?](no/planlegge/sikkerhetskontrollpunkt) 

## Designe
1.	[Er det klart hvilke sikkerhetskrav som gjelder for løsningen?](designe/sikkerhetskrav) 
2.	[Er nødvendige skisser/diagrammer av systemet laget og oppdatert?](designe/systemskisser)
3.	[Har teamet den nødvendige oversikten over nettverket som systemet bruker?](designe/nettverk)
4.	[Er miljøene segregert for å redusere eksponering av hendelser?](designe/segregering) 
5.	[Er det satt opp nødvendig autentisering på tilgang til systemet?](designe/autentisering#autentisering)
6.	[Er det satt opp nødvendig autorisering på handlinger i systemet?](designe/autentisering#autorisering) 
7.	[Er det gjennomført trusselmodellering av løsningen?](designe/trusselmodellering)
8.	[Har teamet den nødvendige kompetansen for prosjektet?](designe/kompetanseheving)

## Utvikle
1.	[Er utviklingsmiljøene godt beskrevet?](utvikle/utviklingsmiljoer) 
2.	[Håndteres hemmeligheter og liknende i henhold til gjeldende best-practice?](utvikle/hemmeligheter) 
3.	[Valideres data som hentes fra andre systemer?](utvikle/datavalidering) 
4.	[Er det rutiner for å sikre mot dagens vanligste angrepstyper?](utvikle/sikkerhetspraksiser)
5.	[Er det rutiner for å sikre seg mot software supply chain angrep?](utvikle/software-supply-chain)
6.	[Er det rutiner for å sikre interne komponenter som driftes av teamet?](utvikle/interne-komponenter)
7.	[Analyseres sikkerheten gjennom testing eller annen form for analyse?](utvikle/sikkerhetstesting)
8.	[Er nødvendig informasjon om systemet dokumentert, oppdatert og lagret på et sikkert sted?](utvikle/dokumentasjon)

## Deploye
1.	[Er det satt opp automatiserte sikkerhetstiltak?](deploye/cicd) 
2.  [Har teamet et forhold til sikring av byggmiljø?](deploye/bygg)
3.  [Kjøres det review i forkant av deployment?](deploye/deploy)
4.	[Er det planlagt for penetrasjonstesting i forbindelse med deployment?](deploye/pentesting) 

## Forvalte
1.	[Har teamet verifisert at nettverksdiagrammet er korrekt implementert?](forvalte/verifisering-av-design)
2.	[Dersom kunde eller andre krever audit av løsningen, har teamet planlagt for hvordan dette kan foregå?](forvalte/audit) 
3.	[Er det satt opp nødvendig logging for å oppdage og få oversikt over uønskede hendelser?](forvalte/logging-monitorering)
4.	[Lagres loggene slik at de ikke kan manipuleres?](forvalte/logging-monitorering#hvordan-logger-vi)
5.	[Har teamet en rutine for å sikre mot sårbare avhengigheter?](forvalte/avhengighetshandtering)
6.	[Har teamet en rutine for å øve på gjenoppretting av systemet?](forvalte/preparedness)
7.	[Har teamet en prosedyre for hendelseshåndtering og en beredskapsplan dersom løsningen angripes eller går ned?](forvalte/hendelseshandtering)