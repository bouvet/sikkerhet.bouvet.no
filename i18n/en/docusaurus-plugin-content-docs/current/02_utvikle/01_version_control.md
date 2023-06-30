---
sidebar_position: 1
---

# Version control

import WorkInProgress from '../_work_in_progress.mdx'

<WorkInProgress />

Information related to using version control software

- Use version control software in the project!
- Ensure that the production branch (typically `main` or `master`) is protected. 
    - Nobody should be able to commit directly to it
    - Define requirements such as every pull request needing two approvals before the merge can go forward
- Where is the source code stored?
    - Version control software shall be used, `git` is the preferred tool in Bouvet. 
- On-premise or in the cloud? 
    - Backup-routines (also applicable for cloud services!)
    - Availability
    - Authentication
- Public or private repository? 
    - To be assessed on a per-project basis
