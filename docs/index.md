---
displayed_sidebar: null
---
import Link from "@docusaurus/Link";

#   

<div className="frontpage">
<div className="row ingress" >
    <div className="column">
        <h1>Velkommen!</h1>
        <p>
            Her vil systemutviklere, infrastruktur-ingeniører, DevOpsere og andre i Bouvet finne informasjon til
            støtte for å drifte, utvikle og forvalte sikre IT-systemer for våre kunder. Det overordnede
            innholdet og temaene som diskuteres på disse sidene er også støttende for prosjektledere, rådgivere
            og andre som skal følge opp sikkerhet i prosjekter.
        </p>
        <p>
            Informasjonen på denne siden er på ingen måte uttømmende om et emne, men har som mål å bruke et enkelt språk til å beskrive ulike tiltak som kan dekke de vanligste svakhetene.
        </p>
        <p>    
        Hvis du er ny til sikkerhet.bouvet.no, anbefaler vi at du leser <a href="index2">introduksjonen</a> først
        </p>
    </div>
    <div className="column quote">
        <img className="column quote illustration" alt="Vi skal gjøre vårt ytterste for å levere de sikreste tjenestene og løsningene" src="/img/quote-illustration.svg"/>
        <p className="column quote">"Vi skal gjøre vårt ytterste for å levere de sikreste tjenestene og løsningene"</p>
    </div>
</div>
<div className="dev-ops-links-wrapper">
    <div className="dev-ops-links-backdrop" />
    <h2 className="row devops-links-header">Hva ser du etter?</h2>
    <div className="row devops-links">
        <Link to="/index2">
            <button className="devops-button">Introduksjon</button>
        </Link>
        <Link to="/planlegge/introduction">
            <button className="devops-button">Planlegge</button>
        </Link>
        <Link to="/designe/introduction">
            <button className="devops-button">Designe</button>
        </Link>
        <Link to="/utvikle/introduction">
            <button className="devops-button">Utvikle</button>
        </Link>
        <Link to="/deploye/introduction">
            <button className="devops-button">Deploye</button>
        </Link>
        <Link to="/forvalte/introduction">
            <button className="devops-button">Forvalte</button>
        </Link>
        <Link to="/security_champion/introduction">
            <button className="devops-button">Security Champions</button>
        </Link>
    </div>
</div>

<div className="row bottom-section">
    <div className="column">
        <h3>Informasjonssikkerhet</h3>
        <b className="buttom-section-sub-header">handler om å sikre disse aspektene ved et IT-system:</b>
        <b>Konfidensialitet</b>
        <p>Dataene systemet behandler skal ikke være tilgjengelig for uautoriserte.</p>
        <b>Tilgjengelighet</b>
        <p>Funksjonene systemet tilbyr er tilgjengelige når brukerne trenger det.</p>
        <b>Integritet</b>
        <p>Dataene systemet behandler er korrekte.</p>
    </div>
    <div className="column">
        <div className="column">
            <h3>Security Champion</h3>
            <b className="buttom-section-sub-header">Er du, eller vil du bli en helt?</b>
            <p>En Security Champion er en person som fungerer som en pådriver og motivator for sikkerhetsarbeidet i et team eller en avdeling/enhet. Ansvaret for sikkerheten ligger på teamet i sin helhet, men som Security Champion bidrar du til bevisstgjøring og fokus.</p>
            <p>
                Et godt sted å starte, uavhengig om du er eller vil bli en helt - er vår 
                <a href="/security_champion/introduction" className="underlined-link"> infopakke for Security Champions</a>
            </p>
        </div>
    </div>
</div>
</div>
