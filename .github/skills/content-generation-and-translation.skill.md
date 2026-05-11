# Content Generation and Translation Skill

Use this skill when creating or translating content for sikkerhet.bouvet.no. The normal workflow is: write the Norwegian version first, then translate it to English while preserving meaning, scope, and tone.

## Purpose

Write clear, practical security content that fits the site’s existing structure and tone. For translations, preserve meaning and coverage, not just wording.

## Audience

- Primary audience: developers, architects, and operations personnel.
- Secondary audience: managers and junior staff who still need to understand the topic.
- Assume the reader wants concrete guidance, not marketing text.

## Language

- Write in Norwegian Bokmål for Norwegian pages.
- Write in clear, natural English for English pages.
- Use simple, direct language.
- Prefer short sentences and short paragraphs.
- Explain technical terms when they are not likely to be known.
- Avoid unnecessary English words in Norwegian text.
- Keep established technical terms where translation would sound unnatural, such as prompt injection, secret scanning, and CI/CD.

## Content Principles

- Start with why the topic matters.
- Be concrete and action-oriented.
- Prefer guidance that can be applied in real projects.
- Keep the main message technology-agnostic, but examples may use concrete tools.
- Distinguish clearly between requirements, recommendations, and informational statements.
- Do not add generic filler, sales language, or vague claims.
- If a topic is already covered well elsewhere, shorten the text and link to the main article instead of duplicating it.

## Article Structure

Use the site’s standard structure:

```md
---
title: "Page title"
weight: 1
translationKey: unique_key
description: >
  Short introduction in one or two sentences.
---

Short introduction explaining why the topic matters.

## Main section 1

## Main section 2

## More Information
* [Resource 1](https://example.com)
* [Resource 2](https://example.com)
```

Rules:

- Always include front matter.
- Keep `translationKey`, `weight`, `title`, and `description` intact when translating.
- Use `##` and `###` headings for structure.
- End with a clear final section such as `## Veien videre` for Norwegian content or `## More Information` for English content.
- Use bullet lists for steps, controls, or checklists.
- Do not use bold text as pseudo-headings.

## Section Naming

- Use `## Veien videre` on Norwegian pages.
- Use `## More Information` on English pages.
- Keep other headings localized to the page language as well.

## Hugo and Link Rules

- Use internal `ref` shortcodes for links between site pages.
- Preserve existing shortcode usage such as `tip` and `caution`.
- Keep link targets consistent with the site’s English and Norwegian folder structure.
- Do not change link destinations unless a source page has moved or been removed.
- Do not invent new sections of links; keep cross-links inside the text where they belong.

## Shortcodes and Callouts

- Use `tip` for practical advice and best practice.
- Use `caution` for warnings, prohibitions, or high-risk situations.
- Use `important` for information the reader must not miss, such as mandatory constraints, required actions, or rules that affect correctness or compliance.
- Do not overuse any callout type. Most articles should have only a few, and the text should still work even if the callouts are skimmed.
- Pick the lightest callout that fits the message: use `tip` for helpful guidance, `important` for must-know requirements, and `caution` for stop-and-think risks or warnings.
- Use callouts sparingly so the page does not become visually noisy.
- Prefer 1 to 3 callout boxes per article.

## Translation Rules

When translating from Norwegian to English:

- Preserve meaning, coverage, and emphasis.
- Do not omit sections, subheadings, examples, or caveats from the source.
- Do not make the text shorter unless the source and target are intentionally simplified together.
- Avoid introducing new claims or stronger wording than the source.
- Preserve the intent of the original tone: practical, precise, and security-focused.
- Translate headings and body text consistently.
- Keep site-specific terms aligned with the established English wording used elsewhere in the repository.
- Preserve or update internal links so they point to the English equivalents.
- If the Norwegian source has been merged into another article, update the English version accordingly rather than keeping a duplicate page.
- Use the Norwegian article as the source of truth when both versions exist.
- If the English page is missing content from the Norwegian page, add the missing content before polishing wording.
- Preserve existing headings wherever possible, especially when internal governance systems link directly to specific sections in the portal.
- Only rename a heading when there is a strong reason to do so, and then check whether deep links or anchors need to be updated.
- Treat heading changes as breaking changes if the page is linked to by external systems or internal process documentation.

## Workflow Preference

- Draft in Norwegian first.
- Use the Norwegian article as the reference for every English translation.
- Only create separate skills if you want different rules for content creation and translation; for this repository, one combined bilingual skill is usually enough.

## Translation Quality Checks

Before considering a translation done:

- Check that all sections from the source are represented.
- Check that no meaning has shifted.
- Check that no ambiguous wording was introduced.
- Check that all links point to the correct English pages or valid external URLs.
- Check that front matter still matches the source metadata.
- Check that terminology is consistent with nearby English articles.
- Check that the page still reads naturally in English, not as literal Norwegian.

## Content Quality Checks

Before publishing or keeping an article:

- Is the description clear and concise?
- Does the introduction explain why the topic matters?
- Is the content practical and actionable?
- Is the tone consistent with the rest of the site?
- Are `tip` and `caution` used with clear purpose?
- Are links current and relevant?
- Are there any duplicate or stale sections that should be removed?

## Preferred Writing Style

- Use active voice where possible.
- Keep paragraphs short.
- Use lists when the content is naturally list-shaped.
- Prefer direct guidance over abstract explanation.
- Use examples when a recommendation would otherwise be too general.
- Avoid over-explaining already established security basics.

## Common Pitfalls

- Missing source sections in translations.
- Overly literal English that sounds unnatural.
- Changing the meaning of requirements into weaker suggestions.
- Adding content that is not present in the Norwegian source.
- Forgetting to update internal links after file moves or merges.
- Leaving old content behind after a merge or translation rewrite.
- Using too many callouts or making the page visually heavy.

## Practical Workflow

1. Read the source article carefully.
2. Identify the target page and its closest English equivalent.
3. Preserve front matter and the overall structure.
4. Translate section by section, keeping scope aligned.
5. Update internal links to English targets.
6. Verify that nothing from the source was lost.
7. Run a quick quality check for language, link validity, and consistency.

## Notes for AI-Assisted Editing

- Verify facts, wording, and links manually.
- Remove generic filler and repeated phrasing.
- Treat AI-generated content like draft material that must be reviewed.
- Keep the result aligned with the repository’s existing editorial style.
- Do not let AI introduce new architectural or policy claims unless they are clearly supported by source material.
