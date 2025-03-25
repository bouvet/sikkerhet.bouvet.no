---
title: "Documentation"
weight: 6
translationKey: docs
description: >
  All development projects must be documented. This is not only important for the continuity of the project but also for documenting security-related measures and any incidents.
---

Documentation is often seen as a necessary evil, and we are not always good enough at documenting our projects. Many believe that the source code is the best documentation, but it only says how an application works, not necessarily why it works the way it does, or what the actual intention is.

The security context is an important part of the documentation: What is the foundation for the choices made in the project, and what risk and consequences are we exposed to as a result? A threat assessment is often a useful tool when considering mitigating actions, especially when you re-evaluate the security posture at a later date. 

By ensuring quality documentation we avoid having to rely on implementations where a single person holds the entire security context. This also lowers the chance that security mechanisms are removed by accident due to someone missing this knowledge.

## Documentation Solution
The project must find a solution for where the documentation is stored that makes sense for the project. There are many good tools that integrate version control with the use of eg. [Markdown](https://en.wikipedia.org/wiki/Markdown) - this portal is built using [Hugo](https://gohugo.io/), but multiple other alternatives exists. 

When choosing a solution, the requirements of the team must be clarified. The process for handling things such as  threat models with known vulnerabilities will dictate what tool you choose, and what access users are given to the tool. Remember that good documentation can be as sensitive as the source code and must be treated accordingly.

## What Should Be Documented
What we should document will vary from project to project. We should always have a [design]({{< ref "design/system-diagrams-and-drawings.md" >}}) that provides insight into, for example, infrastructure, IAM, and data flow so that it is possible to review this at a later date.

The threat model must always be documented and maintained, and any mitigating measures must also be documented.

OWASP Top 10 has several points that can relate to the development environment and its setup, so if there are special configurations that need to be in place, this should also be documented to avoid weaknesses or vulnerabilities that arise if someone forgets important steps that are not written down.

One must also consider the criticality of the solution; if it is a system with 24/7 uptime requirements and is critical for the customer, the documentation must reflect this so that even the least experienced person on the team can troubleshoot problems without knowing the solution in detail.

## More Information
* [Documentation system: Hugo](https://gohugo.io/)
* [Documentation system: docs-as-code](https://docsascode.org/)
* [Atlassian: How to ace internal documentation](https://www.atlassian.com/work-management/knowledge-sharing/documentation)
* [Mastering the Art of Software Documentation: A Comprehensive Guide for Developers and Tech Professionals](https://medium.com/@nomannayeem/mastering-the-art-of-software-documentation-a06aa5d7e697)
* [Why documentation matters, and why you should include it in your code](https://www.freecodecamp.org/news/why-documentation-matters-and-why-you-should-include-it-in-your-code-41ef62dd5c2f/)
