---
sidebar_position: 1
---

# Securing physical environments

import WorkInProgress from '../_work_in_progress.mdx'

<WorkInProgress />

When working on a project that requires physical infrastructure, it is important that this infrastructure is secure. Not only does it have to be secure from digital intrusion attempts which is covered in other articles, but also against physical intrusion and outside events.

## Securing against people
Having a digital environment where everything is secure and monitored doesn't really help if unauthorized personnel can access the physical infrastructure. When establishing or renting space at a shared facility it is important to ensure that all the equipment you need is located inside locked and secured cabinets. Alarms notifying you or the facility of attempts to force the cabinets open is also a possibility. 

The facility itself should have access controls to ensure that only authorized personnel is allowed inside, and ideally camera surveillance to ensure that nobody opens the floor to tamper with cables running to your equipment. 

If someone attempts an attack on your physical infrastructure, it is also important to know how access is controlled and logged and for how long the access log and video feeds are kept. 

When (rented) equipment is phased out, does the data center have any procedures in place to ensure that disks have been wiped for any data? 

## Other elements to consider

Data centers are often [classified in tiers](https://uptimeinstitute.com/tiers) which basically tries to define the robustness of a data center. Does it have redundant power, network and cooling? If so, how many sources? Does it have emergency backup power, does it segregate the center into multiple independent units, or is everything dependent eg. on a single pump for cooling? 

If something breaks, does the data center rely on external contractors to fix the issue, or can they handle it themselves? 
If power fails, how will this impact your operation?

Preventative measures aiming to reduce the risk of someone being able to physically attack your infrastructure is not the only thing to consider. Unforeseen events such as extreme weather, fires and floods can also have an impact on security. If a data center can be affected by eg. flooding, what is the procedure when it happens? Will all the equipment be removed and set up on a backup site, or will it simply be stored somewhere? How is the physical security in those locations? 

## Lastly

Do you need a physical environment? Can a cloud provider replace everything, or at least reduce the amount of physical equipment required for regular operations? 