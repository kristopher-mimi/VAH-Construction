import type { BlogPostSeed } from "./types";

/**
 * Installation-detail articles: the assembly-level topics that decide whether a
 * metal roof performs for decades or leaks in year three. Publication dates are
 * assigned centrally in lib/blog/index.ts, so no `date` field here.
 */
export const INSTALLATION_POSTS: BlogPostSeed[] = [
  {
    slug: "roofing-underlayment-synthetic-vs-felt-vs-self-adhered",
    title: "Roofing Underlayment Compared: Synthetic vs Felt vs Self-Adhered",
    excerpt:
      "Underlayment is the layer you never see and can never replace without taking the roof off. Here is how felt, synthetic and self-adhered membranes actually behave under a metal roof.",
    readTime: "8 min read",
    category: "Metal Roofing",
    metaTitle: "Roofing Underlayment Compared: Synthetic, Felt, Self-Adhered",
    metaDescription:
      "How asphalt felt, synthetic and self-adhered underlayments perform under a metal roof in Ontario — tear strength, wrinkling, heat, and where each one belongs.",
    content: [
      {
        type: "p",
        text: "Underlayment is the cheapest layer in a roof assembly and the one most likely to be treated as an afterthought. That is backwards. Under asphalt shingles, the underlayment gets replaced every time the roof does — every fifteen years or so, whether it deserved it or not. Under a metal roof, the underlayment has to survive as long as the panels do, because the only way to change it is to strip the roof. Choosing it on price is a decision you live with for a very long time.",
      },
      {
        type: "h2",
        heading: "What the Underlayment Is Actually For",
        text: "It is not the waterproofing layer. The panels are. The underlayment is a secondary barrier that handles the water the panels are never meant to see: wind-driven rain forced back under a lap, snow blown in at a ridge vent during a whiteout, meltwater backing up behind an ice dam, condensation forming on the underside of a cold panel. It also protects the deck during construction, gives the crew a working surface, and acts as a slip sheet so the panels can move against the deck without abrading.",
      },
      {
        type: "h2",
        heading: "Asphalt-Saturated Felt",
        text: "Felt is the traditional product — an organic or fibreglass mat saturated with asphalt, sold as No. 15 or No. 30 (numbers that once described the weight of a hundred square feet of the stuff and now describe very little). It is inexpensive and it is what most older Ontario roofs have under them. It also has real problems under metal.",
      },
      {
        type: "ul",
        items: [
          "It absorbs water. Get a roll wet before the panels go on and it swells, then wrinkles as it dries. Those wrinkles telegraph through a flat metal pan and show up as ridges in the finished roof.",
          "It tears. A dropped tool, a boot heel on a hot afternoon, a gust catching a loose edge — felt gives up easily, and every tear is a hole in your secondary barrier.",
          "It degrades fast in sunlight. Left exposed, felt dries out, curls and loses its asphalt in a matter of days, not weeks.",
          "It softens with heat. Under a dark panel in July it can go tacky and stick to the underside of the metal, which fights the panel's thermal movement.",
          "It does not seal around fasteners. Every clip screw is a permanent hole in the barrier.",
        ],
      },
      {
        type: "h2",
        heading: "Synthetic Underlayment",
        text: "Synthetics are woven or spun-bonded polypropylene or polyethylene, usually with a scrim reinforcement and a coated top surface. Compared with felt they are dramatically tougher — you can stand on a synthetic sheet, walk it, and drag material across it without opening it up. Rolls are longer and much lighter, so there are fewer laps and less handling. They do not absorb water, so they do not wrinkle, which matters enormously when the finished surface is a flat metal pan that shows every irregularity beneath it.",
      },
      {
        type: "p",
        text: "The variables to check on a synthetic are the stated exposure window (how long the manufacturer permits it to be left uncovered), the traction of the walking surface — some are genuinely slippery when damp, which is not a small thing on a 9:12 — and whether the product is approved for use under metal. Not all of them are. Some synthetics are only rated for shingle assemblies and will not tolerate the temperatures that build up beneath a dark panel.",
      },
      {
        type: "h2",
        heading: "Self-Adhered Membranes",
        text: "Self-adhered underlayment — peel-and-stick — bonds directly to the deck and, critically, seals around the shank of every fastener driven through it. That is the whole point. Every clip screw in a standing seam roof is a penetration, and a membrane that closes around the screw is a fundamentally different level of protection than one that just has a hole in it.",
      },
      {
        type: "p",
        text: "Two broad families exist. SBS-modified bitumen membranes use rubberized asphalt adhesive and are the familiar ice-and-water product. Butyl-based membranes use a non-asphaltic adhesive and generally hold up far better at the temperatures a metal roof reaches. Both come with a range of top surfaces — granular, film, or a woven polyolefin facer. For metal work, a smooth or film-faced sheet is preferred: a granular surface abrades the panel coating from below as the roof moves.",
      },
      {
        type: "callout",
        text: "Compatibility matters. Asphalt-based products in direct contact with bare aluminum or with certain panel coatings can cause problems over time. Before you commit to a membrane, confirm with the panel manufacturer that it is approved beneath their system, and follow their installation instructions rather than the membrane maker's generic advice.",
      },
      {
        type: "h2",
        heading: "How the Three Get Combined on a Real Roof",
        text: "In practice these are not competing choices so much as layers of a strategy. A typical, well-built Southern Ontario metal roof uses a self-adhered membrane in the places water is most likely to be pushed backwards — the eaves, the valleys, around chimneys and skylights, at sidewalls and headwalls — and a high-quality synthetic across the balance of the field. Some assemblies go fully self-adhered, which is the most protective option and the right call on complicated, low-pitch or heavily shaded roofs where snow lingers.",
      },
      {
        type: "h2",
        heading: "Where This Goes Wrong",
        text: "The failures we see are boring and repetitive. Felt left exposed through a rain delay, then covered wet, and the wrinkles show through the panels for the life of the roof. A slippery synthetic chosen for a steep roof and the crew ends up working carelessly. A standard ice-and-water membrane used across a full unvented deck under dark panels, where it softens, bleeds, and grabs the panel underside. And the classic: no membrane at the eaves on a house that ice dams every February.",
      },
      {
        type: "h2",
        heading: "Condensation, Not Just Rain",
        text: "In an Ontario winter, the underside of a metal panel can sit well below the dew point of the air in the assembly. If moist indoor air reaches that surface, it condenses and runs. A solid deck with a continuous underlayment, a properly detailed air barrier at the ceiling, and balanced ventilation are what prevent that. No underlayment on its own solves a condensation problem — but the wrong one, in an unvented assembly, will hold moisture against the deck and rot it quietly for years.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "Can the existing underlayment be reused when re-roofing in metal?",
            a: "No. Old felt has already had its working life, it will be full of nail holes from the previous roof, and its condition under the shingles is unknown until the tear-off. Anything going under a roof intended to last decades should be new and installed on a clean, inspected deck.",
          },
          {
            q: "Is two layers of felt as good as one layer of synthetic?",
            a: "No. Two layers of felt is still felt — it still absorbs water, still wrinkles, still tears, and still has an open hole at every fastener. Doubling it adds bulk and cost without addressing any of the actual weaknesses.",
          },
          {
            q: "Do I need underlayment if the metal is going over open purlins?",
            a: "Over open framing there is nothing to lay an underlayment on, so the condensation control has to come from somewhere else — a condensation-control blanket, a felt-backed panel, or a properly designed vapour and ventilation strategy. That is a different assembly with its own rules, and it is not a place to improvise.",
          },
          {
            q: "How long can underlayment be left exposed before the panels go on?",
            a: "It depends entirely on the product, and the manufacturer states the limit. Felt is measured in days. Good synthetics are measured in months. Either way, the practical answer is that the roof should be dried in and panelled as promptly as the schedule and weather allow.",
          },
        ],
      },
    ],
  },
  {
    slug: "high-temperature-underlayment-metal-roofing",
    title: "High-Temperature Underlayment: Why Metal Roofs Need It",
    excerpt:
      "A dark metal panel in July gets far hotter than a shingle roof. Standard peel-and-stick softens, bleeds and grabs the panel. Here is what high-temp membranes do differently.",
    readTime: "7 min read",
    category: "Metal Roofing",
    metaTitle: "High-Temperature Underlayment for Metal Roofs Explained",
    metaDescription:
      "Why metal roofs need high-temperature underlayment, how standard ice-and-water membranes fail under hot panels, and where the requirement is most critical.",
    content: [
      {
        type: "p",
        text: "There is a specific and well-documented way that a good metal roof gets ruined from underneath, and it starts with the wrong underlayment. Standard self-adhered membranes are formulated for the temperatures that occur under asphalt shingles. A metal panel is a different thermal environment entirely, and a membrane that performs perfectly under shingles can turn into a liability under steel.",
      },
      {
        type: "h2",
        heading: "How Hot It Actually Gets Under a Panel",
        text: "On a clear summer afternoon, a dark-coloured metal panel absorbs solar radiation and heats rapidly. Because the panel is thin and conductive, that heat moves straight through to whatever is touching its underside. If the panel sits directly on the underlayment over a solid deck — no ventilated airspace, no batten cavity — the membrane sees very nearly the panel temperature. Add a south or west exposure, a dark colour, a shallow pitch that keeps the sun near normal to the surface, and an unvented cathedral assembly below with no way to dump heat, and you have the worst case.",
      },
      {
        type: "h2",
        heading: "What Fails in a Standard Membrane",
        text: "Conventional self-adhered underlayment uses rubberized asphalt as the adhesive. Asphalt does not have a sharp melting point; it softens progressively as it heats. Once it goes past its service temperature the failures stack up:",
      },
      {
        type: "ul",
        items: [
          "The adhesive flows. It migrates out of the sheet, runs at laps, and can work its way toward seams and fastener penetrations.",
          "It bonds to the panel underside. A panel is supposed to slide freely as it expands and contracts. When the membrane grips it, the panel drags the sheet with it on every thermal cycle.",
          "The sheet tears. Dragged repeatedly against a fixed deck, the membrane shears — usually right where you need it most, around clip fasteners.",
          "It telegraphs. Softened, displaced adhesive creates lumps and ridges that show through a flat pan.",
          "Laps creep and open, and the sealed fastener penetrations you paid for stop being sealed.",
        ],
      },
      {
        type: "h2",
        heading: "What Makes a Membrane High-Temperature",
        text: "High-temperature membranes take one of two approaches. Some use a heavily modified SBS asphalt formulated to hold its body at elevated temperature. Others move away from asphalt altogether and use a butyl adhesive, which has much better thermal stability and does not soften and flow the way bitumen does. Both are typically built on a tough polyolefin or polyester facer rather than a granular surface, which gives better traction for the crew and does not abrade the panel coating from below.",
      },
      {
        type: "p",
        text: "Manufacturers publish a service temperature for these products — the number is on the data sheet, and it is the single specification worth reading before you buy. If a membrane's stated service temperature is comfortably above what your panel colour and assembly will produce, it belongs on the roof. If the data sheet is vague, that tells you something too.",
      },
      {
        type: "callout",
        text: "The tell on a job site is simple: if the release liner backing and the sheet itself do not say high-temperature or metal-roof-approved somewhere on them, do not put them under metal panels. \"Ice and water shield\" on the label means nothing about heat tolerance.",
      },
      {
        type: "h2",
        heading: "Where the Requirement Is Most Critical",
        text: "Not every square foot of every roof is equally at risk, and it is worth knowing where the margin is thin. Heat load is highest on unvented and insulated-to-the-deck assemblies, where there is nowhere for heat to go. It is highest on dark colours — matte black and charcoal are the most popular finishes in Southern Ontario and they are the hottest. It is highest on lower pitches, and on south and west planes. It is highest where the panel is in direct contact with the membrane rather than separated by battens or a ventilated cavity.",
      },
      {
        type: "h2",
        heading: "Does a Light Colour Let You Skip It?",
        text: "A lighter, more reflective finish genuinely runs cooler than a dark one, and on a well-ventilated attic assembly with a light panel you have more margin. But margin is not the same as immunity, and the difference in material cost between a standard and a high-temperature membrane is trivial compared with the cost of stripping a roof to fix it. On any roof intended to stay on for decades, this is not the line item to economize on.",
      },
      {
        type: "h2",
        heading: "The Ontario Angle",
        text: "It is easy to think of this as a hot-climate problem and assume Southern Ontario is exempt. It is not. Our summers produce plenty of heat on a dark panel, and our winters add a second stress the warm climates do not have: the same membrane that softened in August has to stay flexible and bonded at well below freezing in January, and it has to survive dozens of freeze-thaw cycles a year without cracking or debonding at the laps. A membrane that is stable across that entire range — not just at one end of it — is what the climate actually demands.",
      },
      {
        type: "h2",
        heading: "Installation Points That Matter",
        text: "The membrane also has to be installed correctly to perform at all. The deck must be dry, clean and frost-free — self-adhered products do not bond to a damp or dusty surface, and rough or aged sheathing may need a primer. Roll it out and let it relax before removing the release film so it lays flat with no fishmouths. Roll the laps down; do not rely on hand pressure. In cold weather, check the manufacturer's minimum application temperature — many products need supplementary fastening or a warmed surface below a stated temperature.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "What happens if standard ice-and-water shield was already installed under my metal roof?",
            a: "It may perform for years, particularly on a light-coloured, well-ventilated roof. The risk shows up on hot, dark, unvented assemblies — adhesive bleed, the membrane bonding to the panel, and tearing around clip fasteners. There is no way to inspect it without lifting panels, so the honest answer is that you monitor for symptoms rather than assume the worst.",
          },
          {
            q: "Is high-temperature underlayment needed if the panels are on battens with an airspace?",
            a: "A ventilated cavity between the panel and the membrane substantially reduces the heat reaching the underlayment, which is one of the real advantages of a batten assembly. Even then, follow the panel manufacturer's stated requirement — several specify a high-temperature product regardless of the assembly.",
          },
          {
            q: "Does the whole roof need high-temperature membrane, or just the eaves?",
            a: "Wherever a self-adhered membrane is used under metal panels, it should be a product rated for the temperature. If the eave courses are self-adhered and the field is synthetic, the eave courses are the ones that need the rating.",
          },
          {
            q: "Can high-temperature membrane be used under asphalt shingles too?",
            a: "Yes. It is compatible with shingle assemblies and simply exceeds what they require. The only reason to distinguish is cost.",
          },
        ],
      },
    ],
  },
  {
    slug: "ice-and-water-shield-where-required-how-far-up",
    title: "Ice and Water Shield: Where It Goes and How Far Up the Roof",
    excerpt:
      "Ice barrier membrane is the last line of defence against an ice dam. Getting the coverage right means understanding what you are measuring from — and it is not the eave.",
    readTime: "8 min read",
    category: "Metal Roofing",
    metaTitle: "Ice and Water Shield: Coverage, Placement and Detailing",
    metaDescription:
      "Where ice and water shield is needed on an Ontario roof, how far up the slope it must run, and how it is detailed at eaves, valleys, walls and penetrations.",
    content: [
      {
        type: "p",
        text: "Ice barrier membrane exists for one scenario. Heat escaping through a roof melts the snow sitting on it. The meltwater runs down the slope until it reaches the overhang — which is not heated from below and stays cold — where it refreezes. That ridge of ice grows, backs up the water behind it, and the water then sits on the roof rather than running off it. Water sitting on a roof will find every lap, every fastener, and every seam that was designed to shed running water rather than resist standing water. The membrane is what stops that becoming a ceiling stain.",
      },
      {
        type: "h2",
        heading: "The Measurement Everyone Gets Wrong",
        text: "The rule of thumb the trade works to is that the membrane must extend from the roof edge up the slope to a point at least 300 mm — twelve inches — beyond the interior face of the exterior wall below. Note what that is measured from. It is not measured from the fascia, not from the drip edge, and not from the eavestrough. It is measured from the warm wall, because the warm wall is where the heated space stops and the cold overhang begins. Confirm the actual requirement with your local building department; what matters here is understanding what the dimension is referencing.",
      },
      {
        type: "p",
        text: "The practical consequence is that a house with a deep overhang needs more membrane than one with a shallow one, and a low-pitch roof needs more than a steep one, because a shallower slope covers less horizontal distance per foot of membrane run. On a 3:12 with a 24-inch overhang and a two-by-six wall, one 36-inch course does not get you there. Two courses do, with the lap. On a 10:12 with a 12-inch overhang, one course is often enough. Measure it out on the roof rather than defaulting to a single row because that is what came off the truck.",
      },
      {
        type: "h2",
        heading: "The Other Places It Belongs",
        text: "Eaves get the attention, but the eave is only one of the locations where water stops behaving like running water. Anywhere flow concentrates, slows, or gets blocked deserves membrane.",
      },
      {
        type: "ul",
        items: [
          "Valleys, full length, centred on the valley line and wide — a valley carries the runoff of two roof planes through one narrow channel, and it fills with ice.",
          "Around chimneys, skylights and curbs, running up onto the curb or the masonry face and out onto the deck well past the flashing.",
          "At sidewalls and headwalls, turned up the wall and lapped correctly with the water-resistive barrier so it drains outward, not into the cavity.",
          "Low-slope sections and porch roofs, where the whole plane may warrant full coverage.",
          "Dead valleys and any pocket where two planes create a spot with little or no fall.",
          "Roof-to-roof transitions and pitch changes, where sliding snow stalls and ice builds.",
        ],
      },
      {
        type: "h2",
        heading: "Sequencing at the Eave",
        text: "The convention that has served the trade well is that at the eave the drip edge goes on the deck first and the membrane laps over its top flange, so any water that gets onto the membrane drains out over the metal rather than behind it. At the rake it is reversed: membrane first, then the trim over it. Metal roof systems often use a different eave detail — a starter cleat or an eave trim set over the membrane and sealed to it — so the panel manufacturer's detail governs. What never changes is the principle: each layer must lap so that water travelling downhill stays on top of the layer below.",
      },
      {
        type: "callout",
        text: "Ice barrier membrane is a backstop, not a cure. If a house is damming every winter, the cause is heat loss into the roof assembly and inadequate ventilation, and the fix is air sealing at the ceiling plane, insulation depth, and balanced intake and exhaust. Membrane just buys you time before the water finds another way in.",
      },
      {
        type: "h2",
        heading: "Getting It Down Properly",
        text: "Self-adhered membrane is unforgiving of a poor substrate and of a rushed installation. The deck has to be dry, swept clean, and free of frost — adhesion to a damp or dusty surface is not adhesion, it is just contact. Aged or rough sheathing may need a primer; check the product. Roll the sheet out, let it relax, then peel the release film progressively rather than all at once so the sheet lands flat. Fishmouths at laps and wrinkles in the field both become permanent once the panels are on, and a wrinkle under a metal pan is a visible defect as well as a water path.",
      },
      {
        type: "p",
        text: "Cold-weather application is the one to watch in Ontario. Below a certain temperature, which the manufacturer states, the adhesive will not wet out and the sheet will lift. Some products are formulated for low-temperature application; most are not. The options are to warm the material and the deck, to fasten mechanically as the manufacturer permits, or to wait.",
      },
      {
        type: "h2",
        heading: "Laps and Terminations",
        text: "Side laps and end laps have stated minimums — commonly around 3 inches on the side and 6 inches on the end, but read the product. Lap uphill sheets over downhill sheets, always. At a valley, run the valley membrane first and lap the field membrane over it from both planes so the flow direction is respected. At a wall, terminate the membrane on the wall in a way that will be covered and drained by the water-resistive barrier and the cladding, not left as an exposed edge relying on sealant.",
      },
      {
        type: "h2",
        heading: "Should the Whole Roof Be Membraned?",
        text: "Fully adhering a roof is the most protective option, and on a complex, low-slope or heavily shaded roof it is often the right call. The caution is that a fully adhered membrane is close to vapour-impermeable, so it only belongs on an assembly that can dry — a properly vented attic or a designed unvented assembly with the vapour control in the right place. On an assembly where the deck's only drying path is upward, sealing it completely can trap moisture in the sheathing. That is a design question, not a materials question, and it is worth asking before ordering.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "How many rows of membrane do I need at the eave?",
            a: "As many as it takes to get past the interior face of the exterior wall by a sensible margin, measured along the slope. Deep overhangs and low pitches routinely need two, sometimes three. Measure the actual roof rather than defaulting to one row.",
          },
          {
            q: "Does a metal roof still need ice barrier if metal sheds snow?",
            a: "Yes. Snow does slide off a smooth metal surface more readily, but it does not always slide — snow bonds to a cold panel, sits through cold snaps, and the melt-and-refreeze cycle at the overhang happens on metal the same as anything else. Metal roofs in Ontario ice dam.",
          },
          {
            q: "Can ice barrier be applied over an existing roof or a dirty deck?",
            a: "No. It bonds to a clean, dry, sound deck and nothing else. Any dust, frost, moisture or loose material means the bond will not hold, and a membrane that is not bonded does not seal around fasteners — which is the entire reason for using it.",
          },
          {
            q: "Is ice and water shield the same as high-temperature underlayment?",
            a: "Not necessarily. Many ice barrier products are standard-temperature rubberized asphalt and are not suitable under metal panels. If a self-adhered membrane is going under metal, it needs to be a product rated for the temperature.",
          },
          {
            q: "Where else besides the eave do leaks from ice actually show up?",
            a: "Valleys and sidewalls, overwhelmingly. A valley carries two planes' worth of water and ice through one channel, and a sidewall running down to an eave will dump into the wall cavity if the kick-out and the membrane are not right.",
          },
        ],
      },
    ],
  },
  {
    slug: "roof-deck-requirements-metal-roofing",
    title: "Roof Deck Requirements for Metal Roofing",
    excerpt:
      "Metal panels show every flaw in the deck beneath them and rely on it for fastener holding. What sheathing type, thickness and condition are actually acceptable.",
    readTime: "8 min read",
    category: "Metal Roofing",
    metaTitle: "Roof Deck Requirements for Metal Roofing Explained",
    metaDescription:
      "Sheathing type, thickness, flatness and condition requirements for a metal roof deck — plywood vs OSB, board decks, and fastener withdrawal explained.",
    content: [
      {
        type: "p",
        text: "A metal roof is only as good as what it is screwed to. That statement is more literal than it sounds: on a standing seam roof, the entire wind uplift resistance of the assembly runs through clip screws into the sheathing, and the visual quality of the finished roof is a direct readout of how flat that sheathing is. Two failure modes, both determined before the first panel goes on.",
      },
      {
        type: "h2",
        heading: "Fastener Withdrawal Is the Structural Question",
        text: "When wind lifts a standing seam roof, the load path is panel to seam, seam to clip, clip to screw, screw to sheathing. The weakest link in a residential assembly is almost always the screw's grip in the wood. That grip depends on the thickness of the panel of sheathing, the density of the material, whether the screw is a proper threaded fastener or a nail, and — crucially — whether the sheathing is dry.",
      },
      {
        type: "p",
        text: "Thin sheathing gives a screw very little thread engagement. A pancake-head screw into a thin OSB deck has only the thickness of the panel to hold onto, and OSB in particular loses a substantial share of its fastener holding capacity once it has been wetted and dried. That is why panel manufacturers publish minimum deck thicknesses for their clip systems, and why those minimums increase as rafter spacing increases. Follow the manufacturer's installation instructions on this specifically — it is not a place for a rule of thumb.",
      },
      {
        type: "h2",
        heading: "Plywood or OSB",
        text: "Both are used and both work when specified correctly. The practical differences matter more at the margins than in the middle of the field.",
      },
      {
        type: "ul",
        items: [
          "Plywood holds fasteners better than OSB of the same thickness, and it recovers better after getting wet — it swells and dries back closer to its original dimension.",
          "OSB is more dimensionally consistent panel to panel and typically flatter out of the pack, which helps with telegraphing.",
          "OSB swells irreversibly at the edges when wet, and swollen edges show as a grid of ridges through a metal pan. Keeping the deck dry before the panels go on is not optional.",
          "Both need a gap at panel edges for expansion — a nominal 1/8 inch — and both need to be laid with staggered joints and fully supported edges.",
          "Neither performs if it is installed wet or if it gets rained on and covered before it dries.",
        ],
      },
      {
        type: "h2",
        heading: "Board Decks",
        text: "Plenty of older houses and farm buildings around Smithville and the wider Niagara area have plank decks — nominal one-by-six or one-by-eight boards, sometimes laid solid, sometimes spaced as skip sheathing under cedar shingles. These decks are often structurally fine and sometimes better material than anything you can buy now. The problems are dimensional. Boards cup, twist and split. Gaps open between them as they shrink. Old nail holes are everywhere. Individual boards may be split through from a century of fastening.",
      },
      {
        type: "p",
        text: "The usual answer is to overlay the plank deck with new sheathing, which gives a continuous, flat, dry substrate for the membrane and a consistent material for fasteners. Skip sheathing with real gaps between boards has to be either overlaid or replaced — you cannot lay a continuous underlayment over open gaps and you cannot count on landing every clip screw on solid wood.",
      },
      {
        type: "h2",
        heading: "Flatness: Metal Tells On You",
        text: "This is the difference between a metal roof and a shingle roof that catches people out. A shingle roof is a field of small, overlapping, textured pieces, and it hides an uneven deck remarkably well. A standing seam panel is a long, flat, reflective plane, and it reads every deviation underneath it as a shadow line. A sagging rafter, a proud sheathing joint, a cupped board, a leftover nail, a lump of old adhesive — all of it shows.",
      },
      {
        type: "p",
        text: "So the deck prep for a metal roof is genuinely different in intent. Sweep it, pull every proud fastener, plane or sand down proud joints, sight along the planes with a string line, and address rafter sag before covering. A hump you can barely feel with your boot will be a visible line down the finished roof for the next fifty years.",
      },
      {
        type: "callout",
        text: "Deck condition cannot be assessed through a shingle roof. Soft spots underfoot and stains in the attic tell you something is wrong; they do not tell you how much. A written scope for a metal roof should include an allowance and a stated unit basis for deck replacement discovered at tear-off, so the conversation happens before the work does rather than in the middle of it.",
      },
      {
        type: "h2",
        heading: "What Gets Found at Tear-Off",
        text: "The predictable trouble spots are the same on nearly every house. Deck around chimneys, where old flashing was surface-caulked and has been leaking slowly. The bottom ends of valleys. The eaves on the north side, where ice dams put water back under the shingles for decades. Around plumbing stacks and old bathroom fan vents. Under any previous repair patch. Anywhere there was a second layer of shingles trapping moisture against the sheathing.",
      },
      {
        type: "h2",
        heading: "Structure Below the Deck",
        text: "The sheathing is only part of it. Before a metal roof goes on, the framing deserves a look from inside: rafter or truss sag, split rafters, cracked truss webs, previous alterations for a skylight or a chimney that were never properly headed off, and any deflection at the ridge. Ontario roofs carry real snow loads, and a metal roof does not add meaningfully to that load — steel panels are light compared with asphalt — but re-roofing is the one time in a building's life when the structure is accessible and worth checking.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "Can metal be installed over existing shingles?",
            a: "It is done, usually over strapping, and there are situations where it is defensible. But it hides the deck from inspection, it can trap moisture against the old shingles, it complicates every edge and penetration detail because of the added thickness, and it means the underlayment sits on an uneven surface. On a house intended to be lived in for the long term, a full tear-off to a clean deck is the better assembly.",
          },
          {
            q: "How do I know if my deck is bad before the shingles come off?",
            a: "You mostly do not. Walking the roof for soft spots, checking the attic for staining and daylight, and looking at the age and layer count of the existing roof give you an informed expectation. The real assessment happens with the shingles off, which is why the deck allowance should be discussed up front.",
          },
          {
            q: "Does a metal roof need thicker sheathing than shingles?",
            a: "Often, yes — not because the metal is heavier but because the fastening is different. Shingles are nailed in a dense pattern across the whole field; a standing seam roof concentrates uplift load into clip screws. The panel manufacturer states the minimum deck thickness for their system, and it should be checked against what is actually on the roof.",
          },
          {
            q: "What if only part of the deck is bad?",
            a: "Bad sheathing is replaced panel by panel, cutting back to the centre of a rafter so the new piece has full bearing on both edges. There is no reason to re-sheet a sound roof to fix three sheets over a chimney.",
          },
        ],
      },
    ],
  },
  {
    slug: "solid-deck-vs-open-purlins-metal-roofing",
    title: "Solid Deck vs Open Purlins for Metal Roofing",
    excerpt:
      "Panels can go on a continuous deck or straight onto strapping. The choice changes the panel span, the condensation risk, the sound, and how the roof handles wind.",
    readTime: "8 min read",
    category: "Metal Roofing",
    metaTitle: "Solid Deck vs Open Purlins for Metal Roofing Compared",
    metaDescription:
      "Comparing continuous sheathing and open purlin framing for metal roofs — panel span, condensation control, wind uplift, sound, and where each assembly belongs.",
    content: [
      {
        type: "p",
        text: "Metal panels can be installed two fundamentally different ways: over a continuous solid deck, or spanning between purlins with nothing but air behind them. Both are legitimate assemblies. They are not interchangeable, they do not share the same failure modes, and choosing the wrong one for the building is one of the more expensive mistakes available in this trade.",
      },
      {
        type: "h2",
        heading: "What Each Assembly Actually Is",
        text: "A solid deck assembly is continuous sheathing — plywood or OSB — over the rafters or trusses, covered with underlayment, with the panels fastened through to the deck. This is the standard residential assembly and what almost every architectural standing seam system is designed for. An open purlin assembly runs horizontal strapping across the rafters at a calculated spacing, with the panels screwed directly to the strapping and open air between them. It is the standard for agricultural buildings, shops, pole barns and pavilions.",
      },
      {
        type: "h2",
        heading: "The Panel Has to Carry the Span",
        text: "This is the first and most concrete difference. Over a solid deck, the deck carries the snow load and foot traffic and the panel just sits on it. Over open purlins, the panel itself has to span between supports and carry that load. Its ability to do so is a function of panel gauge, rib depth and rib spacing — which is exactly what a manufacturer's span table tells you, cross-referenced to a design load.",
      },
      {
        type: "p",
        text: "Southern Ontario snow loads are not trivial, and purlin spacing has to be derived from a span table for the actual load, not copied from the last building someone put up. Stretching the spacing to save a few pieces of strapping is how you end up with panels that deflect between purlins, oil can badly, and eventually deform permanently under a heavy winter.",
      },
      {
        type: "h2",
        heading: "Condensation Is the Real Open-Purlin Problem",
        text: "Every experienced installer in this climate has been called to the same job: a heated shop or a barn with a metal roof on open purlins that rains on the inside. Nothing is leaking. Warm, moist interior air rises, contacts the underside of a panel that is sitting at outdoor temperature, and condenses. It collects, runs down the underside of the rib, and drips onto whatever is below. In winter it can freeze on the panel underside and then release all at once during a thaw, which people invariably report as a roof leak.",
      },
      {
        type: "ul",
        items: [
          "A solid deck with continuous underlayment gives the moisture a much less favourable surface to condense on and a path to dry, which is why the problem is far less common on housed roofs.",
          "On open purlins, condensation has to be designed for: a factory-applied anti-condensation backing on the panel, a purpose-made condensation-control blanket, insulation with a properly placed vapour retarder, or a genuinely ventilated cavity.",
          "The one thing that never works is doing nothing and hoping the building is dry enough. Any heated, humid or animal-occupied space will produce moisture.",
          "Retrofitting condensation control to an installed open-purlin roof usually means working from below with spray foam or a lined ceiling — considerably more awkward than getting it right the first time.",
        ],
      },
      {
        type: "h2",
        heading: "Wind Uplift",
        text: "A solid deck spreads uplift load across a continuous surface and gives every fastener a consistent substrate. On purlins, uplift concentrates at the fastener lines, and the load path runs panel to screw to purlin to the fastening of the purlin to the rafter. That last connection — strapping to rafter — is frequently the weak point, and it is invisible once the roof is on. Perimeter and corner zones see the highest uplift on any roof, and on a purlin assembly those zones need tighter fastener spacing and better attention to how the strapping itself is secured.",
      },
      {
        type: "h2",
        heading: "Sound, Walkability and Feel",
        text: "A metal roof over a solid deck with underlayment is quiet in the rain — the mass and the damping of the deck absorb the impact, and the common belief that metal roofs are loud comes almost entirely from experience with open-purlin barn roofs, where the panel is a drum head with nothing behind it. Walkability is the same story: on a deck you can walk the roof normally; on purlins you have to know where the strapping is, because stepping between purlins dents a panel and the dent is permanent.",
      },
      {
        type: "callout",
        text: "Architectural standing seam and structural standing seam are not the same product. Architectural panels are designed to be supported continuously and are not rated to span open framing. Structural panels are engineered to span between supports. Putting an architectural panel on purlins because it looked similar in the brochure is a straightforward way to end up with a deflecting, oil-canned roof.",
      },
      {
        type: "h2",
        heading: "Strapping Over an Existing Roof",
        text: "There is a third arrangement worth naming: strapping laid over an existing shingle roof, with panels fastened to the strapping and screwed through into the rafters. It creates a ventilated cavity behind the panels, which helps with heat, and it avoids a tear-off. The trade-offs are real. The deck is never inspected. Moisture can be trapped against the old shingles. Every eave, rake, penetration and wall detail now has to accommodate the extra thickness, which is where these jobs usually look wrong. And the fasteners have to reliably reach structure through the strapping, the shingles and the sheathing.",
      },
      {
        type: "h2",
        heading: "Choosing Between Them",
        text: "For a house — anything heated, occupied, and expected to look sharp from the street — a solid deck is the assembly. It gives you a continuous secondary water barrier, quiet performance, a flat surface so the panels look right, and the fastener holding a clip system needs. For an unheated equipment shed, a pole barn or a pavilion, open purlins are efficient and appropriate, provided the span is derived from a real table and the condensation question is answered honestly. For a heated shop, treat it as a house.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "Why is my shop roof dripping when nothing is leaking?",
            a: "Almost certainly condensation on the underside of the panels. Warm moist air inside meets cold steel and gives up its moisture. The fixes are all about controlling the moisture and the temperature of that surface — insulation with the vapour control on the warm side, a condensation-control layer, or ventilation — not about sealing the roof.",
          },
          {
            q: "What purlin spacing should I use?",
            a: "Whatever the panel manufacturer's span table gives for your panel profile, gauge and design snow load. Spacing is a structural answer, not a habit, and it changes with the panel.",
          },
          {
            q: "Can standing seam go over open purlins?",
            a: "Structural standing seam profiles are designed to, within their published span limits. Architectural standing seam is not — it requires continuous support. Check which one you have before the framing goes up.",
          },
          {
            q: "Is a solid deck worth adding to a barn re-roof?",
            a: "It depends on what the building is used for. For unheated storage, usually not. For anything heated, occupied by livestock, or used as a workshop, a deck or an equivalent condensation strategy is what keeps the building dry, and it is far easier to do during a re-roof than afterward.",
          },
        ],
      },
    ],
  },
  {
    slug: "metal-roof-fasteners-screws-and-clips",
    title: "Fasteners for Metal Roofing: Screws, Clips and Where Each Is Used",
    excerpt:
      "Exposed screws, hidden clips, stitch screws and deck fasteners all do different jobs. Getting the wrong one — or driving the right one badly — is the most common cause of leaks.",
    readTime: "9 min read",
    category: "Metal Roofing",
    metaTitle: "Metal Roofing Fasteners: Screws, Clips and Correct Use",
    metaDescription:
      "How metal roofing fasteners work — exposed gasketed screws, fixed and floating standing seam clips, stitch screws — and the driving errors that cause leaks.",
    content: [
      {
        type: "p",
        text: "More metal roofs leak at fasteners than anywhere else, and it is rarely because the fastener was defective. It is because it was the wrong type for the application, or it was driven at the wrong angle, or to the wrong depth, or into something that could not hold it. Fasteners are the part of a metal roof that requires the most judgment per unit of material, and the part most often treated as though it requires none.",
      },
      {
        type: "h2",
        heading: "Exposed Fastener Screws",
        text: "On exposed-fastener panels — agricultural profile, corrugated, ribbed panel — the screw goes through the face of the panel and is visible. It is a hex-head screw with a bonded washer, usually EPDM rubber vulcanized to a metal cap, and that washer is the entire waterproofing strategy for the hole the screw just made.",
      },
      {
        type: "p",
        text: "Driving depth is everything. The washer needs to be compressed just enough to spread slightly beyond the edge of the metal cap. Under-drive it and the washer never seals, leaving a hole with a rubber disc loosely covering it. Over-drive it and the washer squeezes out from under the cap, the rubber extrudes and tears, and the panel dimples into a small crater that holds water around the fastener. Both leak, and over-driving is by far the more common of the two because it happens in a fraction of a second with a high-torque driver.",
      },
      {
        type: "ul",
        items: [
          "Use a screw gun with an adjustable depth-sensitive nose or a well-set clutch. An impact driver has no depth control and will overdrive every screw it touches.",
          "Drive perpendicular to the panel. A screw driven at an angle compresses one side of the washer and leaves the other side open.",
          "In North American practice, exposed screws on ribbed panels are generally driven in the flat of the panel so the fastener pulls the panel down against its support. Follow the panel manufacturer's stated pattern.",
          "Land every screw on solid structure. A screw into open sheathing between purlins holds nothing and will back out.",
          "Match the fastener metallurgy to the panel. Coated carbon steel and stainless-capped screws are the common choices; putting bare galvanized fasteners against an aluminum panel invites galvanic corrosion.",
        ],
      },
      {
        type: "h2",
        heading: "Why Exposed Fasteners Eventually Need Attention",
        text: "Exposed-fastener roofs are legitimate systems and they have their place, particularly on agricultural and utility buildings. But the fasteners are consumable in a way that hidden-clip systems are not. Every day the panel expands and contracts around a rigidly fixed screw, working the hole slightly larger. Sunlight and ozone slowly harden the rubber washer. Over years, holes elongate, washers go brittle, and screws back out. This is why an exposed-fastener roof gets inspected and re-screwed periodically, and it is the single biggest functional difference between that system and standing seam.",
      },
      {
        type: "h2",
        heading: "Standing Seam Clips",
        text: "Standing seam moves the fastener out of the water. A clip sits on the deck at the panel seam, is screwed down to the sheathing, and its upstand is captured inside the seam when the adjoining panel is engaged and the seam is closed. The panel face is never penetrated in the field of the roof, so there is no hole to leak and no washer to age.",
      },
      {
        type: "h3",
        heading: "Fixed Clips",
        text: "A fixed clip is a single piece of metal. Once the seam is closed over it, the panel is held rigidly at that point. Fixed clips are appropriate on short panel runs, where the total thermal movement over the length of the panel is small enough that nothing is stressed. Manufacturers publish the run length above which fixed clips are no longer acceptable, and that threshold is not a suggestion.",
      },
      {
        type: "h3",
        heading: "Floating Clips",
        text: "A floating clip is two pieces: a base that screws to the deck, and a tab that engages the seam and slides within the base. The panel can lengthen and shorten while the base stays put. On longer runs this is mandatory. It is also why a standing seam panel is fixed at one point only — usually at the ridge or at the eave — so the movement has a defined direction and the panel is not fighting itself from both ends.",
      },
      {
        type: "h2",
        heading: "Clip Spacing and Uplift Zones",
        text: "Clip spacing in the field of the roof comes from the manufacturer's tested assembly for the design wind load. What catches people out is that the spacing is not uniform across the roof. Wind uplift is far higher along the perimeter — the eaves and the rakes — and higher again at the corners, where flow separates over two edges at once. Those zones need tighter clip spacing, and a roof laid out with one spacing everywhere is under-fastened exactly where it will be tested first.",
      },
      {
        type: "h2",
        heading: "Deck Fasteners, Stitch Screws and Everything Else",
        text: "The clip screw itself is usually a pancake-head or wafer-head wood screw chosen so that it seats flush and does not interfere with the panel. Nails are not an equivalent — the withdrawal resistance of a threaded fastener in sheathing is what the uplift calculation depends on. Stitch screws are short, small-diameter self-drilling screws with sealing washers used to join metal to metal: panel end laps, trim laps, closures, and ridge caps to panel ribs. They fasten sheet to sheet, not sheet to structure, and they are almost always paired with butyl in the joint they are closing.",
      },
      {
        type: "callout",
        text: "Never mix incompatible metals in a wet assembly. Copper fasteners against a Galvalume panel, bare steel against aluminum, or a mismatched trim material against a panel will set up a galvanic cell that eats the less noble metal wherever water sits. On a roof, water sits at fasteners. Keep the fastener, the panel and the trim in the same metallurgical family.",
      },
      {
        type: "h2",
        heading: "Where Fasteners Should Not Be",
        text: "There is an equally important list of places a fastener does not belong. Not through the face of a standing seam panel in the field of the roof. Not through the pan of a valley. Not through the visible face of a trim where a cleat could do the job. Not through a panel into a chimney curb or a wall, pinning a panel that needs to move. A useful rule for reviewing a detail: if a fastener is the only thing keeping the water out, redesign the detail so that geometry keeps the water out and the fastener only holds things in place.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "How often do exposed screws need to be replaced?",
            a: "There is no fixed schedule — it depends on the fastener quality, the panel movement, the exposure, and how well they were driven originally. The practical approach is to inspect them periodically, look for backed-out screws, cracked or flattened washers, and rust around the heads, and replace as needed with a slightly larger diameter fastener where a hole has elongated.",
          },
          {
            q: "Why are my screws backing out?",
            a: "Usually one of three things: they were driven into sheathing rather than solid structure, they were overdriven so the threads stripped the wood, or the panel is long enough that thermal cycling has worked the holes oversized. All three are addressed by relocating or upsizing the fastener into sound material.",
          },
          {
            q: "Can I use an impact driver to install a metal roof?",
            a: "Not for gasketed fasteners. An impact driver delivers uncontrolled torque and will overdrive and destroy sealing washers. Use a screw gun with a depth-setting nose so every washer is compressed identically.",
          },
          {
            q: "Do standing seam clips ever need maintenance?",
            a: "No. They are inside the seam, protected from water and sunlight, and there is nothing to service. That inaccessibility is exactly why the deck they are screwed into, and the fasteners themselves, need to be right the first time.",
          },
          {
            q: "Should the screws go in the flat or on the rib?",
            a: "Both approaches exist in the industry. North American ribbed-panel practice generally puts the fastener in the flat so the panel is pulled tight to its support; crest fastening is used in some markets and requires a profiled spacer. The panel manufacturer's installation instructions decide it for their product, and mixing approaches on one roof is a mistake.",
          },
        ],
      },
    ],
  },
  {
    slug: "butyl-tape-sealants-closures-metal-roof",
    title: "Butyl Tape, Sealants and Closures in a Metal Roof Assembly",
    excerpt:
      "Butyl seals compressed joints. Gunnable sealant seals gaps. Foam closures block air and snow. Confusing the three — or using hardware store silicone — is how details fail.",
    readTime: "8 min read",
    category: "Metal Roofing",
    metaTitle: "Butyl Tape, Sealants and Closures for Metal Roofs",
    metaDescription:
      "How butyl tape, gunnable sealants and foam closures work in a metal roof assembly, what each one is for, and the sealant mistakes that cause premature failures.",
    content: [
      {
        type: "p",
        text: "Metal roofing has three completely different products that homeowners and even some crews lump together as caulking. Butyl tape, gunnable sealant and foam closures do unrelated jobs, fail in unrelated ways, and are not substitutes for one another. Getting them straight is a fair proxy for whether someone knows the trade.",
      },
      {
        type: "h2",
        heading: "Butyl Tape: A Compression Sealant",
        text: "Butyl tape is a soft, non-curing, non-skinning sealant supplied on a roll with a release paper. It never hardens, never skins over, and does not shrink as it ages, which is exactly what a metal joint needs — the joint moves, and the sealant has to keep contact through that movement for decades. It comes in a range of cross-sections, commonly rectangular tapes around an eighth of an inch thick and a round bead for seam applications.",
      },
      {
        type: "p",
        text: "The critical word is compression. Butyl works when it is squeezed between two surfaces and held there by mechanical fastening. Laid on a surface and left, it does nothing. So the correct sequence is always: clean the surfaces, apply the tape to one of them, bring the second surface down onto it, and then fasten through or beside the tape so that the joint is clamped tight. Where you will find it on a properly built roof: panel end laps, trim laps, under eave and rake trim legs, behind ridge closures, at panel-to-flashing junctions, and as an in-seam sealant on mechanically seamed panels running at low slope.",
      },
      {
        type: "h2",
        heading: "Gunnable Sealants",
        text: "Gunnable sealants fill gaps that cannot be closed by compression — the cut end of a rib, the junction of a boot and a pipe, a small void where three planes meet. They are a finishing product, used at a handful of locations, not a construction method.",
      },
      {
        type: "ul",
        items: [
          "Polyurethane and MS polymer sealants are the general-purpose choice for exposed metal detailing: they adhere well to coated steel, stay flexible through freeze-thaw, and can be tooled and painted.",
          "Neutral-cure silicone is used where a manufacturer specifies it, notably at some pipe boot collars. Acid-cure silicone has no place on a coated metal roof.",
          "Hardware store general-purpose silicone is the wrong product. It adheres poorly to coated panel, cannot be painted, cannot be sealed over once it fails, and its failure mode is peeling away in one piece while looking intact from above.",
          "Asphalt roof cement does not belong anywhere on a metal roof. It stains, it bleeds in heat, it becomes brittle in cold, and it can attack panel coatings.",
          "Whatever is used has to be applied to a clean, dry, oil-free surface. New panels often carry mill oil, and sealant over mill oil is sealant that will let go.",
        ],
      },
      {
        type: "h2",
        heading: "Closures",
        text: "A closure is a shaped filler that blocks the gap left where a profiled panel meets a flat surface — under a ridge cap, at the eave of a ribbed panel, at a headwall. Foam closures are moulded to match a specific panel profile. Inside closures fill the gap under the panel; outside closures fill the gap on top of it. Metal closures are formed sheet doing the same job in a more durable material.",
      },
      {
        type: "p",
        text: "A closure is not a sealant. Left on its own, foam is a rodent barrier, an insect barrier, and a way to stop wind-driven snow from packing under a ridge cap. It is not watertight. To make the joint watertight, butyl goes on both faces — between the closure and the panel, and between the closure and the trim above it — and the assembly is fastened so both butyl beads are compressed. Foam alone at a ridge, which is common on quick jobs, blows out, absorbs water, degrades in sunlight where it is exposed, and lets blowing snow in.",
      },
      {
        type: "callout",
        text: "The governing principle in metal roofing detailing: water is shed by geometry, not by sealant. Laps, hems, upturned legs, cleats and overlaps do the work. Sealant is the secondary line — it buys time and it closes what geometry cannot. Any detail whose watertightness depends entirely on a bead of caulking is a detail with a scheduled failure date.",
      },
      {
        type: "h2",
        heading: "The Ontario Temperature Range",
        text: "A sealant on a metal roof in Southern Ontario has to remain functional from a deep-winter panel temperature well below zero to a summer surface temperature that will make you pull your hand back. It has to do that through repeated freeze-thaw cycling, with the joint opening and closing beneath it as the panel moves. That range eliminates a lot of products that perform fine in a milder climate. Butyl's low-temperature flexibility is a large part of why it is the default for compressed joints here, and it is why cheap acrylic caulks crack out of a joint within a couple of winters.",
      },
      {
        type: "h2",
        heading: "Application Details That Decide the Outcome",
        text: "Apply butyl in a continuous run with no gaps and no stretching — pulling the tape thin as you unroll it leaves a section with almost no material in it. At corners, do not butt two pieces; overlap them and press the joint. Keep the tape back from the visible edge of a lap so it is not squeezed out where it will collect dust and show. Fasten promptly after placing the tape; butyl picks up dirt and loses adhesion once it has sat open. And in cold weather, warm the rolls before use — cold butyl does not wet out onto the metal and the bond suffers.",
      },
      {
        type: "h2",
        heading: "What Failure Looks Like",
        text: "Sealant failures on a metal roof are usually visible from the ground once you know what to look for. A dark streak running down from a trim lap is butyl that was never compressed and is now weeping. A ridge cap with foam visible and crumbling at the edges is a closure that was installed without butyl and has been sunburnt. A wall flashing with a fat bead of caulking smeared along its top edge, cracked and pulling away, is a detail that was never built correctly and was sealed in hope.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "How long does butyl tape last in a metal roof?",
            a: "Inside a compressed, protected joint where it is out of sunlight, butyl is extremely long-lived — it does not cure, so it does not have a cure to break down. What shortens its life is exposure to UV, contamination at the time of installation, or a joint that was never properly clamped in the first place.",
          },
          {
            q: "Can I just caulk a leaking screw?",
            a: "It is a stopgap, not a fix. A leaking exposed fastener is leaking because the washer failed or the hole has elongated, and caulking over the head does not address either. The repair is to remove the screw, assess the hole, and replace it with a correctly sized fastener and a new sealing washer, upsizing the diameter if the hole has worn.",
          },
          {
            q: "Should every panel lap have sealant in it?",
            a: "End laps, yes — a horizontal lap on a sloped roof is a joint water will sit in and be driven up into. Side laps depend on the system and slope; the manufacturer specifies whether in-lap sealant is required, and it usually is at lower pitches.",
          },
          {
            q: "Why is roof cement such a problem on metal?",
            a: "It stains anything it touches and cannot be cleaned off a coated panel, it softens and runs in summer heat, it goes brittle and cracks in winter, and the petroleum in it can affect panel coatings. It also makes any future repair in that area messy and unreliable, because nothing bonds properly to a surface that has had roof cement on it.",
          },
        ],
      },
    ],
  },
  {
    slug: "thermal-expansion-contraction-metal-roof",
    title: "Thermal Expansion and Contraction: How a Metal Roof Is Designed to Move",
    excerpt:
      "A long steel panel can change length by more than half an inch between a January night and a July afternoon. Every good metal roof detail exists to let that happen freely.",
    readTime: "8 min read",
    category: "Metal Roofing",
    metaTitle: "Thermal Movement in Metal Roofs: How Panels Are Designed to Move",
    metaDescription:
      "How much a metal roof panel actually moves with temperature, how floating clips and hems accommodate it, and what fails when a panel is pinned at both ends.",
    content: [
      {
        type: "p",
        text: "Every metal roof on every building is moving right now. Not much, and not quickly, but continuously — lengthening through the morning as the sun comes onto it, shortening through the evening as it radiates heat back to the sky. The difference between a roof that lasts and one that starts leaking in its second decade is almost entirely whether the assembly was built to let that happen freely or to fight it.",
      },
      {
        type: "h2",
        heading: "How Much Movement Are We Talking About?",
        text: "The arithmetic is straightforward. Steel has a coefficient of thermal expansion of roughly 0.0000065 inches per inch per degree Fahrenheit. Aluminum is about twice that. Take a 40-foot steel panel — 480 inches — and a realistic Southern Ontario surface temperature swing. A dark panel on a still, sunny July afternoon gets very hot; the same panel on a clear January night sits well below the air temperature because it radiates to the sky. A 190 degree Fahrenheit swing between those two extremes is not exotic.",
      },
      {
        type: "p",
        text: "480 inches times 0.0000065 times 190 gives about 0.59 inches. Nearly five-eighths of an inch of length change on a single panel, between its coldest and hottest states. An aluminum panel of the same length moves roughly twice that. That movement has to go somewhere, and it does not care what your fastening schedule looks like.",
      },
      {
        type: "h2",
        heading: "The Fixed Point",
        text: "A standing seam panel is anchored at exactly one location along its length, and free everywhere else. That anchor is the fixed point, and where it goes determines the direction the panel grows.",
      },
      {
        type: "ul",
        items: [
          "Fixed at the ridge, free at the eave: the panel grows downhill. This keeps the top of the panel tight to the ridge detail and lets the eave hem slide on its cleat. It is the more common arrangement on steeper roofs.",
          "Fixed at the eave, free at the ridge: the panel grows uphill. Used where the eave detail needs to be rigid, and it requires a ridge detail with enough room for the panel to advance into.",
          "Either way, only one end is fixed. Fastening both ends is the fundamental error.",
          "Fixed clips near the anchor point and floating clips through the rest of the run is a common way this is implemented; the manufacturer's instructions define the pattern.",
        ],
      },
      {
        type: "h2",
        heading: "How the Details Accommodate the Movement",
        text: "Floating clips are the main mechanism — a base screwed to the deck, and a tab captured in the seam that slides in that base. But the whole assembly participates. The eave hem hooks over a continuous cleat rather than being screwed down, so it can slide along it. The panel's upper end has an upturned leg that sits in a ridge closure with clearance rather than being pinned to it. Trim laps are made with a slip joint on long runs. Wall flashings hook and hem rather than screwing through the panel. Slotted holes appear where a fastener must pass through something that will move relative to something else.",
      },
      {
        type: "callout",
        text: "The most damaging single mistake in metal roofing is fastening a long panel rigidly at both ends. It looks solid on installation day. Over the following seasons the panel has nowhere to grow, so it buckles in the field, the clips elongate their screw holes, seams begin to open, and the eave or ridge detail is progressively pulled apart. By the time it leaks, the damage is distributed along the entire panel.",
      },
      {
        type: "h2",
        heading: "Panel Run Length Limits",
        text: "Because movement scales with length, every standing seam system has a run length beyond which the manufacturer requires floating clips, and often a further length beyond which the roof needs to be broken into separate runs with an expansion detail between them. On a long, low-slope run — a commercial building, a large agricultural roof, a long shed dormer — that transition detail is not optional trim, it is a structural provision. The alternative is a panel run so long that even floating clips reach the end of their travel.",
      },
      {
        type: "h2",
        heading: "Oil Canning: Related but Not the Same",
        text: "Oil canning is the visible waviness in the flat area of a metal panel. It is not a structural defect and it is not a leak, and it is an inherent characteristic of light-gauge formed metal — every manufacturer says so. But thermal stress is one of its contributors, alongside deck irregularity, residual stress in the coil, over-tight clips and handling during installation.",
      },
      {
        type: "p",
        text: "The practical mitigations are worth knowing because they are decisions made before the panels arrive. Narrower panels oil can less than wide ones. Striations or a pencil rib rolled into the pan break up the flat surface and dramatically reduce the visible effect. Heavier gauge material is stiffer. A genuinely flat deck removes the single biggest contributor. Properly set floating clips let thermal stress relieve itself instead of accumulating in the pan. Low-gloss and matte finishes show far less than a high-gloss finish, because oil canning is only visible through reflection.",
      },
      {
        type: "h2",
        heading: "The Noise",
        text: "Homeowners with new metal roofs sometimes call about ticking or popping sounds in the late afternoon and again after sunset. That is thermal movement — panels advancing or retreating against clips and cleats. It is normal, it is not a sign of anything coming loose, and it settles down as the assembly beds in. Where it is pronounced, the usual causes are a slightly tight clip somewhere in the run, or panel-to-deck contact without an effective slip surface. A proper underlayment doubles as a slip sheet and reduces it.",
      },
      {
        type: "h2",
        heading: "Exposed Fastener Panels and Movement",
        text: "This is where the difference between the two systems becomes concrete. An exposed-fastener panel is rigidly pinned at every screw, which means it cannot move as a panel — instead, the movement is absorbed at each fastener, working every hole slightly larger, cycle after cycle. Over enough years the holes elongate and the washers can no longer bridge them. That is the mechanism behind the well-known pattern of long exposed-fastener roofs developing leaks at fasteners over time, and it is why panel run lengths on those systems matter too.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "Why does my metal roof tick in the evening?",
            a: "The panels are contracting as they cool and moving against their clips and cleats. It is thermal movement working exactly as designed. It is most noticeable in the first year and typically quietens as the assembly settles.",
          },
          {
            q: "Is oil canning a defect I can have fixed?",
            a: "Manufacturers universally class it as an aesthetic characteristic rather than a defect, and it cannot be removed from an installed panel. It is managed at the specification stage — narrower panels, striations or a pencil rib, heavier gauge, a matte finish, and above all a flat deck.",
          },
          {
            q: "Does panel colour affect how much the roof moves?",
            a: "Yes. A dark panel absorbs more solar radiation and runs hotter, so it reaches a higher peak temperature and therefore a larger total swing than a light one on the same roof. The difference is real but it does not change the design approach — the roof is detailed to move regardless.",
          },
          {
            q: "How long can a standing seam panel run be?",
            a: "It depends on the system, the clip type and the material — aluminum moves about twice as much as steel for the same length. The manufacturer publishes maximum run lengths for fixed and floating clip arrangements, and beyond a certain length the roof has to be broken up with an expansion detail.",
          },
        ],
      },
    ],
  },
  {
    slug: "metal-roof-ridge-caps-vented-ridge",
    title: "Ridge Caps and Vented Ridge Assemblies on a Metal Roof",
    excerpt:
      "The ridge is the highest point on the roof and the place warm air leaves the attic. It has to shed water, exhaust air, resist blowing snow, and let the panels move.",
    readTime: "8 min read",
    category: "Metal Roofing",
    metaTitle: "Metal Roof Ridge Caps and Vented Ridge Assemblies",
    metaDescription:
      "How metal roof ridge caps are built, how vented ridge assemblies work, why intake ventilation must be balanced, and how to keep blowing snow out.",
    content: [
      {
        type: "p",
        text: "The ridge does two jobs that pull in opposite directions. It has to close the top of the roof against rain and wind-driven snow, and on most houses it also has to be the exhaust point for the attic ventilation. Building an opening that lets air out and keeps weather out is the whole problem, and in a climate with blowing snow it is harder than it looks.",
      },
      {
        type: "h2",
        heading: "What Happens at the Top of the Panel",
        text: "Before any cap goes on, the panel itself has to be terminated properly. On a standing seam roof, the top of each panel gets an upturned leg — a bend at the panel end, made with a hand seamer or a hemming tool, typically an inch or two high. That leg is what stops water running up the panel under wind pressure and over the top edge into the assembly. A panel simply cut off square at the ridge, with the cap laid over it, has no such stop, and wind-driven rain will walk right up the pan.",
      },
      {
        type: "p",
        text: "Behind that leg sits a Z-closure or offset cleat, fastened to the deck, running the length of the ridge. The ridge cap engages that closure. This is what allows the cap to be secured without driving screws through the face of the panel — which would pin a panel that is supposed to be free to move.",
      },
      {
        type: "h2",
        heading: "The Cap Itself",
        text: "The ridge cap is formed sheet, folded to the roof angle, wide enough to cover the closure and the panel ends on both sides with a generous margin. Individual lengths lap — commonly around six inches — with butyl tape in the lap, and the lap runs so that the prevailing weather does not drive into it. The ends of the ridge, where the cap runs out at the gable, get a formed end cap or a folded closure; an open cap end is an invitation to wind-driven rain, snow, wasps and birds.",
      },
      {
        type: "ul",
        items: [
          "Match the cap material, gauge and finish to the panels. A lighter-gauge cap in a slightly different colour is visible from the ground for the life of the roof.",
          "Lap uphill over downhill on hips; on a horizontal ridge, lap with the prevailing wind at your back.",
          "Butyl in every lap, compressed by the stitch fasteners — not a bead of caulk smeared over the outside afterwards.",
          "Fasten to the closure and to the panel high ribs where the system calls for it, never through the flat pan of a floating panel.",
          "On exposed-fastener panels, the cap sits on profile-matched foam closures with butyl on both faces of the closure.",
        ],
      },
      {
        type: "h2",
        heading: "Vented Ridge Assemblies",
        text: "To vent at the ridge, a slot is cut through the sheathing on each side of the ridge board, leaving the structural ridge intact and stopping short of the ends of the roof. A profiled vent material — a purpose-made mesh or baffled plastic product sized for the panel — sits over the slot, and the ridge cap goes over that. The vent holds the cap up off the roof, keeps the opening clear, and provides the resistance that stops wind blowing straight through.",
      },
      {
        type: "p",
        text: "The important specification is net free area: the actual open area the vent provides per running foot, after accounting for the mesh or baffle. It is published for every vent product and it is the number that gets balanced against the intake. A vent that looks generous can have modest net free area once the filter material is accounted for.",
      },
      {
        type: "callout",
        text: "A ridge vent without adequate soffit intake is worse than no ridge vent. With no low intake, the ridge cannot draw fresh air up the underside of the deck. Instead it pulls conditioned air out of the house through every ceiling penetration — potlights, bath fans, the attic hatch — which increases heating costs and carries moisture into the attic, where it condenses on the cold deck. Intake first, exhaust second.",
      },
      {
        type: "h2",
        heading: "Balancing Intake and Exhaust",
        text: "The rule of thumb the trade works to is a total ventilation area of roughly one square foot of net free area for every 300 square feet of insulated ceiling area, split approximately evenly between low intake and high exhaust, with a more generous ratio used where a vapour barrier is absent or the split is unbalanced. Your local building department sets the actual requirement, and the specifics of an assembly can change the answer. What holds regardless is the split: exhaust at the ridge only works if there is at least as much intake at the eaves.",
      },
      {
        type: "p",
        text: "In practice, the intake side is where most Ontario houses fall down. Soffit vents get painted over, blocked by blown-in insulation that has drifted into the eave, or were never adequate to begin with. Installing baffles at the eave to hold the insulation back and keep a clear air path is part of doing a ridge vent properly, and it happens during the re-roof when the eave is accessible.",
      },
      {
        type: "h2",
        heading: "Blowing Snow",
        text: "This is the Ontario-specific failure. In a driving snowstorm, fine snow behaves like a fluid and is carried through any opening the airstream can reach. A poorly baffled ridge vent will pass snow into the attic, where it melts on the next mild day and shows up as a ceiling stain that everyone assumes is a roof leak. The mitigations are a vent with an external wind baffle that deflects the airstream up and over the opening, an internal filter or mesh, and the vent stopping well short of the gable ends where wind pressure is highest.",
      },
      {
        type: "h2",
        heading: "Do Not Mix Exhaust Types",
        text: "A house with a continuous ridge vent should not also have gable louvres or a powered attic fan on the same attic space. Multiple exhaust points at different heights short-circuit the intended airflow: the ridge vent nearest a gable louvre will draw air in from the louvre rather than up from the soffits, so the deck over the far side of the attic gets no flow at all. During a metal re-roof is the natural time to decide on one strategy and close the others off.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "Does a metal roof need a ridge vent?",
            a: "If the assembly is a vented attic or a vented cathedral ceiling, yes — the roof needs a high exhaust point, and the ridge is the best one. If it is a designed unvented assembly with insulation in contact with the deck and the vapour control handled correctly, it does not, and cutting a ridge slot in that assembly would be a mistake.",
          },
          {
            q: "Will snow blow in through a metal ridge vent?",
            a: "It can, if the vent is not designed for it. Use a vent product with an external wind baffle and a filter, terminate it short of the gable ends, and make sure it is the right profile for the panel so there are no unintended gaps under the cap.",
          },
          {
            q: "Can I use a shingle-style rolled ridge vent under a metal cap?",
            a: "Only if the product is rated for use under metal and matches the panel profile. Rolled vents made to sit under cap shingles are not shaped to seal against a ribbed or seamed panel, and the resulting gaps are exactly where snow gets in.",
          },
          {
            q: "What if the house has no soffits to vent from?",
            a: "Houses with no overhang, or with cathedral ceilings and no clear air path, need a different strategy — edge intake vents at the fascia, a vented over-roof assembly, or an unvented design with the insulation and vapour control detailed for it. Putting a ridge vent on a roof with no possible intake creates problems rather than solving them.",
          },
        ],
      },
    ],
  },
  {
    slug: "metal-roof-drip-edge-eave-detailing",
    title: "Drip Edge and Eave Detailing on a Metal Roof",
    excerpt:
      "The eave is where wind uplift starts, where ice dams form, and where every drop of water on the roof eventually goes. The detail there does more work than any other.",
    readTime: "8 min read",
    category: "Metal Roofing",
    metaTitle: "Metal Roof Drip Edge and Eave Detailing Guide",
    metaDescription:
      "How eave trim, cleats and panel hems work on a metal roof, the correct underlayment sequence, and why the eave is the most critical detail for wind and ice.",
    content: [
      {
        type: "p",
        text: "If you want to know whether a metal roof was installed by someone who understands the system, look at the eave. It is the most heavily loaded detail on the roof: the highest wind uplift, the place ice dams form, the termination point for the deck, the underlayment and the panels, and the handoff to the eavestrough. It is also the detail most often reduced to a piece of bent metal and a row of screws.",
      },
      {
        type: "h2",
        heading: "What the Eave Detail Has to Do",
        text: "Four things at once. It has to carry water off the deck and clear of the fascia so it lands in the trough rather than running down the face of the house. It has to terminate and protect the edge of the underlayment and the sheathing. It has to anchor the bottom of the panel against uplift, which is where wind loads are highest. And it has to do all of that while letting the panel slide as it expands and contracts.",
      },
      {
        type: "h2",
        heading: "Eave Trim and the Cleat",
        text: "There are two common arrangements. The simpler one uses a one-piece eave trim with a hemmed lower edge that acts as a drip kick, and a vertical leg on the roof side that the panel hooks over. The better one uses a separate continuous cleat: a strip of formed metal fastened to the deck along the eave, with the eave trim installed and then the panel end hemmed and locked over the cleat.",
      },
      {
        type: "p",
        text: "The cleat approach is worth the extra step. A continuous cleat holds the entire length of the panel edge rather than resisting uplift at discrete fastener points, and the hooked hem lets the panel slide along the cleat as it moves. It also puts no fastener through the panel face at the most weather-exposed line on the roof.",
      },
      {
        type: "h2",
        heading: "The Panel Hem",
        text: "The lower end of a standing seam panel is bent back on itself — a hem of roughly three-quarters of an inch to an inch — and hooked over the cleat, then closed with a hand seamer. Two things happen. Mechanically, the panel is locked down along its full width, so wind cannot get under the edge and peel it. Hydraulically, the hem breaks capillary action: without it, surface tension can draw water back around a raw panel edge and onto the fascia, which is how you get staining and rot on a roof that never actually leaked.",
      },
      {
        type: "ul",
        items: [
          "Hem allowance has to be added when panels are cut to length. Forgetting it produces panels that are short at the eave and there is no fixing that.",
          "The cleat is fastened at close centres — tighter than you might expect, and tighter again in high-exposure locations. It is doing structural work.",
          "Trim laps run around one to two inches with butyl in the lap, and the fastening should not show on the exposed face.",
          "Use trim of the same gauge and finish as the panel. Thin, flimsy edge metal flutters in wind and telegraphs every fastener.",
          "The trim should project past the fascia far enough that drips land inside the eavestrough — commonly an inch or so — but not so far that it becomes a lever for wind.",
        ],
      },
      {
        type: "h2",
        heading: "Underlayment Sequence",
        text: "The traditional convention is that at the eave the drip edge goes down on the deck first and the ice barrier membrane laps over its roof-side flange, so water reaching the membrane drains out over the metal. At the rake it reverses: membrane first, trim over. Metal panel systems frequently use a variation on this, with the eave trim or cleat set over a self-adhered membrane and bedded into it. Follow the panel manufacturer's eave detail, and sanity-check it against the principle: at every layer, water moving downhill should end up on top of the layer below, never behind it.",
      },
      {
        type: "callout",
        text: "Wind failures on roofs start at the edges. Uplift pressure is highest along the eaves and rakes and highest of all at the corners, because that is where airflow separates from the building. A field of the roof that is properly clipped means nothing if the eave is held down by a few widely spaced screws through the panel face. This is the detail to spend attention on.",
      },
      {
        type: "h2",
        heading: "Ice, Snow and the Eavestrough",
        text: "Two Ontario-specific issues meet at the eave. The first is ice damming: heat loss melts snow on the warm part of the roof, the meltwater refreezes over the cold overhang, and water backs up behind the ridge of ice. That is why self-adhered membrane runs from the roof edge well past the interior face of the exterior wall, and why the eave metal must lap correctly over it.",
      },
      {
        type: "p",
        text: "The second is snow shedding. A metal roof sheds snow, sometimes in one large release, and the eavestrough is directly in the path. Hanger spacing needs to be tighter than a shingle roof would require, hangers should be screwed into solid fascia, and on roofs above walkways, entrances or driveways, snow retention should be part of the conversation from the start rather than added after someone's eavestrough ends up in the garden.",
      },
      {
        type: "h2",
        heading: "Common Eave Mistakes",
        text: "Panels face-screwed at the eave instead of hemmed, which pins a panel that has to move and puts fasteners in the wettest line on the roof. No hem at all, so the panel edge flutters and capillary action wets the fascia. Trim projecting too short, so water runs behind the eavestrough. Reused old drip edge, which is nearly always the wrong profile and the wrong material for a metal system. Membrane run under the drip edge instead of over it, so water reaching the membrane drains behind the fascia. And an eavestrough hung the way it would be on a shingle roof, with no allowance for a slab of snow arriving on it in March.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "Does a metal roof need drip edge if it has eave trim?",
            a: "Eave trim on a metal roof is the drip edge — it is a purpose-formed piece that does the same job plus anchoring the panel. What matters is that the edge metal is present, correctly lapped with the membrane, and detailed to hook the panel rather than just cover the deck edge.",
          },
          {
            q: "Can the existing drip edge be reused when switching to metal?",
            a: "In practice, no. Shingle drip edge has the wrong profile for a metal eave detail, it will be the wrong gauge and colour, and it has already been nailed through repeatedly. It comes off with the old roof.",
          },
          {
            q: "Will the eavestrough survive snow sliding off a metal roof?",
            a: "It survives if it is hung for it — closer hanger spacing, screwed fasteners into sound fascia, and consideration of snow retention where the shed path is over an entry or a driveway. It does not survive if it is hung to shingle-roof standards and the roof lets go all at once during a February thaw.",
          },
          {
            q: "Should the panel be hemmed over a cleat, or is face-fastening acceptable?",
            a: "Hemmed over a cleat, on any standing seam roof. Face-fastening at the eave defeats the concealed-fastener principle of the system, pins the panel against thermal movement, and puts exposed fasteners at the highest uplift and wettest location on the roof.",
          },
        ],
      },
    ],
  },
  {
    slug: "metal-roof-rake-and-gable-trim",
    title: "Rake and Gable Trim on a Metal Roof",
    excerpt:
      "The rake is the second-highest uplift zone on a roof and the edge everyone sees from the street. One-piece or two-piece, cleated or face-screwed — the choice shows.",
    readTime: "7 min read",
    category: "Metal Roofing",
    metaTitle: "Rake and Gable Trim Detailing for Metal Roofs",
    metaDescription:
      "How rake and gable trim is built on a metal roof, one-piece versus cleated two-piece systems, panel edge legs, laps and transitions at eave and ridge.",
    content: [
      {
        type: "p",
        text: "The rake — the sloped edge of the roof at a gable end — is a detail with two constituencies. Structurally it is one of the highest wind uplift zones on the building, second only to the corners. Visually it is the crisp line that people see from the driveway, running the full height of the gable. Rake trim that is fastened badly comes loose; rake trim that is proportioned or lapped badly is obvious forever.",
      },
      {
        type: "h2",
        heading: "What Happens to the Last Panel",
        text: "Before the trim goes on, the last panel at the rake has to be dealt with. It is almost never a full-width panel, so it gets cut to width, and the cut edge is bent up into a vertical leg — essentially the same detail as the ridge, turned on its side. That upstand stops water running sideways off the panel edge and under the trim, and it stops wind driving rain into the same gap. A panel cut off flat at the rake with the trim simply laid over top has nothing preventing water from entering that joint.",
      },
      {
        type: "h2",
        heading: "One-Piece Rake Trim",
        text: "The simplest arrangement is a single formed piece that sits over the panel edge and down the fascia, fastened through its face into the panel or the deck. It is quick, it is common on utility and agricultural buildings, and it works on smaller, lower-exposure roofs. Its limitations are that the fasteners are exposed on a visible face, the trim is held at discrete points rather than continuously, and any face fastener driven through the panel edge pins that panel at that spot.",
      },
      {
        type: "h2",
        heading: "Two-Piece Cleated Rake Trim",
        text: "The better assembly is two pieces. A rake cleat or base flashing is fastened continuously along the deck edge and down onto the fascia. The rake cover is then formed with hems on both edges and hooked onto the cleat, locked closed with a hand seamer. Nothing shows on the exposed face.",
      },
      {
        type: "ul",
        items: [
          "Continuous cleats resist uplift along the whole edge rather than at fastener points, which is the right answer in a zone where uplift pressure peaks.",
          "The hooked-and-hemmed cover can move slightly relative to the cleat, so thermal movement is accommodated instead of resisted.",
          "No exposed fasteners means no gasketed washers ageing in sunlight on a highly visible surface.",
          "The trim reads as a clean folded edge rather than a strip of metal with a row of screw heads down it.",
          "Cleat fastener spacing is tightened near the eave and the ridge, where the trim is most likely to be worked by wind.",
        ],
      },
      {
        type: "h2",
        heading: "Laps and Long Runs",
        text: "Rake trim on anything taller than a stock length has to be lapped. The uphill piece always laps over the downhill piece, with a lap in the range of four to six inches and butyl tape compressed in it. On tall gables and long runs, the trim itself will grow and shrink with temperature just like the panels, so the lap is detailed as a slip joint — long enough that the pieces can move within it without opening up, and not pinned with a fastener straight through the middle of both.",
      },
      {
        type: "callout",
        text: "Rake trim that rattles or drums in wind is a symptom, not a nuisance. It means the trim is not held continuously — either the cleat spacing is too generous, the cleat is fastened into something soft, or the hem is not fully locked. Wind that can flex a trim can eventually work it loose, and the fix gets harder once the fasteners have elongated their holes.",
      },
      {
        type: "h2",
        heading: "The Transitions at Each End",
        text: "The rake meets something at both ends and those junctions are where sloppy work is most visible. At the bottom, the rake trim meets the eave trim at an outside corner. Done properly, one piece is notched and folded around the other to form a closed corner — a fabricated corner box or a folded return. Done badly, the two pieces are butted and the gap filled with sealant, which cracks out within a few winters and leaves an open corner at the most exposed point on the roof.",
      },
      {
        type: "p",
        text: "At the top, the rake runs up to the ridge. The rake trim is folded closed at its upper end and the ridge cap's end cap laps over it, so the top of the rake is not an open channel. On a hip-and-gable roof the same principle applies at every junction of two trims: fold and lap, do not butt and caulk.",
      },
      {
        type: "h2",
        heading: "Panel Layout and the Rake",
        text: "The rake is where a bad panel layout announces itself. If the roof width was not divided sensibly, one rake ends up with a two-inch sliver of panel against a full-width panel at the other end, and the asymmetry is plainly visible on a gable. Setting out the roof so both rakes carry a reasonable partial panel — or so the layout lands cleanly — is a decision made before the first panel goes down, and it cannot be recovered with trim.",
      },
      {
        type: "h2",
        heading: "Gables Without an Overhang",
        text: "A gable with no overhang, where the roof edge is flush with the wall, is a harder detail and a common one on modern and heritage-style homes alike. Water runs off the rake straight down the cladding, so the trim has to kick it clear, and the junction of the rake trim, the wall's water-resistive barrier and the cladding has to be lapped so that water leaving the roof cannot get behind the wall. It is also the detail most exposed to wind-driven rain and blowing snow, since there is no overhang providing any shelter. Where the budget and the design allow, even a modest overhang makes this junction significantly more forgiving.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "Can rake trim be replaced without removing the panels?",
            a: "On a one-piece face-fastened trim, usually yes — it unscrews. On a two-piece cleated system, the cover can often be unhooked and replaced while the cleat stays. Either way the panel edge underneath should be inspected while it is open, because trim problems and panel edge problems tend to arrive together.",
          },
          {
            q: "Why does my rake trim rattle in high wind?",
            a: "It is not held continuously. Either the cleat spacing is too wide, the fasteners are in soft or rotted fascia, or the hem was never fully closed onto the cleat. It is worth addressing rather than living with, because flexing works fasteners loose over time.",
          },
          {
            q: "Do I need a rake cleat, or can the trim just be screwed on?",
            a: "Screwing works and is common on outbuildings. On a house, a continuous cleat gives better uplift performance in a high-pressure zone, allows the trim to move, and leaves no exposed fasteners on the most visible edge of the roof. It is a small amount of extra labour for a meaningfully better detail.",
          },
          {
            q: "How wide should rake trim be?",
            a: "Wide enough to cover the panel's upturned edge leg with a solid margin and to return down the fascia, and proportioned to look right against the panel width and the scale of the gable. Trim that is too narrow looks mean and leaves no room for error; trim that is too wide looks heavy and catches more wind.",
          },
        ],
      },
    ],
  },
  {
    slug: "metal-roof-valley-construction-open-vs-closed",
    title: "Valley Construction in Metal Roofing: Open vs Closed",
    excerpt:
      "A valley carries the runoff of two roof planes through one narrow channel and fills with ice every winter. Here is how a metal valley is actually built.",
    readTime: "8 min read",
    category: "Metal Roofing",
    metaTitle: "Metal Roof Valleys: Open vs Closed Construction Explained",
    metaDescription:
      "How open valleys are built on a metal roof, why W-valleys prevent cross-flow, correct valley widths and hems, and why closed valleys do not apply to metal panels.",
    content: [
      {
        type: "p",
        text: "A valley is the highest-stress water detail on a pitched roof. Two planes drain into one channel, so the flow rate through it is far higher than anywhere else on the roof, it moves fast, and in an Ontario winter it packs with ice and stays full of it for weeks. Every valley on a metal roof is an open valley, and understanding why explains most of how one is built.",
      },
      {
        type: "h2",
        heading: "Why Metal Valleys Are Always Open",
        text: "On an asphalt roof there are three choices: a closed-cut valley where shingles from one plane run through and shingles from the other are cut back over them, a woven valley where courses interlace, and an open valley with exposed metal in the channel. Metal panels can only do the last one. A standing seam or ribbed panel is a rigid formed sheet — it cannot be woven, and it cannot be laid over a fold in the roof plane. So the valley gets a formed metal pan and the panels stop short of it on both sides.",
      },
      {
        type: "h2",
        heading: "The Valley Pan",
        text: "The pan is formed sheet, generally the same gauge and finish as the roof, folded to the valley angle and hemmed along both outer edges. Those hems do two jobs: they stiffen a long, unsupported piece of metal so it does not oil can or flutter, and they give a clean edge for the cleats to hook.",
      },
      {
        type: "ul",
        items: [
          "Overall pan width is generous — commonly in the range of twenty to twenty-four inches, which puts eight to ten inches of metal under the panels on each side.",
          "Wider is better in snow country. A valley that fills with ice needs the water backing up behind that ice to still be sitting on metal, not on underlayment.",
          "Self-adhered membrane runs the full length of the valley, centred on it and wide, under the pan. This is a location where membrane is not optional.",
          "Field underlayment from both roof planes laps over the valley membrane so the drainage direction is respected.",
          "The pan is held by cleats hooked into its hemmed edges. There are no fasteners through the face of a valley pan, ever.",
        ],
      },
      {
        type: "h2",
        heading: "The W Rib and Cross-Flow",
        text: "A plain V-shaped pan has one weakness: on a valley where the two planes are unequal — different areas, different pitches, or one plane much larger than the other — the water coming off the big plane arrives with real velocity and shoots across the valley and up under the panels on the small side. Heavy rain and rapid melt both do it. The answer is a W-valley: the pan is formed with a raised rib running down its centre, which acts as a divider. Water from each side is held on its own half of the channel and cannot cross.",
      },
      {
        type: "p",
        text: "The centre rib also stiffens the pan considerably, which matters on long valleys, and it gives a definite line to work to when cutting the panels. On any valley of consequence — long, unequal planes, low pitch, or heavy expected flow — the W profile is the right call.",
      },
      {
        type: "h2",
        heading: "How the Panels Meet the Valley",
        text: "The panels are cut on the valley angle, and this is where the work shows. The cut edge of each panel is hemmed — folded under — so that no raw cut edge sits in the water channel. A raw edge wicks water up under the panel by capillary action, and on a steel panel it will also rust and streak orange down the valley within a couple of years.",
      },
      {
        type: "p",
        text: "The panels stop short of the valley centreline, leaving an open channel. A common approach is to keep the panel edges a few inches back from centre at the top and to widen that opening progressively toward the eave, because the volume of water in the channel increases as it descends. A valley that is the same width top to bottom is narrowest, relative to its flow, exactly where the flow is greatest.",
      },
      {
        type: "callout",
        text: "No fasteners through a valley pan. Not one. Every screw through the face of a valley is a hole sitting in the fastest-moving, highest-volume, most ice-prone water on the roof, and it will be under standing water every time an ice dam forms in that valley. The pan is held with concealed cleats hooked into its hemmed edges.",
      },
      {
        type: "h2",
        heading: "Terminations",
        text: "The two ends of a valley are as important as the middle. At the eave, the pan runs over the eave trim and is cut and folded so the water it is carrying is directed out over the trim and into the eavestrough rather than being allowed to spill sideways behind it. A valley that simply stops at the fascia dumps a concentrated stream at one point, and in winter that point builds an ice column.",
      },
      {
        type: "p",
        text: "At the top, a valley either runs up to a ridge, dies into a headwall, or meets another valley. Each of those junctions needs a formed transition, membrane run generously in every direction, and no reliance on sealant to make the connection.",
      },
      {
        type: "h2",
        heading: "Dead Valleys",
        text: "A dead valley is a valley with little or no fall — where a roof plane runs into a wall or another roof and there is nowhere for water to go quickly. They are common where an addition meets an original house, and they are the single most reliable source of leaks on a complicated roof. The correct answer is usually to build a cricket that gives the water somewhere to go, or to build a fully sealed pan — soldered or welded rather than lapped — because the detail will hold standing water and ice by design. A dead valley detailed as though water will run through it will fail.",
      },
      {
        type: "h2",
        heading: "Maintenance",
        text: "Valleys collect. Leaves, pine needles, shingle grit from a neighbouring roof, seed pods — all of it funnels into the valley and then packs at the eave end. A dammed valley holds water where the assembly was designed to shed it. Clearing valleys, particularly on properties with mature trees, is one of the few genuinely useful maintenance tasks on a metal roof, and it is best done in late autumn before things freeze in place.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "How wide should a metal valley be?",
            a: "Wide enough that the pan extends well under the panels on both sides — the twenty to twenty-four inch range is common for the overall pan. In a snow climate, err wide, because the effective channel narrows dramatically once ice builds in it.",
          },
          {
            q: "Should I specify a W-valley or a plain V?",
            a: "A W is the safer choice on almost any residential valley and is strongly indicated where the two planes are unequal in size or pitch, where the valley is long, or where the pitch is shallow. The centre rib prevents cross-flow and stiffens the pan.",
          },
          {
            q: "Why does my valley only leak during heavy rain?",
            a: "That pattern usually points to cross-flow or to the panels being cut too close to the centreline. In ordinary rain the channel handles the volume; in a downpour the water depth exceeds the effective channel and runs sideways under the panel edge. A W rib and a wider opening address it.",
          },
          {
            q: "Do valleys need ice and water shield if there is a metal pan?",
            a: "Yes. The pan sheds running water. The membrane is what protects the deck when the valley is full of ice and water is standing in it, which happens most winters somewhere in Southern Ontario.",
          },
          {
            q: "Can a closed valley be done in metal?",
            a: "No. Closed-cut and woven valleys depend on overlapping small courses of flexible material. A metal panel is rigid and formed, so a metal roof valley is always an open valley with a formed pan.",
          },
        ],
      },
    ],
  },
  {
    slug: "sidewall-headwall-flashing-metal-roof",
    title: "Sidewall and Headwall Flashing on a Metal Roof",
    excerpt:
      "Where a roof meets a wall, the flashing has to go behind the cladding, not be caulked to it — and the missing kick-out at the bottom of a sidewall rots more walls than anything else.",
    readTime: "8 min read",
    category: "Metal Roofing",
    metaTitle: "Sidewall and Headwall Flashing for Metal Roofs",
    metaDescription:
      "How sidewall and headwall flashings are built on a metal roof, why they must lap behind the water-resistive barrier, and why kick-out flashing matters so much.",
    content: [
      {
        type: "p",
        text: "Roof-to-wall junctions cause more concealed damage than any other detail on a house, because when they fail the water does not appear on the ceiling. It goes into the wall cavity and stays there — wetting sheathing, rotting studs and sill plates, and doing it quietly for years before anything shows inside. The detailing is not complicated, but it has to be right, and it has to be done in the correct sequence with the wall.",
      },
      {
        type: "h2",
        heading: "Sidewall and Headwall Are Different Problems",
        text: "A sidewall is a wall running parallel to the slope — the roof rises alongside it, as at a dormer cheek or where a lower roof runs up against the side of a two-storey section. Water travels down the roof beside the wall and the flashing has to keep it out of the wall for the whole run. A headwall is a wall at the top of a slope, perpendicular to it — where a porch or addition roof terminates against the main house wall. There, water is arriving at the wall and has to be turned back down onto the roof.",
      },
      {
        type: "h2",
        heading: "Headwall Detailing",
        text: "At a headwall, the panel ends have to be turned up. Each panel gets an upstand at its top edge, an inch or two high, formed the same way as a ridge termination. That leg is the physical stop that prevents wind-driven water from running up the pan and over the panel end into the assembly. Foam or formed metal closures fill the profile gaps where a ribbed panel meets the flat flashing.",
      },
      {
        type: "p",
        text: "Over the top of that, a headwall flashing — essentially a Z-shaped or L-shaped piece — has a horizontal leg that laps down over the panel upstand with its own hemmed drip, and a vertical leg that runs up the wall. The vertical leg goes behind the wall's water-resistive barrier and behind the cladding, so anything running down the wall sheds onto the flashing and out onto the roof. That is the whole job: get the wall's drainage plane to hand off cleanly to the roof's.",
      },
      {
        type: "h2",
        heading: "Sidewall Detailing",
        text: "At a sidewall on a metal roof, the panel nearest the wall gets an upturned leg on its wall side, just as it would at a rake. A wall flashing covers that leg with a vertical leg running up behind the water-resistive barrier and the cladding. Because the panel needs to move with temperature, the flashing must not be screwed through the panel into the wall framing — the connection is by hem and cleat so the panel can slide behind it.",
      },
      {
        type: "p",
        text: "The vertical leg height matters more in this climate than in a mild one. Snow drifts against a sidewall and sits there for months; meltwater under that drift is effectively standing water against the wall. A leg height that would be fine in a rainy but snow-free climate is not adequate here, and running the self-adhered membrane well up the wall behind the flashing is standard practice on any Ontario job worth the money.",
      },
      {
        type: "h2",
        heading: "Two-Piece Flashing and Counter-Flashing",
        text: "Wherever the wall is masonry, or the cladding is not going to be disturbed, the correct approach is two pieces: a base flashing fixed to the roof side, and a separate counter-flashing coming down over it from the wall side. The counter-flashing is let into a mortar joint or tucked under the cladding, and it overlaps the base flashing without being fastened to it.",
      },
      {
        type: "ul",
        items: [
          "The overlap lets the roof and the wall move independently — buildings settle, panels expand, masonry shifts — without tearing the flashing.",
          "It allows the roof to be replaced in future without disturbing the wall, and the wall to be reclad without disturbing the roof.",
          "It removes any reliance on a sealant joint between two rigid materials that move in different directions.",
          "It is the only reasonable approach where the roof meets brick, stone or stucco.",
        ],
      },
      {
        type: "callout",
        text: "Kick-out flashing. Where a sidewall runs down and ends at the eave — the classic case being a roof plane meeting a wall that continues past the eavestrough — a kick-out flashing at the bottom of the run diverts the water out of the wall junction and into the trough. Without it, every drop that ran down that sidewall goes straight into the wall cavity at the bottom. This single missing piece of metal is responsible for an extraordinary amount of hidden wall rot, and it is invisible from the ground once siding is on.",
      },
      {
        type: "h2",
        heading: "Sequencing With the Wall",
        text: "The recurring mistake on wall junctions is treating them as roofing details applied after the wall is finished. The order that works is: wall sheathing, then the roof-side flashing installed with its vertical leg up the wall, then the water-resistive barrier lapped down over that leg, then the cladding. Water running down inside the cladding meets the barrier, the barrier drains onto the flashing leg, and the flashing drains onto the roof. Reverse any of those laps and the water goes into the wall instead.",
      },
      {
        type: "p",
        text: "When the wall is already finished, the honest answer is that some of the cladding has to come off in a band along the roof line to install the flashing correctly. Surface-mounting a flashing to finished siding and running a bead of sealant along its top edge is not a flashing detail, it is a maintenance item with a short life, and it will fail during a freeze-thaw cycle without warning.",
      },
      {
        type: "h2",
        heading: "What Failure Looks Like",
        text: "Soft or discoloured siding at the bottom of a sidewall run. Peeling paint or efflorescence on a wall below a roof junction. A window below and inboard of that junction with staining at its corners. Rot in the rim joist or sill plate below. Interior finish damage that appears in a wall rather than a ceiling. None of these read as roof problems to a homeowner, which is exactly why they run for years before anyone connects them to the flashing.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "Why is the wall below my roof line rotting when the roof does not leak?",
            a: "Almost always a wall junction. Either the flashing is surface-mounted to the cladding rather than lapped behind the water-resistive barrier, or there is no kick-out flashing where the sidewall ends at the eave. Both dump water into the wall cavity where it never reaches the ceiling and never announces itself.",
          },
          {
            q: "Can the top of a wall flashing just be caulked?",
            a: "Sealant on top of a flashing leg is a temporary measure. Two rigid materials moving in different directions will open that joint, and in a freeze-thaw climate they will do it quickly. The permanent detail is either a counter-flashing let into the wall or the flashing leg lapped behind the water-resistive barrier and cladding.",
          },
          {
            q: "Does the siding have to come off to flash a roof-to-wall junction properly?",
            a: "Usually a band of it along the roof line, yes. That is what allows the flashing leg to go behind the drainage plane instead of on top of it. It adds work, and it is the difference between a detail that lasts as long as the roof and one that has to be maintained.",
          },
          {
            q: "How high should the vertical leg go up the wall?",
            a: "Higher than in a mild climate, because snow drifts and sits against sidewalls all winter. Combine a generous leg with self-adhered membrane run up the wall behind it. The specific dimension depends on the exposure and the assembly, and it is worth asking the installer what they are planning rather than assuming a minimum is adequate.",
          },
        ],
      },
    ],
  },
  {
    slug: "chimney-flashing-metal-roof-cricket-counter-flashing",
    title: "Chimney Flashing on a Metal Roof: Crickets and Counter-Flashing",
    excerpt:
      "A chimney is a wall in the middle of your roof that water has to get around. The cricket behind it and the counter-flashing let into the masonry are what make that work.",
    readTime: "8 min read",
    category: "Metal Roofing",
    metaTitle: "Chimney Flashing on a Metal Roof: Crickets and Counter-Flashing",
    metaDescription:
      "How chimney flashing works on a metal roof — when a cricket is needed, how counter-flashing is let into masonry, and why surface-caulked flashings fail.",
    content: [
      {
        type: "p",
        text: "A masonry chimney is the most demanding penetration on a residential roof. It is large, it is rigid, it is made of a material that moves and settles independently of the house, it interrupts the flow of water down the roof, and it collects snow and ice behind it all winter. It is also, on a lot of older Southern Ontario houses, the place a roof was already leaking before the metal went on.",
      },
      {
        type: "h2",
        heading: "Why a Cricket Is Not Optional",
        text: "The uphill side of a chimney is the problem. Water running down the roof arrives at a wall and has to go somewhere. On a narrow chimney it splits and runs around each side without much trouble. On a wide one, the back pan behind it becomes a shelf where water slows down, debris collects, and — in this climate — snow piles and ice forms and stays for weeks.",
      },
      {
        type: "p",
        text: "A cricket, or saddle, is a small framed and sheathed structure behind the chimney with two sloped planes meeting at a ridge, which pushes water and snow around either side. The rule of thumb the trade uses is that any chimney wider than roughly two to two and a half feet across the slope gets one, and in a snow climate the argument for building one on a narrower chimney is strong. Confirm the actual requirement with your local building department.",
      },
      {
        type: "h2",
        heading: "How a Cricket Is Built",
        text: "For anything of size, a cricket is framed — a small ridge from the back face of the chimney to the roof deck, with valley rafters or a simple sheathed saddle either side — then covered with sheathing, wrapped with self-adhered membrane, and flashed in metal. The two planes it creates form small valleys where they meet the main roof, and those valleys are built like any other valley: a formed pan, membrane beneath, panels hemmed and stopped short.",
      },
      {
        type: "p",
        text: "For a narrow chimney, a one-piece formed or soldered metal saddle can do the job without framing. What does not work is a flat back pan with a bit of upstand, which is what a lot of older roofs have. It holds water and ice by design.",
      },
      {
        type: "h2",
        heading: "The Base Flashing",
        text: "The base flashing is the part attached to the roof. On a metal roof it takes a different form than the shingle-roof step flashing most people picture, because there are no courses to interleave with.",
      },
      {
        type: "ul",
        items: [
          "The downhill face gets an apron: a formed piece with a vertical leg against the masonry and a horizontal leg that laps over the panels below with a hemmed drip edge.",
          "The sides get formed pans with an upturned leg against the masonry and a hem where they meet the roof panels, so the panel and the flashing interlock rather than relying on a fastened lap.",
          "The uphill side gets the cricket, flashed into the main roof on both sides.",
          "Self-adhered membrane runs up the masonry face and out onto the deck well past the flashing on every side, before any metal goes on.",
          "The panels themselves are hemmed where they meet the flashing, and the flashing must not pin a panel that needs to move.",
        ],
      },
      {
        type: "h2",
        heading: "Counter-Flashing Into the Masonry",
        text: "The second half of the assembly is the counter-flashing, and it is the half most often done wrong. The correct method is a reglet: a groove cut into a mortar joint, generally around three-quarters of an inch deep, into which a folded lip of the counter-flashing is inserted. Lead wedges hold it in place, and the joint is then sealed with a compatible sealant. The counter-flashing hangs down over the base flashing, overlapping it without being fastened to it.",
      },
      {
        type: "callout",
        text: "The counter-flashing must never be fastened or soldered to the base flashing. A masonry chimney and a wood-framed roof move independently — different materials, different rates, different responses to temperature and moisture, and chimneys settle. The overlapping two-piece detail is what allows that relative movement without tearing anything. Join the two and something will crack.",
      },
      {
        type: "h2",
        heading: "Why Surface-Mounted Flashing Fails",
        text: "Surface-mounted counter-flashing — a piece of metal fixed flat to the brick face with masonry fasteners and a bead of sealant across the top — is quick and it is everywhere. It is also a maintenance item from the day it is installed. The sealant is doing all the work at the top edge, it is fully exposed to sun and to every freeze-thaw cycle, and it is bridging a joint between a rigid metal edge and a porous, moving masonry surface. It cracks, water gets behind the flashing, and it runs down the inside face of the metal and into the roof. On a roof intended to last for decades, a reglet is the detail that matches.",
      },
      {
        type: "h2",
        heading: "Chimney Condition",
        text: "Re-roofing is the point at which the chimney above the roof line becomes accessible, and it is worth looking at while the scaffolding is there. Deteriorated mortar joints, spalling brick from freeze-thaw, a cracked or missing crown, and a missing rain cap are all common on older chimneys and all of them let water into the masonry from above — which no flashing detail can address. Flashing a chimney that is itself absorbing water is fixing the wrong problem, and the leak will continue.",
      },
      {
        type: "h2",
        heading: "Metal Chimneys and Flues",
        text: "Factory-built metal chimneys and appliance flues are a different assembly. They use a flashing base sized for the pipe and a storm collar above it, and — importantly — they have clearance-to-combustible requirements set by the appliance and chimney manufacturer that govern how close framing and roofing material may come. Those clearances are not a roofing judgment call; follow the manufacturer's instructions and the requirements of the authority having jurisdiction.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "Do I really need a cricket behind my chimney?",
            a: "If the chimney is wide across the slope — roughly two feet or more — yes, and in a snow climate the threshold is arguably lower. The alternative is a flat back pan that holds snow, ice and debris against the masonry for months. Confirm the requirement with your local building department.",
          },
          {
            q: "Can the existing chimney flashing be reused with a new metal roof?",
            a: "The counter-flashing sometimes can be, if it is let into a reglet and the masonry is sound. The base flashing cannot — it is part of the roof assembly, it is formed for the old roofing material, and it comes off with the old roof.",
          },
          {
            q: "Why does my chimney only leak in winter?",
            a: "Two usual causes. Snow and ice build up behind the chimney, hold meltwater against the flashing, and force it past details designed to shed running water. Or the masonry itself is absorbing water through failed mortar or a cracked crown, freezing, and driving moisture inward. Both are winter-specific and neither is fixed by caulking the flashing.",
          },
          {
            q: "Is aluminum flashing acceptable against masonry?",
            a: "Bare aluminum in prolonged contact with fresh or wet mortar is a poor combination — the alkalinity attacks it. Compatible materials are chosen for masonry contact, and it is one of the reasons a specific material is specified rather than whatever is on the truck.",
          },
        ],
      },
    ],
  },
  {
    slug: "skylights-in-standing-seam-metal-roof",
    title: "Integrating Skylights Into a Standing Seam Roof",
    excerpt:
      "A skylight in a standing seam roof needs a curb, a cricket, and a panel layout planned around it before the first panel goes down. Flashing kits made for shingles do not translate.",
    readTime: "7 min read",
    category: "Metal Roofing",
    metaTitle: "Integrating Skylights Into a Standing Seam Metal Roof",
    metaDescription:
      "How skylights are flashed into a standing seam roof — curb height, crickets, panel layout, and why shingle flashing kits do not work with metal panels.",
    content: [
      {
        type: "p",
        text: "A skylight in a standing seam roof is a small chimney with glass in it. It interrupts the panel run, it obstructs water and snow moving down the slope, it has to be flashed on four sides in a material that cannot be woven or lapped like shingles, and it has to allow the panels around it to keep moving. Done properly it is a durable detail. Done as an afterthought it is the leak everyone remembers.",
      },
      {
        type: "h2",
        heading: "Curb-Mounted, Not Deck-Mounted",
        text: "Skylights come in two mounting styles. Deck-mounted units sit low, integral to the roof plane, with a factory flashing kit designed to weave into shingle courses. Curb-mounted units sit on a built-up curb that raises the frame above the roof surface. For standing seam, curb-mounted is the assembly that works.",
      },
      {
        type: "p",
        text: "The reason is geometry. A curb creates four vertical faces to flash against, which is exactly what metal roof detailing is good at — upturned legs, hems, aprons and counter-flashing all have something to work against. A deck-mounted unit's factory kit assumes overlapping courses of flexible material, and there is no way to make a rigid, seamed panel behave that way.",
      },
      {
        type: "h2",
        heading: "Curb Height",
        text: "Curb height is a snow-country decision. The curb has to be tall enough that the flashing legs come up well clear of anything that will sit against them — which in Ontario means drifted snow, packed ice at the uphill side, and meltwater sitting under that snow through a January thaw. A curb sized for a rain climate is not adequate here. Taller costs nothing meaningful during construction and eliminates a whole category of winter problems.",
      },
      {
        type: "h2",
        heading: "The Four Sides",
        text: "The flashing assembly follows the same logic as a chimney.",
      },
      {
        type: "ul",
        items: [
          "Downhill: an apron with a vertical leg up the curb and a horizontal leg lapping over the panel below, hemmed at its lower edge so water drips clear rather than running back underneath.",
          "Sides: formed pans with an upturned leg against the curb and a hem interlocking with the adjoining panel, so the panel can move without dragging the flashing.",
          "Uphill: a cricket on anything of width, for exactly the same reason as a chimney — a flat back pan collects snow, ice and debris.",
          "Over the top of all of it: counter-flashing or head flashing coming down from the curb face over the base flashing legs, so no top edge relies on sealant.",
          "Under all of it: self-adhered membrane up the curb faces and out onto the deck generously on all four sides, installed before any metal.",
        ],
      },
      {
        type: "callout",
        text: "A skylight flashing kit sold for asphalt shingles is not a standing seam detail. Those kits are designed to be woven into shingle courses and rely on that overlapping to shed water. On a metal roof the flashing is fabricated to suit the panel profile and the curb, and it interlocks with the panels by hems and cleats. Fitting a shingle kit to a metal roof produces a detail that only works until the first driving rain.",
      },
      {
        type: "h2",
        heading: "Panel Layout Around the Opening",
        text: "This is the part that has to be decided before any panel goes on the roof, and it is where retrofits get difficult. Ideally the curb sits between two seams, entirely within the flat of a panel run, so the side flashings meet ordinary panel pans. The next best outcome is that a seam lands right at the edge of the curb, where it can be terminated cleanly into the side flashing.",
      },
      {
        type: "p",
        text: "The outcome to avoid is a seam that runs into the middle of the curb's width and has to be cut off, because a seam terminated mid-run needs its rib closed and dressed into the flashing, and it is both the ugliest and the most leak-prone version of this detail. Planning the panel layout around existing or planned skylights is a five-minute conversation at setting-out that saves a great deal of grief.",
      },
      {
        type: "h2",
        heading: "Letting the Panels Move",
        text: "The curb is fixed to the structure. The panels around it are not — they expand and contract along the slope. So the side flashings connect to the panels by hem and cleat, not by screwing through the panel into the curb. Screwing a panel to a fixed curb pins it at that point, and everything downhill and uphill of it then fights that anchor every time the temperature changes. It shows up as distorted pans around the skylight and, eventually, as a torn flashing.",
      },
      {
        type: "h2",
        heading: "Adding a Skylight to an Existing Metal Roof",
        text: "It can be done, and it is more involved than cutting a hole. Panels have to be unseamed and removed back to a sensible boundary, the opening framed and headed off properly, the curb built, membrane installed, new flashings fabricated to the panel profile, and panels re-cut and re-seamed around it. On a mechanically seamed roof, unseaming and reseaming is specialist work. It is worth pricing honestly and worth deciding at the time of the re-roof if a skylight is anywhere in the plans.",
      },
      {
        type: "h2",
        heading: "Condensation Is Not a Leak",
        text: "Water appearing around a skylight in winter is often condensation rather than infiltration. A skylight is the coldest surface in a room, and in a house with high indoor humidity, moist air contacts the glass and the frame and condenses. It runs down and collects at the bottom of the frame, and it looks exactly like a leak. The tells are that it happens on cold days rather than during rain, that it is worst in bathrooms and kitchens, and that the water is clean. The fix is humidity control and ventilation, not roofing.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "Can a skylight be added to an existing standing seam roof?",
            a: "Yes, but it requires unseaming and removing panels, framing the opening, building a curb, and fabricating new flashings — not simply cutting an opening. Mechanically seamed roofs need the right tooling to reseam. If a skylight is a possibility, it is far cheaper to do it during the re-roof.",
          },
          {
            q: "Does a skylight need a cricket above it?",
            a: "Anything with meaningful width across the slope does, for the same reason a chimney does. Without one, the uphill side of the curb is a shelf that collects snow, ice and debris, and holds meltwater against the flashing all winter.",
          },
          {
            q: "Why is water dripping from my skylight only in winter?",
            a: "Most often condensation. The glass and frame are the coldest surfaces in the room, indoor humidity is highest in winter, and moisture condenses and runs. If it happens on cold dry days rather than during rain, and the water is clean, humidity control is the place to start.",
          },
          {
            q: "Curb-mounted or deck-mounted for a metal roof?",
            a: "Curb-mounted. The curb gives the vertical faces that metal flashing details need, keeps the frame clear of drifted snow, and lets the flashings interlock with the panels properly. Deck-mounted units and their shingle-oriented flashing kits do not adapt to a seamed panel.",
          },
        ],
      },
    ],
  },
  {
    slug: "plumbing-vent-boots-pipe-penetrations-metal-roof",
    title: "Plumbing Vent Boots and Pipe Penetrations on a Metal Roof",
    excerpt:
      "The boot is the shortest-lived component on a metal roof and the one most often installed in the wrong place. Where it goes and how it is sealed decides how long it lasts.",
    readTime: "7 min read",
    category: "Metal Roofing",
    metaTitle: "Plumbing Vent Boots and Pipe Penetrations on Metal Roofs",
    metaDescription:
      "How pipe boots are installed on a metal roof, EPDM versus silicone, why a boot must never straddle a seam, and how to seal and maintain penetrations.",
    content: [
      {
        type: "p",
        text: "Every house has plumbing stacks coming through the roof, and on a metal roof each one is a hole in an otherwise continuous surface, closed by a flexible rubber boot. That boot is a good solution, but it is worth understanding what it is: the one component on the roof made of a material that ages faster than the panels, sitting fully exposed to sunlight, flexing with every temperature swing. It is a maintenance item on a roof that otherwise has very few.",
      },
      {
        type: "h2",
        heading: "How a Boot Works",
        text: "A pipe boot is a moulded cone of flexible rubber bonded to a malleable metal base flange. The cone is cut to the pipe diameter and stretched over the stack; the flange is formed by hand to follow the panel profile, bedded on butyl and fastened around its perimeter with gasketed screws. A stainless clamp at the top of the cone draws it tight against the pipe, and a bead of compatible sealant closes the top edge.",
      },
      {
        type: "h2",
        heading: "EPDM or Silicone",
        text: "Two rubber compounds dominate. EPDM is the common, less expensive option — it performs adequately and it is what comes on most jobs by default. Silicone costs more and holds up considerably better: it tolerates higher continuous temperatures, which matters both for hot flue pipes and for the surface temperature of a dark metal panel, and it stays flexible at very low temperatures, which matters in an Ontario January. Its ultraviolet resistance is also better, and UV is what eventually destroys an exposed boot.",
      },
      {
        type: "p",
        text: "On a roof that is expected to last for decades, specifying silicone boots is one of the cheapest ways to reduce how often anyone has to go back up there. Follow the manufacturer's temperature ratings for anything carrying combustion gases; a plumbing stack and a flue are not the same duty.",
      },
      {
        type: "h2",
        heading: "Placement Is the Part People Get Wrong",
        text: "Where the boot lands on the panel matters more than almost anything else about it.",
      },
      {
        type: "ul",
        items: [
          "A boot belongs in the flat pan of a panel, with its whole flange supported on a continuous surface.",
          "A boot must never straddle a standing seam. The seam is where the panels move relative to one another; a flange fastened across it will be torn apart within a few seasons.",
          "On a ribbed panel, the flange has to be formed carefully over the ribs, and the profile has to be filled and sealed — a flange laid flat over a rib leaves an open channel straight into the roof.",
          "The higher up the slope a penetration is, the more water arrives at it. High penetrations, and large ones, benefit from a formed diverter or backer above them to split the flow.",
          "The flange is fastened to the panel, so it moves with the panel. It must never be fastened through the panel into the deck — that pins the panel at that point.",
        ],
      },
      {
        type: "p",
        text: "On a standing seam roof this occasionally means the plumbing stack has to move. A stack that lands squarely on a seam line is worth relocating below the roof deck during the re-roof, which is far less work than it sounds and permanently removes a problem.",
      },
      {
        type: "h2",
        heading: "Cutting the Opening",
        text: "The opening in the panel is cut oversized — the pipe must never touch the edge of the metal. As the panel expands and contracts, the panel moves and the pipe does not; contact means the panel grinds against the pipe, wears through the coating at the cut edge, and eventually deforms. Cut it clean, deburr it, and touch up the cut edge. Cut it cold, not with an abrasive wheel that will throw hot filings across the panel.",
      },
      {
        type: "callout",
        text: "The boot is the maintenance item on a metal roof. The panels, the seams and the clips are effectively out of reach of sunlight and weather; the boot is not. It should be on the list to inspect periodically — looking for cracking at the top of the cone where it flexes against the pipe, hardening or chalking of the rubber, loose or backed-out flange fasteners, and any lifting at the flange edge.",
      },
      {
        type: "h2",
        heading: "Sealing It Properly",
        text: "Butyl tape goes under the full perimeter of the flange, continuous with no gaps, and the fasteners are set to compress it evenly — not so tight that they distort the flange and break the seal at the edges. A bead of compatible sealant at the pipe-to-cone junction closes the top. What does not work is skipping the butyl and running a fillet of caulk around the outside of the flange after the fact. That bead is fully exposed, it is doing all the work, and it will fail long before the roof does.",
      },
      {
        type: "h2",
        heading: "Other Penetrations",
        text: "Plumbing stacks are the common case but not the only one. Bathroom fans, range hoods and dryer vents all need a proper metal roof jack formed for the panel — not a plastic shingle vent adapted with sealant. Anything with a large footprint, or anything square, is better handled as a curbed penetration flashed like a small skylight than as an oversized flange. And any exhaust duct terminating in the attic rather than through the roof is a moisture problem that will show up as condensation and staining; a re-roof is the right moment to correct it.",
      },
      {
        type: "h2",
        heading: "Frost Closure",
        text: "One winter call that gets reported as a roof problem but is not: a plumbing stack frosting closed. Warm, moist air rises up the stack, and in a deep cold snap it condenses and freezes on the inside of the pipe near the top, progressively narrowing and eventually blocking it. The symptoms are slow drains and gurgling fixtures, not water on the ceiling. It is a plumbing issue related to stack diameter and insulation of the pipe in the attic, not a flashing issue.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "How long does a pipe boot last?",
            a: "Less than the roof, which is the point worth understanding. The rubber is fully exposed to sunlight and flexes with every temperature cycle, so it ages while the panels around it do not. Silicone lasts meaningfully longer than EPDM. Treat boots as a periodic inspection item rather than a permanent component.",
          },
          {
            q: "Can a cracked boot be caulked instead of replaced?",
            a: "Caulking a cracked boot buys time until someone can get back to it. It is not a repair — the rubber has degraded and will continue to crack, and sealant on a chalked, hardened surface does not adhere well. Replacement is straightforward and is the actual fix.",
          },
          {
            q: "Can a boot be replaced without removing panels?",
            a: "Usually yes. Retrofit boots are made with a split in the cone and flange, closed with a lap and sealant, so they can be fitted over a pipe without lifting the roof. A one-piece replacement requires either pulling the pipe or removing a panel, so the split version is the normal choice on an existing roof.",
          },
          {
            q: "Why is there a rust stain running down from my vent pipe?",
            a: "Common causes are steel filings left on the panel from cutting the opening, a cut panel edge that was never touched up, or a fastener corroding at the flange. All three are worth looking at, because the stain itself is cosmetic but the cause may not be.",
          },
        ],
      },
    ],
  },
  {
    slug: "hip-roof-detailing-standing-seam",
    title: "Hip Roof Detailing in Standing Seam",
    excerpt:
      "Every panel on a hip plane is a different length and every one is cut on an angle. The rib terminations, the hip cap and the peak are where the work shows.",
    readTime: "7 min read",
    category: "Metal Roofing",
    metaTitle: "Hip Roof Detailing for Standing Seam Metal Roofing",
    metaDescription:
      "How standing seam is detailed on a hip roof — rib terminations at the hip, cleated hip caps, the peak junction, waste, layout and hip ventilation.",
    content: [
      {
        type: "p",
        text: "A hip roof in standing seam is a legitimate test of a crew. On a simple gable, every panel is the same length and every cut is square. On a hip, every panel on the hip plane is a different length, every one is cut on the hip angle, every seam runs into that angle and has to be terminated, and four planes have to meet convincingly at the top. There are no shortcuts in it, and the results vary enormously between installers.",
      },
      {
        type: "h2",
        heading: "What Happens Where a Seam Meets a Hip",
        text: "This is the detail that separates good hip work from bad. A standing seam rib runs up the panel and arrives at the hip line at an angle. Something has to happen to it, because the hip cap has to lie down over the panels and it cannot lie over a full-height rib.",
      },
      {
        type: "p",
        text: "The correct sequence is to cut the panel to the hip angle, cut the rib down, turn the pan up into a short vertical leg — the same principle as a ridge or headwall termination — and then dress the cut end of the rib closed with a hand seamer so there is no open channel. Some systems provide formed end caps for this. What is not acceptable is leaving the rib cut off square and open, relying on the hip cap and a bead of sealant to close it. An open rib end at a hip is a direct water path into the roof, and it is completely hidden once the cap is on.",
      },
      {
        type: "h2",
        heading: "The Hip Cap Assembly",
        text: "A hip cap is built essentially like a ridge cap, adapted for a line that runs down the roof rather than across it.",
      },
      {
        type: "ul",
        items: [
          "Self-adhered membrane runs the full length of the hip, centred on it, before anything else.",
          "A cleat or offset closure is fastened along each side of the hip line, set back from the centre so the panel legs sit behind it.",
          "The formed hip cap is wide enough to cover the panel terminations on both sides with a real margin, and hooks or fastens to the cleats rather than through the panel faces.",
          "Cap lengths lap uphill over downhill with butyl compressed in the lap.",
          "The bottom end of the hip cap terminates over the eave trim with a folded closure, so it is not an open tube for wind-driven rain, snow and insects.",
        ],
      },
      {
        type: "h2",
        heading: "The Peak",
        text: "At the top of a hip roof, either four hips converge at a single point on a pyramid roof, or two hips meet a ridge at each end on a conventional hip roof. Either way, three or four caps arrive at one location, and that junction is a fabrication problem, not a trim problem.",
      },
      {
        type: "p",
        text: "The answer is a fabricated peak cap — a formed and folded piece, or on high-end work a soldered or riveted-and-sealed assembly — made to cover the convergence completely and lap over each incoming cap. What fails is the common shortcut: butting the caps together and filling the resulting hole with sealant. That is the highest, most wind-exposed point on the roof, it moves with every temperature change, and the sealant will crack out. Peaks are a classic source of leaks that only show up in driving rain.",
      },
      {
        type: "callout",
        text: "When you are assessing hip work, look at three things: whether the panel pans are turned up at the hip line, whether the rib ends are dressed closed, and what is happening at the peak. All three are hidden once the caps are on, which is exactly why they get skipped.",
      },
      {
        type: "h2",
        heading: "Layout and Symmetry",
        text: "A hip roof shows its panel layout from every direction, which is not true of a gable house where two planes face away from the street. That makes the setting-out consequential. On each hip plane, seams that run at an angle into the hip line are visually prominent, and an asymmetrical layout — full panels on one side and a sliver at the other — is obvious from the driveway.",
      },
      {
        type: "p",
        text: "The usual approach is to establish a control line on each plane and work out from it so the layout is balanced, and to keep the layout consistent from plane to plane where the geometry allows so the seams relate to one another around the building. It costs planning time at the start and nothing afterwards.",
      },
      {
        type: "h2",
        heading: "Waste and Labour",
        text: "This is the practical thing to know before commissioning a hip roof in standing seam: it consumes more material and considerably more labour than the same area of gable roof. Every panel on a hip plane is cut on a bevel and every panel is a different length, so offcuts are unavoidable and cannot be used elsewhere. The rib terminations are hand work, panel by panel. The peak is fabrication. None of that is a reason not to do it — hip roofs in standing seam look excellent — but a quote that treats a hip roof as equivalent to a gable roof of the same area has not been thought through.",
      },
      {
        type: "h2",
        heading: "Ventilating a Hip Roof",
        text: "Hip roofs have a structural ventilation problem: there is very little ridge. A gable roof of the same footprint might have thirty or forty feet of ridge available for exhaust; a hip roof might have eight, and a pyramid roof has none at all. That is often not enough exhaust to balance the soffit intake around the whole perimeter.",
      },
      {
        type: "p",
        text: "The options are vented hip caps, which run vent material along the hip lines the same way a ridge vent runs along a ridge and can add substantial exhaust capacity, or other high-level exhaust arranged so it does not short-circuit the intake. This has to be worked out before the caps are fabricated, because retrofitting ventilation into a finished hip is a much bigger job than building it in.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "Why do hip roofs leak at the peak?",
            a: "Because the peak is where three or four caps converge, it is the most wind-exposed point on the roof, and it is frequently closed with sealant rather than a fabricated cap. Sealant at that location is worked by every temperature cycle and every gust, and once it cracks the opening is straight into the roof.",
          },
          {
            q: "How do you ventilate a hip roof with almost no ridge?",
            a: "Vented hip caps are the usual answer — vent material along the hip lines under the cap, working the same way a ridge vent does. It needs to be planned before the caps are made, and it has to be balanced against the soffit intake.",
          },
          {
            q: "Is a hip roof more work in standing seam than a gable?",
            a: "Yes, substantially. Every panel is a different length and cut on a bevel, offcuts cannot be reused, each rib termination is hand work, and the peak is fabricated. Expect more material and more labour for the same measured area.",
          },
          {
            q: "Can hips be done in exposed-fastener panel instead?",
            a: "They can, and it is common on agricultural buildings. The panels are still cut on the bevel, so the waste and cutting labour do not go away, and the hip cap is stitched to the panel ribs over profile closures rather than hooked to cleats. The visual result is noticeably less refined than a seamed hip.",
          },
        ],
      },
    ],
  },
  {
    slug: "pitch-transitions-roof-to-roof-junctions-metal",
    title: "Pitch Transitions and Roof-to-Roof Junctions in Metal Roofing",
    excerpt:
      "Where a roof changes slope, water accelerates, snow stalls, and two panel runs that both need to move have to be joined. The transition flashing does all of that.",
    readTime: "8 min read",
    category: "Metal Roofing",
    metaTitle: "Pitch Transitions and Roof-to-Roof Junctions in Metal Roofing",
    metaDescription:
      "How pitch changes and roof-to-roof junctions are detailed in metal roofing, minimum slope limits, transition flashings, and why ice builds at every pitch break.",
    content: [
      {
        type: "p",
        text: "A pitch transition is any line where the roof changes slope — the break on a gambrel, the point where a steep main roof runs out onto a shallower porch or verandah roof, the junction where a shed dormer's low-slope roof meets the main plane. They are common on older Ontario houses and on almost every addition, and they concentrate several problems in one line: water arriving fast, snow stalling, ice building, and two panel runs meeting that each need to move independently.",
      },
      {
        type: "h2",
        heading: "The Two Geometries",
        text: "Transitions come in two shapes and they behave differently. A convex break is where the roof gets flatter as it goes down — a steep upper plane running out onto a shallower lower plane. Water arrives at the break travelling fast and can literally overshoot, jumping the joint rather than following it. A concave transition is the reverse: a shallow plane running up into a steeper one. That is a collecting geometry — water slows, debris stops, and snow and ice pile up in the angle.",
      },
      {
        type: "h2",
        heading: "The Minimum Slope Question",
        text: "This is the first thing to check and the most commonly ignored. Every metal panel system has a minimum slope below which the manufacturer does not permit it. Snap-lock standing seam profiles generally have a higher minimum than mechanically seamed profiles, and mechanically seamed panels used at low slope typically require a factory-applied or field-applied in-seam sealant. Those thresholds are published, and they exist because at low slope water no longer runs off promptly — it moves slowly, it sits, and it is driven back up under seams by wind.",
      },
      {
        type: "p",
        text: "The classic failure is a house with a steep main roof and a shallow porch or verandah roof, panelled in the same profile throughout because it looked tidy. The main roof performs and the porch leaks, because the porch is below the profile's minimum slope. The correct answer is to use a different system on the low-slope section — a mechanically seamed panel with in-seam sealant, or a membrane roof — and detail the transition between them.",
      },
      {
        type: "h2",
        heading: "How the Transition Is Built",
        text: "The essential requirement is that the upper panels and the lower panels both terminate into a transition flashing, and neither is pinned by it.",
      },
      {
        type: "ul",
        items: [
          "The upper panel ends are hemmed downward and hook over the upper leg of the transition flashing.",
          "The lower panel ends are turned up into a leg that sits behind the flashing's lower drip.",
          "The flashing itself is held with concealed cleats, fastened to the deck at the break line, with no fasteners through either panel face.",
          "Self-adhered membrane runs generously across the break line, up onto the upper plane and down onto the lower one, before the flashing.",
          "The flashing's exposed leg is hemmed so water drips clear of the joint rather than running back under it.",
        ],
      },
      {
        type: "p",
        text: "What does not work — and is the shortcut that shows up constantly — is simply lapping the upper panel over the lower one and running a row of screws through both. That pins two panel runs that each need to expand and contract, in opposite directions relative to the joint. Within a few seasons the holes elongate, the lap opens, and the joint is exactly where the most water on the roof passes through.",
      },
      {
        type: "callout",
        text: "At a convex break, water leaving a steep plane can overshoot the joint entirely in heavy rain and land some distance down the lower roof. That is not a leak, but the transition detail has to assume it happens: the flashing's lower leg needs to reach far enough down the shallow plane that the landing zone is on top of it, not on an unprotected joint.",
      },
      {
        type: "h2",
        heading: "Snow and Ice at the Break",
        text: "This is the Ontario-specific behaviour and it drives a lot of the detailing. Snow sliding down a steep plane arrives at a shallower one and stops, because the shallow plane does not provide enough slope to keep it moving. It accumulates there, sometimes deeply. Underneath it, heat from the building melts the base layer, the meltwater runs down the shallow plane, and at the eave it refreezes. Pitch breaks become permanent ice-dam locations.",
      },
      {
        type: "p",
        text: "The practical consequences are that a transition needs membrane well beyond what a rain climate would require, that the lower plane below the break should be treated as an ice-dam-prone zone in its own right, and that snow retention above the break can help — with the caveat that snow guards hold snow where they are placed, so putting them above a transition means deliberately loading that area. It is a structural decision as much as a roofing one.",
      },
      {
        type: "h2",
        heading: "Concentrated Volume",
        text: "There is an arithmetic point that gets missed on roof-to-roof junctions. When a large upper plane drains onto a small lower one, the lower roof handles far more water per unit of its own area than its size suggests. A modest porch roof beneath a large main roof may be carrying the runoff of many times its own footprint. Details on that lower roof — the transition, the valley terminations, the eave, the eavestrough sizing — all need to be scaled to the water actually arriving rather than to the area of the roof they sit on.",
      },
      {
        type: "h2",
        heading: "Diverters",
        text: "A diverter — a small formed flashing that redirects water sideways — is sometimes used at a transition or where a roof discharges onto a wall or a walkway. They work, and they have a cost: they take water that was spread across a length of roof edge and concentrate it at one point. In winter that concentration point is where an ice column forms. Diverters are a considered tool for a specific problem, not something to add casually.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "Can the same panel run continue across a pitch change?",
            a: "No. The panel would have to be bent along its length at the break, which a formed panel with a seam cannot accommodate, and the two planes need to move independently anyway. A pitch change is always a joint, and it needs a transition flashing.",
          },
          {
            q: "What is the minimum pitch for a standing seam roof?",
            a: "It depends on the system. Snap-lock profiles generally require a steeper minimum than mechanically seamed profiles, and mechanically seamed panels at low slope usually require in-seam sealant. The manufacturer publishes the limit for their product, and it should be checked against the actual pitch of every plane on the roof, not just the main one.",
          },
          {
            q: "Why does my porch roof leak when the main roof does not?",
            a: "Two usual reasons. Either the porch is below the panel system's minimum slope and should never have been done in that profile, or it sits below a pitch break where snow and ice accumulate every winter and drive water back under a joint that was designed only for running water.",
          },
          {
            q: "Should I put snow guards above a pitch transition?",
            a: "Sometimes, but it is a deliberate trade-off. Snow guards hold snow where they are installed, so placing them above a transition means intentionally loading that part of the roof rather than letting it shed. That has to be assessed against the structure and against what is below the eave.",
          },
        ],
      },
    ],
  },
  {
    slug: "metal-panel-layout-setting-out-first-panel",
    title: "Panel Layout and Setting Out: Why the First Panel Decides the Roof",
    excerpt:
      "An eighth of an inch of error in the first panel becomes an inch by the far rake. Setting out is the half-day that determines whether the finished roof looks right.",
    readTime: "8 min read",
    category: "Metal Roofing",
    metaTitle: "Metal Panel Layout and Setting Out: Getting the First Panel Right",
    metaDescription:
      "How metal roof panel layout is set out — checking the roof for square, dividing the run, control lines, hem allowances, and why the first panel governs everything.",
    content: [
      {
        type: "p",
        text: "Everything about how a finished metal roof looks is decided before the second panel goes down. Panels reference the panel beside them, so any error in the first one is inherited by every panel after it and accumulates across the roof. Get the first panel out of square by an eighth of an inch over its length and by the far rake you can be an inch or more off — enough that the last seam does not land where the trim needs it, enough that the panel widths visibly do not work, and far too late to fix without stripping back.",
      },
      {
        type: "h2",
        heading: "Assume the Roof Is Not Square",
        text: "Almost no roof is square, and older houses in this part of Ontario are notably not. Framing was cut by eye, walls settled, additions were added by whoever was available. Before laying out anything, measure the roof properly: the length at the eave, the length at the ridge, and both diagonals on each plane. If the eave and ridge lengths differ, the plane is a trapezoid, not a rectangle, and the layout has to account for it. If the diagonals differ, it is out of square.",
      },
      {
        type: "p",
        text: "Knowing this before you start is the entire point. A plane that is out of square by three-quarters of an inch over its length can be handled gracefully — split the discrepancy across the roof, or absorb it into the trim at the rakes, or run the panels square and let the rake trim take up the difference. Discovering it at the last panel means one bad option.",
      },
      {
        type: "h2",
        heading: "Dividing the Run",
        text: "Take the total eave length and divide it by the net coverage width of the panel — the width the panel actually covers once seamed, not the width of the coil. There will be a remainder. What you do with that remainder is the layout decision.",
      },
      {
        type: "ul",
        items: [
          "Splitting the remainder gives a partial panel of equal width at each rake, which is symmetrical and reads deliberately.",
          "Putting the whole remainder at one end leaves a narrow sliver at that rake, which looks like an error even to someone who does not know why.",
          "Some systems allow a small adjustment in coverage width at the seam, which lets the discrepancy be distributed across many panels and hidden entirely.",
          "A partial panel should never be so narrow that it cannot be properly seamed and clipped — check the system's minimum.",
          "On a hip roof, or a roof where multiple planes are seen together, the layouts of adjacent planes should relate to one another rather than each being solved in isolation.",
        ],
      },
      {
        type: "h2",
        heading: "The Control Line",
        text: "The panels are set out from a chalk line, and there is a right way to establish it. Square a line to the eave using a large 3-4-5 triangle or by checking diagonals — not with a framing square, which is far too small to establish a line over thirty feet. Snap that line at the position of the first seam, not the first panel edge, because the seam is the visual element and the seam is what has to be straight.",
      },
      {
        type: "p",
        text: "Then check against that control line as you go. The mistake is measuring panel to panel, which propagates error. Measure from the control line to each seam every few panels; if the roof is starting to run, you find out while you still have thirty panels in which to correct it rather than at the last one.",
      },
      {
        type: "h2",
        heading: "Which End to Start From",
        text: "Two considerations. On exposed-fastener panels there is a lap direction, and starting at the downwind end means the prevailing wind blows across the laps rather than into them. On standing seam, start from the most visible rake or the most important reference line, so that if a discrepancy has to be absorbed somewhere it ends up where it will be least noticed — which is usually the back of the house or the least-seen gable.",
      },
      {
        type: "callout",
        text: "Check the eave with a string line before any panel goes on. A bowed or wavy fascia means the panel hems will not sit in a straight line, and the resulting wobble runs the full length of the roof at the most visible edge. Straightening or shimming the fascia is straightforward at that stage and impossible afterwards.",
      },
      {
        type: "h2",
        heading: "Panel Length and Hem Allowances",
        text: "Panel length is measured plane by plane, and it is not simply the eave-to-ridge dimension. It includes the allowance for the hem at the eave, the allowance for the upturned leg at the ridge or headwall, and any allowance the system requires for the panel to sit correctly in its cleats. Get the allowance wrong and the panels are short at the eave, which cannot be corrected.",
      },
      {
        type: "p",
        text: "This is one of the strong arguments for roll-forming on site: panels are cut to the exact length needed for each plane, and on a hip roof — where every panel is a different length — it is close to essential. Ordering pre-cut panels means the measurements have to be right before anything is manufactured, with no recovery.",
      },
      {
        type: "h2",
        heading: "Planning Around Obstructions",
        text: "Setting out is also when you decide where the seams land relative to everything that interrupts the roof: chimneys, skylights, dormers, valleys, plumbing stacks, solar mounts. A seam running into the middle of a skylight curb, or a plumbing stack landing directly on a seam line, are both problems created at layout and paid for later at the flashing stage. Walk the roof with the layout in mind and shift the starting point a few inches if it puts a seam somewhere better.",
      },
      {
        type: "h2",
        heading: "The Fixed Point",
        text: "One more thing gets decided before the first clip: where the panels are anchored. A standing seam panel is fixed at one point along its length and free everywhere else, and whether that is at the ridge or at the eave determines which way the panels grow as they heat. That decision affects the ridge and eave details, so it is made at setting-out, not improvised partway up the roof.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "What do you do when the roof is out of square?",
            a: "Measure it first, then decide where the discrepancy goes. It can be split across the roof, absorbed progressively if the system allows a small adjustment in coverage width, or taken up in the rake trim at one or both ends. What you cannot do is ignore it and discover it at the last panel.",
          },
          {
            q: "Should panels start from the left or the right?",
            a: "On exposed-fastener panels, start at the downwind end so the prevailing wind blows across the laps rather than into them. On standing seam, start from the most visible or most important edge, so any discrepancy that has to be absorbed ends up where it shows least.",
          },
          {
            q: "Can panel coverage width be adjusted to make a layout work?",
            a: "Some systems allow a small variation in effective coverage at the seam, which is a useful tool for distributing a discrepancy across a whole roof instead of concentrating it at one rake. The available range is a property of the specific profile, so it is a question for the manufacturer.",
          },
          {
            q: "How do you deal with a bowed eave?",
            a: "String-line the eave and correct it before the panels go on — shim or plane the fascia, or adjust the eave trim line to run straight even if the fascia does not. A wavy eave produces a visible waver in the hem line along the most prominent edge of the roof, and there is no fixing it afterwards.",
          },
        ],
      },
    ],
  },
  {
    slug: "cutting-metal-roofing-panels-correctly",
    title: "Cutting Metal Panels Correctly (and Why a Chop Saw Ruins the Coating)",
    excerpt:
      "An abrasive wheel burns off the metallic coating at the cut and sprays hot filings across the roof. Those filings rust into the paint within weeks. Cut cold, always.",
    readTime: "7 min read",
    category: "Metal Roofing",
    metaTitle: "How to Cut Metal Roofing Panels Without Damaging the Coating",
    metaDescription:
      "Why abrasive saws and grinders ruin metal roof panels, which cold-cutting tools to use, how to handle swarf, and how to treat cut edges properly.",
    content: [
      {
        type: "p",
        text: "There is a specific way to permanently damage a brand new metal roof in about ninety seconds, and it involves an abrasive chop saw. It is one of the more visible signs of an inexperienced crew, the damage is not repairable, and the symptoms do not appear until weeks later — by which point everyone has gone home and the roof has a case of orange freckles that will not wash off.",
      },
      {
        type: "h2",
        heading: "How a Coated Panel Is Built",
        text: "To understand why hot cutting is destructive, it helps to know the layers. A steel roofing panel starts as a steel substrate. Over that goes a metallic coating — an aluminum-zinc alloy or zinc — applied on both faces. Over that goes a primer and a finish paint system. The metallic coating is the corrosion protection; the paint is colour and additional protection.",
      },
      {
        type: "p",
        text: "The metallic layer does something clever at a cut edge. Because zinc is less noble than steel, it corrodes preferentially and protects the exposed steel for a short distance along the cut. That is why a properly cut edge on a coated panel does not immediately start rusting. It only works if the metallic coating is still there at the edge.",
      },
      {
        type: "h2",
        heading: "What an Abrasive Wheel Does",
        text: "An abrasive chop saw or a cut-off wheel in a grinder does not shear the metal, it grinds it away. The process generates enough heat at the cut to burn off the paint and volatilize the metallic coating in the heat-affected zone either side of the cut. The edge that is left has bare, unprotected steel and no sacrificial coating to look after it, so it rusts.",
      },
      {
        type: "ul",
        items: [
          "The cut edge is left with the corrosion protection burnt away, so it rusts from the edge inward.",
          "The wheel throws a spray of hot steel particles — swarf — across everything nearby, including installed panels.",
          "Those particles are hot enough to embed themselves into the paint film rather than sitting on top of it.",
          "Each embedded particle rusts, usually within weeks, and leaves a permanent orange spot that cannot be washed or wiped off.",
          "Heat discolouration extends visibly along the panel either side of the cut.",
          "Many panel manufacturers explicitly prohibit abrasive cutting in their installation instructions. Read them.",
        ],
      },
      {
        type: "h2",
        heading: "The Right Tools",
        text: "Everything used to cut roofing panels should cut cold — shearing the metal rather than grinding it — and should produce chips that fall rather than fly.",
      },
      {
        type: "h3",
        heading: "Powered Shears and Nibblers",
        text: "Electric or pneumatic shears are the professional standard. A double-cut shear removes a narrow ribbon of waste and leaves both sides of the cut flat and undistorted, which is what you want when cutting a panel to width. A single-cut shear is faster and slightly distorts one side, which is fine when the offcut is waste. A nibbler punches a series of overlapping bites and will follow a curve or start an interior cut, which is what you want for cut-outs around penetrations. All of them cut cold and produce no heat damage.",
      },
      {
        type: "h3",
        heading: "Hand Snips",
        text: "Aviation snips are indispensable for trim work, notching, forming corners and finishing hems. The colour coding is worth knowing: red cuts left, green cuts right, yellow cuts straight. Offset snips let you keep the cut flat rather than lifting the material as you go, which matters when you are cutting a piece that has to stay true.",
      },
      {
        type: "h3",
        heading: "Metal-Cutting Circular Saw Blades",
        text: "A circular saw with a carbide metal-cutting blade — including reverse-tooth blades made for roofing panel — is acceptable for long straight cuts and is used widely. It is still a chip-producing tool, so it is used off the roof, on a bench, with the panel face down, and the work area swept afterwards. It does not generate the heat an abrasive wheel does, but it is not as clean as shears.",
      },
      {
        type: "callout",
        text: "Sweep the roof at the end of every day. Steel filings left on a panel overnight will be sitting in dew by morning, and rust stains will start immediately. A soft broom and a magnet along every panel, into the valleys and out of the eavestrough, is a five-minute job that prevents a permanent, highly visible defect.",
      },
      {
        type: "h2",
        heading: "Where to Cut",
        text: "Cut on the ground or on a cutting table, not on installed panels. Cut with the panel face down where the tool permits, so chips fall away from the finished surface and so any burr is on the underside. Keep cutting well away from finished roof areas and from vehicles, windows and eavestroughs — swarf lands on all of them and rusts on all of them. On a windy day, that distance needs to be larger than you think.",
      },
      {
        type: "h2",
        heading: "Cut Edges and Touch-Up",
        text: "A cold-cut edge on a coated steel panel is generally acceptable where it will be concealed, because the metallic coating protects the edge for a short distance. Best practice is still to hem or turn any cut edge that sits in a water channel — a valley, for instance — so no raw edge is exposed to running water and no capillary path is created.",
      },
      {
        type: "p",
        text: "Touch-up paint is for small scratches and nicks in the finished surface, applied sparingly with a fine brush. It is not a substitute for a properly cut and detailed edge, and it should not be used to paint a long cut edge. Factory finishes and touch-up paint weather differently — the touch-up will chalk and shift in colour at a different rate, so a stripe of it along an exposed edge becomes more visible over time rather than less.",
      },
      {
        type: "h2",
        heading: "Handling and Storage",
        text: "Related habits protect the finish just as much as cutting technique. Do not drag panels across one another; lift them clear. Keep bundles off the ground and covered but ventilated, because condensation trapped between stacked panels causes staining. If the panels come with a strippable protective film, remove it within the window the manufacturer states — left in sunlight past that point, the film bakes on and removing it becomes a nightmare that risks the finish beneath.",
      },
      {
        type: "faq",
        faqs: [
          {
            q: "Can I use an angle grinder to cut roofing panel?",
            a: "No. It is the same problem as a chop saw — it grinds rather than shears, burns the coating off the cut edge, and sprays hot filings across everything nearby. Shears, a nibbler or a metal-cutting circular saw blade are the alternatives.",
          },
          {
            q: "What can be done if a previous crew left filings on the roof?",
            a: "Sweep and go over the panels with a magnet as soon as possible. If the particles have already been there through some dew cycles they may have rusted into the paint film, in which case the staining is generally permanent. It is cosmetic rather than structural, but it does not come out.",
          },
          {
            q: "How do you cut a curve or an opening in the middle of a panel?",
            a: "A nibbler. It punches overlapping bites, will start from a drilled pilot hole, and follows a curve without distorting the surrounding metal. Snips can do it on light material but tend to lift and deform the panel around the cut.",
          },
          {
            q: "Do cut edges rust on a coated steel panel?",
            a: "A cold-cut edge is protected for a short distance by the metallic coating, which corrodes preferentially to protect the exposed steel. A hot-cut edge has had that coating burnt off and does rust. In either case, edges sitting in a water channel should be hemmed or turned rather than left raw.",
          },
          {
            q: "Should cut edges be painted with touch-up paint?",
            a: "Not as a rule. Touch-up is for small scratches, applied sparingly. It weathers differently from the factory finish, so a painted stripe along a cut edge becomes more noticeable over time. Detail the edge so it is concealed or hemmed instead.",
          },
        ],
      },
    ],
  },
];
