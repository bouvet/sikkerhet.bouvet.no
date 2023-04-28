--- 
title: Sjekklisten for sikkerhet
---

# Sjekklisten for sikkerhet

import WorkInProgress from './_work_in_progress.mdx'

<WorkInProgress />

Her finner du en liste med JA/NEI spørsmål som hvert utviklingsteam burde besvare.  
Målet er å svare JA på alle spørsmål, men dette er selvsagt åpent for vurdering av systemet og kundens behov.
- Svares det JA på et punkt skal det forklares hvordan dette er løst.
- Svares det NEI på et punkt skal det forklares hvorfor det ikke er løst eller settes en frist for ny vurdering.

## Planlegge
Er ansvarsområder* godt definert og fordelt mellom involverte parter (team, kunde, tredjepart)?  
\*infrastruktur, kildekode, monitorering, vedlikehold, etc.  
- Les mer om [ansvar & rutiner](https://sikkerhet.bouvet.no/planlegge/ansvar-rutiner).

Er sensitiv data sikret fra å komme på avveie (logging, testdata, etc.)?  
- Les mer om [personvern](https://sikkerhet.bouvet.no/planlegge/privacy).

Er personopplysninger håndtert i henhold til EU og Datatilsynets gjeldende regelverk?  
- Les mer om [personvern](https://sikkerhet.bouvet.no/planlegge/privacy).

Kan systemet gjennopprettes ved en katastrofe (innen akseptabel tid og med akseptabelt tap av data)?  
- Les mer om [disaster recovery](https://sikkerhet.bouvet.no/planlegge/disaster-recovery)
og [backup](https://sikkerhet.bouvet.no/drifte/storage#backup).

Har sluttbrukeren et provisorisk alternativ om systemet er nede (excel, epost, telefon, etc.)?  
- Les mer om [business continuity planning](https://sikkerhet.bouvet.no/planlegge/business-continuity).

Er det utført en trusselmodellering for systemet?  
- Les mer om [trusselmodellering](https://sikkerhet.bouvet.no/planlegge/trusselmodellering).

## Utvikle
Er det satt opp rutiner for at produksjonsendringer testes og godkjennes av noen andre enn utvikleren?  
- Les mer om [versjonskontroll](https://sikkerhet.bouvet.no/utvikle/version_control).

Autentiseres brukere gjennom en anerkjent ferdigløsning?  
- Les mer om [autentisering](https://sikkerhet.bouvet.no/utvikle/kildekode#autentisering).

Har brukere bare tilgang til det de skal ha (gjennom en godt definert autoriseringsmodel)?  
- Les mer om [autorisering](https://sikkerhet.bouvet.no/utvikle/kildekode#autorisering).

Valideres data som sendes inn til systemet?  
- Les mer om [angreps metoder](https://sikkerhet.bouvet.no/utvikle/kildekode/#angreps-metoder).

Valideres data som hentes fra andre systemer?  
- Les mer om [tredjepartssystemer](https://sikkerhet.bouvet.no/utvikle/kildekode#tredjepartssystemer).

Er teamet kjent med de mest vanlige angrepsmetodene?  
- Les mer om [angreps metoder](https://sikkerhet.bouvet.no/utvikle/kildekode#angreps-metoder).

Krypteres nettverkstrafikk mellom alle tjenester (med et anerkjent krypterings bibliotek)?  
- Les mer om [kryptering](https://sikkerhet.bouvet.no/utvikle/kildekode#kryptering).

Er secrets fjernet fra versjonskontrollert kildekode?  
- Les mer om [secrets](https://sikkerhet.bouvet.no/utvikle/kildekode#secrets).

Roteres secrets (innen akseptabelt tidsintervall)?  
- Les mer om [secrets](https://sikkerhet.bouvet.no/utvikle/kildekode#secrets).

## Bygge
Er systemets CI/CD sikret fra å bli påvirket av uønskede aktører?  
- Les mer om [sikring av CI/CD](https://sikkerhet.bouvet.no/bygge/sikring-av-ci-cd).

Er det satt opp automatisk sjekk for sårbarheter i kildekode?  
- Les mer om [statisk kodeanalyse](https://sikkerhet.bouvet.no/bygge/statisk-kodeanalyse-sast)
og [dynamisk kodeanalyse](https://sikkerhet.bouvet.no/bygge/dynamisk-kodeanalyse-dast).

Er det satt opp automatisk sjekk for sårbarheter i tredjepartsbiblioteker?  
- Les mer om [software composition analysis](https://sikkerhet.bouvet.no/bygge/software-composition-analysis-sca)
og [biblioteker](https://sikkerhet.bouvet.no/utvikle/biblioteker).

## Teste
Er det gjennomført en penetrasjonstest av systemtet?  
- Les mer om [penetrasjonstesting](https://sikkerhet.bouvet.no/teste/penetrasjonstesting).

Gjennomføres det regelmessige penetrasjonstester av systemet?  
- Les mer om [penetrasjonstesting](https://sikkerhet.bouvet.no/teste/penetrasjonstesting).

## Deploye
Oppdateres virtuelle maskiner og container images regelmessig?  
- Les mer om [sikkerhetsoppdateringer](https://sikkerhet.bouvet.no/deploye/virtual_machines#sikkerhetsoppdateringer)
og [regelmessig oppdatering av containere](https://sikkerhet.bouvet.no/deploye/containers#oppdater-regelmessig).

Er det satt opp automatisk sjekk for sårbarheter i container images?  
- Les mer om [containere](https://sikkerhet.bouvet.no/deploye/containers).

## Drifte
Er det utført en kontroll på hvilke IP-adresser og porter som faktisk eksponeres fra systemet?  
- Les mer om [nettverksoversikt](https://sikkerhet.bouvet.no/drifte/network#f%C3%A5-oversikt-over-nettverket).

Er det utført en kontroll på hvilke tjenester som lytter på portene til systemet?  
- Les mer om [nettverksoversikt](https://sikkerhet.bouvet.no/drifte/network#f%C3%A5-oversikt-over-nettverket).

Isolerer brannmurene trafikken (inn og ut) til kun det nødvendige for hver komponent?  
- Les mer om [isolasjon av tjenester](https://sikkerhet.bouvet.no/drifte/network#isolasjon-av-tjenester).

## Monitorere
Logges alle adgangsforsøk med tilhørende alarmer*?  
\*antall feilet, fra uventede land, mot endepunkter som ikke eksisterer, etc.  
- Les mer om [logging](https://sikkerhet.bouvet.no/monitorere/logging).
