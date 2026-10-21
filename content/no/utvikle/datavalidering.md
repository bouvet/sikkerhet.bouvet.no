---
title: "Datavalidering"
weight: 3
translationKey: dataval
description: >
  Datavalidering reduserer både sikkerhetsrisiko og kvalitetsfeil. Ikke stol blindt på data, verken fra brukere, integrasjoner eller AI-pipelines.
---

Datavalidering er grunnleggende i alle utviklingsprosjekter. Formålet er å sikre at data har forventet struktur, innhold og kvalitet før de brukes videre i systemet.

Feil eller ondsinnet data kan føre til:

* sikkerhetssårbarheter, som injeksjon og XSS
* funksjonelle feil og ustabil drift
* feil beslutningsgrunnlag i rapportering og analyse
* redusert kvalitet i AI-modeller og evaluering

OWASP Top 10 har over tid vist at mangelfull validering av input er en gjentakende årsak til alvorlige sårbarheter. Hovedregelen er enkel: data skal valideres ved tillitsgrensen, uansett kilde.

## Grunnprinsipper
Datavalidering bør bygges inn i arkitektur og kode, ikke legges til som et etterslep.

* **Valider tidlig**: Stopp ugyldige data så nær inngangspunktet som mulig.
* **Valider eksplisitt**: Definer hva som er gyldig, i stedet for å prøve å blokkere alt som er farlig.
* **Valider i flere lag**: Kombiner klientvalidering, servervalidering og validering i meldings-/integrasjonslag.
* **Fail closed**: Dersom data ikke kan verifiseres, avvis eller sett dem i karantene.
* **Logg avvik**: Logg valideringsfeil med nok kontekst til feilsøking, uten å lekke sensitive data.

## Anbefalte kontroller i alle prosjekter
Minimumskontroller som bør være på plass i vanlige utviklingsprosjekter:

* **Skjema og kontrakter**: Bruk tydelige skjema (for eksempel JSON Schema, OpenAPI eller tilsvarende) mellom tjenester for å oppdage kontraktsbrudd tidlig.
* **Type- og formatvalidering**: Valider datatype, lengde, tillatte tegn, intervaller, datoformat og encoding.
* **Semantisk validering**: Sjekk regler som ikke fanges av type alene, som gyldige statusoverganger eller avhengigheter mellom felt.
* **Kontekstavhengig output-escaping**: Escape data korrekt før visning i HTML, URL, JavaScript eller SQL-kontekst.
* **Filvalidering**: Verifiser MIME-type, filsignatur, filstørrelse og tillatte filtyper. Skann opplastede filer for malware.
* **Isolert behandling av risikodata**: Vurder sandbox for parsing og behandling av potensielt farlige filer.
* **Beskyttelse i nettleser**: Bruk [Content Security Policy (CSP)](https://en.wikipedia.org/wiki/Content_Security_Policy) for å redusere konsekvens ved XSS.

## Datakvalitet og datapreparering for AI-systemer
For løsninger med KI må kontrollene over også utvides. Datavalidering er da både et sikkerhetstiltak og et kvalitetstiltak.

Kontroller som bør være eksplisitt definert:

* **Input-validering til modellkall**: Valider format, størrelse, språk, struktur og tillatte felt før data går til modell eller embedding-pipeline.
* **Datakvalitet for AI**: Kontroller manglende verdier, duplikater, outliers, label-feil og skjevheter som påvirker modellens ytelse.
* **Datapreparering**: Gjør preprocessing deterministisk, testbar og versjonert slik at transformasjoner kan reproduseres.
* **Datasett-hygiene for evaluering**: Hold trening, validering og test adskilt, og unngå datalekkasjer mellom dem.
* **Kontaminering**: Sørg for at evalueringssett ikke forurenses av produksjonsdata, prompt-historikk eller manuelle korreksjoner fra drift.
* **Sporbarhet**: Dokumenter datakilder, transformasjoner, datasettversjoner og evalueringsgrunnlag.

## Praktisk gjennomføring i team
Datavalidering fungerer best når den er en fast del av leveranseløpet.

* Definer valideringsregler som kode og versjoner dem.
* Legg valideringstester inn i CI/CD for kontrakter, skjema og kritiske transformasjoner.
* Overvåk valideringsfeil i produksjon for å fange datadrift og integrasjonsbrudd tidlig.
* Gjennomfør jevnlig revisjon av regler når datakilder, API-er eller modeller endres.

## Veien videre
* [OWASP Top 10](https://owasp.org/www-project-top-ten/)
* [OWASP Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)
* [OWASP File Upload Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html)
* [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
* [OWASP Artificial Intelligence Security Verification Standard (AISVS)](https://owasp.org/www-project-artificial-intelligence-security-verification-standard-aisvs-docs/)

