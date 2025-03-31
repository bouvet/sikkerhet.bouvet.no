---
title: "Glossary"
weight: 9
translationKey: wordlist
description: >
  A list of common words and terms related to application security
---

## A
**ACL** Access Control List, a list that controls who has access to an object and which access rights they have.

**Active Directory (AD)** A directory service from Microsoft used on-premises. It manages users, groups, identities, and much more.

**Asymmetric encryption** Encryption using a public and private key. The sender can encrypt a message with the recipient’s public key, and the message can only be decrypted with the private key.

**Authentication** Verifying that the user is who they claim to be. Also known as _authn_

**Authorization** Verifying that an authenticated user has permission to perform an action. Also known as _authz_

**Availability** A core security principle in the CIA triad, referring to the accessibility of information when needed.

## B
**Blacklisting** The process of denying specific items (e.g., access to a resource from certain IP addresses). Implies that all others have access by default. Should be avoided as it conflicts with the **Principle of least privilege**.

**Botnet** A loosely connected group of digital devices infected with malicious software, carrying out commands from one or more central Command & Control (C2) servers.

**Brute force** An approach where an attacker tries passwords blindly, hoping to find the correct one and gain unauthorized access to a system.

**Burp** An application (proxy) commonly used in security testing.

## C
**CERT** Computer Emergency Response Team. A specialized team responsible for handling security incidents. Also referred to as CSIRT.

**Certificate** A cryptographic credential asserting that a server, user, or application is what it claims to be.

**Certification Authority (CA)** An organization that validates the identities of entities (websites, email addresses, or users) in order to issue cryptographic certificates.

**CIA triad** A fundamental security concept consisting of **C**onfidentiality, **I**ntegrity, and **A**vailability.

**Command & Control (C2)** Describes the infrastructure and nodes that form the control mechanism for, e.g., a botnet, allowing an attacker to instruct it to launch, for example, DDoS attacks.

**Common Vulnerabilities and Exposures (CVE)** An international effort to catalog software vulnerabilities. Each vulnerability is assigned a unique identifier and published so stakeholders can track and handle incidents in a coordinated manner. CVEs often reference a root cause via CWE and a severity score via CVSS.

**Common Vulnerability Scoring System (CVSS)** A scoring system used to quantify the severity of a vulnerability based on elements such as the CIA triad, attack vectors, and complexity. Typically used in conjunction with CVEs.

**Common Weakness Enumeration (CWE)** A classification system that describes common weaknesses and vulnerabilities in software, often used to categorize CVEs.

**Cross-Origin Resource Sharing (CORS)** A browser mechanism that allows certain resources on a webpage to be requested from other locations than the main domain (e.g., data from an API on another endpoint).

**Cross-Site Request Forgery (CSRF)** An attack technique where an attacker exploits a user’s existing session to perform unwanted actions by tricking them into sending malicious requests. Mitigated by CSRF tokens.

**Cross-Site Scripting (XSS)** An attack that injects malicious scripts via a URL or input fields that are not properly validated.

**CSIRT** Cyber Security Incident Response Team. A specialized group responsible for managing security incidents. Also known as CERT.

## D
**Data integrity** Mechanisms preventing data alteration or corruption during transport or storage.

**Decryption** Transforming an encrypted message back into its original format using a key.

**Denial of Service (DoS)** An attack where a single source overwhelms a target with traffic, aiming to make the target unavailable to other users.

**Distributed Denial of Service (DDoS)** An attack that overwhelms a target with traffic from multiple sources, often a botnet, intending to render it unavailable.


## E
**Entra ID** A directory service used in Azure. Formerly known as Azure Active Directory.

**Exfiltration** The process of extracting data—typically an attacker covertly retrieving information from a target system.

## F
**Firewall** Usually a physical device running specialized software that regulates which network traffic is allowed to flow between networks.

**Fuzzing** A technique where invalid or unexpected data is fed to a system to see if it causes errors. Such errors can sometimes indicate exploitable vulnerabilities.

## G
**GDPR** General Data Protection Regulation. European legislation on personal data protection, incorporated into Norwegian law via the Personopplysningsloven.

## H
**Hashing** A cryptographic function that produces a fixed-size string (hash) representing data. Used for integrity checking.

**HTTP** Hypertext Transfer Protocol; defines standard operations such as GET and POST. Layer 7 of the OSI model.

**HTTPS** HTTP secured by cryptographic certificates to encrypt traffic between client and server.

**Hugo** A documentation generator that builds a web portal from Markdown files.

## I
**IDS** Intrusion Detection System. A system that monitors for and alerts on intrusion attempts.

**IP** Internet Protocol. Handles the transmission of packets (TCP or UDP) between IP addresses. Layer 3 of the OSI model.

**IP address** A 32-bit (IPv4) or 128-bit (IPv6) numeric identifier for a device on a network.

**IPS** Intrusion Prevention System. Sometimes referred to as **IDPS**. A system that actively prevents intrusion attempts.

**Integrity** A core security principle in the CIA triad. Ensures information remains unaltered and trustworthy.


## J
**Juice Shop** A web-based application created by OWASP to demonstrate the vulnerabilities described in the OWASP Top 10.

## K
**Kali Linux** A Linux distribution focused on cybersecurity.

**Confidentiality** A core security principle in the CIA triad. Addresses how well information is kept secret.

