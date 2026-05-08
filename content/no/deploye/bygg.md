---
title: "Bygging"
weight: 2
translationKey: build
description: >
  Bygging handler om å produsere et reproduserbart artefakt som kan verifiseres og stoles på før deploy. Valg av byggmiljø, avhengigheter og signering er sentrale kontrollpunkter.
---

Bygging er steget der kildekode blir til et deploybart artefakt. Målet er at artefaktet skal kunne reproduseres, kontrolleres og spores tilbake til en konkret commit og pipeline-kjøring.

Denne artikkelen fokuserer på selve byggingen. Overordnet pipeline-styring er beskrevet i [CI/CD]({{< ref "deploye/cicd.md" >}}), og utrulling til miljø er beskrevet i [Deployering]({{< ref "deploye/deploy.md" >}}).

## Byggmiljø og byggeagenter
Byggagenter kommer ofte i to hovedformer:

* skyleverandørstyrte agenter
* selvstyrte agenter (i sky eller on-premise)

Skyleverandørstyrte agenter gir ofte lavere driftskost og enklere vedlikehold. Selvstyrte agenter gir mer kontroll, men også fullt ansvar for hardening, patching og tilgangsstyring.

Uansett modell er byggmiljøet et høyrisikopunkt. Dersom byggmiljøet kompromitteres kan alle artefakter som produseres på det miljøet bli upålitelige.

## Krav til trygg bygging
Et robust byggoppsett bør minimum ha:

* **Reproduserbarhet**: Samme input skal gi samme artefakt. Unngå skjulte avhengigheter og udokumenterte manuelle steg.
* **Pinned avhengigheter**: Lås versjoner eksplisitt, og unngå "latest" i bygg.
* **Isolasjon**: Skill byggjobber mellom prosjekter med ulike risikonivå.
* **Kontroll på byggverktøy**: Kompilatorer, baseimages og plugins bør versjonstyres og godkjennes.
* **Sporbarhet**: Artefaktet må kunne kobles til commit, pipeline-kjøring og byggkonfigurasjon.

Risiko i tredjepartsavhengigheter er beskrevet i [Forsyningskjedesikkerhet]({{< ref "utvikle/software-supply-chain.md" >}}).

## Signering og artefaktintegritet
Ja, signering hører naturlig hjemme i bygg-fasen. Signering bør gjøres rett etter at artefaktet er produsert og verifisert.

Praktiske kontroller:

* **Signer artefakter**: Signer containere, binærer og pakker med en kontrollert nøkkel.
* **Verifiser signatur ved deploy**: Utrulling bør stoppe dersom signatur mangler eller er ugyldig.
* **Generer SBOM**: Lag oversikt over innholdet i artefaktet for sporbarhet og sårbarhetshåndtering.
* **Bygg provenance-attestering**: Dokumenter hva som bygde artefaktet, fra hvilken kilde og under hvilke forutsetninger.

## Bygging for KI-systemer
For KI-løsninger omfatter bygging mer enn vanlig programmerkode. Treningsmodeller, støttefiler, datarepresentasjoner og kjørbare miljøer som brukes til å kjøre modellen må også håndteres kontrollert gjennom hele prosessen.



* **Versjoner modellartefakter**: Behandle modellversjoner på lik linje med kodeversjoner.
* **Signer modell- og inferensartefakter**: Bruk samme integritetskrav for modeller som for øvrige artefakter.
* **Dokumenter datasett- og modellversjoner**: Beskriv tydelig hva som inngår i hver release.
* **Unngå dynamisk nedlasting i produksjon**: Ikke last ned modellfiler utenfor styrt release-flyt.

## Veien videre
* [Microsoft: Secure your Azure Pipelines](https://learn.microsoft.com/en-us/azure/devops/pipelines/security/overview?view=azure-devops)
* [SLSA: Supply-chain Levels for Software Artifacts](https://slsa.dev/)
* [Sigstore: Cosign](https://www.sigstore.dev/)
* [OWASP: Software Supply Chain Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Software_Supply_Chain_Security_Cheat_Sheet.html)
* [OWASP: Top 10 CI/CD Security Risks](https://owasp.org/www-project-top-10-ci-cd-security-risks/)
* [OWASP: CI/CD Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/CI_CD_Security_Cheat_Sheet.html)