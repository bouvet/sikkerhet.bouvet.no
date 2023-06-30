---
sidebar_position: 5
title: Securing a CI/CD process
---
# Securing a CI/CD process

System accounts and environments used as part of the CI/CD process will often have access to a wide range of resources such as source code, secrets, and infrastructure. This, combined with a lack of understanding how the process works makes CI/CD an attractive target for attackers. 

## Secrets

_Secrets_ (passwords, tokens, ssh-keys etc.) are often required for the process to work as intended. As these are used to access resources it is important that these do not become available to unauthorized persons, and that they are treated with care: 

- Use the CI/CD system best practices for adding and using secrets. 
  - Don't create your own custom solutions for handling secrets, such as reading files, environment variables and so on. Doing so may have unforeseen consequences. 
- All secrets should have a limited lifespan, and a process needs to be in place to replace it before expiry or if it is compromised. 
- Avoid machine accounts and shared accounts.
  - Use __PAT__([Personal Access Token](https://en.wikipedia.org/wiki/Personal_access_token)) and __deploy keys__ with the minimum scope possible
- Check that secrets aren't logged, also in the case of failures in the process. 
- Only consume secrets in the CI/CD steps where it is explicitly required. 

## Configuration

The CI/CD solution is a critical part of the system as a whole, so it is important to be able to recreate pipelines and tasks quickly. Any configuration of the CI/CD system and process should be treated as source code and kept under version control. 

## Runtime environment

If the CI/CD environment should be compromised, the consequences can be severe. The source code build as part of this process can be modified, secrets collected and exfiltrated, and it can be used as a tool allowing an attacker access to additional resources. 
Securing [virtual machines](../deploye/virtual_machines) and [containers](../deploye/containers) are covered by separate articles. 

Some general suggestions to help increase the security of the CI/CD process: 

- Avoid self-hosted build environments. 
  - If this is unavoidable, run the CI/CD in short-lived environments, such as [this example from Github](https://docs.github.com/en/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners#using-ephemeral-runners-for-autoscaling)
- Avoid Jenkins if possible, if used pay close attention to updates and which plugins you use. 
- Use Github Actions, but be aware of
  - External _actions_. Should be avoided, or treat it as any other [library](/utvikle/biblioteker). Can also be locked to a specific commit hash.
  - Don't allow pull requests from forks to run in _self hosted runners_
  - Consider using environment secrets for each branch and remember that anyone running code has access to all exposed secrets. 
  - Consider using [federated identity credential](https://learn.microsoft.com/en-us/graph/api/resources/federatedidentitycredentials-overview?view=graph-rest-1.0) (Azure + Github)

:::info OWASP CI/CD Top 10
If you need more information on securing the CI/CD process, the [OWASP CI/CD Top 10](https://owasp.org/www-project-top-10-ci-cd-security-risks/) can be a good starting point. 
:star:
:::
