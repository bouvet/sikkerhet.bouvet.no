---
sidebar_position: 3
---

# Sikkerhet og personvern

Informasjon rundt kildekodesikkerhet og personvern

## Secrets

:::danger

INGEN secrets skal inn i kildekoden (passord, tokens, nøkler)

:::

- Sørg for å bruke `.gitignore` (særlig for f.eks. miljøvariabelfiler).
    - Aller helst bør du unngå å skrive secrets til filer i kildekodemappen i det hele tatt
    - Bruk f.eks. [gitignore.io](https://www.toptal.com/developers/gitignore/) for å generere en `.gitignore` for ditt prosjekt
- Secrets som har havnet i `git` SKAL roteres umiddelbart
- Vurder å sette en tidsbegrensning på en hemmelighets levetid
- Benytt et separat utviklingsmiljø med egne secrets

## Sensitive data og personopplysninger

- Vær varsom når det kommer til sensitive data og persondata.
- Sørg for at eventuelle testdata ikke inneholder sensitive data eller personopplysninger
- Ref. [GDPR](https://ec.europa.eu/info/law/law-topic/data-protection/eu-data-protection-rules_en), [Schrems II](https://www.datatilsynet.no/aktuelt/aktuelle-nyheter-2021/oppdatert-veiledning-om-schrems-ii-fra-edpb/)
- Se gjerne også over [Personvernsprinsippene](https://www.datatilsynet.no/rettigheter-og-plikter/personvernprinsippene/)
- Pass opp for sensitive data i logger

## Kildekodesikkerhet

### OWASP Top 10
- Gjør deg kjent med [OWASP Top 10](https://owasp.org/Top10/).
    - Bruk dette for å identifisere potensielle faremoment og sikre koden.

### Sikkerhetskritisk kode
- Etabler rutiner i teamet for håndtering av sikkerhetskritisk kode
    - Parprogrammering
    - Code reviews
        - Identifiser hvor kjente sårbarheter kan være, og kvalitetssikre dette

### Kryptering

:::danger

IKKE skriv din egen krypteringsalgoritme. Benytt heller anerkjente biblioteker for dette.

(AKA don't roll your own crypto)

:::

- Benytt kryptering hvor dette er passende, som f.eks. ved oppbevaring av sensitive data i en database
- Benytt TLS for all trafikk mellom alle tjenester
    - Forbindelse til database
    - Forbindelse til kø
    - Forbindelse til tredjeparts-API
    - Bruk gjerne også TLS for trafikk mellom
        - Proxy og backend
        - Frontend og backend

### Autentisering
- Ikke skriv din egen autentiseringslogikk
- Separer autentiseringslogikk fra applikasjonslogikk hvis mulig
- Bruk OAuth2 / OpenID Connect

#### Autorisering
- Sørg for at du signerer og validerer tokens (JWTs)
    - Se [OWASP](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/06-Session_Management_Testing/10-Testing_JSON_Web_Tokens)

#### Eksterne ressurser
- [OWASP: Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)

### Logging
- Benytt et standardisert loggformat som kan konsumeres av aggregeringsverktøy
    - Se [OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html#event-attributes)

### Tredjepartssystemer
- Stoler vi på all input/data?
- Tåler vi at den blir utilgjengelig?
- Bruk verktøy for å scanne avhengigheter


### Verktøy
- [`snyk`](https://snyk.io/)
- [GitHub: Dependabot](https://docs.github.com/en/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions)
- [GitHub: CodeQL](https://docs.github.com/en/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)
- [GitHub: Secret Scanning](https://docs.github.com/en/code-security/secret-scanning)

#### Python
- [`safety`](https://pypi.org/project/safety/)
- [`bandit`](https://pypi.org/project/bandit/)