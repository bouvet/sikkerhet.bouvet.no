---
title: "Utviklingsmiljø, verktøy og byggmiljø"
weight: 1
translationKey: toolsenv
description: >
  Miljøene og verktøyene vi jobber med er essensielle for prosjektet. Teamet bør standardisere verktøybruk, dokumentere oppsett og redusere risiko i utviklings- og byggkjeden.
---

Utviklingsmiljøet og byggmiljøet er noe av det viktigste vi har i et utviklingsprosjekt. Disse miljøene er både en produktivitetsfaktor og en kritisk del av angrepsflaten. Noen team utvikler og bygger lokalt på egen laptop, mens andre bruker dedikerte utviklings- og byggmiljø basert på skytjenester eller on-prem utviklingsservere. Uavhengig av løsning er det noen grunnprinsipper som bør være på plass: tydelig eierskap, dokumenterte valg, standardiserte oppsett og jevnlig oppfølging.

## Verktøy
Et typisk team benytter seg av:

* [IDE](https://en.wikipedia.org/wiki/Integrated_development_environment) og utvidelser
* versjonskontroll, typisk [git](https://git-scm.com/)
* KI-baserte kodeassistenter
* et verktøy for [CI/CD]({{< ref "deploye/cicd.md" >}})
* øvrige tjenester som teamet drifter eller konsumerer, for eksempel meldingstjenester, filoverføring og KI-verktøy

Disse verktøyene har stor betydning for sikkerhet og kvalitet i leveransen. Derfor bør teamet avklare hvilke verktøy som er tillatt, hvordan de settes opp, og hvordan endringer eller oppdateringer håndteres der dette er relevant. 

### Utvidelser og extensions
Mange verktøy tillater bruk av ulike utvidelser for å tilby funksjonalitet fra tredjepart som ikke er bygd inn i verktøyet fra leverandøren. Dette gjør det mulig å bruke standardverktøy som VS Code, som tilpasses til hvert enkelt prosjekt med de utvidelsene som er relevante for teknologivalg og arbeidsprosess. 

Utvidelser er imidlertid en stor angrepsvektor, så det er viktig å ha noen grunnprinsipper som hjelper teamet å vurdere kvaliteten dem. Leverandører som KOI tilbyr løsninger for å hjelpe med dette, men i mangel av verktøy er det noen grunnprinsipper som kan hjelpe:

* Ikka ta utvidelser ukritisk i bruk. Vurder historikk, opphav og oppdateringsfrekvens. 
* Har utvidelsen historikk i form av tidligere sårbarheter eller liknende; dersom ja, hvordan ble de håndtert? 
* Følg med på utvidelsene du har, sett deg inn i endringer før du oppdaterer. Vurder også å avvente oppdatering til noen dager etter at den er tilgjengelig. 

Som med alt annet på internett; stjerner, ratings og omtaler kan ikke stoles på og bør ikke være grunnlag for å avgjøre hvorvidt noe skal tas i bruk eller ei. 


### KI i utviklingsmiljøet
Generative [AI-verktøy]({{< ref "planlegge/ai.md" >}}) kan gi høyere utviklingstakt, men innfører også nye risikoer. Bruk av KI _må_ avklares med kunden før verktøy tas i bruk.

Sentrale avklaringer er:

* hvilke KI-tjenester som er godkjent
* hvilke data som kan brukes i prompt og som underlag
* hvordan leverandøren lagrer og gjenbruker data
* hvordan bruk av KI dokumenteres i teamet

En enkel tommelfingerregel er at kode, arkitektur, logger og konfigurasjon behandles som sensitiv informasjon inntil annet er avklart.

### Versjonskontroll
Versjonskontroll gir sporbarhet og kontroll over endringer, men sikkerhetsgevinsten avhenger av hvordan arbeidsflyten brukes i praksis. Repositories og branchingstrategi bør konfigureres etter prosjektets behov.

Kildekode er en kritisk verdi i prosjektet og bør vurderes i sammenheng med [disaster recovery og backups]({{< ref "planlegge/business-continuity.md" >}}).

### CI/CD som sikkerhetskontroll
Et godt [CI/CD-system (Continuous Integration / Continuous Deployment)]({{< ref "deploye/cicd.md" >}}) kan øke sikkerheten betydelig ved å automatisere kvalitets- og sikkerhetskontroller tidlig i kjeden.

Relevante kontroller er blant annet:

* [Software Composition Analysis (SCA)]({{< ref "utvikle/software-supply-chain.md" >}})
* Testing av autorisasjon og 401/403-responser
* Validering av JWT-håndtering
* [Statisk kodeanalyse (SAST)]({{< ref "utvikle/sikkerhetstesting.md" >}})
* [Secret scanning]({{< ref "utvikle/hemmeligheter.md" >}})

Flere kontroller krever tilleggsverktøy og lisenser. Vær særlig oppmerksom på verktøy som sender kode til eksterne tjenester for analyse. Det er også viktig å være klar over at eksempelvis actions som brukes som en del av CI/CD er en angrepsvektor, og at de må vurderes og behandles som alle andre komponenter i forsyningskjeden.

## Forsyningskjedesikkerhet i praksis
Moderne programvare bygges av mange avhengigheter. Derfor må teamet ha kontroll på hele forsyningskjeden, ikke bare egen kode. Husk på at forsyningskjeden dekker alle avhengigheter teamet har, ikke bare pakker og biblioteker. 

Teamet bør sikre at dere har kontroll på avhengigheter og risiko ved å bruke disse. Vanlige eksempler på komponenter en bør ha oversikt over er: 

* IDE og andre koderedigeringsverktøy
* KI-verktøy
* Utvidelser/plugins
* Støtteverktøy som Figma, databasemodelleringsverktøy eller liknende
* Skykomponenter
* Versjonskontroll
* CI/CD - også inkludert actions som kjøres
* Rammeverk, pakker og bibliotek

Det er ikke gitt at teamet styrer alt, men en bør likevel ha et forhold til hvordan livssyklusen på disse håndteres og hvordan endringsprosessene fungerer i praksis. 

## Utviklingsmiljø og byggmiljø
Et av de store risikoelementene ved all utvikling er dersom:

* uvedkommende kan nå en maskin som brukes til utvikling, bygging eller produksjon
* maskinen kan nå internett uten særlige begrensninger
* slike maskiner mangler monitorering

Alle utviklere har avhengigheter til biblioteker og pakker fra open source-økosystemer. Noen av disse kan kompromitteres eller forfalskes, og dermed introdusere bakdører eller eksfiltrering av data.

Viktige tiltak for å redusere risiko er å:

* stenge for all innkommende nettverkstrafikk
* stenge for all utgående nettverkstrafikk
* kun åpne opp for de tilgangene som absolutt trengs
* unngå bruk av generelle maskiner som brukes til surfing på nett, kontoraktiviteter og liknende til utvikling

Det er ikke alltid mulig å forsvare dedikerte maskiner for utvikling ut fra kost/nytte. Dette bør likevel vurderes bevisst, slik at teamet kjenner hvordan valget påvirker risikobildet.

## Minimum som bør dokumenteres
Følgende bør minimum være dokumentert og vedlikeholdt:

* godkjente verktøy og versjoner
* krav til oppsett av utviklingsmaskiner og byggmiljø
* nettverkstilganger og begrunnelser
* logging og monitorering av miljøene
* rutiner for patching og oppgraderinger
* ansvar for forvaltning av verktøy og miljø
 
# Veien videre
* [Wikipedia: Programming tools](https://en.wikipedia.org/wiki/Programming_tool)
* [Atlassian: Branching strategy: a path to greatness](https://www.atlassian.com/agile/software-development/branching)
* [Github: About secret scanning](https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning)