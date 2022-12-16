---
sidebar_position: 4
---

# Business Continuity Planning

import WorkInProgress from '../_work_in_progress.mdx'

<WorkInProgress />

_Business Continuity Planning_ er _ikke_ er IT-teknisk fag. Men det er vårt ansvar som leverandører av et IT-system å minne kunden på at systemet kan bli utilgjengelig.  
Svaret fra denne planleggingen vil være med å beskrive hvilke krav som stilles til løsningens robusthet og sikkerhetsnivå, og er avgjørende for å finne riktig balanse av kostnad og ytelse hos systemet. 


- Business Continuity Disaster Recovery
  - Hva gjør sluttbrukerne når systemene er nede? - fylles ut av sluttbrukere sammen med IT
  - Hva gjør IT-Ops når systemene er nede?
    - Midlertidig, provisorisk alternativ
    - Tilbake til normaldrift
- Diskuter / ha noen tanker rundt "Service Level Agreement (ambitions)" (SLA / best effort / ++) (utarbeides med kunde)
  - Oppetid
  - (U)Planlagt nedetid
  - Recovery Time Objective (RTO) - akseptabel tid for å oppnå normaltilstand etter svikt
  - Recovery Point Objective (RPO) - hva er akseptabelt datatap etter svikt (målt i tid)
- Resilience/Robusthet - Hvordan motstå feil
