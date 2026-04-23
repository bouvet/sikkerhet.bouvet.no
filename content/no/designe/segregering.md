---
title: "Segregering av miljø"
weight: 3
translationKey: seg
description: >
  Utviklingsprosjekter benytter flere ulike miljø til ulike formål som for å teste deployments i et eget dev-miljø, en eksponerer testmiljø mot produkteier og andre nøkkelpersoner samt produksjonsmiljø mot sluttbrukere. For å unngå at hendelser i ett miljø ikke påvirker et annet må vi segregere disse på et nivå som gir mening for teamet og konteksten man jobber i.  
---

Når vi bygger løsninger setter vi ofte opp flere miljø, ofte for dev, test og prod slik at vi kan utvikle samtidig som at produkteier tester ny funksjonalitet og sluttbrukere bruker systemet i prod. Det er viktig at vi skiller mellom disse miljøene, slik at vi unngår å komme i situasjoner der endringer i ett miljø påvirker bruken av et annet. 

Når vi designer en ny løsning må vi derfor tenke på hvordan vi skiller mellom miljøene. Dette gjelder uavhengig av cloudleverandør. Det viktige er at vi velger et skille som faktisk begrenser påvirkning mellom miljøene, og som er håndterbart for teamet over tid.

## Vanlige segregeringsmønstre
* Separate kontoer/abonnement/prosjekter per miljø:
    * Naturlig skille med mindre en eksplisitt definerer tilganger mellom miljøene
    * Mer overhead med administrering, men gir normalt sterkere isolasjon
* Separate ressursgrupper, namespaces eller tilsvarende logiske enheter:
    * Forenklet administrasjon innen samme toppnivå
    * Deler ofte enkelte begrensninger og tilganger på høyere nivå
* Separate virtuelle nettverk/VPC-er:
    * Segregering på nettverksnivå
    * Krever bevisst styring av ruting, peering og åpninger for å sikre reell isolasjon
* Separate identiteter og roller per miljø:
    * Reduserer risikoen for at tilgang i ett miljø gir utilsiktet tilgang i et annet
    * Gjør det enklere å håndheve minste privilegium og spore handlinger per miljø

Azure, AWS og Google Cloud tilbyr ulike mekanismer for dette, men prinsippene er de samme: separer der konsekvensen er høy, åpne kun eksplisitt mellom miljøer, og dokumenter hvilke unntak som finnes.

Det finnes andre tilnærminger på dette også, men uansett hvilken løsning teamet går for er det viktig å se det totale bildet med kost/nytte opp mot kravene en må forholde seg til. 

## Segregering for AI-systemer
For løsninger som inneholder kunstig intelligens eller maskinlæring, holder det ikke alltid å segregere kun infrastruktur. Teamet må også ha et bevisst forhold til hvordan data, modeller og utrulling holdes adskilt mellom miljøene.

### Skille mellom trenings-, evaluerings- og produksjonsdata
Data brukt til trening, evaluering og produksjon bør holdes tydelig adskilt. Dette reduserer risikoen for at modeller valideres på feil grunnlag, eller at test- og utviklingsarbeid påvirker produksjonsnære data.

### Skille mellom modellversjoner per miljø
Modeller, vekter og tilhørende konfigurasjon bør versjoneres og knyttes tydelig til riktig miljø. Produksjonsmodellen bør ikke kunne overskrives av eksperimentering i dev eller test.

### Gradvis innføring av endringer
Når nye modeller eller større endringer skal innføres, bør teamet vurdere mekanismer som feature flags, kontrollert utrulling eller andre teknikker som gjør det mulig å teste endringer på en avgrenset måte før full produksjonssetting.

## Veien videre
* [Nettverkskonsepter]({{< ref "designe/nettverk" >}})
* [ISO27001:2022 - Seksjon 8.22 - Segregation of networks - Krever Bouvetbruker](https://wiki.bouvet.no/display/BLS/Nettverkssikkerhet)
* [Microsoft Cloud Adoption Framework - Azure landing zones](https://learn.microsoft.com/azure/cloud-adoption-framework/ready/landing-zone/)
* [AWS Well-Architected Framework - Security Pillar](https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html)
* [Google Cloud Architecture Framework](https://cloud.google.com/architecture/framework)
* [OWASP AI Agent Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html)
* [OWASP LLM Prompt Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html)
* [OWASP Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html)

