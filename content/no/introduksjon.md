---
title: "Introduksjon"
weight: 1
translationKey: intro
description: >
  Her vil Security Champions, systemutviklere, infrastruktur-ingeniører, DevOpsere og andre i Bouvet finne informasjon til støtte for å drifte, utvikle og forvalte sikre IT-systemer for våre kunder. 
---
Det overordnede innholdet og temaene som diskuteres på disse sidene er også støttende for prosjektledere, rådgivere og andre som skal følge opp sikkerhet i prosjekter.

Bouvet er [sertifisert under ISO27001](https://www.bouvet.no/om-bouvet/vare-iso-sertifiseringer), som også stiller krav til sikkerhet i leveranser. [Sjekklista](./sjekklisten.md) vil gi deg et godt utgangspunkt for tiltak som dekker vanlige sikkerhetshull og hjelper til å sikre kvalitet i leveransen. Hvert av punktene i sjekklista dekkes av mer utfyllende informasjon slik at det skal være lett å komme igang uten forkunnskaper om et tema. 

Målet er ikke at __sikkerhet.bouvet.no__ skal dekke absolutt alt, men du skal sitte igjen med forslag til tiltak og et vokabular som hjelper deg videre. Alle tema som presenteres skal også peke videre på eksterne ressurser som kan gi enda mer informasjon. 

For mange prosjekter kan en grundigere gjennomgang være nødvendig. Da vil vi anbefale [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/).

{{< tip title="Husk" >}}
Vi skal gjøre vårt beste for å levere de sikreste tjenestene og løsningene
{{< /tip >}}

## Hva er Informasjonssikkerhet?

_Informasjonssikkerhet_ handler om å sikre disse aspektene ved et IT-system:

__Konfidensialitet__  
Dataene systemet behandler skal ikke være tilgjengelig for uautoriserte.
> Eksempel på utfordringer her kan være et miskonfigurert adgangskontrollsystem, det som i OWASP Top 10 kalles - "Broken Access Control"

__Tilgjengelighet__  
Funksjonene systemet tilbyr er tilgjengelige når brukerne trenger det.
> Her vil alt fra at en virtuell maskin fryser pga. en full disk, til et målrettet DDoS-angrep være ting å tenke på

__Integritet__  
Dataene systemet behandler er korrekte.
> Integriteten kan bli kompromitert for eksempel via et SQL-injeksjons angrep, eller en svakt sikret SSH-server, hvor uautoriserte får tilgang til å endre datene.


## Hvordan bruke sikkerhet.bouvet.no?

_sikkerhet.bouvet.no_ er bygd opp i kapitler avgrenset av domenene de omhandler.  
Du kan enten klikke deg inn å lese om et enkelt emne du er usikker på, eller ønsker tips rundt.  
Eventuelt kan du og ditt team kan gå systematisk gjennom hvert kapittel og notere hva som er i orden og hva som bør utbedres i deres prosjekt.  

[Sjekklisten for sikkerhet](sjekklisten) kan brukes som et startpunkt for å vurdere prosjektets sikkerhet. Hvert punkt refererer videre til mer utfyllende informasjon. Den kan også lastes ned og implementeres som en del av kildekoden i ditt prosjektet.
