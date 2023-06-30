---
sidebar_position: 3
---

# Disaster Recovery

_Disaster Recovery_ during the planning phase is all about developing a framework for how to handle the unexpected, so that normal operations can resume as quickly as possible with a minimum of disturbances. The framework can be considered as a list of scenarios with predefined actions, in other words _"if X happens, we do Y"_.

## Goals

Creating a Disaster Recovery results in a lot of considerations. The most important areas for discussion with the product owner or customer is listed below. Please keep in mind that you need to balance the cost vs the benefit, often in relation to the [Business Continuity plan](business-continuity.md) as these can affect each other. 

Everyting is not required in all projects, but using the following items is a good basis for further work. 

- Recovery Time Objective ([RTO](https://en.wikipedia.org/wiki/disaster_recovery#Recovery_Time_Objective))
  - Defines the acceptable time spent to re-establish normal operations after a failure.
- Recovery Point Objective ([RPO](https://en.wikipedia.org/wiki/disaster_recovery#Recovery_Point_Objective))
  - Defines the acceptable time spent re-establishing data after a failure. Note that the RPO can differ between parts of a system. 
- Service Level Agreement ([SLA](https://en.wikipedia.org/wiki/Service-level_agreement))
  - What is the availability of the components the system consists of. This includes eg. cloud services and other external dependencies as well as personnel reaction times.  
  - What is the calculated/total SLA you can offer the customer? This is the sum of everything discovered in the previous point. 

## Roles & Responsibilities

Knowing whom to contact during an emergency is important. Time wasted can be critical for the customer, and can make the recovery process a lot more difficult. Consider the following: 

- Who is the primary point of contact for security incidents? 
  - Which team member should be contacted when security incidents are discovered outside the team? 
  - Who is the point of contact for the customer? 
- Who is responsible for approving the start of recovery efforts?
  - The recovery will often result in the data becoming unavailable for a given period of time, this can have economical consequences. 
  - A system recovery process will often result in the entire system becoming unavailable. This can have similar results. 
- Who can execute the recovery?
  - Are special permissions in the system or underlying components required?  
  - Is external support required for the recovery process? Eg. the helpdesk in order to add required permissions to other systems. 

## Recovery

Doing a full system recovery is not required for all incidents. In many cases this can be avoided by correcting the data manually. Regardless of this a plan for a full system recovery should be defined. 

- Physial infrastructure (fire, floods, earthquakes, etc.)
  - Do we have backup servers in a differen location we can utilize? 
  - Can the existing servers be moved to a different data center? 
- Virtual infrastructure
  - Can the deployed infrastructure be duplicated quickly enough? 
  - Document resources, dependencies and operation procedures in a [runbook](../07_drifte/08_runbook.md)
  - Infrastructure as Code (IaC) will be very useful for such situations. 
- Data and databases
  - Total / bulk restore: How can large amounts of data be restored?
  - Individual files: How can you restore a single file?
  - For more information, read [backup](../07_drifte/07_storage.md)
- Supporting systems
  - Remember that supporting systems can play a large role in the total picture. These must also be possible to replace or restore during incidents. 
  - Examples of these can be: Git, CI-pipelines, logging and monitoring

## Points for discussion

- Deleted services: How can you restore a deleted service?
- Corrupted services: Should a VM or other services experiencing issues be repaired or restored? 
- Unavailability: What happens if the services become unavailable? Are hot-swap instances required, can you deploy a new instance or are a short downtime acceptable? If the latter, the terms short and/or temporary should be defined.
- Compromised security or identity: How do you handle the situation if user accounts or passwords are compomised? 
- Password expiry: How do you resume normal operations if password, certificates or accounts expire. 
- Unavailable secrets: If you use a vault to store secrets such as passwords and certificates; how do you handle vault unavailability? Can you deploy and restore the data in a different region, or do you already have an existing failover? 
- Malware: How can normal operations resume after a malware attack? Does the system have to be completely rebuilt, or is it enough to redeploy some components and/or data. 
- Loss of confidentiality: How do you handle unauthorized access or data leaks?
- Rogue admin: Is there a single user with access to delete the whole subscription? How can you mitigate this? 
- Critical vulnerabilities: How are critical vulnerabilities handled and what is the threshold for shutting down a service? Having a predefined flowchart or decision tree can be a useful tool for such situations. 