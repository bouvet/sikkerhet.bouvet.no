---
title: "The Security Champion Role"
weight: 1
translationKey: hgsc
description: >
  Security Champion is an established term, but what the role contains varies from company to company. Here is Bouvet's variant, and four steps you can take in your own team.
---

## Why "Security Champion"
The term "Security Champion" has become an established concept to encompass people who do not necessarily work directly with security, but who can act as a bridge between the formal security roles and the development teams. At Bouvet we have chosen an approach inspired by [NAV](https://sikkerhet.nav.no/docs/bli-security-champion/) and [Equinor](https://equinor.github.io/appsec/security-champion/), and we try to keep the whole thing as informal as possible.

## What the role looks like at Bouvet
This will vary between regions, units and teams, but a typical Security Champion will raise issues and questions related to security, and help the team focus on and prioritise between security matters and everything else. The Slack channel ```#security-champions``` is used to announce events, share useful information and anything else that concerns Security Champions at Bouvet. Every month we also run what we call AppSec Caffeine, where we gather Security Champions at Bouvet for a summary of relevant news, a talk and a quiz with a symbolic prize. Registration goes through Bouvet's own [event system](https://event.bouvet.no) (requires a Bouvet login).

Bouvet is becoming a large company with a wide range of projects, and security is a vast field where everyone has something new to learn every day. We love sharing knowledge, so it is great if _YOU_ want to get involved and share what you know with others - no matter how low or high the threshold for understanding it might be.

### How do I become a Security Champion?
If you want to, you may. We have no sign-up to become one; join the Slack channel, get involved, take part in the gatherings, speak at Bouvet One and talk about security. It does not matter if you do not have years of experience - what matters is that you get involved, learn and share. Talk to your nearest manager if you want to take on the role within your team, or if you want to contribute across teams or customers.

Building competence matters for a Security Champion too. Several of us at Bouvet have attended the NDC Security conference in recent years, where we try to gather to get to know each other better, do something social and support each other when we have "our own" on stage. Talk to your nearest manager and join if you have the opportunity - you will quickly get to know other engaged Security Champions.

## How do I practise the role?
### 1. Create awareness in the delivery team
A good place to start is to ask yourself a few questions:

* What does this project I am working on actually do?
* What is critical for the system to work, and how can the system be misused or manipulated?
* Is there an up-to-date [threat model]({{< ref "design/threat-modelling.md" >}}) with measures to prevent weaknesses from being exploited?

Start by establishing a mental model of the project, then build on it from there.

* A good start is often to run a threat modelling exercise. You do not need to know much about threat modelling, but you can get some support in the [article on threat modelling]({{< ref "design/threat-modelling.md" >}}) and from the [Threatmodeling manifesto](https://www.threatmodelingmanifesto.org/).

* Talk to other Security Champions at Bouvet. Ask them what they have done that works, and what does not.

* Remember that you can always ask the Security Champions network for support, tips and guidance.

Be a bit creative and try to get the team involved; a Security Champion who does not bring the team along often does not get as much done as they would like.

### 2. Do we have control over our entire project?

If the answer is yes, let us correct that to no. There is always more that can be done. We have made a checklist that should be reviewed for every single project we are involved in; all our delivery teams should have a relationship with the points in it and the risk they pose if useful measures are not introduced. You can find the list [here]({{< ref "checklist.md" >}}).

This portal also describes a lifecycle intended to safeguard security in development projects. Much of the content is relevant for other types of projects as well, and remember that you do not have to take it all at once. Bring the team along and work through it part by part until you have even better control over the project.

### 3. Protecting the customer and Bouvet

The purpose of all security work is to avoid unwanted incidents. When working on a project, it is important to ask yourself a few checking questions:

* Are we allowed to do what we are doing?
* Is it wise to do it, or can someone exploit what we build or the way we work?
* What is the consequence for the customer and the users if this fails or ends up in the wrong hands?
* Are we collecting or storing more data than we actually need?
* Would we notice if someone exploited a weakness today?

### 4. Technical review of solutions

Depending on your level of ambition, you should use a checklist as a support tool when reviewing the solution. We have made [a checklist]({{< ref "checklist.md" >}}) that covers an absolute minimum, but if you really have ambitions there are other tools such as [OWASP's Application Security Verification Standard - ASVS](https://owasp.org/www-project-application-security-verification-standard/). It covers security reviews at different levels of detail, depending on how deep you want to go.

## More information
* [OWASP: Security Culture](https://owasp.org/www-project-security-culture/stable/4-Security_Champions/)
* [Bouvet: Sikkerhet i oppdrag (BLS)](https://info.bouvet.no/bin/view/Bouvet%20Ledelsessystem%20-%20BLS/Kvalitet%20i%20leveranser%20-%20Bouvets%20kvalitetssystem/Gjennomf%C3%B8ring%20av%20oppdrag%20-%20Hovedprosess/St%C3%B8tteprosedyrer%20for%20gjennomf%C3%B8ring%20av%20oppdrag/Sikkerhet%20i%20oppdrag/) (Requires Bouvet user)
* [Bouvet Deler: Everyone needs a security friend](https://www.bouvet.no/bouvet-deler/alle-trenger-en-sikkerhetsvenn)
* [Bouvet Deler: Security Champions raise the focus on security](https://www.bouvet.no/bouvet-deler/security-champions-hever-fokuset-pa-sikkerhet-)
* [NAV: Security Champion](https://sikkerhet.nav.no/docs/bli-security-champion/)
* [Equinor: Security Champion](https://equinor.github.io/appsec/security-champion/)