**Encryption** A mechanism that makes data unreadable without the correct key. See also asymmetric and symmetric encryption.

**Cryptographic keys** Secret or public values used for encryption and decryption. See asymmetric encryption.


## L
**Local Area Network (LAN)** A network that spans a small physical area, such as a home, a set of offices, or a building.

## M
**Malware** Malicious software designed to carry out harmful actions. Can target specific victims or spread widely.

**Man-in-the-middle (MITM)** An attack technique where an attacker positions themselves between two communicating parties to eavesdrop or manipulate traffic.

**Malicious software** Also called malware, viruses, trojans, or worms. Software developed for harmful intent.

## O
**OpenID Connect (OIDC)** An authentication layer on top of OAuth that also provides user identity information.

**Open Authorization (OAuth)** An open standard for delegated authorization in which a third-party service (e.g., Google or Microsoft) handles authentication. The site itself only handles authorization.

**Obfuscation** Attempts to conceal information without true encryption (e.g., changing variable names to make code harder to understand).

**OSI model** A 7-layer reference model for describing electronic communication: Application, Presentation, Session, Transport, Network, Data Link, Physical.

**OWASP** Open Worldwide Application Security Project. Promotes awareness of web application security. Best known for the OWASP Top 10.

## P
**Penetration testing** A systematic attempt to identify vulnerabilities in applications, infrastructure, or related systems.

**Phishing** Attacks aiming to trick users into divulging information or performing actions, often relying on urgency, authority, or reward. Typically not targeted at specific individuals.

**Principle of least privilege** A fundamental security principle dictating that users or systems have only the minimal access rights needed to perform their tasks.

**Private key** The secret key used in asymmetric encryption. A message is encrypted with the corresponding public key and can only be decrypted with this private key. Must be kept confidential.

**Public key** Used in asymmetric encryption. A message is encrypted with the public key but can only be decrypted with the private key.

**Public Key Infrastructure (PKI)** Infrastructure for publishing and distributing public keys, enabling verification of identities.

## Q
**Quality of Service (QoS)** A network feature that prioritizes certain traffic, ensuring critical data (e.g., monitoring alerts) is handled before less important traffic (e.g., cat videos).

## R
**Ransomware** Malicious software that encrypts a system, rendering it unusable unless the victim pays for the decryption key.

**RBAC** Role-Based Access Control. Users are assigned roles (often via group memberships in AD or Entra ID) that define their permissions.

**Risk** An element of uncertainty combined with an unwanted consequence, often expressed as _probability × consequence_.

**Risk assessment** A structured process to identify and assess risks, proposing mitigating measures.

## S
**Same-Origin Policy (SOP)** A fundamental web security mechanism restricting resource sharing to the same origin (protocol, host, and port).

**Security Assertion Markup Language (SAML)** Open standard for authentication and authorization, typically between an identity provider and a service provider or application. 

**Security Champion** An individual within a project who champions security best practices and awareness, though not necessarily an expert.

**Signature** Electronic documents or messages can be signed using cryptographic keys, allowing verification that the signer had access to a specific private key.

**Social engineering** Manipulating people to gain access to information or locations. For example, an attacker posing as a contractor to enter an office building.

**Spear phishing** A phishing attack targeting a specific individual (e.g., a company CEO).

**SQL injection** An attack that exploits vulnerabilities to modify or run custom SQL queries on the backend.

**SSL** Secure Sockets Layer; a precursor to TLS for encrypting connections. Now considered outdated.

**Symmetric encryption** Encryption where both sender and recipient use the same key to encrypt and decrypt messages.


## T
**TCP** Transmission Control Protocol. A packet-based protocol where senders retransmit packets if no acknowledgment is received. Contrasts with UDP. Layer 4 of the OSI model.

**Threat modeling** Analyzing a project or system to identify potential threats and weaknesses.

**TLS** Transport Layer Security; the successor to SSL. Provides encryption for HTTPS and other protocols.

**Trojan horse** Often shortened to “trojan.” Malicious software disguised as something benign.

## U
**UDP** User Datagram Protocol. A packet-based protocol where the sender does not wait for acknowledgment. Contrasts with TCP. Layer 4 of the OSI model.

## V
**Vulnerability** A weakness in a system that attackers can exploit to perform unwanted actions.

## W
**Web Application Firewall (WAF)** A firewall specifically designed to protect web applications, dynamically detecting and blocking attacks like SQL injection.

**Whitelisting** The process of explicitly allowing only certain items or connections (e.g., IP addresses). Implies that nothing is allowed by default.

**Wi-Fi Protected Access (WPA)** Protocols for wireless encryption, available in versions 1, 2, and 3.

**Wide Area Network (WAN)** A network that spans a large geographical area, often linking multiple LANs into a bigger network.

**Wired Equivalent Privacy (WEP)** An outdated and highly insecure protocol for encrypting wireless networks.

**Wireshark** A network analysis tool that can capture and examine traffic in real time or after the fact.

## X
**XSS** Cross-Site Scripting. An attack that injects malicious scripts via a URL or input fields not properly validated.

## Z
**Zero-day** A vulnerability not previously disclosed and exploitable immediately.

**Zero Trust** A security model rejecting unconditional trust of users or devices; continuously verifying they are allowed to perform each requested action.
