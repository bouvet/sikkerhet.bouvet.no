---
title: "Secrets"
weight: 7
translationKey: secrets
description: >
  All development projects require secrets such as connection strings, identities, passwords, certificates, and much more. These must be stored securely, and we must ensure that we use them in a secure context with the right support tools and processes.
---
Secrets in development projects are represented as _connection strings_, _passwords_, _keys_, _certificates_, and any other sensitive information we do not want others to know about.

There are many different approaches to handling these, and this has evolved as new services emerge. For cloud solutions, services like Azure Key Vault and similar have almost become standard, as these services handle multiple aspects of how to use and manage secrets.

## Basic Principles for Handling Secrets
* Secrets should never be hard-coded or checked into version control systems
* Verify compliance by scanning the code - reject commits with secrets and rotate them immediately!
* Keep track of which secrets you have and what access they provide
* Limit the lifetime of secrets - no secrets should live more than a year, passwords and keys much shorter
* Team members should not always have access to all secrets; elevate or provide access as needed

## Secrets and AI tools
When AI tools are used in the development process, new ways for secrets to be exposed arise.

### Secrets in prompts and context

AI tools such as Copilot, Claude, or others often copy larger parts of the codebase to understand the context. If the repository contains hard-coded secrets, example configuration files with real values, or test data with passwords, these may be sent to the AI service's servers. If this happens, there is a good chance it constitutes a breach of the agreement with the customer. There is also always a risk that the AI tool may attempt to connect using the credentials. Without other security barriers in place, this could in the worst case result in data being modified or otherwise affected.

{{< caution title="Main rule" >}}
Never paste secrets, tokens, or real credentials into a prompt, even when debugging or asking for help.
{{< /caution >}}

### AI-generated code that logs secrets

It is not uncommon for AI tools to hallucinate or produce code that does not follow best practices. You must be especially vigilant in catching cases where AI-generated code stores sensitive information such as secrets, database queries, or configuration files in logs.

Before running AI-generated code, check carefully:
* Is sensitive data being logged or written to stdout?
* Are secrets placed in cache or temporary files?
* Are secrets surfaced as part of error messages?

### Reduced access and exclusions

Some AI tools such as GitHub Copilot offer content exclusion, allowing you to exclude folders or file types from being read by the tool. Use this to prevent entire configuration files or test data from being sent to AI services. This should not be the only security barrier preventing AI tools from accessing secrets, but it can provide an extra layer of protection.

## Secret rotation

Secrets that have been available to AI tools, logs, checked into source code, or otherwise exposed to others _must_ be rotated. It is not enough to remove the secret or hope that nothing goes wrong; once it has been exposed, you should always assume it can be exploited. This applies to certificates, keys, and other credentials as well.

## Cryptography and Hashing
Cryptography and hashing algorithms are complex topics, and it requires significant resources and _a lot_ of competence to build good algorithms that are secure. For this simple reason, you should **never** create your own, no matter how clever and secure it seems to be.

What you should do instead is:
* Familiarize yourself with best practices for your programming language, framework, and platform
* Ensure you are not using vulnerable algorithms such as SHA1, MD5, or DES
* For cryptography, understand the recommendations for key lengths and usage

{{< caution title="Remember" >}}
Secrets should <strong>never</strong> be checked into the source code system!
{{< /caution >}}

## More Information
* [Secrets Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)
* [Azure Key Vault - Quickstart for .NET](https://learn.microsoft.com/en-us/azure/key-vault/secrets/quick-create-net?tabs=azure-cli)
* [GitHub Copilot - Content Exclusion](https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot)
