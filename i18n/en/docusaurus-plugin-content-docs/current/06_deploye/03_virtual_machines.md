---
sidebar_position: 3
title: Virtual Machines
---

# Virtual Machines

Virtual machines (VM) have traditionally been used for the same purposes as physical machines. The big difference has been the simplified administration and management of the virtual machines compared to their physical counterparts. A virtual machine can run the same operating system and applications as a physical machine, and has to be secured in the same way to prevent successful attacks. 

Over the past few years many use-cases have transitioned to using serverless computing rather than virtual (or physical) servers, typically through cloud services or container technology. This reduces complexity and will in many situations be a better solution than to spin up or shared dedicated servers. They do come with their other security considerations, so please make sure you understand the technology properly before deploying it to the public. 

:::info Please note

As a general rule, use cloud services or containers if possible, and only use VMs if this isn't feasible for your project. 

Dersom du kan benytte containere, bør dette prioriteres.

:::

- [Virtual machines](#virtual-machines)
  - [Use-cases](#use-cases)
    - [Desktop applications](#desktop-applications)
    - [Test machines](#test-machines)
    - [Legacy server setups](#legacy-server-setups)
  - [Software](#software)
    - [Security updates](#security-updates)
    - [Kernel security modules (Linux)](#kernel-security-modules-linux)
  - [Authentication and logon](#authentication-and-logon),

## Use-cases

Virtual machines can be used for several different tasks. If used, security must be managed over multiple domains, such as OS-updates, other dependencies such as web servers, [networking](../07_drifte/02_network.md) and monitoring to name a few. 

### Desktop applications

Rather than using their own laptops, it is possible to use virtual desktops to provide development environments or other types of applications. Many applications will benefit from this as the environment wont vary from user to user. This solution makes it easier to enforce security controls and you can even offer different environments for different applications differing in eg. hardware requirements. 

This reduces complexity for the end-user quite a bit, as their laptops doesn't have to be configured for a specific project or technology stack, making it easier to onboard new people or switch between different projects. 

### Test machines

VMs are often used to test desktop and/or legacy applications, as they are easily deployed and managed. Deployments for test purposes should be automated using [CI/CD](../03_bygge/ci-cd.md) to reduce the chance for human errors, also including enrollment into AD domains, SSH key generation etc. 

### Legacy server setups

If the goal is to migrate from on-prem to the cloud, it's possible to migrate VMs. Some providers allow you to import the VM directly, or alternatively you can create similar but new VMs with similar configurations in the cloud service, transferring any data or applications manually at first. Once the first server is in place, the setup should be documented and automated so new deployments can be done using [CI/CD](../03_bygge/ci-cd.md).

Using CI/CD to deploy the VM and the legacy software and configuration gives you more control over the environment and simplifies setting up additional instances of the VM to troubleshoot or test improvements. From a security perspective using CI/CD is also recommended as the automated steps can be easily analyzed and modified over time. 

## Software

If you need to run your own VM, try to avoid installing OS components outside the minimum requirements. Any component added to an OS can introduce complexity and vulnerabilities to the system as a whole, just as with [libraries used during development.](../02_utvikle/03_biblioteker.md) 

Fewer components also means fewer things that can break between OS upgrades, but remember to use a trusted source for anything you decide to install. Automating installation and removal is preferable to doing this manually, as it can be reproduced in other environments. 

### Security updates

Security updates of OS or underlying components should be automated if possible. If VMs are [turned off](#automatisk-avstengning) when not in use, a procedure to start them prior to applying security updates must be in place. 
Sikkerhetsoppdateringer bør automatiseres dersom mulig. Dersom du [skrur av](#automatisk-avstengning) virtuelle maskiner når de ikke er i bruk bør disse startes automatisk før utrulling av sikkerhetsoppdateringen startes.

:::info Note

Manual updates should be avoided at all costs. Create an automated procedure for how to keep VMs up to date and how to monitor this. If automating the process isn't possible, a process must be implemented, documented and verified. 

:::

### Kernel-security-modules (Linux)

One of the following should be installed and configured if you decide to use Linux on a VM:

- SELinux (*Security-Enhanced Linux*)
- AppArmor

## Authentication and logon

As VMs are often used to run applications that require user interaction, a logon is required. While SSH or RDP connections have been the traditional choice for this, it often requires exposing the VM to a wide range of IPs resulting in a higher chance of someone attempting to attack the VM. 

By using a separate node as a jumping point to the VM, you can block everything by default except that node. This by itself increases security, and it also allows you to implement additional layers of security by using other authentication and verification methods than SSH and RDP traditionally offers. This concept is often referred to as a jump host, jump server or jump box. The following suggestions can be used as a starting point on how to secure this node: 

- Use an Identity Provider to authenticate users. 
- Use `Single Sign-On` where possible
- Require MFA or certificate based logons from all users on at least one logon step.
  - ...But remember to not overdo the use of MFA!
- [Isolate](../07_drifte/02_network.md#isolasjon-av-tjenester) the computer.
  - Use `Bastion hosts` or similar services allowing you to connect to the computer without direct access. 
  - Never expose ports used for remote management on the public internet. 
  - Configure the system so that all logins are time-limited. 
  - Use `Just-in-Time` network configurations where technology such as `Bastion hosts` isn't possible.
    - And configure this to block everything by default, opening up specific IP-ranges as needed. 
- Configure [`fail2ban`](https://www.fail2ban.org/wiki/index.php/Main_Page) or similar tools to block clients attempting to brute-force passwords. 
- Configure SSH to only allow the desired logon methods:
  - Disable the ability to login as `root`
  - Disable password logins if certificates, ssh-keys or an identity provider is used for logging on
  - Disable X11-forwarding

```mdx-code-block
import Tools from '../08_monitorere/_monitoring_tools.mdx'

<Tools />
```

