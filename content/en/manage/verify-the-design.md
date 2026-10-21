---
title: "Verify the Design"
weight: 1
translationKey: verify
description: >
  When developing a solution, we should always validate that the solution adheres to the design. If it deviates, we must either correct the solution or update the design.
---

When we create a [design]({{< ref "design/system-diagrams-and-drawings.md" >}}) for a new solution, there may be details we do not know, or unexpected complications may arise during implementation. This can result in the original design deviating from the final solution.

Documentation is crucial for understanding how a solution is set up and how it works, especially if an incident occurs that requires redeployment or disaster recovery. To ensure that the gap between documentation and the final product is not too large, we should always validate the design afterward.

## What Should We Check?
One of the most important aspects is everything around the code that may not necessarily be in code form. This includes the resources we use, network setup, and firewall openings. We should also review IAM and the permissions granted to resources and applications.

When design is verified during the operations phase, the team should at minimum check:
* that implemented components actually match [system diagrams]({{< ref "design/system-diagrams-and-drawings.md" >}})
* that the requirements in [security requirements]({{< ref "design/security-requirements.md" >}}) are covered in the solution and operations
* that network, identities, roles, and access rules align with the design
* that dependencies (internal and external) are documented and still valid
* that the team has a routine to maintain design alongside the application

If there are elements in the design that are not implemented, these should be removed from the documentation. If we have implemented elements not in the design, the design should be updated, or the elements should be removed from the solution.

## Requirements → Design → Implementation
To make verification traceable, the team should use a simple traceability matrix:
* requirement ID → design choice → implemented control → test/evidence

This makes it easier to document that requirements are actually realized and provides a clear basis for audit, handover, and incident response.

Examples of how this can be demonstrated:
* IaC configuration and policy definitions
* screenshots/exports from cloud platform showing actual setup
* results from security testing
* logs confirming controls are active

## Verification of AI Systems
For solutions with AI components, verification must extend beyond classic infrastructure and application design.

The team should verify:
* that AI requirements are linked to concrete design choices and implemented controls
* that training/evaluation data, models, and versions are documented
* that access to model, data, and operational interfaces follows least privilege
* that logging and monitoring cover AI-related events and anomalies

This supports control areas such as "AI system verification and validation" and "Documentation of AI system design and development".

## Verify Evaluation Results
For AI solutions, it is not enough to verify that the service responds. The team must also verify that the model's results continue to fall within accepted parameters.

At minimum:
* defined acceptance criteria for quality (e.g., precision, recall, or domain-specific metrics)
* documented test sets and evaluation method
* comparison against previous baseline when model or data changes
* clear decision on approval or rejection of new version

If deviations occur, the team must document actions and any risk assessment before further production use.

## Documentation and Traceability
In practice, the documentation should make it possible to answer:
* which requirement underlies a given design choice
* which version of model/prompt/policy is in operation
* who approved the change and on what basis
* what evidence shows that controls are working

Traceable documentation reduces troubleshooting time during incidents and makes re-verification easier with major changes.

See also:
* [Documentation]({{< ref "develop/documentation.md" >}}) for minimum requirements for content and traceability
* [Security Control Points]({{< ref "plan/security-checkpoints.md" >}}) for pre-prod gates, including AI-specific decision points
* [Audit or Review]({{< ref "manage/audit.md" >}}) for evidence and traceability requirements

## How Can We Check?
This depends greatly on the form and nature of the project, but in many cases, the IT organization at the customer (for projects hosted at the customer) can help. If the solution runs at Bouvet, Internal IT & Security can certainly assist with checking things like network configurations or point you in the right direction. There is also much you can do yourself, but check with Internal IT & Security before installing tools and running scans or similar.

A practical minimum is to conduct verification:
* with major changes in architecture or dependencies
* before production rollout of new risky changes
* as part of regular operations routine (for example, quarterly)

## Further reading
* [Wikipedia: Secure by design](https://en.wikipedia.org/wiki/Secure_by_design)
* [CISA: Secure by design](https://www.cisa.gov/securebydesign)
* [OWASP Application Security Verification Standard (ASVS)](https://owasp.org/www-project-application-security-verification-standard/)
* [OWASP Artificial Intelligence Security Verification Standard (AISVS)](https://owasp.org/www-project-artificial-intelligence-security-verification-standard-aisvs-docs/)
