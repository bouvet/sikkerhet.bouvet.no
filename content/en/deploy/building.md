---
title: "Building"
weight: 2
translationKey: build
description: >
  When building a solution, various considerations must be taken. Is it acceptable for the customer to build in third-party managed cloud environments, or must this happen in our or the customer's own environments?
---

Building is often the first step in the process and is typically done only once per release. The build environments used in a CI/CD process, often called build agents, usually come in two forms:
* Cloud provider-managed agents
* Self-hosted agents - these can be hosted both in the cloud or on-premise

With cloud provider-managed agents, standard images pre-configured for this task are used. They are deployed when you start a build process and contain all the tools needed for building. Once deployed, they check out your source code, build it, store the artifact in a suitable system, and then the instance is stopped and deleted.

Self-hosted agents are more complex because you are responsible for all maintenance and configuration. In return, you have dedicated agents used only by the teams or projects granted access to them.

Although the first option is often good enough, it is important to be aware of the possibilities that exist and when to consider them. Regardless of the solution, it is important to remember that the build environment is a very vulnerable point; if compromised, an attacker could potentially make changes that affect _everything_ built there.

This is especially important when using [third-party packages]({{< ref "develop/software-supply-chain.md" >}}), and a minimum here should be that packages are pinned to specific versions and that you never fetch the latest version of a package automatically.

## More Information
* [Microsoft: Azure Pipelines](https://learn.microsoft.com/en-us/azure/devops/pipelines/get-started/pipelines-get-started?view=azure-devops)
* [Github: Github Actions](https://docs.github.com/en/actions)
* [OWASP: Top 10 CI/CD Security Risks](https://owasp.org/www-project-top-10-ci-cd-security-risks/)
* [OWASP: CI/CD Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/CI_CD_Security_Cheat_Sheet.html)
