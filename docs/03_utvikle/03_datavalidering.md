---
sidebar_position: 4
title: Datavalidering
---
# Datavalidering fra andre systemer
:::tip Kort oppsummert
Data er en angrepsvektor, du må aldri stole blindt på at disse er trygge uavhengig av kilde!
:::

Dersom du henter data fra andre systemer bør du aldri stole blindt på disse. OWASP Top 10 har hatt ulike former for sårbarheter relatert til kodeinjeksjon på de øverste punktene sine siden den første lista kom i 2004. 

Uavhengig av hvor dataene kommer fra, skal du alltid behandle disse på linje med brukerinput fra et sikkerhetsperspektiv. Sjekk at du får det du forventer, og dersom du henter inn filer må disse skannes for malware før du behandler dem videre. Vurder også behovet for bruk av sandbox-miljø for å prosessere slike filer, slik at skadepotensialet begrenses. 

Sett deg inn i trusselbildet for filtypene som er relevante, eksempelvis er det fullt mulig å embedde malware i et bilde; dersom dette ikke mitigeres vil applikasjonen kunne være sårbar mot denne trusselen. Andre filformater medfører andre typer trusler som krever andre tiltak. 

Vurder også bruk av [Content Security Policies](https://en.wikipedia.org/wiki/Content_Security_Policy) for å unngå at data som hentes fra andre systemer men presenteres til kunden kan resultere i et vellykket XSS-angrep.

