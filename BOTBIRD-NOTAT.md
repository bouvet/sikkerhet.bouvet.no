# Fuglen, introdialogen og testharnesset over til sikkerhet.bouvet.no

Dette notatet er skrevet for å gis til Claude i sikkerhet.bouvet.no-repoet.
Det forutsetter at redesignet alt er på plass der (se `REDESIGN-NOTAT.md` og
«Redesign av sikkerhet.bouvet.no.zip»), og beskriver det laget som kom etterpå
på ai.bouvet.no: fuglen som chatknapp, introdialogen med flyturen ned i redet,
og et lokalt testharnesss så alt kan prøves uten Cloudflare.

**Introdialogen skal bare vises når besøket kommer fra en Bouvetmaskin, altså
pålogget Warp.** Dette kravet kom opp for sikkerhet.bouvet.no, men er lagt inn
på ai.bouvet.no også, så det følger med filene. Se «Warp-kravet» – det kan
hende det ikke trengs kode i det hele tatt.

## Hva som skal på plass

| Del | Hva den gjør | Hvem ser den |
|---|---|---|
| Fuglen i redet | Dekor nede til høyre | Alle |
| Fuglen som chatknapp | Transparent trykkflate over fuglen, «Spør meg!»-boble, chatten som snakkeboble | De som slipper gjennom Access |
| Introdialog + flytur | Presenterer fuglen; ved lukking flyr den ned i redet | De som slipper gjennom Access **og** er på Warp – én gang per nettleser |
| Testharnesset | Later som Cloudflare svarer, så alt virker under `hugo serve` | Bare lokalt |

## Forutsetninger – sjekk disse først

1. **Fuglen finnes.** `layouts/partials/botbird.html` og `.botbird`-blokka i
   `assets/scss/_redesign.scss` må være på plass, med `static/img/botbird.png`.
   Geometrien som alt annet er målt mot: redet 170×120 px, fuglen 100 px bred
   på `right: 30px; bottom: 80px`, og `.botbird { display: none }` under 980 px.
   Avviker noe av dette, må tallene i `_spor_bls.scss` justeres tilsvarende.
2. **Chatten finnes.** Hele laget henger på at `/api/chat/me` og `/api/chat/`
   serveres av Cloudflare bak Access. Finnes de ikke på sikkerhet.bouvet.no
   ennå, er det en forutsetning som må avklares med IIT&S før dette gir mening
   – på ai.bouvet.no er `/api/chat/me` et lite endepunkt som svarer
   `{"employee": true}` med `Content-Type: application/json` til de som er
   innenfor, og noe annet til alle andre.
3. **Språk.** ai.bouvet.no er tospråklig, så alle strenger ligger i `i18n/`.
   Er sikkerhet.bouvet.no ettspråklig, kan JSON-blokka i `body-end.html`
   droppes og strengene skrives rett i skriptet – men det koster lite å
   beholde oppsettet.

## Filer å kopiere

Alle stier er relative til repo-roten. Kopier rett over.

- `assets/js/spor-bls.js` – chatknappen, snakkeboblen, introdialogen, flyturen.
- `assets/js/spor-bls-dev.js` – testharnesset. Lastes bare under `hugo serve`.
- `assets/scss/_spor_bls.scss` – stiler for alt over.
- `layouts/_partials/hooks/body-end.html` – JSON-blokka med strengene,
  `hugo.IsServer`-gjerdet rundt harnesset, og selve skript-taggen.
- `i18n/no.toml` / `i18n/en.toml` – nøklene som begynner på `bls_`.

Importer delfila i `assets/scss/_styles_project.scss`, **etter** `redesign`:

```scss
@import "redesign";
@import "spor_bls";
```

Rekkefølgen er ikke kosmetikk: flere regler i `_spor_bls.scss` overstyrer
`.botbird` fra `_redesign.scss` på samme spesifisitet, og taper hvis de kommer
først.

## Tilpasninger per nettsted

| Hva | På ai.bouvet.no | På sikkerhet.bouvet.no |
|---|---|---|
| Navnet på chatten | «Spør BLS» | Skissen bruker «Bouvet botbird» – bytt `bls_navn` og teksten i dialogen |
| Introteksten | Om KI og retningslinjer | Skriv om til sikkerhet; skissens egen ordlyd ligger i `Sikkerhet Bouvet.dc.html` rundt `botbird-intro-title` |
| Klassenavn | `spor-bls-*` | Kan beholdes. Omdøping gir bare støy, og navnet er uansett bare synlig i DOM-en |
| `localStorage`-nøkkel | `spor-bls-intro-sett` | Velg en nøkkel per nettsted, de deler ikke domene uansett |
| Warp-krav | Ja, samme kode | Ja – følger med fila, se under |

