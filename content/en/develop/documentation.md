---
title: "Documentation"
weight: 6
translationKey: docs
description: >
  Good documentation is essential for continuity, traceability, and security. This applies to the choices made, the threats assessed, and the system's actual behavior — including in AI systems.
---

Documentation is often deprioritized during delivery, but insufficient documentation creates real risk. Source code describes *how* something works, but not *why* certain choices were made, what threats were assessed, or what assumptions the solution depends on.

Security context that only exists in the heads of individuals is a vulnerability. Security mechanisms that are not documented risk being removed by someone who does not understand the consequences. Threat models that are not written down cannot be maintained or revised.

Good documentation gives the team the ability to assess risk over time, not only at the point of completion.

## Documentation solution
The team must choose a solution that is actually used. Documentation that lives in a tool no one opens provides little value.

Popular approaches include [docs-as-code](https://docsascode.org/), where documentation is written in [Markdown](https://en.wikipedia.org/wiki/Markdown) and versioned in git alongside the source code. This lowers the barrier for updates and provides full history of changes.

Regardless of the solution: remember that good documentation can be just as sensitive as the source code. Threat models with open findings, architecture descriptions, and security configurations must be protected on par with the system they describe.

## What should be documented
What needs to be documented will vary with the project's size and criticality, but the following should always be in place:

* **System design**: [Diagrams and drawings]({{< ref "design/system-diagrams-and-drawings.md" >}}) showing infrastructure, data flows, IAM, and integrations — at a level that makes it possible to review the architectural decisions made.
* **Threat model**: Which threats have been assessed, which mitigations have been introduced, and what residual risk has been accepted. The threat model must be maintained and updated when changes are made.
* **Security configuration**: Security-critical configurations must be documented so they are not inadvertently changed or omitted during upgrades and re-provisioning.
* **Incident log and deviations**: Security incidents and deviations should be logged and documented, including what was done and what lessons were identified.
* **Critical dependencies**: External services, third-party libraries, and integrations that the solution depends on for correct security function.

The criticality of the solution guides the required depth: a system with 24/7 requirements and high impact from downtime needs more detailed documentation than an internal low-risk system.

## Documentation of AI systems
AI systems impose documentation requirements that traditional technical documentation does not fully cover. Models, training data, and evaluation results change over time and affect system behavior in ways that are not always visible in code alone.

The following should be documented for solutions with AI components:

* **System purpose and intended use**: What the system is designed to do, who it is intended for, and which usage scenarios are out of scope.
* **Model description**: Which model is used, who developed it, which version and architecture. If the model is trained in-house: the training setup and methodology.
* **Training data and data provenance**: A description of which data the model was trained on, including sources, licensing, any restrictions, and known weaknesses in the data foundation.
* **Evaluation results**: Documented measurements of performance, accuracy, robustness, and any bias findings. The evaluation basis and metrics should be described so that results can be reproduced and compared over time.
* **Risk assessment**: Which risks have been identified related to the model's behavior, and which mitigations have been introduced. This includes risk of misclassification, hallucinations, unfair treatment, and misuse.
* **Human oversight and limits on autonomy**: Where and how humans are involved in decisions, and what constraints are placed on what the system can do autonomously.
* **Change management**: How model versions are managed, tested, and rolled out. Changes to the model, training data, or configuration should be tracked and justified.

### Minimum template for AI documentation
To make this practical and consistent, the team can use a simple minimum template per model version or significant change:

* identifier: model name, version, date, and responsible party
* purpose and scope: what the model is approved for, and what is out of scope
* data foundation: sources, constraints, license, and known weaknesses
* evaluation: test sets, metrics, results, and baseline comparison
* risk and mitigations: key findings, compensating controls, and residual risk
* approval: decision, approver, and any conditions for production use
* observability: what is logged/monitored in operation and which thresholds trigger follow-up

The template does not need to be comprehensive, but it should be consistent each time so that comparison, review, and reuse are straightforward.

This documentation is necessary both for internal control and to demonstrate compliance to customers, regulatory authorities, and other stakeholders.

## Further reading
* [Mastering the Art of Software Documentation: A Comprehensive Guide for Developers and Tech Professionals](https://medium.com/@nomannayeem/mastering-the-art-of-software-documentation-a06aa5d7e697)
* [Why documentation matters, and why you should include it in your code](https://www.freecodecamp.org/news/why-documentation-matters-and-why-you-should-include-it-in-your-code-41ef62dd5c2f/)
* [Documentation system: Hugo](https://gohugo.io/)
* [Documentation system: docs-as-code](https://docsascode.org/)
* [EU AI Act – requirements for technical documentation for high-risk systems](https://artificialintelligenceact.eu/article/11/)
* [OWASP Artificial Intelligence Security Verification Standard (AISVS)](https://owasp.org/www-project-artificial-intelligence-security-verification-standard-aisvs-docs/)
* [Atlassian: How to ace internal documentation](https://www.atlassian.com/work-management/knowledge-sharing/documentation)
