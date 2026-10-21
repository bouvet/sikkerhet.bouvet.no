---
title: "Development Environment, Tools, and Build Environment"
weight: 1
translationKey: toolsenv
description: >
  The environments and tools we work with are essential for the project. The team should standardize tool usage, document configuration, and reduce risk in the development and build chain.
---

The development environment and build environment are among the most important aspects of a development project. These environments are both a productivity factor and a critical part of the attack surface. Some teams develop and build locally on their own laptops, while others use dedicated development and build environments based on cloud services or on-premises development servers. Regardless of the solution, some core principles should always be in place: clear ownership, documented choices, standardized setups, and regular follow-up.

## Tools
A typical team uses:

* an [IDE](https://en.wikipedia.org/wiki/Integrated_development_environment) and extensions
* version control, typically [git](https://git-scm.com/)
* AI-based code assistants
* a [CI/CD]({{< ref "deploy/cicd.md" >}}) tool
* other services the team operates or consumes, such as messaging services, file transfer, and AI tools

These tools have significant impact on the security and quality of the delivery. The team should therefore clarify which tools are permitted, how they are configured, and how changes or updates are handled where relevant.

### Extensions and plugins
Many tools allow the use of extensions to provide third-party functionality not built into the tool by the vendor. This makes it possible to use standard tools like VS Code, customized for each project with the extensions relevant to the technology choices and workflow.

Extensions are, however, a major attack vector. It is important to have some guiding principles to help the team assess their quality. Vendors such as KOI offer solutions to help with this, but in the absence of dedicated tooling, some basic principles can help:

* Do not adopt extensions uncritically. Assess history, origin, and update frequency.
* Does the extension have a history of vulnerabilities or similar issues? If so, how were they handled?
* Keep track of the extensions you use, review changes before updating. Also consider waiting a few days after an update becomes available before applying it.

As with everything on the internet: stars, ratings, and reviews cannot be trusted and should not be the sole basis for deciding whether to adopt something.

### AI in the development environment
Generative [AI tools]({{< ref "plan/ai.md" >}}) can increase development velocity, but also introduce new risks. Use of AI _must_ be agreed with the customer before tools are adopted.

Key points to clarify:

* which AI services are approved
* which data may be used in prompts and as context
* how the vendor stores and reuses data
* how AI usage is documented within the team

A simple rule of thumb: treat code, architecture, logs, and configuration as sensitive information until otherwise agreed.

### Version control
Version control provides traceability and control over changes, but the security benefit depends on how the workflow is used in practice. Repositories and branching strategy should be configured to the project's needs.

Source code is a critical asset in the project and should be considered in the context of [disaster recovery and backups]({{< ref "plan/business-continuity.md" >}}).

### CI/CD as a security control
A good [CI/CD system (Continuous Integration / Continuous Deployment)]({{< ref "deploy/cicd.md" >}}) can significantly increase security by automating quality and security controls early in the chain.

Relevant controls include:

* [Software Composition Analysis (SCA)]({{< ref "develop/software-supply-chain.md" >}})
* Testing authorization and 401/403 responses
* Validating JWT handling
* [Static code analysis (SAST)]({{< ref "develop/security-testing.md" >}})
* [Secret scanning]({{< ref "develop/secrets.md" >}})

Several controls require additional tools and licenses. Be particularly mindful of tools that send code to external services for analysis. It is also important to be aware that actions used as part of CI/CD are an attack vector and must be assessed and treated like any other component in the supply chain.

## Supply chain security in practice
Modern software is built from many dependencies. The team must therefore have control over the entire supply chain, not only its own code. Remember that the supply chain covers all dependencies the team has, not just packages and libraries.

The team should ensure you have control over dependencies and the risks of using them. Common examples of components to have an overview of:

* IDEs and other code editors
* AI tools
* Extensions/plugins
* Support tools such as Figma, database modelling tools, or similar
* Cloud components
* Version control
* CI/CD — including actions that are executed
* Frameworks, packages, and libraries

The team may not control everything, but should still have a considered view of how the lifecycle of these components is managed and how change processes work in practice.

## Development environment and build environment
One of the major risk elements in all development is if:

* unauthorized persons can access a machine used for development, building, or production
* the machine can access the internet without significant restrictions
* such machines lack monitoring

All developers have dependencies on libraries and packages from open-source ecosystems. Some of these can be compromised or spoofed, thereby introducing backdoors or data exfiltration.

Important measures to reduce risk include:

* blocking all incoming network traffic
* blocking all outgoing network traffic
* only opening the accesses that are absolutely necessary
* avoiding the use of general machines used for web browsing, office activities, and similar for development

It is not always possible to justify dedicated machines for development from a cost/benefit perspective. This should nonetheless be considered deliberately, so the team understands how the choice affects the risk profile.

## Minimum that should be documented
The following should at minimum be documented and maintained:

* approved tools and versions
* requirements for the setup of development machines and build environments
* network accesses and their justifications
* logging and monitoring of the environments
* routines for patching and upgrades
* responsibility for managing tools and environments

## Further reading
* [Wikipedia: Programming tools](https://en.wikipedia.org/wiki/Programming_tool)
* [Atlassian: Branching strategy: a path to greatness](https://www.atlassian.com/agile/software-development/branching)
* [Github: About secret scanning](https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning)
* [Bouvet: Guidelines for use of Artificial Intelligence (internal link)](https://info.bouvet.no/bin/view/Bouvets%20AI-policy/)
* [Bouvet: Approved AI tools and services (internal link)](https://info.bouvet.no/bin/view/Bouvets%20AI-policy/KI-verkt%C3%B8y%20%26%20tjenester/)
