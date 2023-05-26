---
sidebar_position: 3
---

# Libraries

import WorkInProgress from '../_work_in_progress.mdx'

<WorkInProgress />

The term _libraries_ used in this article represents _third-party libraries_, in other words code imported into the project, running on our servers or in our build/release pipelines where the authors are external to the project. 

The security risk associated with these libraries can be divided into two parts:

 1. They may contain known vulnerabilities ([CVE](https://cve.mitre.org)) which can be exploited unless we act on them.
 2. They may contain malware allowing an attacker to access our system. 

To protect against these threats there are several effective countermeasures we can implement:

- Use open source libraries or proprietary?
- Assess the license associated with a library:
  - Financial cost of the license?
  - Does the license permit commercial usage?
  - "Copy-left"
- Assess the maturity and activity of the library. Will it exist in 5 years time, is it actively maintained?
  - Update frequency. Is it an active and living library, or has development stagnated. Are there lots of open issues? 
  - Vulnerability history; does it have a history indicating that the authors don't know what they're doing? 
  - Download frequency; how popular is the library. 
- Use lock-files to lock to a specific version (in the source code)
  - NPM -> npm ci --ignore-scripts
  - Protects you if a library is taken over by a new (and evil) owner!
- Keep libraries up to date
  - Establish a procedure for this, avoid having it as ad-hoc work. 
- Be aware of
   - typosquatting, i.e. malicious libraries with naming similar to other and more legitimate libraries. 
   - dependency confusion. Attackers will create public libraries with the same name as libraries hosted on internal repositories, but with a higher version number. 
- Run automatic dependency checks in the CI pipeline. 
