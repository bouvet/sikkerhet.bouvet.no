---
title: "Verifiser designet"
weight: 1
translationKey: verify
description: >
  Når vi utvikler en løsning bør vi alltid validere at løsningen er i henhold til designet. Dersom den avviker må vi enten korrigere løsningen eller oppdatere designet.  
---


Når vi lager et [design]({{< ref "designe/systemskisser.md" >}}) for en ny løsning hender det at det er detaljer vi ikke kjenner, eller at det oppstår uventede komplikasjoner underveis i implementeringen. Dette kan resultere i at designet vi opprinnelig laget avviker fra den ferdige løsningen. 

Dokumentasjonen er viktig for å forstå hvordan en løsning er satt opp og hvordan den fungerer, spesielt om det oppstår en hendelse som krever redeployment eller disaster recovery. For å sikre at gapet mellom dokumentasjon og ferdig produkt ikke er for stort bør vi derfor alltid validere designet i etterkant. 

## Hva bør vi sjekke?
Noe av det viktigste er alt rundt som ikke nødvendigvis kommer i kodeform. Hvilke ressurser vi bruker, nettverksoppsett og brannmuråpninger er grunnleggende, men vi bør også se på IAM og hvilke tilganger som er gitt til ressurser og applikasjon.

Når designet verifiseres i forvaltningsfasen, bør teamet som minimum sjekke:
* at implementerte komponenter faktisk matcher [systemskisser]({{< ref "designe/systemskisser.md" >}})
* at kravene i [sikkerhetskrav]({{< ref "designe/sikkerhetskrav.md" >}}) er dekket i løsning og drift
* at nettverk, identiteter, roller og tilgangsregler er i tråd med design
* at avhengigheter (interne og eksterne) er dokumentert og fortsatt gyldige
* at teamet har en rutine for å vedlikeholde design sammen med applikasjonen

Dersom det er elementer i designet som ikke er implementert bør disse fjernes fra dokumentasjonen. Dersom vi har implementert elementer som ikke er i designet må designet oppdateres, eller elementene fjernes fra løsningen.

## Krav -> design -> implementasjon
For å gjøre verifisering etterprøvbar bør teamet bruke en enkel sporbarhetsmatrise:
* krav-id -> designvalg -> implementert kontroll -> test/evidens

Dette gjør det enklere å dokumentere at krav faktisk er realisert, og gir et tydelig grunnlag for revisjon, overlevering og hendelseshåndtering.

Eksempler på hvordan dette kan demonstreres kan være:
* IaC-konfigurasjon og policy-definisjoner
* skjermbilder/eksport fra skyplattform som viser faktisk oppsett
* testresultater fra sikkerhetstesting
* logger som bekrefter at kontroller er aktive

## Verifisering av AI-systemer
For løsninger med AI-komponenter må verifiseringen utvides utover klassisk infrastruktur og applikasjonsdesign.

Teamet bør verifisere:
* at AI-krav er koblet til konkrete designvalg og implementerte kontroller
* at trenings-/evalueringsdata, modeller og versjoner er dokumentert
* at tilgang til modell, data og driftsgrensesnitt følger minste privilegium
* at logging og monitorering dekker AI-relaterte hendelser og avvik

Dette støtter kontrollområder som "AI system verification and validation" og "Documentation of AI system design and development".

## Verifiser evalueringsresultater
For AI-løsninger er det ikke nok å verifisere at tjenesten svarer. Teamet må også verifisere at modellens resultater fortsatt er innenfor aksepterte rammer.

Minimum bør være på plass:
* definerte akseptansekriterier for kvalitet (f.eks. presisjon, recall eller domene-spesifikke mål)
* dokumenterte testsett og evalueringsmetode
* sammenligning mot tidligere baseline ved modell- eller dataskifte
* tydelig beslutning om godkjenning eller avvisning av ny versjon

Ved avvik må teamet dokumentere tiltak og eventuell risikovurdering før videre produksjonsbruk.

## Dokumentasjon og sporbarhet
I praksis bør dokumentasjonen gjøre det mulig å svare på:
* hvilket krav som ligger bak et gitt designvalg
* hvilken versjon av modell/prompt/policy som er i drift
* hvem som godkjente endringen og på hvilket grunnlag
* hvilken evidens som viser at kontrollene virker

Sporbar dokumentasjon reduserer feilsøkingstid ved hendelser, og gjør re-verifisering enklere ved større endringer.

## Hvordan kan vi sjekke?
Dette avhenger veldig av form og farge på prosjektet, men i mange tilfeller vil IT-organisasjonen hos kunden (for prosjekter hostet hos kunde) kunne hjelpe. Dersom løsningen kjører hos Bouvet vil helt sikkert Intern IT & Sikkerhet kunne være behjelpelige på å sjekke ting som nettverkskonfigurasjoner og liknende, eventuelt peke deg i riktig retning. Det er mye du kan gjøre selv også, men sjekk med Intern IT & Sikkerhet før du installerer verktøy og kjører scans eller liknende. 

Et praktisk minimum er å gjennomføre verifisering:
* ved større endringer i arkitektur eller avhengigheter
* før produksjonssetting av nye risikofylte endringer
* som del av fast forvaltningsrytme (for eksempel kvartalsvis)

## Veien videre
* [Wikipedia: Secure by design](https://en.wikipedia.org/wiki/Secure_by_design)
* [CISA: Secure by design](https://www.cisa.gov/securebydesign)
* [OWASP Application Security Verification Standard (ASVS)](https://owasp.org/www-project-application-security-verification-standard/)
* [OWASP Artificial Intelligence Security Verification Standard (AISVS)](https://owasp.org/www-project-artificial-intelligence-security-verification-standard-aisvs-docs/)