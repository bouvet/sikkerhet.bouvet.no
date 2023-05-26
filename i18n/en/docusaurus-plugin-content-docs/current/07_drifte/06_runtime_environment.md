---
sidebar_position: 6
---

# Runtime environment

import WorkInProgress from '../_work_in_progress.mdx'

<WorkInProgress />
Information related to runtime environment

- Using secrets (Keyvault, environment variables)
- No secrets in the source code
    - Use environment variables, keyvaults or similar
- Principle of least privilege
    - SELinux policy
- Avoid multi-user environments. Isolate VMs and containers
- Who has access
    - Offboarding
    - Just-in-time access
- How do you manage secrets?
    - Azure Keyvault, AWS Secrets Manager
    - Limited lifespan on secrets?
- Avoid sensitive data outside production environments
    - Use test data
- Never reuse secrets across environments