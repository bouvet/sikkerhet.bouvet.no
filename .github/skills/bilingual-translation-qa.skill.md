# Bilingual Translation QA Skill

Use this skill to review Norwegian and English article pairs for translation quality, content parity, and publication readiness.

This skill is for QA and revision. It is not the primary content generation skill.

## Purpose

Detect meaningful deviations between Norwegian and English pages while allowing natural language differences.

Focus on:
- missing content
- changed meaning
- broken or mismatched links
- structural issues that affect navigation and maintainability
- language quality defects that reduce clarity

## Scope

- Source of truth is Norwegian unless explicitly agreed otherwise.
- Review one Norwegian page and its English counterpart as a pair.
- Evaluate both linguistic quality and content parity.
- Do not demand literal sentence-level equivalence.

## Output Format

Return findings first, ordered by severity.

For each finding, include:
- Severity: Critical, Major, Minor, Info
- Type: Missing content, Meaning shift, Link issue, Structure, Language quality
- Location: file path and heading
- Evidence: short quote or concise explanation
- Recommendation: concrete fix

Then include:
- Open questions or assumptions
- Optional short summary

If no findings are found, state this explicitly and mention residual risk.

## Severity Model

### Critical

Use Critical when deviation can lead to wrong implementation, non-compliance, or operational risk.

Examples:
- required controls missing in English
- warning or prohibition omitted
- incident, recovery, or access-control guidance materially changed
- mandatory process changed from requirement to suggestion

### Major

Use Major when content is incomplete or misleading, but not clearly critical.

Examples:
- section or subsection missing
- key checklist bullets missing
- AI-specific constraints present in Norwegian but missing in English
- internal links point to wrong page or non-equivalent topic
- duplicate or stale section appended after rewrite

### Minor

Use Minor for quality defects that do not materially change decisions.

Examples:
- grammar and spelling errors
- awkward phrasing
- inconsistent terminology when meaning is still intact
- non-blocking heading differences

### Info

Use Info for optional improvements.

Examples:
- style polish
- readability improvements
- optional cross-link enhancements

## What Must Match

The following should be semantically equivalent across languages:
- requirements, restrictions, prohibitions
- process steps and control points
- callouts with risk or compliance implications
- critical definitions and scope boundaries
- references to key internal governance material

## What May Differ

The following may vary if meaning is preserved:
- sentence structure and wording
- paragraph rhythm and phrasing
- examples adapted for readability
- idiomatic expressions

## What to Ignore by Default

Do not flag these unless they create confusion:
- stylistic differences with same meaning
- localized link labels where destination and meaning are equivalent
- minor punctuation differences
- heading wording differences that keep intent and discoverability

## Structural and Metadata Checks

Verify:
- front matter exists and translationKey is aligned
- page title and description are faithful to source intent
- mandatory final section naming is localized:
  - Norwegian: Veien videre
  - English: More Information
- heading levels are equivalent between source and translation (for example, `##` in source should not become `###` in translation unless intentionally justified)
- heading hierarchy is coherent and free of accidental duplicates
- no stale blocks remain from previous versions

If heading level differences are found, flag them at least as Major when they can impact navigation, deep links, or section discoverability.

## Link Checks

Verify:
- internal links in English point to English pages when equivalent exists
- anchors point to valid target sections where practical
- external links are relevant and not clearly stale
- language markers like '(in Norwegian)' are used where helpful

## AI-Specific Checks

For pages that mention AI, verify parity for:
- data handling and classification constraints
- model, prompt, and output risk guidance
- validation and monitoring requirements
- documentation and traceability requirements
- recovery and incident handling expectations

## Reviewer Modes

### Author Mode (Guided)

Use when the contributor has limited Copilot or translation QA experience.

Behavior:
- keep findings concise
- provide clear fix instructions
- include examples of acceptable vs unacceptable deviation
- prioritize Critical and Major findings first

### Auditor Mode (Strict)

Use for final review before merge or publication.

Behavior:
- perform full parity review
- include all severities
- explicitly call out residual risks
- produce a release recommendation:
  - Ready
  - Ready with Minor fixes
  - Not Ready

## Review Workflow

1. Identify the Norwegian source page and English counterpart.
2. Compare structure, section coverage, and heading level parity.
3. Compare semantics of requirements and controls.
4. Check callouts, lists, and examples for dropped meaning.
5. Validate links and key anchors.
6. Check language quality and terminology consistency.
7. Return findings in severity order with concrete fixes.

## Decision Rule

When uncertain, optimize for semantic correctness and risk clarity over literal wording.

If a difference is natural language variation, do not flag it.
If a difference can change implementation or compliance behavior, flag it.
