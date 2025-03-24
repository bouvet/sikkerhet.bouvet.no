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

If no other securiy requirements have been defined, the [security checklist]({{< ref "checklist.md" >}}) can be a good starting point. It covers the major elements, and can be completed by most teams without outside assistance. Through using this checklist the team will get an overview and a status of the delivery - with insights into potential weaknesses and threats. 

If the delivery requires a more through checklist, [OWASPs Application Verification Standard (ASVS)](https://owasp.org/www-project-application-security-verification-standard/) might be a good alternative. This is a more comprehensive checklist that offers three levels of testing:

* Level 1: Black box - all testing is done against the running system
* Level 2: Everything from level 1, with additional checks targeting process, technology and the implementation.
* Level 3: Thourough assessment covering all previous checks, as well as more detailed testing of the environment, architecture and more. 

## More Information
* [Lovdata: Lov om digital sikkerhet (digitalsikkerhetsloven, in Norwegian)](https://lovdata.no/dokument/NL/lov/2023-12-20-108)
* [Datatilsynet: Programvareutvikling med innebygd personvern - Krav (in Norwegian)](https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/programvareutvikling-med-innebygd-personvern/krav/)
* [Security Checklist]({{< ref "checklist.md" >}})
* [OWASPs Application Verification Standard (ASVS)](https://owasp.org/www-project-application-security-verification-standard/)
