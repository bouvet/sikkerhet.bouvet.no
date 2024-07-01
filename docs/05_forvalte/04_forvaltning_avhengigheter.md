---
sidebar_position: 1
title: Forvaltning av avhengigheter
---

# Forvaltning av avhengigheter
:::tip Kort oppsummert
Status på avhengighetene vi har vil endre seg over tid, og det er ikke til å unngå at svakheter oppdages som må mitigeres av oss. Denne jobben kan være så enkel som at vi oppdaterer til en ny versjon, men kan også kreve større endringer i applikasjonen.
:::

Når teamet er i forvaltningsmodus gjelder fremdeles de fleste problemstillingene nevnt i artikkelen om [Software Supply Chain](../03_utvikle/05_software_supply_chain.md). Dere vil komme i situasjoner der 
* det oppdages en kritisk sårbarhet i en pakke dere bruker
* pakker deprekeres og erstattes med noe nytt som ikke er direkte kompatibelt med det gamle
* utviklere bak pakker slutter å vedlikeholde pakkene
* ondsinnede aktører overtar en pakke og bruker den for å spre malware

....og helt sikkert andre varianter som resulterer i at dere må gjøre _noe_. For å sikre at pakker som treffer ett eller flere av punktene over tas tak i. Verktøy som Sonatype og andre gir muligheten til å overvåke ulike steg i livssyklusen, med mulighet til å varsle når sårbarheter eller andre hendelser som påvirker kvaliteten inntreffer. 

# Veien videre
* [Sonatype: State of the software supply chain](https://www.sonatype.com/state-of-the-software-supply-chain/introduction)
* [Wikipedia: Source Composition Analysis](https://en.wikipedia.org/wiki/Software_composition_analysis)
* [Eksempel på CDN-angrep: Polyfill supply chain attack hits 100K+ sites](https://sansec.io/research/polyfill-supply-chain-attackX)
* [Eksempel på kompromittert bibliotek: xz-Utils](https://arstechnica.com/security/2024/04/what-we-know-about-the-xz-utils-backdoor-that-almost-infected-the-world/)