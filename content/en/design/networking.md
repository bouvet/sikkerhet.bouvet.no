---
title: "Network Concepts"
weight: 2
translationKey: network
description: >
  Network is a fundamental component in everything we create, and it is important to have a basic understanding of how it works and how it can be exploited by others.
---


Correct network configuration matters in cloud, hybrid and on-prem alike. This page is meant as a short reference for secure network practice in project work.

## Zero trust architecture
[Zero trust](https://en.wikipedia.org/wiki/Zero_trust_security_model) means not blindly trusting internal or external traffic. Use the principle as your default: verify explicitly, grant as little access as possible, and assume compromise.

## Minimum overview
{{< tip title="Important" >}}
Keep track of which IP addresses and ports you expose, and which services are listening on those ports. Check firewall rules, look in the logs and scan your own systems with nmap.
{{< /tip >}}

Maintain an up-to-date overview of:

- exposed IP addresses, ports and protocols
- who can reach which services
- why the exposure is necessary (the business need)
- which rules are temporary, and when they should be removed

### Network scanning
Scan regularly to confirm actual exposure. `nmap` is an established FOSS tool for discovering open ports and services.

{{< caution title="Warning" >}}
The use of scanner tools such as `nmap` must <strong>always</strong> be cleared with the owners of the infrastructure and network. If you sit in a Bouvet office and scan a customer's Azure environment, you can easily trigger alarms at both Bouvet and the customer, as well as at the ISP.
{{< /caution >}}


## Isolating services
{{< tip title="Important" >}}
Use a firewall to limit traffic within systems and between systems and the Internet. Use an allowlist where possible. Filter traffic at the application layer if necessary.
{{< /tip >}}

Practical ground rules:

- deny by default on both inbound and outbound traffic
- open only the necessary ports, protocols and known sources
- avoid "Any" in rules
- segment the network between functions and environments
- use private endpoints or VPN where possible
- place public services behind relevant security layers (for example WAF or API gateway)

## AI services and network control
For AI solutions, your operating model should be evaluated against requirements for ingress and egress control.

- **AI in your own tenant (for example in Azure)** usually gives better control over network boundaries, private endpoints, logging, and which systems can send data to and from the service.
- **AI as pure SaaS** can provide faster startup, but often less control over network flows, allowed destinations, and traffic boundaries.

Minimum checks for both models:

- which data can be sent in (ingress), and who can send it
- which destinations data can be sent to (egress)
- how traffic is logged, monitored, and blocked when anomalies occur
- how privacy, data flow, and data residency/geography requirements are documented

## Configuration

Network configuration should be automated as far as possible, preferably through [CI/CD]({{< ref "deploy/cicd.md" >}}) and infrastructure as code.

- limit who can change network rules directly
- use JIT access where possible
- version the rules in source control
- scan for deviations from the desired configuration and alert on unknown rules
- document manual exceptions and put a time limit on them

## More Information
* [IBM: What is networking](https://www.ibm.com/topics/networking)
* [Wikipedia: Zero trust](https://en.wikipedia.org/wiki/Zero_trust_security_model)
