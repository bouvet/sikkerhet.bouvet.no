---
title: "Contingency Plans and Incident Response"
weight: 6
translationKey: ir
description: >
  The team must know which requirements apply to security incidents, who is responsible, and how notifications and escalation should be handled. This article covers governance, compliance, and coordination.
---

Many people think of security incidents as targeted attacks where _someone_ attacks a solution by _hacking_ it. In some cases, this may be correct, but an incident can be much more.

NSM defines a security incident as _"A deviation situation where there is a potential for loss of confidentiality, integrity, and/or availability of information or ICT services. A security incident can occur as a result of a data attack, technical failure, or unintentional errors."_ In other words, an incident can be almost anything that affects confidentiality, integrity, and availability. Different customers have different requirements for when to notify, escalate, and report, and to whom.

## What This Article Covers
This article addresses overall incident response and preparedness:
* which requirements the team must comply with
* who is responsible for what
* how notifications and escalation should occur
* which logs and monitoring must be in place

Operational recovery after destructive incidents is covered in the article about [preparedness]({{< ref "manage/preparedness.md" >}}).

## What the Team Must Control
Before an incident occurs, the following must be clarified and documented:
* contact points with the customer, delivery manager, and possibly SOC/NOC at the customer site
* clear criteria for when to notify immediately
* who can authorize actions, downtime, and external communication
* which requirements apply to reporting, audit, and deviations
* which dependencies the solution has on other systems

This must be known throughout the team, not just by individual persons.

## Monitoring and Logging
Incident response requires that you actually see what is happening in the solution. The team must ensure that necessary logs are collected, protected, and made available for analysis.

For AI-component solutions, this additionally means:
* monitoring of model and service behavior over time
* logging of events related to AI calls, anomalies, and access
* alerts when unexpected changes in quality, response, or behavior occur
* traceability for decisions affecting security or compliance

This supports control areas such as "AI system operation and monitoring" and "AI system recording of event logs" in ISO 42001.

See also [Logging and Monitoring]({{< ref "manage/logging-monitoring.md" >}}) for more detailed information on this topic.

## When an Incident Occurs
Incidents can take many forms: vulnerabilities in applications or dependencies, operational anomalies, or active attacks.

If you discover or have reason to believe that a solution is under attack, this must be reported to the customer immediately. It is not always the case that the attacked solution is the target; in many cases, a solution is just a stepping stone to another. Therefore, it is also important to know what accesses and network openings it has to other solutions, so the customer's IT organization can check these for signs of attacks.

If you come across signs that a solution has been attacked or used for an attack, it is also important to notify the customer so they can secure information and evidence for further investigation.

{{< caution title="Remember" >}}
Incident handling and investigation is a specialized field. If you come across signs that something may have happened, _notify_ your contact point and wait for instructions from them _before_ taking any action.
{{< /caution >}}

## Further reading
* [Fortinet: The CIA Triad](https://www.fortinet.com/resources/cyberglossary/cia-triad)
* [Nasjonal Sikkerhetsmyndighet: Forbered virksomheten på håndtering av hendelser (in Norwegian)](https://nsm.no/regelverk-og-hjelp/rad-og-anbefalinger/grunnprinsipper-for-ikt-sikkerhet/handtere-og-gjenopprette/forbered-virksomheten-pa-handtering-av-hendelser/)
* [Nasjonal Sikkerhetsmyndighet: Nasjonalt rammeverk for håndtering av digitale angrep og cyberhendelser (in Norwegian)](https://nsm.no/regelverk-og-hjelp/rapporter/nasjonalt-rammeverk-for-handtering-av-digitale-angrep-og-cyberhendelser)
