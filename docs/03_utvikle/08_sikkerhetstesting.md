---
sidebar_position: 6
title: Sikkerhetstesting
---

# Sikkerhetstesting

:::tip Kort oppsummert
På linje med annen elementer assosiert med teamet _kvalitet_ er vi avhengige av å kunne teste for å verifisere at vi har oppnådd målet. Sikkerhetstesting er et viktig ledd i dette, da vi gjennom testingen kan vise at leveransen ikke er sårbar for gitte angrepsmetoder.
:::

Sikkerhetstesting bør alltid være et element av alle leveranser. Mange assosierer sikkerhetstesting med penetrasjonstesting, men det er mye mer enn dette. Noen former for testing kan gjøres automatisk som del av CICD, andre er mer manuelle og skjer typisk mot en deployert løsning. 

Før en setter i gang med sikkerhetstesting er det viktig å sette seg inn i hva dette kan gi deg - det finnes ingen enkelttiltak som løser alle sikkerhetsproblemer, og heller ingen enkelt testmetode som avdekker alle svakheter. Sikkerhetstesting er også et av områdene som ofte krever spesifikk kompetanse for at resultatene skal bli gode og/eller tolket korrekt. 

:::caution Advarsel
Bruk av verktøy som `nmap` og annet som brukes i forbindelse med sikkerhetstesting må **alltid** avklares med eiere av infrastruktur og nettverk, da det er vanskelig å skille vennligsinnet testing fra ondsinnede angrep. Dette gjelder også internt i Bouvet; Intern-IT & Sikkerhet skal alltid være i loopen før du starter en sikkerhetstest! 

Dersom dette ikke tas hensyn til kan det få konsekvenser, både for kundeforholdet men også for tekniske løsninger mot nettleverandør og Microsoft. 
:::

## Testmiljø
Når en skal bedrive sikkerhetstesting mot et kjørende miljø er det viktig at en alltid avklarer dette godt i forkant. Mange typer testing kan være destruktiv, så dersom [miljøene ikke er godt nok adskilt](../02_designe/03_segregering.md) kan en risikere å påvirke andre miljø enn tiltenkt.

En god løsning, spesielt dersom en bruker infrastruktur-som-kode (IAC) er å ha en pipeline som deployer et eget miljø som kan brukes for sikkerhetstesting. Dersom dette designes inn i leveransen fra starten, vil det ofte være enkelt å sette opp miljø som er identiske med produksjonsmiljøet, der en også kan kopiere databaser og eventuelt kjøre anonymiseringsprosesser mot dataene. 

## Statisk kodeanalyse (SAST)
Statisk kodeanalyse er et lavterskelteknikk som analyserer koden med avhengigheter for å finne svakheter. SAST kan gjennomføres helt automatisk, og det finnes mange gode verktøy som kan bygge dette inn i CICD slik at du kan skanne som en del av prosessene her. 

SAST sjekker kun løsningen som lages, den avdekker ingenting rundt konfigurasjon av kjøremiljø, nettverk eller andre omkringliggende avhengigheter. Verktøy som brukes for å gjennomføre SAST er språkspesifikke, så det er viktig å sette seg inn i hvilke verktøy som gir best resultat for språk og eventuelt rammeverk som benyttes. 

## Dynamisk applikasjonssikkerhetstesting (DAST)
I motsetning til SAST er DAST en teknikk der en tester en løsning i kjørende tilstand. Dette er en språkagnostisk testmetode, der en eksempelvis tester en webapplikasjon gjennom å teste frontendløsningen for å finne svakheter. DAST kan automatisers, men må ofte kjøres manuelt for at enkelte typer svakheter skal testes.

DAST vil kun dekke funksjonalitet eksponert i den kjørende løsningen, så dersom en har kode som er en del av løsningen men som ikke er tilgjengelig for DAST-verktøyet vil dette heller ikke kunne testes. 

# Veien videre
* [Wikipedia: Static application security testing](https://en.wikipedia.org/wiki/Static_application_security_testing)
* [Wikipedia: Dynamic application security testing](https://en.wikipedia.org/wiki/Dynamic_application_security_testing)
* [OWASP: Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)