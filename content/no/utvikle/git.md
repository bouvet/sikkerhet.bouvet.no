---
title: "Versjonskontroll"
weight: 2
translationKey: git
description: >
  Versjonskontroll er et essensielt verktøy i alle utviklingsprosjekt, men hvordan bruker du det effektivt og hva bør du tenke på?
---
Git er idag standard i de fleste prosjekter som kjøres i Bouvet, men skulle du havne i et prosjekt som bruker noe annet vil mange av prinsippene likevel være overførbare. Git hostes primært ved hjelp av Github eller Azure DevOps, som begge har mange de samme funksjonene som beskrives under. Selv om Github er brukt som eksempel bør du anta at det samme gjelder for Azure DevOps, og også for andre tilsvarende plattformer. Antagelsen er også at repoet ligger i Bouvets github-organisasjon, selv om mye vil være direkte overførbart til kundeorganisasjoner. 

## Overordnet
Git i seg selv er selve versjonskontrollverktøyet som håndterer historikk og versjonering, mens Github håndterer alt rundt som CI/CD, sikkerhetstesting og liknende. Det første du bør gjøre i et nytt eller eksisterende repository, er å sjekke at det finnes en ._gitignore-fil_. Denne brukes for å ekskludere filer fra git, slik at de kan leve i mappene dine lokalt uten å bli sjekket inn til git. Det finnes ferdige templates for de fleste programmeringsspråk, som sikrer at byggfiler, .env-filer og annet som kan inneholde sensitiv informasjon ikke sjekkes inn i git. 

__Ikke__ baser deg på at du skal "huske" å ikke inkludere filer når du committer; det er fort gjort å bomme når du skal fikse noe i forbifarten. .gitignore sjekkes inn som med andre filer, slik at andre i teamet også kan få glede av den. Husk bare på at den kun gjelder nye filer; dersom du også vil ekskludere filer som allerede ligger i repoet må de først slettes fra githistorikken. 

## Tilgangsstyring
Tilgangsstyring er første punkt på agendaen i et nytt prosjekt. Hvem skal ha tilgang til repoet - enkeltbrukere, organisasjonen, eller skal det være public? Vær obs på at vi kun får lage private repos som utgangspunkt, skal det åpnes opp må dette skje via en BSD-sak. 

Git i selg selv har ingen form for tilgangsstyring; alle kan konfigurere git-klienten sin og kan kalle seg `Pelle Pellesen`, med eposten `pelle@bouvet.no@`, og det dette som normalt vil vises i historikken. Avhengig av prosjektet og eventuelle kundekrav bør en vurdere bruk av [`signed commits`](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits) for å sikre at alle commits signeres kryptografisk. 

## Hemmeligheter og historikk
Mange tester lokalt på egen maskin mens de utvikler, og har gjerne nøkler og liknende hardkodet mens de tester. Det skjer forholdsvis ofte at man glemmer å slette slike hemmeligheter, og at de sjekkes inn som med annen kode. Dersom dette skjer, må hemmeligheten ugyldiggjøres. Nøkler, passord, sertifikater og liknende __må__ roteres slik at det som havnet i git ikke lenger er gyldig. 

Å overskrive i git er ikke nok; historikken vil fremdeles være tilgjengelig for alle med tilgang. Alle som har klonet repoet vil også ha en kopi av historikken; selv om det finnes en teknisk mulighet for å omskrive historikken vil dette i mange tilfeller kunne være [vanskelig eller umulig](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository#side-effects-of-rewriting-history). 

### Secret scanning
Vurder å sette opp workflows som scanner repoet for hemmeligheter, eksempelvis ved bruk av [Trufflehog]
(https://github.com/marketplace/actions/trufflehog-oss) eller liknende slik at merge blokkeres ved funn av hemmeligheter. Det vil ikke kunne være en perfekt løsning, men vil varsle ved funn og forhindre at hemmeligheter havner i main.




Github støtter også bruk av ulike actions, som kan utføre oppgaver på kode som sjekkes inn, som CI/CD, sikkerhetstesting og mye annet. Husk også på at kildekode er en del av prosjektet, og må vurderes i forhold til [disaster recovery og backups]({{< ref "business-continuity.md" >}})!

### Sikkerhet i kildekodesystemet
Mange baserer seg på løsninger som Azure DevOps, Github eller liknende som håndterer tilgangsstyring, reviews og en del andre funksjoner knyttet til konfidensialitet og integritet mot kildekoden. 

Git har imidlertid også innebygd funksjonalitet for signering av commits, slik at hver enkelt commit kan spores til en person med en gitt nøkkel. Dette kan være et nyttig hjelpemiddel for å sikre integritet, og bør vurderes av teamet. 

### Branchingstrategi

En typisk tilnærming er å operere med en produksjonsbranch, ofte `main` eller `master`. Denne bør være beskyttet slik at alle endringer skjer i egne feature-branches som så merges inn via pull-request med dertilhørende review fra andre i teamet. Produksjonsbranchen blir så grunnlaget for alle deployments videre. 
{{< figure src="../src_trunk.png" alt="Trunk-based merging">}}


Det finnes andre og mer komplekse tilnærminger også, eksempelvis med separate branches samt tagging av versjoner. Denne er spesielt nyttig dersom en vedlikeholder flere ulike versjoner i ulike miljø, trenger mulighet for hotfixer eller liknende: 

{{< figure src="../src_advanced.png" alt="More advanced merging" style="max-width: 800px; height: auto;" >}}

I dette eksempelet jobber alle utviklere i egne feature branches mot develop-branchen, som beskyttes mot direkte endringer. Denne deployes til dev-miljøet for å verifisere at alt fungerer som det skal. 

Når teamet er fornøyed med tilstanden på develop, merges denne til test via en egen pipeline som håndterer tagging av versjonsnummer automatisk. Denne pipelinen kan kreve godkjenning for å kjøre, slik at det trengs en person for å starte den, og en annen for å godkjenne. 

Test-branchen deployes til testmiljøet, og når kunden er fornøyd med det som er levert merges den til prod-branchen på samme måte som til test. For både test og prod bruker vi versjonsnummeret som en del av branchnavnet, slik at vi kan ha branchen Test/v1 og Test/v2, som korresponderer med Prod/v1 og Prod/v2.

Dersom det er behov for hotfixing mot prod kan dette eksempelvis gjøres mot den aktuelle prodbranchen slik at en får korrigert kritiske feil raskt, for så å ta hotfixen tilbake til dev. 

{{< tip title="pre-commit" >}}
Et tips er å bruke [pre-commit](https://pre-commit.com) til å kjøre alt av linting, formatering, og testing, for så å bruke den samme _pre-commit_ konfigurasjonen i CI/CD. Dette vil minimerer vedlikeholdet, gjøre det enkelt å teste lokalt, og fange opp problemer tidlig.
{{< /tip >}}

# Veien videre
* [Github: Signed commits](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits)