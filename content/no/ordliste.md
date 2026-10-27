---
title: "Ordliste"
weight: 11
translationKey: wordlist
description: >
  Liste med vanlige ord og uttrykk relatert til applikasjonssikkerhet
---

## A
**ACL** Access Control List, liste som styrer hvem som har tilgang til et objekt og hvilken tilgang de har. 

**Active Directory (AD)** Katalogtjeneste fra Microsoft brukt on-premise. Håndterer brukere, grupper, identiteter og mye annet. 

**AI-agent** Programvarekomponent som bruker KI-modeller til å utføre oppgaver, ofte med tilgang til verktøy, data eller API-er. 

**Application Security Verification Standard (ASVS)** Standard fra OWASP med konkrete, testbare sikkerhetskrav til applikasjoner. Delt inn i nivåer, slik at kravene kan tilpasses hvor høy sikkerhet løsningen trenger.

**Artefakt** Det ferdigbygde resultatet av et byggsteg — eksempelvis en container, en pakke eller en binærfil — som versjoneres og deployes videre uten å bygges på nytt.

**Artificial Intelligence Security Verification Standard (AISVS)** Standard fra OWASP med sikkerhetskrav rettet spesifikt mot KI-systemer. Et sidestykke til ASVS for løsninger som bruker modeller, agenter og treningsdata.

**Asymmetrisk kryptering** Kryptering med åpen og privat nøkkel. Avsender kan kryptere en melding med mottakers åpne nøkkel, meldingen kan kun dekrypteres med den private nøkkelen. 

**Autentisering** Å verifisere at brukeren er den hen utgir seg for å være. Ofte forkortet _authn_

**Autorisering** Å verifisere at en autentisert bruker har tilgang til å utføre en handling. Ofte forkortet _authz_

## B
**Backup** Sikkerhetskopi av data eller systemer som gjør det mulig å gjenopprette etter sletting, feil eller angrep. En backup som ikke er testet, er ingen backup.

**Blacklisting** Prosess for å nekte spesifikke elementer, f.eks. tilgang til en ressurs fra gitte IP-adresser. Impliserer at alle andre har tilgang som standard. Bør ikke brukes, da det bryter med **Principle of least privilege**

**Botnet** Løst sammensatt gruppe med digitale enheter infisert av ondsinnet programvare, utfører kommandoer fra en eller flere sentrale Command & Control (C2) servere. 

**Brannmur** Vanligvis en fysisk enhet med spesialisert programvare som regulerer hvilken trafikk som kan flyte mellom nettverk. 

**Brute-force** Tilnærming der angriper tester passord blindt i håp om å finne det rette og få uautorisert tilgang til et system. 

**Burp** Applikasjon (proxy) som ofte brukes i forbindelse med sikkerhetstesting. 

## C
**CERT** Computer Emergency Response Team. Spesialisert team som er ansvarlig for håndtering av sikkerhetshendelser. Kan også beskrives som CSIRT.

**Certification Authority (CA)** Organisasjon som validerer identiteter til enheter som eksempelvis nettsteder, e-postadresser eller brukere for å utstede kryptografiske sertifikat for dette. 

**CIA-triaden** Grunnleggende sikkerhetskonsept. Består av **C**onfidentiality, **I**ntegrity og **A**vailability - Konfidensialitet, integritet og tilgjengelighet på norsk. 

**CI/CD** Continuous Integration / Continuous Delivery (eller Deployment). Praksis der kode bygges, testes og rulles ut automatisk gjennom en pipeline, slik at endringer kan leveres hyppig og forutsigbart.

**Command & Control (C2)** Beskriver infrastruktur og noder som utgjør styringsmekanismen for eksempelvis Botnet, slik at en angriper kan instruere dette til å gjennomføre f.eks. DDoS-angrep mot nettsteder. 

**Common Vulnerabilities and Exposures (CVE)** Internasjonal innsats for å registrere sårbarheter i programvare. Sårbarheter tildeles unike nummer og publiseres slik at interessenter kan følge disse opp og håndtere hendelser med en koordinert innsats. Peker ofte på rotårsak i form av CWE og en kritikalitetsscore gjennom CVSS.  

**Common Vulnerability Scoring System (CVSS)** Scoringsystem for å tallfeste kritikaliteten til en sårbarhet basert på elementer som CIA, angrepsvektorer, kompleksitet og annet. Brukes typisk for å vurdere CVE. 

