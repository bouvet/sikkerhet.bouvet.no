---
title: "Hemmeligheter, nøkler og sertifikater"
weight: 7
translationKey: secrets
description: >
  Alle utviklingsprosjekter har behov for hemmeligheter, nøkler og sertifikater: verdier som gir tilgang, som låser data, eller som beviser hvem en tjeneste er. De må oppbevares trygt, byttes med jevne mellomrom og fornyes før de går ut på dato — og de tre tåler ikke de samme feilene.
---

Hemmeligheter, nøkler og sertifikater er alt som gir tilgang, låser data eller beviser identitet: connection strings, passord, tokens, krypteringsnøkler og sertifikater. For skyløsninger har nøkkelhvelv som Azure Key Vault og tilsvarende blitt standarden, fordi de dekker oppbevaring, tilgangsstyring og rotasjon i én tjeneste.

## Grunnprinsipper for håndtering av hemmeligheter
* Hemmeligheter skal aldri hardkodes eller sjekkes inn i versjonskontroll
* Skann koden, avvis commits med hemmeligheter og roter dem umiddelbart
* Ha oversikt over hvilke hemmeligheter dere har, og hvilke tilganger de gir
* Begrens levetiden — ingen hemmelighet bør leve mer enn et år, passord og nøkler mye kortere
* Gi tilgang ved behov, ikke til alle hele tiden

## Hemmelighet, nøkkel eller sertifikat?
Begrepene brukes om hverandre, men de tåler ikke de samme feilene:

* En **hemmelighet** gir tilgang. Blir den eksponert, bytter du den: den nye verdien virker umiddelbart, og den gamle slutter å virke.
* En **krypteringsnøkkel** låser data. En nøkkel som har kryptert tre år med data kan ikke bare byttes — dere må vite hva som er kryptert med hvilken nøkkel, og enten kryptere på nytt eller beholde den gamle for å lese historikken.
* Et **sertifikat** er en identitet med utløpsdato. Det må fornyes i tide, og trekkes tilbake dersom den private nøkkelen kommer på avveie.

Skillet avgjør hva som skjer den dagen noe må erstattes i hast. Svikt her er _A04:2025 Cryptographic Failures_ på [OWASP Top 10]({{< relref "utvikle/sikkerhetspraksiser.md#gjeldende-punkter-i-owasp-top-10" >}}).

## Nøkkelhåndtering

### Nøkkelens livsløp
* **Generering.** Bruk en kryptografisk sikker tilfeldighetskilde, i tjenesten som skal eie nøkkelen — ikke på en utviklermaskin.
* **Oppbevaring.** Nøkkelen bør ikke forlate nøkkelhvelvet. Be hvelvet utføre operasjonen i stedet for å hente ut nøkkelen.
* **Rotasjon.** Nye data krypteres med ny nøkkel. Gamle nøkler beholdes så lenge det finnes data kryptert med dem.
* **Tilbaketrekking.** En kompromittert nøkkel må kunne deaktiveres raskt, og dere må vite hva som slutter å virke i samme øyeblikk.
* **Destruksjon.** Slettet nøkkel betyr slettede data: effektivt ved sletting av personopplysninger, alvorlig ved uhell.

Hvert steg bør være beskrevet, ikke bare konfigurert: hvem kan utføre det, og logges det?

### Nøkler som krypterer nøkler
Data krypteres med en datanøkkel, som igjen krypteres med en hovednøkkel i et nøkkelhvelv (KMS) eller i maskinvare (HSM). Dette kalles envelope encryption, og gevinsten er at hovednøkkelen kan roteres uten at alle data må krypteres på nytt. Hovednøkkelen forlater aldri hvelvet. Et HSM garanterer i tillegg at nøkkelen bare kan brukes, aldri leses ut — aktuelt når kravene tilsier det, ikke som standardvalg.

### Hvem eier nøklene?
Når kunden eier dataene, er det ikke gitt at vi skal eie nøklene. Avklar hvem som genererer dem, hvem som har tilgang, og hva som skjer ved avtaleslutt. Dette hører hjemme i [ansvarsfordelingen]({{< relref "planlegge/ansvarsfordeling.md" >}}), ikke i en konfigurasjonsfil.

