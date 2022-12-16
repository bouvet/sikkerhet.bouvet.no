---
sidebar_position: 2
---
# Ansvar & Rutiner
import WorkInProgress from '../_work_in_progress.mdx'

<WorkInProgress />

For å unngå situasjoner hvor ansvaret for enkelte bestanddeler av et system er uklart, er det en fordel å kartlegge ansvarsgrensene. Listen nedenfor er på ingen måte uttømmende og må tilpasses hvert enkelt prosjekt eller leveranse. Hovedmålet her er rett og slett at man har hatt en diskusjon rundt dette og at ansvarsfordeling og rutiner er kjent.


De andre kapitlene på <a href="https://sikkerhet.bouvet.no">https://sikkerhet.bouvet.no</a> dekker alle fasene i en tradisjonell DevSecOps prosess og kan være til inspirasjon for hvilke roller og ansvar man velger å ta inn i denne listen.

:::note Eksempel

 _Kunden er ansvarlig for all infrastruktur som applikasjonen er avhenger av, inkludert virtuelle maskiner, nettverk, lagring, og databaseservere.
Vi er ansvarlig for utvikling av applikasjonen, utrulling, innhold i databaser(m/ migrering), logging og monitorering, patching, og vedlikehold av løsning X._

:::

- Hvilket ansvar har Bouvet?
- Hvilket ansvar har kunde?

- Foreligger det krav til oppetid?
- Foreligger det toleransekrav til tap av data?
  
- Hvilke rutiner for vedlikehold har vi (patching)?
  - OS
  - Installerte pakker
  - Dependencies

:::important Tips
Når en slik oversikt er etablert er det lurt å lagre den i kildekodesystemet sammen med resten av det som produseres i prosjektet. Det øker synligheten og alle vet til enhver tid hvor listen finnes.
:::
