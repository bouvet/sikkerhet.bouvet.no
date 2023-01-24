# Oppstartspakke
## Hva er en Security Champion?
Det er ganske enkelt, du er en Security Champion om du har bestemt deg for å bli det. For å lese mer om hva en Security Champion er anbefales følgende kilder:
 - [https://minside.bouvet.no/bouvet-alle/sikkerhet-i-dna-et-vart/security-champions](https://minside.bouvet.no/bouvet-alle/sikkerhet-i-dna-et-vart/security-champions) (krever innlogging og er vår egen beskrivelse)
 - [https://sikkerhet.nav.no/docs/bli-security-champion/](https://sikkerhet.nav.no/docs/bli-security-champion/)
- [https://equinor.github.io/appsec/security-champion/](https://equinor.github.io/appsec/security-champion/)

## Hjelp, jeg har definert meg selv som security champion!
Gratulerer du har nå blitt en av de som jobber for å skape en bedre verden! Det vanskeligste er nå gjort, så nå skal vi bare å begynne med å ta små skritt i riktig retning.

Uavhengig av din bakgrunn (utvikler, tester, prosjektleder osv) kan punkt 1, 2 og 3 gjøres av alle.

### 1. Skap bevissthet
Du kan gjerne begynne med å stille deg selv noen spørsmål?

- Hva gjør dette prosjektet jeg jobber med egentlig?
- Hva er kritisk for at systemet skal fungerer?
- Hvordan kan dette systemet misbrukes?  

Når du begynner å skape deg en bevissthet så kan vi gå videre å finne ut av mer. Nå kan du begynne å ta litt initiativ i teamet ditt.

- Et godt startsted er å organisere en trusselmodellerings-øvelse. Du trenger ikke kunne noe om trusselmodellering, men du kan få litt støtte her [https://www.threatmodelingmanifesto.org/](https://www.threatmodelingmanifesto.org/). Målet med denne trusselmodelleringen er at du og teamet skal få et bevisst forhold til trusler og kanskje få i gang tankeprosessen rundt mottiltak.

- Vurder å etablere et bug bounty program (premiering for å finne bugs) eller noe som får teamet ditt med på å aktive finne utfordringer som bør/må løses.

Vær litt kreativ og forsøk å få med teamet, en Security Champion som ikke får med seg teamet får ofte ikke gjort så mye som han/hun ønsker.

### 2. Har vi kontroll på hele prosjektet vårt?
Hvis svaret er ja, så retter vi på det til nei. Det  er alltid mer som kan gjøres. Kollegaene våre i Nord (teknisk sett midt) har laget en fantastisk liste som bør sjekkes ut for hvert eneste prosjekt vi er involvert i. Listen finner du her: [https://github.com/bouvet/nord-sikkerhetsforum/blob/main/templates/security-checklist.md](https://github.com/bouvet/nord-sikkerhetsforum/blob/main/templates/security-checklist.md)

Går man gjennom den listen får man støtte til å få kontroll på blant annet
- Ansvar og rutiner
- Tredjepartsprogramvare
- Bygg og deploy av løsninger
- Disaster recovery
- Business Continuity
- Infrastruktur
- Kildekode

Husk du trenger ikke ta alt på en gang få med deg teamet og gjør del for del til dere har enda bedre kontroll på prosjektet. Du trenger ikke kunne alt om dette her men sammen i teamet ditt bør dere klare å finne ut av det.

### 3. Beskytte brukere og bedriftens rykte
Basert på etikken som læres bort i forsvaret får vi noen lure spørsmål vi kan bruke som utgangspunkt.

- Er det lov?
	-  Er løsningen vår lovlig eller risikerer vi f.eks bøter fra datatilsynet og kanskje vi skal fikse dette?

- Er det taktisk lurt?
	- Vi stryker taktisk her og endrer til lurt. Er det lurt å lage denne featuren eller er det lurt å sette det opp slik?

- Kan jeg leve med det?
	- Eksempel tåler vi å lage en løsning som kan brukes til trakasering? Ref [https://nrkbeta.no/2022/09/14/lett-a-trakassere-via-vipps/](https://nrkbeta.no/2022/09/14/lett-a-trakassere-via-vipps/)

- Tåler vi at dette havner øverst på VG?
	- [https://www.digi.no/artikler/tv-2-russland-sto-bak-nortura-hacking-ifolge-selskapet/519712](https://www.digi.no/artikler/tv-2-russland-sto-bak-nortura-hacking-ifolge-selskapet/519712)
	- [https://nrkbeta.no/2022/09/14/lett-a-trakassere-via-vipps/](https://nrkbeta.no/2022/09/14/lett-a-trakassere-via-vipps/)

### 4. Teknisk gjennomgang av løsninger

Har er det på tide å se på en klassiker som heter OWASP Top 10 og sørge for at vi har unngått disse tabbene, men dette er basic. Skal vi virkelig har kontroll på koden og løsningene må vi gå løs på

- OWASP Secure Coding Practices Quick Reference Guide [https://owasp.org/www-pdf-archive/OWASP_SCP_Quick_Reference_Guide_v2.pdf](https://owasp.org/www-pdf-archive/OWASP_SCP_Quick_Reference_Guide_v2.pdf)
- OWASP ASVS [https://cheatsheetseries.owasp.org/IndexASVS.html](https://cheatsheetseries.owasp.org/IndexASVS.html)
