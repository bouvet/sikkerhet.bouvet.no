---
title: "Kodegjennomgang"
weight: 9
translationKey: codereview
description: >
  Kodegjennomgang er at noen andre enn forfatteren ser over en endring før den slippes inn i løsningen. Det er en av de billigste sikkerhetskontrollene vi har, og i motsetning til mange verktøy kan den også stille viktige kontrollspørsmål rundt konsekvensene av endringen i en større sammenheng.
---

De fleste team har allerede kodegjennomgang som et krav: endringer skal inn via pull request, og noen skal godkjenne før de merges. Mange svikter imidlertid på et viktig punkt, og sier lite eller ingenting om hva den som godkjenner faktisk skal se etter. Dersom dette blir etablert praksis, er det fort gjort å ende opp med kodegjennomgang på autopilot; _alle tester er grønne og vi klikker på approve fordi vi ikke har funnet noe tidligere_. 

## Hva skiller en sikkerhetsgjennomgang fra en vanlig kodegjennomgang

En vanlig kodegjennomgang spør typisk: _løser denne endringen oppgaven, og er den til å leve med?_ Spørsmålene handler om lesbarhet, navngiving, struktur, testdekning og om endringen passer inn i resten av kodebasen.

En sikkerhetsgjennomgang stiller et tilleggsspørsmål: _hva kan denne endringen brukes til av noen som vil oss vondt?_ Forskjellen er ikke at det er et eget møte eller en egen prosess — det er de samme øynene på den samme endringen, med et ekstra sett spørsmål i bakhodet.

* **Hva-hvis?** Mange sikkerhetsfeil er fravær: sjekken som mangler, begrensningen ingen tenkte på, feilhåndteringen som ikke ble skrevet. En diff viser tydelig hva som er lagt til, men sier ingenting om hva som burde vært lagt til, eller hvordan noe kan feile uventet.
* **Ikke ta forfatterens antakelser for gitt.** Koden er som regel riktig for det tilfellet forfatteren hadde i hodet. Spørsmålet er hva som skjer med input som er tom, enorm, feil type, feil tegnsett, eller som kommer fra en bruker med en annen rolle enn den forfatteren så for seg.
* **Følg dataene.** Hvor kommer inputen fra, hvor havner den, og hvem har kontroll over den underveis? Sårbarheter oppstår sjelden på én linje, men i avstanden mellom der data kommer inn og der de brukes.

{{< tip title="Merk" >}}
En sikkerhetsgjennomgang erstatter ikke [sikkerhetstesting]({{< relref "utvikle/sikkerhetstesting.md" >}}), og testing erstatter ikke gjennomgangen. De finner ulike typer feil, og begge deler trengs.
{{< /tip >}}

## Endringer som alltid bør ha et ekstra par øyne

Ikke alle endringer bærer samme risiko. En justering av en tekststreng i grensesnittet og en endring i hvem som får lov til å gjøre hva, er ikke i nærheten av å være like farlige. Noen kategorier av endringer er mer komplekse og bærer en annen risiko, og bør derfor ettergås i mer detalj.

* **Autorisering og tilgangskontroll.** Hvem får gjøre hva, og [sjekkes det hver gang]({{< relref "designe/autentisering.md#autorisering" >}}) — eller bare i grensesnittet? Dette er det vanligste alvorlige funnet i bransjen, og ligger på topp i [OWASP Top 10]({{< relref "utvikle/sikkerhetspraksiser.md#gjeldende-punkter-i-owasp-top-10" >}}) som _A01:2025 Broken Access Control_.
* **Kryptografi og hemmeligheter.** Egenskrevet kryptering, utdaterte algoritmer, [nøkler som havner i kode eller logg]({{< relref "utvikle/hemmeligheter.md" >}}), eller tilfeldighet som ikke er tilfeldig nok. Det er nesten alltid riktig å bruke plattformens etablerte biblioteker framfor å finne opp noe selv.
* **Spørringer og annen strengsammensetning.** Bygges spørringer, kommandoer eller stier ved å lime sammen tekst med data utenfra? Parameteriserte spørringer er regelen; strengkonkatenering er unntaket som må begrunnes.
* **Deserialisering og parsing av data utenfra.** Alt som gjør et dokument, en melding eller en fil om til objekter i minnet er et angrepspunkt. Spør hvilke typer som faktisk kan oppstå, og om formatet i det hele tatt trenger å være så fleksibelt.
* **Filhåndtering.** Opplasting, nedlasting og alt som setter sammen filstier. Her ligger både stimanipulering, filtyper som ikke burde vært tillatt, og filer som blir liggende der de ikke skal.
* **Endringer i byggkjeden.** [Nye avhengigheter]({{< relref "utvikle/software-supply-chain.md" >}}), [endringer i pipeline]({{< relref "deploye/cicd.md" >}}), nye actions eller endret konfigurasjon påvirker ofte sikkerheten mer enn selve applikasjonskoden.

Et praktisk grep er å gjøre denne lista eksplisitt i teamet: berører endringen noe av dette, kreves det en gjennomgang av noen som kan området — ikke bare en godkjenning fra den som er ledig.

## En kort sjekkliste for den som gjennomgår

