---
title: "Segregation of Environments"
weight: 3
translationKey: seg
description: >
  Development projects use different environments for various purposes, such as testing deployments in a dedicated dev environment, exposing the test environment to product owners and other key personnel, and the production environment to end users. To avoid incidents in one environment affecting another, we must segregate them at a level that makes sense for the team and the context in which we work.
---

When we build solutions, we often set up multiple environments, typically for dev, test, and prod, so that we can develop while the product owner tests new functionality and end users use the system in prod. It is important to distinguish between these environments to avoid situations where changes in one environment affect the use of another.

When designing a new solution, we must consider how to separate the environments. For cloud services, a common approach is to use different subscriptions per environment where possible. One subscription cannot affect another unless explicitly configured, but there are other possibilities as well.

## Brief Overview of the Most Common Solutions (Azure):
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

## More Information
* [ISO27001:2022 - Section 8.22 - Segregation of networks - Requires Bouvet user](https://wiki.bouvet.no/display/BLS/Nettverkssikkerhet)
