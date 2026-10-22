---
title: "Business Continuity"
translationKey: bc
weight: 3
description: >
  Dersom en katastrofal hendelse oppstår må vi vite hvem som skal kontaktes, og hvilke krav løsningen og leveranseteamet må forholde seg til. Dette går ikke bare på typiske krav relatert til tilgjengelighet men også hvor lang tid en kan bruke på gjenoppretting, hvordan dette skal gjøres og hva som er akseptabelt tap av data.

---
_Business Continuity Planning_ er _ikke_ utelukkende et IT-teknisk anliggende, men det er vårt ansvar som leverandører av et IT-system å minne kunden på at systemet kan bli utilgjengelig.  
Svaret fra denne planleggingen vil være med å beskrive hvilke krav som stilles til løsningens robusthet og sikkerhetsnivå, og er avgjørende for å finne riktig balanse på kostnad og ytelse hos systemet. 

Her er det viktig å ha et forhold til 
* Kritikaliteten av løsningen
* Eventuelle workarounds dersom løsningen er utilgjengelig
* Konsekvenser eller merarbeid som følge av utilgjengelighet eller når løsningen igjen blir tilgjengelig.

## Kundens forventninger 
Har vi definert en Service Level Agreement (SLA) med kunden som legger føringer på oppetid, tilgjengelighet og liknende, eller har kunden implisitte forventninger til dette? 

Dette må avklares slik at en kjenner konsekvensene nedetid vil få. I mange prosjekter benyttes det skykomponenter der en ikke har kontroll over alle variabler selv. Derfor er det viktig å tidlig i prosjektet avklare de faktiske behovene med kunden. Vi kan sikre redundans på alle fronter dersom kunden ønsker det, men det koster da deretter. 

Dersom en går opp dette i forkant er det lettere å henvise til dokumentasjon og avtaler når løsningen blir utilgjengelig for å unngå dårlig stemning. 

## Backup
Backup er viktig i alle prosjekter. Selv der vi ikke har driftsansvar bør vi kjenne rutinene og begrensningene som gjelder. Har vi ansvaret, har vi også ansvar for at backup faktisk gjennomføres.

To begrep styrer designet:
* Recovery Time Objective (RTO) - akseptabel tid før normaltilstand er gjenopprettet
* Recovery Point Objective (RPO) - akseptabelt datatap, målt i tid

Ut fra disse må dere avklare med kunden hvilke data og systemer som skal sikres og om det kan differensieres, hvor ofte backup tas, og hvor lenge den lagres. Et vanlig oppsett er daglige backups lagret i 30 dager, ukentlige i 6 måneder og månedlige i 2 år.

Hvor backupene ligger betyr like mye som at de finnes. Offline og offsite kopier - på et annet medium og en annen fysisk lokasjon - er det som holder i de virkelig store hendelsene.

{{< tip title="Test!" >}}
Backup som ikke testes har ingen verdi - innfør rutiner for å teste at du kan restore fra backup!
{{< /tip >}}

## Disaster recovery
_Disaster Recovery_ i planleggingsfasen handler om å utvikle et planverk for hva som skal gjøres for å raskest mulig komme tilbake til normaltilstand. Det kan være nyttig å tenkte på dette som "actions on", altså; _"Hvis X inntreffer, så gjør vi Y"_.

### Gjenoppretting

Det vil ikke være nødvendig å gjenskape tjenestene i alle _disaster_ hendelser. Ofte kan man slippe unna med mindre omfattende og manuell feilretting. Uavhengig av dette bør man uansett ha en plan for fullstendig gjenoppretting. Har man det kan man redde seg fra de fleste situasjoner.

* **Fysisk infrastruktur** (brann, flom, jordskjelv): Har dere maskinvare et annet sted dere kan bruke, eller kan dere flytte til et alternativt datasenter?
* **Virtuell infrastruktur**: Kan den gjenskapes korrekt og raskt nok? Dokumenter ressurser, avhengigheter og operasjonelle prosedyrer. Infrastruktur som kode er det viktigste bidraget her.
* **Data og databaser**: Dere må kunne gjenopprette både hele volumer og en enkelt fil. Det er sjelden samme prosedyre, og begge bør være prøvd.
* **Støttesystemer**: Git, CI-pipeline, logging og monitorering er også en del av systemet, og må kunne erstattes eller gjenopprettes ved en hendelse.

### Scenarier som kan diskuteres

* **Slettet eller ødelagt tjeneste**: En ressurs er borte, eller en VM er i en tilstand den ikke kommer ut av. Reparerer dere den, eller bygger dere den opp på nytt fra kode?
* **Utilgjengelig tjeneste**: Her trenger dere en definisjon av hva som er kortvarig nedetid. Deployer dere på nytt, har dere noe kjørende som hot-swap, eller tåler dere en periode uten?
* **Kompromittert identitet eller hemmelighet**: Et passord, et token eller en tjenestebruker er på avveie. Hvordan roterer dere, og hvordan finner dere ut hva som ble gjort med tilgangen?
* **Utløpt eller utilgjengelig hemmelighet**: Et sertifikat går ut, eller nøkkelhvelvet i regionen deres blir utilgjengelig. Varsles dere før utløp, og har dere failover til en annen region?
* **Løsepengevirus**: Data er kryptert av en angriper. Trenger dere delvis eller full gjenoppbygging, og vet dere hvilke backups som er rene?
* **Konfidensialitetsbrudd**: Noen har kommet seg inn i tjenesten dere drifter. Hvem varsles, og hvordan sikrer dere spor før dere rydder opp?
* **Kritisk sårbarhet**: En alvorlig sårbarhet publiseres i noe dere bruker. Hvem bestemmer om tjenesten stenges ned mens dere patcher?

## Veien videre
* [Wikipedia: Disaster Recovery](https://en.wikipedia.org/wiki/IT_disaster_recovery)