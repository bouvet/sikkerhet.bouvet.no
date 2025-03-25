---
title: "Data and Classification"
weight: 2
translationKey: data
description: >
  Most organizations operate with various classification levels for both data and systems. The classification level dictates how data is used, where it is stored, and who can access it. These are key requirements for any development project and must be clarified in advance.
---
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

{{< important title="Important" >}}
Norway has implemented GDPR into Norwegian law through Personopplysningsloven. All our deliveries has to consider the definitions and requirements which follows from this. Also remember that we are likely to be subject to data processing agreements that might carry even stricter requirements. 
{{< /important >}}

The purpose of the GDPR is to ensure the privacy rights of individuals through regulating the use of Personally Identifiable Information (PII). The GPDR has a number of requirements that define how PII can be used and for what. PII is defined as 

<em>"any information relating to an identified or identifiable natural person (‘data subject’); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person"</em>

Privacy may look like a complex and difficult topic, but generally
* Any piece of information that can be tied to an individual is PII
* Any use of PII requires a valid basis for processing it
* The data subject must consent to the use of the data
* Data minimization is a requirement - do not collect information unless it is needed
* The information should have an end-of-life - a date where you consider deleting it. Do not store it for longer than needed. 
* The user has a right to be "forgotten" - also if you restore from a previous backup

If we process this type of information on behalf of clients, they will normally require that we sign a data processing agreement. If this is not in place, it <u>must</u> be discussed with the client's representative.

## Data for Use During Development and Testing
If data is used in connection with development and testing, it is important to consider classification and sensitivity. Development environments often have a different level of security than production environments, and this practically means that we cannot always use real data for development.

The team must check the need for anonymizing the data before it is used outside the production environment, so as to maintain the need for data amount, filling rate, and quality while ensuring that the client's data does not go astray.

This is especially important if development occurs in Bouvet's infrastructure but with a production environment located at the client's site. In such cases, it is vital that Bouvet has documented routines regulating where and how data is stored and used, and how and when it should be deleted. This must be clarified in consultation with the client so that there is no doubt about responsibility, duties, and risk.

## More Information
* [Datatilsynet: Programvareutvikling med innebygd personvern (in Norwegian)](https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/programvareutvikling-med-innebygd-personvern/)
* [NSM: Kartlegg enheter og programvare (in Norwegian)](https://nsm.no/regelverk-og-hjelp/rad-og-anbefalinger/grunnprinsipper-for-ikt-sikkerhet/identifisere-og-kartlegge/kartlegg-enheter-og-programvare/)
* [Lovdata: Personopplysningslovel (GDPR)](https://lovdata.no/dokument/NL/lov/2018-06-15-38) (in Norwegian)
