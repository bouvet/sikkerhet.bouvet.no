---
title: "Hva gjør en Security Champion"
weight: 1
translationKey: hgsc
description: >
  Security Champion er et etablert begrep, men innholdet i rollen varierer fra selskap til selskap. Her er Bouvets variant, og fire steg du kan ta i ditt eget team.
---

## Hvorfor "Security Champion"
Begrepet "Security Champion" har etterhvert blitt et etablert begrep for å favne om folk som ikke nødvendigvis jobber direkte med sikkerhet, men som kan være en brobygger mellom de formelle sikkerhetsrollene og utviklerteamene. I Bouvet har vi valgt en løsning inspirert av [NAV](https://sikkerhet.nav.no/docs/bli-security-champion/) og [Equinor](https://equinor.github.io/appsec/security-champion/), og prøver å holde det hele mest mulig uformellt. 

## Slik ser rollen ut i Bouvet
Her vil det variere mellom regioner, enheter og team, men en typisk Security Champion vil ta opp saker og spørsmål relatert til sikkerhet, og hjelper teamet å fokusere på- og prioritere mellom saker relatert til sikkerhet og alt annet. Slack-kanalen ```#security-champions``` brukes for å annonsere eventer, dele nyttig informasjon og liknende som angår Security Champions i Bouvet. Hver måned kjører vi også det vi kaller AppSec Caffeine der vi samler Security Champions i Bouvet for et sammendrag av relevante nyheter, et faglig innlegg og en quiz med en symbolsk premie. Påmelding skjer via Bouvets egen [eventløsning](https://event.bouvet.no) (krever Bouvet-innlogging). 

Bouvet begynner å bli et stort selskap med stort spenn i prosjektene vi jobber med, og sikkerhet er et enormt fagområde der alle har noe nytt å lære hver dag. Vi digger kompetansedeling, så det er kjempekult om akkurat _DU_ har lyst til å engasjere deg og dele det du vet med andre - uansett hvor lav eller høy terskelen for å forstå det måtte være.

### Hvordan blir jeg en Security Champion? 
Dersom du har lyst har du lov. Vi har ingen påmelding for å bli det; meld deg inn i Slack-kanalen, engasjer deg, delta på samlingene, still på Bouvet One og prat om sikkerhet. Det gjør ingenting om du ikke har all verdens erfaring, det viktigste er at du engasjerer deg, lærer og deler. Prat med nærmeste leder dersom du ønsker å engasjere deg i rollen innad i teamet, eller ønsker å bidra på tvers av team eller kunder. 

Kompetansebygging er viktig, også som Security Champion. Vi er flere i Bouvet som har reist på konferansen NDC Security de siste årene, der vi prøver å samles for å bli bedre kjent, få til noe sosialt og støtte hverandre når vi har "våre egne" på scenen. Prat med nærmeste leder og bli med om du har anledning, så blir du fort kjent med andre engasjerte Security Champions. 

## Hvordan praktiserer jeg rollen?
### 1. Skap bevissthet i leveranseteamet
Du kan gjerne begynne med å stille deg selv noen spørsmål?

* Hva gjør dette prosjektet jeg jobber med egentlig?
* Hva er kritisk for at systemet skal fungere, og hvordan kan systemet misbrukes eller manipuleres?
* Eksisterer det en oppdatert [trusselmodell]({{< relref "designe/trusselmodellering.md" >}}) med tiltak for å forhindre utnyttelse av svakhetene?

Begynn med å etablere en mental modell av prosjektet, så kan du bygge videre på denne. 

* En god start er ofte å gjennomføre en trusselmodellerings-øvelse. Du trenger ikke kunne mye om trusselmodellering, men du kan få litt støtte i [artikkelen om trusselmodellering]({{< relref "designe/trusselmodellering.md" >}}) og hos [Threatmodeling manifesto](https://www.threatmodelingmanifesto.org/). 

* Prat med andre Security Champions i Bouvet. Hør med dem hva de har gjort som funker, og hva som ikke funker. 

* Husk at du alltid kan spørre Security Champions-nettverket om støtte, tips og veiledning.

Vær litt kreativ og forsøk å få med teamet, en Security Champion som ikke får med seg teamet får ofte ikke gjort så mye som han/hun ønsker.

### 2. Har vi kontroll på hele prosjektet vårt?

Hvis svaret er ja, så retter vi på det til nei. Det er alltid mer som kan gjøres. Vi har laget en sjekkliste som bør sjekkes ut for hvert eneste prosjekt vi er involvert i; alle leveranseteamene våre bør ha et forhold til punktene i denne og hvilken risiko de utgjør dersom en ikke innfører nyttige tiltak. Listen [finner du her]({{< relref "sjekklisten.md" >}}).

Denne portalen beskriver også en livssyklus som skal ivareta sikkerheten i utviklingsprosjekter. Mye av innholdet er også relevant for andre typer prosjekter, og husk at du ikke trenger å ta alt på en gang. Få med deg teamet og tygg dere gjennom del for del til dere har enda bedre kontroll på prosjektet. 

### 3. Beskytte kunde og Bouvet

Formålet med alt sikkerhetsarbeid er å unngå uønskede hendelser. Når en jobber med et prosjekt er det viktig å stille seg noen kontrollspørsmål:

* Har vi lov til å gjøre det vi gjør? 
* Er det lurt å gjøre det, eller kan noen utnytte det vi bygger eller måten vi jobber på?
* Hva er konsekvensen for kunden og brukerne dersom dette svikter eller kommer på avveie?
* Samler vi inn eller lagrer vi mer data enn vi faktisk trenger?
* Ville vi oppdaget det dersom noen utnyttet en svakhet i dag?

### 4. Teknisk gjennomgang av løsninger

Avhengig av ambisjonsnivået bør en bruke en sjekkliste som støtteverktøy for å gjennomgå løsningen. Vi har laget [en sjekkliste]({{< relref "sjekklisten.md" >}}) som dekker et absolutt minimum, men dersom en virkelig har ambisjoner finnes det andre verktøy som [OWASPs Application Security Verification Standard - ASVS](https://owasp.org/www-project-application-security-verification-standard/). Denne dekker sikkerhetsgjennomganger med ulike detaljeringsnivå, alt etter hvor dypt en vil gå.

## Veien videre
* [OWASP: Security Culture](https://owasp.org/www-project-security-culture/stable/4-Security_Champions/)
* [Bouvet: Sikkerhet i oppdrag (BLS)](https://info.bouvet.no/bin/view/Bouvet%20Ledelsessystem%20-%20BLS/Kvalitet%20i%20leveranser%20-%20Bouvets%20kvalitetssystem/Gjennomf%C3%B8ring%20av%20oppdrag%20-%20Hovedprosess/St%C3%B8tteprosedyrer%20for%20gjennomf%C3%B8ring%20av%20oppdrag/Sikkerhet%20i%20oppdrag/) (Krever Bouvet-bruker)
* [Bouvet Deler: Alle trenger en sikkerhetsvenn](https://www.bouvet.no/bouvet-deler/alle-trenger-en-sikkerhetsvenn)
* [Bouvet Deler: Security Champions hever fokuset på sikkerhet](https://www.bouvet.no/bouvet-deler/security-champions-hever-fokuset-pa-sikkerhet-)
* [NAV: Security Champion](https://sikkerhet.nav.no/docs/bli-security-champion/)
* [Equinor: Security Champion](https://equinor.github.io/appsec/security-champion/)