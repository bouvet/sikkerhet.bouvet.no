---
sidebar_position: 3
---

# Kildekode

Denne artikkelen handler om programvarens kildekode. Det vil si alt som ligger til grunn for det som kjører i produksjon, men ikke andre ting som ligger i kildekodekontrol (dokumentasjon, IaC, CI/CD, etc.).

## Autentisering

Autentisering handler om at en bruker skal bevise sin identitet.  
Det kan være både komplisert og utfordrende å gjøre dette på en sikker måte, og man bør derfor alltid bruke anerkjente ferdigløsninger. Å lage egen autentisering må unngås.

De fleste organisasjoner har allerede en etablert brukerdatabase (autentiseringsserver), for eksempel Azure Active Directory, IdentityServer, KeyCloak, eller LDAP.  
Om det ikke finnes noen slik brukerdatabase, anbefaler vi [KeyCloak](https://www.keycloak.org). Dette er et gratis alternativ med svært mange funksjoner og et aktivt opensource miljø.

- Ikke skriv din egen autentiseringslogikk
- Separer autentiseringslogikk fra applikasjonslogikk hvis mulig
- Bruk OAuth2 / OpenID Connect
- Ikke bruk [_password_ grant](https://oauth.net/2/grant-types/password/)
- For _offentlige klienter_ (web applikasjoner) bør man benytte [_Authorization Code w/PKCE_ grant](https://oauth.net/2/pkce/)

Selv om man bruker en ferdigløsning for selve autentiseringen, må man på et tidspunkt verifisere API-kallene.

- Sørg for korrekt validering av access tokens (JWTs)
  - Se [OWASP - Testing JSON Web Tokens](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/06-Session_Management_Testing/10-Testing_JSON_Web_Tokens)

## Autorisering

Autorisering er prosessen å finne ut om en bruker har rettigheter til å utføre en konkret operasjon (slette en bruker, modifisere et objekt, etc.).

Da denne lavnivå, ofte finmaskede, tilgangskontrollen som regel er tett knyttet til domenet, er det ofte oss som utviklere som må implementere denne logikken.  
Før man setter igang med denne jobben bør man undersøke noen av de mest brukte _tilgangskontroll modellene_, og se hvilken som egner seg best i ditt system.

- Design autoriseringssystemet rundt en velutprøvd og godt definert model. Slik som en av disse:
  - Discretionary access controls
  - Mandatory access controls
  - Role-based access controls (RBAC)
  - Attribute-based access control (ABAC)
- Utfør autoriseringsjekken på lavest mulig nivå
  > Om man legger inn en sjekk langt "opp" i koden, slik som i en kontroller, kan noen raskt få indirekte tilgang til
   operasjoner/data som ikke var tiltenkt. Derfor bør man tilstrebe å legge sjekken så nært opp mot selve operasjonen som mulig.
   For eksempel i et database interface.
- Sentraliser autoriseringslogikken
  > Om man forsøker å implementere autoriseringssjekker på mange ulike steder i kodebasen øker sjansen for feil betraktelig.
  Det vil også være langt mer krevende å identifisere og fikse feil. Samle derfor autoriseringslogikken et sted i kodebasen.

## Tredjepartssystemer

Mange applikasjoner henter inn data fra tredjepartssystemer. Vi er kanskje flinke til å validere all input data
som kommer inn i f.eks et REST API's endepunkter, men er ikke like nøye på data vi henter inn fra andre kilder.

Ting å tenke på ved bruk av data fra tredjepartssystemer:

- Valider og saniter all data (zero trust)
- Hva skjer om tredjepart blir utilgjengelig?
  > En tredjeparts _[SLA](/planlegge/disaster-recovery#service-level-agreement-sla)_ vil direkte påvirke vår egen

## Angreps metoder

Det er noen konkrete sikkerhetsrisikoer som går igjen som de mest vanlige og mest kritisk.
Organisasjonen [OWASP](https://owasp.org) (Open Web Application Security Project) lager hvert år en oppdatert liste over disse.
I den listen beskrives det i detalj hvordan de fungere, og hvordan de kan unngås.

I 2021 så den slik ut:

1. Broken Access Control
2. Cryptographic Failures
3. Injection
4. Insecure Design
5. Security Misconfiguration
6. Vulnerable and Outdated Components
7. Identification and Authentication Failures
8. Software and Data Integrity Failures
9. Software Logging and Monitoring Failures
10. Server-Side Request Forgery

Alle som skriver kode i Bouvet skal være kjent med denne listen. Målet er ikke å kunne alt om disse emnene, men å vite at de eksisterer
slik at man kan bli oppmerksom på om koden man jobber med akkurat nå bør undersøkes nærmere.

- Gjør deg kjent med [OWASP Top 10](https://owasp.org/Top10/)
  - Bruk dette for å identifisere og utbedre potensiell sårbar kode

## Sikkerhetskritisk kode

Utviklerteamet bør etablere en kultur/rutine for å framheve deler av kodebasen som _sikkerhetskritisk_.
Om noen i teamet peker på deler av koden som sikkerhetskritisk bør dette føre til at man gjør noen av disse tiltakene:

- Grundigere _review_ med spesielt fokus på sikkerhet
- Parprogrammering
- Ber om kvalitetssikring fra en senior/security champion/sikkerhetsekspert
- Leser seg opp på sikkerhetsanbefalinger for det konkrete rammeverket

## Kryptering

:::danger
Aldri skriv din egen krypterings-/hashing-algoritme. Benytt anerkjente biblioteker for dette.  
AKA: Don't roll your own crypto
:::

- Krypter all nettverkstrafikk mellom alle tjenester (TLS). Dette inkluderer ting som:
  - Databaser
  - Køsystemer
  - Tredjeparts-API
  - Om hemmelig data
- Om hemmelig data må lagres bør den _hashes_ med salt. Om det ikke er mulig skal den krypteres.
  - Les deg grundig opp på korrekt bruk av bibliotekene som brukes til dette

## Secrets

Flere uønskede sikkerhetshendelser har startet med en secret som har kommet på avveie. Pinlig mange av disse ble lekket fordi secretene var hardkodet i kildekoden.  
Vi skal bruke et versjonskontrollsystem, og du kan lese mer om hvordan det kan gjøres sikkert under artikkelen om [versjonskontroll](/utvikle/version_control).

- Secrets skal aldri være en del av kildekoden
- Bruk en `.gitignore`-fil for å hindre at filer som ikke skal _commites_ blir lagt til ved et uhell
  - Samme kan gjøres med en `.dockerignore`-fil
  - Bruk f.eks. [gitignore.io](https://www.toptal.com/developers/gitignore/) for å generere en `.gitignore`-fil for ditt prosjekt
- Secrets som har havnet i versjonskontrollsystemet __skal__ roteres umiddelbart. Selv om du har "slettet" historikken
- Vurder å sette en tidsbegrensning på en secrets levetid (og varsling før den utløper)
- Benytt et separat utviklingsmiljø med egne secrets

:::danger
INGEN secrets skal inn i kildekoden (passord, tokens, nøkler, etc.)
:::

## Scanning av koden

Det har kommet flere verktøy som kan scanne en kodebase, enten statisk eller dynamisk, med mål å identifisere feil og sårbarheter.

Dette kan du lese mer om under _[CI/CD for sikkerhet](/bygge/bruk-av-ci-cd)_
