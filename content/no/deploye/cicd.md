---
title: "CI/CD"
weight: 1
translationKey: cicd
description: >
  CI/CD er den overordnede rammen for automatisering av bygg, verifikasjon og deployering. En god pipeline gir sporbarhet, kvalitetssikring og kontrollert utrulling på tvers av miljøer.
---

Continuous Integration og Continuous Delivery (CI/CD) er praksis for å automatisere flyten fra kodeendring til kjørende løsning. Pipelines gir en standardisert prosess for bygging, verifikasjon og utrulling, og reduserer risikoen for manuelle feil.

Poenget med CI/CD er ikke bare fart, men kontroll. Hver kjøring bør være sporbar, kunne gjentas og ha tydelige stoppunkt før noe går til produksjon.

{{< figure src="../cicd.png" >}}

## Prinsipper for CI/CD
En trygg CI/CD-praksis bygger på noen enkle grunnprinsipper:

* **Minst mulig tilgang**: Pipeline skal bare ha tilgangene den faktisk trenger.
* **Sporbarhet**: Du skal kunne se hva som ble kjørt, av hvem og mot hvilken kode.
* **Automatiske regler**: Kvalitets- og sikkerhetskrav bør ligge i pipeline, ikke i hodet på folk.
* **Kontrollert flyt**: Produksjon bør ha egne kontrollpunkt med tester og godkjenning.
* **Skille mellom miljøer**: Bygg, test og produksjon bør ikke dele identitet og tilganger.

## Sikkerhetskontroller i pipeline
En pipeline bør minimum ha:

* **Skann for hemmeligheter**: Finn hardkodede nøkler, tokens og annen sensitiv informasjon.
* **Skann avhengigheter**: Finn kjente sårbarheter i tredjepartsbiblioteker.
* **Statisk kodeanalyse (SAST)**: Finn vanlige svakheter tidlig.
* **Automatiserte tester**: Kjør enhets-, integrasjons- og relevante sikkerhetstester.
* **Kjøringslogg**: Ta vare på logger og metadata for revisjon.

Kritiske funn bør stoppe utrulling, ikke bare gi en advarsel.

## Branching og promote-modell
Branching henger tett sammen med CI/CD, men detaljene hører hjemme i [Git-artikkelen]({{< ref "utvikle/git.md#branchingstrategi" >}}).

I CI/CD-sammenheng er hovedpoenget:

* kode til produksjon bør gå via pull request og beskyttet hovedgren
* utrulling til produksjon bør kreve passerte kontroller og godkjenning

## Hemmeligheter og credentials i pipeline
Hemmeligheter som brukes i pipeline må håndteres med særlig forsiktighet:

* **Aldri i kode**: Nøkler og tokens skal ikke ligge i repo.
* **Bruk sikker lagring**: Bruk dedikert secret-løsning i plattformen.
* **Roter jevnlig**: Bytt nøkler og tokens med faste intervaller.
* **Unngå lekkasje i logger**: Sørg for at hemmeligheter ikke havner i logg.

## Tredjepartskomponenter i pipeline
Pipeline-konfigurasjonen er en del av forsyningskjeden. Tredjepartskomponenter i pipeline (actions, orbs, templates, byggeimages) kjører med pipeline-tilganger og må behandles som kode du selv har ansvar for.

Det innebærer at en kompromittert eller ondsinnet tredjepartskomponent kan:

* eksfiltrere secrets og credentials som er tilgjengelige i kjøringen
* manipulere artefakter som bygges, uten at dette er synlig i koden din
* endre atferd ved oppdatering av en tag som peker på ny kode uten at du har godkjent endringen

Tiltak:

* **Pin til commit-hash, ikke tag**: En tag kan flyttes uten at du merker det.
* **Begrens tilgang for actions**: Gi en komponent bare de rettighetene den faktisk trenger.
* **Revider tredjeparts actions**: Gjennomgå kildekoden til actions du tar inn, spesielt de som håndterer secrets eller deployer til prod.
* **Bruk interne eller offisielle actions**: Foretrekk actions fra den samme organisasjonen, eller fra verifiserte aktører med god historikk.
* **Overvåk endringer**: Bruk Dependabot eller tilsvarende til å varsle når actions oppdateres, slik at oppdateringen er eksplisitt og sporet.

Det generelle bildet for forsyningskjedesikkerhet er beskrevet i [Forsyningskjedesikkerhet]({{< ref "utvikle/software-supply-chain.md" >}}).

## AI i CI/CD
For KI-løsninger bør samme pipeline-prinsipper gjelde for kode, modeller, datasett og konfigurasjon. Utrulling bør stoppes hvis verifikasjon ikke er bestått.

Detaljer om trygg bygging av artefakter (inkludert signering) er beskrevet i [Bygging]({{< ref "deploye/bygg.md" >}}), og trygg utrulling til miljøer i [Deployering]({{< ref "deploye/deploy.md" >}}).

## Praktisk opptak i team
Implementering av CI/CD bør gjøres trinnvis:

* Start med grunnleggende bygging og testing, legg til sikkerhetskontroller gradvis.
* Dokumenter pipeline-konfigurasjonen som kode slik at den kan revideres og versjoneres.
* Gi teamet tid til å lære verktøyet og praksisen før du innfører strengere krav.
* Følg opp funn i praksis. Alarmer uten oppfølging gir lite verdi.

## Veien videre
* [Microsoft: Azure Pipelines](https://learn.microsoft.com/en-us/azure/devops/pipelines/get-started/key-pipelines-concepts?view=azure-devops)
* [Github: Github Actions](https://docs.github.com/en/actions)
* [OWASP: Top 10 CI/CD Security Risks](https://owasp.org/www-project-top-10-ci-cd-security-risks/)
* [OWASP: CI/CD Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/CI_CD_Security_Cheat_Sheet.html)
* [Google: MLOps Continuous Delivery and Automation Pipelines in Machine Learning](https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning)