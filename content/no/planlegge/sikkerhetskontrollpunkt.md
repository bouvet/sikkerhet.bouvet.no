---
title: "Sikkerhetskontrollpunkt"
weight: 5
translationKey: secgates
description: >
  Et sikkerhetskontrollpunkt er et kontrollpunkt underveis i et prosjekt der en setter krav som må oppfylles før en går videre. 
---

Avhengig av sikkerhetsnivået en leveranse ønsker å legge seg på, kan det være nødvendig å definere mekanismer for å vurdere sikkerheten på faste punkter i utviklingsløpet, såkalte sikkerhetskontrollpunkt. 

Disse kan defineres mellom logiske faser i prosjektet, eksempelvis mellom design og utviklingsfasene, eller når en går fra utvikling til første release i produksjon. Andre og flere kontrollpunkter kan også defineres, helt avhengig av kravene leveranseteamet må forholde seg til. 

{{< figure src="../ibm_relative_cost2.png" >}}

IBM har [i en studie](https://www.researchgate.net/figure/IBM-System-Science-Institute-Relative-Cost-of-Fixing-Defects_fig1_255965523) fastslått at generelle svakheter i applikasjoner utviklet for det amerikanske forsvaret kostet langt mindre å utbedre jo tidligere de ble oppdaget. 

Ved å ta i bruk sikkerhetskontrollpunkt er det ikke bare lettere å sikre etterlevelse av sikkerhet- og kvalitetskrav, men også lettere å sikre at en fanger opp svakheter tidlig. En vanlig praksis der slike kontrollpunkt benyttes er at det eksempelvis 
* skal foreligge et [design]({{< ref "designe/systemskisser.md" >}}) av prosjektet før utviklingsløpet starter
* at implementasjonen skal følge designet
* og at en har verifisert at design og implementasjon faktisk matcher før en kan gå i produksjon

## AI-spesifikke sikkerhetskontrollpunkt
For løsninger som bruker KI, bør det etableres egne kontrollpunkt før produksjonssetting. Målet er å sikre at data, modellatferd og driftsgrunnlag er vurdert og dokumentert før løsningen eksponeres i produksjon.

Et praktisk minimum er å innføre følgende gates:

### 1. Data review-gate
Før modelltrening, finjustering eller større endringer i datagrunnlaget bør teamet dokumentere:

* hvilke datakilder som brukes, eierskap og tillatt bruksformål
* grunnleggende kvalitetsvurdering av data (representativitet, mangler, støy, duplikater)
* identifiserte personvern- og sikkerhetsrisikoer i datagrunnlaget
* beslutning om eventuelle avgrensninger, filtrering eller avviste datasett

### 2. Evaluerings- og V&V-gate
Før produksjon bør modellen verifiseres og valideres mot definerte akseptansekriterier:

* dokumentert evalueringsoppsett med relevante testsett og scenarier
* vurdering av sikkerhets- og misbruksscenarier (for eksempel prompt injection og uønsket verktøybruk)
* tydelige grenser for når modellen ikke skal brukes uten menneskelig kontroll
* beslutning om go/no-go med begrunnelse

### 3. Logging- og monitoreringsgate
Før produksjon bør driftsteamet verifisere at nødvendig observabilitet er på plass:

* hvilke hendelser som skal logges (modellkall, tilgangsendringer, feil, avvik)
* hvordan logger beskyttes mot manipulering og uautorisert innsyn
* hvilke alarmer og terskler som skal utløse oppfølging
* hvem som har ansvar for løpende overvåking og hendelseshåndtering

For mer om drift av logger og oppfølging i produksjon, se [Logging og monitorering]({{< ref "forvalte/logging-monitorering.md" >}}).

Se også:
* [Dokumentasjon]({{< ref "utvikle/dokumentasjon.md" >}}) for hva som bør dokumenteres før og etter gate-beslutninger
* [Verifiser designet]({{< ref "forvalte/verifisering-av-design.md" >}}) for kontroll av at løsning i drift matcher dokumentasjon og beslutninger
* [Revisjon av prosjekt eller leveranse]({{< ref "forvalte/audit.md" >}}) for hvilken evidens som typisk etterspørres


## Veien videre
* [Dawson, Maurice, et al. "Integrating software assurance into the software development life cycle (SDLC)." Journal of Information Systems Technology and Planning 3.6 (2010): 49-53.](https://d1wqtxts1xzle7.cloudfront.net/43105461/fulltext_stamped-libre.pdf?1456510133=&response-content-disposition=inline%3B+filename%3DIntegrating_Software_Assurance_into_the.pdf&Expires=1719440984&Signature=eH8UCTexOuHmFfCL~FAtaw4tuESm5nRoKrrlOAt~UqP2Od6V7lis-gvCNcmZtLIJYpAQ1LaznsUPbUDIk39imYfEqHeqk9JpODsYN5T4aF32VM6-RhkhIBYRDHLQ5VN72v7~tnsTzsEg6dR-iHjCNAVGD296zsXmyEaOUv3lzNMihjxUNwxziirGJHNm8b3Nw4yLQzydjkqZ192rplx45I61vtwP7WZBR~JzJVVL-tZ9-HBbJdeujgvibekFspH5DttxpvV9kR2vmn7Z5OkUWQWAyuOGl~ORwpF5x96mrD5SE3Of2ftgSDT4iscXa-R3ej4gPeAgnSnGAAiAp4BcLA__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA)
* [RedHat: Security in the software development lifecycle](https://www.redhat.com/en/topics/security/software-development-lifecycle-security)
* [Implementing Smart Security Gates in Modern Software Development](https://blog.secodis.com/2023/11/24/how-security-gates-can-work-efficiently-even-with-devops/)