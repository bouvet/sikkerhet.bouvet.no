---
title: Security Checklist
---
import Link from "@docusaurus/Link";

# Security Checklist
Security isn't just about technical measures and code scanning, but much more. This checklist provides a starting point for assessing the level of security, responsibility, and risk in deliveries, and all development teams should relate to its content unless otherwise agreed with the customer.

It's not a given that all points are relevant for every project, or that implementing all measures is desirable. Each team and delivery manager must assess cost/benefit and what responsibility and risk is assumed by not introducing measures. Security requires continuous work, so review the checklist regularly to see if there are measures that can or should be introduced so that nothing is overlooked.

Download [the checklist](https://raw.githubusercontent.com/bouvet/sikkerhet.bouvet.no/main/docs/checklist.md) and implement it as part of the source code in your project!

## Plan
1. [Is it clear what responsibilities we have in the delivery, and is the rest of the responsibility clearly allocated?](/en/plan/roles_and_responsibilities)
2. [Are the system’s data classified and handled accordingly?](/en/plan/data_and_classification)
3. [Are data in the development and test environments also handled according to the classification?](/en/plan/data_and_classification)
4. [If the application becomes unavailable for shorter or longer periods, what consequences does this have for us and the customer?](/en/plan/business_continuity)
5. [Is there a defined SLA for the application?](/en/plan/business_continuity)
6. [In the event of an incident, have we clarified who should be contacted at Bouvet and at the customer?](/en/plan/business_continuity)
7. [Is there a defined plan for how and how often backups should be taken?](/en/plan/business_continuity)
8. [Is there a defined plan for disaster recovery?](/en/plan/business_continuity)
9. [Has the team clarified which tools should be used and how they should be handled?](/en/plan/tools)
10. [Have control mechanisms been defined to maintain security in the project?](/en/plan/security_checkpoints)

## Design
1. [Is it clear what security requirements apply to the solution?](/en/design/security_requirements)
2. [Have the necessary sketches/diagrams of the system been created and updated?](/en/design/system_diagrams)
3. [Does the team have the necessary overview of the network the system uses?](/en/design/system_diagrams)
4. [Are the environments segregated to reduce exposure in the event of incidents?](/en/design/segregation_of_environments)
5. [Has necessary authentication been set up for accessing the system?](/en/design/authentication_and_authorization)
6. [Has necessary authorization been set up for actions in the system?](/en/design/authentication_and_authorization)
7. [Has threat modeling of the solution been conducted?](/en/design/threat_modelling)
8. [Does the team have the necessary expertise for the project?](/en/design/competence_building)

## Develop
1. [Are the development environments well described?](/en/develop/development_environment)
2. [Are secrets and similar items handled according to best practices?](/en/develop/secrets)
3. [Is data from other systems validated?](/en/develop/data_validation)
4. [Are there routines to protect against today’s most common attack types?](/en/develop/security_practices)
5. [Are there routines to protect against software supply chain attacks?](/en/develop/software_supply_chain)
6. [Are there routines to secure internal components operated by the team?](/en/develop/internal_components)
7. [Is security analyzed through testing or other forms of analysis?](/en/develop/security_testing)
8. [Is necessary information about the system documented, updated, and stored securely?](/en/develop/documentation)

## Deploy
1. [Have automated security measures been set up?](/en/deploy/cicd)
2. [Does the team have procedures to secure the build environment?](/en/deploy/build)
3. [Is a review conducted before deployment?](/en/deploy/deploy)
4. [Is penetration testing planned in connection with deployment?](/en/deploy/pentest)

## Operate
1. [Has the team verified that the network diagram is correctly implemented?](/en/manage/verify_design)
2. [If the customer or others require an audit of the solution, has the team planned how this can be carried out?](/en/manage/audit)
3. [Has the necessary logging been set up to detect and get an overview of unwanted incidents?](/en/manage/logging_monitoring)
4. [Are logs stored so that they cannot be tampered with?](/en/manage/logging_monitoring)
5. [Does the team have a routine to protect against vulnerable dependencies?](/en/manage/dependency_management)
6. [Does the team have a routine for practicing system recovery?](/en/manage/preparedness)
7. [Does the team have a procedure for incident handling and a contingency plan if the solution is attacked or goes down?](/en/manage/contingency_planning_and_incident_management)
