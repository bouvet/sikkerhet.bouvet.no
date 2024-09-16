---
sidebar_position: 2
title: Secrets
---

# Secrets
:::tip In Short
All development projects require secrets such as connection strings, identities, passwords, certificates, and much more. These must be stored securely, and we must ensure that we use them in a secure context with the right support tools and processes.
:::

Secrets in development projects are represented as _connection strings_, _passwords_, _keys_, _certificates_, and any other sensitive information we do not want others to know about.

There are many different approaches to handling these, and this has evolved as new services emerge. For cloud solutions, services like Azure Key Vault and similar have almost become standard, as these services handle multiple aspects of how to use and manage secrets.

## Basic Principles for Handling Secrets
* Secrets should never be hard-coded or checked into version control systems
* Verify compliance by scanning the code - reject commits with secrets and rotate them immediately!
* Keep track of which secrets you have and what access they provide
* Limit the lifetime of secrets - no secrets should live more than a year, passwords and keys much shorter
* Team members should not always have access to all secrets; elevate or provide access as needed

# Cryptography and Hashing
Cryptography and hashing algorithms are complex topics, and it requires significant resources and _a lot_ of competence to build good algorithms that are secure. For this simple reason, you should **never** create your own, no matter how clever and secure it seems to be.

What you should do instead is:
* Familiarize yourself with best practices for your programming language, framework, and platform
* Ensure you are not using vulnerable algorithms such as SHA1, MD5, or DES
* For cryptography, understand the recommendations for key lengths and usage

:::important Remember
Secrets should *never* be checked into the source code system!
:::

# More Information
* [Azure Key Vault - Quickstart for .NET](https://learn.microsoft.com/en-us/azure/key-vault/secrets/quick-create-net?tabs=azure-cli)
* [Github: Secret scanning](https://docs.github.com/en/code-security/secret-scanning)
