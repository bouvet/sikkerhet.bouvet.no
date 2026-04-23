---
title: "Sikkerhetskrav"
weight: 1
translationKey: req
description: >
  Hvordan kan en bygge sikkerhet i en løsning dersom en ikke har veldefinerte sikkerhetskrav? 
---
Noen krav er implisitte, som eksempelvis bruk av HTTPS/TLS, mens andre vil være eksplisitte og definert av lovverk, kunde eller tredjepart. Dersom kunden ikke har noen spesifikke krav er det likevel viktig at leveranseteamet lager en kravliste slik at rammene for prosjektet er dokumentert. 

De fleste prosjekter må forholde seg til ulike krav fra Bouvet, kunden og eksterne parter. Alle utviklingsteam må ha kontroll på hvilke krav som stilles til leveransen:
* Fra Bouvet (der dette er aktuelt)
* Fra kunden
* Lovpålagte krav

Av lovpålagte krav kan en ha generelle krav eksempelvis knyttet til [personvern]({{< ref "planlegge/data-og-klassifisering.md#personvern" >}}), men mange bransjer opererer med mer spesifikke forskrifter som stiller andre krav som vil gjelde i tillegg. 

I mange tilfeller er det klart både for Bouvet og kunde hva som gjelder, men det er viktig at teamet verifiserer dette før en begynner å utvikle løsningen, slik at kostbare og tidkrevende overraskelser kan unngås. Uavhengig av hva som er definert hvor, bør teamet uansett dokumentere hvilke krav en forholder seg til slik at dette er bevart for ettertiden. 

## Grunnleggende sikkerhetskrav

Dersom leveransen mangler andre krav, kan [sjekklisten]({{< ref "sjekklisten.md" >}}) være til god hjelp. Denne dekker de store linjene, og de fleste punktene kan gjennomføres av teamet selv. Gjennom å bruke sjekklista får teamet et overblikk over tilstanden til leveransen - og mulige svakheter og sårbarheter.

Dersom denne ikke er nok, og teamet eller kunden ønsker noe mer omfattende kan [OWASPs Application Verification Standard (ASVS)](https://owasp.org/www-project-application-security-verification-standard/) brukes. Denne er en mer dyptgående sjekkliste som tilbyr tre nivåer med testing: 
* Nivå 1: Black box - testing gjøres mot kjørende løsning
* Nivå 2: Balansert - Punktene fra level 1, samt gjennomgang av elementer relatert til prosess, teknologi og implementasjon 
* Nivå 3: Dyptgående gjennomgang som inkluderer de forrige nivåene, samt en mer detaljert gjennomgang av oppsett, arkitektur og annet. 

## Sikkerhetskrav for AI-systemer

Dersom løsningen inneholder eller er avhengig av kunstig intelligens (KI), kreves tilleggskrav utover standard sikkerhetskrav. AI-systemer introduserer egne risikodimensjoner som må håndteres på kravnivå.

Sikkerhetskravene for AI-systemer bør dekke:

* **Sikkerhet**: Hva er akseptabel oppførsel for modellen, og hvordan skal systemet respondere ved anomalier? Hvordan beskytter man systemet mot misbruk eller manipulering?
* **Personvern og databruk**: Hvilke data bruker AI-systemet for trening eller inferens? Hvordan håndteres persondata, og hvordan sikres det at systemet ikke brukes til uintendert formål?
* **Overvåking og misbruk**: Hvordan skal systemet overvåkes for anomal atferd? Hva er de akseptable bruksområdene, og hvordan avdekkes misbruk?

For detaljerte råd om sikker implementering av KI i utvikling, se [Bruk av kunstig intelligens]({{< ref "planlegge/ai.md" >}}).

## Veien videre
* [Lovdata: Lov om digital sikkerhet (digitalsikkerhetsloven)](https://lovdata.no/dokument/NL/lov/2023-12-20-108)
* [Datatilsynet: Programvareutvikling med innebygd personvern - Krav](https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/programvareutvikling-med-innebygd-personvern/krav/)
* [Sjekklisten for sikkerhet]({{< ref "sjekklisten.md" >}})
* [OWASPs Application Verification Standard (ASVS)](https://owasp.org/www-project-application-security-verification-standard/)
* [OWASP Artificial Intelligence Security Verification Standard (AISVS)](https://owasp.org/www-project-artificial-intelligence-security-verification-standard-aisvs-docs/)
* [OWASP AI Agent Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html)