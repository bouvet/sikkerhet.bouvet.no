---
sidebar_position: 6
---

# Kjøremiljø

Informasjon rundt kjøremiljø

- Mating av secrets (KeyVault, miljøvariabler)
- Ingen secrets i kildekode
    - Bruk miljøvariabler
- Principle of least privilege for kjørende prosess
    - SELinux policy
- Unngå flerbruker-miljøer. Isoler VM'er og containere
- Hvem/hva har tilgang?
    - Offboarding
    - Tidsbegrenset tilgang
- Bør secrets ha en begrenset levetid? Etterleves det?
    - Azure KeyVault, AWS Secrets Manager
- Unngå sensitive data utenom produksjonsmiljø
    - Bruk testdata
- Ikke gjenbruk secrets mellom dev-/test-/prod-miljø

---

```mdx-code-block
import WorkInProgress from '../_work_in_progress.mdx'

<WorkInProgress />
```