---
title: "Security Testing"
weight: 6
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
When conducting security testing against a running environment, it is important to always clarify this well in advance. Many types of testing can be destructive, so if the [environments are not sufficiently separated](/design/segregation/), you risk affecting other environments than intended.

A good solution, especially if using infrastructure-as-code (IaC), is to have a pipeline that deploys a dedicated environment for security testing. If this is designed into the delivery from the start, it is often easy to set up environments identical to the production environment, where you can also copy databases and possibly run anonymization processes on the data.

## Static Application Security Testing (SAST)
Static code analysis is a low-threshold technique that analyzes the code with dependencies to find weaknesses. SAST can be carried out completely automatically, and there are many good tools that can integrate this into CICD so that you can scan as part of the processes here.

SAST only checks the solution being created; it does not reveal anything about the configuration of the runtime environment, network, or other surrounding dependencies. Tools used to perform SAST are language-specific, so it is important to understand which tools provide the best results for the language and possibly framework used.

## Dynamic Application Security Testing (DAST)
In contrast to SAST, DAST is a technique where a solution is tested in a running state. This is a language-agnostic test method, where, for example, a web application is tested by testing the frontend solution to find weaknesses. DAST can be automated, but often needs to be run manually for certain types of weaknesses to be tested.

DAST will only cover functionality exposed in the running solution, so if there is code that is part of the solution but not accessible to the DAST tool, it will not be tested either.

## More Information
* [Wikipedia: Static application security testing](https://en.wikipedia.org/wiki/Static_application_security_testing)
* [Wikipedia: Dynamic application security testing](https://en.wikipedia.org/wiki/Dynamic_application_security_testing)
* [OWASP: Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
