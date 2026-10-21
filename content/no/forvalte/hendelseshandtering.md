---
title: "Beredskapsplaner og hendelseshåndtering"
weight: 6
translationKey: ir
description: >
  Teamet må vite hvilke krav som gjelder ved sikkerhetshendelser, hvem som har ansvar, og hvordan varsling og eskalering skal håndteres. Denne artikkelen beskriver styring, etterlevelse og samhandling.
---

Mange tenker på sikkerhetshendelser som målrettede angrep der noen "hacker" en løsning. Det kan stemme, men en hendelse kan også være teknisk svikt, menneskelige feil eller avvik i drift.

NSM definerer en sikkerhetshendelse som _"En avvikssituasjon hvor det er et potensiale for tap av konfidensialitet, integritet, og/eller tilgjengelighet for informasjon eller IKT-tjenester. En sikkerhetshendelse kan oppstå som følge av et dataangrep, teknisk svikt, eller utilsiktede feilhandlinger."_

Med andre ord kan en hendelse være nesten hva som helst som påvirker konfidensialitet, integritet eller tilgjengelighet. Ulike kunder har ulike krav til når dere skal varsle, eskalere og rapportere, og til hvem.

## Hva denne artikkelen dekker
Denne artikkelen handler om overordnet hendelseshåndtering og beredskap:
* hvilke krav dere må etterleve
* hvem som har ansvar for hva
* hvordan varsling og eskalering skal skje
* hvilke logger og hvilken monitorering som må være på plass

Operativ gjenoppretting etter destruktive hendelser er beskrevet i artikkelen om [gjenoppretting]({{< ref "forvalte/preparedness.md" >}}).

## Dette må teamet ha kontroll på
Før en hendelse oppstår må følgende være avklart og dokumentert:
* kontaktpunkter hos kunde, leveranseleder og eventuelt SOC/NOC hos kunden
* tydelige kriterier for når dere skal varsle umiddelbart
* hvem som kan beslutte tiltak, nedetid og kommunikasjon utad
* hvilke krav som gjelder for rapportering, revisjon og avvik
* hvilke avhengigheter løsningen har mot andre systemer

Dette må være kjent i hele teamet, ikke bare hos enkeltpersoner.

## Overvåking og logger
Hendelseshåndtering forutsetter at dere faktisk ser hva som skjer i løsningen. Teamet må sikre at nødvendige logger blir samlet inn, beskyttet og gjort tilgjengelige for analyse.

For løsninger med AI-komponenter betyr dette i tillegg:
* monitorering av modell- og tjenesteatferd over tid
* logging av hendelser knyttet til AI-kall, avvik og tilgang
* varsling ved uventet endring i kvalitet, respons eller adferd
* sporbarhet for beslutninger som påvirker sikkerhet eller etterlevelse

Dette støtter kontrollområder som "AI system operation and monitoring" og "AI system recording of event logs" i ISO 420001.

Se også [Logging og monitorering]({{< ref "forvalte/logging-monitorering.md" >}}) for mer detaljert informasjon rundt temaet.

## Når en hendelse inntreffer
Hendelser kan ta mange former: sårbarheter i applikasjon eller avhengigheter, driftsavvik eller aktive angrep.

Dersom dere oppdager, eller har grunn til å tro at en løsning er under angrep må dette varsles til kunden umiddelbart. Det er ikke alltid tilfelle at løsningen som angripes er den som er målet, i mange tilfeller er en løsning bare et springbrett videre til en annen. Derfor er det også viktig å vite hvilke tilganger og nettverksåpninger denne har til andre løsninger, slik at kundens IT-organisasjon kan analysere disse for å se etter tegn på angrep der. 

Om dere kommer over tegn på at en løsning har blitt angrepet eller brukt til et angrep er det også viktig å si ifra, slik at kunden kan sikre informasjon og bevis på dette for videre etterforskning. 

{{< caution title="Husk" >}}
Håndtering av, og etterforskning av hendelser er et eget fagfelt. Dersom dere kommer over tegn på at noe kan ha skjedd, _si ifra_ til deres kontaktpunkt og avvent beskjed fra denne _før_ dere gjør noe.
{{< /caution >}}


## Veien videre
* [Fortinet: The CIA Triad](https://www.fortinet.com/resources/cyberglossary/cia-triad)
* [Nasjonal Sikkerhetsmyndighet: Forbered virksomheten på håndtering av hendelser](https://nsm.no/regelverk-og-hjelp/rad-og-anbefalinger/grunnprinsipper-for-ikt-sikkerhet/handtere-og-gjenopprette/forbered-virksomheten-pa-handtering-av-hendelser/)
* [Nasjonal Sikkerhetsmyndighet: Nasjonalt rammeverk for håndtering av digitale angrep og cyberhendelser](https://nsm.no/regelverk-og-hjelp/rapporter/nasjonalt-rammeverk-for-handtering-av-digitale-angrep-og-cyberhendelser)
