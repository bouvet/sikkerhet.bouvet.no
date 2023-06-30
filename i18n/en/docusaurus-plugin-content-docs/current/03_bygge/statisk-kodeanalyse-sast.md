---
sidebar_position: 4
title: Static Application Security Testing (SAST)
---

# Static Application Security Testing (SAST)

Static Application Security Testing (SAST) is a technique which can be used to analyze a code base to discover potential defects and vulnerabilities. 

> "Don't live with broken windows"

For a SAST tool to be effective, all discovered issues has to be addressed and either whitelisted or removed. Having a code base with hundreds or thousands of potential defects which "everybody" on the project knows are false positives, will only result in real warnings being hidden in the noise, ensuring that nothing is fixed. Use time to configure the tool correctly and implement best practices for the combination of tool and platform.

SAST metrics is an important tool for any project, so it is important that a Security Champion or a specific person is tasked with monitoring the tool and its output. 

List of tools:
- [SonarQube](https://www.sonarqube.org/features/security/)
- [SonarCloud](https://www.sonarcloud.io)
- [CodeQL](https://codeql.github.com)
- [Bandit](https://github.com/PyCQA/bandit) (Python only)
- [Snyk Code](https://snyk.io/product/snyk-code/)
- [dockle](https://github.com/goodwithtech/dockle) - Security linter for Dockerimage