**Common Weakness Enumeration (CWE)** Kategorisystem for å beskrive typiske svakheter og sårbarheter i programvare. Brukes ofte for å kategorisere CVE.  

**Cross-origin resource sharing (CORS)** Mekanisme i nettlesere som tillater at enkelte ressurser på en nettside kan hentes fra andre lokasjoner enn nettsiden i seg selv, eksempelvis data fra et API på annet endepunkt. 

**Cross-Site Request Forgery (CSRF)** Angrepsteknikk der en angriper forsøker å utnytte tilgangen brukeren av et nettsted har til å gjennomføre angrep ved å lure brukeren til å sende falske forespørsler. Kan mitigeres med såkalte CSRF-tokens.  

**Cross Site Scripting (XSS)** Et angrep som injiserer ondsinnede skript gjennom URL eller inputfelt som ikke valideres.

**CSIRT** Cyber Security Incident Response Team. Spesialisert team som er ansvarlig for håndtering av sikkerhetshendelser. Kan også beskrives som CERT.

## D
**Dataintegritet** Mekanisme som forhindrer endring eller ødelgellse av data under transport eller lagring.

**Data poisoning** Manipulering av trenings- eller evalueringsdata for å påvirke modellens oppførsel i en uønsket retning.

**Dekryptering** Å transformere en kryptert melding tilbake til det originale formatet ved hjelp av en nøkkel.

**Denial-of-Service** Ofte forkortet DoS. Tjenestenektangrep der en angriper oversømmer et mål med mye trafikk fra en enkelt kilde i håp om at angrepsmålet skal bli utilgjengelig for andre. 

**Disaster recovery** Planer og rutiner for å gjenopprette drift etter alvorlige hendelser som datatap, nedetid eller kompromittering. Måles typisk mot RTO og RPO.

**Distributed Denial-of-Service** Ofte forkortet DDoS. Tjenestenektangrep der en angriper oversømmer et mål med mye trafikk fra mange kilder i håp om at angrepsmålet skal bli utilgjengelig for andre. Gjennomføres ofte ved hjelp av botnet. 

**Dynamic Application Security Testing (DAST)** Sikkerhetstesting av en kjørende applikasjon utenfra, uten tilgang til kildekoden. Finner svakheter som først viser seg når løsningen kjører. Motstykket til SAST.

## E
**Eksfiltrering** Prosessen med å hente ut noe; typisk en angriper som henter ut data fra et angrepsmål i det skjulte. 

**Entra ID** Katalogtjeneste brukt i Azure. Tidligere kjent som Azure Active Directory. 

## F

**Fuzzing** Teknikk der en sender ugyldige data som input til et system for å se om uventede feil kan fremprovoseres. Feil oppdaget med fuzzing kan i enkelte tilfeller hinte om sårbarheter som kan utnyttes av en angriper. 

## G 
**GDPR** General Data Protection Regulation. Europeisk regulering for å sikre personvern, innført i Norge gjennom Personopplysningsloven. 

## H
**Hashing** Kryptografisk funksjon for å generere en tekststreng som representerer et objekt. Brukes i forbindelse med integritetssjekking. 

**HTTP** Hyper Text Transfer Protocol; definerer en rekke standardoperasjoner som GET, POST og liknende. Lag 7 i OSI-modellen. 

**HTTPS** HTTP sikret ved hjelp av kryptografiske sertifikater for å kryptere trafikk mellom klient og tjener. 

**Hugo** Dokumentasjonsprogramvare som bygger opp en webportal basert på Markdown-filer. 

## I

**Identity and Access Management (IAM)** Samlebetegnelse for hvordan identiteter opprettes, forvaltes og gis tilgang til ressurser — inkludert roller, rettigheter og livsløpet til en konto.

**Identitetsleverandør (IdP)** Tjeneste som autentiserer brukere og utsteder identitetsbevis til applikasjoner, eksempelvis gjennom SAML eller OIDC. Entra ID er et vanlig eksempel.

**IDS** Intrustion Detection System. System som overvåker og varsler om inntrengingsforsøk. 

**IP** Internet Protocol. Standardprotokoll som håndterer overføring av pakker (TCP eller UDP) mellom IP-adresser. Lag 3 i OSI-modellen.

