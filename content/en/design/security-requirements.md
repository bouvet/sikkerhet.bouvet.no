---
title: "Security Requirements"
weight: 1
translationKey: req
description: >
  How can one build security into a solution if there are no well-defined security requirements?
---

Some requirements are implicit, such as the use of HTTPS/TLS, while others will be explicit and defined by customers or third parties. Even if the customer has no specific requirements, it is still important for the delivery team to create a list of requirements to ensure that the project's framework is documented.

Most projects must adhere to various requirements from Bouvet, the customer, and external parties. All development teams must have control over the requirements that apply to the delivery:
* From Bouvet (where applicable)
* From the customer
* Legal requirements

Legal requirements can include general requirements related to [privacy]({{< ref "plan/data-and-classification.md#privacy" >}}), but many industries operate with more specific regulations that impose additional requirements.

In many cases, it is clear to both Bouvet and the customer what applies, but it is important that the team verifies this before starting to develop the solution to avoid costly and time-consuming surprises. Regardless of what is defined and where, the team should document the requirements they adhere to so that this information is preserved for the future.

## Basic requirements

If no other security requirements have been defined, the [security checklist]({{< ref "checklist.md" >}}) can be a good starting point. It covers the major elements and can be completed by most teams without outside assistance. By using this checklist, the team gets an overview of the delivery status, including potential weaknesses and threats.

If the delivery requires a more thorough checklist, [OWASPs Application Verification Standard (ASVS)](https://owasp.org/www-project-application-security-verification-standard/) might be a good alternative. This is a more comprehensive checklist that offers three levels of testing:

* Level 1: Black box - all testing is done against the running system
* Level 2: Everything from level 1, with additional checks targeting process, technology and the implementation.
* Level 3: Thorough assessment covering all previous checks, as well as more detailed testing of the environment, architecture, and more.

## Security requirements for AI systems
If the solution includes, or depends on, artificial intelligence (AI), additional requirements are needed beyond standard security requirements. AI systems introduce their own risk dimensions and these should be handled explicitly at the requirements level.

Security requirements for AI systems should cover:

* **Security**: What model behavior is acceptable, and how should the system respond to anomalies? How is the system protected against misuse or manipulation?
* **Privacy and data use**: What data does the AI system use for training or inference? How is personal data handled, and how do you ensure the system is not used for unintended purposes?
* **Monitoring and misuse**: How should the system be monitored for abnormal behavior? What are acceptable use cases, and how is misuse detected?

For detailed implementation guidance, see [Using Artificial Intelligence]({{< ref "plan/ai.md" >}}).

## More Information
* [Lovdata: Lov om digital sikkerhet (digitalsikkerhetsloven, in Norwegian)](https://lovdata.no/dokument/NL/lov/2023-12-20-108)
* [Datatilsynet: Programvareutvikling med innebygd personvern - Krav (in Norwegian)](https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/programvareutvikling-med-innebygd-personvern/krav/)
* [Security Checklist]({{< ref "checklist.md" >}})
* [OWASPs Application Verification Standard (ASVS)](https://owasp.org/www-project-application-security-verification-standard/)
* [OWASP Artificial Intelligence Security Verification Standard (AISVS)](https://owasp.org/www-project-artificial-intelligence-security-verification-standard-aisvs-docs/)
* [OWASP AI Agent Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html)
