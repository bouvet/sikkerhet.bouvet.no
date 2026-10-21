---
title: "Using Artificial Intelligence"
weight: 4
translationKey: ai
description: >
  The use of artificial intelligence (AI) has exploded in recent years, and the technology has advanced to the point where it can be a useful tool for brainstorming solutions, writing, debugging, or evaluating code. But what does this mean for security?
---

This page is about the use of AI in the development cycle, not the general use of AI solutions. The goal is to use AI as a productivity tool without losing control of security, quality, and traceability.

{{< caution title="Use of AI tools" >}}
Remember that Bouvet and most clients have guidelines for the use of AI that __must__ be followed. It is __not__ permitted to use AI tools without explicit approval from Bouvet or the client.
{{< /caution >}}

## What we are allowed to use
On Bouvet equipment, we can only use AI tools that are explicitly permitted in [Bouvet's AI policy](https://ai-policy.bouvet.no/). On client equipment, we can only use tools that the client has approved.

The reason is simple: AI tools often process sensitive information and can perform actions that affect codebases, builds, and deliveries.

Even though we __can__ use a tool technically, that doesn't mean we __should__ use it. If a new tool can provide value in the project, create a BSD ticket for evaluation.

## Practical advice for safe AI use in development
To get value from AI in development without unnecessarily increasing risk, the team should have some simple, shared working rules. These should be used in daily work, not just as policy on paper. Each team should develop their own rules and procedures that fit the context they work in, so that both our and the client's security requirements can be met.

### This is what we should do

* use AI on bounded tasks with clear goals and a well-defined framework
* treat AI contributions as third-party code: You must understand and be able to explain the code before it is merged or run
* document AI usage where it is relevant for traceability and audit
* use as little data as possible in prompts (data minimization), and only share what is needed for the task
* restrict AI tool access to the minimum necessary level

### This is what we should avoid

* pasting secrets, personal data, or customer information into prompts
* letting AI make architectural or security decisions without human review
* disabling review or test requirements because the code looks right at first glance
* giving tools broad repo, cloud, or production access without clear need and approval
* letting AI merge, deploy, or rotate secrets without explicit human approval

The goal is not to slow down development, but to use AI in a way that is safe, predictable, and traceable.

{{< caution title="Running AI-generated code" >}}
Code and scripts suggested by AI should always be reviewed before running on a development machine. Pay special attention to commands that download content, change file permissions, start background processes, or write to system areas. If you run the AI tool in a confined sandbox, you reduce the risk and can to a greater extent let the AI tool work autonomously.
{{< /caution >}}

## Prompting in practice
Good prompting practices reduce risk and increase quality. A useful principle is that the prompt should be specific enough to give a good answer, but limited enough that you maintain control of the data and results.

### This is what we should ask for

* describe requirements and framework first (language, framework, security requirements)
* ask for small, reviewable changes rather than large rewrites
* ask for explicit assumptions, limitations, and uncertainty
* ask for test suggestions together with code suggestions
* ask the AI to explain the security consequences of the proposed solution
* ask for alternatives with pros and cons when the solution affects security or operations

### This is what we should avoid

* prompts that contain secrets, tokens, or customer data
* prompts that ask AI to bypass policy, logging, or security controls
* prompts that give AI open authority to "fix everything" in the entire codebase
* prompts that ask AI to make changes directly to production-like environments without review
* prompts that mix multiple unrelated tasks so that the result becomes difficult to quality assure

Unless explicitly approved, AI tools should not have access to data beyond what is needed for the task.

Check that the repository does not contain data files, secrets, or other sensitive information. Use [`.gitignore`]({{< ref "develop/git.md" >}}), git pre-commit hooks with secret detection, and key vaults to reduce the risk of leaks.

## AI-specific threats in the development cycle
When AI is used in development, threats emerge that are not always covered by traditional controls:

* prompt injection in code, documentation, or issues that affect the agent's behavior
* data exfiltration via prompts, logs, plugins, or integrations
* hallucinations that introduce false APIs or insecure patterns
* poisoned context from compromised dependencies or malicious code examples
* excessive reliance on autonomous execution without human oversight

These threats must be handled with technical barriers, clear processes, and active monitoring.

## Agentic development, instruction files, and guardrails
Agentic tools can analyze codebases, suggest changes, create pull requests, and in some cases perform actions automatically. This requires stricter control than typical code assistance.

{{< caution title="Leakage of sensitive data" >}}
Some AI tools can commit and push code automatically. Ensure that sensitive information such as passwords, certificates, and data does not leak.
{{< /caution >}}

For teams that want to get started quickly with safer agentic development, there is an internal Bouvet repository with examples and patterns: [bouvet-ai-harness](https://github.com/Bouvet-AI/bouvet-ai-harness). The repository offers a set of repository artifacts and working methods that make AI-assisted development more consistent, efficient, and measurable, and can be used as a practical starting point for instruction files, workflows, and measurable quality criteria.

Recommended guardrails:

* use instruction files that define what the agent can and cannot do
* keep instructions concrete, testable, and project-specific
* restrict permissions (least privilege) for repos, CI/CD, and cloud access
* require human review before merge and deploy
* block automatic changes to security-critical files without explicit approval
* log agent actions so that contributions are traceable and verifiable
* use hooks from git and AI tools to establish additional guardrails

For teams that actively use instruction files, these should be treated as a security control equivalent to CI/CD policy.

## Quality assurance before merge
AI contributions must not go to production without full quality assurance. At minimum, the following should be in place:

* code review by a developer who understands the change
* relevant tests, including security tests where applicable
* control of dependencies and license requirements
* verification that secrets have not been introduced
* assessment of whether the change affects the threat model or security requirements

## More information
* [OpenSSF: Security-Focused Guide for AI Code Assistant Instructions](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions)
* [GitHub Copilot Trust Center](https://copilot.github.trust.page/faq)
* [Content exclusion for GitHub Copilot](https://docs.github.com/en/copilot/concepts/context/content-exclusion)
* [Rules Files for Safer Vibe Coding](https://www.wiz.io/blog/safer-vibe-coding-rules-files)
* [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
* [OWASP Cheat Sheet - AI Agent Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html)
* [Internal repository: bouvet-ai-harness](https://github.com/Bouvet-AI/bouvet-ai-harness)