Lista er ment som en huskeliste, ikke et skjema som skal fylles ut:

* Forstår jeg hva endringen faktisk gjør? 
* Hvor kommer data inn i denne endringen, og hvordan valideres de?
* Påvirker dette tilgangsstyringen direkte eller som en bivirkning?
* Er det lagt til nye hemmeligheter, nøkler eller tilganger, og ligger de der de skal?
* Hva skjer når noe feiler, og hva vises for brukeren?
* Har vi nok informasjon i loggen til å se når noe går galt samt finne ut hva i etterkant, og logger vi noe som ikke burde logges?
* Har vi vurdert nye avhengigheter; blir de vedlikeholdt og er de nødvendige?

## Når gjennomgangen blir flaskehalsen

Med KI-assistert utvikling har det blitt svært billig å produsere kode, mens gjennomgang er like dyrt som før. Et team som leverer tre ganger så mange endringer, har ikke tre ganger så mye kapasitet til å gjennomgå dem. 
Det finnes ingen måte å lese seg ut av dette på. Løsningen er å bruke kapasiteten der den gir mest:

* **Differensier på risiko.** Alt trenger en gjennomgang, men ikke alt trenger samme dybde. Kategoriene over går til noen som kan området; resten holder det med et raskt blikk.
* **Hold endringene små.** KI gjør store pull requests nesten gratis, men lesekostnaden er uendret. En gjennomgang av 2000 linjer er ikke en gjennomgang.
* **Flytt det mekaniske til verktøy.** Formatering, kjente mønstre, hemmeligheter på avveie og sårbare avhengigheter skal fanges av [automatiske kontroller]({{< relref "utvikle/sikkerhetstesting.md" >}}) i pipeline. Hvert funn et verktøy tar, er oppmerksomhet frigjort.
* **Krev at forfatteren kan forklare endringen.** Det flytter arbeidet dit det er billigst, og er det mest effektive filteret mot kode ingen egentlig har vurdert.
* **Planlegg for kapasiteten.** Øker produksjonen kraftig, må gjennomgang ha tid satt av. Er ventetid på gjennomgang den dominerende delen av ledetiden, er det prosessen som må fikses — ikke kontrollen som skal fjernes.

## Bruk KI til å effektivisere gjennomgangen

De samme verktøyene som gjør det billig å produsere kode, kan ta en stor del av gjennomgangen. Poenget er å legge kravene inn i verktøyet, ikke å be om en vurdering i etterkant.

### Instruksjoner

Instruksjonsfiler er prosjektets stående ordre til KI-verktøyene. Et krav som skrives ned én gang, gjelder hver eneste endring, i stedet for å måtte fanges opp av en reviewer én endring om gangen. Sikkerhetskravene hører hjemme her, konkrete nok til å etterprøves:

* autorisering sjekkes der handlingen utføres, ikke bare i grensesnittet
* spørringer parameteriseres
* hemmeligheter hentes fra teamets løsning for hemmelighetshåndtering
* data utenfra valideres mot en eksplisitt liste over hva som er gyldig
* feilmeldinger til brukeren inneholder ikke interne detaljer

«Følg beste praksis» betyr like lite for en modell som for et nytt teammedlem. Instruksjonene er [en sikkerhetskontroll på linje med policy i CI/CD]({{< relref "planlegge/ai.md#agentisk-utvikling-instruksjonsfiler-og-guardrails" >}}): de ligger i repoet og endres via pull request. Eksempler og mønstre finnes i [bouvet-ai-harness](https://github.com/Bouvet-AI/bouvet-ai-harness).

### Skills

En skill er en navngitt arbeidsmåte med steg og vurderingskriterier, lagret i repoet og tilgjengelig for alle. Sjekklista over er en naturlig kandidat: som skill kjøres den likt hver gang, uten at noen må huske den.

Gevinsten kommer over tid. Det teamet finner i én gjennomgang, legges inn i instruksjonen eller skillen og fanges automatisk neste gang.

### Første gjennomgang

La modellen ta runden før pull requesten opprettes. Den er billigst, og forfatteren sitter fortsatt med endringen. Modellen er god på avvik fra instruksjonsfilen, manglende validering og sjekker som er glemt ett sted men gjort ti andre — forutsatt at den får samme kontekst som et menneske: hva endringen skal løse og hvilke krav som gjelder.

For endringer med lav risiko kan dette være hele gjennomgangen. Det bør være et valg teamet tar og skriver ned.

### Der mennesket må inn

KI er svakere på det som krever å vite hva løsningen er ment å gjøre: en autorisasjonssjekk som er til stede, men sjekker feil ting, eller en forretningsregel som kan omgås ved å bytte rekkefølge på stegene. [Kvalitetssikring før merge]({{< relref "planlegge/ai.md#kvalitetssikring-før-merge" >}}) krever dessuten at en utvikler har forstått endringen. Godkjenningen er fortsatt menneskets.

## Veien videre
* [OWASP: Code Review Guide](https://owasp.org/www-project-code-review-guide/)
* [OpenSSF: Security-Focused Guide for AI Code Assistant Instructions](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions)
* [Google: Code Review Developer Guide](https://google.github.io/eng-practices/review/)
