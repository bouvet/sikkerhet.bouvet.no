---
title: "CI/CD"
weight: 1
translationKey: cicd
description: >
  Automatisert bygging og deploy fjerner menneskelige feil og sikrer reproduserbarhet. CI/CD gir også mulighet til å iverksette sikkerhetskontroller som ellers ville vært upraktisk å gjennomføre manuelt.
---

Continuous Integration og Continuous Delivery (CI/CD) er praksis for å automatisere bygging, testing og distribusjon av kode. En pipeline bygger løsningen konsistent hver gang, kobler resultatene mot versjonskontroll, og gjør det mulig å gå tilbake og reprodusere eller justere ethvert steg.

Utover bygging kan en pipeline iverksette sikkerhetskontroller som avhengighetsskanning, hemmelighetsdeteksjon, statisk kodeanalyse og integrert testing. Det kritiske er at alle disse kontrollene kjøres *før* deployment til produksjon.

{{< figure src="../cicd.png" >}}

## Prinsipielle grunnlag
En trygg CI/CD-praksis bygger på noen få grunnprinsipp:

* **Minst privilegie**: Pipelines skal ha minst mulig tilgang. Det som kreves for å bygge applikasjonen er ikke det samme som det som kreves for å deploye til produksjon.
* **Sporbarhet**: Hver kjøring skal være sporbar til kode, hvem som trigget den og hva som skjedde. Loggene skal oppbevares for revisjon.
* **Immutability**: Artifakter som bygges skal ikke endres etter bygging – de skal være signert og upåvirkelige.
* **Kontrollert flow**: Deploy til produksjon skal kreve eksplisitt godkjenning fra mennesker, ikke være automatisk.
* **Isolasjon**: Bygge- og deploymiljøer skal være isolert fra hverandre og fra produksjon.

## Sikkerhetskontroller i pipeline
En pipeline bør som minimum inkludere:

* **Hemmelighetsdeteksjon**: Skann kode for hardkodede nøkler, tokens og sensitiv informasjon før commit til main.
* **Avhengighetsskanning**: Verifiser at tredjepartsbiblioteker ikke inneholder kjente sårbarheter.
* **Statisk analyse (SAST)**: Kjør automatisert kodeanalyse for å avdekke vanlige mønster av svakheter.
* **Lisensiering**: Sjekk at avhengigheter bruker godkjente lisenser.
* **Arketyper**: Verifiser at byggesystemer, containere og konfigurasjoner samsvarer med sikkerhetsstandarden.
* **Testing**: Kjør automatiserte tester som inkluderer sikkerhetsrelevante scenarioer.

Funnene fra disse kontrollene skal varsle utvikler, og kritiske funn skal blokkere deployering – ikke bare advare.

## Branching og promote-modell
Hvordan du kontrollerer hvilken kode som kan deployes hvor, er helt sentralt for sikkerheten:

* **Main-branch beskyttelse**: Kode som skal til produksjon bør krysse en main-branch som er beskyttet. Direkte push bør ikke tillates.
* **Pull request-gjennomgang**: Alle endringer til main skal gjennomgås av minst en medarbeid før merge.
* **Automatiserte tillatelser**: For ikke-kritiske endringer kan man vurdere automatisert merge etter at sjekker passerer, men kritiske områder skal alltid ha menneskelig godkjenning.
* **Promosjon til prod**: Deploy til produksjon skal kreve eksplisitt godkjenning, helst fra en rolle eller person som er annen enn den som skrev koden.

## Hemmeligheter og credentials i pipeline
Secrets som påkrevd for å bygge og deploye må håndteres med særlig forsiktighet:

* **Aldri hardkode**: Secrets skal aldri være i kode, ikke engang i pull requests.
* **Bruk secret-håndtering**: Bruk verktøyet sitt native secret-lagring (Azure Key Vault, GitHub Secrets, o.l.), ikke miljøvariabler som logges.
* **Roter regelmessig**: Access keys og credentials som brukes av pipelines skal roteres regelmessig.
* **Logg forsvarlig**: Loggene fra pipeline skal ikke inneholde secrets, selv ikke i maskeringsfunksjonaliteten slippes det noen ganger gjennom.

