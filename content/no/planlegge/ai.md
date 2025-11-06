---
title: "Bruk av kunstig intelligens"
weight: 4
translationKey: ai
description: >
  Bruken av kunstig intelligens (KI) har eksplodert de siste årene, og teknologien har kommet så langt at den kan være et nyttig verktøy for å brainstorme løsninger, skrive,feilsøke eller vurdere kode. Men hva betyr dette for sikkerheten?
---

Bruk av KI i prosjekter treffer en rekke problemstillinger vi _må_ ta stilling til, deriblant:
* Hvem eier kode og data? Hvem vil eie resultatet som kommer fra KI?
* Hvilke muligheter har vi til å følge opp mislighold eller brudd på avtaler?
* Hva kan gå galt; kan data eller kode komme på avveie, eller kan verktøyet gjøre endringer vi ikke forstår eller har kontroll på?

{{< tip title="Håndtering av hemmeligheter" >}}
Husk at Bouvet og de fleste kunder har retningslinjer for bruk av KI som __skal__ følges. Det er __ikke__ lov å ta KI-verktøy i bruk uten eksplisitt godkjenning fra Bouvet eller kunde!
{{< /tip >}}

## Hva har vi lov til
I Bouvet og på Bouvetutstyr har vi kun lov til å bruke KI-verktøy som er eksplisitt tillatt i [Bouvets KI-policy](https://kb.bouvet.no/en/AnvendelseravKI-verkt%C3%B8y/Retninglinjerforanvendelseavkunstingintelligensibouvet); på kundens utstyr har vi kun lov til å bruke de verktøyene kunden har godkjent. Bakgrunnen for disse begrensningene skyldes kompleksiteten rundt KI-verktøy. 

De kjører ofte i egne miljøer og utfører prosessering eller behandling av potensielt sensitiv informasjon og kan resultere i endringer som påvirker oss eller kunde. 

SSelv om vi __har den tekniske muligheten til å kjøre__ et KI-verktøy betyr det ikke __at vi bør kjøre det.__ Dersom det er et verktøy som kan hjelpe utviklingsprosessen eller prosjektet du er med i; lag en BSD-sak slik at det kan bli sjekket ut. 

### Nytt verktøy? Tenk over følgende
Dersom du ønsker å ta i bruk et nytt verktøy er det viktig med klarhet i forhold til hvem som eier resultatet av det verktøyet produserer. 

Mange gratisvarianter og ikke-enterprisevarianter av verktøy har restriksjoner i lisenser og avtaler som tillater leverandøren å bruke input for treningsformål. Dette vil aldri være akseptabelt for Bouvet, og heller ikke for kundene våre. 

Vi er også nødt til å ha kontroll på hvor data og informasjon flyter slik at personvernet og forpliktelsene våre i personvernloven kan ivaretas.

### Hva deler du med KI?
Dersom du har fått lov til å bruke et KI-verktøy i utviklingsprosjektet må du ha kontroll på følgende: 
* Hva har du lov til å dele med verktøyet?
* Hva har du faktisk delt med verktøyet?
* Hvordan kan du sikre at du ikke deler mer enn du har lov til?

Hvordan du bruker verktøyet i utviklingsprosjekter vil variere; noen kodeverktøy kjører som assistenter i IDE'et ditt; mens andre kobler seg opp mot f.eks. Github, analyserer koden og foreslår endringer i en egen branch basert på promptene dine. 

Med mindre det er eksplisitt godkjent skal ikke verktøyet under _noen_ omstendigheter ha tilgang til data utover kodebasen. 

Sjekk at du ikke inkluderer datafiler, hemmeligheter eller annen sensitiv informasjon i repoet, og ekskluder eventuelt disse i [`.gitignore`]({{< ref "utvikle/git.md" >}}). Ta i bruk nøkkelhvelv der du kan for å unngå at hemmeligheter havner i repoet ved et uhell. 

{{< tip title="Lekkasje av sensitive data" >}}
Vær klar over at noen KI-verktøy kan commite og pushe kode til Github automatisk fra IDE'et ditt, og at du må sikre at sensitiv informasjon som passord, sertifikater og data ikke kommer på avveie.
{{< /tip >}}

## Kvalitetssikring av KI-bidrag
KI-løsninger kan ha en positiv effekt på fremdrift, men må alltid behandles som kode fra tredjepart og kvalitetssikres deretter. Kode skrevet av KI vil i mange tilfeller gjøre det du ønsker, men i mange tilfeller på en mer komplisert måte, med svakheter eller sårbarheter, eller rett og slett ved å hallusinere seg frem til løsninger som aldri vil fungere i praksis. 

Du som utvikler må vite hva du skal gjøre for å instruere verktøyet skikkelig, og du må være klar over hvilke begrensninger verktøyet har. For å gjøre jobben litt enklere har vi noen grunnleggende prinsipper:
* KI skal ikke ta design- eller arkitekturbeslutninger. Det brukes til å løse avgrensede oppgaver innenfor en menneskestyrt arkitektur.
* KI behandles som en juniorutvikler: alt den leverer skal gjennomgås, forstås og testes. KI-baserte bidrag skal være sporbare og etterprøvbare. 
* Oppgaver deles opp i små, vurderbare komponenter du kan kvalitetssikre fullt ut. Unngå store blokker kode uten menneskelig innsikt.

KI gjør oss i stand til å bli mer produktive, men det er viktig at vi forstår resultatene KI-verktøyene gir oss. Det har vært mange eksempler på kode som brukes mer eller mindre ukritisk, før det viser seg at den inneholder store og alvorlige svakheter som kan utnyttes for å manipulere eller hente ut data. Sikkerhetstesting bør alltid være en del av utviklingsløpet, men dette blir enda viktigere ved bruk av KI-verktøy for å skrive kode. KI-generert kode skal aldri ut i prod uten at den er gjennomgått, forstått og testet.

En bør også vurdere ulike barrierer som kan hindre uventede og negative konsekvenser, som regelbaserte filer med tilleggsinstrukser for KI, tilgangsbegrensning slik at KI eksempelvis ikke kan merge kode selv og andre tiltak som forhindrer KI fra å gjøre endringer som ikke er gjennomgått og godkjent av en utvikler. 

# Veien videre
* [OpenSSF: Security-Focused Guide for AI Code Assistant Instructions](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions)
* [GitHub Copilot Trust Center](https://copilot.github.trust.page/faq)
* [Content exclusion for GitHub Copilot](https://docs.github.com/en/copilot/concepts/context/content-exclusion)
* [Rules Files for Safer Vibe Coding](https://www.wiz.io/blog/safer-vibe-coding-rules-files)

