---
displayed_sidebar: null
---
import Link from "@docusaurus/Link";

#   

<div className="frontpage">
<div className="row ingress" >
    <div className="column">
        <h1>Welcome to sikkerhet.bouvet.no!</h1>
        <p>
            This is the place to go for developers, infrastructure engineers, DevOps personell and anyone else in Bouvet for information on how to developer, operate and manage secure IT solutions for our customers. The overall information found here is also useful for other roles, such as project managers, advisors and anyone else tasked with following up on security in our many projects. 
        </p>
        <p>
            The goal of this site is not to contain everything there is to know about a subject, but rather to communicate the basics on a level anyone can understand.
        </p>
    </div>
    <div className="column quote">
        <img className="column quote illustration" alt="We are going to do our utmost to deliver the most secure solutions and services. " src="/img/quote-illustration.svg"/>
        <p className="column quote">"We are going to do our utmost to deliver the most secure solutions and services"</p>
    </div>
</div>

<div className="dev-ops-links-wrapper">
    <div className="dev-ops-links-backdrop" />
    <h2 className="row devops-links-header">What are you looking for?</h2>
    <div className="row devops-links">
        <Link to="/planlegge/introduction">
            <button className="devops-button">Plan</button>
        </Link>
        <Link to="/utvikle/introduction">
            <button className="devops-button">Code</button>
        </Link>
        <Link to="/bygge/introduction">
            <button className="devops-button">Build</button>
        </Link>
        <Link to="/teste/introduction">
            <button className="devops-button">Test</button>
        </Link>
        <Link to="/release/introduction">
            <button className="devops-button">Release</button>
        </Link>
        <Link to="/deploye/introduction">
            <button className="devops-button">Deploy</button>
        </Link>
        <Link to="/drifte/introduction">
            <button className="devops-button">Operate</button>
        </Link>
        <Link to="/monitorere/introduction">
            <button className="devops-button">Monitor</button>
        </Link>
    </div>
</div>

<div className="row bottom-section">
    <div className="column">
        <h3>Information Security</h3>
        <b className="buttom-section-sub-header">is all about securing the following elements of an IT-system:</b>
        <b>Confidentiality</b>
        <p>The information contained or processed within the system shall not be available for unauthorized persons.</p>
        <b>Integrity</b>
        <p>The information is accurate, and cannot be modified without authorization or without being detected.</p>
        <b>Availability</b>
        <p>The system must be available when needed, and security mechanisms must be implemented in order to protect it.</p>
    </div>
    <div className="column">
        <div className="column">
            <h3>Security Champion</h3>
            <b className="buttom-section-sub-header">Are you, or do you want to become a Champion?</b>
            <p>
                A Security Champion is an individual working to promote security in all its forms within a team, a project or a business unit. The champion is not responsible for security or compliance, but acts as a motivator and advocate for security in order to raise awareness!
            </p>
            <p>
                A good place to start regardless of background or intentions is our  
                <a href="/security_champion/security_champion_startpoint" className="underlined-link"> information package for Security Champions</a>
            </p>
        </div>
    </div>
</div>
</div>
