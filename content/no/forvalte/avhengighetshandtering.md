---
title: "Forvaltning av avhengigheter"
weight: 4
translationKey: depsmgmt
description: >
  Status på avhengighetene vi har vil endre seg over tid, og det er ikke til å unngå at svakheter oppdages som må mitigeres av oss. Denne jobben kan være så enkel som at vi oppdaterer til en ny versjon, men kan også kreve større endringer i applikasjonen.
---

Når teamet er i forvaltningsmodus gjelder fremdeles de fleste problemstillingene nevnt i artikkelen om [Software Supply Chain]({{< ref "utvikle/software-supply-chain.md" >}}). Dere vil komme i situasjoner der 
* det oppdages en kritisk sårbarhet i en pakke dere bruker
* pakker deprekeres og erstattes med noe nytt som ikke er direkte kompatibelt med det gamle
* utviklere bak pakker slutter å vedlikeholde pakkene
* ondsinnede aktører overtar en pakke og bruker den for å spre malware

....og helt sikkert andre varianter som resulterer i at dere må gjøre _noe_. For å sikre at pakker som treffer ett eller flere av punktene over tas tak i. Verktøy som Sonatype og andre gir muligheten til å overvåke ulike steg i livssyklusen, med mulighet til å varsle når sårbarheter eller andre hendelser som påvirker kvaliteten inntreffer. 

## Bruk av CDN
Content-delivery-networks for å distribuere Javascript-bibliotek har blitt brukt av mange som en enkel måte å inkludere disse i koden uten å måtte inkludere dette i build eller deploy-prosessen. Tanken er god, men du får da en direkte avhengighet til en kilde du ikke har noen kontroll på som kan [misbrukes til å spre malware](https://sansec.io/research/polyfill-supply-chain-attack).

## Interne speil og fork av kritiske avhengigheter
For spesielt kritiske avhengigheter kan det være riktig å hoste artefakter i interne registre eller bruke fork av pakker, actions og andre byggkomponenter. Dette reduserer eksponering mot hendelser hos tredjepart, men øker samtidig forvaltningsansvaret internt.

Dette bør brukes selektivt, typisk når avhengigheten er forretningskritisk, har høy påvirkning ved kompromittering, og teamet faktisk har kapasitet til å forvalte den over tid.

Hvis dere velger denne tilnærmingen, bør dere minimum ha:

* tydelig eierskap for vedlikehold, patching og oppdateringsfrekvens
* rutiner for å hente inn og verifisere nye upstream-versjoner
* sporbarhet på hva som er intern kopi/fork, og hva som er original kilde
* samme krav til skanning, lisenskontroll og review som for øvrige avhengigheter

## Interne komponenter som teamet drifter selv
Forvaltning handler ikke bare om pakker fra eksterne økosystemer. Mange team drifter også interne komponenter som applikasjonsservere, integrasjonstjenester, containere eller virtuelle maskiner. Disse må inngå i samme forvaltningsrutine som resten av løsningen.

### Oppdatering og støtte
Interne komponenter må holdes oppdatert med en planlagt patchrutine. Følg leverandørens release-notater og vurder hva som faktisk må oppgraderes nå, og hva som kan planlegges inn senere. Komponenter som ikke lenger er supportert bør fases ut.

### Sikkerhetskontroller rundt komponentene
Komponentene må være en del av helhetlig sikkerhetsdesign. Teamet bør ha oversikt over nettverksflater, identiteter/roller og eksponering internt og eksternt. Bruk prinsippet "deny by default": åpne kun eksplisitt for det som faktisk trengs.

### Logging og monitorering
Interne komponenter må monitoreres på linje med øvrige tjenester. Logger må være pålitelige og beskyttet mot manipulering, og inngå i teamets rutiner for hendelseshåndtering. Se også [Logging og monitorering]({{< ref "forvalte/logging-monitorering.md" >}}).

## Bruk av SBOM
Software Bill Of Materials (SBOM) er en tilnærming der vi genererer en oversikt over alle avhengigheter med versjoner fra løsningene våre. Denne oversikten bør knyttes til hver release, slik at det er tydelig hvilke avhengigheter som faktisk var i bruk på et gitt tidspunkt.

For KI-løsninger bør oversikten også inkludere relevante AI-artefakter som modeller, modelldigests, tokenizers og sentrale datasett-referanser der dette er relevant. Det finnes flere mer eller mindre standardiserte filformater for SBOM, og de kan arkiveres eller legges inn i andre løsninger for å forenkle monitorering fra sentralt hold.

## Veien videre
* [Sonatype: State of the software supply chain](https://www.sonatype.com/state-of-the-software-supply-chain/introduction)
* [Wikipedia: Software Composition Analysis](https://en.wikipedia.org/wiki/Software_composition_analysis)
* [Eksempel på CDN-angrep: Polyfill supply chain attack hits 100K+ sites](https://sansec.io/research/polyfill-supply-chain-attack)
* [Eksempel på kompromittert bibliotek: xz-Utils](https://arstechnica.com/security/2024/04/what-we-know-about-the-xz-utils-backdoor-that-almost-infected-the-world/)