---
title: "Dokumentasjon"
weight: 6
translationKey: docs
description: >
  God dokumentasjon er avgjørende for kontinuitet, etterprøvbarhet og sikkerhet. Det gjelder valgene som er tatt, trusler som er vurdert, og systemets faktiske oppførsel – også i AI-systemer.
---

Dokumentasjon er ofte nedprioritert under leveranse, men manglende dokumentasjon skaper reell risiko. Kildekode beskriver *hvordan* noe fungerer, men ikke *hvorfor* valg ble tatt, hvilke trusler som er vurdert, eller hvilke forutsetninger løsningen er avhengig av.

Sikkerhetskontekst som kun finnes i hodet på enkeltpersoner er en sårbarhet. Sikkerhetsmekanismer som ikke er dokumentert risikerer man at fjernes uten at noen forstår konsekvensen. Trusselmodeller som ikke er skrevet ned kan heller ikke vedlikeholdes eller revideres.

God dokumentasjon gir teamet mulighet til å vurdere risiko over tid, ikke bare ved ferdigstilling.

## Dokumentasjonsløsning
Teamet må velge en løsning som faktisk brukes. Dokumentasjon som lever i et verktøy ingen åpner, gir liten verdi.

Populære tilnærminger inkluderer [docs-as-code](https://docsascode.org/), der dokumentasjon skrives i [Markdown](https://en.wikipedia.org/wiki/Markdown) og versjoneres i git ved siden av kildekoden. Dette gir lavere terskel for oppdateringer og full historikk over endringer.

Uansett løsning: husk at god dokumentasjon kan være like sensitiv som kildekoden. Trusselmodeller med åpne funn, arkitekturbeskrivelser og sikkerhetskonfigurasjoner må beskyttes på linje med systemet de beskriver.

## Hva skal dokumenteres
Hva som må dokumenteres vil variere med prosjektets størrelse og kritikalitet, men følgende bør alltid være på plass:

* **Systemdesign**: [Skisser og diagrammer]({{< ref "designe/systemskisser.md" >}}) som viser infrastruktur, dataflyt, IAM og integrasjoner – på et nivå som gjør det mulig å ettergå arkitekturvalgene som er tatt.
* **Trusselmodell**: Hvilke trusler er vurdert, hvilke tiltak er innført og hvilken restrisiko er akseptert. Trusselmodellen må vedlikeholdes og oppdateres ved endringer.
* **Sikkerhetskonfigurasjon**: Konfigurasjoner som er sikkerhetskritiske skal dokumenteres, slik at de ikke utilsiktet endres eller utelates ved oppgradering og nyoppsett.
* **Hendelseslogg og avvik**: Sikkerhetshendelser og avvik bør loggføres og dokumenteres, inkludert hva som ble gjort og hvilke læringspunkter som ble identifisert.
* **Kritiske avhengigheter**: Eksterne tjenester, tredjepartsbiblioteker og integrasjoner som løsningen er avhengig av for korrekt sikkerhetsfunksjon.

Kritikaliteten til løsningen legger føringer for dybden: et system med 24/7-krav og høy konsekvens ved nedetid trenger mer detaljert dokumentasjon enn et internt lavrisikosystem.

## Dokumentasjon av KI-systemer
KI-systemer stiller krav til dokumentasjon som tradisjonell teknisk dokumentasjon ikke fullt ut dekker. Modeller, treningsdata og evalueringsresultater endres over tid og påvirker systemets oppførsel på måter som ikke alltid er synlige i kode alene.

Følgende bør dokumenteres for løsninger med KI-komponenter:

* **Systemformål og tiltenkt bruk**: Hva systemet er designet for å gjøre, hvem det er ment for, og hvilke bruksscenarioer som er utenfor scope.
* **Modellbeskrivelse**: Hvilken modell brukes, hvem som har utviklet den, hvilken versjon og hvilken arkitektur. Dersom modellen er egentrent: treningsoppsett og metodikk.
* **Treningsdata og dataopphav**: Beskrivelse av hvilke data modellen er trent på, inkludert kilder, lisensiering, eventuelle begrensninger og kjente svakheter i datagrunnlaget.
* **Evalueringsresultater**: Dokumenterte målinger på ytelse, nøyaktighet, robusthet og eventuelle bias-funn. Evalueringsgrunnlag og metrikker bør beskrives slik at resultatene kan reproduseres og sammenlignes over tid.
* **Risikovurdering**: Hvilke risikoer er identifisert knyttet til modellens oppførsel, og hvilke tiltak er innført. Dette inkluderer risiko for feilklassifisering, hallusinasjoner, urettferdig behandling og misbruk.
* **Menneskelig oversikt og grenser for autonomi**: Hvor og hvordan mennesker involveres i beslutninger, og hvilke begrensninger som er lagt på hva systemet kan gjøre autonomt.
* **Endringsstyring**: Hvordan modellversjoner styres, testes og rulles ut. Endringer i modell, treningsdata eller konfigurasjon bør spores og begrunnes.

Denne dokumentasjonen er nødvendig både for intern kontroll og for å kunne demonstrere etterlevelse overfor kunder, tilsynsmyndigheter og andre interessenter.

## Veien videre
* [Mastering the Art of Software Documentation: A Comprehensive Guide for Developers and Tech Professionals](https://medium.com/@nomannayeem/mastering-the-art-of-software-documentation-a06aa5d7e697)
* [Why documentation matters, and why you should include it in your code](https://www.freecodecamp.org/news/why-documentation-matters-and-why-you-should-include-it-in-your-code-41ef62dd5c2f/)
* [Dokumentasjonsløsning: Hugo](https://gohugo.io/)
* [Dokumentasjonsløsning: docs-as-code](https://docsascode.org/)
* [EU AI Act – krav til teknisk dokumentasjon for høyrisikoystemer](https://artificialintelligenceact.eu/article/11/)
* [OWASP Artificial Intelligence Security Verification Standard (AISVS)](https://owasp.org/www-project-artificial-intelligence-security-verification-standard-aisvs-docs/)
* [Atlassian: How to ace internal documentation](https://www.atlassian.com/work-management/knowledge-sharing/documentation)
