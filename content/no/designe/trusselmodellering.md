---
title: "Trusselmodellering"
weight: 5
translationKey: threatmodelling
description: >
  Trusselmodellering er en øvelse der målet er å identifisere trusler i og rundt en løsning. Dette gjør at risikoene kan identifiseres og vurderes opp mot et totalbilde av sikkerheten i løsningen. Fra en trusselmodell kan mottiltak identifiseres og implementeres for å redusere risiko.

---

__Dette er en kort introduksjon til trusselmodellering. Metoder og verktøy nevnes kort, med lenker for fordypning.__

Du har nok allerede gjort en enkel trusselmodellering uten at du selv er klar over det. Har du for eksempel tenkt på hvorfor brukerne av systemet du lager må logge seg inn med brukernavn og passord?

Når disse valgene ble tatt så har du automatisk gjort en enkel trusselmodellering. Du ønsker jo selvfølgelig ikke at uvedkommende skal kunne få tilgang til data i systemet ditt og du ønsker ikke at hvem som helst skal se data som overføres mellom brukerne dine og nettstedet ditt.

Hele poenget med trusselmodellering er å tenke som en angriper.

## Identifisere trusler

Det finnes flere måter å identifisere trusler mot et system. I praksis er det viktigste å samle de riktige rollene, beskrive hva som skal beskyttes, og systematisk gå gjennom hvordan løsningen kan angripes eller misbrukes. Noen trusler er kanskje allerede håndtert, mens andre krever nye tiltak. Prosessen gjentas når løsning, dataflyt eller bruksmønster endres.

En enkel arbeidsflyt er:

- avgrens systemet og kritiske verdier
- identifiser trusler og misbruksscenarier
- prioriter risiko og beslutning om tiltak
- verifiser at tiltak faktisk virker
- oppdater modellen jevnlig

## Metodevalg (kort forklart)

Trusselmodellering er viktigere enn hvilken metode du velger. Velg en tilnærming som teamet faktisk klarer å bruke jevnlig.

