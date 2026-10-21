# Overføring av redesignet til et Hugo/Docsy-nettsted

Dette notatet følger «Redesign av sikkerhet.bouvet.no.zip» og beskriver hvordan
designet ble lagt inn på ai.bouvet.no, hva som ble valgt underveis, og hvilke
feller som kostet tid. Målet er at neste nettsted kan gjøre det samme på en
brøkdel av tiden. Alt er gjort med SCSS og enkel HTML i Hugo-malene, uten egen
JavaScript.

Raskeste vei: kopier filene i listen under «Filer» fra ai.bouvet.no-repoet, og
gå gjennom «Tilpasninger per nettsted». Les «Feller» før du begynner.

## Hva zip-fila inneholder

- `Sikkerhet Bouvet.dc.html` er selve skissen, en Claude Design-eksport. All
  layout ligger som inline-stiler i HTML-en, og fargesettet for lys modus ligger
  i JavaScript-blokken nederst under `const LIGHT`. Mørk modus er
  standardverdiene i `_ds/.../colors_and_type.css`.
- `_ds/.../colors_and_type.css` har alle tokens: farger, elevasjonsstige,
  rammefarger, typografi. README-en i samme mappe forklarer prinsippene
  (firkantede hjørner overalt, Inter 800 med tett sporing, aksentfarger bare
  med mening).
- `assets/` har hvit Bouvet-logo (PNG), fuglen (`botbird.png`) og illustrasjonen.
- `scraps/` og `uploads/` er skjermbilder av dagens og nye sider. Nyttige som
  fasit, ikke som kilde.

## Valg som ble tatt på ai.bouvet.no

| Spørsmål | Valg | Begrunnelse |
|---|---|---|
| Toppbanner | Navy `#11133C`, hvit logo og tekst | Som skissen. Det grønne banneret ble fjernet. |
| Standardtema | Følger systemet (Docsys «auto») | Skissen starter mørk, men vi lot brukerens system bestemme. |
| Botbird | Bare fuglen i redet, ren dekor | Chatten krever språkmodell og JavaScript. |
| Høyre kolonne | Tom, men beholdt | Plassen er reservert til fuglen. Innholdsfortegnelse og git-lenker er skjult. |
| Sidemeny | Fast bredde 300 px (260 px fra nettbrett) | Bootstraps 2/12-kolonne ble for smal med rullefelt. |
| Forside | Skissens struktur, eksisterende tekst | Hero med knapp og illustrasjon, fliser for seksjonene, to kort. |

Vil dere ha mørk som standard, bytt rekkefølgen på token-blokkene i
`_redesign.scss` slik at `:root` får de mørke verdiene, og la den lyse blokken
komme etterpå.

## Filer

Alle stier er relative til repo-roten. Kopier dem rett over der det passer,
og juster det som står under «Tilpasninger per nettsted».

**Stiler**

- `assets/scss/_redesign.scss` (ny). Tokens for begge temaer, topp, sidemeny,
  innhold, høyre kolonne, bokser, bunn, fugl og forside. Dette er 90 % av jobben.
- `assets/scss/_variables_project.scss`. Palett, `$primary` satt til navy,
  `$enable-rounded: false`, lenkefarger, Inter, og `$ki-header-height: 76px`.
- `assets/scss/_styles_project.scss`. Laster Inter lokalt og importerer
  `redesign` først, deretter nettstedets egne delfiler.

**Maler**

- `layouts/_partials/navbar.html`. Logo, «ai» i fet med understrek foran
  «.bouvet.no», språkvelger, GitHub-ikon, temaveksler, søk. `data-bs-theme="dark"`
  på `nav` så nedtrekksmenyene blir mørke.
- `layouts/_partials/footer.html`. Én navy stripe: copyright, MIT, personvern
  og GitHub-ikon.
- `layouts/_partials/head-css.html`. Fingeravtrykk på CSS også i utvikling.
- `layouts/baseof.html`, `layouts/_default/baseof.html`, `layouts/docs/baseof.html`.
  Tom høyrekolonne og `{{ partial "botbird.html" . }}` før `scripts.html`.
- `layouts/_td-content.html` og `layouts/_default/list.html`. Eyebrow over
  tittelen, pager etter innholdet.
- `layouts/partials/eyebrow.html`, `pager.html`, `botbird.html` (nye).
- `layouts/partials/section-index.html`. Undersider som fliser.
- `layouts/partials/sidebar-tree.html`. Docsys mal med to klasser fjernet,
  se «Feller».
- `layouts/shortcodes/tip.html`, `important.html`, `caution.html`. Ikon,
  versalmerke og tekst. Merket er forfatterens egen `title`; i18n-nøklene
  `note_tip`, `note_important` og `note_caution` brukes bare når `title`
  mangler, slik at boksen aldri legger til et ord forfatteren ikke skrev.

**Innhold og konfig**

- `static/img/bouvet-logo-hvit.png` og `static/img/botbird.png` fra zip-fila.
- `i18n/no.toml` og `i18n/en.toml`. Strenger for pager, fliser, bokser og
  GitHub-lenke.
- `hugo.yaml`: `sidebar_search_disable: true`, `sidebar_menu_foldable: true`
  og riktig `copyright.authors`.
