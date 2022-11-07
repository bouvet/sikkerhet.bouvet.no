---
sidebar_position: 3
---
# Sikring av CI/CD

Systembrukere og miljø som benyttes i CI/CI har ofte vide og brede tilganger til det meste. Kildekode, Secrets, og Infrastruktur.
Dette gjør et prosjekts CI/CD til et svært attraktivt mål...

## Secrets

_Secrets_ (passord, tokens, ssh-nøkler, osv.) er ofte nødvendig for at systemet skal ha tilgang til å gjøre det det skal.  
Da det er disse som gir tilgang til beskyttede ressurser er det svært viktig at de behandles riktig og ikke kommer på avveie.

- Bruk CI/CD systemets eget system for å legge inn og bruke secrets
  - Ikke lag egne løsninger for å mate inn secrets (lesing fra fil, miljøvariabler, etc.)
- Alle secrets bør ha en begrenset gyldighets periode (expire/utløpstid)
- Unngå maskinbrukere og delte brukere
  - Bruk __PAT__([Personal Access Token](https://en.wikipedia.org/wiki/Personal_access_token)) og __deploy keys__ med minimum scope
- Kontroler at secrets ikke blir printet i loggene. Også når operasjoner failer
- Send secrets kun til de stegene i jobben som har behov for de

## Konfigurasjon

Da CI/CD systemet vil være en kritisk del av den totale IT-løsningen, er det viktig å kunne gjenskape det raskt og korrekt ved eventuelle feil.  
Derfor bør konfigurasjonen og oppsettet av CI/CD være tekstbasert og en del av kildekoden som er under versjonskontroll.

## Kjøremiljø

Om miljøet CI/CD skulle bli kompromitert kan det få alvorlige følger. Da kan publisert kildekode modifiseres, secrets bli hentet ut, og man kan kunne komme seg videre inn i systemet.  
For generell sikring av [virtuelle maskiner](../deploye/virtual_machines) og [containere](../deploye/containers) finnes det egne sider om det.

- Unngå å drifte kjøretidsmiljø for CI/CD selv (self hosted runners)
  - Om du må. Kjør i [kortlevde containere (Github eksempel)](https://docs.github.com/en/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners#using-ephemeral-runners-for-autoscaling)
- Unngå Jenkins (om du må, vær svært nøye med å oppdatere og hvilke plugins som brukes.)
- Bruk Github Actions, men pass på...
  - Eksterne _actions_. Bør unngåes, ellers samme prinsipp som ved bruk av [biblioteker](../biblioteker). Kan også låses til commit SHA
  - Ikke tillat pull requests fra forks å kjøre i _self hosted runners_
  - Vurder å bruke environment secrets (per branch). Husk; alle som kan kjøre jobber har tilgang til alle secrets
  - Vurder [federated identity credential](https://learn.microsoft.com/en-us/graph/api/resources/federatedidentitycredentials-overview?view=graph-rest-1.0) (Azure + Github)
