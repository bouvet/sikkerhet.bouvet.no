---
sidebar_position: 7
---

# Data og databaser

import WorkInProgress from '../_work_in_progress.mdx'

<WorkInProgress />

Informasjon rundt data og databaser

- Begrens scope
- Bruk TLS!
- Konfigurer egen brannmur med hviteliste
    - Just-in-Time brannmur fra CI
- Begrens adgang for databasebrukere
    - Principle of least privilege
- Dedikert bruker for web-/kjørebruker
- Beskytt brukerdata som er hemmelige/sensitive
    - Hashing/kryptering av data in transit/at rest
- Backup rutiner

## Backup

Det å ha et solid backupsystem er muligens det viktigste enkelttiltaket man kan ha for å øke robustheten på et system.

En god anbefaling når man designer et backupregime er å følge _grandfather, father, son_ prinsippet. Altså å ha tre "generasjoner" med backup, med ulik oppløsing og tilgjengelighet.

I tillegg bør man ta stilling til disse punktene:

- Hvor mye?
  - Hvilken data og systemer skal være underlagt backupregimet. Kan det differensieres?
- Hvor ofte?
  - Skal vi ta backup 1 gang i uken, hver natt, eller hver time?
- Hvor langt tilbake?
  - Hvor lenge skal vi lagre backupene?

Svarene her vil være et kompromiss mellom kostnad og behov.

Eksempel på en overordnet backup plan:

>
- Grandfather
  - En gang hver måned
  - Lagres _offline_ (ikke tilknyttet internett)
  - Lagres _off-site_ (en annen fysisk lokasjon enn de andre backupene)
  - Beholdes i 2 år
- Father
  - En gang i uken
  - Lagres "kaldt", men online
  - Beholdes i 6 måneder
- Son
  - Hver dag
  - Beholdes 1 måned

:::caution Test!
Backup som ikke testes er nesten like ille som å ikke ha backup!
:::
