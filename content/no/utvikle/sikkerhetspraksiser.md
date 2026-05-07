---
title: "Sikkerhetspraksiser"
weight: 4
translationKey: sikkerhetspraksiser
description: >
  Det er mye å tenke på dersom en skal bygge en sikker løsning, og et viktig utgangspunkt er OWASP Top 10. 
---

Det finnes mange ulike typer sårbarheter og svakheter vi må forholde oss til når vi utvikler nye applikasjoner. Organisasjonen Open Worldwide Application Security Project (OWASP) publiserer en prioritert liste over vanlige applikasjonssårbarheter som brukes av mange team som et praktisk utgangspunkt. 

OWASP Top 10 er ikke en komplett sikkerhetsstandard, men en nyttig prioritering av hva som typisk går galt i virkelige prosjekter.

## Gjeldende punkter i OWASP Top 10
Per i dag er siste publiserte versjon OWASP Top 10:2025:

1. A01:2025 - Broken Access Control
2. A02:2025 - Security Misconfiguration
3. A03:2025 - Software Supply Chain Failures
4. A04:2025 - Cryptographic Failures
5. A05:2025 - Injection
6. A06:2025 - Insecure Design
7. A07:2025 - Authentication Failures
8. A08:2025 - Software or Data Integrity Failures
9. A09:2025 - Security Logging and Alerting Failures
10. A10:2025 - Mishandling of Exceptional Conditions

## Fra Top 10 til praksis i teamet
Dersom teamet ikke har noen prosesser rundt sikker utvikling, er dette et godt sted å starte. For å få effekt i praksis må punktene omsettes til konkrete kontroller i leveranseløpet.

For en mer praktisk gjennomgang av hvordan slike tiltak kan bygges inn i produktutvikling, se også [Slik etablerer bedriften gode sikkerhetstiltak i produktutviklingen](https://www.bouvet.no/bouvet-deler/slik-etablerer-bedriften-gode-sikkerhetstiltak-i-produktutviklingen).

Et minimum er vanligvis å:

* definere sikkerhetskrav tidlig og knytte dem til arkitektur og brukerhistorier
* gjennomføre kodegjennomgang og tester som inkluderer sikkerhetsrelevante scenarioer
* bruke automatiserte kontroller i CI/CD for avhengigheter, konfigurasjon og hemmeligheter
* sikre sporbarhet på endringer, bygg og deploy
* oppdatere trusselmodell og risikovurdering ved større endringer

For team med større modenhet innenfor applikasjonssikkerhet er [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/) et naturlig neste steg. ASVS går mer i dybden enn Top 10 og kan brukes som verifikasjonsgrunnlag i ulike modenhetsnivå.

## Hva med AI?
OWASP Top 10 for webapplikasjoner dekker fortsatt mange grunnleggende problemer, også i løsninger som bruker KI. Samtidig introduserer KI egne trusler som ikke dekkes fullt ut av denne listen alene.

For prosjekter med KI-komponenter bør teamet i tillegg bruke:

* [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
* [OWASP AI Agent Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html)

Detaljer om trygg bruk av KI i utviklingsløpet er beskrevet i [Bruk av kunstig intelligens]({{< ref "planlegge/ai.md" >}}). Risiko rundt avhengigheter, artefakter og byggkjede er beskrevet i [Forsyningskjedesikkerhet]({{< ref "utvikle/software-supply-chain.md" >}}).

OWASP publiserer mye annet i tillegg, både andre Top 10-lister og det de kaller ["cheat sheets"](https://cheatsheetseries.owasp.org/), som gir mer detaljert informasjon om spesifikke sikkerhetstema. 

## Veien videre
* [OWASP Top 10:2025](https://owasp.org/Top10/2025/)
* [OWASP Application Security Verification Standard](https://owasp.org/www-project-application-security-verification-standard/)
* [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
* [OWASP AI Agent Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html)
* [The 18 CIS Critical Security Controls](https://www.cisecurity.org/controls/cis-controls-list)
* [CISA - Secure by Design](https://www.cisa.gov/securebydesign)
* [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
* [Bouvet Deler: Slik etablerer bedriften gode sikkerhetstiltak i produktutviklingen](https://www.bouvet.no/bouvet-deler/slik-etablerer-bedriften-gode-sikkerhetstiltak-i-produktutviklingen)