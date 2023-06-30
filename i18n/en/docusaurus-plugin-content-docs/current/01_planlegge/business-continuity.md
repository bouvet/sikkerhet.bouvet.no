---
sidebar_position: 4
---

# Business Continuity Planning

import WorkInProgress from '../_work_in_progress.mdx'

<WorkInProgress />

_Business Continuity Planning_ is _not_ an IT-technical subject! It is our responsibility to make the customer aware, and remind him of the fact that the system can become unavailable. The outcome of this planning will determine the requirements for the product with regards to availability, and is of high importance in order to find the correct balance between which measures to implement and the resulting cost. 

- Business Continuity Disaster Recovery
  - What does the end-user do when the system is down? - To be answered by the end-users along with IT.
  - What does IT-Ops do when the systems are down?
    - Temporary alternatives? 
    - Restoring to normal operations?
- Discuss and consider "Service Level Agreement (ambitions)" (SLA / best effort / ++) (to be defined with the customer)
  - Uptime
  - (Un)Planned downtime
  - Recovery Time Objective (RTO) - Acceptable time spent getting back to normal operations after a failure
  - Recovery Point Objective (RPO) - Acceptable loss of data after a failure
- Resilience/Robustness - How to avoid system failures
