# Starter package
## What is a Security Champion?
So you´ve volunteered as a Security Champion? Good choice! To read more about what a Security Champion is, the following sources are recommended:
  - [https://minside.bouvet.no/bouvet-alle/sikkerhet-i-dna-et-vart/security-champions](https://minside.bouvet.no/bouvet-alle/sikkerhet-i-dna -et-vart/security-champions) (requires a Bouvet login)
  - [https://sikkerhet.nav.no/docs/bli-security-champion/](https://sikkerhet.nav.no/docs/bli-security-champion/)
- [https://equinor.github.io/appsec/security-champion/](https://equinor.github.io/appsec/security-champion/)

## Help, what do I do now?
Congratulations, you have now become one of those working to create a better world! Regardless of background, the easiest way to get started is to take small steps in the right direction.

Regardless of your background (developer, tester, project manager, etc.), points 1, 2 and 3 can be done by anyone.

### 1. Raise awareness
You might want to start by asking yourself a few questions?

- What does the project I'm working on actually do?
- What is critical for the system to function?
- How can this system be abused?


A good starting point is to organize a threat modeling exercise. You don't need to know anything about threat modeling, but you can get some support here [https://www.threatmodelingmanifesto.org/](https://www.threatmodelingmanifesto.org/). The aim of this threat modeling is for you and the team to gain a conscious attitude to threats and perhaps start the thought process around countermeasures.

- Consider establishing a bug bounty program (rewards for finding bugs) or something that gets your team involved in actively finding challenges that should/must be resolved.

Be a little creative and try to get the team involved, a Security Champion who doesn't get the team involved will often struggle to get traction on ideas and recommendations. 

### 2. Do we have control over our entire project?
If the answer is yes, then we correct it to no. There is always a few more things to do. Our colleagues in Nord (technically in the middle) have created a fantastic list that should be checked out for each and every project we are involved in. You can find the list here: [https://github.com/bouvet/nord-sikkerhetsforum/blob/main /templates/security-checklist.md](https://github.com/bouvet/nord-sikkerhetsforum/blob/main/templates/security-checklist.md)

If you go through that list, you get support to get control of, among other things
- Responsibilities and routines
- Third party software
- Build and deploy solutions
- Disaster recovery
- Business Continuity
- Infrastructure
- Source code

Remember you don't have to do everything at once, get the team with you and do part by part until you have even better control over the project. You don't need to know everything about this here, but together in your team you should be able to figure it out.

### 3. Protecting users and the company reputation
Based on the ethics that are taught in the defence, we get some trick questions that we can use as a starting point.

- Is it legal?
- Is our solution legal, or do we risk fines related to eg. GDPR?

- Is it tactically wise?
- Is it wise to create this feature or is it wise to set it up like this?

- Can I live with that?
- For example, can we tolerate creating a solution that can be used for harassment? Ref [https://nrkbeta.no/2022/09/14/lett-a-trakassere-via-vipps/](https://nrkbeta.no/2022/09/14/lett-a-trakassere-via- whoops/)

- Can we tolerate this ending up at the top of national newspapers?
- [https://www.digi.no/artikler/tv-2-russland-sto-bak-nortura-hacking-ifolge-selskapet/519712](https://www.digi.no/artikler/tv-2 -russia-was-behind-nortura-hacking-according-to-the-company/519712)
- [https://nrkbeta.no/2022/09/14/lett-a-trakassere-via-vipps/](https://nrkbeta.no/2022/09/14/lett-a-trakassere-via- whoops/)

### 4. Technical review of solutions

It is time to look at a classic called OWASP Top 10 and make sure we have avoided these mistakes, but this is Security 101. If we really want to have control over the code and the solutions, we have to go in-depth:

- OWASP Secure Coding Practices Quick Reference Guide [https://owasp.org/www-pdf-archive/OWASP_SCP_Quick_Reference_Guide_v2.pdf](https://owasp.org/www-pdf-archive/OWASP_SCP_Quick_Reference_Guide_v2.pdf)
- OWASP ASVS [https://cheatsheetseries.owasp.org/IndexASVS.html](https://cheatsheetseries.owasp.org/IndexASVS.html)