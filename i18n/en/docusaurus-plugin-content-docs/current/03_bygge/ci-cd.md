---
sidebar_position: 2
title: CI/CD
---
# CI/CD

The use of a good CI/CD-system (Continuous Integration / Continuous Deployment) will help you increase the level of security in the end product! Here are a few measures that should be implemented as part of any CI/CD process.

:::tip pre-commit
A tip is to use a [pre-commit hook](https://pre-commit.com) to handle linting, formatting and testing on your local workstation. This hook can then be reused in the CI/CD process, resulting in less maintenance while standardizing the process and helping you uncover issues early in the release process. 
:::

Please note; the tools described here may come with different licenses. Some are free to use even for commercial projects, while others may have a free license on for _non-commercial use_. For these you need to buy the required number of licenses in order to use the tool. It is important that this is discussed within the project team to agree on what is needed and to settle the licensing cost issue. _Public_ repositories on  Github will automatically offer some functionality which is pay-for-use in private repositories. 

## Software compostion analysis (SCA)

Software composition analysis (SCA) can be enabled automatically as part of the CI/CD pipeline. See [Software composition analysis (SCA)](software-composition-analysis-sca.md) for more information. 

Be careful when it comes to stopping the build process based on feedback from the SCA tools, as new vulnerabilities are discovered on a frequent basis. Not all vulnerabilities are valid in all contexts, so please consider the impact before acting on it. In some cases the consequence of a new vulnerability are less severe than not deploying!

## Testing

Running tests in the CI pipeline is always a good thing, as this allows you to consistently run tests as part of the build process. Regardless of the amount of testing done in the project, some tests should always be part of this for security reasons: 

- Test all relevant endpoints for 401/403 responses
- Test any code handling authorizations (who gets to do what). Centralizing this logic is always a good thing, don't let the various parts of the codebase implement their own authorization handling logic!
- Test for strict [JWT validation](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/06-Session_Management_Testing/10-Testing_JSON_Web_Tokens)

## Static Code Analysis (SAST)

Static Code Analysis should run as a part of the CI/CD. See [Static Code Analysis (SAST)](statisk-kodeanalyse-sast.md) for more info.
The pipeline can then be configured to fail if discovered vulnerabilities are severe enough or if other issues are uncovered. 

## Secret scanning

People makes mistakes, and it's quick and easy to accidentally commit a secret to the version control system. If this happens, a scan configured as part of the CI/CD can notify you about this so that you can disable them. In certain cases a CI/CD system can also do this automatically.

A few alternatives:

- [Github secret scanning](https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning)
- [truffle-hog](https://github.com/trufflesecurity/trufflehog)
