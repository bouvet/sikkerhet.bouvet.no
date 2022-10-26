---
sidebar_position: 4
---

# CI/CD for sikkerhet

Et godt CI/CD system kan brukes til å øke sikkerheten på sluttproduktet betydelig.  
Her beskrives tiltak som bør være en del av de fleste CI/CD systemer.  

:::tip pre-commit
Et tips er å bruke [pre-commit](https://pre-commit.com) til å kjøre alt av linting, formatering, og testing, for så å bruke den samme _pre-commit_ konfigurasjonen i CI/CD. Dette vil minimerer vedlikeholdet, gjøre det enkelt å teste lokalt, og fange opp problemer tidlig.
:::

Merk; noen av verktøyene listet opp her har ulike lisense krav. Noen er helt gratis, andre kun for _non-commercial use_, og andre _må_ betales for. Hvilke verktøy man trenger, og ønsker å betale for må avklares i hvert prosjekt med hver enkelt kunde. For _public_ repositories på Github for man automatisk enkelte funksjoner som må betales for i private repositories.

## Dependency checks

Alle avhengigheter som taes med inn i systemet kan ha kjente sårbarheter (CVE). Disse kan oppdages, og om satt opp riktig, automatisk patches.

- [Renovate](https://docs.renovatebot.com) (Python, Java, JavaScript, C#, Go, ++)
- Python; [pip-audit](https://github.com/pypa/pip-audit)
- Containers; [clair](https://quay.github.io/clair/)
- JavaScript; [npm audit](https://docs.npmjs.com/cli/v8/commands/npm-audit)
- [Dependabot](https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates) (Github) (Python, Java, JavaScript, C#, Go, ++)
- [Snyk](https://snyk.io/product/snyk-code/) (Python, Java, JavaScript, C#, Go, ++)
- [SonarQube](https://www.sonarqube.org/features/security/) (Python, Java, JavaScript, C#, Go, ++)

## Testing

Å kjøre tester i CI er lurt av flere grunner, men fra et sikkerhetsperspektiv er det enkelte tester som bør være med.

- Test alle aktuelle endepunkter for 401/403 responser
- Test kode som håndterer autorisasjon (hvem får gjøre hva). Her vil det være en fordel om all autorisasjonslogikk skjer på et sentralisert sted i kodebasen.
- Test for strict [JWT valdiation](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/06-Session_Management_Testing/10-Testing_JSON_Web_Tokens)

## Statisk kodeanalyse

Statisk kodeanalyse, også kjent som _SAST_ (Static Application Security Testing), kan brukes mot en kodebase for å fange opp potensielle feil og sårbarheter.

Noen alternativer:

- [SonarQube](https://www.sonarqube.org/features/security/)
- [CodeQL](https://codeql.github.com)
- [Bandit](https://github.com/PyCQA/bandit) (kun for python)
- [Snyk](https://snyk.io/product/snyk-code/)
- [dockle](https://github.com/goodwithtech/dockle) - Sikkerhets linter for Dockerimage

## Secret scanning

Om man skulle være så uheldig å pushe secrets til versjonskontrollsystemet, kan et CI/CD system redde deg ved å identifisere disse, og i noen tilfeller til og med gjøre de ugyldige mot den tjenesten de er ment for.

Noen alternativer:

- [Github secret scanning](https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning)
- [truffle-hog](https://github.com/trufflesecurity/trufflehog)

# Dynamisk applikasjonsanalyse 🧙‍♂️

Dynamisk applikasjonsanalyse, også kjent som _DAST_ (Dynamic Application Security Testing), er en mer avansert metode som kan brukes mot kjørende applikasjoner.  
Dette er blandt annet populære verktøy blandt penetrasjonstestere.

Noen alternativer:

- [OWASP Zap](https://www.zaproxy.org)
- [Burp](https://portswigger.net/burp)
