---
sidebar_position: 6
title: Internal Components
---

# Internal Components

:::tip In Short
If the team relies on internal components such as servers, applications, or other assets managed by the team itself, there must be a routine for keeping these updated.
:::

Many development teams do more than just write code. You might have virtual machines in the cloud or on-premise, with applications or services used in the delivery to the customer. You may manage integration solutions for the customer, containers, application servers, and much more.

Do you have a routine for keeping these updated, and are they part of the overall security efforts?

## Important Reminders
### Updates
If you manage servers, services, or other assets within the team, they must be kept up to date. You need to familiarize yourself with the release routines for new versions from the supplier's side so that you can keep everything updated. It's not always desirable to go for the latest version all the time, so it's important to read the release notes or other documentation about the release to understand why it came out and what it solves.

Remember that the software we use should be supported to avoid errors and problems resulting from a component not supporting the latest version of another component.

### Security Practices
All components we use must be part of the overall design, and we must have control over network openings, IAM, and how these are exposed both internally and externally. Without knowledge of this, it is difficult to say what threats we may face and thus also the mitigating measures.

Remember that the security of a solution should never depend on a single measure; therefore, try to isolate components as much as possible. By default, nothing should be allowed - whether it concerns access to resources or network in/out, but explicitly open for what should be permitted.

### Logging, Monitoring, and Incident Handling
Remember that internal components must also be monitored. Even if it is off-the-shelf software, the same measures must be implemented here to ensure that we know what is happening and that the logs are trustworthy and cannot be manipulated, just like everything else we monitor.

# More Information
* 