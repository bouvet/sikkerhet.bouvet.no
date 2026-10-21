---
title: "Security Checkpoints"
weight: 5
translationKey: secgates
description: >
  A security checkpoint is a control point during a project where requirements must be met before proceeding.
---

Depending on the security level a delivery aims to achieve, it may be necessary to define mechanisms for assessing security at fixed points in the development cycle, known as security checkpoints.

These can be defined between logical phases in the project, for example, between the design and development phases, or when transitioning from development to the first release in production. Other and additional checkpoints can also be defined, entirely depending on the requirements the delivery team must adhere to.

{{< figure src="../ibm_relative_cost2.png" >}}

[In a study by IBM](https://www.researchgate.net/figure/IBM-System-Science-Institute-Relative-Cost-of-Fixing-Defects_fig1_255965523) it was determined that defects in applications developed for the U.S. military cost significantly less to fix early in the process compared to later.

By implementing security checkpoints, it becomes easier to catch weaknesses early and to ensure compliance with security and quality requirements. A typical practice using checkpoints could include
* creating a [design]({{< ref "design/system-diagrams-and-drawings.md" >}}) of the project before the development cycle starts
* ensuring that implementation follows the design
* verifying that design and implementation actually match before going into production

## AI-specific security checkpoints
For solutions that use AI, dedicated checkpoints should be established before production deployment. The goal is to ensure that data, model behavior, and operational readiness are reviewed and documented before the solution is exposed in production.

A practical minimum is to introduce the following gates:

### 1. Data review gate
Before model training, fine-tuning, or major changes to the data basis, the team should document:

* which data sources are used, ownership, and permitted usage purpose
* a basic data quality assessment (representativeness, missing values, noise, duplicates)
* identified privacy and security risks in the data basis
* decisions on any data limitations, filtering, or rejected datasets

### 2. Evaluation and V&V gate
Before production, the model should be verified and validated against defined acceptance criteria:

* a documented evaluation setup with relevant test sets and scenarios
* assessment of security and misuse scenarios (for example prompt injection and unwanted tool usage)
* clear boundaries for when the model must not be used without human oversight
* a go/no-go decision with rationale

### 3. Logging and monitoring gate
Before production, the operations team should verify that required observability is in place:

* which events must be logged (model calls, access changes, failures, anomalies)
* how logs are protected against tampering and unauthorized access
* which alerts and thresholds should trigger follow-up
* who is responsible for ongoing monitoring and incident handling

For more on log operations and production follow-up, see [Logging and Monitoring]({{< ref "manage/logging-monitoring.md" >}}).

See also:
* [Documentation]({{< ref "develop/documentation.md" >}}) for what should be documented before and after gate decisions
* [Verify the Design]({{< ref "manage/verify-the-design.md" >}}) for checking that the production solution matches documentation and decisions
* [Audit a Project or Delivery]({{< ref "manage/audit.md" >}}) for which evidence is typically requested

## More Information
* [Dawson, Maurice, et al. "Integrating software assurance into the software development life cycle (SDLC)." Journal of Information Systems Technology and Planning 3.6 (2010): 49-53.](https://d1wqtxts1xzle7.cloudfront.net/43105461/fulltext_stamped-libre.pdf?1456510133=&response-content-disposition=inline%3B+filename%3DIntegrating_Software_Assurance_into_the.pdf&Expires=1719440984&Signature=eH8UCTexOuHmFfCL~FAtaw4tuESm5nRoKrrlOAt~UqP2Od6V7lis-gvCNcmZtLIJYpAQ1LaznsUPbUDIk39imYfEqHeqk9JpODsYN5T4aF32VM6-RhkhIBYRDHL)
* [Red Hat: Security in the software development lifecycle](https://www.redhat.com/en/topics/security/software-development-lifecycle-security)
* [Implementing Smart Security Gates in Modern Software Development](https://blog.secodis.com/2023/11/24/how-security-gates-can-work-efficiently-even-with-devops/)
