# Velkommen til sikkerhet.bouvet.no

## Innhold

### Bidra med innholdsproduksjon

Ønsker du å bidra med innhold så er det bare å lage et issue ([se om det finnes noe allerede](https://github.com/bouvet/sikkerhet.bouvet.no/issues)), lag en branch og skriv i vei! Alt av innhold blir reviewet og merget ned om det blir godkjent. Er det noe du lurer på i forhold til dette så er [Slack-kanalen vår](https://bouvet.slack.com/archives/C0447R83U6M) et godt startsted.

#### Retningslinjer for innhold

Alt innhold som skrives her vil være fritt tilgjengelig på Internett. Les mer om hvordan artikler skal skrives og hva de skal inneholde i våre [retningslinjer for innhold](docs/content-guidelines.md)

## Kjøre lokalt

`git` og `npm` må være installert.

    $ git clone git@github.com:bouvet/sikkerhet.bouvet.no.git
    $ npm ci --ignore-scripts

Dersom du vil teste noe som krever flerspråklighet må du først bygge:
    $ npm run build
    $ npm run serve

Dersom du bare skal teste noe i forbifarten og default language er godt nok, kan du starte direkte:
    $ npm run start


### Noe du savner?

Hvis det er konkrete forslag til artikler er det fint om [listen her](https://github.com/bouvet/sikkerhet.bouvet.no/issues/22) oppdateres.
