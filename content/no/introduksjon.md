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

## Hva er en SSDLC?

_SSDLC_ – Secure Software Development Lifecycle – er en utviklingslivssyklus der sikkerhet hører hjemme i hver fase, ikke som en kontroll til slutt. Fasene er de samme som i et hvilket som helst prosjekt: en planlegger, designer, utvikler, deployer og forvalter. Forskjellen er at hver fase også har sikkerhetsoppgaver knyttet til seg.

Grunnen til at det lønner seg er at de færreste alvorlige sikkerhetsproblemer oppstår i koden – de oppstår i beslutningene. En penetrasjonstest to uker før lansering finner symptomene på et designvalg som ble tatt lenge før, og da er det både dyrt og vanskelig å rette opp.

Kapitlene på disse sidene følger fasene, og hvert kapittel har sin egen introduksjon:

* __[Planlegg]({{< relref "/planlegge" >}})__ – Avklar ansvar, klassifiser data og sett krav til tilgjengelighet og gjenoppretting før arbeidet starter.
* __[Design]({{< relref "/designe" >}})__ – Gjør kravene om til arkitektur: trusselmodell, nettverk, segregering av miljø og tilgangsstyring.
* __[Utvikle]({{< relref "/utvikle" >}})__ – Skriv koden med OWASP Top 10 i bakhodet, håndter hemmeligheter forsvarlig og valider data som kommer utenfra.
* __[Deploye]({{< relref "/deploye" >}})__ – Bygg et artefakt som kan verifiseres, og test løsningen før den settes i drift.
* __[Forvalte]({{< relref "/forvalte" >}})__ – Logg og monitorer, følg med på svakheter i avhengighetene, og vit hvem som gjør hva når noe skjer.

En SSDLC er ikke en port en passerer én gang. Fasene gjentas for hver endring av betydning, og et designvalg som var riktig ved oppstart kan være feil to år senere.

Omfanget bør stå i forhold til risikoen. Et internt verktøy uten personopplysninger trenger ikke den samme innsatsen som en løsning som behandler sensitive data for mange brukere – men begge bør ha vært gjennom en vurdering, slik at omfanget er et valg og ikke en forglemmelse.

Vil dere ha et mer formelt rammeverk å måle dere mot, er [OWASP SAMM](https://owaspsamm.org/), [NIST SSDF](https://csrc.nist.gov/projects/ssdf) og [Microsoft SDL](https://www.microsoft.com/en-us/securityengineering/sdl) gode steder å se.

## Hvordan bruke sikkerhet.bouvet.no?

Du kan enten klikke deg inn å lese om et enkelt emne du er usikker på, eller ønsker tips rundt.  
Eventuelt kan du og ditt team kan gå systematisk gjennom hvert kapittel og notere hva som er i orden og hva som bør utbedres i deres prosjekt.  

[Sjekklisten for sikkerhet](sjekklisten) kan brukes som et startpunkt for å vurdere prosjektets sikkerhet. Hvert punkt refererer videre til mer utfyllende informasjon. Den kan også lastes ned og implementeres som en del av kildekoden i ditt prosjektet.
