---
title: "Bruk av kunstig intelligens"
weight: 4
translationKey: ai
description: >
  Bruken av kunstig intelligens (KI) har eksplodert de siste årene, og teknologien har kommet så langt at den kan være et nyttig verktøy for å brainstorme løsninger, skrive,feilsøke eller vurdere kode. Men hva betyr dette for sikkerheten?
---
 
Denne siden handler om bruk av KI i utviklingsløpet, ikke generell bruk av KI-løsninger. Målet er å bruke KI som et produktivitetsverktøy uten å miste kontroll på sikkerhet, kvalitet og etterprøvbarhet.

{{< caution title="Bruk av KI-verktøy" >}}
Husk at Bouvet og de fleste kunder har retningslinjer for bruk av KI som __skal__ følges. Det er __ikke__ lov å ta KI-verktøy i bruk uten eksplisitt godkjenning fra Bouvet eller kunde.
{{< /caution >}}

## Hva har vi lov til å bruke
På Bouvet-utstyr kan vi kun bruke KI-verktøy som er eksplisitt tillatt i [Bouvets KI-policy](https://ai-policy.bouvet.no/). På kundens utstyr kan vi kun bruke verktøy kunden har godkjent.

Bakgrunnen er enkel: KI-verktøy behandler ofte sensitiv informasjon og kan utføre handlinger som påvirker kodebase, bygg og leveranser.

Selv om vi __kan__ bruke et verktøy teknisk, betyr det ikke at vi __skal__ bruke det. Hvis et nytt verktøy kan gi nytte i prosjektet, opprett en BSD-sak for vurdering.

## Praktiske råd for trygg KI-bruk i utvikling
For å få verdi av KI i utvikling uten å øke risiko unødig, bør teamet ha noen enkle, felles arbeidsregler. Disse bør brukes i daglig arbeid, ikke bare som policy på papir.

### Dette bør vi gjøre

* bruk KI på avgrensede oppgaver med tydelig mål og ferdig definert rammeverk
* behandle KI-bidrag som kode fra tredjepart: review, test og verifiser før merge
* dokumenter KI-bruk der det er relevant for sporbarhet og revisjon
* bruk minst mulig data i prompt (dataminimering), og del kun det som trengs for oppgaven
* begrens tilganger for KI-verktøy til minste nødvendige nivå

### Dette bør vi unngå

* lim inn hemmeligheter, persondata eller kundeinformasjon i prompt
* la KI ta arkitektur- eller sikkerhetsbeslutninger uten menneskelig vurdering
* slå av review- eller testkrav fordi koden ser riktig ut ved første øyekast
* gi verktøy bred repo-, cloud- eller prod-tilgang uten tydelig behov og godkjenning
* la KI merge, deploye eller rotere hemmeligheter uten eksplisitt menneskelig godkjenning

Målet er ikke å bremse utviklingen, men å bruke KI på en måte som er trygg, forutsigbar og etterprøvbar.

{{< caution title="Kjøring av KI-generert kode" >}}
Kode og script foreslått av KI skal alltid gjennomgås før kjøring på utviklingsmaskin. Vær spesielt oppmerksom på kommandoer som laster ned innhold, endrer filrettigheter, starter bakgrunnsprosesser eller skriver til systemområder.
{{< /caution >}}

## Prompting i praksis
Gode prompt-rutiner reduserer risiko og øker kvaliteten. Et nyttig prinsipp er at prompten skal være konkret nok til å gi et godt svar, men begrenset nok til at du beholder kontroll på data og resultat.

### Dette bør vi be om

* beskriv krav og rammer først (språk, rammeverk, sikkerhetskrav)
* be om små, vurderbare endringer fremfor store omskrivninger
* be om eksplisitte antagelser, avgrensninger og usikkerhet
* be om testforslag sammen med kodeforslag
* be KI forklare sikkerhetskonsekvenser av foreslått løsning
* be om alternativer med fordeler og ulemper når løsningen påvirker sikkerhet eller drift

### Dette bør vi styre unna

* prompt som inneholder hemmeligheter, tokens eller kundedata
* prompt som ber KI om å omgå policy, logging eller sikkerhetskontroller
* prompt som gir KI åpne fullmakter til å "fikse alt" i hele kodebasen
* prompt som ber KI gjøre endringer direkte i produksjonsnære miljø uten review
* prompt som blander flere urelaterte oppgaver slik at resultatet blir vanskelig å kvalitetssikre

Med mindre det er eksplisitt godkjent, skal KI-verktøy ikke få tilgang til data utover det som trengs for oppgaven.

Sjekk at repoet ikke inneholder datafiler, hemmeligheter eller annen sensitiv informasjon. Bruk [`.gitignore`]({{< ref "utvikle/git.md" >}}) og nøkkelhvelv for å redusere risiko for lekkasje.

## KI-spesifikke trusler i utviklingsløpet
Når KI brukes i utvikling, oppstår trusler som ikke alltid dekkes av tradisjonelle kontroller:

* prompt injection i kode, dokumentasjon eller issues som påvirker agentens oppførsel
* dataeksfiltrering via prompt, logger, plugins eller integrasjoner
* hallusinasjoner som introduserer falske API-er eller usikre mønstre
* forgiftet kontekst fra kompromitterte avhengigheter eller ondsinnede kodeeksempler
* overdreven tillit til autonom kjøring uten menneskelig kontroll

Disse truslene må håndteres med tekniske barrierer, tydelige prosesser og aktiv oppfølging.

## Agentisk utvikling, instruksjonsfiler og guardrails
Agentiske verktøy kan analysere kodebase, foreslå endringer, opprette pull requests og i noen tilfeller utføre handlinger automatisk. Dette krever strengere styring enn vanlig kodeassistanse.

{{< caution title="Lekkasje av sensitive data" >}}
Noen KI-verktøy kan commite og pushe kode automatisk. Sikre at sensitiv informasjon som passord, sertifikater og data ikke kommer på avveie.
{{< /caution >}}

For team som vil komme raskt i gang med tryggere agentisk utvikling, finnes det et internt Bouvet-repo med eksempler og mønstre: [bouvet-ai-harness](https://github.com/Bouvet-AI/bouvet-ai-harness). Repoet tilbyr et sett med repoartefakter og arbeidsformer som gjør KI-assistert utvikling mer konsistent, effektiv og målbart, og kan brukes som et praktisk utgangspunkt for instruksjonsfiler, arbeidsflyt og målbare kvalitetskriterier.

Anbefalte guardrails:

* bruk instruksjonsfiler som avgrenser hva agenten kan gjøre og ikke gjøre
* hold instruksjoner konkrete, testbare og prosjektspesifikke
* begrens tillatelser (least privilege) for repo, CI/CD og skytilganger
* krev menneskelig review før merge og deploy
* blokker automatiske endringer i sikkerhetskritiske filer uten eksplisitt godkjenning
* logg agentens handlinger slik at bidrag er sporbare og etterprøvbare

For team som bruker instruksjonsfiler aktivt, bør disse behandles som en sikkerhetskontroll på linje med policy i CI/CD.

## Kvalitetssikring før merge
KI-bidrag skal ikke til produksjon uten full kvalitetssikring. Minimum bør være på plass:

* kodegjennomgang av utvikler som forstår endringen
* relevante tester, inkludert sikkerhetstester der det er aktuelt
* kontroll av avhengigheter og lisenskrav
* kontroll av at hemmeligheter ikke er introdusert
* vurdering av om endringen påvirker trusselmodell eller sikkerhetskrav

# Veien videre
* [OpenSSF: Security-Focused Guide for AI Code Assistant Instructions](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions)
* [GitHub Copilot Trust Center](https://copilot.github.trust.page/faq)
* [Content exclusion for GitHub Copilot](https://docs.github.com/en/copilot/concepts/context/content-exclusion)
* [Rules Files for Safer Vibe Coding](https://www.wiz.io/blog/safer-vibe-coding-rules-files)
* [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
* [Internt repo: bouvet-ai-harness](https://github.com/Bouvet-AI/bouvet-ai-harness)

