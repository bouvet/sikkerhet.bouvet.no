---
sidebar_position: 2
---

# Nettverk

Informasjon rundt sikring av nettverk

## Eksponering
Hva er eksponert på Internett?
- Dette kan kartlegges med verktøy som f.eks. `nmap`

:::caution Advarsel

Bruk av scannerverktøy som `nmap` må avklares med eiere av infrastruktur

:::

## Isolering

Nettverksisolering (med brannmur) for backend-komponenter til tjeneste

### Brannmur

- Vurder om trafikk fra utenlandske IP-adresser skal være tillatt
- Brannmur bør være konfigurert til å droppe all inngående og utgående trafikk som standard
- Begrens tilgang til tjenester som ikke er relaterte til applikasjonen som leveres:
    - ssh (22)
    - rdp (3389)
    - SMB (445)
- Konfigurer en egen DNS-resolver med hvitelistede domener for oppslag
- Send HTTP-trafikk fra applikasjonen gjennom en HTTP-proxy
    - Konfigurer en hviteliste med domener i proxyen

---

```mdx-code-block
import WorkInProgress from '../_work_in_progress.mdx'

<WorkInProgress />
```