**IP-adresse** 32-bit (IPv4) eller 128-bit (IPv6) numerisk adresse som identifiserer en digital enhet i et nettverk. 

**IPS** Intrusion Prevention System. Også referert til som **IDPS**. System som forhindrer inntrengingsforsøk. 

**Integritet** Grunnleggende sikkerhetsbegrep, del av CIA-triaden. I hvor stor grad du kan stole på at informasjon er uendret. 

**ISO 27001** Internasjonal standard for ledelsessystem for informasjonssikkerhet (ISMS). Beskriver krav til styring, risikovurdering og hvilke kontroller som skal vurderes.

**ISO 42001** Internasjonal standard for ledelsessystem for kunstig intelligens. Tilsvarer ISO 27001, men retter seg mot styring og kontroll av KI.

## J

**JSON Web Token (JWT)** Signert token som brukes til å overføre informasjon om en autentisert bruker mellom tjenester. Signaturen må valideres før innholdet brukes — og innholdet er kodet, ikke kryptert.

**Juice Shop** Nettbutikk laget for å demonstrere sårbarhetene beskrevet i OWASP Top 10. 

## K
**Kali Linux** Linuxdistribusjon rettet mot cybersikkerhet. 

**Kunstig intelligens (KI)** Samlebetegnelse for metoder og systemer som kan utføre oppgaver som normalt krever menneskelig vurdering, for eksempel tekstforståelse, prediksjon og beslutningsstøtte.

**Konfidensialitet** Grunnleggende sikkerhetsbegrep, del av CIA-triaden. I hvor stor grad informasjon kan holdes hemmelig

**Kryptering** Mekanisme der data gjøres uleselig uten korrekt nøkkel. Se også asymmetrisk og symmetrisk kryptering. 

**Kryptografiske nøkler** Hemmelige eller offentlige verdier som brukes i krypterings- og dekrypteringsprosesser. Se asymmetrisk kryptering. 

## L
**Large Language Model (LLM)** Stor språkmodell trent på store mengder tekst for å forstå og generere naturlig språk.

**Lightweight Directory Access Protocol (LDAP)** Protokoll for oppslag mot katalogtjenester, typisk for å hente brukere, grupper og attributter fra Active Directory eller tilsvarende.

**Local Area Network (LAN)** Nettverk som dekker et begrenset fysisk område, som et bolighus, noen kontorer eller en bygning. 

## M
**Malware** Ondsinnet programvare ment for å utføre skadelige handlinger. Kan ramme spesifikke mål, men kan også spres tilfeldig for å ramme bredest mulig. 

**Man-in-the-middle (MITM)** Angrepsteknikk der en angriper forsøker å plassere seg mellom to noder som kommuniserer, i håp om å avlytte trafikkstrømmen mellom de to, eller alternativt for å manipulere denne. 

**Model Context Protocol (MCP)** Åpen protokoll for å koble KI-agenter til eksterne verktøy og datakilder på en standardisert måte.

**Modelldrift (Model drift)** Gradvis endring i modellens kvalitet eller oppførsel over tid, ofte som følge av endringer i data, kontekst eller bruksmønster.

## N
**NSM** Nasjonal sikkerhetsmyndighet. Norsk fagmyndighet for sikkerhet, kjent for blant annet Grunnprinsipper for IKT-sikkerhet.

## O

**OpenID Connect (OIDC)** Utvidelse av OAuth som også håndterer autentisering. 

**Open Authorization (OAuth)** Åpen standard for å delegere autorisering for nettsteder; typisk ved å la tredjepartstjenester som Facebook, Google eller Microsoft håndtere autentisering. Nettstedet brukeren registrerer seg på håndterer da bare autorisering selv. 

**Obfuskering** Forsøk på å skjule informasjon uten bruk av kryptografi, eksempelvis ved å endre alle variabelnavn i en applikasjon til a, b, c, etc for å gjøre koden vanskeligere å forstå. 

**Ondsinnet programvare** Ofte omtalt som malware, skadevare, virus, trojaner, orm. Programvare laget med onde hensikter. 

**OSI-modellen** Referansemodell for å beskrive elektronisk kommunikasjon, bestående av 7 lag: Applikasjon, presentasjon, sesjon, transport, nettverk, datalink, fysisk. 

