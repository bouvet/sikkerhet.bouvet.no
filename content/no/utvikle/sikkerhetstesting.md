---
title: "Sikkerhetstesting"
weight: 8
translationKey: sectesting
description: >
  På linje med annen elementer assosiert med teamet _kvalitet_ er vi avhengige av å kunne teste for å verifisere at vi har oppnådd målet. Sikkerhetstesting er et viktig ledd i dette, da vi gjennom testingen kan vise at leveransen ikke er sårbar for gitte angrepsmetoder.
---
Sikkerhetstesting bør alltid være et element av alle leveranser. Mange assosierer sikkerhetstesting med penetrasjonstesting, men det er mye mer enn dette. Noen former for testing kan gjøres automatisk som del av CICD, andre er mer manuelle og skjer typisk mot en deployert løsning. 

Før en setter i gang med sikkerhetstesting er det viktig å sette seg inn i hva dette kan gi deg - det finnes ingen enkelttiltak som løser alle sikkerhetsproblemer, og heller ingen enkelt testmetode som avdekker alle svakheter. Sikkerhetstesting er også et av områdene som ofte krever spesifikk kompetanse for at resultatene skal bli gode og/eller tolket korrekt. 

{{< caution title="Advarsel" >}}
Bruk av verktøy som `nmap` og annet som brukes i forbindelse med sikkerhetstesting må **alltid** avklares med eiere av infrastruktur og nettverk, da det er vanskelig å skille vennligsinnet testing fra ondsinnede angrep. Dette gjelder også internt i Bouvet; Intern-IT & Sikkerhet skal alltid være i loopen før du starter en sikkerhetstest! 

Dersom dette ikke tas hensyn til kan det få konsekvenser, både for kundeforholdet men også for tekniske løsninger mot nettleverandør og Microsoft. 
{{< /caution >}}

## Testmiljø
Når en skal bedrive sikkerhetstesting mot et kjørende miljø er det viktig at en alltid avklarer dette godt i forkant. Mange typer testing kan være destruktiv, så dersom [miljøene ikke er godt nok adskilt]({{< ref "designe/segregering.md" >}}) kan en risikere å påvirke andre miljø enn tiltenkt.

En god løsning, spesielt dersom en bruker infrastruktur-som-kode (IAC) er å ha en pipeline som deployer et eget miljø som kan brukes for sikkerhetstesting. Dersom dette designes inn i leveransen fra starten, vil det ofte være enkelt å sette opp miljø som er identiske med produksjonsmiljøet, der en også kan kopiere databaser og eventuelt kjøre anonymiseringsprosesser mot dataene. 

## Statisk kodeanalyse (SAST)
Statisk kodeanalyse er et lavterskelteknikk som analyserer koden med avhengigheter for å finne svakheter. SAST kan gjennomføres helt automatisk, og det finnes mange gode verktøy som kan bygge dette inn i CICD slik at du kan skanne som en del av prosessene her. 

SAST sjekker kun løsningen som lages, den avdekker ingenting rundt konfigurasjon av kjøremiljø, nettverk eller andre omkringliggende avhengigheter. Verktøy som brukes for å gjennomføre SAST er språkspesifikke, så det er viktig å sette seg inn i hvilke verktøy som gir best resultat for språk og eventuelt rammeverk som benyttes. 

## Dynamisk applikasjonssikkerhetstesting (DAST)
I motsetning til SAST er DAST en teknikk der en tester en løsning i kjørende tilstand. Dette er en språkagnostisk testmetode, der en eksempelvis tester en webapplikasjon gjennom å teste frontendløsningen for å finne svakheter. DAST kan automatisers, men må ofte kjøres manuelt for at enkelte typer svakheter skal testes.

DAST vil kun dekke funksjonalitet eksponert i den kjørende løsningen, så dersom en har kode som er en del av løsningen men som ikke er tilgjengelig for DAST-verktøyet vil dette heller ikke kunne testes.

## Sikkerhetstesting av AI-systemer
Løsninger som bruker kunstig intelligens introduserer sikkerhetstestingsbehov som går utover tradisjonell SAST og DAST. AI-systemer må valideres for at de oppfører seg som forventa og at de ikke introduserer nye sårbarhetsvektorer.

### Validering av AI-modeller
AI-modeller skal valideres for:
* **Nøyaktighet og ytelse**: Modellen skal oppfylle definerte kvalitetskrav under forventede bruksforhold
* **Bias og fairness**: Tester for å avdekke om modellen diskriminerer basert på sensitive attributter
* **Robusthet**: Testing av hvordan modellen oppfører seg ved uventet eller adversariell inndata
* **Hallusinasjoner**: Verifisering av at modellen ikke genererer falsk informasjon eller usikre mønstre

Validering av AI-modeller krever ofte domene-spesifikk kompetanse og bør være en del av ansvaret til datalagene og ML-teamet, ikke bare infosikkerhet.

