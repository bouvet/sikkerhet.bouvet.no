---
title: "Nettverkskonsepter"
weight: 2
translationKey: network
description: >
  Introduksjon til ansvarsfordeling i leveranser - hva må vi ha klarhet i?
---

Nettverk er en grunnleggende komponent i alt vi lager, og det er viktig med en grunnleggende forståelse for hvordan dette fungerer og hvordan det kan utnyttes av andre. 

Riktig konfigurasjon av nettverk er viktig for både rene skyløsninger, hybride nettverk og rene on-prem-løsninger. Nettverk er et stort fagfelt, med store variasjoner i bruksområde, sikkerhet og kompleksitet. Under dekker vi grunnleggende konsepter for kommunikasjon til og fra servere og nettjenester.

## Zero trust arkitektur
[Zero trust](https://en.wikipedia.org/wiki/Zero_trust_security_model) er et viktig konsept innen nettverksdrift. Kort fortalt så skal man aldri stole på noe som kommer fra andre systemer, og du skal anta at all kommunikasjon vil bli kompromittert. Zero trust kan ikke løses bare ved å sikre nettverket, men må være et mål i seg selv når en designer   løsninger og infrastrukturen rundt disse. Ved å implementere zero-trust vil du fjerne mange potensielle angrepsvektorer og dermed beskytte tjenestene som benytter nettverket.

## Få oversikt over nettverket
{{< tip title="Viktig" >}}
Ha kontroll på hvilke IP-adresser og porter du eksponerer, og hvilke tjenester som lytter på portene. Undersøk brannmurregler, se i logger og skann
egne systemer med nmap.
{{< /tip >}}

Ha oversikt over hvilke IP-adresser, porter og protokoller som et IT-system eksponerer mot utsiden. Dette gjelder uavhengig av om du skal sette opp et nytt, endre på eksisterende eller bare undersøke hva du allerede har. En målrettet angriper vil kartlegge åpne endepunkter for å finne angrepsmål, og det har vært flere eksempler på at datainnbrudd begynner med en bortglemt, usikker tjeneste. 

Som utviklere og systemansvarlige er det kritisk at vi vet akkurat hvilke tjenester som er åpne for hvem og hvorfor de er det.

Når man setter opp nye systemer har man gode muligheter til å få kontroll over hva som eksponeres. Hovedregelen etter Zero trust-arkitekturen bør være å begynne med at alt er stengt, og så åpne kun de porter og protokoller som trengs. Nye komponenter bør isoleres fra eksisterende systemer.

I eksisterende systemer kan det være vanskelig å få oversikt over hva som er eksponert, spesielt i hybride eller on-prem oppsett. Å bare stenge ned alt som ikke er dokumentert kan også være risikabelt, da dette kan ramme legitime systemer. Dersom en jobber i kundens infrastruktur, ta gjerne kontakt med en eventuell nettverksavdeling for hjelp til kartlegging. 

### Skanning av nettverk
For å finne åpne porter og tjenester bør man skanne både public og private IP-masker fra ulike steder. Husk at interne nettverk kan følge andre nettverksruter enn ekstern trafikk, og dermed se forskjellige åpninger. Det samme gjelder i sitasjoner der en har kontornett, VPN, DMZ/gjestenett eller andre åpne nett. 

Det finnes verktøy og tjenester som gjør kartleggingen enklere. `nmap` er industristandarden og FOSS, og den egner seg utmerket til å skanne IP-masker og detektere åpne UDP-, TCP- og SCTP-porter. Hvis du mangler oversikt, er `nmap` et godt sted å starte.

{{< caution title="Advarsel" >}}
Bruk av scannerverktøy som `nmap` skal <strong>alltid</strong> avklares med eiere av infrastruktur og nettverk. Dersom du sitter på
et Bouvet-kontor og scanner Azure-miljøet til en kunde, kan du lett trigge alarmer hos både Bouvet og kunden, samt ISP. 
{{< /caution >}}


## Isolasjon av tjenester
{{< tip title="Viktig" >}}
Bruk brannmur til å begrense trafikk innad i systemer og mellom systemer og Internett. Bruk allowlist hvis mulig. Filtrer trafikk i applikasjonslaget hvis
nødvendig.
{{< /tip >}}

_Brannmur_ er en fellesbetgegnelse på barrierer i nettverk som stopper uønsket trafikk. I de fleste sammenhenger er definisjonen litt snevrere, hvor det er
snakk om barrierer i TCP/IP-laget, men en brannmur kan også operere i applikasjonslaget.

For å håndheve en [zero-trust arkitektur](https://en.wikipedia.org/wiki/Zero_trust_security_model) må alle komponenter isoleres og kun gjøres tilgjengelig for de tjenestene som de selv skal konsumere eller levere data til. Det gjør det nødvendig med brannmur mellom komponenter i samme applikasjon, mellom applikasjoner og mellom applikasjon og Internett. Har du en applikasjon med en database, et backend-API og et web-API, er det gunstig om du kan sette brannmurregler mellom komponentene som kun tillater den trafikken som er nødvendig. Se diagrammet under for eksempel.

{{< figure src="../firewall-infrastructure.drawio.png" >}}

Brannmurer bør alltid droppe all inngående og utgående trafikk som standard, og heller åpnes eksplisitt for legitime forbindelser. Begrens alltid portåpninger til spesifikke porter og protokoller der det er mulig. Unngå bruk av "Any" som protokoll! 

Bruk også brannmurer mellom alle tjenester internt i nettverket for å sikre at en har flere lag med beskyttelse om ett skulle feile. Segmentering av nettverket slik at hver funksjon har sitt subnett vil også hjelpe. 

Unngå å sende trafikk over internett selv til egne skytjenester, bruk private endepunkter og VPN-tunneller der dette er mulig. Tjenester som må eksponeres mot andre systemer (både interne, eksterne og på internett) bør legges bak sikkerhetsfunksjoner som `web application firewalls` og/eller `api gateways`, og en må sikre at disse også beskytter mot eksempelvis DDOS-angrep. 

Send all utgående trafikk gjennom en egen proxytjeneste som blokkerer alt som standard, whitelist heller etter behov. Eksponer aldri tjenestene direkte dersom du kan unngå det. Å eksponere tjenester på andre porter enn standardportene er ikke en god ide, et scan av nettverket vil fort avsløre dette. 

## Konfigurasjon

Konfigurasjon av nettverk bør automatiseres i så stor grad som mulig, helst ved bruk av et [CI/CD-system]({{< ref "planlegge/verktoy-og-bruk.md" >}}).

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

## Veien videre
* [IBM: What is networking](https://www.ibm.com/topics/networking)
* [Wikipedia: Zero trust](https://en.wikipedia.org/wiki/Zero_trust_security_model)