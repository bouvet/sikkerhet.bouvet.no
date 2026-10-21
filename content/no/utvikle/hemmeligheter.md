---
title: "Hemmeligheter"
weight: 7
translationKey: secrets
description: >
  Alle utviklingsprosjekter har behov for hemmeligheter som connection strings, identiteter, passord, sertifikater og annet. Disse må oppbevares på en trygg måte, og vi må sikre at vi bruker dem i en sikker kontekst med riktige støtteverktøy og prosesser.
---

Hemmeligheter er representert i utviklingsprosjekter i form av _connection strings_, _passord_, _nøkler_, _sertifikater_ og alt annet som regnes som sensitiv informasjon vi ikke ønsker at andre skal få kjennskap til. 

Det finnes mange ulike tilnærminger til hvordan disse skal håndteres, og dette har også endret seg etter hvert som nye tjenester dukker opp. For skyløsninger har tjenester som Azure Key Vault og liknende nærmest blitt en standard, da disse tjenestene håndterer flere aspekter av hvordan en bruker og forvalter hemmeligheter. 

## Grunnprinsipper for håndtering av hemmeligheter
* Hemmeligheter skal aldri hardkodes eller sjekkes inn i versjonskontrollsystemer
* Verifiser etterlevelse ved å skanne koden - avvis commits med hemmeligheter og roter disse øyeblikkelig!
* Ha kontroll på hvilke hemmeligheter du har og hvilke tilganger disse har
* Begrens levetiden på hemmelighetene - ingen hemmeligheter bør leve mer enn et år, passord og nøkler mye kortere
* Teammedlemmer bør ikke ha tilgang til alle hemmeligheter alltid, elever eller legg på tilgang ved behov

## Hemmeligheter og KI-verktøy
Når KI-verktøy brukes i utviklingsløpet, oppstår nye måter hemmeligheter kan bli eksponert på.

### Hemmeligheter i prompt og kontekst

KI-verktøy som Copilot, Claude eller andre kopierer gjerne større deler av kodebasen for å forstå konteksten. Hvis repoet inneholder hardkodede hemmeligheter, eksempel-konfigfiler med ekte verdier eller testdata med passord, risikerer du at disse sendes til KI-tjenestens servere. Dersom dette skjer er sjansen stor for at det er et brudd på avtalen med kunde, i tillegg til at det alltid er en mulighet for at KI-verktøyet kan forsøke å koble til. Dersom du mangler andre sikkerhetsbarrierer kan det i verste fall resultere i at data endres eller påvirkes på annet vis. 

{{< caution title="Hovedregel" >}}
Lim aldri hemmeligheter, tokens eller ekte credentials i prompt, selv ikke når du debugger eller spør om hjelp.
{{< /caution >}}


### KI-generert kode som logger hemmeligheter

Det er ikke uvanlig at KI-verktøy hallusinerer eller lager kode som ikke følger beste praksis. En må være spesielt årvaken for å fange opp tilfeller der KI-generert kode lagrer sensitiv informasjon som hemmeligheter, databasespørringer eller konfigfiler i logger.

Før kjøring er det viktig at KI-generert kode sjekkes grundig:
* logges eller skrives det sensitiv data til stdout?
* legges det hemmeligheter i cache eller midlertidige filer?
* vises hemmeligheter som del av feilmeldinger?

### Redusert tilgang og exclusions

Noen KI-verktøy som GitHub Copilot tilbyr content exclusion, slik at du kan utelukke mapper eller filtyper fra å leses av verktøyet. Bruk dette for å hindre at hele konfigfiler eller testdata sendes til KI-tjenester. Dette bør ikke være den eneste sikkerhetsbarrieren som hindrer at KI-verktøyene får tilgang på hemmeligheter, men kan være en mekanisme som gir deg et ekstra lag med sikkerhet. 

## Rotasjon av hemmeligheter

Hemmeligheter som har vært tilgjengelige for KI-verktøy, logger, lagt i kildekode eller på annet vis eksponert for andre _skal_ roteres. Det er ikke nok å fjerne hemmeligheten eller håpe på at ingenting går galt; dersom den har blitt eksponert skal du alltid anta at den kan utnyttes. Dette gjelder også sertifikater, nøkler og annet. 

## Kryptografi og hashing
Kryptografi og hashalgoritmer er komplekse tema, og det krever store ressurser og _mye_ kompetanse for å bygge gode algoritmer som er sikre. Av denne enkle grunn skal du _aldri_ lage egne, uansett hvor finurlig og sikker den ser ut til å være. 

Det du derimot skal gjøre, er å:
* Sette deg inn i best-practices for ditt programmeringsspråk, rammeverk og plattform
* Sikre at du ikke bruker sårbare algoritmer som f.eks. SHA1, MD5 eller DES
* For kryptografi; sett deg inn i hvilke anbefalinger som gjelder for nøkkellengder og anbefalinger ift bruk

{{< caution title="Husk" >}}
Hemmeligheter skal <strong>aldri</strong> sjekkes inn i kildekodesystemet!
{{< /caution >}}

## Veien videre
* [Secrets Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)
* [Azure Key Vault - Quickstart for .NET](https://learn.microsoft.com/en-us/azure/key-vault/secrets/quick-create-net?tabs=azure-cli)
* [GitHub Copilot - Content Exclusion](https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot)