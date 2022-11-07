---
sidebar_position: 3
---

# Virtuelle maskiner

Informasjon rundt bruk og sikring av virtuelle maskiner

:::info Merk

Bruk av virtuelle maskiner bør unngås dersom det ikke er strengt nødvendig.

Dersom du kan benytte containere, bør dette prioriteres.

:::

## Kernel-sikkerhetsmoduler (Linux)
En av disse bør konfigureres dersom du skal benytte en virtuell maskin:

- SELinux (*Security-Enhanced Linux*)
- AppArmor

## Sikkerhetsoppdateringer

Sikkerhetsoppdateringer bør automatiseres dersom mulig. Om ikke, lag en rutine på det!

## Programvare

- En gylden regel er å installere færrest mulig OS-pakker. Dette reduserer den potensielle angrepsoverflaten, og begrenser behovet for vedlikehold av utdaterte pakker.

- OS-pakker skal kun installeres fra kilder man stoler på.

## Autentisering

- Bruk en Identity Provider om mulig
    - På denne måten slipper man onboarding og offboarding
- Konfigurer [`fail2ban`](https://www.fail2ban.org/wiki/index.php/Main_Page) eller tilsvarende
- Konfigurer tidsbegrenset tilgang
    - Just-in-Time nettverksåpning

### SSH
- Innlogging via ssh som `root`-bruker skal ikke tillates.
    - `PermitRootLogin no`
- Innlogging med passord skal ikke tillates.
    - `PasswordAuthentication no`
- Slå av X11 forwarding.
    - `X11Forwarding no`

### Monitorering

*Monitorerer vi systemets tilstand?*

- Ressursbruk:
    - CPU
    - Minne
    - Disker

```mdx-code-block
import Tools from '../08_monitorere/_monitoring_tools.mdx'

<Tools />
```

---

```mdx-code-block
import WorkInProgress from '../_work_in_progress.mdx'

<WorkInProgress />
```
