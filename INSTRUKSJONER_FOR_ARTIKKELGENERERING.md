# Instruksjoner for artikkelgenerering

Dette dokumentet er et praktisk utgangspunkt for nye artikler som skrives helt eller delvis med KI.
Målet er konsistent kvalitet, tydelig språk og en form som passer resten av nettstedet.

Det supplerer eksisterende retningslinjer i `content/no/retningslinjer-for-innhold.md`.

## 1. Målgruppe og formål

- Målgruppen er primært teknikere (utviklere, arkitekter, drift), men tekstene skal fortsatt kunne leses av ledere og juniorer.
- Hver artikkel skal gi konkrete, handlingsrettede sikkerhetsråd.
- Artikler skal være teknologi-agnostiske i hovedbudskapet, men kan bruke konkrete verktøy i eksempler.

## 2. Språkvalg

- Skriv norsk bokmål.
- Bruk enkelt og direkte språk.
- Forklar faguttrykk når de ikke kan antas kjent.
- Unngå unødig engelske ord der god norsk finnes.
- Behold etablerte termer der norsk oversettelse blir unaturlig (for eksempel "prompt injection", "secret scanning").

## 3. Struktur (fast mal)

Alle artikler skal ha front matter og samme grunnstruktur:

```md
---
title: "Sidetittel"
weight: 1
translationKey: unik_nokkel
description: >
  Kort ingress på 1-2 setninger.
---

Kort innledning som forklarer hvorfor temaet er viktig.

## Deltema 1

## Deltema 2

## Veien videre
* [Ressurs 1](https://example.com)
* [Ressurs 2](https://example.com)
```

Praktiske regler:

- Start alltid med "hvorfor" for temaet.
- Del opp i tydelige seksjoner med overskriftsnivå `##` og `###`.
- Bruk punktlister for tiltak og sjekklister.
- Ikke bruk boldet tekst som overskrifter midt i avsnitt, bruk heller skikkelige overskriftsnivå. 
- Avslutt med `## Veien videre`.

## 4. Form og lesbarhet

- Skriv korte avsnitt (2-5 linjer).
- Unngå "wall of text".
- Bruk lister med 4-7 punkter når du gir konkrete anbefalinger.
- Bruk eksempler når et råd ellers blir abstrakt.
- Skriv aktivt og konkret: "Gjør X" er bedre enn "X bør vurderes" når tiltaket er tydelig.

## 5. Farge og utheving (Hugo shortcodes)

Bruk shortcodes konsekvent for visuell tydelighet:

- `caution`: kritiske advarsler, forbud eller høy risiko.
- `tip`: konkrete anbefalinger, arbeidsflyt og best practice.

Retningslinjer:

- Bruk maks 1-3 bokser per artikkel.
- Bruk `caution` bare når leseren bør stoppe opp og ta grep.
- Unngå at hele artikkelen blir "rød"; bland forklaring, lister og eventuelt en kort boks.

Eksempel:

```md
{{< caution title="Husk" >}}
Hemmeligheter skal aldri inn i prompt eller versjonskontroll.
{{< /caution >}}
```

## 6. Lenker og kildebruk

- Bruk interne `ref`-lenker mellom relaterte artikler.
- Bruk permalenker eksternt der det er mulig.
- Ikke kopier tekst fra eksterne kilder uten tydelig referanse.
- Unngå duplisering på tvers av artikler; lenk heller til hovedartikkel for temaet.
- Ikke lag andre lenkeseksjoner utover "Veien videre". Bak linker til andre artikler inn i tekst der det er naturlig, ikke legg disse i "Veien videre"

## 7. KI-spesifikke regler for generering

Ved KI-generert innhold:

- Verifiser fakta, begreper og lenker manuelt.
- Fjern generisk fylltekst og markedsføringsspråk.
- Prioriter konkrete tiltak framfor generelle beskrivelser.
- Kontroller at innholdet ikke motsier eksisterende artikler.
- Skill bevisst mellom:
  - krav (skal/må)
  - anbefaling (bør)
  - informasjon (kan)
- Ta alltid en runde med språkvask, vær spesielt obs på bruk av engelske uttrykk i norskskpråklig artikkel og bruk av norske bokstaver. 

## 8. Kvalitetssjekk for publisering

Bruk denne sjekklisten for hver ny artikkel:

- Har artikkelen korrekt front matter?
- Er ingressen forståelig for ikke-spesialister?
- Er innholdet handlingsrettet og teknologi-agnostisk?
- Er språk, tone og begrepsbruk konsistent med eksisterende sider?
- Er eventuelle `tip`/`caution` brukt med tydelig hensikt?
- Er `Veien videre` relevant, oppdatert og uten døde lenker?

## 9. Minimumskrav ved oppdatering av eksisterende artikler

- Behold artikkelens hovedformål.
- Forbedre klarhet og presisjon fremfor å omskrive alt.
- Ikke flytt detaljer til ny artikkel uten at gammel artikkel lenker tydelig videre.
- Hvis et tema allerede er dekket godt et annet sted, kort ned og lenk dit.
