---
title: Content Guidelines
weight: 10
translationKey: contribute
description: >
  It's great that you want to contribute content!
---

Since everything written on this site is freely available on the Internet, it's important to follow some simple rules and guidelines for content.

## Language and Style

The content on these pages is primarily for technicians, so technical language is to be expected. However, if terms are used that cannot be assumed to be well known, they must be explained. The language should be readable and understandable by most technicians, not just those who have worked with security for decades!

Remember that all articles should have an introduction that can be read and understood by everyone from managers and delivery organizations to security experts and junior developers.

## Article Structure

All articles should have the following structure:
```
---
title: Page title
weight: integer, denotes the menu order
translationKey: string, used to map articles across languages
description: >
  The introduction. Typically one or two sentences. 
---

The introduction should be summarizing and use language that can be read and understood by everyone.

## Main Text
All articles should be technology-agnostic.
Feel free to use specific technology in examples, but avoid articles that only make sense on Azure or AWS.
Use features in MD / Hugo to emphasize or highlight important points.
Use code fencing to show examples and break up the content with headings (no one likes a wall of text).

## More information
* [Eksternal link 1](URL)
* [Eksternal link 2](URL)
```

# External Links
Use permalinks where possible. The purpose of the _Further Reading_ section is to point to resources with more in-depth content so that it is possible to delve further into a topic after getting a taste from an article.

If you use text from another article or source, it must be referenced.

## Help!

Need help with Markdown?
- [Markdown Help](https://github.github.com/gfm/)
- [Markdown Emojis](https://gist.github.com/rxaviers/7360908)
- [Hugo](https://gohugo.io/about/features/)

Any questions about content, what you can contribute, etc.? Contact us on [Slack](https://bouvet.slack.com/archives/C0447R83U6M)!
