---
sidebar_position: 3
title: Virtuelle maskiner
---

# Virtuelle maskiner

Tradisjonelt har virtuelle maskiner blitt benyttet til det samme som man brukte fysiske maskiner til, den store forskjellen var økt fleksibilitet med administrasjon, sikkerhetskopiering og migrering. En VM kjører et helt vanlig operativsystem, med samme kompleksitet og angrepsflate som en tilsvarende fysisk maskin.

Mange tidligere typiske oppgaver for virtuelle (og fysiske) maskiner er nå tatt over av "serverløse" systemer, slik som containere eller instanser i skyløsninger. Dette abstraherer bort det meste av kompleksiteten med driften, og er i de fleste tilfeller en bedre løsning enn å kjøre samme tjeneste på en VM. Det er likevel fortsatt mange områder der man har behov for et fullt operativsystem. Typisk for disse er at man trenger å kjøre desktop/legacy-applikasjoner og støttetjenester til disse, eller har behov for kraftige maskiner med mye minne, prosessorkraft eller skjermkort.

:::info Merk

Bruk av virtuelle maskiner bør unngås dersom det ikke er strengt nødvendig.

Dersom du kan benytte containere, bør dette prioriteres.

:::

- [Virtuelle maskiner](#virtuelle-maskiner)
  - [Bruksområder](#bruksområder)
    - [Desktopapplikasjoner](#desktopapplikasjoner)
    - [Testmaskiner](#testmaskiner)
    - [Legacy serverløsninger](#legacy-serverløsninger)
  - [Programvare](#programvare)
    - [Sikkerhetsoppdateringer](#sikkerhetsoppdateringer)
    - [Kernel-sikkerhetsmoduler (Linux)](#kernel-sikkerhetsmoduler-linux)
  - [Autentisering og pålogging](#autentisering-og-pålogging),

## Bruksområder

Virtuelle maskiner kan brukes til flere ulike oppgaver. Sikkerhet må ivaretas på flere nivåer, spesielt på [nettverk](../07_drifte/02_network.md)- og operativsystemnivå.

### Desktopapplikasjoner

Det er mulig å tilby brukere både fulle desktopløsninger og enkeltapplikasjoner som kjøres på virtuelle maskiner. Dette lar deg kjøre applikasjoner med høye sikkerhetskrav i et kontrollert miljø i stedet for på brukernes fysiske maskiner. Avhengig av hvilken løsning du velger kan du også sette opp isolerte nettverk / maskiner for de ulike applikasjonene på en måte som er transparent for brukeren. Andre vanlige bruksområder er applikasjoner som krever mye minne, CPU eller skjermkort, eller har behov for gode nettverksforbindelser mot servere i skyløsningen.

### Testmaskiner

Virtuelle maskiner brukes ofte til testing av desktop/legacy-applikasjoner, da de kan slettes og rulles ut på nytt raskt. Dette er løsninger som bør automatiseres med [CI/CD](../03_bygge/ci-cd.md), inkludert inn/utrullering av maskiner i Active Directory eller opprettelse av SSH-nøkler.

### Legacy serverløsninger

Dersom du ønsker å migrere fra on-prem til skyen er det mulig å gjøre en migrering av virtuelle maskiner. Dette kan løses enten ved direkte migrering av den eksisterende VM'en, eller ved at man setter opp nye VM'er med lignende konfigurasjon som det man har gjort. Den siste metoden er å foretrekke fra et sikkerhetsmessig og teknisk perspektiv, da man kan benytte seg av moderne [CI/CD](../03_bygge/ci-cd.md)-løsninger for å rulle ut og vedlikeholde applikasjonene. Man får også en mulighet til å få ryddet opp i eventuelle sikkerhetsproblemer i den gamle konfigurasjonen.

En direkte migrering kan spare penger på kort sikt, men vil over lengre tid sannsynligvis gi mindre utbytte av en skyløsning da den ikke benytter seg av alle mulighetene man har der, og det er en større risiko for at eksisterende sikkerhetsproblemer blir dratt med inn i den nye løsningen. Det kan likevel være en akseptabel løsning der man vet at applikasjonen / tjenesten skal skiftes ut innen kort tid.

## Programvare

- En gylden regel er å installere færrest mulig OS-pakker. Dette reduserer den potensielle angrepsoverflaten, og begrenser behovet for vedlikehold av utdaterte pakker.
- Bruk script til å fjerne moduler og pakker det ikke er behov for
- OS-pakker skal kun installeres fra kilder man stoler på.

### Sikkerhetsoppdateringer

Sikkerhetsoppdateringer bør automatiseres dersom mulig. Dersom du [skrur av](#automatisk-avstengning) virtuelle maskiner når de ikke er i bruk bør disse startes automatisk før utrulling av sikkerhetsoppdateringen startes.

:::info Merk

Manuelle oppdateringer bør unngås. Lag rutiner for manuelle oppdateringer og oppfølging av VM'er som ikke kan oppdateres automatisk.

:::

### Kernel-sikkerhetsmoduler (Linux)

En av disse bør konfigureres dersom du skal benytte Linux på en virtuell maskin:

- SELinux (*Security-Enhanced Linux*)
- AppArmor

## Autentisering og pålogging

Siden VM'er i mange tilfeller brukes til å kjøre applikasjoner som krever brukerinteraksjon må man naturlig nok også logge inn på disse. Tidligere ble dette ofte løst ved å åpne for Remote Desktop (RDP) eller SSH-tilkoblinger direkte til maskinen. Ved å istedenfor bruke en mellom-node ("jump host"), kan man enkelt konfigurere mer avansert autentisering, på ett sentralt sted. Valgene under kan bidra til å beskytte en VM, sammen med et sikkert oppsett av [nettverket](../07_drifte/02_network.md).

- Bruk av en identity provider til å autentisere brukere
- Bruk `Single Sign-On` der det er mulig
- Krev MFA eller sertifikatbasert pålogging fra alle brukere på minst ett trinn av påloggingen
  - Ikke overdriv bruken av MFA
- [Isoler](../07_drifte/02_network.md#isolasjon-av-tjenester) maskinen
  - Bruk `Bastion hosts` eller andre tjenester som lar deg koble til maskinen uten å ha direkte nettverkstilgang
  - Eksponer aldri porter for fjernstyring på internett
  - Konfigurer tidsbegrenset tilgang
  - Bruk `Just-in-Time` nettverksåpning der `Bastion hosts` ikke er mulig
    - Konfigurer standardvalg for Just-in-Time til å kun tillate spesifikke IP-ranger
- Konfigurer [`fail2ban`](https://www.fail2ban.org/wiki/index.php/Main_Page) eller tilsvarende verktøy for blokkere klienter som forsøker å gjette passordet gjentatte ganger.
- Konfigurer SSH-servere til å kun tillate den påloggingstypen du ønsker
  - Skru alltid av muligheten til å logge inn som `root`
  - Deaktiver passordinnlogging hvis sertifikater eller identity provider benyttes til autentisering
  - Slå av X11-forwarding

```mdx-code-block
import Tools from '../08_monitorere/_monitoring_tools.mdx'

<Tools />
```

