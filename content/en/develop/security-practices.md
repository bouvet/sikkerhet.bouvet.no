---
title: "Security Practices"
weight: 4
translationKey: sikkerhetspraksiser
description: >
  There is much to consider when building a secure solution, and an important starting point is the OWASP Top 10.
---

There are many different types of vulnerabilities and weaknesses to consider when developing new applications. The Open Worldwide Application Security Project (OWASP) publishes a prioritized list of common application vulnerabilities that many teams use as a practical starting point.

OWASP Top 10 is not a complete security standard, but a useful prioritization of what typically goes wrong in real-world projects.

## Current points on the OWASP Top 10
As of today, the latest published version is OWASP Top 10:2025:

1. A01:2025 - Broken Access Control
2. A02:2025 - Security Misconfiguration
3. A03:2025 - Software Supply Chain Failures
4. A04:2025 - Cryptographic Failures
5. A05:2025 - Injection
6. A06:2025 - Insecure Design
7. A07:2025 - Authentication Failures
8. A08:2025 - Software or Data Integrity Failures
9. A09:2025 - Security Logging and Alerting Failures
10. A10:2025 - Mishandling of Exceptional Conditions

## From Top 10 to practice in the team
If the team has no processes around secure development, this is a good place to start. To have a real effect, the points must be translated into concrete controls in the delivery process.

For a more practical walkthrough of how such measures can be built into product development, see also [Slik etablerer bedriften gode sikkerhetstiltak i produktutviklingen](https://www.bouvet.no/bouvet-deler/slik-etablerer-bedriften-gode-sikkerhetstiltak-i-produktutviklingen).

A minimum usually means:

* defining security requirements early and linking them to architecture and user stories
* conducting code reviews and tests that include security-relevant scenarios
* using automated controls in CI/CD for dependencies, configuration, and secrets
* ensuring traceability of changes, builds, and deployments
* updating the threat model and risk assessment on significant changes

For teams with greater maturity in application security, [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/) is a natural next step. ASVS goes deeper than Top 10 and can be used as a verification basis at different maturity levels.

## What about AI?
OWASP Top 10 for web applications still covers many fundamental problems, including in solutions that use AI. At the same time, AI introduces its own threats that are not fully covered by this list alone.

For projects with AI components, the team should also use:

* [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
* [OWASP AI Agent Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html)

Details on safe use of AI in the development process are described in [Use of Artificial Intelligence]({{< ref "plan/ai.md" >}}). Risks around dependencies, artifacts, and the build chain are described in [Software Supply Chain]({{< ref "develop/software-supply-chain.md" >}}).

OWASP publishes much more in addition, including other Top 10 lists and what they call ["cheat sheets"](https://cheatsheetseries.owasp.org/), which provide more detailed information on specific security topics.

## Further reading
* [OWASP Top 10:2025](https://owasp.org/Top10/2025/)
* [OWASP Application Security Verification Standard](https://owasp.org/www-project-application-security-verification-standard/)
* [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
* [OWASP AI Agent Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html)
* [The 18 CIS Critical Security Controls](https://www.cisecurity.org/controls/cis-controls-list)
* [CISA - Secure by Design](https://www.cisa.gov/securebydesign)
* [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
* [Bouvet Deler: Slik etablerer bedriften gode sikkerhetstiltak i produktutviklingen](https://www.bouvet.no/bouvet-deler/slik-etablerer-bedriften-gode-sikkerhetstiltak-i-produktutviklingen)
