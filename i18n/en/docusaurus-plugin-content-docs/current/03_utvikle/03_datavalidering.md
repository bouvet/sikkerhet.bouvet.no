---
sidebar_position: 3
title: Data Validation
id: en_data_validation
slug: /develop/data_validation

---

# Data Validation
:::tip In Short
Data is an attack vector; you should never blindly trust that it is safe, regardless of the source. This also applies when retrieving data from other systems!
:::

If you receive input from users or fetch data from other systems, you should never blindly trust it. OWASP Top 10 has listed various forms of vulnerabilities related to code injection at the top of their lists since the first one was published in 2004.

Ensure that the data contains what you expect; if you import files, they must be scanned for malware before processing them further. Also, consider the need for using sandbox environments to process such files to limit the damage potential.

Understand the threat landscape for the relevant file types. For example, it is possible to embed malware in an image; if this is not mitigated, the application may be vulnerable to this threat. Other file formats entail different types of threats that require other measures.

Also, consider using [Content Security Policies](https://en.wikipedia.org/wiki/Content_Security_Policy) to prevent data fetched from other systems but presented to the customer from resulting in a successful XSS attack.

# More Information

* [OWASP: Top 10 - 3: Injection](https://owasp.org/Top10/A03_2021-Injection/)
* [OWASP: Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)
* [OWASP: Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Injection_Prevention_Cheat_Sheet.html)
