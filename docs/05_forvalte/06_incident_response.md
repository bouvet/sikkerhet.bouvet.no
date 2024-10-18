---
sidebar_position: 6
title: Beredskapsplaner og hendelseshåndtering
slug: /forvalte/hendelseshåndtering
---
import Link from "@docusaurus/Link";


# Beredskapsplaner og hendelseshåndtering
:::tip Kort oppsummert
Når en hendelse først oppstår er det viktig å være forberedt slik at en unngår å kaste bort verdifull tid på aktiviteter som burde vært klart i forkant. Hvem skal varsles, hvem har ansvar og hvem kan hjelpe? 
:::

Mange tenker gjerne på sikkerhetshendelser som målrettede angrep der _noen_ angriper en løsning ved å _hacke_ den. I noen tilfeller er dette gjerne korrekt, men en hendelse kan være mye mer.  

NSM definerer en sikkerhetshendelse som _"En avvikssituasjon hvor det er et potensiale for tap av konfidensialitet, integritet, og/eller tilgjengelighet for informasjon eller IKT-tjenester. En sikkerhetshendelse kan oppstå som følge av et dataangrep, teknisk svikt, eller utilsiktede feilhandlinger."_ Med andre ord kan en hendelse være nesten hva som helst som påvirker konfidensialitet, integritet og tilgjengelighet, og avhengig av konteksten vil ulike kunder ha ulike krav til når vi må rapportere og/eller agere på dette. 

## Forberedelser
Dette er dekket i flere artikler under "<Link to="/planlegge/introduksjon">Planlegge</Link>", men noe av det viktigste du gjør er å dokumentere hvilke krav vi må etterleve og hvilket ansvar vi har innenfor de ulike fasene i tillegg til kontaktpunkter hos kunden. Noen kunder er tett på sikkerhet og vil monitorere og varsle leveranseteam på egenhånd, andre basererer seg på at teamene selv følger med.

[NSM lister en del nyttige punkter](https://nsm.no/regelverk-og-hjelp/rad-og-anbefalinger/grunnprinsipper-for-ikt-sikkerhet/handtere-og-gjenopprette/forbered-virksomheten-pa-handtering-av-hendelser/) en også bør vurdere innad i teamet; flere av disse peker på  organisasjonen som helhet, men det kan være viktig for teamet å være kjent med de ulike tiltakene. 

# Når hendelsen inntreffer
Hendelser kan ta mange ulike former. En hendelse kan være svakheter eller sårbarheter som oppdages i en applikasjon, avhengigheter eller kjøremiljø, men det kan også være angrep - både åpenbare eller mer i det skjulte. 

Dersom dere oppdager, eller har grunn til å tro at en løsning er under angrep må dette varsles til kunden umiddelbart. Det er ikke alltid tilfelle at løsningen som angripes er den som er målet, i mange tilfeller er en løsning bare et springbrett videre til en annen. Derfor er det også viktig å vite hvilke tilganger og nettverksåpninger denne har til andre løsninger, slik at kundens IT-organisasjon kan analysere disse for å se etter tegn på angrep der. 

Om dere kommer over tegn på at en løsning har blitt angrepet eller brukt til et angrep er det også viktig å si ifra, slik at kunden kan sikre informasjon og bevis på dette for videre etterforskning. 

:::caution Husk
Håndtering av, og etterforskning av hendelser er et eget fagfelt. Dersom dere kommer over tegn på at noe kan ha skjedd, _si ifra_ til deres kontaktpunkt og avvent beskjed fra denne _før_ dere gjør noe.
:::

# Veien videre
* [Fortinet: The CIA Triad](https://www.fortinet.com/resources/cyberglossary/cia-triad)
* [Nasjonal Sikkerhetsmyndighet: Forbered virkshomheten på håndtering av hendelser](https://nsm.no/regelverk-og-hjelp/rad-og-anbefalinger/grunnprinsipper-for-ikt-sikkerhet/handtere-og-gjenopprette/forbered-virksomheten-pa-handtering-av-hendelser/)
