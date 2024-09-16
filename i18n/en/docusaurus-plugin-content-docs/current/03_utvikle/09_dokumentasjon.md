---
sidebar_position: 8
title: Documentation
---

# Documentation

:::tip In Short
All development projects must be documented. This is not only important for the continuity of the project but also for documenting security-related measures and any incidents.
:::

Documentation is often seen as a necessary evil, and we are not always good enough at documenting our projects. Many believe that the source code is the best documentation, but it only says how an application works, not necessarily why it works the way it does, or what the actual intention is.

There are many reasons why we need to document the solution we are building; the most obvious is to ensure that new team members can understand what the project is about and also to ensure that information does not only live in the heads of individuals. Another important aspect of this is the documentation concerning the security of the project. If we do not document what measures are taken and why, or what threats we face and how we handle them, we place a huge responsibility on the team members who come after us: What seems like a logical and reasonable solution given a security context can seem backward and cumbersome to someone without the same context and competence, and we risk that important measures are removed to _simplify_ the solution - at the expense of security.

## Documentation Solution
The project must find a solution for where the documentation is stored that makes sense for the project. Remember that good documentation is as sensitive as the source code and must be treated accordingly. In many cases, it may be wise to use tools that support version control - in many cases, it may be wise to place the documentation together with the source code, or in separate repositories that can be used, for example, with Azure DevOps wiki.

## What Should Be Documented
What we should document will vary from project to project. We should always have a [design](../02_design/02_systemskisser) that provides insight into, for example, infrastructure, IAM, and data flow so that it is possible to review this at a later date.

The threat model must always be documented and maintained, and any mitigating measures must also be documented.

OWASP Top 10 has several points that can relate to the development environment and its setup, so if there are special configurations that need to be in place, this should also be documented to avoid weaknesses or vulnerabilities that arise if someone forgets important steps that are not written down.

One must also consider the criticality of the solution; if it is a system with 24/7 uptime requirements and is critical for the customer, the documentation must reflect this so that even the least experienced person on the team can troubleshoot problems without knowing the solution in detail.

# More Information
* [Mastering the Art of Software Documentation: A Comprehensive Guide for Developers and Tech Professionals](https://medium.com/@nomannayeem/mastering-the-art-of-software-documentation-a06aa5d7e697)
* [Why documentation matters, and why you should include it in your code](https://www.freecodecamp.org/news/why-documentation-matters-and-why-you-should-include-it-in-your-code-41ef62dd5c2f/)
