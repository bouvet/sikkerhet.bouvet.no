---
title: "Business Continuity"
weight: 3
translationKey: bc
description: >
  If a catastrophic event occurs, we must know who to contact and what requirements the solution and delivery team must adhere to. This not only includes typical availability requirements but also how long recovery can take, how it should be done, and what is an acceptable data loss.
---

_Business Continuity Planning_ is _not_ an IT-technical subject. But it is our responsibility as suppliers of an IT system to remind the customer that the system can become unavailable.
The answer from this planning will help describe the requirements for the solution's robustness and security level, and is crucial for finding the right balance of cost and performance for the system.

Here it is important to consider
* The criticality of the solution
* Possible workarounds if the solution is unavailable
* Consequences or extra work resulting from unavailability or when the solution becomes available again.

## Customer Expectations
Do we have a Service Level Agreement with the customer that regulates uptime, availability, and similar, or does the customer have implicit expectations for this?

This must be clarified so that the team is aware of the consequences of downtime. In many projects, cloud components are used, where not all variables are under one's control. Therefore, it is important early in the project to clarify the actual needs with the customer. We can ensure redundancy on all fronts if the customer wants it, but it will then cost accordingly.

## Incident Management
All customers in Bouvet should have a defined contact point for incidents in Kunder (CRM). If there are other contact points from the team to the customer, such as a security operations center (SOC) or similar, it is also wise to document this so that incidents can be resolved as quickly as possible.

If an incident occurs and the customer or others need to contact the team, the usual practice is for the delivery manager to be the formal contact point in the Bouvet team.

## Backup
Backup is important in all projects. Even if we do not have responsibility for the operation of infrastructure, source code systems, or other tools in many projects, we should be familiar common backup strategies, so that we can design and implement a solution that allows for these. 

If we are responsible for operations, we are also responsible for ensuring that backups are performed. Common terms here are:
* Recovery Time Objective (RTO) - acceptable time to achieve normal state after a failure
* Recovery Point Objective (RPO) - acceptable data loss after a failure (measured in time)

The backup and recovery solution must be designed based on these requirements, and we must ensure that this is maintained. Together with the customer, we must determine:
* How much?
  * Which data and systems should be subject to the backup regime. Can we differentiate between them?
* How often?
  * Should we take backups once a week, every night, or every hour?
* How far back?
  * How long should we store the backups?

A common approach to backup is to run:
* Daily backups - stored for 30 days
* Weekly backups - stored for 6 months
* Monthly backups - stored for 2 years

It is also important to consider where the backups are stored, so that one is best prepared for catastrophic events. This can be solved by having offline and offsite backups, i.e., backups stored on, for example, tape and kept at a different physical location than other backups.

{{< caution title="Test" >}}
Backups that are not tested have no value - implement a strategy that includes testing restore from backup!
{{< /caution >}}


## Disaster Recovery
_Disaster Recovery_ in the planning phase involves developing a plan for what should be done to return to normal state as quickly as possible. It can be useful to think of this as "actions on," i.e.; _"If X happens, we do Y"_.

### Recovery

It will not be necessary to recreate services in all _disaster_ events. Often, less extensive and manual error correction can suffice. Regardless, one should always have a plan for complete recovery. Having this can save you in most situations.

* Physical infrastructure (fire, flood, earthquake, etc.)
  * Do we have infrastructure elsewhere we can use?
  * Can we move to an alternative data center?
* Virtual infrastructure
  * Can infrastructure be recreated correctly and quickly enough?
  * Document resources, dependencies, and operational procedures
  * The use of Infrastructure as Code (IaC) will be a significant factor here
* Data and databases
  * Total / bulk recovery: How do you recover large amounts of data / entire volumes?
  * Individual files: How do you recover a single file, table, row or column?
* Support systems
  * Remember that support systems can play an important role in the overall system. These must also be replaceable or recoverable in the event of incidents
  * Examples: Git, CI pipeline, logging, and monitoring

### Scenarios to Discuss

* Deleted service: How do you restore a service that has been deleted?
* Corrupt service: Do you repair or restore a VM or other services with problems?
* Unavailable service: What happens if the services become unavailable? Here you need the definition of what is temporary / short-term downtime. Should you deploy a new service, do you already have one running as a hot-swap, or is it okay without one for a period?
* Compromised security: How do you handle it when a password has been leaked in some way?
* Expired password: How do you resume operations if a password or certificate has expired?
* Compromised identity / service user: What do you do if a managed identity or a service user has been compromised?
* Unavailable passwords: What do you do if the key vault service in the region you use goes down? Do you have backup and failover in another region?
* Malware: How do you recover the system after a malware attack? Do you need a partial or total rebuild of all services?
* Confidentiality breach: How do you handle someone gaining access to the service(s) you operate?
* Compromised admin: Do you need to plan for what happens if the owner of the subscription deletes your entire Azure subscription?
* Critical vulnerability: What happens when someone discovers a critical vulnerability in your application? It may be wise to have protocols ready for when you need to decide whether to shut down the service.

## More Information
* [Wikipedia: Disaster Recovery](https://en.wikipedia.org/wiki/IT_disaster_recovery)
