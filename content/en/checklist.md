---
title: "Security Checklist"
weight: 2
translationKey: checklist
description: >
  Security isn't just about technical measures and code scanning, but much more. This checklist provides a starting point for assessing the level of security, responsibility, and risk in deliveries, and all development teams should relate to its content unless otherwise agreed with the customer.
---

It's not a given that all points are relevant for every project, or that implementing all measures is desirable. Each team and delivery manager must assess cost/benefit and what responsibility and risk is assumed by not introducing measures. Security requires continuous work, so review the checklist regularly to see if there are measures that can or should be introduced so that nothing is overlooked.

Download [the checklist](https://raw.githubusercontent.com/bouvet/sikkerhet.bouvet.no/main/docs/checklist.md) and implement it as part of the source code in your project!

## Plan
1. [Is it clear what responsibilities we have in the delivery, and is the rest of the responsibility clearly allocated?](/plan/roles-and-responsibilities/)
2. [Are the system’s data classified and handled accordingly?](/plan/data-and-classification/)
3. [Are data in the development and test environments also handled according to the classification?](/plan/data-and-classification/#data-for-use-during-development-and-testing)
4. [If the application becomes unavailable for shorter or longer periods, what consequences does this have for us and the customer?](/plan/business-continuity/)
5. [Is there a defined SLA for the application?](/plan/business-continuity/)
6. [In the event of an incident, have we clarified who should be contacted at Bouvet and at the customer?](/plan/business-continuity/)
7. [Is there a defined plan for how and how often backups should be taken?](/plan/business-continuity/)
8. [Is there a defined plan for disaster recovery?](/plan/business-continuity/)
9. [Has the team clarified which tools should be used and how they should be handled?](/plan/tools/)
10. [Have control mechanisms been defined to maintain security in the project?](/plan/security-checkpoints/)

## Design
1. [Is it clear what security requirements apply to the solution?](/design/security-requirements/)
2. [Have the necessary sketches/diagrams of the system been created and updated?](/design/system-diagrams-and-drawings/)
3. [Does the team have the necessary overview of the network the system uses?](/design/networking/)
4. [Are the environments segregated to reduce exposure in the event of incidents?](/design/segregation/)
5. [Has necessary authentication been set up for accessing the system?](/design/authentication-and-authorization/)
6. [Has necessary authorization been set up for actions in the system?](/design/authentication-and-authorization/)
7. [Has threat modeling of the solution been conducted?](/design/threat-modelling/)
8. [Does the team have the necessary expertise for the project?](/design/competence-building/)

## Develop
1. [Are the development environments well described?](/develop/dev_environments/)
2. [Are secrets and similar items handled according to best practices?](/develop/secrets)
3. [Is data from other systems validated?](/develop/data-validation/)
4. [Are there routines to protect against today’s most common attack types?](/develop/security-practices/)
5. [Are there routines to protect against software supply chain attacks?](/develop/software-supply-chain/)
6. [Are there routines to secure internal components operated by the team?](/develop/internal-components/)
7. [Is security analyzed through testing or other forms of analysis?](/develop/security-testing/)
8. [Is necessary information about the system documented, updated, and stored securely?](/develop/documentation)

## Deploy
1. [Have automated security measures been set up?](/deploy/cicd)
2. [Does the team have procedures to secure the build environment?](/deploy/building/)
3. [Is a review conducted before deployment?](/deploy/deploy/)
4. [Is penetration testing planned in connection with deployment?](/deploy/pentesting/)

## Manage
1. [Has the team verified that the network diagram is correctly implemented?](/manage/verify-the-design/)
2. [If the customer or others require an audit of the solution, has the team planned how this can be carried out?](/manage/audit)
3. [Has the necessary logging been set up to detect and get an overview of unwanted incidents?](/manage/logging-monitoring/)
4. [Are logs stored so that they cannot be tampered with?](/manage/logging-monitoring/)
5. [Does the team have a routine to protect against vulnerable dependencies?](/manage/dependency-management/)
6. [Does the team have a routine for practicing system recovery?](/manage/preparedness)
7. [Does the team have a procedure for incident handling and a contingency plan if the solution is attacked or goes down?](/manage/incident-response/)