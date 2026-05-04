---
title: "Øv på gjenoppretting"
weight: 5
translationKey: preparedness
description: >
    Teamet må kunne gjenopprette tjenester og data etter destruktive hendelser. Denne artikkelen handler om praktisk recovery: planer, øvelser og verifisering av at gjenoppretting faktisk fungerer.
---

En backup som ikke er testet er verdiløs. Det samme gjelder en disaster recovery-plan som aldri har blitt testet.

Hvis teamet har gjort grunnarbeidet godt, har dere en plan for [gjenoppretting]({{< ref "planlegge/business-continuity.md#disaster-recovery" >}}) som beskriver hvordan infrastruktur, applikasjon og data gjenopprettes til normal drift.

Årsakene til gjenoppretting varierer: menneskelige feil, feil i leveranser, svikt hos leverandør, utilgjengelig infrastruktur eller ondsinnede hendelser. Målet er alltid det samme: redusere nedetid og datatap med forutsigbare prosesser.

## Minimumskrav til gjenoppretting
Teamet bør som minimum ha kontroll på:
* dokumenterte mål for gjenoppretting (RTO) og akseptabelt datatap (RPO)
* verifiserte backups av data, konfigurasjon og avhengige artefakter
* en konkret, stegvis recovery-oppskrift som kan følges av flere enn én person
* nødvendige tilganger, roller og tilgangspakker for de som skal gjenopprette
* et testmiljø der recovery-planen kan øves uten å påvirke produksjon
* tydelige kriterier for når systemet kan åpnes for brukere igjen

## Øving og verifisering
Recovery må testes jevnlig. Teamet bør planlegge øvelser som dekker både enkle feil og mer komplekse scenarioer.

Eksempler på øvelser:
* gjenoppretting av enkeltkomponent (f.eks. database eller apptjeneste)
* full gjenoppretting av kritisk tjeneste i alternativt miljø
* validering av backup-kjede fra backup til verifisert restore
* øvelse der nøkkelpersoner ikke er tilgjengelige

Etter hver øvelse bør dere dokumentere hva som fungerte, hva som feilet og hvilke tiltak som må inn i backloggen.

En tenkt oppskrift for løsningen tegnet opp i [artikkelen om systemskisser]({{< ref "designe/systemskisser.md" >}}) kan være som under. Premisset for planen under er at vi har kildekode og pipelines tilgjengelig i eksempelvis Azure DevOps, og at applikasjon og ressurser på mystisk vis er fjernet fra Azure:

1. Sjekk at nye subscriptions er på plass i Azure 
    * Konfigurer Azure Pipelines slik at de deployer til disse 
    * Verifiser at alle Entra-grupper er tilgjengelige
2. Deploy infrastruktur-som-kode
3. Konfigurer NSG'er og brannmurer (dersom dette ikke gjøres som kode)
    * Skru av aksess utenfor leveranseteamet for å unngå at brukere forstyrrer restoreprosessen
4. Verifiser at ressursene har tilgang til dataplatformen
5. Verifiser tilganger til database
6. Restore applikasjon og data: 
    1. Restore data til database fra siste backup 
    2. Deploy backend
    3. Deploy frontend
7. Verifiser at applikasjon fungerer
8. Publiser PowerBI-rapport
    * Verifiser at den kan lese data fra backend
9. Skru på aksess for sluttbrukere slik at de kan bruke applikasjonen igjen.

Det er verdt å nevne at hvert punkt ofte trenger utfyllende informasjon, med henvisninger til tilgangspakker eller gruppemedlemskap for at den som gjenoppretter skal få nødvendig tilgang.

## Recovery for løsninger med AI-komponenter
Hvis løsningen har AI-komponenter, må recovery-planen også dekke:
* gjenoppretting av modellartefakter og versjoner
* gjenoppretting av konfigurasjon for model routing, prompts og sikkerhetsgrenser
* gjenoppretting av vektorindeks/feature store der dette brukes
* verifisering av modellkvalitet etter restore (ikke bare at tjenesten svarer)
* kontroll av AI-relaterte logger slik at hendelsesforløp fortsatt er sporbart

Dette støtter kontrollområder som "AI system operation and monitoring" og "AI system recording of event logs" i en operativ recovery-kontekst.

## Veien videre
* [Nasjonal Sikkerhetsmyndighet: Forbered virksomheten på håndtering av hendelser](https://nsm.no/regelverk-og-hjelp/rad-og-anbefalinger/grunnprinsipper-for-ikt-sikkerhet/handtere-og-gjenopprette/forbered-virksomheten-pa-handtering-av-hendelser/)
* [Nasjonal Sikkerhetsmyndighet: Nasjonalt rammeverk for håndtering av digitale angrep og cyberhendelser](https://nsm.no/regelverk-og-hjelp/rapporter/nasjonalt-rammeverk-for-handtering-av-digitale-angrep-og-cyberhendelser)
* [Wikipedia: Disaster recovery](https://en.wikipedia.org/wiki/Disaster_recovery)

