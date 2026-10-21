# Velkommen til sikkerhet.bouvet.no

## Hensikten med portalen

Intensjonen med sikkerhet.bouvet.no er å tilby en portal som kan støtte leveranseteam i Bouvet som 
* Ikke har et forhold til sikkerhet idag
* Har mangler eller svakheter i rutiner eller beste praksiser
* Mangler kompetanse eller er usikre på hvor det er best å begynne

Målet er ikke at portalen skal inneholde absolutt alt - den skal primært tilby en oversikt over nyttige tema relatert til AppSec og en enkel SSDLC som hjelper teamene i gang. 
Ingen skal bli fullverdige eksperter av denne portalen alene, den skal gi pekere til eksterne ressurser slik at brukerne kan få et overblikk over et relevant tema, og deretter rutes videre dersom de ønsker å dykke dypere i materien. 

Innholdet er ikke satt i stein - men det skal supportere sjekklista. Dersom et tema ikke er en del av sjekklista bør det ikke være en egen artikkel. Sjekklista skal holdes kompakt, vi skal ikke finne opp vår egen versjon av ASVS. Dersom et leveranseteam trenger en mer detaljert sjekkliste, bruk ASVS eller et annet eksternt verktøy!

### NB - Endringer

Radikale endringer i portalen skal ikke gjøres uten videre. Portalen er en del av SOA for Bouvets ISO 27001 og ISO 42001-sertifiseringer, og styringssystemene lenker allerede direkte til seksjoner i flere sider. Større endringer må samkjøres med oppdatering av intern wikiløsning.

Vær restriktiv med endring av sjekklista. Endringer her kan resultere i at team må endre arbeidsprosesser, så ikke introduser endringer uten at disse er godt gjennomtenkt i forkant. 

## Endringsforslag

Endringer skal spilles inn via Github - vi kan ikke kompensere tid brukt på endringer, så om du ønsker å bidra må du enten gjøre det på egentid, eller spille det inn som et issue først slik at behov og muligheter kan avklares. 
Bruk gjerne slackkanalen `#sikkerhet-bouvet-no` dersom du ønsker å lufte forslag og ikke er komfortabel med github. 

# Design

Portalen bruker Docsy med et eget designlag basert på Bouvets merkevare
(navy, krem og grønn, Inter, firkantede hjørner). Designet er beskrevet i
`REDESIGN-NOTAT.md`.

* `assets/scss/_redesign.scss` – designtokens for lys og mørk modus, og all
  styling av topp, sidemeny, innhold, høyrekolonne, bokser, bunn og forside.
  Tokens må ligge her, ikke i `_variables_project.scss`, fordi Docsy laster
  variabelfila før Bootstrap.
* `assets/scss/_variables_project.scss` – Sass-variabler som må settes før
  Bootstrap (palett, `$primary`, `$enable-rounded: false`, Inter).
* `assets/scss/_site.scss` – styling av HTML som står i innholdsfilene.
* `static/font/Inter/` – Inter lastes lokalt; Docsys Google Fonts-lenke er av.
* `static/img/` – hvit Bouvet-logo, botbird og forsideillustrasjonen.

Fuglen nederst til høyre er dekorasjon for alle, og chatknapp for ansatte som
slipper gjennom Cloudflare Access på `/api/chat/me`. Skriptet ligger i
`assets/js/spor-bls.js`, stilene i `assets/scss/_spor_bls.scss`, og
oppsettet er beskrevet i `BOTBIRD-NOTAT.md`. Under `hugo serve` later
`assets/js/spor-bls-dev.js` som Cloudflare svarer, så chatten og
introdialogen kan prøves lokalt (`?bls=ny` spiller introen om igjen,
`?bls=av` skrur chatten av, `?bls=utenwarp` gir chat uten intro). Fuglen
fjernes ved å ta bort `{{ partial "botbird.html" . }}` i
`layouts/*/baseof.html`.

# Kjøring

Portalen kan kjøres lokalt med `hugo serve`. For publisering bruker vi Cloudflare Pages administrert av IIT&S, dersom du forker og vil kjøre i github pages for testing ligger det en egen action for dette som kan brukes.  