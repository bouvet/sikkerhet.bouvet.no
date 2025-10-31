---
title: "Verktøy brukt i leveransen"
weight: 4
translationKey: tools
description: >
  Feilkonfigurasjon er en vanlig kilde til feil og sårbarheter, dette gjelder også for verktøy. Dersom mulig bør teamet standardisere på bruk av verktøy og utvidelser til disse, og sikre at alle har en mest mulig lik (og dokumentert) arbeidsprosess.
---

Alle utviklingsteam benytter ulike verktøy i utviklingsprosessen, og utvalget vil varierere fra team til team avhengig av personlige preferanser, teknologivalg, system og kundekrav og mye annet. 

Et typisk team vil benytte seg av en eller annen form for
* [IDE](https://en.wikipedia.org/wiki/Integrated_development_environment)
* et system for versjonskontroll av koden, typisk _git_
* et verktøy for [CI/CD]({{< ref "deploye/cicd.md" >}}) som kan utføre ulike oppgaver relatert til bygging, testing eller deployment
* andre tjenester driftet eller konsumert av teamet, f.eks. meldingstjenester, filoverføringstjenester, generativ AI (copilots) eller liknende

Disse verktøyene kan ha stor betydning for sikkerhet og kvalitet i leveranser, så det er viktig at teamet har et forhold til hvordan disse settes opp. 

## IDE
Det er mulig å installere utvidelser på de fleste IDEs idag, som gir støtte for nye språk, formatering, linting, skytjenester og annet. Disse kan forbedre produktivitet og effektiviteten til teamet betraktelig, men vi må være obs på hva som installeres. 

Mange IDEs støtter bruk av utvidelser som legger til manglende funksjonalitet, som støtte for flere programmeringsspråk, integrasjoner mot andre verktøy og liknende. Vi må imidlertid være klar over at dette er en angrepsvektor på linje med andre økosystemer, og at vi som utviklere må ha et forhold til risikoen forbundet med utvidelsene. Det er ikke nok å bare se på nedlastingstall, vi må også se på andre indikatorer som tilbakemeldinger, historikk og liknende. 

## Versjonskontroll
Versjonskontroll gir kjempekontroll over alle endringer, men det er viktig at vi bruker verktøyet på en god måte. De-facto standard idag i de fleste prosjekter er [git](https://git-scm.com/), i Bouvet hovedsaklig med repositories hostet på Github eller Azure DevOps. Repositories og branchingstrategier må konfigureres etter behov; noen prosjekter har forholdsvis enkle arbeidsflyter som består av fork-fra-main; pull request; merge-to-main, mens andre har mer komplekse flyter som involverer mange ulike branches som håndterer ting som utvikling, testing, produksjon og annet. 

Github støtter også bruk av ulike actions, som kan utføre oppgaver på kode som sjekkes inn, som CI/CD, sikkerhetstesting og mye annet. Husk også på at kildekode er en del av prosjektet, og må vurderes i forhold til [disaster recovery og backups]({{< ref "business-continuity.md" >}})!

## CI/CD
Et godt [CI/CD-system (Continuous Integration / Continuous Deployment)]({{< ref "deploye/cicd.md" >}}) kan brukes til å øke sikkerheten på sluttproduktet betydelig, gjennom å automatisere ulike sjekker og tester som sikrer kvaliteten i leveransen. 

Vær obs på at flere av punktene under krever tilleggssoftware. Vi har per idag ingen felleslisenser for utviklere i Bouvet, dette må gås opp per prosjekt avhengig av behov og krav. Dersom teamet håndterer dette på egenhånd, vær obs på lisensbetingelser og hvordan verktøy fungerer. Noen verktøy sender eksempelvis kildekode til egne servere for analyse, dette er i utgangspunktet ikke tillatt med mindre det på forhånd er avklart med kunden.

### Software compostion analysis (SCA)
[Software composition analysis (SCA)](utvikle/software-supply-chain) kan settes opp automatisk som en del av CI/CD. Vi har mange avhengigheter til komponenter laget av andre, så det er viktig å ha oversikt over eksisterende og nyoppdagede sårbarheter i det vi lager.

### Testing
Å kjøre tester i CI er lurt av flere grunner, men fra et sikkerhetsperspektiv er det enkelte tester som bør være med.

* Test alle aktuelle endepunkter for 401/403 responser
* Test kode som håndterer autorisasjon (hvem får gjøre hva). Her vil det være en fordel om all autorisasjonslogikk skjer på et sentralisert sted i kodebasen.
* Test for strict [JWT valdiation](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/06-Session_Management_Testing/10-Testing_JSON_Web_Tokens)

### Statisk kodeanalyse (SAST)
[Statisk kodeanalyse (SAST)](utvikle/sikkerhetstesting#statisk-kodeanalyse-sast) bør konfigueres til å kjøres automatisk som en del av CI/CD. Man kan vurdere om et bygg skal feile dersom den statiske kodeanalysen oppdager alvorlige svakheter med koden eller lav testdekning.

### Secret scanning
[Sjekking av hemmeligheter](utvikle/hemmeligheter) - passord, nøkler og annen sensitiv informasjon som ikke skal inn i kildekoden er et viktig verktøy som kan implementeres i versjonskontrollsystemet og i CI/CD. Noen verktøy har kun varsling ved funn, andre kan også ugyldiggjøre hemmelighetene i tjenestene de er ment for. 

## Generativ AI (copilots)
Det eksisterer mange slike generative AI-verktøy som utviklere kan benytte. Det er viktig at enhver bruk av slike verktøy avklares med kunden _før_ de tas i bruk. Her har Bouvet gjort mye arbeid i evaluering av flere slike verktøy og har god støtte internt for å gjøre slike vurderinger om kunden skulle ha behov for det.

# Veien videre
* [Atlassian: Branching strategy: a path to greatness](https://www.atlassian.com/agile/software-development/branching)
* [Github: About secret scanning](https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning)
