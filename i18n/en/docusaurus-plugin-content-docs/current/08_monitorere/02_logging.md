---
sidebar_position: 2
---

# Logging

import WorkInProgress from '../_work_in_progress.mdx'

<WorkInProgress />

Information related to logging

```mdx-code-block
import Tools from './_monitoring_tools.mdx'

<Tools />
```

- Use a standardized log format which can be consumed by aggregation tools
    - See [OWASPs recommendations](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html#event-attributes)
    - Use the logs; they are not just for reacting after an incident
    - Consider adding alarms on certain metrics, such as a large number of failed login attempts
- Logg all exceptions and errors
- Centralize the logs and ensure backups are in place.
    - You cannot trust logs stored on a compromized resource!
    - GDPR; know what information to log and what to avoid
- Log system logins
    - Both successful and failed logins
- Log all attempts on accessing information with different classifications than a user has access to
- Log important events in the system
    - Configuration changes
    - User changes
    - Creations, Updates and Deletions
    - Check the business requirements and perform a risk assessment
- Ensure you log unexpected traffic. 

:::caution Note

- The logs must contain enough information to investigate an incident.
    - Timestamps
    - Event description
    - Severity of errors
    - User
    - Any other relevant information
    
:::