## Warp-kravet

Introdialogen skal bare opp når besøket kommer fra en Bouvetmaskin på Warp.
Merk hva dette er og ikke er: det er en **presentasjonsregel**, ikke
tilgangskontroll. Selve chatten er fortsatt beskyttet av Access, og det er den
som er sikkerhetsgrensa. Derfor er det greit at Warp-sjekken skjer i
nettleseren – det verste som skjer om noen jukser, er at de får se en dialog.

Signalet vi har å gå på: **chatten er også styrt av Cloudflare, og eksterne
kommer ikke via Cloudflare i det hele tatt.** «Kom dette besøket via CF?» er
altså i praksis det samme spørsmålet som «er dette en Bouvetmaskin?», og det
er billigere å svare på enn Warp-status i seg selv.

Avklar først hvilket av disse som gjelder – det avgjør om det skal skrives
kode overhodet:

1. **Er nettstedet utilgjengelig utenfra?** Hvis eksterne ikke når
   sikkerhet.bouvet.no i det hele tatt, er kravet alt oppfylt: enhver som
   laster sida er per definisjon på en Bouvetmaskin, og introdialogen trenger
   ingen ekstra sjekk. **Test:** åpne nettstedet fra en mobil på 4G, uten
   Warp. Får du ikke sida, er du ferdig – ikke skriv koden under.
2. **Krever Access-policyen allerede Warp?** Se på policyen for `/api/chat/*`
   i Zero Trust. Har den en `Require`-regel på Gateway/WARP, er kravet oppfylt
   i det øyeblikket `/api/chat/me` svarer ja. Heller ikke da trengs kode.
3. **Ellers** – nettstedet er offentlig, men chatten er avgrenset – trengs et
   eget signal. To måter:

**Alternativ A – `/cdn-cgi/trace` (ingen backend-endring).** Dette ligger
allerede i `spor-bls.js` på ai.bouvet.no, så kopierer du fila, får du det med.
Cloudflare svarer på denne stien på soner de fronter, med blant annet en
`warp=`-linje. At den svarer i det hele tatt er signalet; `warp=`-linja er en
ekstra innstramming der den finnes.

```js
  function paBouvetmaskin() {
    return fetch(TRACE, { cache: 'no-store' })
      .then((res) => (res.ok ? res.text() : null))
      .then((t) => {
        if (t === null) return false;       // ikke via Cloudflare
        const m = t.match(/^warp=(\w+)$/m);
        return m ? m[1] !== 'off' : true;   // ingen warp-linje: CF holder
      })
      .catch(() => false);
  }
```

Den kalles nederst i `mount()`:

```js
    if (!introSett()) {
      paBouvetmaskin().then((bouvet) => {
        if (!bouvet || introSett()) return;
        visIntro(bird, birdImg, open, () => { /* … */ });
      });
    }
```

To detaljer verdt å merke seg: `introSett()` sjekkes på nytt inne i løftet
fordi det har gått en rundtur på nettet i mellomtida, og flagget i
`localStorage` settes bare når dialogen faktisk lukkes – den som er utenfor
Warp i dag, får dialogen første gang de er på.

Viser det seg at punkt 1 eller 2 over gjelder, er denne koden overflødig. Da
kan `paBouvetmaskin()` og `TRACE` strykes og kallet bli et rent
`if (!introSett()) visIntro(…)` igjen. Det er noen få linjer, og det sparer et
nettverkskall per sidelasting.

**Alternativ B – utvid `/api/chat/me`.** Be IIT&S returnere `{"employee":
true, "warp": true}` og les `me.warp` rett i `.then()`-en som alt finnes. Dette
er det ryddigste om noen likevel skal inn i den funksjonen: ett kall i stedet
for to, og svaret er autoritativt i stedet for noe nettleseren spør om selv.

