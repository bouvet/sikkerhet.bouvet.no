---
title: "Software Supply Chain"
weight: 1
translationKey: ssc
description: >
  Everyone who develops software uses third-party packages. All third-party packages represent code written by others and pose a risk to the delivery if we do not have control over what we use and an overview of weaknesses and risks associated with them.
---

When we build software, we depend on a multitude of different third-party packages from ecosystems like npmjs, nuget, PyPi and similar. In CI/CD pipelines we have actions and code that carry out testing, building, deployment and the like. All of this is code and components that come from third parties, where our level of security is at the mercy of how those actors work. A weakness in a dependency can result in our project leaking data, or in code being manipulated or used for malicious purposes.

## Security Risks
When we take third-party components into use, it is important to have a conscious relationship with risk. Useful questions to ask are

* Who is behind it
* Do we _really_ need this component?
* Is it actively maintained?
* Does the publisher have a track record that suggests security is taken seriously?

There is no definitive answer for when the risk is too great, but you can reduce it with some relatively simple measures. Here it is important to distinguish between malicious and vulnerable components.

### Malicious Components
Malicious components are built to carry out unwanted actions such as data leaks, cryptomining, theft of secrets and much more. In the last few years we have seen entirely new types of malicious packages that deliberately target development projects and developers, such as GlassWorm, Shai-Hulud and others. What they have in common is that they pose as legitimate: either by using package names that resemble real, harmless components, or by harvesting usernames, passwords, access tokens and the like from developers who also own legitimate packages, so that those packages can be infected in turn.

Campaigns using malicious components often come in waves, where the threat actors try to exploit trends. A few years ago cryptocurrency was the big thing, and you could observe a lot of malware posing as well-known or useful libraries related to it. Over the last couple of years the same has been seen with AI, deliberately targeting developers and users who are curious and want to use "the latest thing".

### Vulnerable Components
It is very rare that we manage to build perfect software with no weaknesses at all. In many cases we have known vulnerabilities that are considered harmless enough that we can live with them, but in a fair number of cases serious vulnerabilities are discovered after release.

The challenge that has emerged in recent years with the use of AI is that discovering and exploiting such vulnerabilities can happen very quickly, and we have to keep up. When a vulnerability is discovered, a [CVE report](https://cve.mitre.org) (Common Vulnerabilities and Exposures) is typically created as well, describing what the weakness consists of and often how it can be mitigated.

In some cases we can solve the problem by upgrading the packages to the latest version, while others have more fundamental challenges that require more effort. Sometimes CVEs are created for weaknesses that are technically a vulnerability but are _'by design'_. An example of this is the Python package _Pandas_, which among others has the vulnerability [CVE-2020-13091](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-13091). This allows users to deserialize files without checking where they come from - this has been registered as a vulnerability as it can be exploited if other measures are not in place.

### License Model
There are many different license models for available components; some are completely free and impose no requirements for use, while others like AGPL and GPL can have significant consequences for what you develop. Most ecosystems also allow the use of proprietary licenses, which can limit what you can use a package for without a valid license. Some have specific requirements in the license, others are free for personal use but require you to purchase a license if used commercially.

## How Do We Secure Ourselves?
To protect the system against these threats, there are several effective measures we can take. Many of these are already covered elsewhere, but there are still some threats unique to external packages.

### Threat Model and Complexity
In many cases, we depend on many packages that we do not use directly, so-called transitive dependencies. Each package runs in the same context as our own code, and can use the same resources and accesses it has. Every dependency therefore represents an increase in complexity and attack surface, increasing the chance that something will go wrong at a later stage.

{{< dependency-chain "braces, fill-range, to-regex-range, is-number" >}}

An important question everyone must ask is _"do we need this package?"_ What is the cost of creating the functionality ourselves compared to the risk and complexity associated with adding it?

### Monitoring Dependencies
An important tool is analysis tools that help us control vulnerabilities and risks in our dependencies. This type of analysis is called Software Composition Analysis (SCA), and gives an overview of both direct and transitive dependencies as well as the risk associated with them. There are many actors on the market, ranging from simple ones like GitHub's Advanced Security with Dependabot to more advanced ones like Snyk and Sonatype. In many cases, the data basis for the solution makes the big difference, but there are also a number of useful features to consider:

* Policy Management - Sonatype tags all packages with metadata, allowing you to define policies that dictate what can be used or not.
* Automatic Remediation - Tools like dependabot (GitHub) automatically upgrade packages when vulnerabilities are discovered, and updates are available.
* Integrations and Notifications - Many tools like Snyk SCA can integrate into IDEs and CICD.
* Risk Overview - Many solutions provide an overall view where you can see the total risk picture for individual applications or larger parts of the portfolio.

### AI dependencies are also part of the supply chain
For systems that use AI, dependencies are not limited to libraries from npm, nuget, or PyPI. Models, tokenizers, embeddings, evaluation datasets, and inference containers must be treated as third-party dependencies with the same requirements for control.

This means the team should:

* use approved sources and avoid downloading artifacts directly from unknown mirrors
* pin versions and refer to immutable identifiers (a tag alone is not sufficient)
* document which AI artifacts are actually included in a release
* assess license and terms of use for models and datasets, not only code

### Maturity
This can be difficult to quantify, but how active is the community around a package? Is it maintained by individuals, groups of developers, or does it have economic or other support from a company?

How likely is it that the package will still be maintained in, for example, 5 years? How is the history in terms of vulnerabilities and quality; is there an active community reporting weaknesses that are then addressed, or do reported issues linger in limbo for extended periods? Tools like [libraries.io](https://libraries.io) and [Security Scorecard](https://securityscorecard.com/) can be useful for finding out more.

### Pinning Versions
One attack vector is when malicious actors take over popular packages and publish their own version with malicious content. If we have build or deploy processes that fetch the latest version of dependencies each time, they will automatically fetch the infected package. A measure here can be to pin the package versions we use, for example, in ```package-lock.json``` or similar.

A related measure is to introduce a cooldown or minimum-age requirement for new versions, so updates are not adopted until they are a certain number of days old. The purpose is to reduce the risk of pulling in fresh malware or compromised packages before the ecosystem has time to detect the problem and remove or flag the version. This can be especially useful for automated update flows, but it should be applied based on risk so critical security fixes can still be brought in quickly through a controlled exception process.

### Provenance and policy-gates in CI/CD
In addition to pinning, the build pipeline should verify the origin and integrity of dependencies before they are used. The team should establish policy-gates in CI/CD that can stop a merge or deployment when critical issues are detected, such as severe vulnerabilities, disallowed licenses, or dependencies from unapproved sources.

## More Information
* [OWASP Cheat Sheet - Software Supply Chain Security](https://cheatsheetseries.owasp.org/cheatsheets/Software_Supply_Chain_Security_Cheat_Sheet.html)
* [Sonatype: State of the software supply chain](https://www.sonatype.com/state-of-the-software-supply-chain/introduction)
* [Wikipedia: Software Composition Analysis](https://en.wikipedia.org/wiki/Software_composition_analysis)
* [Example of compromised library: xz-Utils](https://arstechnica.com/security/2024/04/what-we-know-about-the-xz-utils-backdoor-that-almost-infected-the-world/)
