---
sidebar_position: 3
---

# CI/CD

Selv om vi her omtaler mange fallgruver ved bruk av _Continuous Integration and Continuous Delivery_ løsninger, så er det sterkt anbefalt å ha nettopp det allikevell.
Et godt CI/CD system vil bidra til å øke sikkkerheten av systemet betydelig.

Systembrukere og miljø som benyttes i CI/CI har ofte vide og brede tilganger til det meste. Kildekode, Secrets, og Infrastruktur.
Dette gjør et prosjekts CI/CD til et svært attraktivt mål...

- Vær oppmerksom på hvordan CI/CD har tilgang til og bruker secrets
- Dependency checks
  - Python (safety, pip-audit)
  - Containers (clair, dockle, trivy)
  - JavaScript (npm audit)
  - Dependabot
  - Snyk Enterprise (#2)
  - SonarQube
- Tests
  - Test alle aktuelle endepunkter for 401/403 responser
  - Test authorization code
  - Test for strict (JWT valdiation)[## Resources]
  - Kan Burp Suite Enterprise være aktuelt (#1) (OWASP Zap er gratis alternativ)
- Bruk tekstbasert konfigurasjon (med versjonskontroll) hvor mulig
- Statisk kodeanalyse
  - Bandit (python)
  - SonarQube
  - GH Actions CodeQL (advanced security #3, #4)
- Secret scanning
  - truffle-hog (gratis, lokalt - kan integreres i IDE, lokal precommit)
  - GH secret scan (del av advanced security #3)
- Unngå egendriftet kjøretidsmiljø for CI/CD
  - Opprydding (hva ligger igjen når jobben har kjørt)
  - Om du må. Kjør i [kortlevde containere (GH eksempel)](https://docs.github.com/en/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners#using-ephemeral-runners-for-autoscaling)
- Unngå Jenkins (plugins problemer)
- Bruk GH Actions
  - Eksterne actions, brukes med omhu
  - Deaktiver GH actions for forks / PR
  - Per branch secrets (environments)
  - Vurder federated identity credential (Azure + Github)
- Unngå maskinbrukere / delte brukere
  - Bruk PAT og deploy keys med minimum scope og sett utløpsstid
- Ikke eksponer secrets i logger
