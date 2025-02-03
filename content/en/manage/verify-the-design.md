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
One of the most important aspects is everything around the code that may not necessarily be in code form. This includes the resources we use, network setup, and firewall openings. We should also review IAM and the permissions granted to resources and applications. If there are elements in the design that are not implemented, these should be removed. If we have implemented elements not in the design, the design should either be updated, or the elements should be removed from the solution.

## How Can We Check?
This depends greatly on the form and nature of the project, but in many cases, the IT organization at the customer (for projects hosted at the customer) can help. If the solution runs at Bouvet, Intern IT & Security can certainly assist with checking things like network configurations or point you in the right direction. There is a lot you can do yourself as well, but check with Intern IT & Security before installing tools and running scans or similar actions.

## More Information
* [Wikipedia: Secure by design](https://en.wikipedia.org/wiki/Secure_by_design)
* [CISA: Secure by design](https://www.cisa.gov/securebydesign)
