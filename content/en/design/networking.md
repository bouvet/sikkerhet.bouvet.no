---
title: "Network Concepts"
weight: 4
translationKey: network
description: >
  Network is a fundamental component in everything we create, and it is important to have a basic understanding of how it works and how it can be exploited by others.
---

Proper configuration of the network is important for pure cloud solutions, hybrid networks, and on-prem solutions. Network is a vast field with significant variations in usage, security, and complexity. Below we cover basic concepts for communication to and from servers and network services.

## Zero Trust Architecture
[Zero trust](https://en.wikipedia.org/wiki/Zero_trust_security_model) is an important concept in network operations. In short, you should never trust anything coming from other systems, and you should assume that all communication will be compromised. Zero trust cannot be solved just by securing the network, but must be a goal in itself when designing solutions and the infrastructure around them. By implementing zero-trust, you will eliminate many potential attack vectors and thus protect the services that use the network.

## Getting an Overview of the Network
{{< important title="Important" >}}
Keep track of which IP addresses and ports you expose, and which services are listening on the ports. Check firewall rules, look in logs, and scan your systems with nmap.
{{< /important >}}

Keep an overview of which IP addresses, ports, and protocols an IT system exposes to the outside. This applies regardless of whether you are setting up a new system, changing an existing one, or just investigating what you already have. A targeted attacker will map open endpoints to find targets, and there have been several examples of data breaches starting with a forgotten, insecure service.

As developers and system managers, it is critical that we know exactly which services are open to whom and why.

When setting up new systems, you have good opportunities to control what is exposed. The main rule according to the Zero Trust architecture should be to start with everything closed, and then open only the ports and protocols that are needed. New components should be isolated from existing systems.

In existing systems, it can be difficult to get an overview of what is exposed, especially in hybrid or on-prem setups. Simply shutting down everything that is not documented can also be risky, as this can affect legitimate systems. If working in the customer's infrastructure, feel free to contact the network department for help with mapping.

### Network Scanning
To find open ports and services, you should scan both public and private IP ranges from different locations. Remember that internal networks can follow different routes than external traffic and thus see different openings. The same applies in situations where you have office networks, VPN, DMZ/guest networks, or other open networks.

There are tools and services that make mapping easier. `nmap` is the industry standard and FOSS, and it is excellent for scanning IP ranges and detecting open UDP, TCP, and SCTP ports. If you lack an overview, `nmap` is a good place to start.

{{< caution title="Caution" >}}
The use of scanner tools like `nmap` must **always** be clarified with the owners of infrastructure and network. If you are at a Bouvet office and scanning a customer's Azure environment, you can easily trigger alarms at both Bouvet and the customer, as well as the ISP.
{{< /caution >}}


## Service Isolation
{{< important title="Important" >}}
Use a firewall to restrict traffic within systems and between systems and the Internet. Use allowlist if possible. Filter traffic at the application layer if necessary.
{{< /important >}}

_Firewall_ is a common term for barriers in a network that stop unwanted traffic. In most contexts, the definition is a bit narrower, referring to barriers at the TCP/IP layer, but a firewall can also operate at the application layer.

To enforce a [zero-trust architecture](https://en.wikipedia.org/wiki/Zero_trust_security_model), all components must be isolated and only made available to the services that they themselves will consume or deliver data to. This makes it necessary to have a firewall between components in the same application, between applications, and between the application and the Internet. If you have an application with a database, a backend API, and a web API, it is advantageous if you can set firewall rules between the components that only allow the necessary traffic. See the diagram below for an example.

{{< figure src="../firewall-infrastructure.drawio.png" >}}

Firewalls should always drop all incoming and outgoing traffic by default and be explicitly opened for legitimate connections. Always limit port openings to specific ports and protocols where possible. Avoid using "Any" as the protocol!

Also use firewalls between all services within the network to ensure multiple layers of protection if one fails. Segmenting the network so that each function has its subnet will also help.

Avoid sending traffic over the internet even to your own cloud services, use private endpoints and VPN tunnels where possible. Services that must be exposed to other systems (both internal, external, and on the internet) should be placed behind security functions such as `web application firewalls` and/or `API gateways`, and you must ensure that these also protect against, for example, DDOS attacks.

Route all outgoing traffic through a dedicated proxy service that blocks everything by default, allowlisting as needed. Never expose services directly if you can avoid it. Exposing services on ports other than the standard ports is not a good idea; a network scan will quickly reveal this.

## Configuration

Network configuration should be automated as much as possible, preferably using a [CI/CD system](deploy/cicd/).

- Limit who can configure both the network and network rules directly
    - Set up Just-in-time (JIT) access where possible
    - Limit where the network can be edited from (e.g., only from inside an on-prem firewall)
- Script all rules that can be scripted
    - Use source code control
        - Have extra security on repos containing the network source, protecting both reading and writing
    - Use tools like `Snyk` to run analysis of scripts
    - Scripts should be run regularly and automatically (at least daily)
        - If unknown rules are detected, alerts should be created
        - All unknown rules should be deleted or disabled
        - Alternatively, other methods can be used to detect deviations from the desired configuration
- Back up or document all rules set up without scripting
    - Document all rules set up/handled by people outside your team

## More Information
* [IBM: What is networking](https://www.ibm.com/topics/networking)
* [Wikipedia: Zero trust](https://en.wikipedia.org/wiki/Zero_trust_security_model)
