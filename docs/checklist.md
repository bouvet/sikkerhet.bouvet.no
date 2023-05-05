--- 
title: Sjekklisten for sikkerhet
---

# Sjekklisten for sikkerhet

import WorkInProgress from './_work_in_progress.mdx'

<WorkInProgress />

Denne sjekklisten kan brukes som et startpunkt for å vurdere prosjektets sikkerhet.

Her finner du en liste med JA/NEI spørsmål som hvert utviklingsteam burde besvare.  
Målet er å svare JA på alle spørsmål, men dette er selvsagt åpent for vurdering av systemet og kundens behov.
- Svares det JA på et punkt skal det forklares hvordan dette er løst.
- Svares det NEI på et punkt skal det forklares hvorfor det ikke er løst eller settes en frist for ny vurdering.

Last ned [sjekklisten](https://raw.githubusercontent.com/bouvet/sikkerhet.bouvet.no/main/docs/checklist.md) og implementere den som en del av kildekoden i ditt prosjektet.

## Planlegge
[Ansvar & rutiner](https://sikkerhet.bouvet.no/planlegge/ansvar-rutiner):
- Er ansvarsområder* godt definert og fordelt mellom involverte parter (team, kunde, tredjepart)?  
\*infrastruktur, kildekode, monitorering, vedlikehold, etc.

[Personvern](https://sikkerhet.bouvet.no/planlegge/privacy):
- Er sensitiv data sikret fra å komme på avveie (logging, testdata, etc.)?
- Er personopplysninger håndtert i henhold til EU og Datatilsynets gjeldende regelverk?

[Disaster recovery](https://sikkerhet.bouvet.no/planlegge/disaster-recovery) og [backup](https://sikkerhet.bouvet.no/drifte/storage#backup):
- Kan systemet gjennopprettes ved en katastrofe (innen akseptabel tid og med akseptabelt tap av data)?

[Business continuity planning](https://sikkerhet.bouvet.no/planlegge/business-continuity):
- Har sluttbrukeren et provisorisk alternativ om systemet er nede (excel, epost, telefon, etc.)?

[Trusselmodellering](https://sikkerhet.bouvet.no/planlegge/trusselmodellering):
- Er det utført en trusselmodellering for systemet?

## Utvikle
[Versjonskontroll](https://sikkerhet.bouvet.no/utvikle/version_control):
- Er det satt opp rutiner for at produksjonsendringer testes og godkjennes av noen andre enn utvikleren?

[Autentisering](https://sikkerhet.bouvet.no/utvikle/kildekode#autentisering):
- Autentiseres brukere gjennom en anerkjent ferdigløsning?

[Autorisering](https://sikkerhet.bouvet.no/utvikle/kildekode#autorisering):
- Har brukere bare tilgang til det de skal ha (gjennom en godt definert autoriseringsmodel)?

[Angreps metoder](https://sikkerhet.bouvet.no/utvikle/kildekode/#angreps-metoder):
- Valideres data som sendes inn til systemet?

[Tredjepartssystemer](https://sikkerhet.bouvet.no/utvikle/kildekode#tredjepartssystemer):
- Valideres data som hentes fra andre systemer?

[Angreps metoder](https://sikkerhet.bouvet.no/utvikle/kildekode#angreps-metoder):
- Er teamet kjent med de mest vanlige angrepsmetodene?

[Kryptering](https://sikkerhet.bouvet.no/utvikle/kildekode#kryptering):
- Krypteres nettverkstrafikk mellom alle tjenester (med et anerkjent krypterings bibliotek)?

[Secrets](https://sikkerhet.bouvet.no/utvikle/kildekode#secrets):
- Er secrets fjernet fra versjonskontrollert kildekode?
- Roteres secrets (innen akseptabelt tidsintervall)?

## Bygge
[Sikring av CI/CD](https://sikkerhet.bouvet.no/bygge/sikring-av-ci-cd):
- Er systemets CI/CD sikret fra å bli påvirket av uønskede aktører?

[Statisk kodeanalyse](https://sikkerhet.bouvet.no/bygge/statisk-kodeanalyse-sast) og [dynamisk kodeanalyse](https://sikkerhet.bouvet.no/bygge/dynamisk-kodeanalyse-dast):
- Er det satt opp automatisk sjekk for sårbarheter i kildekode?

[Software composition analysis](https://sikkerhet.bouvet.no/bygge/software-composition-analysis-sca) og [biblioteker](https://sikkerhet.bouvet.no/utvikle/biblioteker):
- Er det satt opp automatisk sjekk for sårbarheter i tredjepartsbiblioteker?

## Teste
[Penetrasjonstesting](https://sikkerhet.bouvet.no/teste/penetrasjonstesting):
- Er det gjennomført en penetrasjonstest av systemtet?
- Gjennomføres det regelmessige penetrasjonstester av systemet?

## Deploye
[Sikkerhetsoppdateringer](https://sikkerhet.bouvet.no/deploye/virtual_machines#sikkerhetsoppdateringer):
- Oppdateres virtuelle maskiner  regelmessig?

[Regelmessig oppdatering av containere](https://sikkerhet.bouvet.no/deploye/containers#oppdater-regelmessig):
- Oppdateres container images regelmessig?

[Containere](https://sikkerhet.bouvet.no/deploye/containers):
- Er det satt opp automatisk sjekk for sårbarheter i container images?

## Drifte
[Nettverksoversikt](https://sikkerhet.bouvet.no/drifte/network#f%C3%A5-oversikt-over-nettverket):
- Er det utført en kontroll på hvilke IP-adresser og porter som faktisk eksponeres fra systemet?
- Er det utført en kontroll på hvilke tjenester som lytter på portene til systemet?

[Isolasjon av tjenester](https://sikkerhet.bouvet.no/drifte/network#isolasjon-av-tjenester):
- Isolerer brannmurene trafikken (inn og ut) til kun det nødvendige for hver komponent?

## Monitorere
[Logging](https://sikkerhet.bouvet.no/monitorere/logging):
- Logges alle adgangsforsøk med tilhørende alarmer*?  
\*antall feilet, fra uventede land, mot endepunkter som ikke eksisterer, etc.
