---
sidebar_position: 1
title: Hemmeligheter
---
# Hemmeligheter
Hemmeligheter er representert i utviklingsprosjekter i form av _connection strints_, _passord_, _nøkler_, _sertifikater_ og alt annet som regnes som sensitiv informasjon vi ikke ønsker at andre skal få kjennskap til. 

Det finnes mange ulike tilnærminger for hvordan disse skal håndteres, og dette har også endret seg etter hvert som nye tjenester dukker opp. For skyløsninger har tjenester som Azure Key Vault og liknende nærmest blitt en standard, da disse tjenestene håndterer flere aspekter av hvordan en bruker og forvalter hemmeligheter. 

## Grunnprinsipper for håndtering av hemmeligheter
* Hemmeligheter skal aldri hardkodes eller sjekkes inn i versjonskontrollsystemer
* Verifiser etterlevelse ved å skanne koden - avvis commits med hemmeligheter og roter disse øyeblikkelig!
* Ha kontroll på hvilke hemmeligheter du har og hvilke tilganger disse har
* Begrens levetiden på hemmelighetene - ingen hemmeligheter bør leve mer enn et år, passord og nøkler mye kortere
* Teammedlemmer bør ikke ha tilgang til alle hemmeligheter alltid, elever eller legg på tilgang ved behov

# Kryptografi og hashing
Kryptografi og hashalgoritmer er komplekse tema, og det krever store ressurser og _mye_ kompetanse for å bygge gode algoritmer som er sikre. Av denne enkle grunn skal du _aldri_ lage egne, uansett hvor finurlig og sikker den ser ut til å være. 

Det du derimot skal gjøre, er å:
* Sette deg inn i best-practices for ditt programmeringsspråk, rammeverk og plattform
* Sikre at du ikke bruker sårbare algoritmer som f.eks. SHA1, MD5 eller DES
* For kryptografi; sett deg inn i hvilke anbefalinger som gjelder for nøkkellengder og anbefalinger ift bruk

:::important Husk
Hemmeligheter skal *aldri* sjekkes inn i kildekodesystemet!
:::

# Videre lesning
* [Azure Key Vault - Quickstart for .NET](https://learn.microsoft.com/en-us/azure/key-vault/secrets/quick-create-net?tabs=azure-cli)