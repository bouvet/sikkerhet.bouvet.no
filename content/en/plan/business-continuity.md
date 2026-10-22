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

## Backup
Backup matters in every project. Even where we have no operational responsibility we should know the routines and limitations that apply. Where we do have it, we are also responsible for making sure backups actually run.

Two terms drive the design:
* Recovery Time Objective (RTO) - acceptable time before normal operation is restored
* Recovery Point Objective (RPO) - acceptable data loss, measured in time

From these you must agree with the customer which data and systems to cover and whether that can be differentiated, how often backups are taken, and how long they are kept. A common setup is daily backups kept for 30 days, weekly for 6 months and monthly for 2 years.

Where the backups live matters as much as having them. Offline and offsite copies - on different media and at a different physical location - are what hold up in the genuinely large incidents.

{{< tip title="Test!" >}}
Backups that are not tested have no value - implement a strategy that includes testing restore from backup!
{{< /tip >}}


## Disaster Recovery
_Disaster Recovery_ in the planning phase involves developing a plan for what should be done to return to normal state as quickly as possible. It can be useful to think of this as "actions on," i.e.; _"If X happens, we do Y"_.

### Recovery

It will not be necessary to recreate services in all _disaster_ events. Often, less extensive and manual error correction can suffice. Regardless, one should always have a plan for complete recovery. Having this can save you in most situations.

* **Physical infrastructure** (fire, flood, earthquake): Do you have hardware elsewhere you can use, or can you move to an alternative data center?
* **Virtual infrastructure**: Can it be recreated correctly and quickly enough? Document resources, dependencies and operational procedures. Infrastructure as Code is the single biggest contributor here.
* **Data and databases**: You need to be able to recover both entire volumes and a single file, table, row or column. These are rarely the same procedure, and both should have been rehearsed.
* **Support systems**: Git, CI pipeline, logging and monitoring are part of the system too, and must be replaceable or recoverable in the event of an incident.

### Scenarios to Discuss

* **Deleted or broken service**: A resource is gone, or a VM is in a state it cannot recover from. Do you repair it, or rebuild it from code?
* **Unavailable service**: Here you need a definition of what counts as short-term downtime. Do you redeploy, do you have something running as a hot-swap, or can you manage without it for a period?
* **Compromised identity or secret**: A password, a token or a service user has leaked. How do you rotate it, and how do you find out what was done with the access?
* **Expired or unavailable secret**: A certificate expires, or the key vault in your region becomes unavailable. Are you alerted before expiry, and do you have failover to another region?
* **Ransomware**: Data has been encrypted by an attacker. Do you need a partial or a full rebuild, and do you know which backups are clean?
* **Confidentiality breach**: Someone has gained access to the service you operate. Who is notified, and how do you preserve evidence before you clean up?
* **Critical vulnerability**: A serious vulnerability is published in something you use. Who decides whether to shut the service down while you patch?

## More Information
* [Wikipedia: Disaster Recovery](https://en.wikipedia.org/wiki/IT_disaster_recovery)
