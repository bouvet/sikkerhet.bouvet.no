---
title: "Software supply chain"
weight: 5
translationKey: ssc
description: >
  Alle som lager programvare bruker tredjepartspakker. Alle tredjepartspakker representerer kode skrevet av andre, og utgjør en risiko for leveransen dersom vi ikke har kontroll over hva vi bruker og oversikt over svakheter og risiko assosiert med disse.
---

Når vi bygger software har vi avhengigheter til en hel haug med ulike tredjepartspakker, fra økosystem som npmjs, nuget, PyPi eller andre. Dette er kode "skrevet av andre", der vi er avhengige av at disse produserer pakker uten større svakheter og uten onde hensikter. Kilder som blant annet Gartner, Sonatype og Snyk har anslått at så mye som 90% av koden i et typisk utviklingsprosjekt kan bestå av slike tredjepartspakker, så risikoen er betydelig dersom vi ikke har kontroll.

Et viktig hjelpemiddel er å gjennomføre en såkalt Source Composition Analysis - SCA for å få oversikt over pakkene vi bruker, både direkte og indirekte (transiente) avhengigheter, samt risikoen assosiert med disse. 

## Sikkerhetsrisiko
Det finnes flere sikkerhetsrisikoer knyttet til tredjepartspakker, men dessverre er økosystemene for slike pakker lite proaktive på sikkerhetsfronten. Infiserte pakker som identifiseres blir fjernet, men for alle som bruker automatikk for å holde avhengigheter oppdatert til siste versjon kan dette ofte være for sent. 

 ### Sårbarheter
 De kan inneholde kjente sårbarheter ([CVE](https://cve.mitre.org)) som kan la seg utnytte. Noen av disse kan mitigeres ved å oppgradere pakkene til siste versjon, andre har mer grunnleggende utfordringer som kan mitigeres på annet vis. Det hender også at noen CVE'er lages på svakheter som teknisk sett er en sårbarhet, men der den er _'by-design'_. Et eksempel på dette er Python-pakken _Pandas_ som blant annet har sårbarheten [CVE-2020-13091](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-13091). Denne lar brukeren deserialisere filer uten sjekk av hvor disse kommer fra - dette har da blitt registrert som en sårbarhet da det vil kunne være mulig utnytte dette om andre tiltak ikke er på plass. 
 
 ### Ondsinnet kode
 Pakkene vi laster ned og bruker kjøres i samme kontekst som vår kode og kan benytte de samme ressursene og tilgangene den har. Innholdet i pakkene vi konsumerer er helt utenfor vår kontroll, og dersom en av dem inneholder ondsinnet programvare (malware) kan konsekvensene bli store. 

 De siste årene har det også dukket opp eksempler på pakker som ofte betegnes som "protestware", da de inneholder logikk som utfører handlinger dersom brukerne kan geolokaliseres til spesifikke land. Pakken "[peacenotwar](https://en.wikipedia.org/wiki/Peacenotwar)" er et slikt eksempel, som ble lagt til som en avhengighet til ```node-ipc``` som er en mye brukt pakke. Dette resulterte i at ```peacenotwar``` også ble lastet ned hos mange brukere; de som ble geolokalisert til Russland eller Belarus fikk data slettet og ble utsatt for DOS-angrep via pakken. 

Uavhengig av om noe er ment som malware eller protestware er konsekvensene alvorlige, og alle utviklingsprosjekter bør ha på plass tiltak for å begrense risiko og konsekvens dersom en hendelse inntreffer. 

### Bruk av CDN
Content-delivery-networks for å distribuere Javascript-bibliotek har blitt brukt av mange som en enkel måte å inkludere disse i koden uten å måtte inkludere dette i build eller deploy-prosessen. Tanken er god, men du får da en direkte avhengighet til en kilde du ikke har noen kontroll på som kan [misbrukes til å spre malware](https://sansec.io/research/polyfill-supply-chain-attackX). 

### Lisensmodell
Det finnes mange ulike lisensmodeller; noen er helt frie og får ingen konsekvenser for brukerne, mens andre som AGPL og GPL stiller klare krav til alle som konsumerer kode under denne lisensen, også inkludert det øvrige systemet som benytter seg av den. De aller fleste økosystemer tillater også bruk av proprietære lisenser, som kan begrense hva du kan bruke en pakke til. Noen har spesifikke krav i lisensen, andre er gratis for personlig bruk, men krever at du kjøper en lisens dersom den skal brukes kommersielt. 

## Hvordan sikrer vi oss?
For å beskytte systemet mot disse truslene er det flere effektive tiltak vi kan gjøre. Mange av disse er allerede dekket andre steder, men det er likevel noen som er unike for eksterne pakker. 

### Trusselmodell og kompleksitet
I mange tilfeller har vi avhengigheter til mange pakker som ikke brukes av oss direkte, såkalte transitive avhengigheter. Hver enkelt pakke vi avhenger av representerer en økning i kompleksitet og angrepsflate, og øker sjansen for at noe skjærer seg på et senere tidspunkt. 

{{< figure src="../dependencies.png" >}}

Et viktig spørsmål alle må stille seg er _"trenger vi denne pakken?"_ Hva er kosten ved å lage funksjonaliteten selv sammenliknet med risikoen og kompleksiteten assosiert med å legge den til? 

### Overvåkning av avhengigheter
Et viktig hjelpemiddel er analyseverktøy som hjelper oss å ha kontroll på sårbarheter og risiko i avhengighetene våre. Det finnes mange aktører på markedet, alt i fra helt enkle som Githubs Advanced Security med Dependabot, til mer avanserte som Snyk og Sonatype. I mange tilfeller er det datagrunnlaget for løsningen som utgjør den store forskjellen, men det finnes også en del nyttige funksjoner en bør vurdere:

* Policystyring - Sonatype tagger alle pakker med metadata, slik at du kan definere policyer som sier noe om hva som kan brukes eller ei. 
* Automatisk utbedring - Verktøy som dependabot (Github) oppgraderer automatisk pakker når sårbarheter oppdages og oppdateringer er tilgjengelige. 
* Integrasjoner og varsling - Mange verktøy som eksempelvis Snyk SCA kan integreres i IDE og i CICD.
* Risikobilde - Mange løsninger gir deg en totaloversikt der du kan se det totale risikobildet for enkeltapplikasjoner eller større deler av porteføljen

### Modenhet
Denne kan være vanskelig å si noe konkret om, men hvor aktivt er miljøet rundt en pakke? Vedlikeholdes den av enkeltpersoner, grupper med utviklere eller har den økonomisk eller annen støtte fra et selskap?

Hvor sannsynlig er det at pakken fortsatt kommer til å være vedlikeholdt om eksempelvis 5 år? Hvordan er historikken i forhold til sårbarheter og kvalitet; finnes det et aktivt miljø som rapporterer svakheter som deretter utbedres, eller henger innmeldte saker i limbo over lengre tid? Verktøy som [libraries.io](https://libraries.io) og [Security Scorecard](https://securityscorecard.com/) kan være nyttige for å finne ut mer.

### Pinning av versjoner
En av angrepsvektorene er når ondsinnede aktører overtar populære pakker, og publiserer sin egen versjon med ondsinnet innhold. Dersom vi har bygg eller deployprosesser som henter siste versjon av avhengighetene hver gang, vil disse automatisk hente den infiserte pakken. Et tiltak her kan være å låse pakkeversjonene vi bruker, eksempelvis i ```package-lock.json``` eller liknende. 

### Bruk av SBOM
Software Bill Of Materials (SBOM) er en tilnærming der vi genererer en oversikt over alle avhengigheter med versjoner fra løsningene våre. Det finnes flere mer eller mindre standardiserte filformater for dette, disse kan også arkiveres eller legges inn i andre løsninger for å forenkle monitorering fra sentralt hold. 

## Veien videre
* [Sonatype: State of the software supply chain](https://www.sonatype.com/state-of-the-software-supply-chain/introduction)
* [Wikipedia: Source Composition Analysis](https://en.wikipedia.org/wiki/Software_composition_analysis)
* [Eksempel på CDN-angrep: Polyfill supply chain attack hits 100K+ sites](https://sansec.io/research/polyfill-supply-chain-attackX)
* [Eksempel på kompromittert bibliotek: xz-Utils](https://arstechnica.com/security/2024/04/what-we-know-about-the-xz-utils-backdoor-that-almost-infected-the-world/)