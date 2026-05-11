---
title: "Audit or Review of Project or Delivery"
weight: 2
translationKey: audit
description: >
  Customer or recipient may require an audit of the delivery. The team must then be able to document requirements, design choices, security measures, and how these have actually been followed up in practice.
---

Not all deliveries are audited, but if a customer or recipient asks for an audit, the team must be able to show more than that the solution works. An audit is often about documenting that requirements are understood, that the right controls are chosen, and that these are actually implemented and followed up.

Such an audit will typically be anchored in a contract, legal requirement, or internal governance requirements at the customer. In practice, it is most relevant when delivering or after the solution has been in operation for a while.

## What Must Be Documented?
Requirements will vary, but the team should at minimum be able to show:
* which requirements the delivery must meet
* which design choices were made and why
* which security measures are implemented
* who is responsible for operations, access, and follow-up
* which deviations, risk assessments, and accepted exceptions exist

This does not necessarily mean large document packages. What is important is that the documentation is current, traceable, and accessible to those who actually need it.

## Before an Audit
The easiest way to handle audits is to be prepared before the customer asks. The team should therefore have a conscious approach to where documentation is located, who owns it, and how it is kept current.

It is particularly useful to clarify:
* who represents the team in the audit
* where key documents and evidence are sourced from
* which parts of the documentation can be shared directly, and what requires special consideration
* how deviations, exceptions, and risk decisions are documented

An audit becomes cumbersome if information exists but is scattered across different systems, folders, and individuals.

## Typical Evidence in an Audit
An audit will often ask for concrete proof, not just descriptions. This could include:
* [system diagrams]({{< ref "design/system-diagrams-and-drawings.md" >}}) and overview of dependencies
* [security requirements]({{< ref "design/security-requirements.md" >}}) and how they are implemented in design and operations
* [documentation]({{< ref "develop/documentation.md" >}}) of architecture, processes, and decisions
* results from testing, verification, and reviews
* logs or reports showing that controls are actually active
* overview of roles, access, and approvals

If the customer has declined recommended measures or additional services, this must also be clearly documented. It is important both for expectation management and to explain remaining risk.

## Share Only What Is Necessary
An audit does not mean all documentation should be shared uncritically. Some material may contain sensitive information about vulnerabilities, internal networks, access, or weaknesses not yet closed.

The team should therefore consider:
* whether the audit requires full insight or whether summaries/evidence suffice
* whether parts of the material must be protected or shared in controlled form
* how access to audit material is logged and restricted

The goal is to be open enough to document compliance without exposing more than necessary.

## Audit of AI Systems
For solutions with AI components, the team must additionally be able to document:
* which models, versions, and data sources are used
* which requirements apply to quality, security, and use of the model
* how evaluation results have been assessed and approved
* how changes to model, prompt, policy, or dataset are tracked
* how logging and monitoring support operations, incident handling, and traceability

It will also be natural to be able to explain:
* what the system's intended use and limitations are
* which human control points exist
* how the team detects degradation, misuse, or unexpected model behavior

See also:
* [Documentation]({{< ref "develop/documentation.md" >}}) for structure of technical and AI-related documentation
* [Security Control Points]({{< ref "plan/security-checkpoints.md" >}}) for which gates and decisions should be documented
* [Verify the Design]({{< ref "manage/verify-the-design.md" >}}) for how the team verifies that documentation and actual solution align

## After the Audit
An audit is not finished when the meeting is over. The team must ensure that findings, deviations, and recommendations are assessed and followed up like any other improvement work.

At minimum:
* register findings with clear ownership
* assess severity and timeline for follow-up
* document any disagreements or clarifications with the customer
* update design, routines, or documentation if the audit revealed gaps

## Keep It Simple and Organized
The most important thing is rarely to produce more documentation. What matters is being able to clearly answer what was built, why it was built that way, and what evidence shows that the controls work.

## Further reading
* [OWASP Application Security Verification Standard (ASVS)](https://owasp.org/www-project-application-security-verification-standard/)
* [OWASP Artificial Intelligence Security Verification Standard (AISVS)](https://owasp.org/www-project-artificial-intelligence-security-verification-standard-aisvs-docs/)
* [Nasjonal sikkerhetsmyndighet: Grunnprinsipper for IKT-sikkerhet (in Norwegian)](https://nsm.no/regelverk-og-hjelp/rad-og-anbefalinger/grunnprinsipper-for-ikt-sikkerhet/)
