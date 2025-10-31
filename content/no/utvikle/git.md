---
title: "Versjonskontroll"
weight: 2
translationKey: git
description: >
  Versjonskontroll er et essensielt verktøy i alle utviklingsprosjekt, men hvordan bruker du det effektivt og hva bør du tenke på?
---
Git er idag standard i de fleste prosjekter som kjøres i Bouvet, men skulle du havne i et prosjekt som bruker noe annet vil mange av prinsippene likevel være overførbare. Git i seg selv er selve versjonskontrollverktøyet som håndterer historikk og versjonering, mens Github håndterer alt rundt som CI/CD, sikkerhetstesting og liknende. Azure DevOps har mange de samme funksjonene som beskrives under; selv om Github er brukt som eksempel bør du anta at det samme gjelder for Azure DevOps. 

{{< tip title="Kildekode er kritisk" >}}
Husk også på at kildekode er en del av prosjektet, og må vurderes i forhold til [disaster recovery og backups]({{< ref "business-continuity.md" >}})!
{{< /tip >}}

## .gitignore
 Det første du bør gjøre i et nytt eller eksisterende repository, er å sjekke at det finnes en ._gitignore-fil_. Denne brukes for å ekskludere filer fra git, slik at de kan leve i mappene dine lokalt uten å bli sjekket inn til git. Det finnes ferdige templates for de fleste programmeringsspråk, som sikrer at byggfiler, .env-filer og annet som kan inneholde sensitiv informasjon ikke sjekkes inn i git. 

__Ikke__ baser deg på at du skal "huske" å ikke inkludere filer når du committer; det er fort gjort å bomme når du skal fikse noe i forbifarten. .gitignore sjekkes inn som med andre filer, slik at andre i teamet også kan få glede av den. Husk bare på at den kun gjelder nye filer; dersom du også vil ekskludere filer som allerede ligger i repoet må de først slettes fra githistorikken. 

## Hemmeligheter og historikk
Mange tester lokalt på egen maskin mens de utvikler, og har gjerne nøkler og liknende hardkodet mens de tester. Det skjer forholdsvis ofte at man glemmer å slette slike hemmeligheter, og at de sjekkes inn som med annen kode. Dersom dette skjer, må hemmeligheten ugyldiggjøres. Nøkler, passord, sertifikater og liknende __må__ roteres slik at det som havnet i git ikke lenger er gyldig. 

