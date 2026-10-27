---
title: "Sjekklisten for sikkerhet"
weight: 2
translationKey: checklist
description: >
  Sikkerhet handler ikke bare om tekniske tiltak og kodeskanning, men også mye annet. Denne sjekklisten gir et utgangspunkt for å vurdere sikkerhetsnivå, ansvar og risiko i leveranser, og alle utviklingsteam bør ha et forhold til innholdet med mindre annet er avtalt med kunden. 
---

Det er ikke gitt at alle punktene er relevante i alle prosjekter, eller at innføring av alle tiltak er ønskelig. Hvert enkelt team og leveranseansvarlig må selv vurdere kost/nytte og hvilket ansvar og risiko en påtar seg ved å ikke innføre tiltak. Sikkerhet krever kontinuerlig arbeid, så se over sjekklista jevnlig for å se om det er tiltak som kan eller bør innføres slik at en ikke overser noe. 

Last ned sjekklisten og implementer den som en del av kildekoden i ditt prosjekt!

## Planlegge
1.	[Er det klart hvilket ansvar vi har i leveransen og er øvrig ansvar klart fordelt?]({{< relref "planlegge/ansvarsfordeling.md" >}})
2.	[Er data i systemet klassifisert og håndteres deretter?]({{< relref "planlegge/data-og-klassifisering.md#klassifisering" >}})
3.	[Håndteres data i utvikling- og test-miljø også i henhold til klassifisering?]({{< relref "planlegge/data-og-klassifisering.md#data-til-bruk-under-utvikling-og-testing" >}})
4.	[Dersom applikasjonen blir utilgjengelig i kortere eller lengre perioder, hvilke følger får dette for oss og kunden?]({{< relref "planlegge/business-continuity.md" >}})
5.	[Er det definert en SLA for applikasjonen?]({{< relref "planlegge/business-continuity.md#kundens-forventninger" >}})
6.	[Ved en hendelse, har vi avklart hvem som skal kontaktes i Bouvet og hos kunden?]({{< relref "forvalte/hendelseshandtering.md#dette-må-teamet-ha-kontroll-på" >}})
7.	[Er det definert en plan for hvordan og hvor ofte backup skal tas?]({{< relref "planlegge/business-continuity.md#backup" >}})
8.	[Er det definert en plan for disaster recovery?]({{< relref "planlegge/business-continuity.md#disaster-recovery" >}})
9.	[Har teamet avklart hvilke verktøy som skal brukes og hvordan disse skal håndteres?]({{< relref "utvikle/utviklingsmiljoer.md#verktoy" >}})
10. [Er det definert kontrollmekanismer for å opprettholde sikkerhet i prosjektet?]({{< relref "planlegge/sikkerhetskontrollpunkt.md" >}})
11. [Dersom løsningen bruker KI, er det avklart hvordan KI-komponenter, modeller og data skal håndteres?]({{< relref "utvikle/dokumentasjon.md#dokumentasjon-av-ki-systemer" >}})

## Designe
1.	[Er det klart hvilke sikkerhetskrav som gjelder for løsningen?]({{< relref "designe/sikkerhetskrav.md" >}})
2.	[Er nødvendige skisser/diagrammer av systemet laget og oppdatert?]({{< relref "designe/systemskisser.md" >}})
3.	[Har teamet den nødvendige oversikten over nettverket som systemet bruker?]({{< relref "designe/nettverk.md" >}})
4.	[Er miljøene segregert for å redusere eksponering av hendelser?]({{< relref "designe/segregering.md" >}})
5.	[Er det satt opp nødvendig autentisering på tilgang til systemet?]({{< relref "designe/autentisering.md#autentisering" >}})
6.	[Er det satt opp nødvendig autorisering på handlinger i systemet?]({{< relref "designe/autentisering.md#autorisering" >}})
7.	[Er det gjennomført trusselmodellering av løsningen?]({{< relref "designe/trusselmodellering.md" >}})
8.	[Har teamet den nødvendige kompetansen for prosjektet?]({{< relref "kompetanseheving.md" >}})
9.	[Dersom løsningen bruker KI, er KI-spesifikke sikkerhetskrav definert?]({{< relref "designe/sikkerhetskrav.md" >}})

