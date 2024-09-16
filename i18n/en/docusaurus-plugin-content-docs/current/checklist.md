---
title: Security Checklist
---

# Security Checklist

Security is not just about technical measures and code scanning, but much more. This checklist provides a starting point for assessing the security level, responsibility, and risk in deliveries, and all development teams should have a relationship to the content unless otherwise agreed with the customer.

Not all points are relevant in all projects, nor is it always desirable to implement all measures. Each team and delivery manager must assess cost/benefit and the responsibility and risk involved in not implementing measures. Security requires continuous work, so review the checklist regularly to see if there are measures that can or should be implemented to avoid overlooking anything.

Download the [checklist](https://raw.githubusercontent.com/bouvet/sikkerhet.bouvet.no/main/docs/checklist.md) and implement it as part of the source code in your project!

## Plan
1. [Responsibility Distribution](./01_plan/01_ansvarsfordeling): Is it clear what responsibility we have in the delivery, and is other responsibility clearly distributed? Is there a risk of confusion about responsibility in the future, for example, in connection with security incidents?
    * If Bouvet hosts the solution on behalf of the customer, it falls under our ISO 27001 certification.
    * This means that the delivery team has some additional responsibility for information security. Refer to SOA for further information.
    1. If we manage; what responsibility do we have for infrastructure and possibly infrastructure as code (IAC)?
    2. If others manage, how is the application handed over to them?
        1. Do we have a clear division of responsibility between us and others?
2. [Classification and Data](./01_plan/02_data_og_klassifisering)
    1. Has the application been assessed in terms of data classification? What requirements follow from the classification:
    2. Is it clear whether and how personal data is processed in the application?
    3. How is test data handled in the project?
        * How is the anonymity or sensitivity and privacy concerns maintained?
3. [Backup, Disaster Recovery, and Business Continuity Planning](./01_plan/03_business_continuity)
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
4. [Has the team defined which tools should be used and how these should be handled?](./01_plan/04_verktoy_og_bruk)
    1. Are source code systems set up with reasonable policies?
        * This can include protected main branch, specific branching strategy, code review in connection with PR, documenting changes?
    2. Pipelines used in connection with building, deployment, testing, and more?
    3. Do we have control over where data and source code are stored?
        * Some companies have restrictions on where data can be stored, for example, only in domestic data centers, within the EU, or in countries covered by cooperation agreements.
5. [What control mechanisms should we have during the project?](./01_plan/05_sikkerhetsgater)
    * For design changes
    * When committing code changes
    * In pull requests
    * During build and deployment
    * Others?

## Design
1. [Is it clear what security requirements apply to the solution?](./02_design/01_sikkerhetskrav)
    1. Standard requirements
    2. Customer requirements
    3. Legal requirements
2. [Are the following system sketches and diagrams created?](./02_design/02_systemskisser)
    * This is important documentation for assessing risk and potential threats that may affect the solution, and also in connection with onboarding team members or handover.
    1. Overall system sketch with the most important logical components
    2. Detailed network sketch with resources, services, and network
    3. Data flow diagram
    4. IAM diagram
    5. Key dependencies – other systems, services, resources, on-prem/cloud
3. [How will the segregation of environments be handled?](./02_design/03_segregering)
4. [How is authentication and authorization handled?](./02_design/04_autentisering)
5. [Has threat modeling been carried out for the solution?](./02_design/05_trusselmodellering) Does the team have routines for
    1. Regular updating of the threat model
    2. Follow-up of findings
    3. Risk mitigation?
    4. Is it clear who owns the risk and responsibility - what risk can be accepted?
        * If the total risk exceeds a certain limit, the team should consider a dedicated period to reduce the risk to an acceptable level.
6. [What is the need for skill development within the team](./02_design/06_kompetanseheving), and is there a plan for how this will be handled?

## Develop
1. [Are the development environments well described?](./03_develop/01_utviklingsmiljoer)
    1. Are dedicated dev servers/dev boxes, laptops, others used?
        * Does the team have a contact point with the supplier of these?
    2. Is the setup well documented, to avoid errors or weaknesses due to misconfiguration?
        * Applies to both development environment and runtime environment.
2. [How are secrets, keys, connection strings, and similar handled?](./03_develop/02_secrets)
    1. Is the source code scanned for these?
    2. Are secrets rotated at regular intervals?
    3. Has the team checked that cryptographic keys and hash algorithms follow current best practice?
3. [How is data validation handled for data retrieved from other systems?](./03_develop/03_datavalidering)
4. [Has the team implemented any routines to protect against common attack types, e.g., as described in OWASP Top 10?](./03_develop/04_sikkerhetspraksiser)
5. [How does the team assess and protect against software supply chain attacks?](./03_develop/05_software_supply_chain)
    1. Are assessments made regarding using a dependency vs. creating it themselves?
6. [Does the application require third-party software that the team must manage?](./03_develop/06_interne_komponenter) E.g., web servers, messaging services, other types of server components?
    1. Does the team have a routine for keeping these updated?
    2. Are these included in any threat assessments?
7. [Does the team have a routine for security testing, or is this validated in other ways?](./03_develop/07_sikkerhetstesting)
    1. SAST
    2. DAST
8. [How does the team handle documentation?](./03_develop/08_dokumentasjon)
    1. What is documented beyond the basics in this checklist?
    2. Where is the documentation stored?
    3. Does the team have a routine for keeping documentation updated?

## Deploy
1. [How is the solution built and deployed?](./04_deploy/01_cicd)
    1. When using pipelines, are these subject to the same regime as the application code in terms of change management?
    2. [Does the team have a relationship with securing the build environment?](./04_deploy/02_bygg)
    3. [Is a review conducted before deployment?](./04_deploy/03_deploy)
2. [Is penetration testing planned in connection with deployment?](./04_deploy/04_pentesting)

## Manage
1. [Has the team verified that the network diagram is correctly implemented?](./05_manage/01_verifisering_av_design)
    1. That expected ports are open to specified IP addresses
    2. That there are no unexpected or unnecessary ports or services exposed?
    3. That traffic is correctly filtered by the firewall towards the solution?
2. [If the customer or others require an audit of the solution, has the team planned how this can be conducted?](./05_manage/02_audit)
    * Such testing should be able to be conducted on real data, but preferably in a separate isolated environment.
3. [Logging is important if an incident occurs.](./05_manage/03_logging_monitorering) Does the team have control over
    1. Logging sufficient information to detect incidents – NB: Remember GDPR
