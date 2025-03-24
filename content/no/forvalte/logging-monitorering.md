---
title: "Logging og monitorering"
weight: 3
translationKey: logging
description: >
  Når en løsning er i drift er logging et av de viktigste verktøyene vi har. Innsamling av informasjon er kritisk for å kunne få innblikk i hva som skjer med løsningen og agere på hendelser, men bare om vi monitorerer. 
---

Uavhengig av hvor en løsning deployeres bør vi sikre at den monitoreres. Selv om den eksempelvis _kun_ skal være tilgjengelig på intranettet der det kun finnes interne brukere som jobber fra godkjente enheter over vpn, er det viktig med logging av informasjon dersom en av disse kompromitteres. Et typisk DevOps-team vil samle inn en del informasjon for å hjelpe til med feilsøking av funksjonaliteten i applikasjonen, men vi trenger også en del annen informasjon for å kunne si noe om sikkerhetsbildet rundt den. 

{{< caution title="Husk" >}}
Uavhengig av behov, husk at personvern gjelder for logger også! Ikke samle inn mer informasjon enn det du trenger, og husk på at logger må kunne slettes etter en gitt periode. 
{{< /caution >}}

Målet med loggingen vil ha tre primære hensikter: 
* Inntrengelsesdeteksjon - Vi må være i stand til å kunne oppdage om noen angriper systemet
* Etterforskningsgrunnlag - Vi må ha nok informasjon til å forstå hva som har skjedd, hvordan det skjedde og hvem som gjorde det 
* Tilfredsstille krav fra kunde eller eksterne som eksempelvis myndighetene

## Hva bør vi logge? 
Hva vi logger vil variere veldig ut ifra hvem kunden er, risiko- og trusselbildet denne opererer i og hvilke behov de har for logginformasjon. I noen tilfeller vil kunden ha en egen sikkerhetsorganisasjon, typisk et Security Operations Center (SOC) som er ansvarlig for å monitorere nettverk og applikasjoner. Disse vil da ha krav til hva en logger og hvordan, men dersom dette ikke finnes må vi definere noen egne krav for å ha et utgangspunkt. 

Under finner du noen punkter som bør være et absolutt minimum, men teamet må ha et forhold til hva som logges og hvorfor det logges, og hvordan denne informasjonen forholder seg til andre krav som eksempelvis [personvern]({{< ref "planlegge/data-og-klassifisering.md#personvern" >}}).

### Autentiseringer og mislykkede autentiseringsforsøk
Dersom noen logger seg på løsningen, bør dette logges. Dette er spesielt viktig dersom det skjer fra et sted en bruker normalt ikke logger seg på, eller dersom det skjer med en annen nettleser eller klient enn det man vanligvis ser. 
Mislykkede pålogginger må også logges slik at det er mulig å agere på det. 

Feil under validering av JWT eller andre session-relaterte feil bør også logges slik at dette kan gås opp i etterkant. 

### Manglende autorisering, endring av tilganger
Hendelser der brukere forsøker å få tilgang til funksjonalitet de normalt ikke er autorisert for er viktige signaler som må fanges opp. Dette kan være så enkelt som at en bruker fanger opp eller får en URL fra en kollega som de tester ut selv, men det kan også være en angriper som forsøker å kartlegge eller teste en applikasjon. Uavhengig av årsak er det viktig informasjon som må tas vare på - dersom det senere oppstår en hendelse er det viktig å kunne si noe om bevegelsesmønstre og liknende i forkant av denne. 

Dersom applikasjonen har støtte for elevering av, eller endring av tilganger er dette også typiske ting som må logges. Elevering er en mekanisme der en bruker gis ekstra tilganger, men der disse må "skrus på" før de er tilgjengenlige - gjerne da med et ekstra nivå med autentisering som MFA eller liknende. Eksempler på slike mekanismer er `sudo` i Linux eller `Privileged Identity Management` (PIM) i Azure. Når disse aktiveres er det viktig at loggene reflekterer dette ettersom feil eller svakheter i disse løsningene vil være kritiske for sikkerheten i applikasjonen. 

### Applikasjonsfeil, nettverksfeil og liknende
Dersom det oppstår feil i applikasjonen bør dette også logges. Vi bør aldri gi brukeren mer informasjon enn absolutt nødvendig, men detaljene bør være med i loggene slik at det er mulig å monitorere eller se på dette i etterkant. 

Dersom applikasjonen har et forhold til nettverk, eksempelvis gjennom at den monitorerer nettverksforbindelser, forbindelsen til andre ressurser eller liknende bør forstyrrelser eller utfall her også logges da det kan være viktige indikatorer. 

### Logging av uventede inputs
Alle applikasjoner har inputs som kan beskrives, selv fritekstinput der brukeren kan legge inn hva som helst. Input som bryter valideringsregler eller tilfeller der en bruker forsøker å endre informasjon som normalt ikke skal kunne endres er typiske tilfeller som må logges. 

Dersom applikasjonen støtter filopplasting eller liknende bør avvik fra forventede filer som eksempelvis avvik mellom filtype og [filsignatur](https://en.wikipedia.org/wiki/List_of_file_signatures) eller unormalt store eller små filer logges. 

## Hvordan logger vi? 
Hvordan vi logger vil også variere fra prosjekt til prosjekt, hvilken platform vi kjører på og hvilke ressurser vi har lov til å bruke. Et viktig moment vi må ha i bakhodet når vi designer loggeløsningen er at _loggene er et angrepsmål!_ En angriper som kan utnytte sårbarheter og deretter manipulere loggene kan både skjule aktivitet og plante falske spor. 

Alle loggene vi har bør lagres et sted der data kan legges til men ikke endres i etterkant. Fordelen med å bruke slike løsninger er at du kan samle logger fra mange ulike kilder som eksempelvis skyressurser, nettverkskomponenter og applikasjoner på ett sted. Dette kan gi deg innsikt i flere ulike dimensjoner når du ser på en hendelse som vil kunne være nyttig for å forstå helheten i det som skjer. 

## Tidsstempling og loggeformat
Å kunne fastslå rekkefølgen på hendelser er utrolig viktig. Vi må derfor forstå hva de ulike loggkildene bruker som basis for å synkronisere klokker internt for å vite sikkert at en hendelse som skjedde på node A henger sammen med en annen hendelse to sekunder etter på node B. 

Det er også viktig å standardisere på loggformatene der dette er mulig. Mye logging er sentrert rundt selve loggmeldingen som typisk er tekstbasert, men alt av metadata rundt bør standardiseres der dette er mulig. Definer hva dere trenger å se, og sørg så for at dette er tilgjengelig fra de ulike kildene. 

## Veien videre
* [OWASP Procactive Controls: C9: Implement Security Logging and Monitoring](https://owasp.org/www-project-proactive-controls/v4/en/c9-security-logging-and-monitoring.html)
* [OWASP: Application Logging Vocabulary Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html)
* [OWASP: Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)