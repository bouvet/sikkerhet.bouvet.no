---
title: "CI/CD"
weight: 1
translationKey: cicd
description: >
  CI/CD is the overarching framework for automating builds, verification, and deployment. A good pipeline provides traceability, quality assurance, and controlled rollout across environments.
---

Continuous Integration and Continuous Delivery (CI/CD) are practices for automating the flow from code change to running solution. Pipelines provide a standardized process for building, verification, and rollout, and reduce the risk of manual errors.

The point of CI/CD is not just speed but control. Each run should be traceable, repeatable, and have clear stopping points before anything goes to production.

{{< figure src="../cicd.png" >}}

## Principles for CI/CD
Safe CI/CD practice is built on a few simple foundational principles:

* **Least privilege**: The pipeline should only have the access it actually needs.
* **Traceability**: You should be able to see what was run, by whom, and against what code.
* **Automated rules**: Quality and security requirements should be in the pipeline, not in people's heads.
* **Controlled flow**: Production should have its own control points with tests and approvals.
* **Environment separation**: Build, test, and production should not share identity and access.

## Security controls in the pipeline
A pipeline should have at minimum:

* **Secret scanning**: Find hardcoded keys, tokens, and other sensitive information.
* **Dependency scanning**: Find known vulnerabilities in third-party libraries.
* **Static code analysis (SAST)**: Find common weaknesses early.
* **Automated tests**: Run unit, integration, and relevant security tests.
* **Audit logging**: Keep logs and metadata for audit trails.

Critical findings should stop deployment, not just give a warning.

## Branching and promotion model
Branching is closely connected to CI/CD, but the details belong in the [Git article]({{< ref "develop/git.md#branching-strategy" >}}).

In CI/CD context, the main points are:

* Code to production should go via pull request and protected main branch
* Deployment to production should require passing controls and approval

## Secrets and credentials in the pipeline
Secrets used in pipelines must be handled with particular care:

* **Never in code**: Keys and tokens should not be in the repository.
* **Use secure storage**: Use dedicated secret storage in your platform.
* **Rotate regularly**: Change keys and tokens at fixed intervals.
* **Avoid leakage in logs**: Ensure secrets don't end up in logs.

## Third-party components in the pipeline
Pipeline configuration is part of the supply chain. Third-party components in the pipeline (actions, orbs, templates, build images) run with pipeline access and must be treated as code you're responsible for.

This means a compromised or malicious third-party component can:

* Exfiltrate secrets and credentials available to the run
* Manipulate artifacts being built without it being visible in your code
* Change behavior when a tag is updated to point to new code without your approval

Measures:

* **Pin to commit hash, not tag**: A tag can be moved without you noticing.
* **Limit access for actions**: Give a component only the permissions it actually needs.
* **Review third-party actions**: Review the source code of actions you use, especially those handling secrets or deploying to production.
* **Use internal or official actions**: Prefer actions from the same organization or from verified actors with good track records.
* **Monitor changes**: Use Dependabot or similar to notify you when actions are updated, so updates are explicit and tracked.
* **Using AI in pipelines**: Be sure you understand the risks and potential challenges before considering using AI-based actions in your pipeline.

The general picture for supply chain security is described in [Software Supply Chain Security]({{< ref "develop/software-supply-chain.md" >}}).

## AI in CI/CD
For AI solutions, the same pipeline principles should apply to code, models, datasets, and configuration. Deployment should stop if verification fails.

Details about safe building of artifacts (including signing) are described in [Building]({{< ref "deploy/building.md" >}}), and safe deployment to environments in [Deployment]({{< ref "deploy/deploy.md" >}}).

## Practical adoption in teams
CI/CD implementation should be done gradually:

* Start with basic building and testing, add security controls gradually.
* Document pipeline configuration as code so it can be reviewed and versioned.
* Give the team time to learn the tool and practice before enforcing stricter requirements.
* Follow up on findings in practice. Alerts without follow-up have little value.

## Further reading
* [Microsoft: Azure Pipelines](https://learn.microsoft.com/en-us/azure/devops/pipelines/get-started/key-pipelines-concepts?view=azure-devops)
* [Github: Github Actions](https://docs.github.com/en/actions)
* [OWASP: Top 10 CI/CD Security Risks](https://owasp.org/www-project-top-10-ci-cd-security-risks/)
* [OWASP: CI/CD Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/CI_CD_Security_Cheat_Sheet.html)
* [Google: MLOps Continuous Delivery and Automation Pipelines in Machine Learning](https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning)
