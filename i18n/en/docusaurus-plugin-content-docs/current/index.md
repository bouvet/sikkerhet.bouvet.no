---
displayed_sidebar: null
---
import Link from "@docusaurus/Link";

#   

<div className="frontpage">
<div className="row ingress" >
    <div className="column">
        <h1>Welcome!</h1>
        <p>
            Here, system developers, infrastructure engineers, DevOps practitioners, and others at Bouvet will find information to support the operation, development, and maintenance of secure IT systems for our customers. The overarching content and themes discussed on these pages also supports project managers, advisors, and others who need to follow up on security in projects.
            The information on this site is by no means exhaustive on any subject, but aims to use simple language to describe various measures that covers the most common weaknesses.
        </p>
    </div>
    <div className="column quote">
        <img className="column quote illustration" alt="We will do our utmost to deliver the safest services and solutions" src="/img/quote-illustration.svg"/>
        <p className="column quote">"We will do our utmost to deliver the safest services and solutions"</p>
    </div>
</div>

<div className="dev-ops-links-wrapper">
    <div className="dev-ops-links-backdrop" />
    <h2 className="row devops-links-header">What are you looking for?</h2>
    <div className="row devops-links">
        <Link to="planlegge/introduction">
            <button className="devops-button">Plan</button>
        </Link>
        <Link to="designe/introduction">
            <button className="devops-button">Design</button>
        </Link>
        <Link to="utvikle/introduction">
            <button className="devops-button">Develop</button>
        </Link>
        <Link to="deploy/introduction">
            <button className="devops-button">Deploy</button>
        </Link>
        <Link to="manage/introduction">
            <button className="devops-button">Manage</button>
        </Link>
        <Link to="security_champion/introduction">
            <button className="devops-button">Security Champions</button>
        </Link>
    </div>
</div>

<div className="row bottom-section">
    <div className="column">
        <h3>Information Security</h3>
        <b className="bottom-section-sub-header">is about securing these aspects of an IT system:</b>
        <b>Confidentiality</b>
        <p>The data processed by the system should not be accessible to unauthorized individuals.</p>
        <b>Availability</b>
        <p>The functions offered by the system are available when users need them.</p>
        <b>Integrity</b>
        <p>The data processed by the system is correct.</p>
    </div>
    <div className="column">
        <div className="column">
            <h3>Security Champion</h3>
            <b className="bottom-section-sub-header">Are you, or do you want to be a hero?</b>
            <p>A Security Champion is a person who acts as a driving force and motivator for security work in a team or department/unit. Responsibility for security lies with the team as a whole, but as a Security Champion, you contribute to awareness and focus within the team.</p>
            <p>
                A good place to start, whether you are or want to be a hero, is our
                <a href="/security_champion/introduction" className="underlined-link"> info package for Security Champions</a>
            </p>
        </div>
    </div>
</div>
</div>
