---
title: "Threat Modeling"
weight: 5
translationKey: threatmodelling
description: >
  Threat modeling is an exercise where the goal is to identify threats in and around a solution. This makes it possible to identify and assess risk against the overall security posture of the solution. Based on a threat model, mitigating measures can be identified and implemented to reduce risk.
---

__This is a brief introduction to threat modeling. Methods and tools are mentioned briefly, with links for further reading.__

You may have already done simple threat modeling without realizing it. For example, have you ever thought about why the users of the system you're creating need to log in with a username and password?

When these choices were made, you automatically performed simple threat modeling. You certainly don't want unauthorized individuals to access data in your system, and you don't want anyone to see the data transferred between your users and your website.

The whole point of threat modeling is to think like an attacker.

## Identifying Threats

There are several ways to identify threats to a system. In practice, the most important thing is to involve the right roles, define what needs protection, and systematically review how the solution could be attacked or misused. Some threats may already be handled, while others require new measures. The process should be repeated when the solution, data flows, or usage patterns change.

A simple workflow is:

- define the system boundaries and critical assets
- identify threats and misuse scenarios
- prioritize risk and decide on measures
- verify that measures actually work
- update the model regularly

## Method Selection

Threat modeling is more important than which method you choose. Pick an approach your team can use consistently.

- **Workshop-based review**: Low barrier and well-suited early in projects, in line with the principles of [The Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org/).
- **Data flow + STRIDE**: Useful when you want to review components, interfaces, and trust boundaries in a structured way; see [OWASP Application Threat Modeling](https://owasp.org/www-project-application-threat-modeling/).
- **Attack trees**: Useful when you want to analyze how a concrete attacker goal can be reached through multiple paths; see [Attack Trees (Bruce Schneier)](https://www.schneier.com/academic/archives/1999/12/attack_trees.html).

## Threat modeling for AI systems
For solutions with AI, looking at application code alone is often not enough. The threat model should also cover the model itself, prompt flow, data sources, evaluation basis, and how the system is used in operations.

Typical questions include:

* which data enters the model, and who controls it?
* which parts of the context are trusted, and which come from users or external sources?
* what is the worst-case outcome if the model gives incorrect answers or is manipulated?
* which security mechanisms exist around model calls, logging, access, and monitoring?

Some AI-specific threats that should be assessed explicitly:

* **Prompt injection**: Input or documents attempt to override instructions or make the model perform unintended behavior.
* **Data poisoning**: Training data, reference data, or evaluation data is manipulated so the model learns the wrong things or produces weaker decision support.
* **Model misuse**: The system is used for purposes it was not designed for, or in contexts where error margins are unacceptable.
* **Leakage**: Sensitive information leaks through prompts, outputs, logs, weight files, or surrounding integrations.

For AI solutions, it is also important to describe misuse scenarios, not only direct attacks. A model can be technically available and functioning, but still represent high risk if it is used for decision support without sufficient human control points.

## From threat model to requirements and follow-up

A threat model has limited value if it is created once and then put away. Findings should be used to define concrete security requirements, testing needs, and operational controls.

For example, an identified threat can lead to a need for:

* stronger authentication or access control
* additional logging and alerting
* validation of input and output
* explicit limitations on use of a model or agent
* regular review of datasets, prompt flows, or integrations

For AI systems, the threat model should also be used when assessing changes to models, data sources, prompt templates, evaluation sets, and monitoring. Changes here can introduce new threats even if application code is unchanged.

The threat model must be versioned and kept up to date. Once threats have been identified, countermeasures must be described, and their effectiveness assessed. A common approach is to give the threat a value indicating severity, for example, 1-10 where 10 is the worst. Countermeasures are assessed similarly but with the opposite scale where 1 has little effect and 10 (or up to criticality) has the highest effect. The sum of these gives a residual risk that indicates the remaining risk:

```
Identified Threats          Criticality     Countermeasures Residual Risk
Threat  1                   8               8               0
Threat  2                   2               0               2
Threat  3                   4               3               1
Total                       14              11              3
```

When a risk is identified, it is important that the risk owner is involved, as they are responsible for ensuring that the project delivers quality in line with expectations and requirements.

It is important that countermeasures are validated for them to be effective. The threat model should be reviewed regularly to see how the situation has changed, and if the total criticality or residual risk exceeds a threshold, consider measures to reduce them.

For systems in active operation, the threat model should also be used when deciding which events to log, what to monitor, and which deviations should trigger alerts. This is especially important for AI systems, where misuse, degradation, or unexpected model behavior can develop gradually over time.

## More Information
### Tools

- [Microsoft Threat Modeling Tool](https://docs.microsoft.com/en-us/azure/security/develop/threat-modeling-tool) gives you a kick-start by describing common threats for various services. This tool is especially useful if you operate in Microsoft Azure.
- [OWASP Threat Dragon](https://www.owasp.org/index.php/OWASP_Threat_Dragon) is a similar open-source tool worth checking out.
- [Draw.io](https://draw.io) with this package [drawio-threatmodeling](https://github.com/michenriksen/drawio-threatmodeling) is a tool available both on the web and in common clients.
- [OWASP pytm](https://github.com/OWASP/pytm) is an open-source framework for threat modeling as code in Python, useful for teams that want to version models together with source code.

### Cards and Workshop Aids

- [LINDDUN GO](https://linddun.org/go/) is an accessible card-based method for privacy threats, with a free PDF deck and digital version.
- [OWASP Cornucopia](https://owasp.org/www-project-cornucopia/) is an established, free card deck for deriving security requirements in development projects.
- [Elevation of Privilege (EoP)](https://github.com/adamshostack/eop/) is a classic threat modeling card deck by Adam Shostack, available as open resources.
- [The Security Cards](https://securitycards.cs.washington.edu/) from the University of Washington is a practical brainstorming set with printable cards.

### Courses and Lectures

- [Threat Modeling Fundamentals (pluralsight)](https://app.pluralsight.com/library/courses/threat-modeling-fundamentals/)
- [Threat Modeling - what is it? (BouvetOne 2020, internal link)](https://web.microsoftstream.com/video/fda76058-2cf6-4eda-91e2-56aea56d0628)
- [An Introduction to threat modeling (Javazone 2018)](https://vimeo.com/234010802)
- [Threat Modeling in 2019 (RSA Conference 2019)](https://www.youtube.com/watch?v=ZoxHIpzaZ6U)

### Other Sources
- [Threat Modelling Manifesto](https://www.threatmodelingmanifesto.org)
- [Threat modeling](https://infosec.sintef.no/informasjonssikkerhet/2018/06/trusselmodellering/) - Martin Gilje Jaatun, Senior Researcher, Dr. Philos, SINTEF
- [OWASP Application Threat Modeling](https://www.owasp.org/index.php/Application_Threat_Modeling)
- [Attack Trees (Bruce Schneier)](https://www.schneier.com/academic/archives/1999/12/attack_trees.html)
- [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