- **Workshop-basert gjennomgang**: Lav terskel og godt egnet tidlig i prosjekter, i tråd med prinsippene i [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org/).
- **Dataflyt + STRIDE**: Nyttig når du vil gå strukturert gjennom komponenter, grensesnitt og tillitsgrenser, se [OWASP Application Threat Modeling](https://owasp.org/www-project-application-threat-modeling/).
- **Angrepstrær**: Egnet når du vil analysere hvordan et konkret angrepsmål kan nås via flere veier, se [Attack Trees (Bruce Schneier)](https://www.schneier.com/academic/archives/1999/12/attack_trees.html).

## Trusselmodellering av KI-systemer
For løsninger med KI holder det ofte ikke å se på applikasjonskoden alene. Trusselmodellen må også dekke modell, promptflyt, datakilder, evalueringsgrunnlag og hvordan systemet brukes i drift.

Typiske spørsmål er:

* hvilke data kommer inn i modellen, og hvem kontrollerer disse?
* hvilke deler av konteksten er betrodde, og hvilke kommer fra brukere eller eksterne kilder?
* hva er det verste som kan skje dersom modellen gir feil svar eller blir manipulert?
* hvilke sikkerhetsmekanismer finnes rundt modellkall, logging, tilgang og overvåking?

Noen KI-spesifikke trusler som bør vurderes eksplisitt er:

* **Prompt injection**: Inndata eller dokumenter forsøker å overstyre instruksjoner eller få modellen til å utføre uønsket atferd.
* **Data poisoning**: Treningsdata, referansedata eller evalueringsdata blir manipulert slik at modellen lærer feil eller gir dårligere beslutningsgrunnlag.
* **Model misuse**: Systemet brukes til andre formål enn det er designet for, eller i en kontekst der feilmarginene er uakseptable.
* **Leakage**: Sensitiv informasjon lekker ut via prompt, output, logger, vektfiler eller omkringliggende integrasjoner.

For KI-løsninger er det også viktig å beskrive misbruksscenarier, ikke bare direkte angrep. En modell kan for eksempel være teknisk tilgjengelig og fungerende, men likevel utgjøre høy risiko dersom den brukes til beslutningsstøtte uten tilstrekkelige menneskelige kontrollpunkter.

## Fra trusselmodell til krav og oppfølging
En trusselmodell har liten verdi dersom den bare lages én gang og legges bort. Funnene må brukes til å formulere konkrete sikkerhetskrav, testbehov og kontroller i drift.

For eksempel kan en identifisert trussel føre til behov for:

* sterkere autentisering eller tilgangskontroll
* ekstra logging og varsling
* validering av input og output
* eksplisitte begrensninger på bruk av modell eller agent
* jevnlig gjennomgang av datasett, promptflyt eller integrasjoner

For KI-systemer bør trusselmodellen også brukes når man vurderer endringer i modell, datakilder, promptmaler, evalueringssett og overvåking. Endringer her kan gi nye trusler selv om applikasjonskoden ellers er uendret.

Trusselmodellen må versjoneres og holdes oppdatert. Når en har identifisert trusler må mottiltak beskrives og effekten av disse vurderes. En vanlige tilnærming er å gi trusselen en verdi som indikerer alvorlighetsgrad, eksempelvis 1-10 der 10 er verst. Mottiltak vurderes tilsvarende, men med motsatt skala der 1 er liten effekt og 10 (eller opp til kritikalitet) er høyest effekt. Summen av disse gir en residuell risiko som sier noe om hva en sitter igjen med: 
```
Identifiserte trusler       Kritikalitet    Mottiltak   Gjenstående risiko
Trussel 1                   8               8           0
Trussel 2                   2               0           2
Trussel 3                   4               3           1
Total                       14              11          3
```

Når en har identifisert en risiko, er det viktig at den som eier denne risikoen involveres, da det er denne som har ansvaret for å påse at prosjektet leverer kvalitet i tråd med forventninger og krav.
  
Det er viktig at mottiltak valideres for at dette skal ha noen hensikt. Trusselmodellen bør hentes frem med jevne mellomrom for å se hvordan situasjonen har endret seg. Dersom total kritikalitet eller residuell risiko overstiger en grense, bør en vurdere nye tiltak.

For systemer i aktiv drift bør trusselmodellen også brukes når man vurderer hvilke hendelser som skal logges, hva som skal overvåkes og hvilke avvik som skal gi alarm. Dette gjelder særlig for KI-systemer, der misbruk, degradering eller uventet modellatferd kan utvikle seg gradvis over tid.

## Veien videre
### Verktøy

- [Microsoft Threat Modeling Tool](https://docs.microsoft.com/en-us/azure/security/develop/threat-modeling-tool) gir deg en kick-start ved at en del vanlige trusler for diverse tjenester allerede er beskrevet. Dette verktøyet er særlig nyttig dersom man opererer i Microsoft Azure.
- [OWASP Threat Dragon](https://www.owasp.org/index.php/OWASP_Threat_Dragon) er et tilsvarende open source verktøy, som det kan være verdt å ta en titt på.
- [Draw.io](https://draw.io) med denne pakken [drawio-threatmodeling](https://github.com/michenriksen/drawio-threatmodeling) er et verktøy som fungerer både på web og i de vanligste klientene.
- [OWASP pytm](https://github.com/OWASP/pytm) er et open source rammeverk for "threat modeling as code" i Python, nyttig for team som vil versjonere modeller sammen med kode.

### Kortstokker og workshop-hjelpemidler

- [LINDDUN GO](https://linddun.org/go/) er en lett tilgjengelig kortbasert metode for personverntrusler, med gratis PDF-kortstokk og digital versjon.
- [OWASP Cornucopia](https://owasp.org/www-project-cornucopia/) er en etablert, gratis kortstokk for å hente ut sikkerhetskrav i utviklingsprosjekter.
- [Elevation of Privilege (EoP)](https://github.com/adamshostack/eop/) er en klassisk trusselmodellerings-kortstokk fra Adam Shostack, tilgjengelig som åpne ressurser.
- [The Security Cards](https://securitycards.cs.washington.edu/) fra University of Washington er et praktisk brainstorming-sett med utskriftsvennlig kortstokk.

### Kurs og foredrag

- [Threat Modeling Fundamentals (pluralsight)](https://app.pluralsight.com/library/courses/threat-modeling-fundamentals/)
- [Trusselmodellering - hva er det? (BouvetOne 2020, intern lenke)](https://web.microsoftstream.com/video/fda76058-2cf6-4eda-91e2-56aea56d0628)
- [An Introduction to threat modeling (Javazone 2018)](https://vimeo.com/234010802)
- [Threat Modeling in 2019 (RSA Conference 2019)](https://www.youtube.com/watch?v=ZoxHIpzaZ6U)

### Andre kilder
- [Threat Modelling Manifesto](https://www.threatmodelingmanifesto.org)
- [Trusselmodellering](https://infosec.sintef.no/informasjonssikkerhet/2018/06/trusselmodellering/) - Martin Gilje Jaatun, Seniorforsker, Dr. Philos, SINTEF
- [OWASP Application Threat Modeling](https://www.owasp.org/index.php/Application_Threat_Modeling)
- [Attack Trees (Bruce Schneier)](https://www.schneier.com/academic/archives/1999/12/attack_trees.html)
- [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
