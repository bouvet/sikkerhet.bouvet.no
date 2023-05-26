---
sidebar_position: 3
title: Software composition analysis (SCA)
---

# Software composition analysis (SCA)

All dependencies used in a system can have known vulnerabilities. These are often registered as Common Vulnerabilities and Exposures (CVE), a system to register and classify software security defects. By using a source compositioning tool, dependencies can checked for CVEs and action can be taken depending on the information uncovered. This process is often known as Source Compositioning Analysis. 

A SCA-tool will analyze all dependencies and notify you of its findings. 

- [Snyk Open Source](https://docs.snyk.io/products/snyk-open-source) (Python, Java, JavaScript, C#, Go, Docker, ++)
- [Mend Bolt](https://www.mend.io/free-developer-tools/bolt/)
- [Dependency-Track](https://dependencytrack.org)
- [pip-audit](https://github.com/pypa/pip-audit) (Python)
- [npm audit](https://docs.npmjs.com/cli/v8/commands/npm-audit) (JavaScript)
- [clair](https://quay.github.io/clair/) (Docker)

Be aware that these tools require a defined process to ensure that discovered vulnerabilities are managed and addressed, and that findings are analyzed for impact to the system. In many cases simply upgrading to a more recent version of the library will be easier than analyzing how a vulnerability affects a system, so this should be explored as an initial response. Some tools can automate this process, allowing the team to review the result before approving the automated pull request. 

The following is a list of tools which will notify you when new versions of dependencies are found, and which can be configured to automatically upgrade the dependencies:
- [Mend Renovate](https://www.mend.io/free-developer-tools/renovate/) (Python, Java, JavaScript, C#, Go, ++)
- [Dependabot](https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates) (Github) (Python, Java, JavaScript, C#, Go, ++)
