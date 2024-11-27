---
title: Security Checklist
---
import Link from "@docusaurus/Link";

# Security Checklist

Security is not just about technical measures and code scanning, but much more. This checklist provides a starting point for assessing the security level, responsibility, and risk in deliveries, and all development teams should have a relationship to the content unless otherwise agreed with the customer.

Not all points are relevant in all projects, nor is it always desirable to implement all measures. Each team and delivery manager must assess cost/benefit and the responsibility and risk involved in not implementing measures. Security requires continuous work, so review the checklist regularly to see if there are measures that can or should be implemented to avoid overlooking anything.

Download the <Link to="https://raw.githubusercontent.com/bouvet/sikkerhet.bouvet.no/main/docs/checklist.md">checklist</Link> and implement it as part of the source code in your project!

## Plan

1. <Link to="/en/plan/roles_and_responsibilities">Responsibility Distribution</Link>: Is it clear what responsibility we have in the delivery, and is other responsibility clearly distributed? Is there a risk of confusion about responsibility in the future, for example, in connection with security incidents?
    * If Bouvet hosts the solution on behalf of the customer, it falls under our ISO 27001 certification.
    * This means that the delivery team has some additional responsibility for information security. Refer to SOA for further information.
    1. If we manage; what responsibility do we have for infrastructure and possibly infrastructure as code (IAC)?
    2. If others manage, how is the application handed over to them?
        1. Do we have a clear division of responsibility between us and others?
2. <Link to="/en/plan/data_and_classification">Classification and Data</Link>
    1. Has the application been assessed in terms of data classification? What requirements follow from the classification:
    2. Is it clear whether and how personal data is processed in the application?
    3. How is test data handled in the project?
        * How is the anonymity or sensitivity and privacy concerns maintained?
3. <Link to="/en/plan/business_continuity">Backup, Disaster Recovery, and Business Continuity Planning</Link>
    1. Is there a plan for how and how often backups should be taken?
        * Remember to also back up source code systems and other relevant tools!
    2. How are sensitive data secured in connection with backups, including data deletion?
    3. Is there a defined SLA for the application?
        * What expectations does the customer have, and have we prepared ourselves correctly to meet these?
    4. In the event of an incident, have we clarified who should be contacted at Bouvet and with the customer?
    5. Is there a defined disaster recovery plan?
        * Has the team documented and possibly tested how the application can be made available in sudden incidents, for example, in the event of data center failure at us or external suppliers, including cloud providers?
    6. If the application becomes unavailable for shorter or longer periods, what consequences will this have for us and the customer?
        * Are there alternatives or workarounds for the solution?
        * Are these documented and described, including any extra work that needs to be done after the solution becomes available again?
        * Are there other consequences for us or the customer that need to be taken into account?
4. <Link to="/en/plan/tools">Has the team defined which tools should be used and how these should be handled?</Link>
    1. Are source code systems set up with reasonable policies?
        * This can include protected main branch, specific branching strategy, code review in connection with PR, documenting changes?
    2. Pipelines used in connection with building, deployment, testing, and more?
    3. Do we have control over where data and source code are stored?
        * Some companies have restrictions on where data can be stored, for example, only in domestic data centers, within the EU, or in countries covered by cooperation agreements.
5. <Link to="/en/plan/security_checkpoints">What control mechanisms should we have during the project?</Link>
    * For design changes
    * When committing code changes
    * In pull requests
    * During build and deployment
    * Others?

## Design

1. <Link to="/en/design/security_requirements">Is it clear what security requirements apply to the solution?</Link>
    1. Standard requirements
    2. Customer requirements
    3. Legal requirements
2. <Link to="/en/design/system_diagrams">Are the following system sketches and diagrams created?</Link>
    * This is important documentation for assessing risk and potential threats that may affect the solution, and also in connection with onboarding team members or handover.
    1. Overall system sketch with the most important logical components
    2. Detailed network sketch with resources, services, and network
    3. Data flow diagram
    4. IAM diagram
    5. Key dependencies – other systems, services, resources, on-prem/cloud
3. <Link to="/en/design/segregation_of_environments">How will the segregation of environments be handled?</Link>
4. <Link to="/en/design/authentication_and_authorization">How is authentication and authorization handled?</Link>
5. <Link to="/en/design/threat_modelling">Has threat modeling been carried out for the solution?</Link> Does the team have routines for
    1. Regular updating of the threat model
    2. Follow-up of findings
    3. Risk mitigation?
    4. Is it clear who owns the risk and responsibility - what risk can be accepted?
        * If the total risk exceeds a certain limit, the team should consider a dedicated period to reduce the risk to an acceptable level.
6. <Link to="/en/design/competence_building">What is the need for skill development within the team</Link>, and is there a plan for how this will be handled?

## Develop

1. <Link to="/en/develop/development_environment">Are the development environments well described?</Link>
    1. Are dedicated dev servers/dev boxes, laptops, others used?
        * Does the team have a contact point with the supplier of these?
    2. Is the setup well documented, to avoid errors or weaknesses due to misconfiguration?
        * Applies to both development environment and runtime environment.
2. <Link to="/en/develop/secrets">How are secrets, keys, connection strings, and similar handled?</Link>
    1. Is the source code scanned for these?
    2. Are secrets rotated at regular intervals?
    3. Has the team checked that cryptographic keys and hash algorithms follow current best practice?
3. <Link to="/en/develop/data_validation">How is data validation handled for data retrieved from other systems?</Link>
4. <Link to="/en/develop/security_practices">Has the team implemented any routines to protect against common attack types, e.g., as described in OWASP Top 10?</Link>
5. <Link to="/en/develop/software_supply_chain">How does the team assess and protect against software supply chain attacks?</Link>
    1. Are assessments made regarding using a dependency vs. creating it themselves?
6. <Link to="/en/Develop/Internal_Components">Does the application require third-party software that the team must manage?</Link> E.g., web servers, messaging services, other types of server components?
    1. Does the team have a routine for keeping these updated?
    2. Are these included in any threat assessments?
7. <Link to="/en/Develop/Security_Testing">Does the team have a routine for security testing, or is this validated in other ways?</Link>
    1. SAST
    2. DAST
8. <Link to="/en/develop/documentation">How does the team handle documentation?</Link>
    1. What is documented beyond the basics in this checklist?
    2. Where is the documentation stored?
    3. Does the team have a routine for keeping documentation updated?

## Deploy

1. <Link to="/en/deploy/cicd">How is the solution built and deployed?</Link>
    1. When using pipelines, are these subject to the same regime as the application code in terms of change management?
    2. <Link to="/en/deploy/build">Does the team have a relationship with securing the build environment?</Link>
    3. <Link to="/en/deploy/deploy">Is a review conducted before deployment?</Link>
2. <Link to="/en/deploy/pentest">Is penetration testing planned in connection with deployment?</Link>

## Manage

1. <Link to="/en/manage/verify_design">Has the team verified that the network diagram is correctly implemented?</Link>
    1. That expected ports are open to specified IP addresses
    2. That there are no unexpected or unnecessary ports or services exposed?
    3. That traffic is correctly filtered by the firewall towards the solution?
2. <Link to="/en/manage/audit">If the customer or others require an audit of the solution, has the team planned how this can be conducted?</Link>
    * Such testing should be able to be conducted on real data, but preferably in a separate isolated environment.
3. <Link to="/en/manage/logging_monitoring">Logging is important if an incident occurs.</Link> Does the team have control over
    1. Logging sufficient information to detect incidents – NB: Remember GDPR
