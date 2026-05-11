---
title: "Data og Klassifisering"
weight: 2
translationKey: data
description: >
  En introduksjon til data og dataklassifisering 
---

{{< tip title="Kort oppsummert" >}}
De fleste organisasjoner opererer med ulike klassifikasjonsnivå på både data og systemer. Klassifiseringen gjøres ofte med bakgrunn i hvordan data brukes, hvor det lagres og hvem som kan aksessere disse. Dette er nøkkelkrav for ethvert utviklingsprosjekt og må avklares i forkant.
{{< /tip >}}


## Klassifisering
De aller fleste organisasjoner har rutiner og prosesser for klassifisering av data, for eksempel i følgende nivå:
* Åpent
* Internt
* Konfidensielt
* Begrenset

Avhengig av denne klassifiseringen kan det foreligge ulike krav til sikring av data. Åpne data har typisk ingen begrensninger, mens data klassifisert som "begrenset" kan ha begrensninger som at en 
* har strenge krav til innsyn
* kun kan behandle informasjonen i egne systemer
* krever flerfaktor autentisering før aksess
* har restriksjoner i forhold til bruk av skytjenester eller hvor data lagres

Dette avklares med kunde i oppstarten av prosjektet slik at en kan sikre nødvendig etterlevelse. Dersom kunden ikke har et forhold til dataklassifisering, bør en likevel kartlegge sensitiviteten til dataene som skal behandles for å sikre at vi innfører nødvendige tiltak. 

## Personvern
Dersom leveranseteamet skal behandle personsensitive opplysninger, er det viktig at teamet setter seg inn i kravene rundt dette. Datatilsynet har publisert en egen veileder for ["Programvareutvikling med innebygd personvern"](https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/programvareutvikling-med-innebygd-personvern/) som gir nyttig innblikk i problemstillingen. 

{{< important title="Viktig" >}}
Norge er underlagt kravene i GDPR gjennom Personopplysningsloven, og det er viktig at leveransene har et forhold til en del krav og definisjoner i denne. Husk også at vi kan være underlagt databehandleravtaler som kan stille strengere krav enn lovverket!
{{< /important >}}

Hensikten med GDPR er å sikre enkeltpersoners rettigheter ved å stille krav til hva personopplysninger kan brukes til samt hvilke, og hvordan disse kan brukes. Lovverket definerer personopplysninger som 

<em>"enhver opplysning om en identifisert eller identifiserbar fysisk person («den registrerte»); en identifiserbar fysisk person er en person som direkte eller indirekte kan identifiseres, særlig ved hjelp av en identifikator, f.eks. et navn, et identifikasjonsnummer, lokaliseringsopplysninger, en nettidentifikator eller ett eller flere elementer som er spesifikke for nevnte fysiske persons fysiske, fysiologiske, genetiske, psykiske, økonomiske, kulturelle eller sosiale identitet"</em>

Personvern kan virke komplekst og vanskelig, men i korte trekk så 
* Er en personopplysning et informasjonsfragment som kan kobles til en bestemt person
* Skal du ha behandlingsgrunnlag - hvorfor skal du behandle en personopplysning
* Skal personen det gjelder gi sitt samtykke til at du kan behandle informasjonen
* Du skal minimere mengden informasjon du henter inn - du skal kun samle inn det du trenger
* Informasjonen skal ha en levetid - du skal ikke lagre data lenger enn nødvendig
* Brukeren har retten til å bli glemt - også dersom du må restore fra en tidligere backup

Dersom vi behandler denne type informasjon på vegne av kunder skal de normalt kreve at vi signerer en databehandleravtale. Dersom dette ikke er på plass <u>må</u> det følges opp mot leveranse- og kundeansvarlig. 

## Data til bruk under utvikling og testing

Dersom en bruker data i forbindelse med utvikling og testing, er det viktig å ha et forhold til klassifisering og sensitivitet. Dev-miljøer har ofte et annet sikringsnivå enn produksjonsmiljøet, og dette gjør i praksis at vi ikke alltid kan bruke relle data til utvikling. 

Teamet må sjekke behovet for anonymisering av dataene før disse brukes utenfor produksjonsmiljøet, slik at en ivaretar behovet for mengden data, fyllingsgrad og kvalitet samtidig som at en ikke risikerer at kundens data kommer på avveie. Kvalitet og metadata knyttet til informasjonen som brukes som utgangspunkt bør dokumenteres, slik at eventuelle avvik kan gås opp i etterkant og datagrunnlaget forbedres. 

Dette er spesielt viktig dersom utvikling skjer i Bouvets infrastruktur, men det er også relevant dersom produksjonsmiljø er plassert hos kunden. I slike tilfeller er det viktig at Bouvet har dokumenterte rutiner som regulerer hvor og hvordan data oppbevares og brukes, og hvordan og når disse skal slettes. Dette må gås opp i samråd med kunde slik at det ikke er noe tvil rundt ansvar, plikter og risiko slik det er regulert i avtalen. 

## Kunstig intelligens og data

Dersom en bygger løsninger med, eller ved hjelp av kunstig intelligens stiller den foreslåtte KI-loven krav til datakvalitet, spesielt for høyrisikosystemer. Dette er spesifikt nevnt for disse da de kan brukes i situasjoner som kan få alvorlige konsekvenser for enkeltpersoner utover rene personvernhensyn beskrevet i personopplysningsloven. KI-systemer som ikke regnes som høyrisiko må også forholde seg til krav om merking av informasjon produsert av KI. 

Et annet viktig moement er læring i KI-modellen: De færreste selskap vil godta at KI-modellene lærer av deres data, da det har vært flere eksempler på at læringsdata kan rekonstrueres i etterkant. Bruk av enterpriseavtaler begrenser ofte KI-modellens evne til å lære av kundedata - dette er et punkt som **må** verifiseres av oss når vi bygger løsninger. 

Vær obs på at personopplysningsloven også gjelder for KI-systemer. Under vurdering av leverandører har vi sett flere tilfeller der KI-leverandører leverer tjenester utenfor EU, der det er nødvendig med ekstra grundige vurderinger og gjennomganger for å sikre at vi etterlever kravene som stilles gjennom lovverket.

Dersom du har spørsmål knyttet til bruk av KI kan du lage en sak gjennom [BSD](https://bsd.bouvet.no) eller på `#ai` (Slack)


## Veien videre
* [Datatilsynet: Innebygd personvern](https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/programvareutvikling-med-innebygd-personvern/)
* [NSM: Kartlegg enheter og programvare](https://nsm.no/regelverk-og-hjelp/rad-og-anbefalinger/grunnprinsipper-for-ikt-sikkerhet/identifisere-og-kartlegge/kartlegg-enheter-og-programvare/)
* [Lovdata: Personopplysningslovel (GDPR)](https://lovdata.no/dokument/NL/lov/2018-06-15-38)
* [Regjeringen: Lov om kunstig intelligens i Norge sendes nå på høring](https://www.regjeringen.no/no/aktuelt/lov-om-kunstig-intelligens-i-norge-sendes-na-pa-horing/id3113732/)