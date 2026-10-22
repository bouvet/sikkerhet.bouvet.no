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

## Use of CDN
Content-delivery-networks to distribute Javascript libraries have been used by many as an easy way to include these in the code without having to include them in the build or deploy process. The idea is good, but you then have a direct dependency on a source you have no control over, which can be [abused to spread malware](https://sansec.io/research/polyfill-supply-chain-attack).

## Internal mirrors and forks of critical dependencies
For especially critical dependencies, it may be appropriate to host artifacts in internal registries or maintain forks of packages, actions, and other build components. This reduces exposure to incidents at third parties, but also increases internal maintenance responsibilities.

This should be used selectively, typically when the dependency is business-critical, has high impact if compromised, and the team actually has the capacity to maintain it over time.

If you choose this approach, you should at minimum have:

* clear ownership for maintenance, patching, and update frequency
* routines for importing and verifying new upstream versions
* traceability on what is an internal copy/fork and what is the original source
* the same requirements for scanning, license control, and review as for other dependencies

## Internal Components Operated by the Team
Dependency management is not only about packages from external ecosystems. Many teams also operate internal components such as application servers, integration services, containers, or virtual machines. These should be included in the same maintenance routines as the rest of the solution.

### Updates and Support
Internal components should be kept up to date through a planned patch routine. Follow vendor release notes and assess what must be upgraded now versus what can be scheduled later. Components that are no longer supported should be phased out.

### Security Controls Around Components
Components must be part of the overall security design. The team should maintain an overview of network exposure, identities/roles, and internal and external access paths. Apply a "deny by default" approach and only allow what is explicitly needed.

### Logging and Monitoring
Internal components must be monitored in the same way as other services. Logs should be trustworthy, protected against tampering, and included in incident handling routines. See also [Logging and Monitoring]({{< ref "manage/logging-monitoring.md" >}}).

## Use of SBOM
Software Bill Of Materials (SBOM) is an approach where we generate an overview of all dependencies with versions from our solutions. This overview should be tied to each release so it is clear which dependencies were actually in use at a given point in time.

For AI solutions, the overview should also include relevant AI artifacts such as models, model digests, tokenizers, and key dataset references where relevant. There are several more or less standardized file formats for SBOM, and they can be archived or included in other solutions to simplify central monitoring.

## More Information
* [Sonatype: State of the software supply chain](https://www.sonatype.com/state-of-the-software-supply-chain/introduction)
* [Wikipedia: Software Composition Analysis](https://en.wikipedia.org/wiki/Software_composition_analysis)
* [Example of CDN attack: Polyfill supply chain attack hits 100K+ sites](https://sansec.io/research/polyfill-supply-chain-attack)
* [Example of compromised library: xz-Utils](https://arstechnica.com/security/2024/04/what-we-know-about-the-xz-utils-backdoor-that-almost-infected-the-world/)
