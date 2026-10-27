---
title: "Code Review"
weight: 9
translationKey: codereview
description: >
  Code review means someone other than the author looks over a change before it is let into the solution. It is one of the cheapest security controls we have, and unlike most tools it can also ask the important questions about what the change means in a wider context.
---

Most teams already require code review: changes go in through a pull request, and someone has to approve before they are merged. Many fall short on one important point, though, and say little or nothing about what the person approving is actually supposed to look for. Once that becomes established practice, it is easy to end up reviewing on autopilot; _all the tests are green and we click approve because we have not found anything before_.

## What separates a security review from an ordinary code review

An ordinary code review typically asks: _does this change solve the task, and can we live with it?_ The questions are about readability, naming, structure, test coverage, and whether the change fits the rest of the codebase.

A security review adds another question: _what could this change be used for by someone who means us harm?_ The difference is not a separate meeting or a separate process — it is the same eyes on the same change, with an extra set of questions in mind.

* **What if?** Many security flaws are absences: the check that is missing, the limit nobody thought of, the error handling that was never written. A diff shows clearly what was added, but says nothing about what should have been added, or how something might fail unexpectedly.
* **Do not take the author's assumptions for granted.** The code is usually correct for the case the author had in mind. The question is what happens with input that is empty, enormous, the wrong type, the wrong character set, or that comes from a user with a different role than the author pictured.
* **Follow the data.** Where does the input come from, where does it end up, and who controls it along the way? Vulnerabilities rarely live on a single line, but in the distance between where data enters and where it is used.

{{< tip title="Note" >}}
A security review does not replace [security testing]({{< relref "develop/security-testing.md" >}}), and testing does not replace the review. They find different kinds of problems, and you need both.
{{< /tip >}}

## Changes that always deserve an extra pair of eyes

Not all changes carry the same risk. Adjusting a text string in the interface and changing who is allowed to do what are nowhere near equally dangerous. Some categories of change are more complex and carry a different kind of risk, and should therefore be gone through in more detail.

* **Authorization and access control.** Who gets to do what, and is it [checked every time]({{< relref "design/authentication-and-authorization.md#authorization" >}}) — or only in the interface? This is the most common serious finding in the industry, and sits at the top of the [OWASP Top 10]({{< relref "develop/security-practices.md#current-points-on-the-owasp-top-10" >}}) as _A01:2025 Broken Access Control_.
* **Cryptography and secrets.** Home-grown encryption, outdated algorithms, [keys that end up in code or logs]({{< relref "develop/secrets.md" >}}), or randomness that is not random enough. Using the platform's established libraries is almost always the right call, rather than inventing something yourself.
* **Query building and other string assembly.** Are queries, commands, or paths built by gluing together text with data from outside? Parameterized queries are the rule; string concatenation is the exception that has to be justified.
* **Deserialization and parsing of data from outside.** Anything that turns a document, a message, or a file into objects in memory is an attack surface. Ask which types can actually occur, and whether the format needs to be that flexible at all.
* **File handling.** Upload, download, and anything that assembles file paths. This is where path traversal lives, along with file types that should never have been allowed and files left where they do not belong.
* **Changes to the build chain.** [New dependencies]({{< relref "develop/software-supply-chain.md" >}}), [changes to the pipeline]({{< relref "deploy/cicd.md" >}}), new actions, or changed configuration often affect security more than the application code itself.

A practical move is to make this list explicit in the team: if a change touches any of it, it requires a review by someone who knows the area — not just an approval from whoever is free.

## A short checklist for the reviewer

The list is meant as a reminder, not a form to be filled in:

* Do I understand what the change actually does?
* Where does data enter this change, and how is it validated?
* Does this affect access control, directly or as a side effect?
* Have new secrets, keys, or permissions been added, and are they where they should be?
* What happens when something fails, and what is shown to the user?
* Do we have enough in the log to see when something goes wrong and work out what happened afterwards, and are we logging anything that should not be logged?
* Have new dependencies been assessed; are they maintained, and are they necessary?

## When the review becomes the bottleneck

With AI-assisted development it has become very cheap to produce code, while reviewing it costs the same as before. A team that delivers three times as many changes does not have three times the capacity to review them.
There is no way to read your way out of this. The answer is to spend the capacity where it does the most good:

* **Differentiate by risk.** Everything needs a review, but not everything needs the same depth. The categories above go to someone who knows the area; for the rest a quick look is enough.
* **Keep changes small.** AI makes large pull requests nearly free, but the cost of reading them is unchanged. A review of 2000 lines is not a review.
* **Move the mechanical work to tools.** Formatting, known patterns, stray secrets, and vulnerable dependencies should be caught by [automated controls]({{< relref "develop/security-testing.md" >}}) in the pipeline. Every finding a tool takes is attention freed up.
* **Require the author to be able to explain the change.** It moves the work to where it is cheapest, and it is the most effective filter you have against code nobody has really assessed.
* **Plan for the capacity.** If output grows sharply, review is a task that needs time set aside. If waiting for review is the dominant part of your lead time, it is the process that needs fixing — not the control that needs removing.

## Use AI to make the review more efficient

The same tools that make code cheap to produce can take on a large part of the review. The point is to put the requirements into the tool, not to ask for an assessment after the fact.

### Instructions

Instruction files are the project's standing orders to the AI tools. A requirement written down once applies to every single change, instead of having to be caught by a reviewer one change at a time. This is where the security requirements belong, concrete enough to be verifiable:

* authorization is checked where the action is performed, not only in the interface
* queries are parameterized
* secrets are retrieved from the team's secrets management solution
* data from outside is validated against an explicit list of what is valid
* error messages shown to the user contain no internal details

"Follow best practice" means as little to a model as it does to a new team member. The instructions are [a security control on par with policy in CI/CD]({{< relref "plan/ai.md#agentic-development-instruction-files-and-guardrails" >}}): they live in the repository and are changed through pull requests. Examples and patterns can be found in [bouvet-ai-harness](https://github.com/Bouvet-AI/bouvet-ai-harness).

### Skills

A skill is a named way of working with steps and assessment criteria, stored in the repository and available to everyone. The checklist above is a natural candidate: as a skill it is run the same way every time, without anyone having to remember it.

The gain comes over time. Whatever the team finds in one review goes into the instruction or the skill, and is caught automatically the next time.

### The first pass

Let the model take a pass before the pull request is opened. It is the cheapest one, and the author still has the change in hand. The model is good at deviations from the instruction file, missing validation, and checks forgotten in one place but done in ten others — provided it gets the same context as a human: what the change is meant to solve and which requirements apply.

For low-risk changes this can be the whole review. That should be a choice the team makes and writes down.

### Where the human is still needed

AI is weaker at anything that requires knowing what the solution is meant to do: an authorization check that is present but checks the wrong thing, or a business rule that can be bypassed by taking the steps in a different order. [Quality assurance before merge]({{< relref "plan/ai.md#quality-assurance-before-merge" >}}) also requires that a developer has understood the change. The approval is still the human's.

## Further reading
* [OWASP: Code Review Guide](https://owasp.org/www-project-code-review-guide/)
* [OpenSSF: Security-Focused Guide for AI Code Assistant Instructions](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions)
* [Google: Code Review Developer Guide](https://google.github.io/eng-practices/review/)
