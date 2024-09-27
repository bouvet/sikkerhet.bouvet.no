---
sidebar_position: 6
title: Software Supply Chain
slug: /utvikle/dokumentasjon
---

# Dokumentasjon

:::tip Kort oppsummert
Alle utviklingsprosjekter må dokumenteres. Dette er ikke bare viktig for kontinuiteten i prosjektet, men også for å dokumentere sikkerhetsrelaterte tiltak og eventuelle hendelser. 
:::

Dokumentasjon er ofte sett på som et nødvendig onde, og vi er ikke alltid gode nok til å dokumentere prosjektene våre. Mange mener at kildekoden er den beste dokumentasjonen, men denne sier kun hvordan en applikasjon fungerer, ikke nødvendigvis hvorfor den fungerer som den gjør, eller hva som er den egentlige intensjonen. 

Det er mange årsaker til at vi må dokumentere løsningen vi bygger; den mest åpenbare er for å sikre at nye teammedlemmer kan få en forståelse av hva prosjektet går ut på og også for at informasjonen ikke bare skal leve i hodet til enkeltpersoner. Et annet viktig aspekt av dette er dokumentasjon av hensyn til sikkerheten i prosjektet. Dersom vi ikke dokumenterer hvilke tiltak som gjøres og hvorfor, eller hvilke trusler vi står ovenfor og hvordan vi håndterer dette legger vi et kjempestort ansvar på teammedlemmene som kommer etter: Det som for oss er en logisk og fornuftig løsning gitt en sikkerhetskontekst kan virke bakvendt og tungt for noen uten den samme konteksten og kompetansen, og vi risikerer da at viktige tiltak fjernes for å _forenkle_ løsningen - på beskostning av sikkerheten. 

## Dokumentasjonsløsning
Prosjektet må finne en løsning for hvor dokumentasjon oppbevares som gir mening i prosjektet. Husk at god dokumentasjon er like sensitivt som kildekoden, og må behandles deretter. I mange tilfeller kan det være lurt med verktøy som støtter versjonskontroll - i mange tilfeller kan det være lurt å legge dokumentasjon sammen med kildekoden, eller evt i egne repos som kan brukes f.eks. med Azure DevOps wiki. 

## Hva skal dokumenteres
Hva vi bør dokumentere vil variere fra prosjekt til prosjekt. Vi bør alltid ha et [design](/designe/systemskisser) som gir et innblikk i eksempelvis infrastruktur, IAM og dataflyt slik at det er mulig å ettergå dette på senere tidspunkt. 

Trusselmodell må alltid dokumenteres og vedlikeholdes, og eventuelle mitigerende tiltak må også dokumenteres. 

OWASP Top 10 har flere punkter som kan relateres til utviklingsmiljøet og oppsettet av dette, så dersom det er spesielle konfigurasjoner som må på plass bør dette også dokumenteres, slik at en unngår svakheter eller sårbarheter som oppstår dersom noen glemmer viktige steg som ikke er skrevet ned. 

En må også ta inn over seg kritikaliteten til løsningen; dersom det er et system som har 24/7-oppetidskrav og er kritisk for kunden må dokumentasjonen stå i stil med dette, slik at selv den minst erfarne personen i teamet kan feilsøke problemer uten å kjenne løsningen i detalj. 

# Veien videre
* 
* 