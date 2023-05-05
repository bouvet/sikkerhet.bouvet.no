---
sidebar_position: 3
title: Source code
---

# Source code

This article is about the source code of the software. For this article this consists of the deliverable running in production, but not necessarily everything else hosted in version control such as documentation, IaC, CI/CD pipelines and so on. 

## Authentication

Authentication is the process of identifying a user. Doing this properly can be both complex and difficult, so avoid creating your own solution for this. Use proven off-the-shelf solutions to handle this!

Most organization have an existing identity provider, such as Azure Active Directory, IdentityServer, KeyCloak, or LDAP. If the customer hasn't already established this, or the existing solution cannot be used, [KeyCloak](https://www.keycloak.org) is the recommended solution. This is a free alternative with a large feature set and an active community. 

- Don't create your own authentication code!
- Separate the authentication process from the application itself if possible
- Use OAuth2 / OpenID Connect
- Don't use [_password_ grant](https://oauth.net/2/grant-types/password/)
- For _public clients_ (web applications) [_Authorization Code w/PKCE_ grant](https://oauth.net/2/pkce/) should be used.

Even if an off-the-shelf solution is used to the authentication itself, the API requests have to be verified at certain points. 

- Ensure correct validation of access tokens (JWTs)
  - Refer to [OWASP - Testing JSON Web Tokens](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/06-Session_Management_Testing/10-Testing_JSON_Web_Tokens)

## Authorization

Authorization is the process of figuring out if a user have the permissions to execute a specific operation or not. Examples of these can be to delete a user, modify settings and so on. 

This proces often happens at a low level, and is often left to the developers to implement and use, as it will often depend on the problem domain the system attempts to handle. 
Before starting this job some of the most used _access-control models_ should be investigated to see if these can be used in your system. 

- Design the authorization system around a well-proven and well-defined model:
  - Discretionary access controls
  - Mandatory access controls
  - Role-based access controls (RBAC)
  - Attribute-based access control (ABAC)
- Perform the authorization check on the lowest level possible
  > Adding a check in the controller, which is typically at the beginning of a chain can allow the user access to unintended operations and data. Therefore, the check should be implemented as close to the operation as possible, eg. in a database interface. 
- Centralize the authorization logic. 
  > Having multiple implementations or copies of the authentication logic in the code base will increase the chance that weaknesses exists. 
  Detecting, identifying and fixing errors will also take longer and be more demanding. 

## Third-party systems

Several applications sends or receives data from other systems. We might be great at validating data from actual end users in REST APIs or frontend forms, but are we doing the same great job when we communicate with other systems? 

Elements to consider when dealing with other systems:

- Validate and sanitize all data! ([zero trust](https://en.wikipedia.org/wiki/Zero_trust_security_model))
- What happens if any of the external systems become unavailable?
  > A third-party _[SLA](/planlegge/disaster-recovery#service-level-agreement-sla)_ will directly affect our own. 

## Attack methods

There are some specific security risks that keeps repeating themselves over the years. The organization [OWASP](https://owasp.org) (Open Worldwide Application Security Project) gathers data and publishes a list of the 10 most critical vulnerabilities and weaknesses ranked every ~3 years. In the list they describe the issue, or typical permutations of the issue along with preventative or risk-reducing measures.

The most recent one is from 2021 and had the following elements, where 1 is the most serious:

1. Broken Access Control
2. Cryptographic Failures
3. Injection
4. Insecure Design
5. Security Misconfiguration
6. Vulnerable and Outdated Components
7. Identification and Authentication Failures
8. Software and Data Integrity Failures
9. Software Logging and Monitoring Failures
10. Server-Side Request Forgery

Any developers in Bouvet should be familiar with this list. The goal isn't that you should know everything about each entry, but to know that they exist and what the best practices are:
- Familiarize yourself with [OWASP Top 10](https://owasp.org/Top10/)
  - Use this information to assess and discover vulnerable code!

## Security critical code

The development team should establish a culture and a process to flag parts of the code base as _critical_. This code should then result in the following measures being implemented: 
- A more exhaustive _code review_ during changes, with particular focus on security. 
- Pair-programming to ensure 4-eyes on the code during changes
- Request a QA by a senior developer, an experienced security-champion or a security expert. 
- Be familiar with the security recommendations and best practices for relevant frameworks and libraries. 

## Encryption

:::danger
NEVER write your own encryption/hashing algorithm. Familiar yourself with best practices on your platform and the requirements for your context, and use libraries which has undergone proper validations. 
AKA: Don't roll your own crypto
:::

- Encrypt all network traffic between two services (TLS). This includes things such as:
  - Databases
  - Queue-systems
  - Third-party APIs
- If sensitive or confidential data are to be stored, these should be hashed or encrypted as required. 
  - Please ensure that you familiarize yourself properly with any library used for this process!

## Secrets

Multiple security incidents have started with a secret being leaked somehow. This could happen by hard-coding a secret in the source code, writing it down and storing it somewhere missing proper security controls (such as a public storage acount / S3 bucket) and so on. In order to avoid such incidents in Bouvet, every project shall use a [version control system](/utvikle/version_control), and have a process for how to manage secrets: 
- Secrets are never to be stored in the source code
- Use a `.gitignore`-file to preven accidental _commits_ 
  - The same applies for eg. Docker by using a `.dockerignore`-file
  - To generate a good `.gitignore`-file, use [gitignore.io](https://www.toptal.com/developers/gitignore/) 
- Secrets which still end up in the version control shall be invalidated ASAP, even if you delete the history. 
- Consider defining an expiry on secrets with proper notification before this happens. 
- Use different secrets for all environments. Secrets should be unique and never reused! 

:::danger
NO secrets are to be added to the source code (passwords, tokens, keys, etc.)
:::

## Scanning the source code

There are many tools available which will help you identify weaknesses and vulnerabilities in the source code. For more information, please refer to _[CI/CD](/bygge/ci-cd)_
