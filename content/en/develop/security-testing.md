---
title: "Security Testing"
weight: 8
translationKey: sectesting
description: >
  In line with other elements associated with team _quality_, we depend on testing to verify that we have achieved the goal. Security testing is an important part of this, as it allows us to demonstrate that the delivery is not vulnerable to certain attack methods.
---

Security testing should always be an element of all deliveries. Many associate security testing with penetration testing, but it is much more than that. Some forms of testing can be done automatically as part of CICD, while others are more manual and typically performed against a deployed solution.

Before starting security testing, it is important to understand what it can provide you - there is no single measure that solves all security problems, and no single test method that uncovers all weaknesses. Security testing is also one of the areas that often require specific expertise for the results to be good and/or interpreted correctly.

{{< caution title="Warning" >}}
The use of tools like `nmap` and others used in connection with security testing must **always** be clarified with the owners of infrastructure and network, as it is difficult to distinguish between friendly testing and malicious attacks. This also applies internally at Bouvet; Intern-IT & Security must always be in the loop before you start a security test!

If this is not taken into account, it can have consequences, both for the customer relationship and for technical solutions against the network provider and Microsoft.
{{< /caution >}}

## Test Environment
When conducting security testing against a running environment, it is important to always clarify this well in advance. Many types of testing can be destructive, so if the [environments are not sufficiently separated]({{< ref "design/segregation.md" >}}), you risk affecting other environments than intended.

A good solution, especially if using infrastructure-as-code (IaC), is to have a pipeline that deploys a dedicated environment for security testing. If this is designed into the delivery from the start, it is often easy to set up environments identical to the production environment, where you can also copy databases and possibly run anonymization processes on the data.

## Static Application Security Testing (SAST)
Static code analysis is a low-threshold technique that analyzes the code with dependencies to find weaknesses. SAST can be carried out completely automatically, and there are many good tools that can integrate this into CICD so that you can scan as part of the processes here.

SAST only checks the solution being created; it does not reveal anything about the configuration of the runtime environment, network, or other surrounding dependencies. Tools used to perform SAST are language-specific, so it is important to understand which tools provide the best results for the language and possibly framework used.

## Dynamic Application Security Testing (DAST)
In contrast to SAST, DAST is a technique where a solution is tested in a running state. This is a language-agnostic test method, where, for example, a web application is tested by testing the frontend solution to find weaknesses. DAST can be automated, but often needs to be run manually for certain types of weaknesses to be tested.

DAST will only cover functionality exposed in the running solution, so if there is code that is part of the solution but not accessible to the DAST tool, it will not be tested either.

## Security testing of AI systems
Solutions that use artificial intelligence introduce security testing needs that go beyond traditional SAST and DAST. AI systems must be validated to ensure they behave as expected and do not introduce new vulnerability vectors.

### Validating AI models
AI models should be validated for:
* **Accuracy and performance**: The model must meet defined quality requirements under expected usage conditions.
* **Bias and fairness**: Tests to detect whether the model discriminates based on sensitive attributes.
* **Robustness**: Testing how the model behaves with unexpected or adversarial input.
* **Hallucinations**: Verifying that the model does not generate false information or unsafe patterns.

Validation of AI models often requires domain-specific expertise and should be part of the responsibility of data and ML teams, not only information security.

### Security testing of AI components
In addition to model validation, the overall solution must be tested for:
* **Prompt injection**: Tests for whether input can manipulate the AI agent into unexpected behavior.
* **Data exfiltration**: Verifying that sensitive information cannot be extracted via prompts or outputs.
* **Trust boundaries**: Testing how the system behaves when AI assistance exceeds its defined boundaries.

These threats must be handled with the same rigor as traditional application security testing. For projects with AI components, the team should use [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/) as a basis.

## Penetration testing
A penetration test goes deeper than SAST and DAST by testing the system as a whole, including infrastructure, network, and possibly physical security. Where DAST primarily focuses on web applications, a pentest is more comprehensive and often uncovers vulnerabilities that only become visible when several threats are combined.

A penetration test always has an agreed scope that regulates what the testers can do, when they can do it, and which resources can be tested. It is not possible to prove that a solution is secure, only that it is not vulnerable to specific attacks. Penetration testing is therefore particularly useful when the solution has strict security requirements or operates under agreements that require independent verification.

### Planning and scope
A pentest requires expertise and should not be carried out alone without relevant experience. As a team, you must ensure that the environment to be tested is clearly identified and that the scope is well defined before testing begins. It must be possible to distinguish an actual attack from an agreed test. If you see signs of activity against an environment that is not part of the test and you have [segregated the environments]({{< ref "design/segregation.md" >}}), this should be handled as a real incident.

As part of planning, you must also clarify the customer's routines for penetration testing. Many organizations have a security operations center (SOC) and/or network operations center (NOC) that continuously monitors infrastructure. These must be informed when the test is scheduled, so that an agreed test does not trigger unnecessary escalation.

In some cases, the customer wants an unannounced test to see whether the attack is detected. This must be explicitly agreed, since a pentest is in practice a simulated attack.

### When penetration testing is relevant
In an ideal world, you would conduct a pentest after all major changes, but this is rarely practical. How often the test should be conducted depends on customer requirements, regulatory guidance, and the risk the solution carries. This should be clarified early, not only when you want to order a test.

### Follow-up during and after the test
If the test has been announced in advance, it is a good opportunity to monitor logs and alerts to see whether the events are being detected. If the findings in the report can be correlated with what you observe in logs and alerts, it provides a solid basis for improving detection and notification.

After the test, the team will normally receive a report describing what was tested, how the test was conducted, and what findings were made. The findings must be reviewed with the product owner, classified, and added to the backlog. Some findings must be closed quickly, while others can be accepted or planned later if other measures reduce the risk. Security is not an individual responsibility; it is the team's responsibility to follow up on the requirements that apply to the solution.

### AI-focused penetration tests
If the solution includes AI components, the penetration test should also cover:
* Testing API security around the AI model
* Change and version control of models and training data
* Logging and monitoring of the AI system's behavior
* Access control to sensitive models and data

For solutions with AI components, the pentest should also consider prompt injection, context manipulation, unauthorized access to model calls, and whether the model can be used to extract sensitive information the system would not otherwise expose.

## Further reading
* [Wikipedia: Static application security testing](https://en.wikipedia.org/wiki/Static_application_security_testing)
* [Wikipedia: Dynamic application security testing](https://en.wikipedia.org/wiki/Dynamic_application_security_testing)
* [OWASP: Application Security Verification Standard (ASVS)](https://owasp.org/www-project-application-security-verification-standard/)
* [OWASP: Artificial Intelligence Security Verification Standard (AISVS)](https://owasp.org/www-project-artificial-intelligence-security-verification-standard-aisvs-docs/)
* [OWASP: Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
* [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
* [OWASP AI Agent Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html)
