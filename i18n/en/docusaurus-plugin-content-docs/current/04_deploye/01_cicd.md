---
sidebar_position: 1
title: CI/CD
---

# CI/CD
:::tip In Short
When we create solutions, they need to be built and deployed consistently. Using CI/CD eliminates human errors from the process and ensures that we can reliably reproduce both artifacts and deployments.
:::

When setting up runtime environments, it is important to consider how the solution we are developing can be built and deployed in a way that makes it easy and removes the need for a person to spend time and energy doing the same thing each time.

![cicd](./cicd.png)

## Using CI/CD
Continuous Integration and Continuous Delivery, often abbreviated as CI/CD, are common approaches for how software is built and deployed to runtime environments, often using scripts in the form of pipelines or actions. Names and terms here depend on the tools used, but the principle is much the same.

Such a pipeline can do much more than just build; it can also perform other tasks such as running automated testing, vulnerability scanning, secret scanning, and much more. Regardless of what it is used for, it is important to be aware of the risk elements associated with CI/CD.

The big advantage of CI/CD is the automation built into the solution. Each time you run a pipeline, the run and all artifacts are archived and linked to the version control system so you can go back and see which commit was used. Running CI/CD should be safe as long as you have control over and protect the branch used as the basis for deployment to the production environment.

# More Information
* [Microsoft: Azure Pipelines](https://learn.microsoft.com/en-us/azure/devops/pipelines/get-started/pipelines-get-started?view=azure-devops)
* [Github: Github Actions](https://docs.github.com/en/actions)
* [OWASP: Top 10 CI/CD Security Risks](https://owasp.org/www-project-top-10-ci-cd-security-risks/)
* [OWASP: CI/CD Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/CI_CD_Security_Cheat_Sheet.html)
