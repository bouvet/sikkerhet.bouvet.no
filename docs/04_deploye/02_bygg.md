---
sidebar_position: 3
title: Bygging
---

# Bygging 
:::tip Kort oppsummert
Når vi bygger en løsning er det ulike hensyn som må tas. Er det innafor for kunden å bygge i skymiljøer administrert av tredjepart, eller må dette skje i egne miljø styrt av oss elle kunden?  
:::

Bygging er ofte det første steget i prosessen, og gjøres typisk bare en gang per release. Byggmiljøene brukt i en CI/CD prosess, ofte kalt byggagenter kommer ofte i to former: 
* skyleverandørstyrte agenter
* selvstyrte agenter - disse kan hostes både i sky eller on-premise

Med agenter styrt av skyleverandøren brukes standardimages ferdig konfigurert for denne oppgaven. De deployes når du starter en byggeprosess, og inneholder alt av verktøy som trengs for byggingen. Når de er ferdig deployet sjekker de ut kildekoden din, bygger den, lagrer artifakten i et egnet system før instansen stanses og slettes. 

Selvstyrte agenter er mer komplekse da du har ansvar for alt av vedlikehold og konfigurasjon selv. Til gjengjeld har du da dedikerte agenter som kun brukes av teamene eller prosjektene som gis tilgang til disse. 

Selv om det første alternativet somoftest er godt nok, er det viktig å være klar over mulighetene som finnes, og når en bør vurdere disse. Uansett løsning er det viktig å tenke på at byggmiljøet er et veldig sårbart punkt; dersom dette kompromitteres kan en angriper potensielt utføre endringer som påvirker _alt_ som bygges der. 

Dette er spesielt viktig med bruk av [tredjepartspakker](../03_utvikle/05_software_supply_chain.md), og et minimum her bør være at pakker pinnes til spesifikke versjoner og at en aldri henter siste versjon av en pakke automatisk. 

# Veien videre
* [Microsoft: Azure Pipelines](https://learn.microsoft.com/en-us/azure/devops/pipelines/get-started/pipelines-get-started?view=azure-devops)
* [Github: Github Actions](https://docs.github.com/en/actions)
* [OWASP: Top 10 CI/CD Security Risks](https://owasp.org/www-project-top-10-ci-cd-security-risks/)
* [OWASP: CI/CD Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/CI_CD_Security_Cheat_Sheet.html)