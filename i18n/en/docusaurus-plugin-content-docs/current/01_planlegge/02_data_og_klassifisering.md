---
sidebar_position: 2
---

# Data and Classification
:::tip In Short
Most organizations operate with various classification levels for both data and systems. The classification level dictates how data is used, where it is stored, and who can access it. These are key requirements for any development project and must be clarified in advance.
:::

## Classification
Most organizations have routines and processes for data classification, typically distinguishing between these or similar levels:
* Open
* Internal
* Confidential
* Restricted

Depending on this classification, there may be different requirements for securing data. Open data typically has no restrictions, while data classified as "restricted" may have limitations such as:
* strict requirements for access
* information can only be processed or stored in approved systems 
* requires multi-factor authentication before access
* has restrictions regarding the use of cloud services or the geographical location of where data is stored

This needs to be clarified with the client at the start of the project to ensure compliance. If the client does not use data classifications, one should still assess the sensitivity of the data to be processed to ensure that necessary measures are implemented.

## Privacy
If the delivery team is to handle personally sensitive information, it is important that the team familiarizes itself with the requirements surrounding this. The Norwegian Data Protection Authority has published a guide for ["Software development with built-in privacy" (in Norwegian)](https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/programvareutvikling-med-innebygd-personvern/) which provides useful insight into the issue.

Important points one must be aware of are that:
* information should not be stored longer than the purpose of collecting it implies
* certain types of information should not be registered under any circumstance
* we must consider the use of-, and restrictions on using production data for testing 
* users have the "right to be forgotten" where they can demand that personal information is deleted
* we must deal with privacy also in the context of backup - we don't necessarily need to delete individuals from backups, but we must ensure that "the right to be forgotten" is maintained during a restore.

If we process this type of information on behalf of clients, they will normally require that we sign a data processing agreement. If this is not in place, it <u>must</u> be discussed with the client's representative.

# Data for Use During Development and Testing
If data is used in connection with development and testing, it is important to consider classification and sensitivity. Development environments often have a different level of security than production environments, and this practically means that we cannot always use real data for development.

The team must check the need for anonymizing the data before it is used outside the production environment, so as to maintain the need for data amount, filling rate, and quality while ensuring that the client's data does not go astray.

This is especially important if development occurs in Bouvet's infrastructure but with a production environment located at the client's site. In such cases, it is vital that Bouvet has documented routines regulating where and how data is stored and used, and how and when it should be deleted. This must be clarified in consultation with the client so that there is no doubt about responsibility, duties, and risk.

# More Information
* [Datatilsynet: Programvareutvikling med innebygd personvern (in Norwegian)](https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/programvareutvikling-med-innebygd-personvern/)
* [NSM: Kartlegg enheter og programvare (in Norwegian)](https://nsm.no/regelverk-og-hjelp/rad-og-anbefalinger/grunnprinsipper-for-ikt-sikkerhet/identifisere-og-kartlegge/kartlegg-enheter-og-programvare/)
