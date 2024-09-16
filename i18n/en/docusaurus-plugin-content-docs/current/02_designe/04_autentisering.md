---
sidebar_position: 5
---

# Authentication and Authorization
:::tip In Short
Authentication and authorization check respectively _who_ you are and _what_ you are allowed to do. These are important concepts that must be correctly implemented to ensure the security of a solution.
:::

Authentication and authorization are crucial in all development projects. In short, _authentication_ is about validating that a user represents the identity they claim to represent, typically by checking a username and corresponding password. _Authorization_ is about checking that the user is allowed to do what they are trying to do. These are often abbreviated to _authn_ for authentication and _authz_ for authorization.

## Authentication
When validating a user, the most important thing is to *not* create your own authentication solution! Ensuring that such solutions are actually secure is a huge task, and one should instead use established solutions for this!

Common approaches for handling authentication can be the use of third-party services or protocols that handle authentication against the customer's AD/Entra. In many cases, we want to use [Single Sign-On](https://en.wikipedia.org/wiki/Single_sign-on) (SSO) to avoid the user having to enter username and password, especially for internal business applications.

Common solutions for handling login are to use libraries that take care of the entire flow, such as `Microsoft.Identity.Web`. Other alternatives can be the use of:
* SAML
* Oauth 2.0
* OpenID Connect (OIDC)
* Kerberos
* LDAP

It is important to understand the needs of the solution and which authentication methods are available and possibly desirable.

## Authorization
The distinction between authentication and authorization is that authentication confirms who you are, while authorization checks that you are allowed to perform an action.

Similar to authentication, there are several approaches to how authorization is handled, and one needs to understand the best practices for the language and framework used.

There are still some main principles that should always be brought into the development process:

### _Default access_ should always be _no access_
This is also known as _default deny_, and is used to ensure that, for example, an unauthorized user does not have access to anything beyond what is explicitly allowed.

### Authorization should always be checked
If a user attempts to perform an action, it should always be checked whether the user actually has access to this. Remember that this check must be made against the authoritative source for access rights, and never against data that the user can manipulate!

### Users should always be given the least possible access
Also known as the _principle of least privilege_. A user should never be given more access than is needed to perform a specific task. This is done to reduce the attack surface if a user is compromised, so that the scope of damage can be limited.

### Role-Based User Access
Using roles, _role based access control_ (RBAC), is a common approach to granting user access. The goal is to define standard roles for an application so that access can be based on these. A common way to handle this, for example, with Entra or AD is to have:
* access groups with all users. The access groups are added as members in
* role groups, which are given access in the application.

This provides a better overview of who has access to what compared to users with individual access.

# More Information
* [Wikipedia: Authentication](https://en.wikipedia.org/wiki/Authentication)
* [Wikipedia: Authorization](https://en.wikipedia.org/wiki/Authorization)
