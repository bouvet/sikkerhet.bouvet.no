---
title: "Secrets, Keys, and Certificates"
weight: 7
translationKey: secrets
description: >
  Every development project needs secrets, keys, and certificates: values that grant access, that lock data, or that prove who a service is. They have to be stored safely, replaced at regular intervals, and renewed before they expire — and the three do not tolerate the same mistakes.
---

Secrets, keys, and certificates are everything that grants access, locks data, or proves identity: connection strings, passwords, tokens, encryption keys, and certificates. For cloud solutions, key vaults such as Azure Key Vault and similar have become the standard, because they cover storage, access control, and rotation in a single service.

## Basic Principles for Handling Secrets
* Secrets should never be hard-coded or checked into version control
* Scan the code, reject commits containing secrets, and rotate them immediately
* Keep track of which secrets you have, and what access they grant
* Limit their lifetime — no secret should live longer than a year, passwords and keys much shorter
* Grant access when it is needed, not to everyone all the time

## Secret, key, or certificate?
The terms are used interchangeably, but they do not tolerate the same mistakes:

* A **secret** grants access. If it is exposed, you replace it: the new value works immediately, and the old one stops working.
* An **encryption key** locks data. A key that has encrypted three years of data cannot simply be replaced — you need to know what is encrypted with which key, and either re-encrypt it or keep the old key in order to read the history.
* A **certificate** is an identity with an expiry date. It has to be renewed in time, and revoked if the private key goes astray.

The distinction decides what actually happens on the day something has to be replaced in a hurry. Failures here are _A04:2025 Cryptographic Failures_ on the [OWASP Top 10]({{< relref "develop/security-practices.md#current-points-on-the-owasp-top-10" >}}).

## Key management

### The key lifecycle
* **Generation.** Use a cryptographically secure source of randomness, in the service that is going to own the key — not on a developer machine.
* **Storage.** The key should not leave the key vault. Ask the vault to perform the operation instead of retrieving the key.
* **Rotation.** New data is encrypted with a new key. Old keys are kept for as long as data encrypted with them still exists.
* **Revocation.** A compromised key must be possible to disable quickly, and you need to know what stops working the moment it is.
* **Destruction.** A deleted key means deleted data: effective when erasing personal data, serious when it happens by accident.

Every step should be described, not merely configured: who can carry it out, and is it logged?

### Keys that encrypt keys
Data is encrypted with a data key, which is in turn encrypted with a master key held in a key vault (KMS) or in hardware (HSM). This is called envelope encryption, and the benefit is that the master key can be rotated without re-encrypting all the data. The master key never leaves the vault. An HSM additionally guarantees that the key can only be used, never read out — relevant when the requirements call for it, not as a default choice.

### Who owns the keys?
When the customer owns the data, it does not follow that we should own the keys. Clarify who generates them, who has access, and what happens when the contract ends. This belongs in the [division of responsibilities]({{< relref "plan/roles-and-responsibilities.md" >}}), not in a configuration file.

## Certificates
An expired certificate is one of the most common causes of downtime, and is rarely treated as a security matter until it goes wrong.

* **Issuance.** Know who issues your certificates, and which ones are only valid internally.
* **Renewal.** Automate it where you can. Manual renewal gets forgotten.
* **Monitoring.** Alert well before expiry. This should be [monitored alongside everything else in operations]({{< relref "manage/logging-monitoring.md" >}}), rather than sitting as a calendar reminder with one person.
* **Revocation.** If the private key has been exposed, renewal is not enough.

Expired certificates and unavailable key vaults are also [scenarios for the contingency plan]({{< relref "plan/business-continuity.md#scenarios-to-discuss" >}}).

## Cryptography and Hashing
Cryptographic and hashing algorithms take significant resources and _a lot_ of expertise to build correctly. Never write your own, no matter how secure they look. Do this instead:

* familiarise yourself with best practice for your language, framework, and platform
* avoid vulnerable algorithms such as SHA1, MD5, and DES
* follow current recommendations for key lengths and usage

## Encryption at rest and in transit
The platform usually encrypts storage and traffic by default, and that covers the most common threat: someone getting hold of a disk or listening in on the network. It does not solve the access problem — platform encryption is invisible to an attacker who already holds valid access. So consider whether:

* particularly sensitive fields should be encrypted in the application, so they are unreadable even to a database administrator
* traffic between internal services is encrypted on a par with traffic from outside
* backups and exported files inherit the encryption from the source — they do not necessarily do so

## Secrets and AI tools

### Secrets in prompts and context
AI tools often copy large parts of the codebase to understand the context. If the repository holds hard-coded secrets, configuration files with real values, or test data with passwords, these can end up with the AI service. That is often a breach of the agreement with the customer, and in the worst case the tool may attempt to use them.

{{< caution title="Main rule" >}}
Never paste secrets, tokens, or real credentials into a prompt, even when debugging or asking for help.
{{< /caution >}}

### AI-generated code that logs secrets
AI-generated code does not always follow best practice. Check before you run it:

* is sensitive data logged or written to stdout?
* are secrets placed in caches or temporary files?
* are secrets shown in error messages?

### Reduced access and exclusions
Some AI tools offer content exclusion, so that folders or file types are left out of what the tool reads. Use it as an extra layer, but not as your only barrier.

## Rotation after exposure
Secrets that have been exposed — in logs, in source code, to AI tools, or in any other way — _must_ be rotated. Removing them and hoping for the best is not enough; always assume an exposed value can be exploited. The same goes for keys and certificates.

{{< caution title="Remember" >}}
Secrets should <strong>never</strong> be checked into the source code system. Accidents happen, so if you are unlucky and do it anyway, you have to rotate the secret so that it is no longer valid. Deleting it from the history is not good enough!
{{< /caution >}}

## More Information
* [Secrets Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)
* [OWASP Cheat Sheet: Key Management](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)
* [OWASP Cheat Sheet: Cryptographic Storage](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)
* [Azure Key Vault - Quickstart for .NET](https://learn.microsoft.com/en-us/azure/key-vault/secrets/quick-create-net?tabs=azure-cli)
* [GitHub Copilot - Content Exclusion](https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot)