## Sertifikater
Et utløpt sertifikat er en av de vanligste årsakene til nedetid, og regnes sjelden som en sikkerhetssak før det smeller.

* **Utstedelse.** Vit hvem som utsteder sertifikatene, og hvilke som bare er gyldige internt.
* **Fornyelse.** Automatiser der det er mulig. Manuell fornyelse blir glemt.
* **Overvåking.** Varsle i god tid før utløp. Dette bør [monitoreres sammen med annen drift]({{< relref "forvalte/logging-monitorering.md" >}}), ikke ligge som en kalenderpåminnelse hos én person.
* **Tilbaketrekking.** Er den private nøkkelen eksponert, er fornyelse ikke nok.

Utløpte sertifikater og utilgjengelige nøkkelhvelv er også [scenarier for beredskapsplanen]({{< relref "planlegge/business-continuity.md#scenarier-som-kan-diskuteres" >}}).

## Kryptografi og hashing
Kryptografi og hashalgoritmer krever store ressurser og _mye_ kompetanse å bygge riktig. Lag derfor aldri dine egne, uansett hvor sikre de ser ut. Gjør dette i stedet:

* sett deg inn i beste praksis for ditt språk, rammeverk og plattform
* unngå sårbare algoritmer som SHA1, MD5 og DES
* følg gjeldende anbefalinger for nøkkellengder og bruk

## Kryptering i hvile og i transitt
Plattformen krypterer som regel lagring og trafikk som standard, og det dekker den vanligste trusselen: noen som får tak i en disk eller lytter på nettverket. Det løser ikke tilgangsproblemet — plattformkryptering er usynlig for en angriper som allerede har gyldig tilgang. Vurder derfor om:

* særlig sensitive felter bør krypteres i applikasjonen, slik at de er uleselige også for en databaseadministrator
* trafikk mellom interne tjenester krypteres på linje med trafikk utenfra
* backup og eksporterte filer arver krypteringen fra kilden — det gjør de ikke nødvendigvis

## Hemmeligheter og KI-verktøy

### Hemmeligheter i prompt og kontekst
KI-verktøy kopierer gjerne store deler av kodebasen for å forstå konteksten. Ligger det hardkodede hemmeligheter, konfigfiler med ekte verdier eller testdata med passord i repoet, kan disse havne hos KI-tjenesten. Det er ofte et brudd på avtalen med kunden, og verktøyet kan i verste fall forsøke å bruke dem.

{{< caution title="Hovedregel" >}}
Lim aldri hemmeligheter, tokens eller ekte credentials i prompt, selv ikke når du debugger eller spør om hjelp.
{{< /caution >}}

### KI-generert kode som logger hemmeligheter
KI-generert kode følger ikke alltid beste praksis. Sjekk før den kjøres:

* logges eller skrives sensitive data til stdout?
* legges hemmeligheter i cache eller midlertidige filer?
* vises hemmeligheter i feilmeldinger?

### Redusert tilgang og exclusions
Noen KI-verktøy tilbyr content exclusion, slik at mapper eller filtyper utelates fra det verktøyet leser. Bruk det som et ekstra lag, men ikke som eneste barriere.

## Rotasjon etter eksponering
Hemmeligheter som har vært eksponert — i logger, i kildekode, for KI-verktøy eller på annet vis — _skal_ roteres. Det holder ikke å fjerne dem og håpe; anta alltid at en eksponert verdi kan utnyttes. Det samme gjelder nøkler og sertifikater.

{{< caution title="Husk" >}}
Hemmeligheter skal <strong>aldri</strong> sjekkes inn i kildekodesystemet. Uhell kan skje, så om du er uheldig og likevel gjør det må du rotere den slik at den ikke lenger er gyldig. Å slette den fra historikken er ikke godt nok!
{{< /caution >}}

## Veien videre
* [Secrets Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)
* [OWASP Cheat Sheet: Key Management](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)
* [OWASP Cheat Sheet: Cryptographic Storage](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)
* [Azure Key Vault - Quickstart for .NET](https://learn.microsoft.com/en-us/azure/key-vault/secrets/quick-create-net?tabs=azure-cli)
* [GitHub Copilot - Content Exclusion](https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot)
