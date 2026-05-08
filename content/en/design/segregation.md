---
title: "Segregation of Environments"
weight: 3
translationKey: seg
description: >
  Development projects use different environments for various purposes, such as testing deployments in a dedicated dev environment, exposing the test environment to product owners and other key personnel, and the production environment to end users. To avoid incidents in one environment affecting another, we must segregate them at a level that makes sense for the team and the context in which we work.
---

When we build solutions, we often set up multiple environments, typically for dev, test, and prod, so that we can develop while the product owner tests new functionality and end users use the system in prod. It is important to distinguish between these environments to avoid situations where changes in one environment affect the use of another.

When designing a new solution, we must consider how to separate the environments. For cloud services, a common approach is to use different subscriptions per environment where possible. One subscription cannot affect another unless explicitly configured, but there are other possibilities as well.

## Common Segregation Patterns
* Separate subscriptions per environment:
    * Natural separation unless explicitly defined access
    * More overhead with managing multiple subscriptions
* Use of separate resource groups:
    * Simplified administration
    * Resource groups share some limitations and access at the subscription level
* Separate virtual networks:
    * Segregation at the network level
    * Often requires more admin to ensure there is an actual separation

There are other approaches to this as well, but regardless of the solution the team chooses, it is important to consider the overall cost/benefit against the requirements to be met.

## Segregation for AI systems
For solutions that include artificial intelligence or machine learning, infrastructure segregation alone is not always enough. Teams should also consciously separate data, models, and rollout practices across environments.

### Separation of training, evaluation, and production data
Data used for training, evaluation, and production should be clearly separated. This reduces the risk of validating models on the wrong basis or allowing test and development activity to affect production-adjacent data.

### Separation of model versions per environment
Models, weights, and related configuration should be versioned and clearly tied to the right environment. The production model should not be overwritten by experimentation in dev or test.

### Gradual rollout of changes
When introducing new models or major changes, teams should consider mechanisms such as feature flags, controlled rollout, or other techniques that allow limited validation before full production rollout.

## More Information
* [Network concepts]({{< ref "design/networking" >}})
* [ISO27001:2022 - Section 8.22 - Segregation of networks - Requires Bouvet user](https://wiki.bouvet.no/display/BLS/Nettverkssikkerhet)
* [Microsoft Cloud Adoption Framework - Azure landing zones](https://learn.microsoft.com/azure/cloud-adoption-framework/ready/landing-zone/)
* [AWS Well-Architected Framework - Security Pillar](https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html)
* [Google Cloud Architecture Framework](https://cloud.google.com/architecture/framework)
* [OWASP AI Agent Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html)
* [OWASP LLM Prompt Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html)
* [OWASP Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html)