## AI-systemer: Modell- og pipeline-deployment
For løsninger som bruker KI er deployment mer enn å deploye kode – det inkluderer modeller, treningsdata, embeddings og pipelines for databehandling.

### Modellversioning og registrering
Modeller skal ha samme versjonering som kode:

* **Eksplisitt versioning**: Hver modellversjon skal ha et unikt identifikatort og dato, og skal kunne identifiseres i produksjon.
* **Modellregister**: Oppbevar metadatainformasjon om modeller – hvem som trente den, når, på hvilket datasett, evalueringsresultat og eventuell dokumentasjon.
* **Immutability**: En publisert modellversjon skal ikke kunne endres. Endre oppsettet eller parametrene = ny versjon.
* **Rollback-planlegging**: Det skal være mulig å raskt rulle tilbake til en tidligere modellversjon hvis en ny versjon introduserer dårlig atferd.

### Validering før produksjonsdeploy
Før en modell settes i produksjon skal minst følgende være på plass:

* **Nøyaktighet og ytelse**: Modellen oppfyller definerte kvalitetskrav på evalueringssett som er skilt fra treningssett.
* **Bias- og driftdeteksjon**: Testing for kjente bias-mønstre og estimering av hvordan modellen oppfører seg med nye data som skiller seg fra treningsdata.
* **Adversariell testing**: Prøving av modellen med data som er spesielt konstruert for å bryte den.
* **Latency- og ressurssjekk**: Sjekk at modellen har akseptabel responstid og ressursforbruk i det oppsettet det skal kjøres.
* **Output-skanning**: Verifisering av at modellens output er tolket og kontekstualisert riktig før det presenteres til bruker.

### Signering og integritet av modeller
Modeller skal være signert og deres integritet skal verifiseres:

* **Digitale signaturer**: Modeller skal signeres kryptografisk av en kjent og autorisert aktør.
* **Sjekk ved bruk**: Når en modell lastes inn i produksjon skal signaturen verifiseres før den brukes.
* **Audit-spor**: Det skal være mulig å dokumentere hvem som godkjente deployering av hver modellversjon.

### Pipeline-drift for data og embeddings
Dersom løsningen inkluderer pipelines for databehandling, embeddingsgenerering eller kontinuerlig retrening:

* **Datasett-isolasjon**: Trenings-, validerings- og testdatasett skal være adskilt og kobles til riktig modellversjon.
* **Transformasjonsversioning**: Datapreprosesseringssteg skal være versjonert og reproduserbare.
* **Monitoring av datasett-drift**: Overvåk kvaliteten på inngangsdataene for å oppdage når data endrer seg på måter som påvirker modellens ytelse.
* **Automatisert drift-deteksjon**: Hvis mulig, bygg inn deteksjon for når modellen begynner å produsere output som skiller seg signifikant fra trenings- og evalueringsresultatene.

## Praktisk opptak i team
Implementering av CI/CD bør gjøres trinnvis:

* Start med basic bygging og testing, legg til sikkerhetskontroller gradvis.
* Dokumenter pipeline-konfigurasjonen som kode (pipeline-as-code) slik at den kan revideres og versjoneres.
* Gi teamet tid til å lære verktøyet og praksisen før du innfører strengere krav.
* Overvåk at pipelines faktisk kjører, og at funnene følges opp – en pipeline som varsler om problemer som ikke blir tatt hånd om, skaper bare "alert fatigue".

## Veien videre
* [Microsoft: Azure Pipelines](https://learn.microsoft.com/en-us/azure/devops/pipelines/get-started/pipelines-get-started?view=azure-devops)
* [Github: Github Actions](https://docs.github.com/en/actions)
* [OWASP: Top 10 CI/CD Security Risks](https://owasp.org/www-project-top-10-ci-cd-security-risks/)
* [OWASP: CI/CD Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/CI_CD_Security_Cheat_Sheet.html)
* [Google: MLOps Continuous Delivery and Automation Pipelines in Machine Learning](https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning)
* [OWASP: AI Model Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html)