---
title: "Introduction"
weight: 1
translationKey: intro
description: >
  Here, Security Champions, system developers, infrastructure engineers, DevOps practitioners, and others at Bouvet will find information to support the operation, development, and maintenance of secure IT systems for our customers. The overarching content and themes discussed on these pages are also supportive for project managers, advisors, and others who need to follow up on security in projects.
---
The goal of __sikkerhet.bouvet.no__ is not to cover everything, but to give you suggestions for measures and a vocabulary that will help you move forward. All topics presented will also point to external resources that can provide even more information.

Bouvet is [certified under ISO27001](https://www.bouvet.no/om-bouvet/vare-iso-sertifiseringer), which also sets requirements for security in deliveries. The [checklist](checklist) will provide you with a good starting point for measures that cover common security gaps and help ensure quality in the delivery. Each point in the checklist is covered by more detailed information to make it easy to get started without prior knowledge of a topic.

For many projects, a more thorough review may be necessary. In that case, we recommend [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/).

{{< tip title="Remember" >}}
We will do our best to deliver the safest services and solutions.
{{< /tip >}}

## What is an SSDLC?

_SSDLC_ – Secure Software Development Lifecycle – is a development lifecycle where security belongs in every phase, rather than being a review at the end. The phases are the same as in any project: you plan, design, develop, deploy and manage. The difference is that each phase also carries security work of its own.

The reason it pays off is that few serious security problems originate in the code – they originate in the decisions. A penetration test two weeks before launch finds the symptoms of a design choice made long before, and by then it is both expensive and awkward to put right.

The chapters on this site follow the phases, and each chapter has an introduction of its own:

* __[Plan]({{< relref "/plan" >}})__ – Clarify responsibilities, classify the data, and set requirements for availability and recovery before the work starts.
* __[Design]({{< relref "/design" >}})__ – Turn the requirements into architecture: threat model, networks, segregation of environments and access control.
* __[Develop]({{< relref "/develop" >}})__ – Write the code with OWASP Top 10 in mind, handle secrets properly, and validate data arriving from outside.
* __[Deploy]({{< relref "/deploy" >}})__ – Build an artifact that can be verified, and test the solution before it goes into operation.
* __[Manage]({{< relref "/manage" >}})__ – Log and monitor, keep track of weaknesses in your dependencies, and know who does what when something happens.

An SSDLC is not a gate you pass through once. The phases repeat for every change of significance, and a design choice that was right at the outset can be wrong two years later.

The effort should be proportionate to the risk. An internal tool holding no personal data does not need the same effort as a solution processing sensitive data for many users – but both should have been through an assessment, so that the scope is a choice rather than an oversight.

If you want a more formal framework to measure yourselves against, [OWASP SAMM](https://owaspsamm.org/), [NIST SSDF](https://csrc.nist.gov/projects/ssdf) and [Microsoft SDL](https://www.microsoft.com/en-us/securityengineering/sdl) are good places to look.

## How to use sikkerhet.bouvet.no?

You can either click through and read about a single topic you are unsure about or seek tips on. Alternatively, you and your team can systematically go through each chapter and note what is in order and what needs improvement in your project.

The [Security Checklist](checklist) can be used as a starting point to assess the project's security. Each point refers to more detailed information. It can also be downloaded and implemented as part of the source code in your project.
