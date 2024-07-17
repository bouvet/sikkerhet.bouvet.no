---
sidebar_position: 1
title: Verifiser design
---

# Verifiser designet
:::tip Kort oppsummert
Når vi utvikler en løsning bør vi alltid validere at løsningen er i henhold til designet. Dersom den avviker må vi enten korrigere løsningen eller oppdatere designet.
:::

Når vi lager et [design](../02_designe/02_systemskisser.md) for en ny løsning hender det at det er detaljer vi ikke kjenner, eller at det oppstår uventede komplikasjoner underveis i implementeringen. Dette kan resultere i at designet vi opprinnelig laget avviker fra den ferdige løsningen. 

Dokumentasjonen er viktig for å forstå hvordan en løsning er satt opp og hvordan den fungerer, spesielt om det oppstår en hendelse som krever redeployment eller disaster recovery. For å sikre at gapet mellom dokumentasjon og ferdig produkt ikke er for stort bør vi derfor alltid validere designet i etterkant. 

# Hva bør vi sjekke? 
Noe av det viktigste er alt rundt som ikke nødvendigvis kommer i kodeform. Hvilke ressurser vi bruker, nettverksoppsett og brannmuråpninger er grunnleggende, men vi bør også se på IAM og hvilke tilganger som er gitt til ressurser og applikasjon. Dersom det er elementer i designet som ikke er implementert bør dette fjernes, dersom vi har implementert elementer som ikke er i designet må designet enten oppdateres eller elementene fjernes fra løsningen. 

# Hvordan kan vi sjekke?
Dette avhenger veldig av form og farge på prosjektet, men i mange tilfeller vil IT-organisasjonen hos kunden (for prosjekter hostet hos kunde) kunne hjelpe. Dersom løsningen kjører hos Bouvet vil helt sikkert Intern IT & Sikkerhet kunne være behjelpelige på å sjekke ting som nettverkskonfigurasjoner og liknende, eventuelt peke deg i riktig retning. Det er mye du kan gjøre selv også, men sjekk med Intern IT & Sikkerhet før du installerer verktøy og kjører scans eller liknende. 

# Veien videre
* [Wikipedia: Secure by design](https://en.wikipedia.org/wiki/Secure_by_design)
* [CISA: Secure by design](https://www.cisa.gov/securebydesign)