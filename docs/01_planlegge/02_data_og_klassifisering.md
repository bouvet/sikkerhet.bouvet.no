---
sidebar_position: 2
---

# Data og klassifisering
:::tip Kort oppsummert
De fleste organisasjoner opererer med ulike klassifikasjonsnivå på både data og systemer, der klassifiseringen stiller krav til hvordan data brukes, hvor det lagres og hvem som kan aksessere disse. Dette er nøkkelkrav for ethvert utviklingsprosjekt og må avklares i forkant.
:::

## Klassifisering
De aller fleste organisasjoner har rutiner og prosesser for klassifisering av data, og skiller typisk i disse eller liknende nivå:
* Åpent
* Internt
* Konfidensielt
* Begrenset

Avhengig av denne klassifiseringen kan det foreligge ulike krav til sikring av data. Åpne data har typisk ingen begrensninger, mens data klassifisert som "begrenset" kan ha begrensninger som at en 
* har strenge krav til innsyn
* kun kan behandle informasjonen i egne systemer
* krever flerfaktor autentisering før aksess
* har restriksjoner i forhold til bruk av skytjenester eller hvor data lagres

Dette må gås opp med kunde i oppstarten av prosjektet slik at en kan sikre nødvendig etterlevelse. Dersom kunden ikke har et forhold til dataklassifisering, bør en likevel kartlegge sensitiviteten til dataene som skal behandles for å sikre at vi innfører nødvendige tiltak. 

## Personvern
Dersom leveranseteamet skal behandle personsensitive opplysninger, er det viktig at teamet setter seg inn i kravene rundt dette. Datatilsynet har publisert en egen veileder for ["Programvareutvikling med innebygd personvern"](https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/programvareutvikling-med-innebygd-personvern/) som gir nyttig innblikk i problemstillingen. 

Viktige punkter en er nødt å være klar over er at
* informasjon ikke skal lagres lenger enn hensikten med å samle den inn tilsier
* enkelte typer informasjon ikke skal registreres under noen omstendighet
* vi må ha et forhold til bruk av produksjonsdata i testsammenheng og restriksjoner på dette
* brukere har "retten til å bli glemt" der personinformasjon kan kreves slettet
* vi må forholde oss til personvern også i backupsammenhenger - vi trenger ikke nødvendigvis å slette enkeltpersoner fra backup, men vi må sikre at "retten til å bli glemt" ivaretas ved en restore. 

Dersom vi behandler denne type informasjon på vegne av kunder skal de normalt kreve at vi signerer en databehandleravtale. Dersom dette ikke er på plass <u>må</u> det følges opp mot kundeansvarlig. 

# Data til bruk under utvikling og testing

Dersom en bruker data i forbindelse med utvikling og testing, er det viktig å ha et forhold til klassifisering og sensitivitet. Dev-miljøer har ofte et annet sikringsnivå enn produksjonsmiljøet, og dette gjør i praksis at vi ikke alltid kan bruke relle data til utvikling. 

Teamet må sjekke behovet for anonymisering av dataene før disse brukes utenfor produksjonsmiljøet, slik at en ivaretar behovet for mengden data, fyllingsgrad og kvalitet samtidig som at en ikke risikerer at kundens data kommer på avveie. 

Dette er spesielt viktig dersom utvikling skjer i Bouvets infrastruktur, men med produksjonsmiljø plassert hos kunden. I slike tilfeller er det viktig at Bouvet har dokumenterte rutiner som regulerer hvor og hvordan data oppbevares og brukes, og hvordan og når disse skal slettes. Dette må gås opp i samråd med kunde slik at det ikke er noe tvil rundt ansvar, plikter og risiko. 

# Veien videre
* [Datatilsynet: Innebygd personvern](https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/programvareutvikling-med-innebygd-personvern/)
* [NSM: Kartlegg enheter og programvare](https://nsm.no/regelverk-og-hjelp/rad-og-anbefalinger/grunnprinsipper-for-ikt-sikkerhet/identifisere-og-kartlegge/kartlegg-enheter-og-programvare/)