**Verifiser før du stoler på A.** Jeg har ikke kunnet teste `/cdn-cgi/trace`
herfra – dev-containeren har ingen vei ut utenom allowlista i
`.devcontainer/proxy/allowed-domains.txt`, og bouvet.no står ikke der. Kjør
dette fra en Bouvetmaskin, først med Warp på og så med Warp av:

```
curl -s -o /dev/null -w '%{http_code}\n' https://sikkerhet.bouvet.no/cdn-cgi/trace
curl -s https://sikkerhet.bouvet.no/cdn-cgi/trace | grep -E '^(warp|gateway)='
```

Tre utfall:

- **404 eller ingen kontakt uten Warp, 200 med** – perfekt, A virker som den
  står.
- **200 begge veier, men `warp=off` uten Warp** – også greit, `warp=`-linja
  gjør jobben.
- **200 begge veier og ingen `warp=`-linje** – da skiller A ingenting, og
  koden slipper alle gjennom. Bruk B.

Koden feiler ellers i riktig retning: uten svar fra trace vises dialogen
aldri. Men «feiler lukket» er ikke det samme som «virker» – gjør målingen.

## Testharnesset

`/api/chat/me` og `/api/chat/` finnes ikke lokalt, så uten harnesset blir
fuglen aldri en knapp og ingenting av dette kan ses. `spor-bls-dev.js` later
som Cloudflare svarer: den legger seg utenpå `window.fetch`, svarer ja på
proben, og bytter ut chat-iframen med en attrapp via `srcdoc`. Attrappen er
samme origin, så kodestiene som griper inn i rammen – fokus på `#q`, Escape –
blir faktisk kjørt, ikke hoppet over.

Det hele er pakket inn i `hugo.IsServer` i `body-end.html`:

```go-html-template
{{- if hugo.IsServer }}
{{- with resources.Get "js/spor-bls-dev.js" }}
<script src="{{ .RelPermalink }}" defer></script>
{{- end }}
{{- end }}
```

**Bruk `hugo.IsServer`, ikke miljøet.** Preview-bygget kjører `hugo -e dev`
(se `netlify.toml` → `npm run build:preview` → `_hugo-dev`), så en sjekk på
`hugo.Environment` ville lekket harnesset ut på preview-nettstedet.
`hugo.IsServer` er sann bare under `hugo server`, som ingen deploy kjører.
Bekreft med `hugo -e dev -DFE -d /tmp/x && grep -c spor-bls-dev /tmp/x/index.html`
– det skal gi 0, og fila skal ikke engang ligge i `/tmp/x/js/`.

Så er det bare `hugo serve` som før. Bryterne:

| URL | Hva du får |
|---|---|
| `http://localhost:1313/` | Fuglen som chatknapp, med attrapp-chat |
| `?bls=ny` | Glemmer at introen er sett, så den spilles om igjen |
| `?bls=av` | Later som du står utenfor chatgruppa – fuglen er ren dekor |
| `?bls=utenwarp` | Later som maskinen ikke er en Bouvetmaskin – chat, men ingen intro |

Harnesset svarer også på `/cdn-cgi/trace`, og det er ikke pynt: `hugo serve`
gir 404 på den stien, så uten attrappen ville introen aldri vist seg lokalt.
Stryker du Warp-sjekken (se over), stryk denne grenen samtidig.

### Logikktester (valgfritt, men billig)

`botbird-test.mjs` ved siden av dette notatet kjører skriptet i jsdom og
dekker 46 tilfeller: innholdet i dialogen, fokus og tabbefella, Escape, de
utregnede start- og sluttkoordinatene for flyturen, overleveringa til redet,
`localStorage`-flagget, andre besøk, redusert bevegelse, smal skjerm,
Bouvetmaskin-kravet i alle fire varianter (`warp=on`, `warp=off`, ingen
trace-svar, ingen `warp=`-linje) og `/_print/`-sidene uten fugl. Kjøres slik:

```
npm install jsdom --no-save --prefix /tmp/jsdomtest
node botbird-test.mjs
```

Den leser `/workspace/assets/js/spor-bls.js` – rett stien om repoet ligger et
annet sted. jsdom gjør ingen layout, så testen stapper inn `getClientRects`
og `getBoundingClientRect` for hånd; det er derfor den kan sjekke flyturens
tall uten nettleser.

Testene sier ingenting om hvordan det *ser* ut. Flyturen må ses i en
nettleser.

## Rekkefølge som fungerer

