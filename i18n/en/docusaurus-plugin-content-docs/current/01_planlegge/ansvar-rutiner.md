---
sidebar_position: 2
---
# Routines & Responsibilities 
import WorkInProgress from '../_work_in_progress.mdx'

<WorkInProgress />

To avoid situations where the responsibility for specific components of a system is unclear, it is a big advantage for the project to clarify the scope and responsibilities of the project. The list below is not a complete catch-all checklist, but can be used as a starting point and adapted to specific situations as needed. The primary goal is to raise awarenes related to which responsibilities a team has, so that everyone is aligned. 

The other articles on <a href="https://sikkerhet.bouvet.no">https://sikkerhet.bouvet.no</a> covers all the phases in a traditional DevSecOps process, and be used as a starting point for defining roles and responsibilities for the project team. 

:::note Example

 _The customer is responsible for all infrastructure the project depends on, including virtual machines, networking, storage and database servers. 
We are responsible for implementing the project, migrating existing data into the databases, deployment, logging and monitoring as well as maintenance of the project deliverables._

:::

- What is Bouvet responsible for?
- What is the customer responsible for?

- Does the customer have any uptime requirements?
- Are there any requirements regulating data loss?
  
- What are the current process for maintenance (patching)?
  - OS
  - Installed components
  - Dependencies

:::important Tips
When the overall list of responsibilities is established, consider storing it in the source code repository along with any other project deliverables. This will increase its visilibity within the team, and can result in a higher degree of team ownership. 
:::