Å overskrive i git er ikke nok; historikken vil fremdeles være tilgjengelig for alle med tilgang. Alle som har klonet repoet vil også ha en kopi av historikken; selv om det finnes en teknisk mulighet for å omskrive historikken vil dette i mange tilfeller kunne være [vanskelig eller umulig](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository#side-effects-of-rewriting-history). 

{{< tip title="Håndtering av hemmeligheter" >}}
Bruk passordhvelv for å håndtere hemmeligheter: Du refererer til hemmeligheten, men kan skille miljøer fra hverandre ved å peke på ulike hvelv! 
{{< /tip >}}

### Secret scanning
Vurder å sette opp workflows som scanner repoet for hemmeligheter, eksempelvis ved bruk av [Trufflehog]
(https://github.com/marketplace/actions/trufflehog-oss) eller liknende slik at merge blokkeres ved funn av hemmeligheter. Det vil ikke kunne være en perfekt løsning, men vil varsle ved funn og forhindre at hemmeligheter havner i main.

Github støtter også bruk av ulike actions, som kan utføre oppgaver på kode som sjekkes inn, som CI/CD, sikkerhetstesting og mye annet. 

## Tilgangsstyring
Tilgangsstyring er første punkt på agendaen i et nytt prosjekt. Hvem skal ha tilgang til repoet - enkeltbrukere, organisasjonen, eller skal det være public? Vær obs på at vi kun får lage private repos som utgangspunkt, skal det åpnes opp må dette skje via en BSD-sak. 

## Kodesignering

Git i selg selv har ingen form for tilgangsstyring; alle kan konfigurere git-klienten sin og kan kalle seg `Pelle Pellesen`, med eposten `pelle@bouvet.no@`, og det dette som normalt vil vises i historikken. Avhengig av prosjektet og eventuelle kundekrav bør en vurdere bruk av [`signed commits`](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits) for å sikre at alle commits signeres kryptografisk. 

{{< figure src="../git-signing.png" alt="Signed code">}}

Bildet over viser eksempelvis hvordan en commit til akkurat denne artikkelen vises når den er signert. 

## Git hooks
Git hooks er skript som typisk kjøres clientside og trigges av ulike handlinger slik at en kan kjøre linting, kodescanning og annet for å sikre kvaliteten i det som utvikles. Selv om det finnes både clientside og serverside hooks, er det viktig å være klar over at Github ikke støtter kjøring av serverside hooks. 

Hooks lever i utgangspunktet under `.git`; da denne ikke er versjonskontrollert bør skript legges inn under andre mapper slik at en kan dele dem på tvers i teamet. Husk at hooks må settes opp av hver enkelt utvikler, så ikke legg kritiske sjekker utelukkende i disse!

## Workflows 
Workflows kjøres på Github, og kan trigges av ulike hendelser som pushing av kode, i forbindelse med pull requests, tags og annet. En workflow kan bestå av en rekke ulike actions som kjøres mot kodebasen. Workflowene brukes ofte for å validere, teste, bygge eller deploye; i forkant av en pull request kan en eksempelvis kjøre en rekke tester for å se at endringene ikke brekker eksisterende funksjonalitet, før det kjøres en ny workflow etter merge til main som bygger og deployer koden på ønsket sted. 

Vær obs på at workflows spinner opp en VM eller en container på baksiden der de ulike actionene kjøres, og at mange av disse i realiteten har avhengigheter til tredjepart. Ikke kjør actions ukritisk, men ta en vurdering på hvilken risiko/nytte de gir i likhet med alle andre avhengigheter.

## Branchingstrategi

Git støtter ulike former for branching, avhengig av hvor kompleks arbeidsflyt en trenger. Uavhengig av hva en går for, er det viktig å ha et forhold til hvordan arbeidsflyten vil være dersom det plutselig dukker opp svakheter eller sårbarheter som _må_ fikses, uavhengig av hva en ellers jobber med. 

En typisk tilnærming er å operere med en produksjonsbranch, ofte `main` eller `master`. Denne bør være beskyttet slik at alle endringer skjer i egne feature-branches som så merges inn via pull-request med dertilhørende review fra andre i teamet. Produksjonsbranchen blir så grunnlaget for alle deployments videre. 
{{< figure src="../src_trunk.png" alt="Trunk-based merging">}}

Det finnes andre og mer komplekse tilnærminger også, eksempelvis med separate branches samt tagging av versjoner. Denne er spesielt nyttig dersom en vedlikeholder flere ulike versjoner i ulike miljø, trenger mulighet for hotfixer eller liknende: 

{{< figure src="../src_advanced.png" alt="More advanced merging" style="max-width: 800px; height: auto;" >}}

I dette eksempelet jobber alle utviklere i egne feature branches mot develop-branchen, som beskyttes mot direkte endringer. Denne deployes til dev-miljøet for å verifisere at alt fungerer som det skal. 

Når teamet er fornøyed med tilstanden på develop, merges denne til test via en egen pipeline som håndterer tagging av versjonsnummer automatisk. Denne pipelinen kan kreve godkjenning for å kjøre, slik at det trengs en person for å starte den, og en annen for å godkjenne. 

Test-branchen deployes til testmiljøet, og når kunden er fornøyd med det som er levert merges den til prod-branchen på samme måte som til test. For både test og prod bruker vi versjonsnummeret som en del av branchnavnet, slik at vi kan ha branchen Test/v1 og Test/v2, som korresponderer med Prod/v1 og Prod/v2.

Dersom det er behov for hotfixing mot prod kan dette eksempelvis gjøres mot den aktuelle prodbranchen slik at en får korrigert kritiske feil raskt, for så å ta hotfixen tilbake til dev. 

# Veien videre
* [Github: Gitignore templates](https://github.com/github/gitignore)
* [Github: Signed commits](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits)
* [Git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)
* [Microsoft Learn: Azure DevOps](https://learn.microsoft.com/en-us/azure/devops/?view=azure-devops)