---
sidebar_position: 4
slug: /designe/segregering
---

# Segregering av miljø
:::tip Kort oppsummert
Utviklingsprosjekter benytter flere ulike miljø til ulike formål som for å teste deployments i et eget dev-miljø, en eksponerer testmiljø mot produkteier og andre nøkkelpersoner samt produksjonsmiljø mot sluttbrukere. For å unngå at hendelser i ett miljø ikke påvirker et annet må vi segregere disse på et nivå som gir mening for teamet og konteksten man jobber i.  
:::

Når vi bygger løsninger setter vi ofte opp flere miljø, ofte for dev, test og prod slik at vi kan utvikle samtidig som at produkteier tester ny funksjonalitet og sluttbrukere bruker systemet i prod. Det er viktig at vi skiller mellom disse miljøene, slik at vi unngår å komme i situasjoner der endringer i ett miljø påvirker bruken av et annet. 

Når vi designer en ny løsning må vi derfor tenke på hvordan vi skiller mellom miljøene. For skytjenester er en vanlig tilnærming ofte å benytte seg av ulike subscriptions per miljø der dette er mulig. En subscription kan ikke påvirke en annen med mindre dette er eksplisitt satt opp, men det finnes andre muligheter også.

## Kortfattet oversikt over de vanligste løsningene (Azure):
* Separate subscriptions per miljø:
    * Naturlig skille med mindre en eksplisitt definerer tilganger
    * Mer overhead med administrering av flere subscriptions 
* Bruk av separate ressursgrupper
    * Forenklet administrasjon
    * Ressursgrupper deler enkelte begrensninger og tilganger på subscription-nivå
* Separate virtuelle nettverk
    * Segregering på nettverksnivå
    * Krever ofte mer admin for å sikre at en har et faktisk skille

Det finnes andre tilnærminger på dette også, men uansett hvilken løsning teamet går for er det viktig å se det totale bildet med kost/nytte opp mot kravene en må forholde seg til. 

# Veien videre
* [ISO27001:2022 - Seksjon 8.22 - Segregation of networks - Krever Bouvetbruker](https://wiki.bouvet.no/display/BLS/Nettverkssikkerhet)

