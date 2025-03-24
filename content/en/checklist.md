---
title: "Security Checklist"
weight: 2
translationKey: checklist
description: >
  Security isn't just about technical measures and code scanning, but much more. This checklist provides a starting point for assessing the level of security, responsibility, and risk in deliveries, and all development teams should relate to its content unless otherwise agreed with the customer.
---
Last Modified:

It's not a given that all points are relevant for every project, or that implementing all measures is desirable. Each team and delivery manager must assess cost/benefit and what responsibility and risk is assumed by not introducing measures. Security requires continuous work, so review the checklist regularly to see if there are measures that can or should be introduced so that nothing is overlooked.

Download the checklist and implement it as part of the source code in your project!

## Plan
1. [Is it clear what responsibilities we have in the delivery, and is the rest of the responsibility clearly allocated?]({{< ref "plan/roles-and-responsibilities.md" >}})
2. [Are the system’s data classified and handled accordingly?]({{< ref "plan/data-and-classification.md" >}})
3. [Are data in the development and test environments also handled according to the classification?]({{< ref "plan/data-and-classification/#data-for-use-during-development-and-testing.md" >}})
4. [If the application becomes unavailable for shorter or longer periods, what consequences does this have for us and the customer?]({{< ref "plan/business-continuity.md" >}})
5. [Is there a defined SLA for the application?]({{< ref "plan/business-continuity.md" >}})
6. [In the event of an incident, have we clarified who should be contacted at Bouvet and at the customer?]({{< ref "plan/business-continuity.md" >}})
7. [Is there a defined plan for how and how often backups should be taken?]({{< ref "plan/business-continuity.md" >}})
8. [Is there a defined plan for disaster recovery?]({{< ref "plan/business-continuity.md" >}})
9. [Has the team clarified which tools should be used and how they should be handled?]({{< ref "plan/tools.md" >}})
10. [Have control mechanisms been defined to maintain security in the project?]({{< ref "plan/security-checkpoints.md" >}})

## Design
1. [Is it clear what security requirements apply to the solution?]({{< ref "design/security-requirements.md" >}})
2. [Have the necessary sketches/diagrams of the system been created and updated?]({{< ref "design/system-diagrams-and-drawings.md" >}})
3. [Does the team have the necessary overview of the network the system uses?]({{< ref "design/networking.md" >}})
4. [Are the environments segregated to reduce exposure in the event of incidents?]({{< ref "design/segregation.md" >}})
5. [Has necessary authentication been set up for accessing the system?]({{< ref "design/authentication-and-authorization.md" >}})
6. [Has necessary authorization been set up for actions in the system?]({{< ref "design/authentication-and-authorization.md" >}})
7. [Has threat modeling of the solution been conducted?]({{< ref "design/threat-modelling.md" >}})
8. [Does the team have the necessary expertise for the project?]({{< ref "design/competence-building.md" >}})

## Develop
1. [Are the development environments well described?]({{< ref "develop/dev_environments.md" >}})
2. [Are secrets and similar items handled according to best practices?]({{< ref "develop/secrets.md" >}})
3. [Is data from other systems validated?]({{< ref "develop/data-validation.md" >}})
4. [Are there routines to protect against today’s most common attack types?]({{< ref "develop/security-practices.md" >}})
5. [Are there routines to protect against software supply chain attacks?]({{< ref "develop/software-supply-chain.md" >}})
6. [Are there routines to secure internal components operated by the team?]({{< ref "develop/internal-components.md" >}})
7. [Is security analyzed through testing or other forms of analysis?]({{< ref "develop/security-testing.md" >}})
8. [Is necessary information about the system documented, updated, and stored securely?]({{< ref "develop/documentation.md" >}})

## Deploy
1. [Have automated security measures been set up?]({{< ref "deploy/cicd.md" >}})
2. [Does the team have procedures to secure the build environment?]({{< ref "deploy/building.md" >}})
3. [Is a review conducted before deployment?]({{< ref "deploy/deploy.md" >}})
4. [Is penetration testing planned in connection with deployment?]({{< ref "deploy/pentesting.md" >}})

## Manage
1. [Has the team verified that the network diagram is correctly implemented?]({{< ref "manage/verify-the-design.md" >}})
2. [If the customer or others require an audit of the solution, has the team planned how this can be carried out?]({{< ref "manage/audit.md" >}})
3. [Has the necessary logging been set up to detect and get an overview of unwanted incidents?]({{< ref "manage/logging-monitoring.md" >}})
4. [Are logs stored so that they cannot be tampered with?]({{< ref "manage/logging-monitoring.md" >}})
5. [Does the team have a routine to protect against vulnerable dependencies?]({{< ref "manage/dependency-management.md" >}})
6. [Does the team have a routine for practicing system recovery?]({{< ref "manage/preparedness.md" >}})
7. [Does the team have a procedure for incident handling and a contingency plan if the solution is attacked or goes down?]({{< ref "manage/incident-response.md" >}})
