---
title: "Version Control"
weight: 2
translationKey: git
description: >
  Version control is an essential tool in all development projects, but how do you use it effectively and what should you consider?
---

Git is today the standard in most projects run at Bouvet, but if you end up in a project that uses something else many of the principles will still be transferable. Git itself is the version control tool that manages history and versioning, while GitHub handles the surrounding services such as CI/CD, security testing and similar. Azure DevOps offers many of the same features described below; even though GitHub is used as an example you should assume the same applies for Azure DevOps. 
{{< tip title="Source code is critical" >}}
Remember that source code is part of the project, and must be considered in relation to [disaster recovery and backups]({{< ref "business-continuity.md" >}})!
{{< /tip >}}

## .gitignore
 The first thing you should do in a new or existing repository is check that there is a ._gitignore file_. This is used to exclude files from git so that they can live in your local folders without being committed to git. There are ready-made templates for most programming languages that ensure build artifacts, .env files and other items that may contain sensitive information are not committed to git. 

__Do not__ rely on remembering not to include files when you commit; it is easy to miss when you are fixing something in passing. .gitignore is checked in like other files so that others in the team can benefit from it. Just remember that it only applies to new files; if you also want to exclude files that already exist in the repo they must first be removed from the git history. 

## Secrets and history
Many people test locally on their own machine while developing and often have keys or similar hardcoded while testing. It happens relatively often that such secrets are forgotten and committed along with other code. If this happens the secret must be invalidated. Keys, passwords, certificates and the like __must__ be rotated so that what ended up in git is no longer valid. 

Overwriting in git is not enough; the history will still be available to everyone with access. Everyone who has cloned the repo will also have a copy of the history; although there is a technical possibility to rewrite history this can in many cases be [difficult or impossible](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository#side-effects-of-rewriting-history). 
{{< tip title="Handling secrets" >}}
Use password vaults to manage secrets: You reference the secret, but can separate environments by pointing to different vaults!
{{< /tip >}}

### Secret scanning
Consider setting up workflows that scan the repo for secrets, for example using [Trufflehog](https://github.com/marketplace/actions/trufflehog-oss) or similar so that merges are blocked if secrets are found. It will not be a perfect solution but it will alert on findings and help prevent secrets from reaching main.

GitHub also supports the use of various actions that can perform tasks on checked-in code such as CI/CD, security testing and much more. 

## Access control
Access control is the first item on the agenda in a new project. Who should have access to the repo - individual users, the organization, or should it be public? Be aware that we are only allowed to create private repos by default, and if it should be opened up this must be done via a BSD case. 

## Code signing
Git by itself has no form of access control; anyone can configure their git client and call themselves `Pelle Pellesen` with the email `pelle@bouvet.no@`, and that is normally what will be shown in the history. Depending on the project and any customer requirements one should consider using [`signed commits`](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits) to ensure that all commits are signed cryptographically. 
{{< figure src="../git-signing.png" alt="Signed code">}}
The image above shows, for example, how a commit to this very article appears when it is signed. 

## Git hooks
Git hooks are scripts that typically run client side and are triggered by various actions so that you can run linting, code scanning and other checks to ensure the quality of what is being developed. Although there are both client side and server side hooks it is important to be aware that GitHub does not support running server side hooks. 

Hooks normally live under `.git`; since this is not version controlled scripts should be placed under other folders so they can be shared across the team. Remember that hooks must be set up by each developer, so do not rely solely on them for critical checks!

## Workflows 
Workflows run on GitHub and can be triggered by various events such as pushing code, in connection with pull requests, tags and more. A workflow can consist of a series of different actions that run against the codebase. Workflows are often used to validate, test, build or deploy; for a pull request you can for example run a number of tests to ensure that changes do not break existing functionality, before running a separate workflow after merging to main that builds and deploys the code to the desired target. 

Be aware that workflows spin up a VM or a container in the background where the different actions run, and that many of these in reality have dependencies on third parties. Do not run actions uncritically, but assess the risk and benefit they provide like any other dependency.

## Branching strategy
Git supports different branching models depending on how complex a workflow you need. Regardless of which you choose it is important to consider how the workflow will be if vulnerabilities or critical issues suddenly appear that _must_ be fixed regardless of what else you are working on. 

A typical approach is to operate with a production branch, often `main` or `master`. This should be protected so that all changes are made in separate feature branches which are then merged in via pull requests with the accompanying review from others in the team. The production branch then becomes the basis for all deployments going forward. 

{{< figure src="../src_trunk.png" alt="Trunk-based merging">}}

There are other and more complex approaches as well, for example with separate branches plus tagging of versions. This is especially useful if you maintain multiple versions across environments, need the ability for hotfixes or similar: 

{{< figure src="../src_advanced.png" alt="More advanced merging" style="max-width: 800px; height: auto;" >}}

In this example all developers work in their own feature branches against the develop branch which is protected from direct changes. This is deployed to the dev environment to verify that everything works as it should. 

When the team is satisfied with the state of develop it is merged to test via a pipeline that handles tagging of version numbers automatically. This pipeline can require approvals to run so that one person starts it and another must approve. 
The test branch is deployed to the test environment, and when the customer is happy with what has been delivered it is merged to the prod branch in the same way as to test. For both test and prod we use the version number as part of the branch name so that we can have Test/v1 and Test/v2 branches which correspond to Prod/v1 and Prod/v2.

If there is a need for hotfixing against prod this can for example be done against the relevant prod branch so that critical bugs can be fixed quickly and then the hotfix can be brought back into dev. 

# More information
* [GitHub: Gitignore templates](https://github.com/github/gitignore)
* [GitHub: Signed commits](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits)
* [Git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)
* [Microsoft Learn: Azure DevOps](https://learn.microsoft.com/en-us/azure/devops/?view=azure-devops)