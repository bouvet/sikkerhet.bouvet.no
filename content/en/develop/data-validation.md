---
title: "Data Validation"
weight: 3
translationKey: dataval
description: >
  Data validation reduces both security risk and quality issues. Never trust data blindly, whether it comes from users, integrations, or AI pipelines.
---

Data validation is fundamental in all development projects. The goal is to ensure that data has the expected structure, content, and quality before it is used further in the system.

Incorrect or malicious data can lead to:

* security vulnerabilities such as injection and XSS
* functional errors and unstable operations
* poor decision basis in reporting and analysis
* reduced quality in AI models and evaluations

OWASP Top 10 has consistently shown that inadequate input validation is a recurring cause of serious vulnerabilities. The main rule is simple: data should be validated at the trust boundary, regardless of the source.

## Core principles
Data validation should be built into architecture and code from the start, not added as an afterthought.

* **Validate early**: Stop invalid data as close to the entry point as possible.
* **Validate explicitly**: Define what is valid instead of trying to block everything that looks dangerous.
* **Validate in layers**: Combine client-side validation, server-side validation, and validation in messaging and integration layers.
* **Fail closed**: If data cannot be verified, reject it or quarantine it.
* **Log anomalies**: Log validation errors with enough context for debugging, without leaking sensitive data.

## Recommended controls in all projects
Minimum controls that should be in place in typical development projects:

* **Schema and contracts**: Use clear schemas (such as JSON Schema, OpenAPI, or equivalent) between services to catch contract violations early.
* **Type and format validation**: Validate data type, length, allowed characters, ranges, date formats, and encoding.
* **Semantic validation**: Check rules not captured by type alone, such as valid state transitions or dependencies between fields.
* **Context-aware output escaping**: Escape data correctly before rendering in HTML, URL, JavaScript, or SQL contexts.
* **File validation**: Verify MIME type, file signature, file size, and allowed file types. Scan uploaded files for malware.
* **Isolated processing of risky data**: Consider sandboxing for parsing and processing potentially dangerous files.
* **Browser protection**: Use [Content Security Policy (CSP)](https://en.wikipedia.org/wiki/Content_Security_Policy) to reduce the impact of XSS.

## Data quality and data preparation for AI systems
For solutions using AI, the controls above must also be extended. Data validation is both a security measure and a quality measure.

Controls that should be explicitly defined:

* **Input validation for model calls**: Validate format, size, language, structure, and allowed fields before data goes to the model or embedding pipeline.
* **Data quality for AI**: Check for missing values, duplicates, outliers, labeling errors, and skews that affect model performance.
* **Data preparation**: Make preprocessing deterministic, testable, and versioned so that transformations can be reproduced.
* **Dataset hygiene for evaluation**: Keep training, validation, and test sets separate and avoid data leakage between them.
* **Contamination**: Ensure evaluation sets are not polluted by production data, prompt history, or manual corrections from operations.
* **Traceability**: Document data sources, transformations, dataset versions, and evaluation basis.

## Practical implementation in teams
Data validation works best when it is a regular part of the delivery process.

* Define validation rules as code and version them.
* Include validation tests in CI/CD for contracts, schemas, and critical transformations.
* Monitor validation failures in production to catch data drift and integration breaks early.
* Conduct regular reviews of rules when data sources, APIs, or models change.

## Further reading
* [OWASP Top 10](https://owasp.org/www-project-top-ten/)
* [OWASP Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)
* [OWASP File Upload Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html)
* [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
* [OWASP Artificial Intelligence Security Verification Standard (AISVS)](https://owasp.org/www-project-artificial-intelligence-security-verification-standard-aisvs-docs/)
