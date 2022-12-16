---
sidebar_position: 2
---

# Logging

import WorkInProgress from '../_work_in_progress.mdx'

<WorkInProgress />

Informasjon rundt logging

```mdx-code-block
import Tools from './_monitoring_tools.mdx'

<Tools />
```

- Benytt et standardisert loggformat som kan konsumeres av aggregeringsverktøy
  - Se [OWASP's anbefalinger](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html#event-attributes)
- Logg alle feil
- Sentralisert logg med backup (f.eks. Grafana + Loki)
    - Konfidensialitet av logger
- Logg innlogginger
    - Suksessfulle innlogginger
    - Feilede innlogginger
- Logg alle forsøk på adgang til intern, begrenset, eller konfidensiell informasjon i systemer
    - Basert på en risikovurdering
- Logg viktige hendelser
    - Basert på en risikovurdering
- Flytinformasjon til/fra internasjonale lokasjoner
    - IP-adresser
    - Portnummer
    - Applikasjonstype
    - m.m
- Vurder monitorering med alarmer av logger

:::caution Merk

- Loggene skal inneholde nok informasjon til å kunne gjennomføre en etterforskning av hendelser som leder til en logglinje.
    - Eksempler på logginformasjon inkluderer:
        - Tidspunkt
        - Beskrivelse av hendelsen
        - Hendelsens alvorlighetsgrad (severity)
        - System-ID
    - Det skal være mulig å spore system-kontoer til brukeren som initialiserte forespørselen

:::
