---
title: "Revisjon av prosjekt eller leveranse"
weight: 2
translationKey: audit
description: >
  Kunde eller mottaker kan kreve revisjon av leveransen. Da må teamet kunne dokumentere krav, designvalg, sikkerhetstiltak og hvordan disse faktisk er fulgt opp i praksis.
---

Det er langt fra alle leveranser som blir revidert, men dersom kunde eller mottaker ber om revisjon må teamet kunne vise mer enn at løsningen fungerer. En revisjon handler ofte om å dokumentere at krav er forstått, at riktige kontroller er valgt, og at disse faktisk er implementert og fulgt opp.

En slik revisjon vil normalt være forankret i kontrakt, lovkrav eller interne styringskrav hos kunden. I praksis er det ofte mest aktuelt ved levering eller etter at løsningen har vært i drift en stund.

## Hva må kunne dokumenteres?
Kravene vil variere, men teamet bør som minimum kunne vise:
* hvilke krav leveransen skal oppfylle
* hvilke designvalg som er gjort og hvorfor
* hvilke sikkerhetstiltak som er implementert
* hvem som har ansvar for drift, tilgang og oppfølging
* hvilke avvik, risikovurderinger og aksepterte unntak som finnes

Dette betyr ikke nødvendigvis store dokumentpakker. Det viktige er at dokumentasjonen er oppdatert, etterprøvbar og tilgjengelig for de som faktisk trenger den.

## Før en revisjon
Den enkleste måten å håndtere revisjon på er å være forberedt før kunden spør. Teamet bør derfor ha et bevisst forhold til hvor dokumentasjon ligger, hvem som eier den, og hvordan den holdes oppdatert.

Det er spesielt nyttig å ha avklart:
* hvem som representerer teamet i revisjonen
* hvor sentrale dokumenter og evidens hentes fra
* hvilke deler av dokumentasjonen som kan deles direkte, og hva som krever særskilt avklaring
* hvordan avvik, unntak og risikobeslutninger er dokumentert

Revisjon blir fort tungvint dersom informasjonen finnes, men er spredt mellom ulike systemer, mapper og enkeltpersoner.

## Typisk evidens i en revisjon
En revisjon vil ofte be om konkrete bevis, ikke bare beskrivelser. Det kan for eksempel være:
* [systemskisser]({{< ref "designe/systemskisser.md" >}}) og oversikt over avhengigheter
* [sikkerhetskrav]({{< ref "designe/sikkerhetskrav.md" >}}) og hvordan de er omsatt i design og drift
* [dokumentasjon]({{< ref "utvikle/dokumentasjon.md" >}}) av arkitektur, prosesser og beslutninger
* resultater fra testing, verifisering og gjennomganger
* logger eller rapporter som viser at kontroller faktisk er aktive
* oversikt over roller, tilganger og godkjenninger

Hvis kunden har valgt bort anbefalte tiltak eller tilleggstjenester, må dette også være dokumentert tydelig. Det er viktig både for forventningsstyring og for å kunne forklare gjenværende risiko.

## Del bare det som er nødvendig
En revisjon betyr ikke at all dokumentasjon skal deles ukritisk. Noe materiale kan inneholde sensitiv informasjon om sårbarheter, interne nettverk, tilganger eller svakheter som ennå ikke er lukket.

Teamet bør derfor vurdere:
* om revisjonen krever fullt innsyn eller om sammendrag/evidens er tilstrekkelig
* om deler av materialet må skjermes eller deles i kontrollert form
* hvordan tilgang til revisjonsmateriale logges og avgrenses

Målet er å være åpen nok til å dokumentere etterlevelse, uten å eksponere mer enn nødvendig.

## Revisjon av AI-systemer
For løsninger med AI-komponenter må teamet i tillegg kunne dokumentere:
* hvilke modeller, versjoner og datakilder som brukes
* hvilke krav som gjelder for kvalitet, sikkerhet og bruk av modellen
* hvordan evalueringsresultater er vurdert og godkjent
* hvordan endringer i modell, prompt, policy eller datasett spores
* hvordan logging og monitorering støtter drift, hendelseshåndtering og etterprøvbarhet

Det vil også være naturlig å kunne forklare:
* hva som er systemets tilsiktede bruk og begrensninger
* hvilke menneskelige kontrollpunkter som finnes
* hvordan teamet oppdager degradering, feilbruk eller uventet modellatferd

## Etter revisjonen
En revisjon er ikke ferdig når møtet er over. Teamet må sikre at funn, avvik og anbefalinger blir vurdert og fulgt opp på samme måte som annet forbedringsarbeid.

Minimum bør være å:
* registrere funn med tydelig eier
* vurdere alvorlighet og frist for oppfølging
* dokumentere eventuelle uenigheter eller avklaringer med kunden
* oppdatere design, rutiner eller dokumentasjon dersom revisjonen avdekket hull

## Hold det enkelt og ryddig
Det viktigste er sjelden å produsere mer dokumentasjon. Det viktigste er å kunne svare tydelig på hva som er bygget, hvorfor det er bygget slik, og hvilken evidens som viser at kontrollene virker.

## Veien videre
* [OWASP Application Security Verification Standard (ASVS)](https://owasp.org/www-project-application-security-verification-standard/)
* [OWASP Artificial Intelligence Security Verification Standard (AISVS)](https://owasp.org/www-project-artificial-intelligence-security-verification-standard-aisvs-docs/)
* [Nasjonal sikkerhetsmyndighet: Grunnprinsipper for IKT-sikkerhet](https://nsm.no/regelverk-og-hjelp/rad-og-anbefalinger/grunnprinsipper-for-ikt-sikkerhet/)