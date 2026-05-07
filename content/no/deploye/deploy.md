---
title: "Deployering"
weight: 3
translationKey: deploy2
description: >
  Deployering handler om kontrollert flytting av et verifisert artefakt til kjøremiljøer. Målet er trygg utrulling, rask rollback og forutsigbar drift.
---

Deployering starter etter at artefaktet er bygget og verifisert. Hovedprinsippet er at samme artefakt promoteres mellom miljøer, uten ny bygging underveis.

Denne artikkelen fokuserer på utrulling til miljøer. Selve pipeline-styringen er dekket i [CI/CD]({{< ref "deploye/cicd.md" >}}), og detaljer om trygg artefaktproduksjon i [Bygging]({{< ref "deploye/bygg.md" >}}).

{{< figure src="../cicd.png" >}}

## Prinsipper for trygg deploy
For å redusere drifts- og sikkerhetsrisiko bør deployprosessen bygge på:

* **Promotering av samme artefakt**: Ikke bygg på nytt per miljø.
* **Verifikasjon før utrulling**: Deploy skal stoppe dersom nødvendige kontroller ikke er bestått.
* **Automatisert og idempotent utrulling**: Samme deploykommando skal gi samme resultat.
* **Sporbarhet**: Hver utrulling skal kunne kobles til artefakt, commit og godkjenning.

{{< figure src="../deploy.png" >}}

## Hva en deployprosess bør dekke
En moden deployprosess bør minimum dekke:

* **Miljøforflytning (dev-test-prod)**: Tydelige gates mellom miljøer.
* **Godkjenning og endringskontroll**: Krav til godkjenning før produksjon.
* **Release-strategi**: Støtte for blue/green, canary eller rolling deploy der det er hensiktsmessig.
* **Rollback**: Definert og testet prosedyre for rask reversering.
* **Smoke-tester etter deploy**: Verifiser at løsningen faktisk fungerer i målmiljøet.
* **Observabilitet**: Overvåkning og varsling som fanger feil tidlig etter utrulling.

## Tilgangsstyring og miljøsikkerhet
Deploy-tilgang må behandles som en privilegert operasjon:

* **Minst privilegie for deploy-identiteter**: Gi kun tilgangene som er nødvendige for utrulling.
* **Skille mellom roller**: Skille roller for utvikling og produksjonsutrulling der det er mulig.
* **Begrens trigging av produksjonsdeploy**: Begrens hvem som kan starte deployering til produksjon.
* **Sporbarhet på utrullinger**: Logg hvem som deployet hva, når og til hvilket miljø.

## Deploy av KI-systemer
For KI-løsninger må deployprosessen også håndtere modellatferd og datadrevet risiko:

* **Modellutrulling med kontroll**: Bruk gradvis utrulling (for eksempel canary) for å redusere konsekvens ved feil modelloppførsel.
* **Tydelig versjonskobling**: Kjørende løsning skal kunne kobles til eksakt modellversjon, kodeversjon og konfigurasjon.
* **Verifisering i målmiljø**: Kjør relevante kvalitets- og sikkerhetssjekker også etter deploy, ikke bare i bygg.
* **Driftsovervåkning**: Følg med på modellkvalitet, responstid og eventuelle tegn til drift i data eller output.
* **Rask tilbakeføring**: Ha klar prosedyre for å bytte tilbake til tidligere modellversjon ved avvik.

## Veien videre
* [Microsoft: Deployment jobs](https://learn.microsoft.com/en-us/azure/devops/pipelines/process/deployment-jobs?view=azure-devops)
* [Microsoft: Introduction to deployment patterns](https://learn.microsoft.com/en-us/training/modules/introduction-to-deployment-patterns/)
* [GitHub: Environments](https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment)
* [OWASP: Top 10 CI/CD Security Risks](https://owasp.org/www-project-top-10-ci-cd-security-risks/)
* [OWASP: CI/CD Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/CI_CD_Security_Cheat_Sheet.html)