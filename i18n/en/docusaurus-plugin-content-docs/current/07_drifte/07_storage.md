---
sidebar_position: 7
---

# Data and databases

import WorkInProgress from '../_work_in_progress.mdx'

<WorkInProgress />

Information related to data and databases

- Limit scope
- Use TLS!
- Configure a dedicated firewall
  - Deny-all as default
  - Whitelist as needed
  - Just-in-time access from CI
- Separate user account for web/production runtime
- Limit the access of database users and roles
  - Priciple of least privilege!
- Protect data according to classification!
  - Encrypt in transit and at rest
- Backup procedures

## Backup

Having a proper procedure for how to handle backups is likely to be the most important individual measure you can implement in order to ensure system robustness. Backups should be taken on a regular basis, and depending on your requirements you can do a full backup every once-in-a-while, supplementing this by doing differential backups more frequently. While it is common practice to delete older backups, ensure that you keep some just-in-case. 

A common approach could be to have daily backups for the past few weeks, then weekly backups going several weeks back, and then monthly backups even further back. It all depends on the amount of data and the business requirements. Also remember to store copies of the backups off-site. A proper off-site backup location should be fully independent from the production system and primary backup storage. Having an Azure SQL server backed up to an Azure Storage account is not off-site; what would happen if your subscription is deleted? 

Always keep in mind that a backup is worthless unless you can test it regularly. If do not train on disaster recovery regularly, you cannot trust that the backup is actually complete or working. Implement procedures that allows you to test and recover from backups, and ensure that the team is trained on how to do so. 

Also consider the following items: 
- What granularity is required from the backup? 
  - Daily, by hour, by minute, by transaction? 
  - How far back is this granularity required? 
- How long do you need to store the backups? 
  - Are there any regulations in place specifying this? 
- Backup integrity
  - Test backups regularly
  - Ensure that you keep offline and off-site backups
  - What about deleted content? Are you required to delete this from backups as well? 
- Are there other business requirements to consider? 
  - Cost vs value
  - Are the data unique, or are they gathered from other online sources?


:::caution Test!
Untested backups doesn´t count, and should not be considered as backups. 
:::
