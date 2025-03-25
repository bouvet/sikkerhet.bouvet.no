---
title: "Systemskisser"
weight: 2
translationKey: diagrams
description: >
  Det er viktig med et godt underlag når vi skal bygge gode løsninger, og skisser og diagrammer som viser oppbygningen av infrastruktur, dataflyt, nettverk og tilgangsstyring er viktige elementer. Uten denne informasjonen er det vanskelig å validere om sluttresultatet matcher intensjonen.
---

Når vi designer en løsning, er det viktig med gode og oversiktlige skisser og diagrammer som viser designet slik at det planlagt. Dette gjøres allerede av mange utviklerteam uten at det nødvendigvis stilles krav til det, men det er likevel greit å nevne her. 

Systemskissene bør gi nok informasjon til at en i etterkant kan 
* Validere at implementasjonen er som designet
* Bruke dem ifm trusselmodellering, pentesting eller liknende
* Brukes av den/de som forvalter løsningen for å få en god oversikt over komponenter og dataflyt
* Brukes av leveranseteamet for onboarding av nye kollegaer eller handover til andre team. 

Selv om det er mye som kan dokumenteres her, fokuserer vi bare på det viktigste her: 
* Overordnet systemskisse med de viktigste logiske komponentene
* Detaljert nettverksskisse med ressurser, tjenester og nettverk
* Dataflytdiagram - viser hvordan data flyter mellom komponenter i løsningen
* IAM-diagram - Viser identiteter, tilganger og roller samt hvor de hentes fra
* Viktige avhengigheter – oversikt over andre systemer, tjenester, ressurser, onprem/cloud

## Eksempler
Under finner du eksempler på punktene listet ovenfor. Diagrammene du produserer trenger ikke å være like, det viktigste er at de inneholder nok informasjon til at de kan brukes for det tiltenkte formålet og at de er forståelige for teamet. 

For enkelt å komme igang med design av diagrammer og skisser kan verktøy som Miro eller Draw.io brukes. Sistnevnte er gratis og tilbyr lagring av tegniner i nettleser, lokalt på maskinen som XML og mye annet. 

{{< tip title="Husk" >}}
Diagrammene trenger ikke å være perfekte, eller inneholde alle tenkelige detaljer. Vurder behovet og jobb med gradvise forbedringer over tid. 
{{< /tip >}}

### Overordnet systemskisse
Den overordnede systemskissen viser de viktigste komponentene, og hvordan disse forholder seg til hverandre. Viktige avhengigheter merkes, slik at det er lett å få et overblikk over systemene.

{{< figure src="../overordnet_systemskisse.png" alt="Overordnet skisse">}}

### Netverksdiagram
Målet med nettverksdiagrammet er å vise topologien, med alle virtuelle nettverk, subnett og ressurser og åpninger mellom disse. Et godt nettverksdiagram viser flyten mellom tjenester og enheter, slik at andre involverte kan danne seg et bilde av hvordan data flyter fra punkt til punkt. 

{{< figure src="../nettverksdiagram.png" alt="Nettverksdiagram">}}

{{< tip title="Husk:" >}}
Nettverksdiagram bør lages for alle miljø, slik at en får nødvendig informasjon på alle ressurser i alle miljø, samt forbindelser mellom disse.  
{{< /tip >}}

### Dataflytdiagram
Dataflytdiagrammet fokuserer primært på datakildene, og viser hvordan data flyter gjennom systemet. En kan også inkludere overordnet informasjon om hvordan data transformeres eller modifiseres, slik at det er enklere å gå opp eventuelle avvik i etterkant. 

{{< figure src="../dataflytdiagram.png" alt="Dataflytdiagram">}}

### IAM-diagram
Et IAM-diagram beskriver hvor brukerne kommer ifra, og hvilke roller som tildeles brukere og eventuelt tjenester eller enheter på de ulike ressursene. 

{{< figure src="../iam.png" alt="IAM-diagram">}}


### Avhengigheter
Dette kan tegnes som et diagram, men kan like gjerne være i form av en enkel liste. Denne oversikten bør beskrive alle direkte avhengigheter for prosjektet, med et kort sammendrag av hvordan den brukes og hvorfor. 

* On-prem databaseserver _production-sql-01_
    * Bruker tre view vedlikeholdt av teamet
    * Data hentes inn via ADF
* Selskapets dataplattform, datalake datalake-somedata-prod01
    * Konsumerer datasett i containeren production-data-container
    * Lineage er synlig i Purview
    * Bruker kun datasett godkjent av dataeier

## Veien videre
* [Verktøy: Miro - Bruk SSO innlogging i Bouvet](https://miro.com/)
* [Verktøy: Draw.io](https://draw.io/)