## Utvikle
1.	[Er utviklingsmiljøene godt beskrevet?]({{< relref "utvikle/utviklingsmiljoer.md#minimum-som-bør-dokumenteres" >}})
2.	[Håndteres hemmeligheter, nøkler og sertifikater i henhold til gjeldende best-practice?]({{< relref "utvikle/hemmeligheter.md" >}})
3.	[Valideres data som hentes fra andre systemer?]({{< relref "utvikle/datavalidering.md" >}})
4.	[Er det rutiner for å sikre mot dagens vanligste angrepstyper?]({{< relref "utvikle/sikkerhetspraksiser.md" >}})
5.	[Er det rutiner for å sikre seg mot software supply chain angrep?]({{< relref "utvikle/software-supply-chain.md" >}})
6.	[Er det rutiner for å sikre interne komponenter som driftes av teamet?]({{< relref "forvalte/avhengighetshandtering.md#interne-komponenter-som-teamet-drifter-selv" >}})
7.	[Analyseres sikkerheten gjennom testing eller annen form for analyse?]({{< relref "utvikle/sikkerhetstesting.md#statisk-kodeanalyse-sast" >}})
8.	[Er nødvendig informasjon om systemet dokumentert, oppdatert og lagret på et sikkert sted?]({{< relref "utvikle/dokumentasjon.md" >}})
9.	[Er det rutiner for kodegjennomgang, og vet teamet hva de skal se etter?]({{< relref "utvikle/kodegjennomgang.md" >}})
10. [Dersom løsningen bruker KI, er modeller, treningsdata og evalueringsresultater dokumentert?]({{< relref "utvikle/dokumentasjon.md#dokumentasjon-av-ki-systemer" >}})

## Deploye
1.	[Er det satt opp automatiserte sikkerhetstiltak?]({{< relref "deploye/cicd.md#bruk-av-cicd" >}})
2.  [Har teamet et forhold til sikring av byggmiljø?]({{< relref "deploye/bygg.md" >}})
3.  [Kjøres det review i forkant av deployment?]({{< relref "deploye/deploy.md" >}})
4.	[Er det planlagt for sikkerhetstesting, inkludert eventuell penetrasjonstesting, i forbindelse med deployment?]({{< relref "utvikle/sikkerhetstesting.md#når-pentest-er-aktuelt" >}})
5.	[Dersom løsningen bruker KI, er det verifisert at AI-komponenter og modeller fungerer som forventa?]({{< relref "forvalte/verifisering-av-design.md#verifisering-av-ai-systemer" >}})

## Forvalte
1.	[Har teamet verifisert at nettverksdiagrammet er korrekt implementert?]({{< relref "forvalte/verifisering-av-design.md" >}})
2.	[Kan teamet vise at krav er omsatt til implementerte kontroller, dersom kunde eller andre ber om innsyn?]({{< relref "forvalte/verifisering-av-design.md" >}})
3.	[Er det satt opp nødvendig logging for å oppdage og få oversikt over uønskede hendelser?]({{< relref "forvalte/logging-monitorering.md" >}})
4.	[Lagres loggene slik at de ikke kan manipuleres?]({{< relref "forvalte/logging-monitorering.md#hvordan-logger-vi" >}})
5.	[Har teamet en rutine for å sikre mot sårbare avhengigheter?]({{< relref "forvalte/avhengighetshandtering.md" >}})
6.	[Har teamet en rutine for å øve på gjenoppretting av systemet?]({{< relref "forvalte/preparedness.md" >}})
7.	[Har teamet en prosedyre for hendelseshåndtering og en beredskapsplan dersom løsningen angripes eller går ned?]({{< relref "forvalte/hendelseshandtering.md" >}})
8.	[Dersom løsningen bruker KI, overvåkes modellens ytelse og oppførsel i drift?]({{< relref "forvalte/logging-monitorering.md#logging-og-monitorering-av-ki-responser" >}})