---
title: Retningslinjer for innhold
weight: 9
translationKey: contribute
description: >
  Så fint at du vil bidra med innhold!
---
Siden alt som skrives på denne siden er fritt tilgjengelig på Internet, er det viktig å følge noen enkle regler og retningslinjer for innhold. 

## Språk og stil

Innholdet på disse sidene er primært for teknikere og teknisk språk er derfor å forvente. Men, om uttrykk brukes som ikke kan antas å være godt kjent må de beskrives. Språket skal kunne leses og forstås av de fleste teknikere, ikke bare de som har jobbet med sikkerhet i flere tiår!

Husk også at alle artikler skal ha en inngress som skal kunne leses og forstås av alle fra ledere og leveranseorganisasjon til sikkerhetseksperten og juniorutvikleren.  

## Artikeloppbygging

Alle artiklene skal ha følgende oppbygning

```
---
title: Sidetittel
weight: heltall, angir rekkefølgen i menyen
translationKey: tekststreng, brukes for å mappe artikler mellom språk
description: >
  Ingressen. Typisk en setning eller to. 
---

Ingressen skal være oppsummerende og bruke et språk som kan leses og forstås av alle.

## Brødtekst
Alle artikler skal være teknologi-agnostiske. 
Bruk gjerne spesifikk teknologi i eksempler, men unngå artikler som kun gir mening på Azure eller AWS.
Bruk features i MD / Hugo til å understreke eller utheve viktige punkter.
Bruk code fencing til å vise eksempler og del opp innholdet med headings (ingen liker wall of text)

Husk at løsningen baserer seg på at sidetittel er øverste heading-nivå; alt under denne må ha minimum nivå 2 - ##

## Veien videre
* [Ekstern lenke 1](URL)
* [Ekstern lenke 2](URL)

```

## Eksterne lenker
Bruk permalenker der dette er mulig. Hensikten med seksjonen _Veien videre_ er å peke på ressurser med mer dyptgående innhold slik at det er mulig å fordype seg videre etter å ha fått en smakebit fra et tema. 

Bruker du tekst fra en annen artikkel eller kilde så må dette refereres til.

## Hjelp!

Trenger du hjelp med Markdown?
- [Markdown hjelp](https://github.github.com/gfm/)
- [Markdown emojis](https://gist.github.com/rxaviers/7360908)
- [Hugo](https://gohugo.io/about/features/)

Noe du lurer på angående innhold, hva du kan bidra med osv? Ta kontakt med oss på [Slack](https://bouvet.slack.com/archives/C0447R83U6M) eller se [følgende issue](https://github.com/bouvet/sikkerhet.bouvet.no/issues/22)
