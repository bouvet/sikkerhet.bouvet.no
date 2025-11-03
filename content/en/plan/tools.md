---
title: "Tools Used in Deliveries"
weight: 4
translationKey: tools
description: >
  Misconfiguration is a common source of errors and vulnerabilities, and this also applies to tools. If possible, the team should standardize the use of tools and their extensions, ensuring that everyone follows a similar (and documented) workflow.
---

All development teams use various tools in the development process, and the selection will vary from team to team depending on personal preferences, technology choices, system and customer requirements, and much more.

A typical team will use some form of
* [IDE](https://en.wikipedia.org/wiki/Integrated_development_environment)
* a version control system for the code, typically _git_
* a tool for [CI/CD]({{< ref "deploy/cicd.md" >}}) that can perform various tasks related to building, testing, or deployment
* other services managed or consumed by the team, e.g., messaging services, file transfer services, or similar

These tools can significantly impact security and quality in deliveries, so it is important that the team considers how these are configured.

## IDE
It is possible to install extensions in most IDEs today that add support for new languages, formatting, linting, cloud services and more. These can greatly improve the productivity and efficiency of the team but we must be mindful of what is installed. 

Many IDEs support extensions that add missing functionality such as support for additional programming languages, integrations with other tools and similar. We must however be aware that this is an attack vector like any other ecosystem and that we as developers must assess the risks associated with extensions. It is not enough to only look at download counts, we must also consider other indicators such as reviews, history and similar. 

## Version Control
Version control gives tremendous control over all changes but it is important that we use the tool in a good way. The de facto standard today in most projects is [git](https://git-scm.com/), at Bouvet mainly with repositories hosted on GitHub or Azure DevOps. 

Repositories and branching strategies must be configured as needed; some projects have relatively simple workflows consisting of fork-from-main; pull request; merge-to-main, while others have more complex flows that involve many different branches handling things like development, testing, production and more. 

GitHub also supports the use of various actions that can perform tasks on checked-in code such as CI/CD, security testing and much more. Also remember that source code is part of the project and must be considered in relation to [disaster recovery and backups]({{< ref "plan/business-continuity.md" >}})!

### Security in the Source Code System
Many rely on solutions like Azure DevOps, GitHub, or similar that handle access control, reviews, and other functions related to confidentiality and integrity of the source code.

However, Git also has built-in functionality for signing commits, so that each commit can be traced to a person with a given key. This can be a useful tool for ensuring integrity and should be considered by the team.

## CI/CD
A good [CI/CD system (Continuous Integration / Continuous Deployment)]({{< ref "deploy/cicd.md" >}}) can be used to significantly increase the security of the final product by automating various checks and tests that ensure the quality of the delivery.

Be aware that several of the points below require additional software. We currently do not have shared licenses for developers at Bouvet; this must be managed by each project depending on needs and requirements. If the team handles this on its own, be aware of license conditions and how tools work. Some tools, for example, send source code to their own servers for analysis, which is generally not allowed unless agreed upon with the customer.

### Software Composition Analysis (SCA)
[Software composition analysis (SCA)]({{< ref "develop/software-supply-chain.md" >}}) can be set up automatically as part of CI/CD. We have many dependencies on components made by others, so it is important to keep track of existing and newly discovered vulnerabilities in what we create.

### Testing
Running tests in CI is beneficial for several reasons, but from a security perspective, there are specific tests that should be included.

* Test all relevant endpoints for 401/403 responses
* Test code that handles authorization (who gets to do what). It is advantageous if all authorization logic happens in a centralized place in the codebase.
* Test for strict [JWT validation](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/06-Session_Management_Testing/10-Testing_JSON_Web_Tokens)

### Static Application Security Testing (SAST)
[Static application security testing (SAST)]({{< ref "develop/security-testing/#static-application-security-testing-sast.md" >}}) should be configured to run automatically as part of CI/CD. Consider whether a build should fail if the static code analysis detects serious weaknesses in the code or low test coverage.

### Secret Scanning
[Secret scanning]({{< ref "develop/secrets.md" >}}) - passwords, keys, and other sensitive information that should not be in the source code is an important tool that can be implemented in the version control system and in CI/CD. Some tools only provide alerts when secrets are found, while others can also invalidate the secrets in the services they are meant for.

## More Information
* [Atlassian: Branching strategy: a path to greatness](https://www.atlassian.com/agile/software-development/branching)
* [Github: About secret scanning](https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning)