- `content/<språk>/_index.md`. Forsiden skrevet om til klassene `home`,
  `home-hero`, `home-figure`, `home-section`, `home-tiles`, `home-cards`.

## Rekkefølge som fungerte

1. Legg inn bildene og `_redesign.scss`, oppdater variabel- og stilfilen.
   Bygg til en midlertidig mappe for å fange Sass-feil tidlig:
   ```
   hugo -d /tmp/sjekk
   ```
2. Navbar, footer og `head-css.html`. Sjekk at serveren lenker til en CSS-fil
   med hash i navnet.
3. Basismalene: tom høyrekolonne og fuglen.
4. Innholdsmalene: eyebrow, pager, fliser, bokser.
5. Sidemenyen: kopier `sidebar-tree.html` og justeringene i `_redesign.scss`.
6. Forsiden sist, når resten sitter.

## Feller

Disse kostet mest tid. Les dem før du starter.

- **Tokens må lastes etter Bootstrap.** Docsys `main.scss` importerer
  `_variables_project.scss` før Bootstrap. Legges `--bs-body-bg` og de andre
  `[data-bs-theme]`-variablene der, overstyrer Bootstrap dem igjen. Derfor
  ligger de i `_redesign.scss`, som lastes via `_styles_project.scss` til slutt.
- **Lys blokk før mørk blokk.** `:root, [data-bs-theme="light"]` og
  `[data-bs-theme="dark"]` har samme spesifisitet og treffer begge `<html>` i
  mørk modus. Den som står sist vinner, så den mørke må stå sist.
- **Sass tolker `min()` og `max()` selv.** `minmax(min(100%, 380px), 1fr)` gir
  «Incompatible units». Skriv `minmax(#{"min(100%, 380px)"}, 1fr)`.
- **Docsy setter `ps-0` på alle lenker i sidemenyen.** Klassen nuller venstre
  innpadding med `!important`, så innrykk satt på lenkene virker ikke. Fjern
  `ps-0` i `sidebar-tree.html`. Fjern også `pe-md-3` på rotlisten, ellers
  stopper aktiv-markeringen før høyre kant.
- **Docsys sammenslåbare sidemeny rykker inn `<li>`.** Med
  `sidebar_menu_foldable: true` setter temaet `padding-left: 1.5em` på
  `.ul-1 > li`, `.with-child` og `.without-child` for å få plass til sin egen
  pil. Da stopper aktiv-markeringen før venstre kant. Innrykket nulles i
  `_redesign.scss`, Font Awesome-pilen slås av med `content: none`, og vi
  tegner vår egen pil som `mask-image` på `label::after` ved høyre kant.
  Docsy skjuler også avkrysningsboksen med `display: none`, som tar den ut av
  tastaturrekkefølgen; den gjøres i stedet visuelt skjult, men fokuserbar.
- **Nettleseren cacher `/scss/main.css` i utvikling.** Hugo-serveren sender
  ingen cache-regler, så endringer ser ut til å «ikke virke». Fingeravtrykket i
  `head-css.html` løser det. Fram til det er på plass: Ctrl+Shift+R.
- **Dev-server og vanlig bygg deler `public/`.** Bygg alltid til en annen
  mappe mens serveren kjører.
- **Docsys logo er ikke Bouvets.** `assets/icons/logo.svg` fra Docsy er et
  generisk dokumentikon. Bruk PNG-en fra zip-fila.
- **Hugo-rekkefølge i pager.** `.NextInSection` peker til siden *før* i
  leserekkefølge når sidene sorteres på vekt. Forrige er derfor
  `.NextInSection` og neste er `.PrevInSection`.
- **Botbird-redet er `position: fixed` nede til høyre.** Bunnen trenger
  `padding-right` rundt 200 px, og hovedkolonnen bunnpadding, så ingenting
  havner bak redet. Redet skjules under 980 px og ved utskrift.

## Tilpasninger per nettsted

- Navnet i toppen: `<b>ai</b>.bouvet.no` i `navbar.html`. Bytt til
  nettstedets navn, første ledd i fet.
- `github_repo` i `hugo.yaml` styrer GitHub-lenkene i topp og bunn.
- Flisene på forsiden er en vanlig `<ul class="home-tiles">` i
  `content/<språk>/_index.md`. De skrives for hånd, ikke genereres fra
  seksjonene, siden listen også inneholder sider som ikke er seksjoner
  (introduksjonen) og egne lenketekster («Security Champions»).
- Eyebrow-teksten for toppnivå-seksjoner ligger i i18n-nøkkelen
  `eyebrow_section`.
- Har nettstedet egne artikkelstiler med egen mørk palett, bør den legges om
  til navy-stigen (`--bg-2` til `--bg-5`) så den ikke bryter med resten.
- Sidemenyens bredder er `$ki-sidebar-width-md` og `$ki-sidebar-width-xl`
  øverst i sidemeny-delen av `_redesign.scss`.

## Ikke tatt med

Disse delene av skissen krever JavaScript eller en backend og ble bevisst
utelatt: Botbird-chatten, «Skjul alle»-knappen i sidemenyen, aktiv markering i
innholdsfortegnelsen ved rulling, «/» som snarvei til søk, og banneret «The
English version is under development». Ønskes noen av dem, er de egne
oppgaver.
