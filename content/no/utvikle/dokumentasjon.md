---
title: "Dokumentasjon"
weight: 6
translationKey: docs
description: >
  Alle utviklingsprosjekter må dokumenteres. Dette er ikke bare viktig for kontinuiteten i prosjektet, men også for å dokumentere sikkerhetsrelaterte tiltak og eventuelle hendelser. 
---

Dokumentasjon er ofte sett på som et nødvendig onde, og vi er ikke alltid gode nok til å dokumentere prosjektene våre. Mange mener at kildekoden er den beste dokumentasjonen, men denne sier kun hvordan en applikasjon fungerer, ikke nødvendigvis hvorfor den fungerer som den gjør, eller hva som er den egentlige intensjonen. 

Sikkerhetsbildet er en viktig del av dokumentasjonen: Hvilke vurderinger ligger til grunn for valgene som er gjort, og hvilken risiko og konsekvens medfører disse? En trusselvurdering er ofte et nyttig verktøy når en skal vurdere tiltak i prosjektet, ikke minst når en re-evaluerer trusselbildet og tiltakene en stund etterpå. 

Ved å sikre god dokumentasjon unngår vi i større grad å basere oss på en løsning der sikkerhetskonteksten ligger i hodet på enkeltpersoner. Vi reduserer også faren for at sikkerhetsmekanismer fjernes av utviklere som ikke har sikkerhetskompetanse eller kjennskap til kontekst. 

## Dokumentasjonsløsning
Prosjektet må finne en løsning for hvor dokumentasjon oppbevares som gir mening i prosjektet. Det finnes mange ulike løsninger som gir muligheten for å oppbevare dokumentasjon som f.eks. [Markdown](https://en.wikipedia.org/wiki/Markdown) i et git-repo - løsningen du ser på nå er bygget i [Hugo](https://gohugo.io/), men det finnes utallige andre varianter. 

Når du skal velge løsning er det viktig å være klar over behovet. Hvilken strategi teamet har for å oppbevare f.eks. trusselmodeller som ikke er mitigert vil legge føringer for hvilken løsning som velges, og hvilken tilgang brukerne har til denne. Husk at god dokumentasjon kan være like sensitivt som kildekoden, og må behandles deretter.

## Hva skal dokumenteres
Hva vi bør dokumentere vil variere fra prosjekt til prosjekt. Vi bør alltid ha et [design]({{< ref "designe/systemskisser.md" >}}) som gir et innblikk i eksempelvis infrastruktur, IAM og dataflyt slik at det er mulig å ettergå dette på senere tidspunkt. 

Trusselmodell må alltid dokumenteres og vedlikeholdes, og eventuelle mitigerende tiltak må også dokumenteres. Vær imidlertid varsom med hvor en trusselmodell legges; dersom modellen inneholder kritiske funn som ikke er mitigert vil den være til god hjelp for en potensiell angriper. Vurder å oppbevare denne på et sted som kun er tilgjengelig for teamet frem til den eventuelt kan publiseres i en mer åpen løsning. 

OWASP Top 10 har flere punkter som kan relateres til utviklingsmiljøet og oppsettet av dette, så dersom det er spesielle konfigurasjoner som må på plass bør dette også dokumenteres, slik at en unngår svakheter eller sårbarheter som oppstår dersom noen glemmer viktige steg som ikke er skrevet ned. 

En må også ta inn over seg kritikaliteten til løsningen; dersom det er et system som har 24/7-oppetidskrav og er kritisk for kunden må dokumentasjonen stå i stil med dette, slik at selv den minst erfarne personen i teamet kan feilsøke problemer uten å kjenne løsningen i detalj. 

## Veien videre
* [Dokumentasjonsløsning: Hugo](https://gohugo.io/)
* [Dokumentasjonsløsning: docs-as-code](https://docsascode.org/)
* [Atlassian: How to ace internal documentation](https://www.atlassian.com/work-management/knowledge-sharing/documentation)
* [Mastering the Art of Software Documentation: A Comprehensive Guide for Developers and Tech Professionals](https://medium.com/@nomannayeem/mastering-the-art-of-software-documentation-a06aa5d7e697)
* [Why documentation matters, and why you should include it in your code](https://www.freecodecamp.org/news/why-documentation-matters-and-why-you-should-include-it-in-your-code-41ef62dd5c2f/)
