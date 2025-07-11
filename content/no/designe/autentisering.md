---
title: "Autentisering og autorisering"
weight: 4
translationKey: authz
description: >
  Autentisering og autorisering sjekker henholdsvis _hvem_ du er og _hva_ du har lov til. Dette er viktige konsepter som må implementeres korrekt for at sikkerheten i en løsning skal ivaretas. 
---

Autentisering og autorisering er viktig i alle utviklingsprosjekter. Kort fortalt går _autentisering_ ut på at en skal validere at en bruker representerer den identiteten den hevder å representere, typisk gjennom å sjekke brukernavn og tilhørende passord. _Autorisering_ går ut på å sjekke at brukeren har lov til å gjøre det den prøver på. Disse er ofte forkortet til _authn_ for autentisering og _authz_ for autorisering.

## Autentisering
Når en skal validere en bruker, er det viktigste at en *ikke* lager en egen autentiseringsløsning! Å sikre at slike løsninger faktisk er sikre er en kjempejobb, og man bør istedet benytte seg av etablerte løsninger for dette!

Single sign-on er en vanlig løsning for å unngå at enkelttjenester må håndtere autentisering i bedriftsmiljø. Bruker autentiseres via en sentralt styrt tjeneste eller operativsystemet, hver applikasjon brukeren så åpner gjenbruker denne konteksten slik at en unngår å måtte logge på manuelt. Brukeropplevelsen strømlinjeformes, og brukerne 'trenes' opp til at applikasjoner ikke skal be om brukernavn og passord. Dersom en angriper forsøker å phishe slik informasjon vil det oppfattes som unormalt og suspekt. 

Vanlige tilnærminger for å håndtere autentisering kan være bruk av tredjepartstjenester, eller protokoller som håndterer autentisering mot kundens AD/Entra. I mange tilfeller ønsker vi å benytte [Single-Sign-On](https://en.wikipedia.org/wiki/Single_sign-on)(SSO) for å unngå at brukeren må taste inn brukernavn og passord, spesielt for interne forretningsapplikasjoner. 

Vanlige løsninger for å håndtere pålogging er å benytte seg av biblioteker som tar seg av hele flyten, som eksempelvis `Microsoft.Identity.Web`. Andre alternativer kan være bruk av 
* SAML - XML-basert løsning som primært brukes for Single Sign-On og autorisering. 
* Oauth 2.0 - Autorisasjonsløsning der en identitetsløsning (IDP) deler ut aksesstokens som så sjekkes og håndteres av Oauth
* OpenID Connect (OIDC) - Autentiseringslag oppå Oauth, som muliggjør innhenting av informasjon relatert til bruker og sesjon fra IDP. 
* Kerberos - Autentiseringsprotokoll mye brukt i OS-sammenheng. 
* LDAP - Autentisering- og autoriseringsløning brukt mot ulike katalogløsninger som Active Directory. 

Her er det viktig at en setter seg inn i behovene til løsningen og hvilke autentiseringsmetoder som er tilgjengelige og eventuelt ønskelige.

## Autorisering
Skillet mellom autentisering og autorisering ligger i at autentiseringen bekrefter hvem du er, mens man i autoriseringen sjekker at du har lov til å utføre en handling. 

I likhet med autentisering finnes det flere tilnærminger for hvordan autorisering håndteres, og man er nødt til å sette seg inn i beste praksiser for språk og rammeverk som benyttes. 

Det finnes likevel noen hovedprinsipper en alltid skal ta med seg inn i utviklingsforløpet:

### _Standardtilgang_ skal alltid være _ingen tilgang_
Dette er også kjent som _default deny_ eller _principle of least privilege_, og brukes for å sikre at eksempelvis en uautorisert bruker ikke har tilgang til noe utover det som er eksplisitt tillatt. 

### Autorisering skal alltid sjekkes
Dersom en bruker forsøker å utføre en handling, skal det alltid sjekkes hvorvidt brukeren faktisk har tilgang til dette. Husk at denne sjekken må skje mot den autoritative kilden for tilganger, og aldri mot data brukeren kan manipulere!

### Brukere skal alltid gis minst mulig tilgang
Også kjent som _principle of least privilege_. En bruker skal aldri få mer tilgang enn det som trengs for å utføre en spesifikk oppgave. Dette gjøres for å redusere angrepsflaten dersom en bruker kompromitteres, slik at skadeomfanget kan begrenses. 

### Rollebasert brukertilgang
Bruk av roller, _role based access control_ (RBAC) er en vanlig tilnærming for å gi brukertilgang. Målet er å definere standardroller for en applikasjon, slik at tilgang kan baseres på disse. En vanlig måte å håndtere dette på eksempelvis med Entra eller AD er å ha 
* aksessgrupper med alle brukerne. Aksessgruppene legges som medlemmer i 
* rollegrupper, som gis tilgangen i applikasjonen. 

Dette gir en bedre oversikt over hvem som har tilgang til hva sammenliknet med brukere som har individuelle tilganger. 

## Veien videre
* [Wikipedia: Authentication](https://en.wikipedia.org/wiki/Authentication)
* [Wikipedia: Authorization](https://en.wikipedia.org/wiki/Authorization)
* [Wikipedia: Single Sign-On](https://en.wikipedia.org/wiki/Single_sign-on)
* [Microsoft: What is SAML](https://www.microsoft.com/en-us/security/business/security-101/what-is-security-assertion-markup-language-saml)
* [Microsoft: What is OAuth?](https://www.microsoft.com/en-us/security/business/security-101/what-is-oauth)
* [Microsoft: What is OIDC?](https://www.microsoft.com/en-us/security/business/security-101/what-is-openid-connect-oidc)
* [Kerberos: The Network Authentication Protocol](https://web.mit.edu/kerberos/)
* [Microsoft: What is LDAP](https://learn.microsoft.com/en-us/previous-versions/windows/desktop/ldap/what-is-ldap)