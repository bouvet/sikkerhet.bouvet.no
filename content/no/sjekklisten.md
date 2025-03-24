---
title: "Sjekklisten for sikkerhet"
weight: 2
translationKey: checklist
description: >
  Sikkerhet handler ikke bare om tekniske tiltak og kodeskanning, men også mye annet. Denne sjekklisten gir et utgangspunkt for å vurdere sikkerhetsnivå, ansvar og risiko i leveranser, og alle utviklingsteam skal ha et forhold til innholdet med mindre annet er avtalt med kunden. 
---
Sist endret:

Det er ikke gitt at alle punktene er relevante i alle prosjekter, eller at innføring av alle tiltak er ønskelig. Hvert enkelt team og leveranseansvarlig må selv vurdere kost/nytte og hvilket ansvar og risiko en påtar seg ved å ikke innføre tiltak. Sikkerhet krever kontinuerlig arbeid, så se over sjekklista jevnlig for å se om det er tiltak som kan eller bør innføres slik at en ikke overser noe. 

Last ned sjekklisten og implementer den som en del av kildekoden i ditt prosjekt!

## Planlegge
1.	[Er det klart hvilket ansvar vi har i leveransen og er øvrig ansvar klart fordelt?]({{< ref "planlegge/ansvarsfordeling.md" >}})
2.	[Er data i systemet klassifisert og håndteres deretter?]({{< ref "planlegge/data-og-klassifisering#klassifisering.md" >}})
3.	[Håndteres data i utvikling- og test-miljø også i henhold til klassifisering?]({{< ref "planlegge/data-og-klassifisering#data-til-bruk-under-utvikling-og-testing.md" >}})
4.	[Dersom applikasjonen blir utilgjengelig i kortere eller lengre perioder, hvilke følger får dette for oss og kunden?]({{< ref "planlegge/business-continuity.md" >}})
5.	[Er det definert en SLA for applikasjonen?]({{< ref "planlegge/business-continuity#kundens-forventninger.md" >}})
6.	[Ved en hendelse, har vi avklart hvem som skal kontaktes i Bouvet og hos kunden?]({{< ref "planlegge/business-continuity#håndtering-av-hendelser.md" >}})
7.	[Er det definert en plan for hvordan og hvor ofte backup skal tas?]({{< ref "planlegge/business-continuity#backup.md" >}})
8.	[Er det definert en plan for disaster recovery?]({{< ref "planlegge/business-continuity#disaster-recovery.md" >}})
9.	[Har teamet avklart hvilke verktøy som skal brukes og hvordan disse skal håndteres?]({{< ref "planlegge/verktoy-og-bruk.md" >}})
10. [Er det definert kontrollmekanismer for å opprettholde sikkerhet i prosjektet?]({{< ref "planlegge/sikkerhetskontrollpunkt.md" >}})

## Designe
1.	[Er det klart hvilke sikkerhetskrav som gjelder for løsningen?]({{< ref "designe/sikkerhetskrav.md" >}})
2.	[Er nødvendige skisser/diagrammer av systemet laget og oppdatert?]({{< ref "designe/systemskisser.md" >}})
3.	[Har teamet den nødvendige oversikten over nettverket som systemet bruker?]({{< ref "designe/nettverk.md" >}})
4.	[Er miljøene segregert for å redusere eksponering av hendelser?]({{< ref "designe/segregering.md" >}})
5.	[Er det satt opp nødvendig autentisering på tilgang til systemet?]({{< ref "designe/autentisering#autentisering.md" >}})
6.	[Er det satt opp nødvendig autorisering på handlinger i systemet?]({{< ref "designe/autentisering#autorisering.md" >}})
7.	[Er det gjennomført trusselmodellering av løsningen?]({{< ref "designe/trusselmodellering.md" >}})
8.	[Har teamet den nødvendige kompetansen for prosjektet?]({{< ref "designe/kompetanseheving.md" >}})

## Utvikle
1.	[Er utviklingsmiljøene godt beskrevet?]({{< ref "utvikle/utviklingsmiljoer.md" >}})
2.	[Håndteres hemmeligheter og liknende i henhold til gjeldende best-practice?]({{< ref "utvikle/hemmeligheter.md" >}})
3.	[Valideres data som hentes fra andre systemer?]({{< ref "utvikle/datavalidering.md" >}})
4.	[Er det rutiner for å sikre mot dagens vanligste angrepstyper?]({{< ref "utvikle/sikkerhetspraksiser.md" >}})
5.	[Er det rutiner for å sikre seg mot software supply chain angrep?]({{< ref "utvikle/software-supply-chain.md" >}})
6.	[Er det rutiner for å sikre interne komponenter som driftes av teamet?]({{< ref "utvikle/interne-komponenter.md" >}})
7.	[Analyseres sikkerheten gjennom testing eller annen form for analyse?]({{< ref "utvikle/sikkerhetstesting.md" >}})
8.	[Er nødvendig informasjon om systemet dokumentert, oppdatert og lagret på et sikkert sted?]({{< ref "utvikle/dokumentasjon.md" >}})

## Deploye
1.	[Er det satt opp automatiserte sikkerhetstiltak?]({{< ref "deploye/cicd.md" >}})
2.  [Har teamet et forhold til sikring av byggmiljø?]({{< ref "deploye/bygg.md" >}})
3.  [Kjøres det review i forkant av deployment?]({{< ref "deploye/deploy.md" >}})
4.	[Er det planlagt for penetrasjonstesting i forbindelse med deployment?]({{< ref "deploye/pentesting.md" >}})

## Forvalte
1.	[Har teamet verifisert at nettverksdiagrammet er korrekt implementert?]({{< ref "forvalte/verifisering-av-design.md" >}})
2.	[Dersom kunde eller andre krever audit av løsningen, har teamet planlagt for hvordan dette kan foregå?]({{< ref "forvalte/audit.md" >}})
3.	[Er det satt opp nødvendig logging for å oppdage og få oversikt over uønskede hendelser?]({{< ref "forvalte/logging-monitorering.md" >}})
4.	[Lagres loggene slik at de ikke kan manipuleres?]({{< ref "forvalte/logging-monitorering#hvordan-logger-vi.md" >}})
5.	[Har teamet en rutine for å sikre mot sårbare avhengigheter?]({{< ref "forvalte/avhengighetshandtering.md" >}})
6.	[Har teamet en rutine for å øve på gjenoppretting av systemet?]({{< ref "forvalte/preparedness.md" >}})
7.	[Har teamet en prosedyre for hendelseshåndtering og en beredskapsplan dersom løsningen angripes eller går ned?]({{< ref "forvalte/hendelseshandtering.md" >}})