**OWASP** Open Worldwide Appliation Security Project. Organisasjon som jobber for å øke fokus på sikkerhet. Mest kjent for OWASP Top 10. 

## P
**Penetrasjonstesting** Metodisk forsøk på å finne svakheter i applikasjoner, infrastruktur eller relaterte systemer. 

**Phishing** Forsøk på å hente ut informasjon eller utføre handlinger ved å lure mottaker. Spiller ofte på ulike elementer som tidspress, autoritet, belønning og annet. Angrepsforsøkene er generiske og rettes ikke mot enkeltpersoner.

**Pipeline** Den automatiserte kjeden av steg som bygger, tester og deployer en løsning i CI/CD. Har ofte tilgang til både hemmeligheter og produksjonsmiljøer, og er derfor et attraktivt angrepsmål.

**Principle of least privilege** Grunnleggende sikkerhetsprinsipp som tilsier at brukere eller enheter ikke får mer tilgang enn de absolutt trenger for å gjøre jobben sin. 

**Prompt injection** Angrepsteknikk der input forsøker å overstyre instruksjoner og få en KI-modell eller agent til å utføre uønsket atferd.

**Public key** Åpen nøkkel brukt i forbindelse med asymmetrisk kryptering. Meldinger til en mottaker krypteres med åpne nøkkelen, men kan kun dekrypteres med den private nøkkelen. 

**Public Key Infrastructure (PKI)** Infrastruktur brukt for å publisere og distribuere public keys, slik at det er mulig å validere identitet. 

**Private key** Hemmelig nøkkel brukt i forbindelse med asymmetrisk kryptering. Meldinger til en mottaker krypteres med åpne nøkkelen, men kan kun dekrypteres med den private nøkkelen. Private nøkler skal holdes hemmelige, og beskyttes typisk med passord.

## Q
**Quality of Service (QoS)** Mekanisme som prioriterer enkelte typer trafikk i et nettverk, slik at eksempelvis meldinger fra overvåkningstjenester får prioritet over kattevideoer. 

## R
**Ransomware** Ondsinnet programvare som krypterer et system på vegne av en angriper, slik at det blir ubrukelig for offeret. Målet er at offeret skal betale for å få nøkkelen til å dekryptere dataene. 

**RBAC** Role-based Access Control. Brukere gis en rolle ut ifra oppgaver eller tilhørighet som definerer tilgangen de har, ofte basert på gruppemedlemsskap i AD eller Entra ID. 

**Recovery Point Objective (RPO)** Hvor mye data en løsning kan tåle å miste, målt som tid tilbake fra hendelsen. Styrer hvor ofte det må tas backup.

**Recovery Time Objective (RTO)** Hvor lang tid det maksimalt skal ta å gjenopprette normal drift etter en hendelse.

**Retrieval-Augmented Generation (RAG)** Tilnærming der en språkmodell henter relevant kontekst fra eksterne kilder før den genererer svar.

**Risiko** Et element av usikkerhet kombinert med uønsket konsekvens. Ofte uttrykket med formelen _sannsynlighet_*_konsekvens_

**ROS-analyse** Risiko- og sårbarhetsanalyse. En metodisk analyse som avdekker risiko og foreslår mitigerende tiltak.

## S
**Same-origin Policy (SOP)** Grunnleggende mekanisme i sikkerhetsmodellen for WWW for å sikre at ressurser hentes fra samme origin; dvs kombinasjon av protokoll, host og port. 

**Secure Software Development Lifecycle (SSDLC)** Utviklingslivssyklus der sikkerhet hører hjemme i hver fase — planlegge, designe, utvikle, deploye og forvalte — i stedet for å være en kontroll til slutt.

**Security Assertion Markup Language (SAML)** Åpen standard for utveksling av autentisering og autorisering mellom en identitetsleverandør (IDP) og en tjenesteleverandør eller applikasjon.

**Security Champion** En person med interesse og engasjement innenfor sikkerhet. Ikke nødvendigvis en ekspert, men en person som bidrar til å fokusere på sikkerhet innad i et prosjekt. 

**Sertifikat** Kryptografisk bevis på at en server, bruker eller applikasjon er den de utgir seg for å være. 

**Signatur** Meldinger eller dokumenter kan signeres elektronisk ved hjelp av kryptografiske nøkler, slik at det i etterkant kan verifiseres at objektet ble signert av en person med tilgang til en spesifikk nøkkel. 

