---
title: "Sikkerhetskontrollpunkt"
weight: 5
translationKey: secgates
description: >
  Et sikkerhetskontrollpunkt er et kontrollpunkt underveis i et prosjekt der en setter krav som må oppfylles før en går videre. 
---

{{< tip title="Kort oppsummert" >}}
{{< /tip >}}

Avhengig av sikkerhetsnivået en leveranse ønsker å legge seg på, kan det være nødvendig å definere mekanismer for å vurdere sikkerheten på faste punkter i utviklingsløpet, såkalte sikkerhetskontrollpunkt. 

Disse kan defineres mellom logiske faser i prosjektet, eksempelvis mellom design og utviklingsfasene, eller når en går fra utvikling til første release i produksjon. Andre og flere kontrollpunkter kan også defineres, helt avhengig av kravene leveranseteamet må forholde seg til. 

{{< figure src="../ibm_relative_cost2.png" >}}

IBM har [i en studie](https://www.researchgate.net/figure/IBM-System-Science-Institute-Relative-Cost-of-Fixing-Defects_fig1_255965523) fastslått at generelle svakheter i applikasjoner utviklet for det amerikanske forsvaret kostet langt mindre å utbedre jo tidligere de ble oppdaget. 

Ved å ta i bruk sikkerhetskontrollpunkt er det ikke bare lettere å sikre etterlevelse av sikkerhet- og kvalitetskrav, men også lettere å sikre at en fanger opp svakheter tidlig. En vanlig praksis der slike kontrollpunkt benyttes er at det eksempelvis 
* skal foreligge et [design](designe/systemskisser) av prosjektet før utviklingsløpet starter
* at implementasjonen skal følge designet
* og at en har verifisert at design og implementasjon faktisk matcher før en kan gå i produksjon


## Veien videre
* [Dawson, Maurice, et al. "Integrating software assurance into the software development life cycle (SDLC)." Journal of Information Systems Technology and Planning 3.6 (2010): 49-53.](https://d1wqtxts1xzle7.cloudfront.net/43105461/fulltext_stamped-libre.pdf?1456510133=&response-content-disposition=inline%3B+filename%3DIntegrating_Software_Assurance_into_the.pdf&Expires=1719440984&Signature=eH8UCTexOuHmFfCL~FAtaw4tuESm5nRoKrrlOAt~UqP2Od6V7lis-gvCNcmZtLIJYpAQ1LaznsUPbUDIk39imYfEqHeqk9JpODsYN5T4aF32VM6-RhkhIBYRDHLQ5VN72v7~tnsTzsEg6dR-iHjCNAVGD296zsXmyEaOUv3lzNMihjxUNwxziirGJHNm8b3Nw4yLQzydjkqZ192rplx45I61vtwP7WZBR~JzJVVL-tZ9-HBbJdeujgvibekFspH5DttxpvV9kR2vmn7Z5OkUWQWAyuOGl~ORwpF5x96mrD5SE3Of2ftgSDT4iscXa-R3ej4gPeAgnSnGAAiAp4BcLA__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA)
* [RedHat: Security in the software development lifecycle](https://www.redhat.com/en/topics/security/software-development-lifecycle-security)
* [Implementing Smart Security Gates in Modern Software Development](https://blog.secodis.com/2023/11/24/how-security-gates-can-work-efficiently-even-with-devops/)