1. Kopier `_spor_bls.scss`, legg inn importen, og bygg til en midlertidig
   mappe for å fange Sass-feil tidlig: `hugo -d /tmp/sjekk`.
2. Kopier `spor-bls.js` og `body-end.html`, og legg inn `bls_`-nøklene i
   `i18n/`. Bygg igjen og sjekk at JSON-blokka i `index.html` har riktige,
   **enkelt**-siterte strenger.
3. Kopier `spor-bls-dev.js`. Kjør `hugo serve` og se at fuglen blir en knapp.
4. Bekreft at harnesset ikke er med i bygg (kommandoen under «Testharnesset»).
5. Skriv om tekstene til sikkerhet.bouvet.no.
6. Warp-sjekken til slutt: kjør `curl`-en fra en Bouvetmaskin og avgjør om
   koden skal bli stående, strammes til alternativ B, eller strykes fordi
   punkt 1 eller 2 gjelder.

## Feller

- **`jsonify` blir dobbeltsitert inne i en `<script>`.** `{{ T "x" | jsonify }}`
  i et script-element gir `"\"Spør BLS\""`, fordi Gos `html/template` koder
  verdien en gang til for skriptkonteksten. Bygg hele objektet med `dict` og
  send det gjennom `safeJS`: `{{ $tekst | jsonify | safeJS }}`. `jsonify`
  escaper `<`, så `</script>` i en streng kan ikke bryte ut.
- **Miljø er feil gjerde for dev-kode.** Se «Testharnesset». `hugo.IsServer`.
- **Rekkefølgen på skript-taggene.** `spor-bls-dev.js` må komme før
  `spor-bls.js`. Begge er `defer`, så dokumentrekkefølgen avgjør – harnesset
  må rekke å bytte ut `window.fetch` før proben går.
- **Bruk `getClientRects().length`, ikke `getBoundingClientRect()`.** En
  `display: none`-fugl gir et rektangel fullt av nuller, ikke `null`. Uten
  denne sjekken flyr fuglen til (0,0) på smal skjerm.
- **Flyturen trenger to elementer.** Én `transform` kan bare ha én `easing`.
  Buen kommer av at ytre element flytter seg vannrett og indre loddrett, med
  hver sin kurve – den loddrette med negativt kontrollpunkt, så fuglen løfter
  seg før den stuper. Slår du dem sammen, får du en rett linje.
- **Landinga er en overlevering, ikke en animasjon.** Klassen `botbird--lander`
  setter fuglen der flyturen sluttet med `transition: none`, og fjernes på
  neste frame så den siste biten ned i redet kjøres av den vanlige
  rede-transisjonen. Regelen må stå **etter** hover-reglene i fila: den har
  samme spesifisitet som `.botbird__knapp:hover ~ .botbird__bird`, så en
  musepeker som tilfeldigvis står over fuglen vinner ellers landinga.
- **`localStorage` kan kaste.** I låste nettlesere feiler både lesing og
  skriving. Da kan vi ikke huske at dialogen er lukket, og alternativet til å
  droppe den er å vise den ved *hver* sidelasting. `introSett()` svarer derfor
  «sett» når oppslaget kaster.
- **`npm run serve -- --port 1320` sender ikke porten videre** gjennom de
  nøstede npm-skriptene; Hugo velger en tilfeldig port i stedet. `hugo serve
  --port` virker.

## Akseptansekriterier

- [ ] Uten Access: fuglen er ren dekor, ingen knapp, ingen dialog.
- [ ] Med Access, uten Warp: fuglen er chatknapp, men ingen introdialog.
- [ ] Med Access og Warp, første besøk: dialogen kommer, fuglen mangler i
      redet, og lander der når dialogen lukkes.
- [ ] Andre besøk: ingen dialog, fuglen sitter i redet med én gang.
- [ ] «Still et spørsmål» åpner chatten etter at fuglen har landet.
- [ ] Escape, ×, «Ok, skjønner» og klikk på bakgrunnen lukker og husker.
- [ ] Under 980 px: dialogen kommer, men uten flytur, og den vanlige knappen
      vises i stedet for fuglen.
- [ ] «Reduser bevegelse» slått på: dialogen kommer, ingen flytur.
- [ ] `hugo -e dev -DFE` og `hugo --minify`: null treff på `spor-bls-dev`.
- [ ] Tabulator kommer ikke ut av dialogen mens den er oppe.
