---
title: "Security Checklist"
weight: 2
translationKey: checklist
description: >
  Security isn't just about technical measures and code scanning, but much more. This checklist provides a starting point for assessing the level of security, responsibility and risk in deliveries. All development teams should relate to its content unless otherwise agreed with the customer.
---

It's not a given that all points are relevant for every project, or that implementing all measures is desirable. Each delivery manager must assess cost/benefit and what responsibility and risk is assumed by not introducing measures. Security requires continuous work, so review the checklist regularly to see if there are measures that can or should be introduced so that nothing is overlooked.

Download the checklist and implement it as part of the source code in your project!

## Plan
1. [Is it clear what responsibilities we have in the delivery, and is the rest of the responsibility clearly allocated?]({{< relref "plan/roles-and-responsibilities.md" >}})
2. [Are the system’s data classified and handled accordingly?]({{< relref "plan/data-and-classification.md" >}})
3. [Are data in the development and test environments also handled according to the classification?]({{< relref "plan/data-and-classification.md#data-for-use-during-development-and-testing" >}})
4. [If the application becomes unavailable for shorter or longer periods, what consequences does this have for us and the customer?]({{< relref "plan/business-continuity.md" >}})
5. [Is there a defined SLA for the application?]({{< relref "plan/business-continuity.md#customer-expectations" >}})
6. [In the event of an incident, have we clarified who should be contacted at Bouvet and at the customer?]({{< relref "manage/incident-response.md#what-the-team-must-control" >}})
7. [Is there a defined plan for how and how often backups should be taken?]({{< relref "plan/business-continuity.md#backup" >}})
8. [Is there a defined plan for disaster recovery?]({{< relref "plan/business-continuity.md#disaster-recovery" >}})
9. [Has the team clarified which tools should be used and how they should be handled?]({{< relref "develop/dev_environments.md#tools" >}})
10. [Have control mechanisms been defined to maintain security in the project?]({{< relref "plan/security-checkpoints.md" >}})
11. [If the solution uses AI, has it been clarified how AI components, models, and data will be handled?]({{< relref "develop/documentation.md#documentation-of-ai-systems" >}})

## Design
1. [Is it clear what security requirements apply to the solution?]({{< relref "design/security-requirements.md" >}})
2. [Have the necessary sketches/diagrams of the system been created and updated?]({{< relref "design/system-diagrams-and-drawings.md" >}})
3. [Does the team have the necessary overview of the network the system uses?]({{< relref "design/networking.md" >}})
4. [Are the environments segregated to reduce exposure in the event of incidents?]({{< relref "design/segregation.md" >}})
5. [Has necessary authentication been set up for accessing the system?]({{< relref "design/authentication-and-authorization.md" >}})
6. [Has necessary authorization been set up for actions in the system?]({{< relref "design/authentication-and-authorization.md" >}})
7. [Has threat modeling of the solution been conducted?]({{< relref "design/threat-modelling.md" >}})
8. [Does the team have the necessary expertise for the project?]({{< relref "competence-building.md" >}})
9. [If the solution uses AI, are AI-specific security requirements defined?]({{< relref "design/security-requirements.md" >}})

## Develop
1. [Are the development environments well described?]({{< relref "develop/dev_environments.md" >}})
2. [Are secrets and similar items handled according to best practices?]({{< relref "develop/secrets.md" >}})
3. [Is data from other systems validated?]({{< relref "develop/data-validation.md" >}})
4. [Are there routines to protect against today’s most common attack types?]({{< relref "develop/security-practices.md" >}})
5. [Are there routines to protect against software supply chain attacks?]({{< relref "develop/software-supply-chain.md" >}})
6. [Are there routines to secure internal components operated by the team?]({{< relref "manage/dependency-management.md#internal-components-operated-by-the-team" >}})
7. [Is security analyzed through testing or other forms of analysis?]({{< relref "develop/security-testing.md" >}})
8. [Is necessary information about the system documented, updated, and stored securely?]({{< relref "develop/documentation.md" >}})
9. [Are there routines for code review, and does the team know what to look for?]({{< relref "develop/code-review.md" >}})
10. [If the solution uses AI, are models, training data, and evaluation results documented?]({{< relref "develop/documentation.md#documentation-of-ai-systems" >}})

## Deploy
1. [Have automated security measures been set up?]({{< relref "deploy/cicd.md" >}})
2. [Does the team have procedures to secure the build environment?]({{< relref "deploy/building.md" >}})
3. [Is a review conducted before deployment?]({{< relref "deploy/deploy.md" >}})
4. [Is security testing, including penetration testing planned for as part of the deployment?]({{< relref "develop/security-testing.md#when-penetration-testing-is-relevant" >}})
5. [If the solution uses AI, has it been verified that AI components and models function as expected?]({{< relref "manage/verify-the-design.md#verification-of-ai-systems" >}})

## Manage
1. [Has the team verified that the network diagram is correctly implemented?]({{< relref "manage/verify-the-design.md" >}})
2. [Can the team show that requirements have been translated into implemented controls, if the customer or others ask for insight?]({{< relref "manage/verify-the-design.md" >}})
3. [Has the necessary logging been set up to detect and get an overview of unwanted incidents?]({{< relref "manage/logging-monitoring.md" >}})
4. [Are logs stored so that they cannot be tampered with?]({{< relref "manage/logging-monitoring.md" >}})
5. [Does the team have a routine to protect against vulnerable dependencies?]({{< relref "manage/dependency-management.md" >}})
6. [Does the team have a routine for practicing system recovery?]({{< relref "manage/preparedness.md" >}})
7. [Does the team have a procedure for incident handling and a contingency plan if the solution is attacked or goes down?]({{< relref "manage/incident-response.md" >}})
8. [If the solution uses AI, is the model's performance and behavior monitored in production?]({{< relref "manage/logging-monitoring.md#logging-and-monitoring-of-ai-responses" >}})