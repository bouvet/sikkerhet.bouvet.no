---
sidebar_position: 2
---

# Nettverkskonsepter

Riktig konfigurasjon av nettverk er viktig for både rene skyløsninger, hybride nettverk og rene on-prem-løsninger. Nettverk er et stort felt av faget, med store variasjoner i bruksområde, sikkerhet og kompleksitet. I denne artikkelen dekker vi grunnleggende konsepter for kommunikasjon til og fra servere og nettjenester.

- [Nettverkskonsepter](#nettverkskonsepter)
  - [Zero trust arkitektur](#zero-trust-arkitektur)
  - [Få oversikt over nettverket](#få-oversikt-over-nettverket)
  - [Isolasjon av tjenester](#isolasjon-av-tjenester)
  - [Konfigurasjon](#konfigurasjon)

## Zero trust arkitektur

[Zero trust](https://en.wikipedia.org/wiki/Zero_trust_security_model) er et viktig konsept innen nettverksdrift. Kort fortalt så skal man aldri stole på noe som kommer fra andre systemer, og du skal regne med at alt du kommuniserer med og gjennom kan bli kompromittert. Andre systemer kan være alt fra andre systemer på samme server, andre servere eller til og med nettverkskabelen som dataene flyter på. Zero trust kan ikke løses bare ved å sikre nettverket, men ved å legge tankegangen i bunn når du designer et nettverk vil du fjerne mange potensielle angrepsvektorer og dermed beskytte tjenestene som benytter nettverket.

## Få oversikt over nettverket

For å kunne ha kontroll over nettverket ditt må du vite hva det består av. Dette er viktig uansett om du skal sette opp et nytt system, legge til noe i et eksisterende eller bare vil ha oversikt over hva du har i dag.

Når man setter opp nye systemer har man gode muligheter til å få kontroll over hva som eksponeres. Hovedregelen etter Zero trust-arkitekturen bør være å begynne med at alt er stengt, og så åpne kun de porter og protokoller som trengs. Nye komponenter bør settes [isolert](#isolasjon-av-tjenester) fra eksisterende systemer.

I eksisterende systemer kan det være mer komplisert å få oversikt over hva som er eksponert, spesielt de som er hybride eller on-prem. Det kan også være risikabelt å bare stengte ned all trafikk for å åpne det som _bør_ være åpent, da det kan være andre systemer som benytter det som faktisk er åpent.

- Finn ut hva du eksponerer
  - Sjekk reglene i de firewallene og nettverkssystemene som er nærmest systemet ditt først
    - Husk at regler kan finnes på flere nivåer i systemet, for eksempel vil en [virtuell maskin](../06_deploye/03_virtual_machines.md) vanligvis være dekket av både en brannmur i nettverket og en i operativsystemet
    - Ta kontakt med de som drifter bedriftens sentrale firewaller for å se om de har andre regler som dekker dine tjenester
  - Skaff oversikt over alle ingress- og egressmetoder som er eller skal bli koblet tjenesten din, eksempelvis:
    - Internett
    - Internt nettverk
    - Klient-VPN
    - Site to site VPN
    - Dedikerte fibertjenester/linjer
  - Sjekk logger for nettverkstrafikken, gjerne i aggregert form
  - Bruk om nødvendig verktøy som `nmap` for å finne ut hva som eksponeres
  - For gamle systemer der man har dårlig oversikt kan det være lurt å gjøre søk i CRM-systemer og dokumentasjon for å finne historikk
- Finn ut hva du skal eksponere og hvor det skal eksponeres til
  - Bruk regler og logger for å finne ut om det du eksponerer matcher med det du skal eksponere
- Lag et diagram over nettverksflyt med trafikkretning, port og protokoll, både nåværende og ønsket situasjon
- Følg rådene lenger ned i artikkelen og innfør de som kan innføres stegvis for å sikre tjenestene uten unødvendig nedetid

:::caution Advarsel

Bruk av scannerverktøy som `nmap` må avklares med eiere av infrastruktur

:::

## Isolasjon av tjenester

Alle komponenter bør isoleres og kun gjøres tilgjengelig for de tjenestene som de selv skal konsumere eller levere data til. Dette kan løses på flere måter, og ikke alle platformer støtter alle metodene som er diskutert under her.

- Brannmur bør være konfigurert til å droppe all inngående og utgående trafikk som standard
  - Vurder om trafikk fra utenlandske IP-adresser skal være tillatt for tjenester som er eksponert over internett
  - Åpne kun de porter og protokoller som er relevante, også mellom egne nettverkssegmenter
    - Begrens porter og protokoller på IP-adresse eller subnettnivå der det er mulig, også internt
    - Unngå bruk av "Any" som protokoll, vær spesifikk og begrens der det er mulig
  - Bruk brannmurer lokalt på alle tjenester for å beskytte for trafikk som oppstår internt i nettverket
- Segmenter nettverket slik at hver funksjon har sitt subnett (der det er relevant og mulig)
- Unngå å sende trafikk over internett selv til egne skytjenester, bruk private endepunkter der det er mulig
- Tjenester som må eksponeres mot andre systemer (både interne, eksterne og på internett) bør legges bak sikkerhetsfunksjoner som `web application firewalls` og/eller `api gateways`
- Ha kontroll over hvordan du administrerer systemer som man må logge in på
  - Bruk `bastion hosts` der det er mulig
  - Konfigurer just-in-time tilgang som kun åpner for trafikk fra én intern IP-adresse i en kort periode hvis du ikke kan bruke bastion hosts
  - Aldri eksponer protokoller som `ssh`, `rdp` eller `vnc` på internett, selv ikke på andre porter enn standardportene
- Konfigurer en egen DNS-resolver med hvitelistede domener for oppslag
- Send HTTP-trafikk fra applikasjonen gjennom en HTTP-proxy
  - Konfigurer en hviteliste med domener i proxyen

## Konfigurasjon

Konfigurasjon av nettverk bør automatiseres i så stor grad som mulig, helst ved bruk av et [CI/CD-system](../03_bygge/bruk-av-ci-cd.md).

- Begrens hvem som kan konfigurere både nettverket og nettverksregler direkte
  - Sett opp Just-in-time (JIT)-tilgang der det er mulig
  - Begrens hvor nettverket kan redigeres fra (f.eks. kun på innsiden av en on-prem brannmur)
- Script alle regler som kan scriptes
  - Bruk kildekodekontroll
    - Ha ekstra sikkerhet på repos som inneholder kilden til nettverket, beskytt både mot lesing og skriving
  - Bruk verktøy som `Snyk` for å kjøre analyse av script
  - Scriptene bør kjøres regelmessig og automatisk (minst hvert døgn)
    - Dersom ukjente regler oppdages skal det opprettes varsler
    - Alle ukjente regler slettes eller deaktiveres
    - Alternativt kan man bruke andre metoder som oppdager endring fra ønsket konfigurasjon
- Ta backup av eller dokumenter alle regler som settes opp uten scripting
  - Dokumenter alle regler som settes opp / håndteres av personer utenfor ditt team
