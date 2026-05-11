---
title: "Preparedness"
weight: 5
translationKey: preparedness
description: >
  The team must be able to restore services and data after destructive events. This article is about practical recovery: plans, exercises, and verification that restoration actually works.
---

An untested backup is worthless. The same applies to a disaster recovery plan that has never been tested.

If the team has done the groundwork well, you have a plan for [disaster recovery]({{< ref "plan/business-continuity.md#disaster-recovery" >}}) that describes how infrastructure, applications, and data are restored to normal operations.

The reasons for restoration vary: human error, delivery errors, vendor failure, unavailable infrastructure, or malicious events. The goal is always the same: to reduce downtime and data loss with predictable processes.

## Minimum Requirements for Recovery

The team should at minimum have control over:
* documented recovery objectives (RTO) and acceptable data loss (RPO)
* verified backups of data, configuration, and dependent artifacts
* a concrete, step-by-step recovery recipe that can be followed by more than one person
* necessary access, roles, and access packages for those who will perform the recovery
* a test environment where the recovery plan can be practiced without affecting production
* clear criteria for when the system can be reopened to users

## Testing and Verification

Recovery must be tested regularly. The team should plan exercises that cover both simple errors and more complex scenarios.

Examples of exercises:
* recovery of a single component (e.g., database or app service)
* full recovery of a critical service in an alternative environment
* validation of the backup chain from backup to verified restore
* exercise where key personnel are not available

After each exercise, you should document what worked, what failed, and what measures need to go on the backlog.

An example recipe for the solution outlined in the [article on system diagrams]({{< ref "design/system-diagrams-and-drawings.md" >}}) could be as follows. The premise of the plan below is that we have source code and pipelines available in, for example, Azure DevOps, and the application and resources have mysteriously disappeared from Azure:

1. Check that new subscriptions are in place in Azure
    * Configure Azure Pipelines to deploy to these
    * Verify that all Entra groups are available
2. Deploy infrastructure as code
3. Configure NSGs and firewalls (if not done as code)
    * Turn off access outside the delivery team to avoid user interference with the restore process
4. Verify that resources have access to the data platform
5. Verify access to the database
6. Restore application and data:
    1. Restore data to the database from the latest backup
    2. Deploy backend
    3. Deploy frontend
7. Verify that the application works
8. Publish PowerBI report
    * Verify that it can read data from the backend
9. Turn on access for end-users so they can use the application again

It is worth mentioning that each of the points may need additional information, with references to access packages or group memberships for the person restoring to gain the necessary access.

## Recovery for AI System Components
If the solution has AI components, the recovery plan must also cover:
* restoration of model artifacts and versions
* restoration of configuration for model routing, prompts, and security boundaries
* restoration of vector indexes/feature stores where used
* verification of model quality after restore (not only that the service responds)
* review of AI-related logs so that incident sequences remain traceable

This supports control areas such as "AI system operation and monitoring" and "AI system recording of event logs" in an operational recovery context.

## More Information
* [Nasjonal Sikkerhetsmyndighet: Forbered virksomheten på håndtering av hendelser (in Norwegian)](https://nsm.no/regelverk-og-hjelp/rad-og-anbefalinger/grunnprinsipper-for-ikt-sikkerhet/handtere-og-gjenopprette/forbered-virksomheten-pa-handtering-av-hendelser/)
* [Nasjonal Sikkerhetsmyndighet: Nasjonalt rammeverk for håndtering av digitale angrep og cyberhendelser (in Norwegian)](https://nsm.no/regelverk-og-hjelp/rapporter/nasjonalt-rammeverk-for-handtering-av-digitale-angrep-og-cyberhendelser)
* [Wikipedia: Disaster recovery](https://en.wikipedia.org/wiki/Disaster_recovery)
