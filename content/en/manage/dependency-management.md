---
title: "Dependency Management"
weight: 4
translationKey: depsmgmt
description: >
  The status of the dependencies we have will change over time, and it is inevitable that vulnerabilities will be discovered that we must mitigate. This job can be as simple as updating to a new version, but may also require more significant changes to the application.
---

When the team is in maintenance mode, most of the issues mentioned in the article on [Software Supply Chain]({{< ref "develop/software-supply-chain.md" >}}) still apply. You will encounter situations where:
* A critical vulnerability is discovered in a package you use
* Packages are deprecated and replaced with something new that is not directly compatible with the old
* Developers behind packages stop maintaining them
* Malicious actors take over a package and use it to spread malware

....and certainly other scenarios that result in you needing to do _something_. To ensure that packages hitting one or more of the points above are addressed, tools like Sonatype and others offer the ability to monitor various stages of the lifecycle, with the option to alert you when vulnerabilities or other events affecting quality occur.

## Internal Components Operated by the Team
Dependency management is not only about packages from external ecosystems. Many teams also operate internal components such as application servers, integration services, containers, or virtual machines. These should be included in the same maintenance routines as the rest of the solution.

### Updates and Support
Internal components should be kept up to date through a planned patch routine. Follow vendor release notes and assess what must be upgraded now versus what can be scheduled later. Components that are no longer supported should be phased out.

### Security Controls Around Components
Components must be part of the overall security design. The team should maintain an overview of network exposure, identities/roles, and internal and external access paths. Apply a "deny by default" approach and only allow what is explicitly needed.

### Logging and Monitoring
Internal components must be monitored in the same way as other services. Logs should be trustworthy, protected against tampering, and included in incident handling routines. See also [Logging and Monitoring]({{< ref "manage/logging-monitoring.md" >}}).

## More Information
* [Sonatype: State of the software supply chain](https://www.sonatype.com/state-of-the-software-supply-chain/introduction)
* [Wikipedia: Source Composition Analysis](https://en.wikipedia.org/wiki/Software_composition_analysis)
* [Example of CDN attack: Polyfill supply chain attack hits 100K+ sites](https://sansec.io/research/polyfill-supply-chain-attack)
* [Example of compromised library: xz-Utils](https://arstechnica.com/security/2024/04/what-we-know-about-the-xz-utils-backdoor-that-almost-infected-the-world/)
