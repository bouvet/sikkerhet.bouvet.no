---
sidebar_position: 2
title: In the Team
---

# What a Security Champion Does in the Team

Congratulations, you have now become one of those who work to create a better world! The hardest part is now done, so let's start taking small steps in the right direction.

Regardless of your background (developer, tester, project manager, etc.), points 1, 2, and 3 can be done by everyone.

## 1. Create Awareness in the Delivery Team

You can start by asking yourself a few questions:

* What does this project I am working on actually do?
* What is critical for the system to function?
* How can this system be misused, what attack surfaces exist in the system?
* Is there an updated threat model with corresponding measures to prevent the exploitation of weaknesses?

As you begin to create awareness, you can move on to find out more. Now you can start taking some initiative in your team.

* A good starting point is to organize a threat modeling exercise. You don't need to know anything about threat modeling, but you can get some support here [Threatmodeling manifesto](https://www.threatmodelingmanifesto.org). The goal of this threat modeling is for you and your team to become aware of threats and perhaps start the thought process around countermeasures.

* Consider establishing a bug bounty program (rewarding for finding bugs) or something that gets your team actively involved in finding challenges that should/must be solved.

Be a bit creative and try to get the team involved; a Security Champion who doesn't get the team involved often doesn't accomplish as much as they would like.

## 2. Do We Have Control Over Our Entire Project?

If the answer is yes, let's correct that to no. There is always more that can be done. We have created a checklist that should be checked for every single project we are involved in; all our delivery teams should have a relationship with the points in this list and understand the risks they pose if useful measures are not implemented. You can find the list [here](../checklist)

Going through this list helps you gain control over, among other things:
* Responsibilities and routines
* Third-party software
* Building and deploying solutions
* Disaster recovery
* Business Continuity
* Infrastructure
* Source code

Remember, you don't have to do everything at once; get the team involved and do it part by part until you have even better control over the project. You don't need to know everything about this, but together with your team, you should be able to figure it out.

## 3. Protect Users and the Company's Reputation

Based on the ethics taught in the military, we get some clever questions we can use as a starting point.

* Is it legal?
  * Is our solution legal, or do we risk fines from the data protection authority? Should we improve this?
* Is it tactically smart?
  * Let's strike out "tactically" and change it to smart. Is it smart to create this feature or set it up this way?
* Can I live with it?
  * For example, can we tolerate creating a solution that can be used for harassment? Ref => [Easy to harass via Vipps (In Norwegian)](https://nrkbeta.no/2022/09/14/lett-a-trakassere-via-vipps/)
* Can we handle this being on the front page of VG?
  * [Russia was behind Nortura hacking](https://www.digi.no/artikler/tv-2-russland-sto-bak-nortura-hacking-ifolge-selskapet/519712)

### 4. Technical Review of Solutions

Now it's time to look at a classic called OWASP Top 10 and make sure we have avoided these mistakes, but this is basic. To really have control over the code and solutions, we need to tackle other measures - you can find several of these described in the [article on security practices](../03_develop/04_sikkerhetspraksiser)
