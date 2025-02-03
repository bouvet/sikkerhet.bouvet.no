---
title: "Preparedness"
weight: 5
translationKey: preparedness
description: >
  An untested backup is worthless, and the same applies to all disaster recovery plans unless they are tested. The team must verify backups and plans regularly so that everyone knows what needs to happen.
---
If the team has done everything right so far, you have a [disaster recovery plan](plan/business-continuity) that tells you what needs to be done to restore infrastructure, applications, and data to return to normal operations.

The reasons for needing to restore can be many and vary greatly in scope. Who hasn't run a ```delete from <table> where x = 'something'``` with missing or incorrect parameters, or dropped the wrong table from a database? Or deleted a server or app service from a prod environment by mistake (_I was just trying to fix something quickly..._). In such cases, recovery can be quick if you know what went wrong, but in other and more complex cases, such as involving unknown software errors or problems with a cloud service provider, it can be more complicated.

For the plans to have real value, they must be tested in practice. In a perfect world, the plans should be so detailed that recovery is possible even if [the entire team gets hit by the bus](https://en.wikipedia.org/wiki/Bus_factor) or otherwise becomes unavailable. In practice, this is often difficult to achieve, but the team should aim to create a good recipe for how a recovery can occur under given conditions and then test this regularly in an alternative environment.

An example recipe for the solution outlined in the [article on system diagrams](design/system-diagrams-and-drawings/) could be as follows. The premise of the plan below is that we have source code and pipelines available in, for example, Azure DevOps, but the application and resources have mysteriously disappeared from Azure:

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

## More Information
* [Nasjonal Sikkerhetsmyndighet: Forbered virksomheten på håndtering av hendelser (in Norwegian)](https://nsm.no/regelverk-og-hjelp/rad-og-anbefalinger/grunnprinsipper-for-ikt-sikkerhet/handtere-og-gjenopprette/forbered-virksomheten-pa-handtering-av-hendelser/)
