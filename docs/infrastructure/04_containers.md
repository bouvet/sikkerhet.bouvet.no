---
sidebar_position: 4
---

# Containere

Informasjon rundt bruk av containere

- Ikke kjør som `root`
- Ingen privilege flagg (capabilities)
- Ikke kjør med `--privileged`
- Ingen unødvendige mounts
- Least privilege for alle filer
    - Kun `+r` (read) tilgang på kildekode
- Oppdater OS-pakker ved bygging
- Hvilket image bygger du på?
    - Troverdig kilde?
    - Typosquatting
    - Dependency confusion
- Hvordan er imaget publisert?
    - Public registry?
- Secrets inn i imaget?
    - Hva kopieres inn ved bygging?
    - Secrets skal inn ved kjøring (miljøvariabler), ikke under bygging
- Vurder å bruke verktøy som f.eks. `snyk` for å skanne Dockerfiles

---

```mdx-code-block
import WorkInProgress from '../_work_in_progress.mdx'

<WorkInProgress />
```