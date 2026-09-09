import type { BlogPostSeed } from "./types";

/**
 * Building science cluster: ventilation, moisture control, and snow/ice
 * behaviour on metal roofs in Southern Ontario.
 *
 * Dates are assigned centrally, so these seeds intentionally omit `date`.
 */
export const BUILDING_SCIENCE_POSTS: BlogPostSeed[] = [
  {
    slug: "attic-ventilation-basics-metal-roofs",
    title: "Attic Ventilation for Metal Roofs: Intake and Exhaust as One System",
    excerpt:
      "A metal panel is airtight by design, so every moisture and temperature problem a roof has gets solved underneath it. Here is how intake and exhaust work together, and how attics fail.",
    readTime: "8 min read",
    category: "Metal Roofing",
    metaTitle: "Attic Ventilation for Metal Roofs: How the System Works",
    metaDescription:
      "How attic intake and exhaust work as one system under a metal roof, what net free area means, and the ventilation failures common in Ontario attics.",
    content: [
      {
        type: "p",
        text: "Metal panels do not breathe, and they are not meant to. Everything a roof assembly does about moisture and heat happens underneath the panel — in the vent space, in the attic, and at the ceiling plane below it. That is why attic ventilation is worth understanding before a metal roof goes on rather than after. Once the panels are up and the ridge cap is closed, changing the ventilation strategy means opening the roof again.",
      },
      {
        type: "h2",
        heading: "What Attic Ventilation Is Actually For",
        text: "Attic ventilation has three jobs, and in Southern Ontario the winter job decides whether an assembly survives. First, it carries away water vapour that leaks up from the house before it can condense or frost on cold sheathing. Second, in summer it moderates the temperature of the deck. Third, through the winter it keeps the underside of the deck close to outdoor temperature so snow melts at roughly the same rate everywhere instead of melting high and refreezing at the cold eave — the ice damming story, which is a heat and air control problem long before it is a roofing problem.",
      },
      {
        type: "h2",
        heading: "Ventilation Is Two Halves of One System",
        text: "A vented attic needs low openings and high openings. Intake happens near the eave — perforated soffit, vented drip edge, or fascia vents. Exhaust happens near the top, usually a ridge vent or off-ridge vents. Neither half works alone. Exhaust with no matching intake pulls make-up air from wherever it is easiest to get, which on most houses is the heated space below.",
      },
      {
        type: "h2",
        heading: "What Actually Drives the Air",
        text: "Nothing pushes air through an attic except pressure differences, and there are only two of consequence on a house.",
      },
      {
        type: "ul",
        items: [
          "Stack effect: warm attic air is less dense than the cold air outside, so it rises and pushes out the highest openings while cold air is drawn in low. The bigger the indoor-outdoor temperature difference, the stronger the effect — which is why ventilation works hardest in January, exactly when moisture removal matters most.",
          "Wind: air moving over a roof creates positive pressure on the windward slope and negative pressure over the ridge line. A ridge vent with an external baffle is built to exploit that suction and to keep wind-driven snow and rain from being pushed back into the slot.",
          "Neither driver is strong. Attic ventilation moves air at very low pressure, which is why blocked intake, undersized openings, or a partly filled vent slot make such a large difference.",
        ],
      },
      {
        type: "h2",
        heading: "Net Free Area: The Only Number That Counts",
        text: "Vent products are rated by net free area, or NFA — the actual open area left after insect screen, louvres, baffles, and perforation patterns take their share. A perforated aluminum soffit panel might look like a continuous opening and deliver only a small fraction of that in free area. Ridge vents are rated in net free area per linear measure of ridge. Box vents are rated per unit. Measuring the length of your soffit or counting the vents on your roof tells you very little; adding up published NFA tells you something real.",
      },
      {
        type: "h2",
        heading: "The 1:300 and 1:150 Convention",
        text: "The rule of thumb you will hear from most contractors is one unit of net free vent area for every 300 units of insulated ceiling area, provided the venting is split roughly evenly between high and low openings and a vapour retarder is present at the ceiling — and one to 150 where those conditions are not met. It is a widely specified convention, not a law of physics, and not a substitute for what your local building department enforces. Confirm the requirement for your project with your municipality.",
      },
      {
        type: "callout",
        text: "A ratio describes an area of opening, not a rate of airflow. Two attics with identical net free area can perform completely differently if one has its soffit intake buried under blown insulation and the other does not. Always check the path, not just the arithmetic.",
      },
      {
        type: "h2",
        heading: "What Changes When the Roof Is Metal",
        text: "The panel itself is impermeable, so all ventilation happens through purpose-built openings and through the assembly beneath. Under standing seam, exhaust is normally handled at the ridge: the deck is slotted, a vent material sits over the slot, profile closures seal the panel ribs, and a raised ridge cap covers the assembly while leaving the air path open. Off-ridge vents are possible but each one becomes a flashed penetration through a continuous panel, which is why we would rather solve exhaust at the ridge where the geometry allows it. On exposed-fastener panels, every rib is either an opening that needs a closure or a deliberate part of the vent path, and getting that wrong is a common source of wind-driven snow in an attic.",
      },
      {
        type: "h2",
        heading: "How Attics Fail Around Here",
        text: "The same handful of problems turn up on Southern Ontario houses year after year, and almost all of them are visible from inside the attic on a cold morning.",
      },
      {
        type: "ul",
        items: [
          "Soffit intake blocked by blown insulation that drifted into the eave, with no baffles to hold it back.",
          "A ridge vent installed correctly on the outside while the continuous slot in the deck was never cut, or was cut too narrow.",
          "Bathroom and kitchen exhaust fans terminating in the attic instead of through the roof or wall, dumping litres of water vapour into the coldest space in the house.",
          "Gable vents left open after a ridge vent is added, so the ridge draws from the gables instead of from the eaves and the lower attic never sees airflow.",
          "Recessed lights, an unsealed attic hatch, plumbing stacks, and top plates that leak warm humid air upward faster than the vents can remove it.",
        ],
      },
      {
        type: "h2",
        heading: "What We Look At Before a Metal Re-Roof",
        text: "A re-roof is the one moment when the ridge, the eave, and the deck are all accessible at once, so it is the natural time to correct ventilation. That means adding up the published net free area of what is actually installed rather than what is visible, looking in the attic for the evidence — frost staining, rusted nail points, matted insulation at the eaves — and confirming the soffit is genuinely open behind the perforated panel. The ridge detail has to be settled before panels are ordered, because it affects panel length and the cap assembly.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "Does a metal roof need more ventilation than asphalt shingles?",
            a: "The requirement is driven by the insulated ceiling area below, not by the roofing material, so the target does not change when you switch to metal. What changes is how the openings get built. Metal exhaust and intake details are fabricated rather than cut into a shingle field, so they need to be planned before the panels are made.",
          },
          {
            q: "Can a metal roof go on over an attic that is under-vented?",
            a: "Physically, yes — the panel does not care. But an under-vented attic keeps accumulating moisture under the new roof, and the deck under a long-lived panel is the last thing you want to be dealing with in ten years. A re-roof is the practical moment to open the soffits, install baffles, and build a proper ridge, because everything is already accessible.",
          },
          {
            q: "Will adding more roof vents fix a damp attic?",
            a: "Usually not, and often it makes things worse. If intake is limited, extra exhaust openings just increase the suction on the ceiling plane and pull more warm, humid indoor air into the attic. The order of operations is: seal the ceiling plane, open and protect the intake, then size the exhaust to match.",
          },
          {
            q: "My attic has spray foam on the underside of the roof deck. Do I still need soffit vents?",
            a: "No — that is an unvented, or hot roof, assembly and it follows a different set of rules. Venting a foamed roof deck defeats the design. What matters there is that the foam is continuous, thick enough for the climate, and airtight at every edge and penetration.",
          },
        ],
      },
    ],
  },
  {
    slug: "balanced-attic-ventilation-intake-exhaust",
    title: "Why Intake and Exhaust Must Be Balanced — and What Happens When They Are Not",
    excerpt:
      "An attic with more exhaust than intake does not simply underperform. It goes negative, and the make-up air comes from the heated house below — pulling moisture up with it all winter.",
    readTime: "8 min read",
    category: "Metal Roofing",
    metaTitle: "Balanced Attic Ventilation: Why Intake Must Match Exhaust",
    metaDescription:
      "What happens when roof exhaust exceeds soffit intake: attic depressurization, humid house air pulled upward, frost on sheathing, and short-circuited vents.",
    content: [
      {
        type: "p",
        text: "Balance is the part of attic ventilation that gets skipped. Exhaust vents are visible from the street and easy to add; intake is hidden under the eaves and nobody looks. The result is a very common Ontario attic: plenty of vents on the roof, almost nothing open at the soffit, and a moisture problem that keeps coming back no matter how many more vents get cut in.",
      },
      {
        type: "h2",
        heading: "What Balanced Actually Means",
        text: "Balanced ventilation means the net free area at the intake openings is roughly equal to the net free area at the exhaust openings — a fifty-fifty split of the total, with the intake half at or near the eave and the exhaust half at or near the ridge. Where designers deviate, they deviate toward more intake, not less. A slight surplus of intake keeps the attic neutral or very slightly pressurized relative to the house, which is the safe direction to be wrong in.",
      },
      {
        type: "h2",
        heading: "Air Has to Come From Somewhere",
        text: "This is the whole argument in one sentence. If a ridge vent and a row of box vents can move a certain volume of air out of an attic, that same volume has to enter the attic. If the soffits cannot supply it, the attic goes slightly negative relative to its surroundings and the air is drawn through whatever openings remain. On a typical house, the largest available set of openings is the ceiling plane — and on the other side of the ceiling plane is warm, humidified indoor air.",
      },
      {
        type: "h2",
        heading: "Where the Make-Up Air Comes From",
        text: "The ceiling of a house is not a solid surface. It is a plane full of penetrations, most of which were never sealed, and a depressurized attic finds every one of them.",
      },
      {
        type: "ul",
        items: [
          "Recessed light housings, which are essentially open cans through the ceiling unless they are gasketed and sealed.",
          "The attic hatch or scuttle, often an uninsulated panel resting loose in a frame.",
          "Interior wall top plates, where the drywall meets framing and the wall cavity opens directly into the attic.",
          "Plumbing vent stacks, wiring runs, and the chases around them.",
          "Bathroom fan housings, which leak around the body even when the duct itself is run correctly.",
          "Dropped ceilings, soffits over kitchen cabinets, and bulkheads that are open to the attic at the top.",
          "Chimney and flue chases, which are often the single biggest opening in a house.",
        ],
      },
      {
        type: "h2",
        heading: "What That Costs You in January",
        text: "The air being pulled up through those openings is heated air that you paid to heat, and it is carrying the humidity of the house with it. When it reaches sheathing that is at or below outdoor temperature, the vapour it carries condenses — and below freezing it does not condense as water, it deposits as frost on the underside of the deck and on every nail point. That frost sits there until the first mild day, then melts all at once and drips onto the insulation below. Homeowners describe it as a roof leak that only happens after a thaw. It is not a leak. It is the attic returning the moisture it collected all winter.",
      },
      {
        type: "h2",
        heading: "The Secondary Damage",
        text: "Wet insulation loses much of its thermal performance while it is damp and can stay compressed after it dries. Repeated wetting of sheathing supports mould growth on the wood and can eventually delaminate plywood or swell OSB at the edges. Nails corrode. And because a depressurized attic is continuously drawing heat out of the house, the roof deck runs warmer than it should, which is exactly the condition that starts an ice dam at the eave.",
      },
      {
        type: "h2",
        heading: "Short-Circuiting: The Other Way Balance Fails",
        text: "Even with adequate total intake, mixing exhaust types on one attic can defeat the system. If a house has both gable vents and a new ridge vent, the ridge will draw the easiest air available, and the gable openings are far easier to pull from than a soffit slot at the far end of the attic. The result is a short circuit: air enters the gable, travels a short distance, and exits the ridge, while the eave ends of the attic stay stagnant. The same thing happens when box vents and a ridge vent share one roof plane — the upper vents feed the ridge and the lower part of the attic never moves. Choose one exhaust strategy per attic and commit to it.",
      },
      {
        type: "callout",
        text: "The failure mode is worth stating plainly: adding roof vents to an attic that is short on intake increases the amount of warm, humid indoor air pulled into that attic. More exhaust makes an unbalanced attic wetter, not drier.",
      },
      {
        type: "h2",
        heading: "The Opposite Imbalance",
        text: "More intake than exhaust is the far less damaging error. The attic ends up neutral or slightly positive relative to the house, so it is not actively pulling conditioned air upward. Airflow is lower than ideal and moisture removal is slower, but the mechanism that drives the worst winter failures is not running. This asymmetry is why the standard advice is to err on the side of intake.",
      },
      {
        type: "h2",
        heading: "How to Assess Balance on an Existing House",
        text: "Start with the published net free area of the exhaust you have — ridge vent NFA per linear measure times the vented length, plus the rated area of each box or gable vent. Then do the same for intake, using the manufacturer's figure for the soffit product rather than the visible perforation. Then go outside on a cold day and look up into the eaves with a light. If you cannot see daylight or open baffle above the soffit, the rated area of that product is irrelevant, because the path is blocked. On many houses the intake number ends up being a fraction of the exhaust number, and correcting that at the eave does more than anything else on the roof.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "How do I know if my attic is depressurized?",
            a: "The evidence is usually visible rather than measurable. Frost or dark staining on the underside of the sheathing in winter, rusty nail tips, matted or discoloured insulation directly under vents, and ceiling stains that appear after a thaw rather than after rain all point to warm indoor air being pulled into a cold attic.",
          },
          {
            q: "Should I close my gable vents when a ridge vent is installed?",
            a: "Generally yes, and this is standard practice. Leaving them open lets the ridge draw from the gables instead of from the soffits, so the eave ends of the attic get very little airflow. The exception is a house where the soffit intake genuinely cannot be opened, in which case the gable vents may be the only intake available and the strategy has to be reconsidered as a whole.",
          },
          {
            q: "Can I just add more soffit vents instead of sealing the ceiling?",
            a: "Adding intake helps and is usually necessary, but sealing the ceiling plane is what actually stops moisture from entering the attic. Ventilation removes moisture that gets in; air sealing keeps it out in the first place. Doing only the first is treating the symptom.",
          },
          {
            q: "Does balance still matter if I am installing a metal roof?",
            a: "Yes, and arguably more, because a metal roof is a long-term assembly and you want the deck under it staying dry for decades. The panel does not change the physics of the attic. What it changes is your access — the ridge and eave details are far easier to build correctly during the re-roof than to retrofit afterward.",
          },
        ],
      },
    ],
  },
  {
    slug: "ridge-vent-vs-box-vents-turbine-powered-fans",
    title: "Ridge Vent vs Box Vents vs Turbines vs Powered Fans",
    excerpt:
      "Four ways to exhaust an attic, and they are not interchangeable. How each one moves air, how each behaves under a metal roof, and why powered fans are a poor fit for a cold climate.",
    readTime: "8 min read",
    category: "Metal Roofing",
    metaTitle: "Ridge Vent vs Box Vents vs Turbines vs Powered Attic Fans",
    metaDescription:
      "How ridge vents, box vents, turbines and powered attic fans actually work, how each performs under metal roofing, and why mixing exhaust types fails.",
    content: [
      {
        type: "p",
        text: "All four of these products exhaust air from an attic, and that is where the similarity ends. They pull on the attic in different ways, they behave differently in snow, and they create very different details in a metal roof. Choosing between them is not a matter of preference, and mixing them on one attic usually makes the ventilation worse rather than better.",
      },
      {
        type: "h2",
        heading: "The Job All Four Are Trying to Do",
        text: "Exhaust removes air from the highest part of the attic so that intake air can be drawn in low, sweeping the underside of the deck from eave to ridge on its way through. The quality of a ventilation system is measured by how completely it moves air across the whole deck, not by how much total air it moves. A design that exhausts an enormous volume from one corner while leaving two thirds of the attic stagnant has failed even if the arithmetic looks generous.",
      },
      {
        type: "h2",
        heading: "Ridge Vents",
        text: "A ridge vent is a continuous opening cut along the peak, covered by a vent material and a cap. It works with both drivers at once: stack effect pushes warm air out the highest point in the attic, and wind passing over the ridge creates a low-pressure zone that draws air out even in still-ish conditions. Because the opening runs the length of the ridge rather than sitting at one point, air is pulled evenly from both slopes over the full width of the attic. That uniformity is the reason ridge venting is the default recommendation wherever the roof geometry provides enough ridge length.",
      },
      {
        type: "h3",
        heading: "Ridge Venting Under a Metal Roof",
        text: "Under standing seam or exposed-fastener panels, a vented ridge is an assembly rather than a product you nail on. The deck is slotted back from the peak on both sides, a vent matrix or profiled vent strip sits over the slot, closures seal the panel ribs so wind-driven snow cannot enter through the profile, and a formed ridge cap covers it all with an air path left open beneath. The details matter in a snow climate: an external baffle helps shed wind, and the vent material has to resist infiltration of fine, dry, blowing snow, which is the failure that puts snow in an attic during a January blow.",
      },
      {
        type: "h2",
        heading: "Box Vents (Static Roof Vents)",
        text: "Box vents are individual static hoods set into the roof field a short distance below the ridge. They have no moving parts and rely entirely on stack effect and local wind. Each one draws from the attic near it, which means their coverage is a set of overlapping circles rather than a continuous line. They are the practical choice on roofs with very little ridge — hip roofs with short peaks, complicated multi-plane roofs, and additions. On a metal roof each box vent becomes a flashed penetration in a continuous panel, and every penetration is a detail that has to be built properly and inspected later. That is not an argument against them, but it is a reason to prefer ridge venting when the geometry allows.",
      },
      {
        type: "h2",
        heading: "Turbine Vents",
        text: "A turbine adds a wind-driven spinning head to a static vent, which increases extraction when the wind blows and does nothing extra when it does not. They move meaningful air on a windy day. The trade-offs in a cold, wet climate are bearings that wear and eventually seize or squeal, a head that can ice up in freezing rain, and a tendency to over-draw an attic that is short on intake — the same depressurization problem as any oversized exhaust. They also sit tall on the roof plane, which matters where snow slides off metal.",
      },
      {
        type: "h2",
        heading: "Powered Attic Fans",
        text: "A powered fan puts a motor on the exhaust side and moves far more air than any passive vent. That is precisely the problem in a heating climate. A fan sized to move real volume will exhaust more air than the soffit intake can supply on most houses, so the balance of the make-up air comes from the house through the ceiling. In summer that means pulling air-conditioned air into the attic; in winter, if the fan runs on a humidistat or is left running, it means pulling humid indoor air onto cold sheathing. Passive ventilation cannot depressurize an attic to any meaningful degree. A fan can.",
      },
      {
        type: "callout",
        text: "There is a safety dimension to powered attic fans as well. Depressurizing the top of a house can affect the pressure balance around naturally vented combustion appliances — an older gas water heater or furnace that draws its combustion air from the room and vents up a masonry chimney. If a powered fan is on the table at all, the combustion venting in the house needs to be looked at first by someone qualified to assess it.",
      },
      {
        type: "h2",
        heading: "Do Not Mix Exhaust Types",
        text: "Airflow takes the easiest path available. When two different exhaust systems share one attic, the higher or easier one draws from the lower one instead of from the eaves.",
      },
      {
        type: "ul",
        items: [
          "Ridge vent plus open gable vents: the ridge draws air across a few metres from the gable and exits, and the soffits barely participate.",
          "Ridge vent plus box vents on the same plane: the ridge pulls from the box vents below it, reversing them into intakes and leaving the lower attic stagnant.",
          "Powered fan plus any passive exhaust: the fan reverses the passive vents and pulls outdoor air straight back down through them, a very short loop that ventilates almost nothing.",
          "Turbines plus ridge venting: same short-circuit problem, with the added complication that the turbine's output varies with wind.",
          "One exhaust strategy per attic, with intake sized to match it, outperforms any combination.",
        ],
      },
      {
        type: "h2",
        heading: "What We Normally Specify on a Metal Re-Roof",
        text: "Where there is continuous ridge to work with, a vented ridge assembly paired with continuous soffit intake and baffles at every rafter bay. Where the roof is mostly hips with short ridges, off-ridge static vents distributed across the planes so no part of the attic is far from an exhaust point, again with intake corrected first. Gable vents get closed when a ridge system goes in. Powered fans get removed rather than replaced, and the ventilation gets rebuilt to work passively.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "Can a ridge vent be used on a metal roof?",
            a: "Yes, and it is the usual choice. It is built as an assembly — slotted deck, vent material, panel closures, and a formed ridge cap — rather than the roll-out product used with shingles. The important detail in our climate is resistance to fine wind-driven snow, which is what pushes snow into an attic through a poorly closed ridge.",
          },
          {
            q: "Are turbine vents a good idea in Ontario?",
            a: "They work, but the moving parts are a long-term maintenance item and they can ice up in freezing rain. On a metal roof they also sit proud of a surface that sheds snow, so their position relative to slide paths has to be considered. For most houses a properly built ridge vent does the same job with nothing to wear out.",
          },
          {
            q: "My attic gets hot in summer. Should I install a powered fan?",
            a: "A hot attic in summer is usually an insulation and air sealing issue at the ceiling plane, not an exhaust issue. A powered fan treats the symptom while introducing a depressurization problem that runs all year. Correcting insulation depth and sealing the ceiling addresses the heat that is actually reaching the living space.",
          },
          {
            q: "How many box vents does a roof need?",
            a: "It depends on the rated net free area of the vent and the insulated ceiling area below, and the requirement that applies is whatever your local building department enforces. The more useful question is distribution: vents concentrated on one plane leave the rest of the attic without airflow no matter how the total works out.",
          },
        ],
      },
    ],
  },
  {
    slug: "soffit-venting-baffles-blocked-insulation",
    title: "Soffit Venting: Perforated Soffit, Baffles, and Insulation That Blocks the Air",
    excerpt:
      "Intake is where most Ontario attics fail, and the failure is usually invisible from the ground. What perforated soffit actually delivers, where baffles go, and how to check your own eaves.",
    readTime: "8 min read",
    category: "Metal Roofing",
    metaTitle: "Soffit Venting, Baffles and Blocked Attic Intake",
    metaDescription:
      "Why soffit intake fails: solid soffit behind perforated panels, low net free area, missing baffles, wind washing, and insulation buried in the eave.",
    content: [
      {
        type: "p",
        text: "If an attic has a ventilation problem, the odds are strong that the problem is at the eave. Exhaust is visible, gets inspected, and gets added to over the years. Intake is tucked under an overhang where nobody looks, and it is quietly defeated by insulation, by renovations, and by soffit panels installed over surfaces that were never opened.",
      },
      {
        type: "h2",
        heading: "Perforated Soffit and the Panel Behind the Panel",
        text: "The most common intake failure in Southern Ontario is also the easiest to miss. A house gets new aluminum or vinyl soffit, and the installer runs perforated panel across the whole eave — which looks entirely correct from the driveway. But behind it is the original soffit: tongue-and-groove wood, plywood, or stucco board with no openings at all, or with a couple of small round louvres from 1972. Air cannot pass through a solid board because there is a perforated panel in front of it. The eave has to be opened behind the new soffit for the new soffit to do anything.",
      },
      {
        type: "h2",
        heading: "Net Free Area of Perforated Soffit Is Smaller Than It Looks",
        text: "A perforated panel reads as an open surface from a distance, but the actual net free area is determined by the hole pattern, the hole size, and whatever screen is behind it. Manufacturers publish that figure per unit of panel area, and it is a modest number. This matters when you are trying to match intake to exhaust: a long run of perforated soffit is not automatically enough intake, and vented panel alternating with solid panel — a common look — cuts the total further. Use the published figure for the specific product, not an assumption.",
      },
      {
        type: "h2",
        heading: "The Path From Soffit to Attic",
        text: "Air entering at the soffit has to travel up over the top plate of the exterior wall, past the insulation, and into the attic. That is a narrow, congested space on most houses, and it is where the intake path gets pinched. At the eave, the rafter or truss is at its shallowest, insulation is at its deepest relative to the space available, and the wall's top plate takes up part of the opening. On a truss roof with a standard heel, there may be very little clearance to work with.",
      },
      {
        type: "h2",
        heading: "Baffles: What They Do and Where They Go",
        text: "A baffle — also called a vent chute, insulation stop, or proper vent — is a channel installed in the rafter bay at the eave that holds insulation back and preserves a clear air path from the soffit into the attic. It is a small component that decides whether the whole ventilation system functions.",
      },
      {
        type: "ul",
        items: [
          "Install one in every rafter or truss bay that has soffit intake behind it, not every second or third bay.",
          "The baffle must start low enough to seal against the top plate area so insulation cannot spill under it into the vent path.",
          "It must extend far enough up the slope to clear the full depth of the insulation, including any future top-up. Baffles that stop short get buried by the next contractor who blows in another layer.",
          "It should be fastened at the sides so it does not collapse or fall out when insulation is blown in against it.",
          "It should not block the full bay: the point is a channel, not a plug. Air needs to leave the top of the baffle into the open attic.",
          "In a vented cathedral ceiling, the channel has to run continuously from soffit to ridge in every bay, not just at the eave.",
        ],
      },
      {
        type: "h2",
        heading: "Wind Washing at the Eave",
        text: "There is a second reason baffles matter, and it has nothing to do with airflow blockage. Cold outdoor air entering at the soffit blows directly across the face of loose-fill insulation at the eave. Loose fill is effective because it traps still air; when moving air passes through the outer part of the batt or the surface of the blown fibre, that portion stops insulating well. This is wind washing, and it degrades performance precisely at the perimeter of the ceiling — the strip directly above the exterior wall, which is also the coldest part of the ceiling and the area most likely to develop condensation or ice dams. A baffle with a solid face separates the incoming air stream from the insulation.",
      },
      {
        type: "h2",
        heading: "Low Heel Trusses and the Eave Pinch",
        text: "Many houses were framed with a standard truss heel that leaves only a few centimetres of vertical space above the exterior wall's top plate. You cannot get full insulation depth and a clear vent channel into that space at the same time, so something gives — usually the vent path, because whoever blew the insulation could not see the eave. The result is a thin, cold band of ceiling above the exterior wall with a blocked intake above it. On a new build, a raised heel or energy truss solves this at the design stage. On an existing house, the practical fix is a properly installed baffle plus attention to air sealing the top plate, accepting that insulation depth tapers at the perimeter.",
      },
      {
        type: "callout",
        text: "Take a bright light into the attic on a sunny day, go to the eave, and look down toward the soffit. If you cannot see daylight or a clear open channel above the top plate in each bay, your intake is blocked — regardless of how much perforated soffit is on the house or what the vent calculation says.",
      },
      {
        type: "h2",
        heading: "When There Is No Soffit to Vent",
        text: "Plenty of Ontario houses have shallow overhangs, closed rakes, or no overhang at all, and older additions frequently have none. There are workable alternatives, all of which get built during a re-roof rather than after it: vented drip edge, which creates an intake slot at the very edge of the deck; fascia vents installed at the top of the fascia board; and in some cases smart-baffle products that draw through a slot cut in the deck near the eave. Each has a lower net free area per unit length than good soffit venting, so they generally need to run continuously and are best paired with careful air sealing below. Where nothing works, an unvented assembly may be the honest answer.",
      },
      {
        type: "h2",
        heading: "Fixing Intake During a Metal Re-Roof",
        text: "The eave gets rebuilt on almost every metal roof anyway — new drip edge, new starter, often new fascia and eavestrough. That is the moment to open the soffit properly, install baffles across every bay, air seal the top plates from inside the attic where they are reachable, and confirm the intake area against the exhaust that is going on the roof. Doing it later means working from a ladder through a small opening, or opening the eave a second time.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "How can I tell if my soffit vents are actually working?",
            a: "From inside the attic with a light, look toward the eave in several different bays. You should see either daylight through the soffit perforations or a clear open baffle channel. If you see the back of the insulation, or a solid board, the intake is not functioning in that bay.",
          },
          {
            q: "Can baffles be added to an existing attic without a re-roof?",
            a: "Often yes, if the attic is accessible and there is room to work at the eave. It is awkward, low-clearance work and the insulation has to be pulled back and reinstated, but it does not require opening the roof. On low-heel trusses or in tight cathedral bays, access may be limited enough that doing it from outside during a re-roof is the only practical route.",
          },
          {
            q: "Is more soffit venting always better?",
            a: "Up to the point where intake matches exhaust, yes. Beyond that, extra intake does little harm — a slightly positive attic is the safe direction — but it stops helping. Once intake and exhaust are balanced, further gains come from air sealing the ceiling and correcting insulation, not from more openings.",
          },
          {
            q: "Do I need soffit vents if I have gable vents?",
            a: "Gable vents can move some air through an attic, but they only sweep the upper volume between the two gable ends and leave the deck near the eaves largely stagnant. They also short-circuit a ridge vent if both are open. Soffit intake feeding ridge or upper-roof exhaust is the arrangement that actually washes the whole underside of the deck.",
          },
        ],
      },
    ],
  },
  {
    slug: "condensation-under-metal-roof-physics",
    title: "Condensation Under a Metal Roof: The Physics, and How Assemblies Prevent It",
    excerpt:
      "Water on the underside of a metal panel is almost never a leak. It is dew point, air leakage and a cold surface — and the fix is in the assembly, not in the panel.",
    readTime: "9 min read",
    category: "Metal Roofing",
    metaTitle: "Condensation Under a Metal Roof: Causes and Prevention",
    metaDescription:
      "Why condensation forms under metal roofing — dew point, night sky cooling, air leakage and vapour drive — and the assembly details that prevent it.",
    content: [
      {
        type: "p",
        text: "Every winter, somebody finds water dripping inside a metal-roofed building on a clear cold morning, decides the roof is leaking, and starts looking for the hole. There is usually no hole. It is condensation, and it obeys rules that have nothing to do with roofing and everything to do with air, temperature, and vapour pressure.",
      },
      {
        type: "h2",
        heading: "Dew Point, in Plain Terms",
        text: "Air holds water as an invisible vapour, and how much it can hold depends strongly on its temperature. Warm air holds a great deal; cold air holds very little. Relative humidity describes how full the air is relative to what it could hold at its current temperature. Cool a parcel of air without changing its water content and its relative humidity climbs, because capacity is falling while content stays the same. The temperature at which it reaches one hundred percent is the dew point. Cool it any further and the water it can no longer hold has to go somewhere — it condenses onto the nearest surface below that temperature. Below zero it does not form droplets at all; it deposits directly as frost.",
      },
      {
        type: "h2",
        heading: "Why Metal Gets Blamed",
        text: "Metal panels are thin, conductive, and have very little thermal mass, so their temperature tracks the outdoors closely and changes quickly. There is also a second effect that surprises people: on a clear night, a roof surface radiates heat to the open sky and can cool to several degrees below the surrounding air temperature. That is why frost forms on car roofs and metal panels when the thermometer reads a few degrees above zero. So the underside of a metal panel is frequently the coldest surface in the whole assembly — and if humid air can reach it, that is where the water appears. The panel is not the cause; it is the coldest thing available.",
      },
      {
        type: "h2",
        heading: "Where the Moisture Comes From",
        text: "Buildings generate a surprising amount of water vapour, and in winter the indoor air is far more humid than the outdoor air, so the pressure gradient pushes moisture outward and upward.",
      },
      {
        type: "ul",
        items: [
          "People: breathing and perspiration release water continuously, and a full household adds up.",
          "Showers, baths, cooking, and dishwashing — the largest short-term sources, which is why exhaust fans have to terminate outdoors.",
          "Uncovered sump pits, damp basements, and crawlspaces with exposed soil, which can drive very large quantities of vapour into the house year-round.",
          "Humidifiers, whether whole-house or portable, running at a setpoint that is too high for the outdoor temperature.",
          "In an unfinished garage, barn, or shop: vehicles bringing in snow, unsealed concrete slabs, and stored equipment.",
        ],
      },
      {
        type: "h2",
        heading: "Three Ways Moisture Reaches the Deck",
        text: "Vapour gets from the heated space to a cold surface by three routes, and they are not equally important. Bulk water — an actual leak — is the obvious one and the easiest to identify. Vapour diffusion is the slow migration of water molecules through solid materials from higher vapour pressure to lower. Air leakage is warm humid air physically flowing through a hole in the ceiling and carrying its moisture with it. Of the three, air leakage moves far more water than diffusion does, by a wide margin. A single unsealed pot light or an open chimney chase transports more moisture into an attic in a winter than diffusion through the entire drywall ceiling around it.",
      },
      {
        type: "h2",
        heading: "Why That Ranking Determines the Fix",
        text: "If air leakage is the dominant transport mechanism, then the dominant control is an airtight ceiling plane — not a thicker vapour barrier, and not more roof vents. This is the single most common misdiagnosis in residential roofing. A homeowner with frost on the sheathing adds vents; the attic goes more negative; more house air gets pulled up; the frost gets worse. Seal the plane first, ventilate second, and the vapour retarder does its comparatively small job in the background.",
      },
      {
        type: "h2",
        heading: "Assemblies That Prevent Condensation",
        text: "There are several accepted ways to keep the underside of a metal roof above dew point or to keep humid air away from it, and which one applies depends on the building.",
      },
      {
        type: "ul",
        items: [
          "A properly vented attic with an airtight, well-insulated ceiling plane. The attic stays close to outdoor conditions and dry air constantly replaces any moisture that gets in. This covers most houses.",
          "Above-sheathing ventilation: a vented air gap between the deck and the panel created by battens, which lets the panel underside dry and drains any condensation that does form.",
          "A vapour-permeable, condensation-control underlayment — a synthetic membrane with a fleece or matrix layer designed to absorb and release small amounts of condensate rather than letting it drip.",
          "A fully unvented assembly with closed-cell spray foam adhered to the underside of the deck, so no humid air can reach a cold surface because there is no gap and no air path.",
          "Factory-applied anti-condensation backing on the panel itself — a felt or coating bonded to the underside that holds condensate until it can evaporate. Common on agricultural and shop buildings with no ceiling below.",
        ],
      },
      {
        type: "h2",
        heading: "The Unheated Building Case",
        text: "Barns, shops, garages, and open pole buildings behave differently from houses. There is often no insulation, no ceiling plane, and no attic — just panels over purlins with the interior air directly against the metal. When a mild humid air mass moves in over a cold structure, the panel underside drops below the interior dew point and the whole ceiling rains. The controls are a vented air gap over the purlins, anti-condensation backed panel, or a genuine insulated assembly.",
      },
      {
        type: "callout",
        text: "The quick field test: a leak follows the weather, condensation follows the temperature. If water appears during or shortly after rain, and always in the same spot, look for a penetration. If it appears on clear, cold nights and mild mornings, appears in many places at once, and is worse near fasteners and framing, you are looking at condensation.",
      },
      {
        type: "h2",
        heading: "Reading the Evidence",
        text: "A few patterns are worth knowing. Droplets in a regular grid follow the fastener or clip pattern, because those are the coldest points. A dark line of staining along every rafter is a thermal bridging signature. Frost concentrated near a bathroom, an attic hatch, or a chimney chase points at a specific air leak below it. Water appearing after a thaw rather than during rain is winter frost melting.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "Does a metal roof cause condensation?",
            a: "No, but it can be where condensation appears, because a thin metal panel is often the coldest surface in the assembly and it cools below air temperature on clear nights. The condensation is caused by humid air reaching a surface below its dew point. The panel is the surface, not the cause.",
          },
          {
            q: "Will a vapour barrier stop condensation in my attic?",
            a: "It helps with diffusion, which is the smaller of the two transport mechanisms. Most of the moisture arriving in an attic gets there by air leakage through openings in the ceiling. A vapour retarder that is not also sealed as an air barrier leaves the main pathway open.",
          },
          {
            q: "Why does my metal shop roof drip when it has never leaked?",
            a: "Almost certainly interior humidity condensing on the cold panel underside. Vehicles carrying in snow, an unsealed concrete slab, and any combustion or washing inside all add vapour, and with no ceiling and no vent gap there is nothing between that air and the metal. The usual remedies are a vented air space over the purlins, anti-condensation backed panel, or an insulated assembly.",
          },
          {
            q: "Is underlayment enough to prevent condensation under metal?",
            a: "A condensation-control underlayment manages small amounts of moisture and is a useful part of an assembly, but it does not substitute for air sealing, insulation, and ventilation. If humid air is reaching the deck in quantity, no membrane will keep up with it.",
          },
          {
            q: "Should I run a dehumidifier to fix attic frost?",
            a: "Lowering indoor humidity does reduce the moisture available, and setting a whole-house humidifier lower in deep cold helps. But if warm air is being pulled into the attic through the ceiling, the durable fix is sealing that path.",
          },
        ],
      },
    ],
  },
  {
    slug: "vapour-barriers-air-barriers-roof-assembly",
    title: "Vapour Barriers and Air Barriers: They Are Not the Same Thing",
    excerpt:
      "One controls diffusion through materials, the other controls air flowing through holes. They are made of different things, tested differently, and fail differently — and the roof needs both.",
    readTime: "8 min read",
    category: "Metal Roofing",
    metaTitle: "Vapour Barriers vs Air Barriers in a Roof Assembly",
    metaDescription:
      "The difference between vapour control and air control in a roof: permeance, vapour drive, air barrier continuity, and double vapour barrier risk.",
    content: [
      {
        type: "p",
        text: "These two terms get used interchangeably on job sites, and the confusion causes real damage. A vapour barrier and an air barrier do different jobs, obey different physics, and are judged by different criteria. A material can be one, the other, both, or neither. If you only take one thing from this article: the air barrier does most of the work.",
      },
      {
        type: "h2",
        heading: "Two Different Jobs",
        text: "Vapour control deals with diffusion — individual water molecules migrating through solid materials, driven by a difference in vapour pressure between one side and the other. It is slow, steady, and spread evenly over the whole surface. Air control deals with bulk flow — air moving through holes, gaps, and cracks, driven by pressure differences from stack effect, wind, and mechanical systems, carrying its water content along for the ride. Diffusion is a trickle across an entire ceiling; air leakage is a stream through the openings in it.",
      },
      {
        type: "h2",
        heading: "Permeance and Vapour Retarder Classes",
        text: "How much vapour a material lets through by diffusion is its permeance. Materials are grouped into broad classes: essentially impermeable materials such as polyethylene sheet, sheet metal, and glass; semi-impermeable materials such as many foam boards and vapour retarder paints; and semi-permeable to permeable materials such as gypsum board, most housewraps, and many synthetic underlayments. The classes matter because the design question is never simply barrier or no barrier — it is how much vapour should be allowed to pass, and in which direction the assembly needs to be able to dry.",
      },
      {
        type: "h2",
        heading: "Vapour Drive Direction in a Cold Climate",
        text: "Over a Southern Ontario year the net vapour drive is outward. Winter is long and the difference between warm humid indoor air and cold dry outdoor air is large, so vapour pushes from inside toward outside for months. Summer produces a weaker inward drive for shorter periods. That is why the conventional detail here places the vapour retarder toward the warm-in-winter side of the insulation, and why the assembly is generally designed to dry toward the exterior. Putting a low-permeance layer on the cold side of insulation in a heating climate is how assemblies get trapped.",
      },
      {
        type: "h2",
        heading: "Air Barriers: Continuity Is Everything",
        text: "The performance of an air barrier is not proportional to its coverage. A ceiling that is ninety-eight percent airtight is not ninety-eight percent as good as one that is fully sealed, because the leakage concentrates through the remaining openings and the driving pressure does not change. One open chimney chase can move more air than a large expanse of well-detailed ceiling. This is why air barrier work is fundamentally about finding and closing every hole, in a continuous plane, rather than about the material chosen.",
      },
      {
        type: "ul",
        items: [
          "Interior wall top plates: the drywall stops at the wall and the cavity is open to the attic unless the plate is sealed.",
          "Recessed light housings, unless they are rated for insulation contact and sealed at the ceiling.",
          "Attic access hatches and pull-down stairs, which need weatherstripping and an insulated cover.",
          "Plumbing stacks, wiring penetrations, and duct boots where they pass through the ceiling.",
          "Bathroom fan housings, which leak around the body of the unit as well as through the duct.",
          "Chimney and flue chases, which need firestopping with the correct materials, not spray foam against a hot flue.",
          "Bulkheads, dropped ceilings, and cabinet soffits that are framed but left open at the top.",
          "The junction between an addition and the original house, which is often left completely open in the attic.",
        ],
      },
      {
        type: "h2",
        heading: "Polyethylene in Ontario Attics",
        text: "Poly under the drywall has been standard practice in Ontario construction for decades, and it does two things at once when installed carefully: it is an excellent vapour retarder, and when it is lapped, sealed at the perimeter, and taped at penetrations, it also acts as the air barrier. The problem is that on most existing houses it is neither continuous nor sealed. It is stapled up, cut around boxes, torn during drywall, and left open at the top plates. In that condition it still slows diffusion but does almost nothing for air leakage — which is the mechanism that carries most of the moisture. Finding poly in an attic is not evidence that the ceiling is airtight.",
      },
      {
        type: "h2",
        heading: "The Airtight Drywall Approach",
        text: "The alternative that has aged well is to make the drywall itself the air barrier, gasketed or sealed at every edge, with sealed electrical boxes and sealed penetrations, and to handle vapour control with a vapour retarder primer or a smart membrane. It is easier to inspect than hidden poly, easier to repair during renovations, and it allows some inward drying in summer. Either approach works; what does not work is an air barrier that exists in intention only.",
      },
      {
        type: "h2",
        heading: "Do Not Build a Double Vapour Barrier",
        text: "If an assembly has a low-permeance layer on the interior and another on the exterior, any moisture that gets between them — during construction, from a small leak, or from an air leak — has no way out in either direction. This is the classic wet roof, and it is why detailing matters more as assemblies get tighter. Every assembly should have a designed drying direction. Decide which way it dries, then make sure nothing in the stack-up blocks that path.",
      },
      {
        type: "callout",
        text: "A metal roof panel is, by itself, a vapour barrier. That is fine when the deck below it can dry — into a vented attic, into a vented batten space, or through a permeable underlayment. It becomes a problem when the panel is combined with an impermeable layer on the warm side and nothing in between can dry. What sits under the panel is the design decision, not the panel itself.",
      },
      {
        type: "h2",
        heading: "Where This Lands on a Re-Roof",
        text: "During a metal re-roof we are working on the exterior side, so the vapour retarder at the ceiling is usually out of reach. What is in reach is meaningful: the underlayment choice and its permeance, whether a vented batten space is added above the deck, ridge and eave venting, and access to the attic for air sealing at the top plates, hatch, and penetrations while the crew is on site. Those decisions get made before the panels are ordered, because some of them change the eave and ridge geometry.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "Is a vapour barrier required under a metal roof?",
            a: "The panel is not where vapour control belongs. Vapour and air control belong at the warm side of the insulation — the ceiling plane in a vented attic, or the interior face of the insulation in a cathedral assembly. What goes directly under the panel is underlayment, and its permeance is chosen to suit the assembly below it.",
          },
          {
            q: "Can I add poly to my attic ceiling from above?",
            a: "It is not practical or advisable. Laying poly on top of existing insulation puts a vapour barrier on the cold side of the insulation, which is the wrong side in a heating climate and can create a condensing surface. Air sealing the penetrations from above is the useful work that can be done from the attic.",
          },
          {
            q: "Which matters more, air sealing or insulation?",
            a: "They work together, but air sealing is generally the higher-value first step for moisture problems, because it stops the transport mechanism that carries the most water. Insulation added over a leaky ceiling still lets humid air stream through it, and blown insulation is not an air barrier.",
          },
          {
            q: "What permeance should my roof underlayment have?",
            a: "It depends on the assembly. Over a well-vented attic, a wide range works. Over an unvented or cathedral assembly, or where a batten space is used, the permeance of the underlayment becomes part of the drying strategy and should be chosen deliberately with the rest of the stack-up rather than by habit.",
          },
        ],
      },
    ],
  },
  {
    slug: "above-sheathing-ventilation-battens-metal-roof",
    title: "Above-Sheathing Ventilation: Battens and Counter-Battens Under Metal Roofing",
    excerpt:
      "A vented air space between the deck and the panel drains water, dries the deck, breaks the thermal path and reduces condensation. Here is how the detail is built and when it earns its place.",
    readTime: "8 min read",
    category: "Metal Roofing",
    metaTitle: "Above-Sheathing Ventilation and Batten Systems Under Metal",
    metaDescription:
      "How a vented batten cavity under metal roofing drains and dries the deck, how counter-battens are laid out, and when above-sheathing venting pays off.",
    content: [
      {
        type: "p",
        text: "Above-sheathing ventilation, usually shortened to ASV, means deliberately building an air space between the roof deck and the metal panel instead of laying the panel directly on the underlayment. The space is created with battens, it is open at the eave and at the ridge, and air moves through it by the same stack and wind effects that ventilate an attic. It is one of the most useful details available on a metal roof, and it is also one of the most commonly skipped.",
      },
      {
        type: "h2",
        heading: "Four Things the Gap Does",
        text: "The cavity is not there for one reason. It changes the behaviour of the assembly in several ways at once, which is why it shows up in high-performance roof designs.",
      },
      {
        type: "ul",
        items: [
          "It drains. Any water that gets past a seam, a fastener, or a flashing lands on the underlayment and runs down an open channel to the eave instead of sitting in contact with the panel and the deck.",
          "It dries. The underside of the panel and the top of the deck are both exposed to moving air, so incidental moisture — condensation, wind-driven rain, construction moisture in the deck — leaves the assembly instead of accumulating.",
          "It interrupts heat transfer. The air layer plus the reduced contact area between panel and deck slows conducted heat in both directions, and in summer it lets solar heat absorbed by the panel be carried away by the moving air rather than driven down into the deck.",
          "It reduces condensation risk on the panel underside, because the space is ventilated to outdoor air and does not accumulate the humidity that a sealed cavity would.",
          "It gives a place for the deck to dry after a re-roof over an assembly that may be carrying more moisture than expected.",
        ],
      },
      {
        type: "h2",
        heading: "Battens, Counter-Battens, and Drainage",
        text: "The layout has to respect the fact that water runs downhill. Horizontal battens running across the slope — the traditional purlin arrangement — will dam water on the underlayment unless they are notched, spaced with drainage gaps, or set on vertical strapping. That is what counter-battens are for: vertical strips run up the slope from eave to ridge first, creating a continuous drainage and ventilation channel, and then horizontal battens are fastened over top of them where the panel profile requires horizontal support. Vertical-only battens work directly with standing seam and other panels that attach continuously along the run.",
      },
      {
        type: "h3",
        heading: "Purlins Over Open Framing",
        text: "On agricultural and shop buildings there is often no deck at all — exposed-fastener panel is screwed directly to horizontal purlins over the trusses. That arrangement is inherently ventilated on the underside, and the moisture question shifts entirely to what is or is not below it. If the building is later insulated or a ceiling is added, the assembly changes character completely and the condensation strategy has to be revisited.",
      },
      {
        type: "h2",
        heading: "Inlet and Outlet: The Cavity Has to Breathe",
        text: "A batten cavity with no opening at the eave and no opening at the ridge is just a sealed air gap. The eave detail needs a screened inlet — typically a vented closure or a perforated strip at the bottom of the cavity that keeps insects and wind-driven snow out while letting air in. The ridge needs an outlet through the ridge assembly. Where the cavity is interrupted by a hip, a valley, a dormer, or a skylight, the ventilation path is interrupted with it, and each of those breaks needs its own inlet or outlet or the section above it stops working.",
      },
      {
        type: "h2",
        heading: "Where ASV Earns Its Place",
        text: "The gap costs material, labour, and roof height, so it is worth being specific about when it pays back. Cathedral ceilings and unvented assemblies are the strongest case, because the deck has no attic below it to dry into and the air space provides the only exterior drying path. Recover installations over existing shingles are another, because battens create a plane over an uneven surface and keep the panel from contacting old granules. Roofs with continuous exterior insulation above the deck benefit, because the panel would otherwise sit on foam with no drainage path. Complex low-slope-adjacent sections benefit from the drainage. On a simple, well-vented attic with generous soffit and ridge venting, a direct-to-deck installation with a good underlayment is often entirely appropriate.",
      },
      {
        type: "h2",
        heading: "What the Battens Change About the Build",
        text: "This is a real design decision and it ripples outward. The roof plane sits higher, so fascia, drip edge, wall flashings, chimney counterflashing, and the transitions at dormers all have to be detailed at the new height. Eavestrough position relative to the panel edge changes. Panel fastening changes: screws now go through battens into the deck or framing, so batten thickness, spacing and fastener length have to work together. Snow retention attachment is affected as well, since clamps hold the panel and the panel is now held by the batten system — the load path has to be continuous all the way into structure.",
      },
      {
        type: "callout",
        text: "The load path is the part most often overlooked. A ventilated batten assembly puts an extra layer between the panel and the structure. Wind uplift and, on a snow-retention roof, the retained snow load both have to transfer through that layer. Batten material, fastener type, and fastener spacing are structural choices, not carpentry preferences.",
      },
      {
        type: "h2",
        heading: "When ASV Is Not the Answer",
        text: "A batten cavity does not fix a wet attic. If humid house air is being pushed into the assembly through a leaky ceiling, ventilating above the deck helps at the margins while the actual problem continues underneath. It also does not substitute for eave and valley waterproofing membranes. And on a very simple, well-ventilated roof with straightforward geometry, the additional layers add complexity at every edge without a proportional benefit. The decision should follow the assembly below, not fashion.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "Do metal roofs need battens?",
            a: "Not universally. Many metal roofs are installed directly over a solid deck and underlayment and perform well, particularly over a properly vented attic. Battens become important where the assembly below cannot dry — cathedral ceilings, unvented roofs, exterior insulation over the deck — and where a recover over existing roofing needs a clean, drained plane.",
          },
          {
            q: "Can metal be installed over existing shingles on battens?",
            a: "It is done, and battens make it more workable by creating a level plane and a drainage space. The caveats are structural load, whether the existing deck can be inspected at all, what condition it is in, and what your local building department permits for the number of roofing layers. A tear-off gives you the deck inspection and the chance to correct ventilation, which is usually worth more than the labour saved.",
          },
          {
            q: "Does a vented batten space make a metal roof cooler?",
            a: "It changes how heat moves through the assembly: solar heat absorbed by the panel is partly carried away by air moving through the cavity instead of being conducted into the deck. How much difference that makes at the ceiling depends on the insulation and air sealing below, which are the dominant factors.",
          },
          {
            q: "How thick does the batten cavity need to be?",
            a: "It depends on the panel system, the slope length, the fastening requirements and the manufacturer's instructions, so it is specified per project rather than by a universal number. What is consistent is that the cavity has to be continuous from a screened inlet at the eave to an outlet at the ridge, with the drainage direction unobstructed.",
          },
        ],
      },
    ],
  },
  {
    slug: "insulation-metal-roofing-attic-vs-cathedral",
    title: "Insulation and Metal Roofing: Vented Attics vs Cathedral Ceilings",
    excerpt:
      "A vented attic separates insulation from the roof. A cathedral ceiling does not, and every problem gets harder. What changes between the two, and why the eave is where both of them fail.",
    readTime: "8 min read",
    category: "Metal Roofing",
    metaTitle: "Insulation for Metal Roofs: Attic vs Cathedral Assemblies",
    metaDescription:
      "How insulation differs between vented attics and cathedral ceilings under a metal roof, why the eave is the weak point, and what drives ice damming.",
    content: [
      {
        type: "p",
        text: "The metal panel is the same in both cases. What is different is everything underneath it. A vented attic is a forgiving assembly with a large buffer space between the insulation and the roof; a cathedral ceiling has no buffer at all, and every detail has to be right the first time. Knowing which one you have determines what can be improved during a re-roof and what has to be done from inside.",
      },
      {
        type: "h2",
        heading: "The Vented Attic Is the Easy Assembly",
        text: "In a vented attic, the insulation sits on the ceiling and the roof deck is essentially outdoors. The two are decoupled: the deck runs close to outdoor temperature, the ventilated space between them removes incidental moisture, and there is room to add insulation depth without touching the roof. Loose fill can be topped up without touching the roof. Air sealing can be done from above at the penetrations. If something goes wrong, you can crawl in and look at it. There is a good reason this assembly has dominated Canadian residential construction.",
      },
      {
        type: "h2",
        heading: "The Eave Is Where the Vented Attic Fails",
        text: "The problem in a vented attic is always at the perimeter. Above the exterior wall, the roof framing is at its shallowest, the top plate takes up part of the space, and the vent path has to squeeze through the same gap the insulation wants to fill. Insulation depth tapers just as the ceiling gets closest to the outdoors. The result is a cold band running around the perimeter of every ceiling, and warmer ceiling everywhere inboard of it. That temperature pattern across the ceiling is exactly the pattern that produces snow melting on the upper roof and refreezing over the cold eave. Raised heel or energy trusses solve it on a new build by giving full insulation depth above the wall. On an existing house, the achievable improvements are a well-installed baffle to keep the vent path open and protect against wind washing, and careful air sealing at the top plates.",
      },
      {
        type: "h2",
        heading: "Cathedral Ceilings: No Buffer, No Margin",
        text: "In a cathedral ceiling the insulation is in the rafter bays, the finished ceiling follows the roof line, and there is no attic to store excess moisture, average out temperature differences, or provide access. Cavity depth is limited by the rafter depth. Every recessed light is a hole through the insulation and the air barrier at once. Every skylight, dormer, hip, and valley chops the bays into segments. The assembly is more sensitive to every mistake and much harder to inspect. Cathedral ceilings can be built to perform very well; they just do not tolerate improvisation.",
      },
      {
        type: "h3",
        heading: "Vented Cathedral Assemblies",
        text: "The vented version keeps a continuous air channel in every rafter bay from a soffit intake at the bottom to a ridge outlet at the top, with insulation below the channel and an airtight, vapour-controlled ceiling below that. The word doing the work is continuous. A bay that is blocked partway up by insulation that expanded into the channel, by a piece of blocking, or by a valley rafter is not vented at all — it is a sealed cavity with a cold top surface, which is the worst of both approaches. Hip roofs, valleys, and dormers make continuity genuinely difficult, and every skylight interrupts two bays.",
      },
      {
        type: "h3",
        heading: "Unvented Cathedral Assemblies",
        text: "The unvented version puts the insulation in direct, permanent contact with the underside of the deck with no air space, most commonly using closed-cell spray foam, or it puts a substantial share of the insulation above the deck as rigid board. Both approaches work by keeping the interior face of the first condensing surface above the dew point of the air that can reach it. The design has to be done deliberately, and the airtightness has to be genuine. Our separate article on unvented roofs covers the ratio question and the drying implications.",
      },
      {
        type: "ul",
        items: [
          "Vented attic: insulation at the ceiling plane, deck stays cold, generous access, easiest to improve, weak point is the eave.",
          "Vented cathedral: insulation in the bay under a continuous channel, weak point is any interruption of that channel.",
          "Unvented cathedral with foam at the deck: no channel, relies on continuous adhered insulation and airtightness, weak point is discontinuity and any interior moisture that gets past it.",
          "Hybrid with exterior rigid insulation: keeps the deck warm from above, weak point is fastening, detailing at edges, and getting the ratio right for the climate.",
          "In all four: recessed lights, attic hatches, chases, and bath fans are the openings that decide real-world performance.",
        ],
      },
      {
        type: "h2",
        heading: "Pick a Plane and Stay on It",
        text: "The most common failure in renovated houses is insulating at two different planes and connecting them badly. A vented attic over the main house that transitions to a foamed cathedral over an addition needs the two air barriers to meet and the two insulation layers to be continuous around the corner. Where they do not meet — and they very often do not, because the junction is hidden inside a knee wall or a bulkhead — there is a direct thermal and air path from the heated space to the outdoors. Knee walls in half-storey houses are the textbook example: insulated on the vertical face, wide open at the floor joists behind them.",
      },
      {
        type: "callout",
        text: "Ice damming is not fundamentally a roofing defect. It is a heat-loss pattern: warm ceiling inboard, cold eave outboard, snow in between. Insulation depth, air sealing, and ventilation determine whether that pattern exists. A new roof of any material installed over an unchanged heat-loss pattern will produce the same ice, with better waterproofing underneath it.",
      },
      {
        type: "h2",
        heading: "Why the Re-Roof Is the Moment",
        text: "Metal roofing is a long-horizon assembly, and the practical point is access. During a tear-off, the deck is open, the eaves are apart, the ridge is open, and there is a crew on the roof. Adding exterior insulation, building a vented batten cavity, rebuilding an eave detail to gain vent path, correcting a cathedral bay that is blocked — all of it is straightforward while the roof is off and disruptive afterward. Insulation and ventilation should be settled at quoting, not discovered at tear-off.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "Can I add insulation to my attic before a metal roof goes on?",
            a: "Yes, and the sequencing is worth thinking about. Air sealing the ceiling penetrations should come before adding insulation, since the sealing work happens at the ceiling plane and gets buried once insulation is added. Baffles should go in before loose fill is topped up so the vent path is protected.",
          },
          {
            q: "Does metal roofing insulate the house?",
            a: "The panel itself has negligible insulating value — it is thin metal. Thermal performance comes from the insulation, the air barrier, and the ventilation strategy below it. What a metal roof does provide is the opportunity to build a better assembly under it, including exterior insulation or a vented cavity.",
          },
          {
            q: "Can a cathedral ceiling be vented properly during a re-roof?",
            a: "Sometimes, and from above is often the only realistic way to do it. With the deck off, bays can be inspected, blockages cleared, and continuous channels installed from soffit to ridge. Where the geometry makes continuity impossible, converting to an unvented assembly may be the more honest route, and that decision should be made with the whole assembly in view.",
          },
          {
            q: "How much insulation should an Ontario attic have?",
            a: "The minimum that applies to your project comes from the building code as enforced by your municipality, and it varies with the type of work being done. Beyond the minimum, the practical guidance is depth that is uniform across the whole ceiling and maintained as close to the eave as the framing allows, over a ceiling plane that is genuinely air sealed.",
          },
        ],
      },
    ],
  },
  {
    slug: "thermal-bridging-fasteners-framing-metal-roof",
    title: "Thermal Bridging at Fasteners and Framing in a Metal Roof Assembly",
    excerpt:
      "Insulation only works where it is continuous. Rafters, clips and screws are conductive paths straight through it — and in winter those cold points are where condensation shows up first.",
    readTime: "8 min read",
    category: "Metal Roofing",
    metaTitle: "Thermal Bridging at Fasteners and Framing in Metal Roofs",
    metaDescription:
      "How framing, clips and screws conduct heat around roof insulation, why cold points condense first, and the detailing that reduces thermal bridging.",
    content: [
      {
        type: "p",
        text: "Insulation is rated as though it covers a surface uniformly. It never does. Rafters and trusses run through it at regular intervals, fasteners pass through it wherever something is attached, and each of those is a material with far higher conductivity than the insulation around it. Heat takes the easy route, the same way water does. The consequences show up as cold spots inside, snow-melt patterns outside, and condensation exactly where you would predict.",
      },
      {
        type: "h2",
        heading: "What a Thermal Bridge Is",
        text: "A thermal bridge is a conductive shortcut around the insulation layer. Wood conducts heat several times faster than the insulation between the framing. Steel conducts heat hundreds of times faster than wood. So a roof assembly that is nominally insulated to a given value performs at less than that value overall, because a percentage of its area is not insulation at all — it is framing, and it is passing heat through at a much higher rate.",
      },
      {
        type: "h2",
        heading: "Framing Fraction: Not a Rounding Error",
        text: "The proportion of a roof or wall area occupied by framing rather than insulation is called the framing fraction, and on typical residential construction it is a meaningful share of the total, higher again around openings, at corners, at ridges and hips, and anywhere doubled or built-up members occur. In a vented attic this matters relatively little, because the insulation runs over the top of the ceiling joists and the framing is buried within it. In a cathedral ceiling, where the insulation is between rafters, the framing runs the full depth of the assembly from inside to outside, and the effect is much larger.",
      },
      {
        type: "h2",
        heading: "Fasteners Through Insulation",
        text: "The other kind of bridge is the point bridge — a screw or clip crossing the insulation layer. A single screw carries a small amount of heat. The reason it matters is density: exterior insulation over a deck is held with fasteners at regular spacing across the entire roof, and a panel is held with clips at regular spacing along every seam. Multiply a small effect by a large count and it becomes a measurable reduction in the effective performance of the insulation layer, plus a grid of localized cold points on the interior side of each fastener.",
      },
      {
        type: "h2",
        heading: "Where It Shows Up",
        text: "Thermal bridging is one of the few building science phenomena you can see from the driveway.",
      },
      {
        type: "ul",
        items: [
          "Snow melt striping: on a light snowfall, parallel bands of melted or thinner snow following the rafter or truss spacing, because heat is escaping faster along the framing.",
          "Ghosting on interior ceilings: faint darker lines following the framing, where cooler surfaces attract dust and condense a little more moisture over years.",
          "Frost patterns on the underside of the sheathing that follow nail lines and clip positions.",
          "Droplets in a regular grid on the underside of a deck or panel, following the fastener pattern rather than any leak path.",
          "Localized mould or staining on a ceiling along a beam, ridge or hip where several members converge.",
          "Cold interior surface temperatures measurable with an infrared thermometer along framing lines during a cold snap.",
        ],
      },
      {
        type: "h2",
        heading: "Why Cold Points Condense First",
        text: "The mechanism is the same as any other condensation. Indoor air has a dew point. Any surface it touches that is below that dew point collects water. A thermal bridge creates surfaces that are colder than their surroundings, so they cross the dew point threshold before the rest of the assembly does. That is why the first evidence of a marginal assembly is always at the bridges: the fastener heads, the framing lines, the rim joist, the corner. If those points stay above dew point, the field between them almost certainly does too.",
      },
      {
        type: "h2",
        heading: "What Actually Reduces It",
        text: "Every mitigation is a version of the same idea: put an uninterrupted layer somewhere in the assembly, and reduce the number and conductivity of the things crossing it.",
      },
      {
        type: "ul",
        items: [
          "Continuous exterior insulation above the deck. This is the most effective single move, because the framing no longer reaches the outdoors — it is covered by an unbroken layer.",
          "Thermal spacers or non-conductive blocks under clips and at attachment points, which lengthen the conductive path or interrupt it.",
          "Concealed-fastener panel systems, which use clips at intervals rather than screws through the panel face across the whole field, reducing penetration count through the weather plane.",
          "A vented batten cavity, which does not eliminate the bridge at the screw but does reduce direct panel-to-deck contact across the whole area.",
          "Correct fastener length and type, so screws do not extend further into the assembly than they need to and do not compress the insulation excessively at each fixing.",
          "Insulation depth that is genuinely continuous over the framing in an attic, rather than stopping level with the top of the joists.",
        ],
      },
      {
        type: "h2",
        heading: "Exposed-Fastener Panels and the Movement Problem",
        text: "There is a related issue that is not strictly thermal bridging but shares a cause. Metal expands and contracts with temperature, and a panel run from ridge to eave moves measurably over a Southern Ontario year, between a hot summer surface and a deep-winter one. Exposed-fastener panels are pinned through the face at many points, so that movement works against every screw, gradually enlarging the hole and degrading the washer. Concealed-fastener standing seam systems address this by using clips that allow the panel to move along its length while remaining attached. The thermal story and the movement story both push in the same direction: fewer penetrations through the weather plane, and attachment methods that respect what metal does with temperature.",
      },
      {
        type: "callout",
        text: "If you want one diagnostic that tells you a great deal about a roof assembly, look at it after a light overnight snowfall on a cold morning. Uniform snow cover means heat loss is even and modest. Stripes, patches, and clear areas over parts of the roof are a map of where heat is escaping, and they will correspond closely to the framing, the bridges, and the air leaks below.",
      },
      {
        type: "h2",
        heading: "What We Detail in Practice",
        text: "On a straightforward vented attic, thermal bridging at the roof is a secondary concern and the effort goes into insulation depth, the eave, and air sealing. On cathedral ceilings, unvented assemblies, and any project with exterior insulation above the deck, it becomes a primary design input: fastener schedule and length, thermal spacers where the system provides them, clip spacing coordinated with the insulation thickness, and continuity of the exterior layer around hips, valleys and edges. Those decisions have to be made before material is ordered, because they change fastener lengths and edge dimensions throughout the roof.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "Do metal roof screws cause condensation?",
            a: "They can create localized cold points where condensation appears first, particularly where fasteners cross an insulation layer in a cathedral or unvented assembly. In a vented attic with insulation at the ceiling plane, panel fasteners are outside the insulated envelope entirely and are not a condensation concern in the same way.",
          },
          {
            q: "Is standing seam better than exposed-fastener panel for thermal performance?",
            a: "The panels themselves are similar; the difference is in the attachment. Concealed clip systems reduce the number of penetrations through the weather plane and allow thermal movement, which matters for long-term watertightness. Actual thermal performance is still determined by the insulation and air barrier below.",
          },
          {
            q: "Why does snow melt in stripes on my roof?",
            a: "Those stripes usually follow the framing, where heat escapes faster than through the insulated bays between. Broad melted patches instead of stripes typically indicate air leakage from the house below rather than conduction through framing. Both are heat-loss signatures worth investigating before winter.",
          },
          {
            q: "Does exterior rigid insulation over the deck work under a metal roof?",
            a: "Yes, and it is the most effective way to deal with framing bridges, since the framing is covered by a continuous layer. It changes the assembly substantially — fastener lengths, edge and eave detailing, the drying strategy, and often the need for a vented batten cavity above the foam — so it has to be designed as a whole rather than added as an extra layer.",
          },
        ],
      },
    ],
  },
  {
    slug: "unvented-hot-roof-assemblies-metal-roofing",
    title: "Unvented (Hot Roof) Assemblies Under Metal Roofing: When They Work",
    excerpt:
      "An unvented roof brings the deck inside the thermal envelope. It is a legitimate assembly with real advantages — and it has no tolerance for gaps, guesswork, or a leaky ceiling.",
    readTime: "9 min read",
    category: "Metal Roofing",
    metaTitle: "Unvented Hot Roof Assemblies Under Metal Roofing",
    metaDescription:
      "How unvented roof assemblies work under metal roofing: keeping the deck above dew point, insulation ratios, airtightness and drying paths in a cold climate.",
    content: [
      {
        type: "p",
        text: "An unvented roof — the trade calls it a hot roof — removes the vented air space entirely and brings the roof deck inside the insulated envelope. There is no soffit intake, no ridge outlet, and no attic. Done correctly, it is a sound assembly that solves problems a vented roof cannot. Done casually, it is one of the reliable ways to rot a roof deck from the inside, and the damage is hidden until it is substantial.",
      },
      {
        type: "h2",
        heading: "What Unvented Actually Means",
        text: "In a vented roof, the deck sits outside the insulation, stays close to outdoor temperature, and has a stream of outdoor air carrying away any moisture that reaches it. In an unvented roof, the insulation is in direct, permanent contact with the underside of the deck, or above it, or both. The deck is now part of the conditioned side of the assembly, with no ventilation to remove moisture — so the design has to prevent moisture from arriving rather than rely on removing it.",
      },
      {
        type: "h2",
        heading: "Why Anyone Builds One",
        text: "The reasons are practical. Complex geometry — multiple hips, valleys, dormers, skylights — makes continuous vent channels from soffit to ridge nearly impossible in every bay, and a partly vented roof is worse than a properly unvented one. Cathedral ceilings with shallow rafters lack depth for both a vent channel and enough insulation. Houses with no overhang have nowhere to put intake. Ductwork in the roof space is far better off inside the thermal envelope.",
      },
      {
        type: "h2",
        heading: "The Physics You Have to Respect",
        text: "In an unvented assembly there is a first condensing surface — the coldest surface that indoor air can reach. In an all-cavity-insulation roof with no ventilation, that surface is the underside of the sheathing, and in a Southern Ontario January it will be well below the dew point of indoor air. Any humid indoor air that reaches it condenses, with no ventilation to remove the result and no drying path outward through a metal panel. The entire design problem is: keep indoor air away from that surface, or keep that surface warm enough that condensation cannot occur on it. Both accepted approaches do one or the other.",
      },
      {
        type: "h2",
        heading: "Approach One: Closed-Cell Foam at the Deck",
        text: "Spray-applied closed-cell polyurethane bonded to the underside of the sheathing does several things at once. It is an insulation, it is an air barrier, and at sufficient thickness it is a vapour retarder. Because it is adhered with no gap, there is no air space for humid air to occupy against the cold surface — the condensing plane is moved to the interior face of the foam, which is warm. The requirements are that the foam is continuous with no gaps — at rafter edges, the ridge, the eave, penetrations and the wall junction — and thick enough for the climate. Gaps are the failure mode, because a gap is a channel where humid air reaches cold sheathing.",
      },
      {
        type: "h2",
        heading: "Approach Two: Exterior Rigid Plus Cavity Insulation",
        text: "The hybrid puts a layer of impermeable or semi-impermeable rigid insulation above the deck, with air-permeable insulation such as batts or blown fibre filling the rafter bays below. The exterior layer keeps the sheathing warm from above so that its temperature stays above the dew point of the air in the cavity below. This only works if enough of the total insulation is on the exterior side — that is the whole basis of the approach.",
      },
      {
        type: "ul",
        items: [
          "The colder the climate, the higher the share of total insulation that must be above the deck. The ratio is climate-dependent and is set out in code and in published guidance; it is not a number to estimate.",
          "Confirm the required ratio for your location with your municipal building department or the designer of record before ordering material.",
          "The cavity insulation below must be in full contact with the underside of the deck — no air gap, because a gap lets cavity air circulate against the sheathing.",
          "The interior side needs an air barrier. A hybrid assembly with a leaky ceiling defeats the calculation, because the moisture load reaching the sheathing is no longer what the ratio assumed.",
          "The interior side should generally not have a low-permeance vapour barrier in this assembly, because inward drying is the drying path available. Check what the specific design calls for.",
        ],
      },
      {
        type: "h2",
        heading: "Airtightness Is Not Optional",
        text: "A vented roof tolerates a mediocre ceiling air barrier because ventilation removes the moisture that leaks in. An unvented roof has no such safety valve. Every unsealed pot light, every open top plate, every bath fan housing pushes humid air directly into an assembly with no exit. This is why an unvented roof should not be treated as a shortcut on a house with a leaky ceiling — it is a higher-performance assembly that demands higher-quality execution below it, not a way to avoid dealing with the ceiling plane.",
      },
      {
        type: "h2",
        heading: "The Drying Question",
        text: "Every assembly should be able to dry in at least one direction, because sooner or later moisture gets in — a flashing detail, a leak, construction moisture, an ice dam. An unvented roof with a metal panel above and closed-cell foam below dries in essentially neither. That is tolerable only when the assembly is genuinely airtight, which is why detailing standards are higher. A vented batten cavity above the deck restores an exterior drying path.",
      },
      {
        type: "callout",
        text: "Do not convert a vented attic to an unvented one by blocking the soffit vents and adding foam partway up the roof slope. A partly foamed, partly vented roof creates cold sheathing above the foam line with attic air still circulating against it, and the transition point becomes a reliable condensing surface. If an assembly is going to be unvented, it has to be unvented from eave to ridge.",
      },
      {
        type: "h2",
        heading: "Ontario Realities",
        text: "Three practical points for our climate. An unvented roof is warmer at the deck than a vented one, which can increase snow melt — so ice damming control depends even more on carrying insulation continuously out over the exterior wall and the overhang. Snow retention attachment still has to reach structure, and where exterior rigid insulation is present the fastener path through it has to be designed. And you lose the ability to inspect the deck from an attic, so eave and valley waterproofing and flashing quality carry more weight.",
      },
      {
        type: "h2",
        heading: "When We Suggest Not Doing It",
        text: "Where a vented assembly is achievable with reasonable effort — a simple gable roof with adequate overhang, decent heel height, and attic access — venting is the more forgiving and more repairable choice. Unvented is the right answer when geometry, ceiling type, or mechanical layout makes venting impractical. It is not a way to skip the work of opening blocked soffits.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "Is a hot roof allowed in Ontario?",
            a: "Unvented roof assemblies are a recognized construction approach, and the requirements that apply to a specific project — including insulation ratios and vapour control — are enforced by your municipal building department. Confirm the details with them or with the designer of record rather than assuming a rule of thumb applies.",
          },
          {
            q: "Can I spray foam my existing attic roof deck?",
            a: "It is done frequently, and it converts the attic into conditioned space. The important conditions are that the foam is continuous from eave to ridge with no gaps, that the existing soffit venting is closed rather than left half open, that the deck is dry and sound before foam is applied, and that any combustion appliance or ductwork in that space is assessed for its new conditions.",
          },
          {
            q: "Does an unvented roof void a metal roof installation?",
            a: "Panel systems are installed over a range of assemblies, and manufacturers publish requirements for underlayment, deck type, ventilation and clearances that vary by product. The assembly should be discussed before ordering so the specified details match what the manufacturer requires for that system.",
          },
          {
            q: "Are ice dams worse on a hot roof?",
            a: "They can be if the insulation is not continuous out over the exterior wall and the overhang, because the deck over the heated space runs warmer than a vented deck would. Where the exterior insulation or foam layer continues past the wall line and the overhang is detailed correctly, the melting pattern is more uniform. The eave detail is what decides it.",
          },
        ],
      },
    ],
  },
  {
    slug: "snow-guards-metal-roofs-why-needed",
    title: "Snow Guards on Metal Roofs: Why a Smooth Roof Needs Snow Retention",
    excerpt:
      "Metal sheds snow, which is usually an advantage and occasionally a hazard. Here is why a whole slab releases at once, what it weighs, and what snow retention actually does about it.",
    readTime: "8 min read",
    category: "Metal Roofing",
    metaTitle: "Snow Guards on Metal Roofs: Why Snow Retention Is Needed",
    metaDescription:
      "Why snow releases from metal roofs as a slab, what makes it let go, how retention systems attach, and where snow guards are effectively mandatory.",
    content: [
      {
        type: "p",
        text: "One of the genuine advantages of a metal roof in Ontario is that it does not hold snow the way a granulated shingle roof does. That is also the reason snow retention exists. Shedding is a feature until the day a winter's worth of accumulation releases at once over a doorway, a walkway, or a gas meter. Snow retention is the engineering answer, and it is a design decision made at quoting, not an accessory added later.",
      },
      {
        type: "h2",
        heading: "Why Metal Sheds and Shingles Do Not",
        text: "An asphalt shingle roof is a rough surface of mineral granules with a stepped profile at every course. Snow sitting on it is mechanically keyed into thousands of small irregularities, and the friction between the snowpack and the surface is high. A coated metal panel is smooth and continuous from ridge to eave, with far lower surface friction and nothing for the snowpack to grip. Standing seam ribs run up the slope, parallel to the direction the snow wants to travel, so they provide no resistance to sliding at all.",
      },
      {
        type: "h2",
        heading: "The Release Mechanism",
        text: "Snow does not slide off a metal roof because the top of it melts. It slides because the bottom of it does. Heat reaches the panel from two directions: solar gain on the surface, which a dark panel absorbs efficiently even on a cold sunny day, and heat escaping upward through the roof assembly from the building below. Either one warms the panel enough to create a thin film of meltwater at the interface between metal and snowpack. That film is effectively a lubricant. The friction that had been holding a heavy, consolidated slab in place drops away, and the slab — which has often frozen together into a single coherent mass — releases as one piece and accelerates down a low-friction slope.",
      },
      {
        type: "h2",
        heading: "What Comes Off Is Not Fluffy Snow",
        text: "This is the part that gets underestimated. After a few freeze-thaw cycles, which Southern Ontario delivers reliably, a snowpack consolidates and can carry a hard ice layer at its base or a crust on top. Rain-on-snow events add water weight. What releases is a dense slab, sometimes with ice in it, travelling down a slope and arriving with the accumulated energy of its mass and the height it fell from. It does not drift down over the eave. It goes over the edge in a body and lands in one place.",
      },
      {
        type: "ul",
        items: [
          "People: entrances, side doors, walkways, patios, and the path from the driveway to the front door.",
          "Vehicles parked along the drip line, and anything on a trailer stored beside the house.",
          "Gas meters, regulators, and sidewall vent terminals for high-efficiency furnaces and water heaters.",
          "Eavestroughs and downspouts, which a slide can strip off the fascia in one event.",
          "Air conditioning condensers, heat pumps, and generator enclosures.",
          "Decks, railings, hot tubs, awnings, and permanent outdoor furniture.",
          "Shrubs, ornamental trees, garden beds, and fencing along the eave line.",
          "Lower roofs — porch roofs, additions, garages, bay windows — which receive the load of the upper roof all at once.",
        ],
      },
      {
        type: "h2",
        heading: "What Snow Retention Actually Does",
        text: "A snow retention system holds the snowpack in place on the roof so it melts and sublimates gradually rather than releasing as a slab. It does not remove snow, and it does not prevent snow from accumulating. It changes the failure mode from a single sudden release to a controlled, slow discharge of meltwater. That distinction matters for the next point.",
      },
      {
        type: "h2",
        heading: "Retention Means the Structure Holds the Load Longer",
        text: "If snow is retained, it stays on the roof. A roof that used to unload itself after every sunny day now carries accumulation through the season. That is normally fine, because roofs are designed to carry a snow load, but it is a genuine change in behaviour and it is a reason snow retention should not be added thoughtlessly to a structure of unknown capacity — particularly on older buildings, additions, porch roofs, and anything that has been modified. Where there is any doubt about the structure, that question goes to a structural engineer or the local building department before retention is specified.",
      },
      {
        type: "h2",
        heading: "How Retention Attaches to the Panel",
        text: "Attachment method is the most important technical distinction between systems, because everything the snow does has to transfer through it.",
      },
      {
        type: "ul",
        items: [
          "Seam clamps on standing seam: non-penetrating clamps grip the vertical seam and are tightened with set screws. Nothing penetrates the weather plane. This is the preferred approach on concealed-fastener systems, and clamp design has to match the specific seam profile.",
          "Structural attachment through the panel: brackets fastened through the panel into framing or blocking below, sealed with gaskets and sealant. Used on exposed-fastener panels and some retrofit situations.",
          "Adhesive-mounted pads: bonded to the panel surface with a structural adhesive, used mainly on panel types where clamping is not possible. Surface preparation, panel finish compatibility and temperature at installation all matter, and holding capacity depends on the bond.",
          "In every case the load path continues past the attachment: seam clamp to panel, panel to clip, clip to deck, deck to framing. A clamp rated for a high load does nothing if the panel attachment below it is the weak link.",
        ],
      },
      {
        type: "callout",
        text: "Snow retention is not decoration and it is not a universal add-on. It is specified where there is something below the eave worth protecting, laid out according to the manufacturer's engineering for the roof slope, panel type, slope length, and the ground snow load for that location. A row of guards placed by eye is a row of guards that can tear off with the slab it was supposed to hold.",
      },
      {
        type: "h2",
        heading: "Where Retention Is Effectively Mandatory",
        text: "There are situations where we would treat retention as part of the roof rather than an option: above any entrance or regularly used walkway, above gas meters and mechanical equipment, above a lower roof that would receive the upper roof's discharge, along the eave where the roof overhangs a neighbouring property or a public sidewalk, above driveways and parking areas, and on any roof where solar panels or rooftop equipment create their own slide and drift patterns. The rest is judgement about what is below the eave.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "Do all metal roofs need snow guards?",
            a: "No. A metal roof discharging onto an open lawn away from walkways, equipment and lower roofs may not need retention at all. The question is what is underneath the eave and whether anything there — people, mechanical equipment, eavestrough, landscaping, or a lower roof — would be harmed by a slab of snow arriving at once.",
          },
          {
            q: "Will snow guards damage my metal roof?",
            a: "A correctly specified clamp-on system on standing seam attaches without penetrating the panel and transfers load through the seam. Problems come from the wrong clamp for the seam profile, insufficient attachment count for the actual load, or systems fastened through the panel without proper sealing. The specification and layout are what determine the outcome.",
          },
          {
            q: "Can snow guards be added to an existing metal roof?",
            a: "Often yes, especially on standing seam where clamps attach to the seam without penetrating. What has to be confirmed first is the seam profile, the panel attachment method and spacing beneath it, and the structural capacity to hold retained snow. The layout still has to be engineered for that roof rather than copied from another.",
          },
          {
            q: "Do snow guards cause ice dams?",
            a: "They keep snow on the roof, and where there is significant heat loss through the roof assembly, retained snow near the eave can contribute to ice formation. The underlying driver is still heat loss. Retention is a reason to make sure insulation, air sealing and ventilation are in order, not a substitute for them.",
          },
        ],
      },
    ],
  },
  {
    slug: "snow-retention-layout-pad-vs-bar-systems",
    title: "Snow Retention Layout: Pad-Style vs Bar-Style, and Why Layout Is Engineered",
    excerpt:
      "Two families of snow retention, several variables, and one calculation. Why a single row at the eave is usually wrong, and why guessing at layout fails quietly until it fails all at once.",
    readTime: "9 min read",
    category: "Metal Roofing",
    metaTitle: "Snow Retention Layout: Pad-Style vs Bar-Style Systems",
    metaDescription:
      "Pad-style versus bar-style snow retention on metal roofs, the variables that drive layout, and why a single row at the eave is often not enough.",
    content: [
      {
        type: "p",
        text: "Once you have decided a roof needs snow retention, the next two questions are what type and where. Neither is a matter of taste. Snow retention is a load-holding system, the load is calculable, and the manufacturers of these systems publish tested holding values and produce project-specific layouts for exactly that reason. The most common mistake in the field is treating layout as a matter of spacing things out evenly and putting a row near the bottom.",
      },
      {
        type: "h2",
        heading: "Two Families of System",
        text: "Snow retention products divide into individual guards distributed across the roof plane, and continuous rails that run horizontally across the slope. They hold snow by different mechanisms, and one is not simply an upgraded version of the other.",
      },
      {
        type: "h3",
        heading: "Pad-Style and Individual Guards",
        text: "These are discrete devices — pads, cleats, or small fence sections — attached at intervals in a staggered pattern. Each interrupts a portion of the snowpack, and collectively they hold the slab through friction and mechanical interference. Because each unit holds a limited load, the pattern typically involves multiple staggered rows. They suit roofs where a continuous line would be visually intrusive and panel types where a rail is awkward to run. Their weakness is that they rely on the snowpack having enough internal cohesion to bridge between units; wet or granular snow can move between widely spaced pads.",
      },
      {
        type: "h3",
        heading: "Bar-Style and Fence Systems",
        text: "These use brackets clamped to the seams at regular intervals with one or more horizontal rails — round tube, rectangular bar, or pipe — running through them across the roof. The rail provides a continuous barrier, so the snowpack is held along its entire length rather than at points. They are the stronger and more predictable option for heavy accumulation, they handle a wide range of snow conditions, and they are what most engineered layouts specify on long slopes and steeper roofs. A second rail is added at greater snow depths so snow cannot roll or creep over a single low bar.",
      },
      {
        type: "h2",
        heading: "The Variables That Drive the Layout",
        text: "A layout is the output of a calculation, and these are the inputs. Change any one and the answer changes.",
      },
      {
        type: "ul",
        items: [
          "Ground snow load for the specific location, which is published in code on a municipality-by-municipality basis. It is obtained from the building department or the code tables for that place — not estimated, and not borrowed from a nearby town.",
          "Roof slope. The steeper the slope, the greater the component of the snow's weight acting down the roof rather than into it.",
          "Slope length from ridge to eave. This is the multiplier most often underestimated: the load on a retention row is driven by the mass of snow on the roof above it, so a long slope loads a row far more heavily than a short one at the same depth.",
          "Panel type and seam profile, which determine which clamps fit and what holding value they achieve on that specific seam.",
          "Panel attachment: clip type, clip spacing, deck material and condition, because the load ultimately transfers into the structure through them.",
          "Tested holding values for the specific clamp and bracket on that specific seam, from the manufacturer's testing.",
        ],
      },
      {
        type: "h2",
        heading: "Why One Row at the Eave Is Usually Wrong",
        text: "The intuitive layout is a single row of guards just above the eave, on the theory that this is where the snow leaves. The problem is that this row is then asked to hold the entire snowpack on the whole slope above it. On a short slope that may be within capacity. On a long slope, or a steep one, or a location with heavy accumulation, the load on that row grows past what the attachments can take, and the row fails. Engineered layouts respond by adding rows further up the slope, so that the roof is divided into shorter tributary areas and each row holds only the snow above it and below the next row. On very long slopes multiple rows are the norm rather than an upgrade.",
      },
      {
        type: "h2",
        heading: "How the Failure Actually Happens",
        text: "This is why guessing is dangerous rather than merely suboptimal. An under-designed system does not underperform gradually. It works for several winters because the loads stayed under capacity. Then a year with deep accumulation and a rain-on-snow event pushes past the threshold, and the system releases — usually taking the clamps, sometimes a length of seam, occasionally a section of panel, and delivering the slab plus the hardware to whatever is below. The guards had, until that moment, encouraged everyone to stop worrying about what was under the eave.",
      },
      {
        type: "h2",
        heading: "Getting the Layout From the Manufacturer",
        text: "Reputable snow retention manufacturers provide project-specific layout calculations. The inputs are the roof geometry, the panel and seam type, the finish, and the ground snow load for the location. The output is a drawing showing how many rows, where they sit on the slope, and the bracket spacing along each row. That is the document that should exist for the roof.",
      },
      {
        type: "callout",
        text: "Two separate questions have to be answered on any retention project, and they go to different people. Can the retention system hold the snow? That comes from the manufacturer's engineering, based on the ground snow load for your municipality. Can the roof structure carry retained snow? That is a structural question for a structural engineer or your local building department, particularly on older buildings, additions, and porch roofs.",
      },
      {
        type: "h2",
        heading: "Geometry That Changes the Answer",
        text: "Roofs are rarely simple rectangles. Valleys concentrate snow from two planes into one path. Dormers and chimneys split a slope into sections that load differently and create drift zones. A section that discharges onto a lower roof needs retention regardless of what is at ground level. Skylights in a slide path need protection above them. Solar arrays create their own edges and drift patterns, so racking and retention have to be planned together.",
      },
      {
        type: "h2",
        heading: "Appearance",
        text: "Retention hardware is available finished to match common panel colours, and bar systems read as a clean horizontal line rather than as add-on equipment. The choice between a colour-matched bar and a distributed pad pattern is worth discussing at quoting — but the layout is determined by the calculation, and the finish is chosen afterward.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "How many rows of snow guards does my roof need?",
            a: "It depends on the slope length, the roof pitch, the panel and seam type, and the ground snow load for your municipality. Short slopes may need one row; long or steep slopes commonly need several. The number comes out of the manufacturer's layout calculation for the specific roof rather than from a general rule.",
          },
          {
            q: "Are bar-style snow guards better than pads?",
            a: "Bar systems are generally the more predictable choice for heavy or variable snow because they present a continuous barrier rather than relying on the snowpack bridging between individual units. Pads have their place on interrupted roof planes and where a continuous line is not wanted. Both must be laid out to an engineered pattern.",
          },
          {
            q: "Can I install snow guards myself on a standing seam roof?",
            a: "The physical installation of clamp-on hardware is not complicated, but the layout and the clamp selection are the parts that determine whether it holds. The clamp has to match the seam profile, the torque specification has to be followed, and the row positions have to come from a calculation. An incorrectly laid out system can do more harm than none at all.",
          },
          {
            q: "Do snow guards need to run the full width of the roof?",
            a: "Bar systems generally run continuously across the plane so snow cannot slide around the ends of a partial run. Protecting only the section above a doorway leaves the adjacent snow free to move and to load the ends of the run unevenly. Where a partial installation is proposed, it should be confirmed against the manufacturer's guidance.",
          },
          {
            q: "Where do I find the ground snow load for my location?",
            a: "It is published in the building code on a location-by-location basis, and your municipal building department can confirm the value that applies to your address. It is not a figure to estimate or to take from a neighbouring municipality, since it varies meaningfully across Southern Ontario.",
          },
        ],
      },
    ],
  },
  {
    slug: "ice-dams-metal-roofs-ontario",
    title: "Ice Dams on Metal Roofs: How They Form and What Metal Changes",
    excerpt:
      "An ice dam needs three things: snow on the roof, a warm deck above the heated space, and an eave below freezing. Metal changes two of them — and leaves the third entirely to you.",
    readTime: "9 min read",
    category: "Metal Roofing",
    metaTitle: "Ice Dams on Metal Roofs: Formation and Prevention",
    metaDescription:
      "How ice dams form on Ontario roofs, why they need a warm deck and a freezing eave, what metal changes, and where dams still occur on metal roofs.",
    content: [
      {
        type: "p",
        text: "Ice damming is the most misdiagnosed roofing problem in Ontario. Homeowners see ice at the eave and conclude the roof has failed. The roof is usually fine. What has failed is the temperature profile across the roof surface, and that is produced by heat loss from the house — which means a new roof of any material, installed over an unchanged attic, will produce the same ice next winter with better waterproofing beneath it.",
      },
      {
        type: "h2",
        heading: "Three Ingredients, All Required",
        text: "An ice dam needs snow sitting on the roof, a portion of the roof deck warm enough to melt the bottom of that snow, and a portion further down cold enough to refreeze the meltwater. Remove any one and there is no dam. This is why they form on some houses and not on the identical house next door, and why they form on one section of a roof and not another. The pattern of heat loss decides it.",
      },
      {
        type: "h2",
        heading: "How It Builds, Step by Step",
        text: "The sequence is the same every time, and understanding it points directly at the fixes.",
      },
      {
        type: "ul",
        items: [
          "Snow accumulates and forms an insulating blanket over the roof, so the deck under it warms more easily than bare roof would.",
          "Heat escapes from the heated space below — through insulation gaps, and much faster through air leaks in the ceiling — and warms the deck above the living area past zero.",
          "The bottom layer of the snowpack melts against the warm deck and the water runs down the slope beneath the remaining snow.",
          "The water reaches the eave and the overhang, which is over unheated space with outdoor air on both sides, and it is below freezing there.",
          "It freezes. The next melt cycle freezes on top of it. A ridge of ice builds along the eave and grows upward over days and weeks.",
          "Meltwater now pools behind the dam instead of draining, and it stays liquid because it is on the warm part of the roof.",
          "Standing water finds any path available — a seam, a fastener, a lap, a valley, a flashing termination — and enters the assembly.",
          "Water appears on a ceiling or down an interior wall during a mild spell, which is why it reads as a leak that only happens after a thaw.",
        ],
      },
      {
        type: "h2",
        heading: "It Is a Heat-Loss Problem First",
        text: "Everything after the second step is a consequence. The deck is warm because heat and warm air are moving from the house into the roof assembly. The usual sources are air leakage at pot lights, the attic hatch, top plates and chases; insulation that is thin or missing at the perimeter where framing is shallow; blocked soffit intake; ducts in the attic; and in half-storey houses, uninsulated knee wall floors. Fixing those changes the surface temperature of the roof, which is the actual variable.",
      },
      {
        type: "h2",
        heading: "What Metal Changes",
        text: "Metal genuinely helps, and it is worth being precise about how. First, snow sheds — often before it has had time to sit and melt from below — which removes the first ingredient for large parts of the winter. Second, the surface is smooth and continuous from ridge to eave, so even when ice does form it has no granules to grip and no shingle laps to be forced under; water sitting on a metal panel is sitting on a continuous surface rather than on an overlapping one. Third, the panels shed water faster once melting starts. Together these substantially reduce the frequency and severity of damming compared with an asphalt roof over the same attic.",
      },
      {
        type: "h2",
        heading: "Where Metal Can Still Dam",
        text: "What metal does not do is change the heat loss below it. And there are specific locations on a metal roof where snow stays put long enough for the process to run.",
      },
      {
        type: "ul",
        items: [
          "Above snow retention rows, which are designed to hold snow on the roof — this is the trade-off that comes with retention.",
          "In valleys, where snow from two planes converges, shades itself and consolidates.",
          "Behind dormers, chimneys and other obstructions that block sliding and create drift zones.",
          "On north-facing planes and roofs shaded by trees or neighbouring buildings, which get little solar gain to trigger shedding.",
          "On low-slope sections and porch roofs, where the sliding force is small.",
          "Along the eave above eavestroughs, where a trough full of ice provides a starting ledge for a dam to build on.",
        ],
      },
      {
        type: "h2",
        heading: "The Defences, in Order of Importance",
        text: "Air seal the ceiling plane, because air leakage carries the most heat and the most moisture. Get insulation depth uniform and carry it as far out over the exterior wall as the framing allows, using baffles to protect the vent path. Open and balance the ventilation so the deck runs close to outdoor temperature. Then treat the roof as the last line of defence: self-adhered ice and water membrane at the eaves, in the valleys and around penetrations, extending well up the slope past the interior wall line; correct flashing at roof-to-wall junctions; and eave details built for the possibility of standing water. The membrane does not prevent a dam. It prevents the dam from becoming an interior leak.",
      },
      {
        type: "callout",
        text: "A useful way to think about it: insulation, air sealing and ventilation determine whether ice forms. Underlayment and flashing determine whether that ice causes damage. Both are worth doing, and only one of them can be done from the roof.",
      },
      {
        type: "h2",
        heading: "What Not to Do",
        text: "Do not chip, hammer or chisel ice off a roof; on metal it will mark the finish and can distort a panel edge. Do not put salt or ice melt in eavestroughs or on the roof surface — chlorides are corrosive to metal components and fasteners, and the runoff kills landscaping below. Be cautious with roof rakes: a metal edge dragged down a coated panel scratches it, and a person pulling snow toward themselves is standing exactly where a slab will land.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "Do metal roofs prevent ice dams?",
            a: "They substantially reduce them, because snow sheds instead of sitting and there are no granules or shingle laps for water to be forced under. They do not eliminate the cause. If the roof deck is being warmed by heat escaping from the house, ice can still form where snow is held — above retention rows, in valleys, on shaded slopes and over unheated overhangs.",
          },
          {
            q: "Why do I get ice at the eave but nowhere else?",
            a: "That is the signature pattern. The roof over the heated space is warm enough to melt the base of the snowpack, and the overhang past the exterior wall has outdoor air on both sides and stays below freezing. The water crosses that boundary and freezes. It is a map of where your insulated envelope ends.",
          },
          {
            q: "Does ice and water shield stop ice dams?",
            a: "No, it stops the leak. A self-adhered membrane at the eaves and valleys is a waterproofing layer that keeps water that has pooled behind a dam from entering the assembly. It is important and it should be installed, but it is protection against the consequence, not a cure for the cause.",
          },
          {
            q: "Will more attic ventilation fix my ice dams?",
            a: "It is part of the answer, but only if the intake is genuinely open and the ceiling is reasonably airtight. Adding exhaust to an attic with blocked soffits pulls more warm house air into the attic and can make the melting worse. The order is air sealing, then insulation, then balanced ventilation.",
          },
          {
            q: "I have ice dams on a new roof. Was the roof installed wrong?",
            a: "Not necessarily. A re-roof replaces the waterproofing but does not change the insulation, air sealing or heat loss of the house unless that work was included. If the melting pattern that caused the dams is unchanged, dams will recur. What should be different is that the water no longer reaches the interior, thanks to eave and valley membrane.",
          },
        ],
      },
    ],
  },
  {
    slug: "roof-heat-cable-fix-or-symptom",
    title: "Heat Cable on Roofs: When It Is a Fix and When It Is a Symptom",
    excerpt:
      "Heat cable does not melt a roof clear. It keeps a drainage channel open through ice. Sometimes that is exactly the right tool, and sometimes it is a very visible sign of a problem upstairs.",
    readTime: "8 min read",
    category: "Metal Roofing",
    metaTitle: "Roof Heat Cable: When It Is a Fix and When It Is a Symptom",
    metaDescription:
      "What roof heat cable actually does, self-regulating versus constant-wattage types, legitimate uses on complex roofs, and when it masks attic heat loss.",
    content: [
      {
        type: "p",
        text: "Heat cable — heat trace, de-icing cable, whatever your supplier calls it — is a resistance heater run in a pattern along an eave, through a valley, or inside an eavestrough and downspout. It shows up on a lot of Ontario houses, usually installed after a bad winter. It is a legitimate tool in specific circumstances and a very common way of paying to heat the outdoors in all the others. The difference is worth understanding before it goes on a new metal roof.",
      },
      {
        type: "h2",
        heading: "What It Actually Does",
        text: "Heat cable does not clear a roof of ice and it is not meant to. What it does is maintain a continuous open channel through the ice so that meltwater from above has somewhere to go instead of pooling behind a dam. Ice still forms around it. The zigzag pattern along the eave creates a series of drainage paths down to the edge, and cable in the trough and downspout continues that path to a point where the water can leave. If the cable stops before that point — a common installation error — the water it liberated simply refreezes at the end of the heated section and builds a new dam there.",
      },
      {
        type: "h2",
        heading: "Two Types",
        text: "Constant-wattage cable produces the same output per unit length everywhere along its run regardless of temperature, so it needs to be controlled by a thermostat or manually switched, and it must not be overlapped on itself because it will overheat. Self-regulating cable uses a conductive polymer core whose resistance rises as it warms, so each section of cable puts out more heat where it is cold and less where it is not, and it can be crossed over itself without damage. Self-regulating cable is generally the better choice for roof and eavestrough work because it is more forgiving to install and adjusts its output to conditions.",
      },
      {
        type: "h2",
        heading: "When It Is Legitimate Engineering",
        text: "There are real situations where heat cable is the correct answer rather than a compromise. All of them share a common feature: the underlying heat-loss fix is either impossible or has already been done.",
      },
      {
        type: "ul",
        items: [
          "North-facing valleys on complex roofs that never see sun, where snow persists through the entire winter no matter how well the attic performs.",
          "Unheated overhangs and porch roofs adjacent to heated space, where the geometry guarantees a temperature boundary at the eave.",
          "Heritage buildings and finished cathedral ceilings where there is no realistic access to add insulation or air sealing.",
          "Low-slope tie-ins and roof-to-wall junctions where snow accumulates against a vertical surface and cannot shed.",
          "Eavestroughs and downspouts on shaded elevations that freeze solid and back up even when the roof itself is behaving.",
          "Roofs where retention is required for safety reasons, so snow is deliberately held in place and a drainage path through it has value.",
          "Buildings with unavoidable interior heat sources near the roof line, such as certain commercial and mechanical spaces.",
        ],
      },
      {
        type: "h2",
        heading: "When It Is a Symptom",
        text: "The other case is far more common. A house has ice dams because warm air is leaking into the attic through unsealed pot lights and top plates, the insulation is thin at the perimeter, and the soffits are packed with blown fibre. Heat cable is installed. It keeps water moving, the ceiling stains stop, and the actual defect is now permanently masked — while the heat that caused the problem continues to leave the house all winter. On top of that, the fix is a resistance heater running along the eave through the coldest months, drawing power continuously to counteract heat that is being lost anyway. Correcting the air leakage and the insulation removes the load rather than fighting it.",
      },
      {
        type: "h2",
        heading: "Installing It on a Metal Roof",
        text: "Metal changes the installation details in useful ways and in awkward ones. On the useful side: clips are available that attach to standing seam ribs or clamp without penetrating the panel, so cable can be routed without putting holes in the weather plane, and a smooth panel does not have shingle tabs to work around. On the awkward side: a metal roof sheds snow, and anything attached to the surface is in the slide path. Cable and clips in a slide zone will be torn off, so cable placement has to be coordinated with snow retention rather than planned separately. Never fasten cable clips by driving screws through a panel field, and never use adhesives or fasteners that are not compatible with the panel finish.",
      },
      {
        type: "h2",
        heading: "Safety and Maintenance",
        text: "Heat cable is an electrical appliance on the outside of the building. It should be on a dedicated circuit with ground fault protection, connected by a qualified electrician, and controlled either by a manual switch that someone actually remembers to use or by an automatic controller that senses temperature and moisture. Cable has a service life, and it does fail — usually silently. Damaged, cut or aged cable left in place does nothing except look like protection. Ice movement and sliding snow damage cable regularly, so a system installed once and never inspected should not be assumed to be working.",
      },
      {
        type: "callout",
        text: "If you are considering heat cable, ask one question first: is there anything I could do to the ceiling plane, the insulation, or the attic ventilation that would reduce the melting in the first place? If the honest answer is yes, do that first. Cable installed on top of an uncorrected attic is an operating cost that runs every winter for the life of the building.",
      },
      {
        type: "h2",
        heading: "The Sequence We Recommend",
        text: "Diagnose the melting pattern before spending anything: look at where snow melts on the roof and where the ice forms, and go into the attic on a cold day. Air seal the ceiling penetrations. Correct insulation depth and continuity, particularly at the perimeter. Open and balance the ventilation. Get eave and valley waterproofing membrane installed at the re-roof. Then, if there are still specific locations where the geometry guarantees ice regardless — a shaded valley, an unheated overhang, a persistent trough freeze — install heat cable in those specific places, correctly, terminating where the water can actually discharge.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "Does heat cable work on a metal roof?",
            a: "Yes, and non-penetrating attachment options exist for standing seam that avoid putting fasteners through the panel. The main planning issue is that metal sheds snow, so cable routing has to be coordinated with the slide paths and with any snow retention so it does not get torn off.",
          },
          {
            q: "Will heat cable damage my roof?",
            a: "Correctly specified and attached cable should not. The problems come from fasteners driven through panels, incompatible adhesives, constant-wattage cable overlapped on itself, and cable left in a slide path where it gets ripped loose. It is worth having it installed as part of the roof work rather than added later by someone unfamiliar with the panel system.",
          },
          {
            q: "How long does roof heat cable last?",
            a: "It is a consumable component with a finite service life, and it is exposed to ultraviolet light, ice movement and sliding snow. Assume it needs periodic inspection and eventual replacement, and check that it is actually heating at the start of each winter rather than assuming it is.",
          },
          {
            q: "Should heat cable run continuously all winter?",
            a: "No. It only needs to operate when there is a melting and refreezing cycle occurring, which is why automatic controllers that respond to temperature and moisture are preferred over leaving it switched on. Running it continuously through the whole season uses power when there is nothing for it to do.",
          },
        ],
      },
    ],
  },
  {
    slug: "snow-load-roof-structure-ontario",
    title: "Snow Load and Roof Structure: What Actually Governs Capacity",
    excerpt:
      "Roofs rarely fail from uniform snow. They fail from drifts, from sliding snow landing on a lower roof, and from loads nobody accounted for. Here is what determines capacity and who to ask.",
    readTime: "8 min read",
    category: "Metal Roofing",
    metaTitle: "Snow Load and Roof Structure: What Governs Capacity",
    metaDescription:
      "How roof snow load is determined from ground snow load, why drifting and sliding snow govern design, and when to involve a structural engineer.",
    content: [
      {
        type: "p",
        text: "Snow load is one of the few roofing subjects where the answer genuinely is that you need to ask someone qualified. The numbers are location-specific, published in code, and modified by factors that depend on the shape and thermal behaviour of the particular building. What is useful to understand as a homeowner or a builder is what governs the answer, and which situations should raise a question before work proceeds.",
      },
      {
        type: "h2",
        heading: "What a Roof Is Carrying",
        text: "Four categories of load matter. Dead load is the permanent weight of the structure and everything attached to it — framing, deck, roofing, insulation, ceiling. Snow load is the accumulated weight of snow and ice, which varies with location, season and roof shape. Wind load acts on the roof both as pressure and as uplift, and uplift is usually the governing wind case on a roof. Rain-on-snow adds water weight to an existing snowpack, which is a genuine and underappreciated Southern Ontario condition given how often our winters produce mild rain events on top of accumulation.",
      },
      {
        type: "h2",
        heading: "Where the Snow Number Comes From",
        text: "Roof snow load starts from the ground snow load, which is a location-specific value published in the building code on a municipality-by-municipality basis and derived from long-term climate records. It is not uniform across Southern Ontario. Communities on the lee side of the lakes see very different accumulation from those a short distance away, and elevation and exposure shift it further. The value that applies to a specific address is obtained from the building department or the code tables for that location. It is not a figure to estimate, average, or borrow from a nearby town, and any calculation built on a guessed value is worthless.",
      },
      {
        type: "h2",
        heading: "From Ground Snow to Roof Snow",
        text: "The ground value is then adjusted for how the roof behaves, and several factors move the number in both directions.",
      },
      {
        type: "ul",
        items: [
          "Slope: steeper roofs shed more, and above certain slopes the design snow load is reduced accordingly.",
          "Exposure: a roof in an open, windswept field loses snow to wind, while one sheltered by trees or surrounded by taller buildings keeps it.",
          "Thermal condition: a warm roof melts more of what lands on it than an unheated or well-insulated cold roof, and unheated structures such as barns and detached garages are treated differently.",
          "Shape and geometry: valleys, steps in roof height, dormers, parapets and adjacent taller walls all create zones where snow accumulates well above the flat-roof value.",
          "Sliding: snow that slides off an upper roof does not vanish, it lands on whatever is below.",
          "Rain-on-snow: an allowance for water added to an existing snowpack, which matters most on low slopes where the water cannot drain away.",
        ],
      },
      {
        type: "h2",
        heading: "Drifting Is What Actually Breaks Roofs",
        text: "Uniform snow across a simple roof plane is the easy case and rarely the governing one. Failures concentrate where snow is redistributed by wind into localized piles that are several times deeper than the general accumulation. The classic locations are the low side of a step in roof height, the inside corner where a roof meets a taller wall, behind parapets, in the trough of a valley, around and behind rooftop mechanical units, and in the pocket created by a large dormer. These are load concentrations on a small area, applied to framing that was often sized for the general case.",
      },
      {
        type: "h2",
        heading: "Sliding Snow Onto a Lower Roof",
        text: "This one deserves specific attention with metal, because metal makes it more likely. A steep upper roof that sheds efficiently delivers its accumulation to whatever is directly below — a porch roof, a garage roof, an addition, a bay window roof, a sunroom. Those lower roofs are frequently lightly framed and were never designed to receive the contents of a larger roof arriving at once. A metal upper roof changes the behaviour of a building that previously held its snow, and that change should be considered before installation rather than discovered in February. The answers are retention on the upper roof, structural reinforcement of the lower roof, or both, and which one applies is a structural question.",
      },
      {
        type: "h2",
        heading: "Retention Means Retained Load",
        text: "Snow retention is a safety measure that deliberately keeps snow on the roof. That is a change in loading behaviour: a roof that used to shed after every sunny day now carries accumulation through the season. On modern construction that is usually within capacity, since roofs are designed for snow load in the first place. On older buildings, on structures that have been altered, and on lightly framed porches and additions it is a question worth asking before retention hardware is specified.",
      },
      {
        type: "h2",
        heading: "Does Metal Change the Structural Picture?",
        text: "In terms of dead load, metal roofing is generally lighter than several layers of asphalt shingles, so a tear-off and metal installation typically reduces the permanent weight on the structure. That is a real advantage, and it is one reason metal is often used on recover projects. It is not a licence to ignore capacity. Installing over existing shingles rather than tearing off keeps the old dead load and adds to it, plus battens and fasteners. And the sliding behaviour discussed above can increase the load on adjacent lower roofs even while reducing it on the main one.",
      },
      {
        type: "callout",
        text: "Two contacts settle almost every snow load question. Your municipal building department has the ground snow load for your address and knows what permits and reviews a given scope of work requires. A structural engineer can assess an existing structure, evaluate a lower roof receiving sliding snow, and specify reinforcement. If a project involves adding retention to an unknown structure, changing roof geometry, or a lower roof in a discharge path, those calls are worth making before the work is scheduled.",
      },
      {
        type: "h2",
        heading: "Signs of Structural Distress",
        text: "Some warning signs are visible without any engineering knowledge, and they warrant a professional assessment rather than another winter of watching.",
      },
      {
        type: "ul",
        items: [
          "Visible sagging or a dip in the ridge line or in a roof plane, particularly if it has changed over time.",
          "Doors or windows that stick or bind in winter and release in spring.",
          "New cracks in interior drywall at the ceiling or at the top of walls, especially cracks that appear seasonally.",
          "Cracked, split or bowed rafters, trusses or ceiling joists visible in the attic, or any truss member that has been cut or notched.",
          "Sloping or springy floors under the roof structure in a storey-and-a-half house.",
          "Creaking or popping noises during heavy accumulation.",
          "Water stains at bearing points, which can indicate both a leak and wood that has been weakened by it.",
        ],
      },
      {
        type: "faq",
        faqs: [
          {
            q: "What is the snow load for my town in Ontario?",
            a: "That value comes from the building code tables for your specific location and can be confirmed by your municipal building department. It varies meaningfully across Southern Ontario with proximity to the lakes, elevation and exposure, so it should be obtained for your address rather than estimated or taken from a neighbouring municipality.",
          },
          {
            q: "Is a metal roof heavier than shingles?",
            a: "Generally no. Metal roofing typically weighs less than an equivalent area of asphalt shingles, and considerably less than two layers of them. A tear-off and metal installation usually reduces the permanent load on the structure, which is one reason metal is used on recover and heritage projects.",
          },
          {
            q: "Do I need an engineer to install snow guards?",
            a: "The retention layout itself comes from the manufacturer's engineering based on the ground snow load, panel type and roof geometry. A structural engineer becomes relevant when the capacity of the structure to hold retained snow is in question — older buildings, additions, porches, altered framing, or any roof where the framing is unknown.",
          },
          {
            q: "Should I remove snow from my roof?",
            a: "On a structurally sound modern roof, routine snow removal is generally unnecessary and carries its own risks, including damage to the roof and injury to the person doing it. Where there are signs of distress, where accumulation is unusually deep, or where drifting has built up in a step or valley, that is a situation to ask about rather than to work on from a ladder.",
          },
        ],
      },
    ],
  },
  {
    slug: "roof-avalanche-hazards-doorways-gas-meters",
    title: "Roof Avalanche: Doorways, Walkways, Gas Meters and What Sits Below the Eave",
    excerpt:
      "A slab release from a metal roof arrives in one place, all at once, with real force. Planning for it means reading the roof plan against what is on the ground before the panels go on.",
    readTime: "8 min read",
    category: "Metal Roofing",
    metaTitle: "Roof Avalanche Hazards: Doorways, Meters and Walkways",
    metaDescription:
      "How to identify snow discharge zones on a metal roof and protect entrances, walkways, gas meters, eavestroughs and lower roofs from slab releases.",
    content: [
      {
        type: "p",
        text: "The word sounds dramatic for a house, but it describes the event accurately. Snow that has consolidated on a metal roof releases as a coherent slab, travels down a low-friction slope, and lands in a defined zone below the eave. It happens quickly, usually without warning, and often on a sunny day when the weather seems benign. Deciding what to do about it starts with reading a roof plan against what is actually on the ground.",
      },
      {
        type: "h2",
        heading: "It Is a Release, Not a Snowfall",
        text: "The distinction matters because it changes what you are protecting against. Falling snow arrives gradually, spread over a wide area, and does no damage. A slab release delivers a season's accumulation from a defined area of roof to a defined strip of ground in a few seconds. The mass involved is significant, particularly after freeze-thaw cycles have consolidated the pack and rain events have added water, and it can carry an ice layer at its base. Whatever occupies that strip of ground receives all of it at once.",
      },
      {
        type: "h2",
        heading: "Reading the Roof for Discharge Zones",
        text: "Every roof plane discharges over its own eave, so mapping the hazard means tracing each plane to where it ends and looking at what is below. A simple gable roof has two zones. A complex roof with hips, dormers, additions and lower sections can have a dozen, and some planes discharge onto other roofs rather than onto the ground. The exercise is worth doing on paper before panels are ordered.",
      },
      {
        type: "ul",
        items: [
          "The front entrance, side door, and back door, plus the landing and steps at each.",
          "The walkway from the driveway, and any path that gets shovelled and used daily.",
          "The gas meter and its regulator, along with the service piping into the building.",
          "Sidewall vent terminals for high-efficiency furnaces, boilers and water heaters, and any fresh air intake.",
          "Air conditioning condensers, heat pumps, generator enclosures and their pads.",
          "Eavestroughs, downspouts, and any downspout extension or splash block.",
          "Decks, railings, stairs, hot tubs, awnings, pergolas and permanent furniture.",
          "Lower roofs: porches, bay windows, garages, additions, sunrooms and covered entries.",
          "The property line, where discharge would land on a neighbouring property or a public sidewalk.",
        ],
      },
      {
        type: "h2",
        heading: "Gas Meters and Vent Terminals",
        text: "This is the item that gets underestimated most often, and it has the most serious consequences. Gas meters and regulators are mounted on exterior walls, frequently directly under an eave, and utilities have clearance requirements around them for exactly this reason — ice and snow loading on a meter set is a safety issue, not a cosmetic one. Sidewall vent terminals for high-efficiency appliances matter just as much: they are typically PVC pipes penetrating a wall above grade, and a slab landing on them can break, block or bury the intake and exhaust, which affects the appliance inside. Both should be identified on the roof plan and protected with retention above them, and where a meter or terminal cannot be protected, the utility or the mechanical contractor should be consulted about relocation.",
      },
      {
        type: "h2",
        heading: "Eavestroughs and the Edge",
        text: "Eavestrough on a metal roof lives in a hostile position, since everything the roof sheds passes over it. Trough set too high relative to the panel edge catches sliding snow and gets torn off the fascia; trough set below the projected slide line lets snow pass over. Hanger type and spacing and the position of the drip edge and eave trim all figure into it, which is why eavestrough is part of the metal roof conversation.",
      },
      {
        type: "h2",
        heading: "The Two-Storey Unload",
        text: "The most consequential discharge path on many houses is not to the ground at all. An upper roof that discharges onto a porch roof, a garage roof, an addition or a sunroom delivers its accumulation onto a structure that was framed for its own snow load, not for that of a larger roof above it. The lower roof also then has a deeper pack sitting on it for the rest of the winter. Where this geometry exists, retention on the upper roof is the usual answer, and where the lower roof is lightly framed or of unknown construction, its capacity is a question for a structural engineer.",
      },
      {
        type: "h2",
        heading: "Three Ways to Deal With It",
        text: "Retention is the primary control: hold the snow on the roof so it melts and discharges gradually, using an engineered layout above the areas that need protection. Protection is the secondary control: diverters and crickets above specific obstructions such as a chimney or a vent terminal, canopies or porch roofs over entrances designed to take the load, and guarding around equipment. Relocation is the third and is sometimes the cleanest: move the walkway, move the air conditioner, move the parking, and where the utility permits it, relocate the meter. On most projects the answer is a combination — retention over the entrances and the meter, a diverter above a specific penetration, and an accepted discharge zone over the lawn where nothing needs protecting.",
      },
      {
        type: "callout",
        text: "Diverters are for small obstructions such as a plumbing stack, a vent terminal or a chimney. They split snow around an object; they do not stop it. Protecting a doorway, a walkway, or a lower roof requires retention that holds the snow on the slope, not a device that steers it a metre to one side.",
      },
      {
        type: "h2",
        heading: "Solar Arrays",
        text: "Solar panels create their own version of the problem. The array surface is smooth glass, often at a slightly different angle to the roof plane, and it sheds independently — sometimes onto the metal below it, which then discharges over the eave. The racking also creates edges where snow catches and drifts. Where an array is planned, retention layout, racking layout and discharge paths have to be worked out together.",
      },
      {
        type: "h2",
        heading: "What We Walk Through on Site",
        text: "Before a metal roof is specified we trace where each roof plane discharges: entrances and the paths people actually use, the gas meter and any sidewall vent terminals, mechanical equipment, the eavestrough detail, any lower roof in a discharge path, and the property line. That produces the retention plan, the diverter locations, and an honest conversation about where the answer is to accept the discharge and keep the area clear.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "How far does snow travel when it comes off a metal roof?",
            a: "It depends on the roof height, the slope, the mass of the slab and how much speed it picks up, so there is no single distance. The practical assumption is that discharge lands in a zone extending out from the eave rather than straight down, which is why the area beneath an eave — not just the drip line — is what gets assessed.",
          },
          {
            q: "Can snow from a metal roof damage a gas meter?",
            a: "Yes, which is why utilities specify clearances around meters and regulators and why retention above a meter set is standard practice. Ice and snow loading on a regulator is a safety concern. If a meter sits directly beneath an eave that cannot be protected, the utility should be asked about relocation.",
          },
          {
            q: "Will snow sliding off damage my eavestrough?",
            a: "It can, and it does when the trough is positioned so that sliding snow catches it. The way to avoid it is to detail the eave, the drip edge and the trough position so the discharge passes over the trough rather than into it, and to use hangers appropriate for the loading. It is a detail worth settling during the roof design, not afterward.",
          },
          {
            q: "Should I put snow guards over my whole roof or just above the door?",
            a: "Retention rows generally run the full width of a roof plane, because a partial run lets adjacent snow slide around the ends and loads the ends of the run unevenly. Which planes need retention at all is decided by what is below each of them, but on a plane that needs it, the row normally runs across.",
          },
          {
            q: "Is a roof avalanche a reason not to choose metal?",
            a: "No — it is a reason to plan the discharge before installation. Snow retention, diverters, eave detailing and, where needed, relocating what sits under an eave are established solutions to a known behaviour. The problems come from installing a shedding roof over an unexamined property, not from the roof itself.",
          },
        ],
      },
    ],
  },
];
