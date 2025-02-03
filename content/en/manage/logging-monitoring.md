---
title: "Logging and Monitoring"
weight: 3
translationKey: logging
description: >
  When a solution is in operation, logging is one of the most important tools we have. Collecting information is critical to gaining insight into what is happening with the solution and responding to events, but only if we monitor it.
---

Regardless of where a solution is deployed, we should ensure that it is monitored. Even if it is only available on the intranet with only internal users working from approved devices over VPN, logging information is important if one of these is compromised. A typical DevOps team will collect some information to help debug the application's functionality, but we also need other information to assess the security context around it.

{{< caution title="Remember" >}}
Regardless of the need, remember that privacy applies to logs as well! Do not collect more information than you need, and logs must be deletable after a given period.
{{< /caution >}}

The goal of logging has three primary purposes:
* Intrusion detection - We must be able to detect if someone is attacking the system
* Investigation basis - We must have enough information to understand what happened, how it happened, and who did it
* Satisfy customer or external requirements, such as from authorities

## What Should We Log?
What we log will vary greatly depending on who the customer is, the risk and threat landscape they operate in, and their needs for log information. In some cases, the customer will have its own security organization, typically a Security Operations Center (SOC), responsible for monitoring networks and applications. They will then have requirements for what and how to log, but if this does not exist, we must define our own requirements to have a starting point.

Below are some points that should be an absolute minimum, but the team must understand what is logged, why it is logged, and how this information relates to other requirements such as privacy.

### Authentications and Failed Authentication Attempts
If someone logs into the solution, this should be logged. This is especially important if it occurs from a place a user does not normally log in from, or if it happens with a different browser or client than usually seen.
Failed logins should also be logged so that it is possible to act on them.

Errors during JWT validation or other session-related errors should also be logged so that they can be reviewed afterward.

### Unauthorized Access Attempts and Access Changes
Events where users try to access functionality they are not normally authorized for are important signals that must be captured. This could be as simple as a user getting or testing a URL from a colleague, but it could also be an attacker trying to map or test an application. Regardless of the cause, it is important information that must be preserved - if an incident occurs later, it is important to be able to say something about movement patterns and the like leading up to it.

If the application supports elevating or changing permissions, these are also typical events that need to be logged. Elevation is a mechanism where a user is given additional permissions, but these must be "turned on" before they are available - often with an extra level of authentication such as MFA or similar. Examples of such mechanisms are `sudo` in Linux or `Privileged Identity Management` (PIM) in Azure. When these are activated, it is important that the logs reflect this since errors or weaknesses in these solutions would be critical for the application's security.

### Application Errors, Network Errors, and Similar
If errors occur in the application, these should also be logged. We should never give the user more information than absolutely necessary, but the details should be included in the logs so that they can be monitored or reviewed later.

If the application relates to the network, for example, by monitoring network connections, connections to other resources, or similar, disruptions or outages here should also be logged as they may be important indicators.

### Logging Unexpected Inputs
All applications have inputs that can be described, even free text inputs where the user can enter anything. Inputs that violate validation rules or instances where a user attempts to change information that should not normally be changeable are typical cases that need to be logged.

If the application supports file uploads or similar, deviations from expected files, such as discrepancies between file type and [file signature](https://en.wikipedia.org/wiki/List_of_file_signatures) or unusually large or small files, should be logged.

## How Do We Log?
How we log will also vary from project to project, the platform we run on, and the resources we are allowed to use. An important point to keep in mind when designing the logging solution is that _logs are a target for attacks!_ An attacker who can exploit vulnerabilities and then manipulate the logs can both hide activity and plant false evidence.

All logs we have should be stored in a place where data can be added but not changed afterward. The advantage of using such solutions is that you can collect logs from many different sources, such as cloud resources, network components, and applications, in one place. This can give you insights from multiple dimensions when reviewing an incident, which can be useful in understanding the overall situation.

### Timestamps and Log Format
Being able to determine the sequence of events is incredibly important. We must therefore understand what the different log sources use as the basis for synchronizing clocks internally to be sure that an event on node A is related to another event two seconds later on node B.

It is also important to standardize log formats where possible. Much logging centers around the log message itself, which is typically text-based, but all metadata should be standardized where possible. Define what you need to see and ensure this is available from the various sources.

## More Information
* [OWASP Proactive Controls: C9: Implement Security Logging and Monitoring](https://top10proactive.owasp.org/the-top-10/c9-security-logging-and-monitoring/)
* [OWASP: Application Logging Vocabulary Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html)
* [OWASP: Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)
