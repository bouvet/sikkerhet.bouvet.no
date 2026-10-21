---
title: "Deploy"
weight: 3
translationKey: deploy2
description: >
  Deployment is about controlled movement of a verified artifact to runtime environments. The goal is safe rollout, fast rollback, and predictable operations.
---

Deployment starts after the artifact has been built and verified. The main principle is that the same artifact is promoted across environments without rebuilding in between.

This article focuses on rollout to environments. Overall pipeline management is covered in [CI/CD]({{< ref "deploy/cicd.md" >}}), and details about safe artifact production in [Building]({{< ref "deploy/building.md" >}}).

{{< figure src="../cicd.png" >}}

## Principles for safe deployment
To reduce operational and security risk, the deployment process should be built on:

* **Promotion of the same artifact**: Don't rebuild for each environment.
* **Verification before rollout**: Deployment should stop if required checks don't pass.
* **Automated and idempotent rollout**: Same deployment command should produce the same result.
* **Traceability**: Each deployment should be traceable to artifact, commit, and approval.

{{< figure src="../deploy.png" >}}

## What a deployment process should cover
A mature deployment process should cover at minimum:

* **Environment promotion (dev-test-prod)**: Clear gates between environments.
* **Approval and change control**: Requirements for approval before production.
* **Release strategy**: Support for blue/green, canary, or rolling deployment where appropriate.
* **Rollback**: Defined and tested procedure for fast reversal.
* **Smoke tests after deployment**: Verify that the solution actually works in the target environment.
* **Observability**: Monitoring and alerting that catch errors early after rollout.

## Access management and environment security
Deployment access must be treated as a privileged operation:

* **Least privilege for deployment identities**: Give only access needed for deployment.
* **Separate roles**: Separate roles for development and production deployment where possible.
* **Limit production deployment triggers**: Restrict who can start deployment to production.
* **Traceability on deployments**: Log who deployed what, when, and to which environment.

## Deployment of AI systems
For AI solutions, the deployment process must also handle model behavior and data-driven risk:

* **Model rollout with control**: Use gradual rollout (for example canary) to reduce impact if model behavior is wrong.
* **Clear version linkage**: Your running solution should be traceable to the exact model version, code version, and configuration.
* **Verification in target environment**: Run relevant quality and security checks in the target environment after deployment, not just during the build phase.
* **Operational monitoring**: Watch model quality, response time, and signs of data or output drift.
* **Fast rollback**: Have clear procedure to switch back to previous model version if issues occur.

## Further reading
* [Microsoft: Deployment jobs](https://learn.microsoft.com/en-us/azure/devops/pipelines/process/deployment-jobs?view=azure-devops)
* [Microsoft: Introduction to deployment patterns](https://learn.microsoft.com/en-us/training/modules/introduction-to-deployment-patterns/)
* [GitHub: Environments](https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment)
* [OWASP: Top 10 CI/CD Security Risks](https://owasp.org/www-project-top-10-ci-cd-security-risks/)
* [OWASP: CI/CD Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/CI_CD_Security_Cheat_Sheet.html)
