---
sidebar_position: 0
---
import Link from "@docusaurus/Link";

# Introduction

Welcome to __sikkerhet.bouvet.no__! :sparkles:

Here, system developers, infrastructure engineers, DevOps practitioners, and others at Bouvet will find information to support the operation, development, and maintenance of secure IT systems for our customers. The overarching content and themes discussed on these pages are also supportive for project managers, advisors, and others who need to follow up on security in projects.

Bouvet is [certified under ISO27001](https://www.bouvet.no/om-bouvet/vare-iso-sertifiseringer), which also sets requirements for security in deliveries. The [checklist](checklist) will provide you with a good starting point for measures that cover common security gaps and help ensure quality in the delivery. Each point in the checklist is covered by more detailed information to make it easy to get started without prior knowledge of a topic.

The goal of __sikkerhet.bouvet.no__ is not to cover everything, but to give you suggestions for measures and a vocabulary that will help you move forward. All topics presented will also point to external resources that can provide even more information.

For many projects, a more thorough review may be necessary. In that case, we recommend [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/).

:::success Remember!
We will do our best to deliver the safest services and solutions.
:::

### Why in english?
Bouvet is growing, and consists of people from more than 55 nationalities with offices in Norway and Sweden. To ensure that this content is available for as many of our colleagues as possible, it makes more sense to keep it in english rather than having to maintain multiple versions of the same content. 

## What is Information Security?

_Information security_ is about securing these aspects of an IT system:

__Confidentiality__  
The data processed by the system should not be accessible to unauthorized individuals.
> Examples of challenges here can include a misconfigured access control system, known in OWASP Top 10 as "Broken Access Control."

__Integrity__  
The data processed by the system is correct.
> Integrity can be compromised through, for example, an SQL injection attack or a poorly secured SSH server where unauthorized individuals gain access to alter data.

__Availability__  
The functions offered by the system are available when users need them.
> Considerations range from a virtual machine freezing due to a full disk to a targeted DDoS attack.

## How to use sikkerhet.bouvet.no?

_sikkerhet.bouvet.no_ is organized into chapters based on the domains they cover.  
You can either click through and read about a single topic you are unsure about or seek tips on. Alternatively, you and your team can systematically go through each chapter and note what is in order and what needs improvement in your project.

The [Security Checklist](checklist) can be used as a starting point to assess the project's security. Each point refers to more detailed information. It can also be downloaded and implemented as part of the source code in your project.
