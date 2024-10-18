---
sidebar_position: 2
title: Utviklingsmiljø
slug: /utvikle/utviklingsmiljø
---
# Utviklingsmiljø, verktøy og byggmiljø
:::tip Kort oppsummert
Miljøene og verktøyene vi jobber med er essensielle for prosjektet, og det er viktig at vi har kontroll på hvilke verktøy som brukes og hvordan disse konfigureres. 
:::

Utviklingsmiljøet og byggmiljøet er noe av det viktigste vi har i et utviklingsprosjekt, og er en avhengighet det er utrolig viktig at vi har kontroll på. 

Det finnes mange ulike måter å forholde seg til disse miljøene; noen utvikler og bygger lokalt på egen laptop, mens andre bruker en kombinasjon av dedikerte utvikling- og byggmiljø - basert på skytjenester som Azure DevBox eller on-prem utviklingsservere.

Uavhengig av hvilken løsning en går for, er det noen viktige momenter som bør dokumenteres og vedlikeholdes - både for å ha et utgangspunkt som kan trusselmodelleres og valideres, men også for at nye teammedlemmer raskt kan onboardes og få et miljø som er "rett". 

## Verktøy
Utviklere har ofte ulike preferanser rundt bruk av IDE og utvidelser, og mange har gjerne laget seg en arbeidsflyt som funker for dem. Husk på at alle verktøy må holdes oppdatert, og hvert nytt verktøy som introduseres øker angrepsflaten, spesielt når det kommer til bruk av utvidelser som eksempelvis fra Visual Studio Marketplace og liknende. 

## Utviklingsmiljø og byggmiljø
Et av de store risikoelementene ved all utvikling er dersom
* uvedkommende kan nå en maskin der det foregår utvikling eller bygging på
* maskinen kan nå internett uten særlige begrensninger
* slike maskiner mangler monitorering

Alle utviklere som skriver kode idag har mange avhengigheter til biblioteker og pakker som hentes fra open-source økosystemer. De færreste av disse har noe forhold til sikkerhet, og som vi har sett gang på gang finnes det ondsinnede aktører som overtar slike komponenter eller lager sine egne kopier under liknende navn. Slike pakker representerer en kjemperisiko, da de kan introdusere bakdører som åpner opp for uvedkommende eller eksfiltrerer data fra maskinen til en ekstern mottaker. 

Viktige tiltak for å ta ned risiko vil være å
* stenge for all innkommende nettverkstrafikk
* stenge for all utgående nettverkstrafikk
* kun åpne opp for de tilgangene som absolutt trengs
* unngå bruk av generelle maskiner som brukes til surfing på nett, kontoraktiviteter og liknende til utvikling

Det er klart at en ikke alltid kan forsvare å sette opp dedikerte maskiner som kun brukes til utvikling ut fra kost/nytte, men dette bør vurderes fra tilfelle til tilfelle for å sikre at en er kjent hvordan dette valget påvirker risikobildet i prosjektet. 

# Veien videre
* [Wikipedia: Programming tools](https://en.wikipedia.org/wiki/Programming_tool)