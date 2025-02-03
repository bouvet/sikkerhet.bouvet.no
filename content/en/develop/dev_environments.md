---
title: "Development Environment, Tools, and Build Environment"
weight: 1
translationKey: toolsenv
description: >
  The environments and tools we work with are essential for the project, and it is important that we have control over which tools are used and how they are configured.
---

The development environment and build environment are some of the most important aspects of a development project, and it is crucial that we have control over these dependencies.

There are many different ways to approach these environments; some develop and build locally on their own laptop, while others use a combination of dedicated development and build environments - based on cloud services like Azure DevBox or on-prem development servers.

Regardless of the solution chosen, there are some important points that should be documented and maintained - both to have a basis that can be threat modeled and validated, but also so that new team members can quickly onboard and get a "right" environment.

## Tools
Developers often have different preferences regarding the use of IDEs and extensions, and many have likely created a workflow that works for them. Remember that all tools must be kept up to date, and each new tool introduced increases the attack surface, especially when it comes to using extensions, such as those from Visual Studio Marketplace and similar sources.

## Development Environment and Build Environment
One of the major risk elements in all development is if
* unauthorized persons can access a machine where development or building is taking place
* the machine can access the internet without significant restrictions
* such machines lack monitoring

All developers who write code today have many dependencies on libraries and packages fetched from open-source ecosystems. Few of these have any relationship to security, and as we have seen time and again, malicious actors can take over such components or create their own copies under similar names. Such packages represent a significant risk as they can introduce backdoors that open up for unauthorized access or exfiltrate data from the machine to an external recipient.

Important measures to mitigate risk include:
* blocking all incoming network traffic
* blocking all outgoing network traffic
* only opening up the accesses that are absolutely necessary
* avoiding the use of general machines for internet browsing, office activities, and similar for development

It is clear that one cannot always justify setting up dedicated machines used only for development based on cost/benefit, but this should be considered on a case-by-case basis to ensure that one is aware of how this choice affects the risk profile of the project.

## More Information
* [Wikipedia: Programming tools](https://en.wikipedia.org/wiki/Programming_tool)