### Sikkerhetstesting av AI-komponenter
I tillegg til modellvalidering må løsningen som helhet testes for:
* **Prompt injection**: Tester for om inndata kan manipulere AI-agenten til å oppføre seg uventet
* **Dataeksfiltrering**: Verifisering av at sensitive opplysninger ikke blir ekstrahert via prompts eller outputs
* **Tillitsgrenser**: Testing av hvordan systemet oppfører seg når AI-assistansen overskrider sine definerte grenser

Disse truslene må håndteres med samme rigor som tradisjonelle applikasjonssikkerhetstester. For prosjekter med KI-komponenter bør teamet bruke [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/) som grunnlag.

## Penetrasjonstesting
En penetrasjonstest går dypere enn SAST og DAST ved å teste systemet som en helhet, inkludert infrastruktur, nettverk og muligens også fysisk sikring. Der DAST primært fokuserer på webapplikasjoner, vil en pentest være mer omfattende og ofte avdekke sårbarheter som bare blir synlige når flere trusler kombineres.

En penetrasjonstest vil alltid ha et avtalt omfang som regulerer hva pentesterne kan gjøre, når de kan gjøre det og hvilke ressurser som kan testes. Det er ikke mulig å bevise at en løsning er sikker, kun at den ikke er sårbar mot gitte angrep. Pentesting er derfor særlig nyttig når løsningen har strenge sikkerhetskrav eller opererer innenfor et avtaleverk som krever uavhengig verifisering.

### Planlegging og omfang
En pentest krever kompetanse og skal ikke gjennomføres på egen hånd uten relevant erfaring. Som team må dere sikre at miljøet som skal testes er tydelig identifisert, og at omfanget er godt definert før testingen starter. Det må være mulig å skille et faktisk angrep fra en avtalt test. Dersom du ser tegn på aktivitet mot et miljø som ikke er en del av testen og dere har [segregert miljøene]({{< ref "designe/segregering.md" >}}), bør dette håndteres som en reell hendelse.

Som en del av planleggingen må dere også avklare kundens rutiner for pentesting. Mange virksomheter har et sikkerhetssenter (SOC) og/eller nettverkssenter (NOC) som overvåker infrastrukturen kontinuerlig. Disse må være informert når testen er varslet, slik at en avtalt test ikke utløser unødvendig eskalering.

I noen tilfeller ønsker kunden en uvarslet test for å se om angrepet oppdages. Det må i så fall være eksplisitt avtalt, siden en pentest i praksis er et simulert angrep.

### Når pentest er aktuelt
I en perfekt verden ville en gjennomført pentest ved alle større endringer, men dette er sjelden praktisk. Hvor ofte testen skal gjennomføres avhenger av kundekrav, regulatoriske føringer og hvor mye risiko løsningen bærer. Dette bør avklares tidlig, ikke først når dere ønsker å bestille en test.

### Oppfølging under og etter test
Dersom testen er varslet i forkant, er det en god anledning til å følge med på logger og monitorering for å se om hendelsene blir fanget opp. Dersom funnene i rapporten kan korreleres med det dere observerer i logger og alarmer, gir det et godt grunnlag for å forbedre deteksjon og varsling.

Etter testen vil teamet normalt motta en rapport som beskriver hva som er testet, hvordan testen ble gjennomført og hvilke funn som ble gjort. Funnene må gjennomgås med produkteier, klassifiseres og legges i backloggen. Noen funn må lukkes raskt, mens andre kan aksepteres eller planlegges senere dersom andre tiltak reduserer risikoen. Sikkerhet er ikke et individuelt ansvar; det er teamets ansvar å følge opp kravene som gjelder for løsningen.

### AI-fokuserte penetrasjonstester
Dersom løsningen inkluderer AI-komponenter, bør pentestingen også dekke:
* Testing av API-sikkerhet rundt AI-modellen
* Endrings- og versjonskontroll av modeller og treningsdata
* Logging og overvåking av AI-systemets oppførsel
* Tilgangskontroll til sensitive modeller og data

For løsninger med AI-komponenter bør pentestingen også vurdere prompt injection, manipulering av kontekst, uautorisert tilgang til modellkall og om modellen kan brukes til å hente ut sensitiv informasjon som systemet ellers ikke ville eksponert.

## Veien videre
* [Wikipedia: Static application security testing](https://en.wikipedia.org/wiki/Static_application_security_testing)
* [Wikipedia: Dynamic application security testing](https://en.wikipedia.org/wiki/Dynamic_application_security_testing)
* [OWASP: Application Security Verification Standard (ASVS)](https://owasp.org/www-project-application-security-verification-standard/)
* [OWASP: Artificial Intelligence Security Verification Standard (AISVS)](https://owasp.org/www-project-artificial-intelligence-security-verification-standard-aisvs-docs/)
* [OWASP: Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
* [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
* [OWASP AI Agent Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html)