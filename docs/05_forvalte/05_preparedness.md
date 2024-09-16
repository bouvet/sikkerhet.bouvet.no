---
sidebar_position: 1
title: Øv på gjenoppretting
---
import Link from "@docusaurus/Link";

# Øv på gjenoppretting
:::tip Kort oppsummert
En backup som ikke er testet er verdiløs, og det samme gjelder alt av planer for disaster recovery såsant disse ikke testes. Teamet må verifisere backups og planer jevnlig, slik at alle vet hva som må skje.  
:::

Dersom teamet har gjort alt rett til nå har dere en plan for <Link to="../01_planlegge/03_business_continuity">disaster recovery</Link> som forteller dere hva som må gjøres for å gjenopprette infrastruktur, applikasjoner og data slik at en kommer tilbake til normal drift. 

Årsakene til at en er nødt å gjenopprette kan være mange, og svært varierende i omfang. Hvem har vel ikke kjørt en ```delete from <table> where x = 'something'``` med manglende eller feil parametre, eller droppet feil tabell fra en database? Eller slettet en server eller appservice fra et prodmiljø ved en feil (_jeg skulle bare fikse noe kjapt...._). I slike tilfeller kan det gå kjapt å gjenopprette dersom en vet hva som gikk galt, men i andre og mer komplekse tilfeller som f.eks. involverer ukjente feil i programvaren eller problemer hos en skytjenesteleverandør kan det bli mer komplekst. 

For at planene skal ha noen reell verdi, er man nødt til å teste disse i praksis. I en perfekt verden bør planene være så detaljerte at gjenoppretting er mulig selv om [hele teamet blir påkjørt av bussen](https://en.wikipedia.org/wiki/Bus_factor), eller på annet vis blir utilgjengelige. I praksis er dette ofte vanskelig å oppnå, men teamet bør ha et mål om å lage en god oppskrift på hvordan en recovery kan foregå under gitte forutsetninger, og deretter teste denne regelmessig i et alternativt miljø. 

En tenkt oppskrift for løsningen tegnet opp i <Link to="../02_designe/02_systemskisser">artikkelen om systemskisser</Link> kan være som under. Premisset for planen under er at vi har kildekode og pipelines tilgjengelig i eksempelvis Azure DevOps, og at applikasjon og ressurser på mystisk vis er fjernet fra Azure:

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
9. Verifiser at applikasjon fungerer
10. Publiser PowerBI-rapport
    * Verifiser at den kan lese data fra backend
11. Skru på aksess for sluttbrukere slik at de kan bruke applikasjonen igjen.

Det er vedt å nevne at hvert av punktene kan trenge utfyllende informasjon, med henvisninger til aksesspakker eller gruppemedlemsskap for at personen som restorer skal få nødvendig tilgang. 

# Veien videre
* [Nasjonal Sikkerhetsmyndighet: Forbered virkshomheten på håndtering av hendelser](https://nsm.no/regelverk-og-hjelp/rad-og-anbefalinger/grunnprinsipper-for-ikt-sikkerhet/handtere-og-gjenopprette/forbered-virksomheten-pa-handtering-av-hendelser/)