**Single sign-on (SSO)** Ordning der brukeren autentiserer seg én gang hos en identitetsleverandør og får tilgang til flere applikasjoner uten å logge inn på nytt.

**Social engineering** Manipulering av mennesker for å få tilgang på informasjon eller en lokasjon. En angriper kan eksempelvis skaffe seg tilgang til et kontorlokale ved å utgi seg for å være en håndtverker på oppdrag.

**Spear phishing** Phishingangrep rettet mot enkeltpersoner, eksempelvis lederen i en bedrift.

**Software Bill of Materials (SBOM)** Maskinlesbar oversikt over hvilke komponenter og versjoner som inngår i et programvareprodukt eller artefakt.

**Software Composition Analysis (SCA)** Analyse som kartlegger hvilke tredjepartskomponenter en løsning bruker — både direkte og transitive avhengigheter — og risikoen knyttet til dem.

**Software Supply Chain** Hele kjeden av avhengigheter, verktøy, byggsteg og distribusjon som brukes for å utvikle og levere programvare.

**SQL Injeksjon** Angrepsform der angriper utnytter en sårbarhet for å modifisere eller kjøre egne SQL-spørringer mot backend. 

**SSL** Secure Sockets Layer; sikkerhetslag tidligere brukt for å kryptere forbindelser. Nå erstattet av TLS. 

**Static Application Security Testing (SAST)** Automatisert analyse av kildekoden for å finne sårbare mønstre før koden kjøres. Motstykket til DAST.

**Symmetrisk kryptering** Kryptering der mottaker og avsender bruker samme nøkkel for å kryptere/dekryptere en melding.

**Sårbarhet** Svakhet i en løsning som åpner for at en angriper kan utføre uønskede handlinger. 

## T
**TCP** Transmission Control Protocol. Pakkebasert nettverksprotokoll der avsender sender pakker på nytt dersom ikke mottaker bekrefter mottak. Motsetning til UDP. Lag 4 i OSI-modellen.

**Tilgjengelighet** Grunnleggende sikkerhetsbegrep, del av CIA-triaden. I hvor stor grad informasjon er tilgjengelig.

**TLS** Transport Layer Security; sikkerhetslag som erstatter SSL og brukes for kryptering av forbindelser, f.eks. til HTTPS og andre protokoller. 

**Trojansk hest** Ofte omtalt som "Trojaner". Ondsinnet programvare som utgir seg for å være noe annet enn det egentlig er. 

**Trusselmodellering** Analyse av prosjekt eller system for å finne potensielle svakheter som representerer en risiko. 

## U
**UDP** User Datagram Protocol. Pakkebasert nettverksprotokoll der avsender sender pakker uten at mottaker bekrefter mottak. Motsetning til TCP. Lag 4 i OSI-modellen.

## W
**Web Application Firewall (WAF)** Brannmur spesifikt rettet mot webapplikasjoner, håndterer typiske angrepsforsøk som SQL injection dynamisk ved å detektere og blokkere angripere. 

**Wide Area Network (WAN)** Nettverk som dekker et større område, knytter ofte flere LAN sammen i et større nett. 

**Whitelisting** Prosess for å godkjenne spesifikke elementer, f.eks. tilgang til en ressurs fra gitte IP-adresser. Impliserer at ingen har tilgang med mindre de har fått eksplisitt tilgang. 

**Wired Equivalent Privacy (WEP)** Utdatert og svært sårbar eldre protokoll for kryptering av trådløse nettverk. 

**Wi-Fi Protected Access (WPA)** Protokoller for kryptering av trådløse nettverk. Finnes i versjon 1, 2 og 3. 

**Wireshark** Nettverksanalyseverktøy som kan samle inn trafikkdata og analysere i sanntid eller i etterkant. 

## X
**XSS** Cross-Site Scripting. Et angrep som injiserer ondsinnede skript gjennom URL eller inputfelt som ikke valideres.

## Y

## Z
**Zero-day** En sårbarhet som ikke tidligere har vært kjent og som kan utnyttes umiddelbart. 

**Zero Trust** Sikkerhetsmodell der en går bort fra å stole blindt på brukere eller enheter, men verifiserer at de har lov til å utføre en handling i hvert tilfelle. 