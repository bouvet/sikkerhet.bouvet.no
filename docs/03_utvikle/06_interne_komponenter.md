---
sidebar_position: 7
title: Interne komponenter
---

# Interne komponenter

:::tip Kort oppsummert
Dersom teamet avhenger av interne komponenter som servere, applikasjoner eller annet som driftes av teamet selv, må en ha en rutine for å holde disse oppdatert.  
:::

Mange utviklingsteam gjør mer enn å skrive kode. Du har gjerne virtuelle maskiner i sky eller on-premise, med applikasjoner eller tjenester som brukes i leveransen hos kunden. Du drifter kanskje integrasjonsløsninger for kunden, containere, applikasjonsservere og mye annet. 

Har dere en rutine for å holde disse oppdatert, og inngår de som en del av det øvrige sikkerhetsarbeidet?

## Viktige huskeregler
### Oppdateringer
Dersom dere drifter servere, tjenester eller andre assets innad i teamet må de holdes oppdatert. Dere må sette dere inn i rutinene for release av nye versjoner fra leverandørens side, slik at dere kan holde alt oppdatert. Det er ikke alltid en ønsker å gå for siste versjon hele tiden, så det er viktig å sette seg inn i release notes eller annen dokumentasjon rundt releasen for å forstå hvorfor den kom, og hva den løser. 

Husk på at software vi bruker bør være supportert slik at vi unngår feil og problemer som følge av at en komponent ikke støtter siste versjon av en annen komponent. 

### Sikkerhetspraksiser
Alle komponenter vi bruker må inngå i det totale designet, og vi må ha kontroll på nettverksåpninger, IAM og hvordan disse er eksponert både internt og eksternt. Uten kjennskap til dette er det vanskelig å si noe om hvilke trusler en kan stå overnfor og dermed også mitigerende tiltak. 

Husk på at sikkerheten i en løsning aldri skal avhenge av ett enkelt tiltak; forsøk derfor å isolere komponenter så mye som mulig. Som standard bør ingenting være lov - enten det gjelder tilgang på ressurser eller nettverk inn/ut, men åpne heller eksplisitt for det som skal tillates. 

### Logging, monitorering og hendelseshåndtering
Husk på at interne komponenter også må monitoreres. Selv om det er hyllevare må samme tiltak gjennomføres her også for å sikre at vi vet hva som skjer og at loggene er til å stole på og ikke kan manipuleres på linje med alt annet vi overvåker. 