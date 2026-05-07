---
title: "Nettverkskonsepter"
weight: 2
translationKey: network
description: >
  Nettverk er en grunnleggende komponent i alt vi lager, og det er viktig med en grunnleggende forståelse for hvordan dette fungerer og hvordan det kan utnyttes av andre. 
---


Riktig nettverkskonfigurasjon er viktig i sky, hybrid og on-prem. Denne siden er ment som et kort oppslag for sikker nettverkspraksis i prosjektarbeid.

## Zero trust arkitektur
[Zero trust](https://en.wikipedia.org/wiki/Zero_trust_security_model) innebærer at man ikke stoler blindt på intern eller ekstern trafikk. Bruk prinsippet som standard: verifiser eksplisitt, gi minst mulig tilgang, og anta kompromittering.

## Minimumsoversikt
{{< tip title="Viktig" >}}
Ha kontroll på hvilke IP-adresser og porter du eksponerer, og hvilke tjenester som lytter på portene. Undersøk brannmurregler, se i logger og skann
egne systemer med nmap.
{{< /tip >}}

Hold en oppdatert oversikt over:

- eksponerte IP-adresser, porter og protokoller
- hvem som kan nå hvilke tjenester
- hvorfor eksponeringen er nødvendig (forretningsbehov)
- hvilke regler som er midlertidige og når de skal fjernes

### Skanning av nettverk
Skann jevnlig for å bekrefte faktisk eksponering. `nmap` er et etablert FOSS-verktøy for å oppdage åpne porter og tjenester.

{{< caution title="Advarsel" >}}
Bruk av skannerverktøy som `nmap` skal <strong>alltid</strong> avklares med eiere av infrastruktur og nettverk. Dersom du sitter på
et Bouvet-kontor og skanner Azure-miljøet til en kunde, kan du lett trigge alarmer hos både Bouvet og kunden, samt ISP. 
{{< /caution >}}


## Isolasjon av tjenester
{{< tip title="Viktig" >}}
Bruk brannmur til å begrense trafikk innad i systemer og mellom systemer og Internett. Bruk allowlist hvis mulig. Filtrer trafikk i applikasjonslaget hvis
nødvendig.
{{< /tip >}}

Praktiske hovedregler:

- deny-by-default på inn- og utgående trafikk
- åpne kun for nødvendige porter, protokoller og kjente kilder
- unngå "Any" i regler
- segmenter nettverk mellom funksjoner og miljø
- bruk private endepunkter/VPN der det er mulig
- legg offentlige tjenester bak relevante sikkerhetslag (for eksempel WAF/API-gateway)

## AI-tjenester og nettverkskontroll
For AI-løsninger bør valg av driftsmodell vurderes opp mot krav til kontroll på ingress og egress.

- **AI i egen tenant (for eksempel i Azure)** gir som regel bedre kontroll på nettverksgrenser, private endepunkter, logging og hvilke systemer som kan sende data til og fra tjenesten.
- **AI som ren SaaS** kan gi raskere oppstart, men ofte mindre kontroll på nettverksflyt, tillatte destinasjoner og hvordan trafikk avgrenses.

Minimumsvurderinger for begge modeller:

- hvilke data kan sendes inn (ingress), og hvem kan sende dem
- hvilke mål data kan sendes ut til (egress)
- hvordan trafikk logges, overvåkes og blokkeres ved avvik
- hvordan krav til personvern, dataflyt og geografi dokumenteres

## Konfigurasjon

Konfigurasjon av nettverk bør automatiseres så langt det lar seg gjøre, helst via [CI/CD]({{< ref "deploye/cicd.md" >}}) og infrastruktur som kode.

- begrens hvem som kan endre nettverksregler direkte
- bruk JIT-tilgang der det er mulig
- versjoner regler i kildekodekontroll
- skann for avvik fra ønsket konfigurasjon og varsle ved ukjente regler
- dokumenter manuelle unntak og tidsbegrens dem

## Avgrensning mot systemskisser
Denne siden dekker sikkerhetsprinsipper for nettverk. For detaljerte diagrammer av topologi, dataflyt og avhengigheter, se [Systemskisser]({{< ref "designe/systemskisser.md" >}}).

## Veien videre
* [IBM: What is networking](https://www.ibm.com/topics/networking)
* [Wikipedia: Zero trust](https://en.wikipedia.org/wiki/Zero_trust_security_model)