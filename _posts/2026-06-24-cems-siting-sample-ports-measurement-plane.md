---
layout: post
title: "Where your CEMS goes: siting, sample ports and the measurement plane DOE accepts"
date: 2026-06-24 02:00:00
description: "Part 4 of our Buying a CEMS series: the physical install. The 5D/2D straight-length rule, where in the cross-section the analyser and the manual SRM sit, the sample ports and platform DOE expects, and the homogeneity-test route for awkward stacks — drawn from the DOE CEMS Guidelines V8, Chapter 4."
series: buying
part: 4
---

*Buying a CEMS — Part 4 of 5. A practical series for industry, drawn from the DOE CEMS Guidelines (Version 8, 2025), which we helped develop.*

In [Part 3]({{ '/insights/how-cems-measures-extractive-in-situ-sampling/' | relative_url }}) we matched the sampling method to your flue gas. But a perfectly chosen system bolted to the *wrong spot on the stack* will still give you bad data — and, worse, can fail its calibration through no fault of the analyser. This part is about the one decision you can't quietly fix later: **where the system physically goes.**

Siting has to be designed in *before* the stack steel is fabricated, because it dictates where the sampling ports, the platform and the cabling all land. Get it onto the drawings early and it costs nothing; discover it after the stack is up and you're cutting new ports at height, or arguing with DOE about whether your data is representative.

## The three things every location must satisfy

The Guidelines open Chapter 4 with three non-negotiable principles for any CEMS install (§4.2.1):

- **The measurement must be representative** of the actual stack emission. (Dilution to hit a number is prohibited under Reg 14 of CAR 2014.)
- **The effluent gases must be well mixed** at the point of measurement.
- **The location must be accessible** for maintenance, repairs and calibration.

Everything else in this article is really just the practical detail of how you prove those three things to the regulator.

## The straight-length rule

The single most important siting number is how far the measurement plane sits from any **flow disturbance** — a bend, a fan, a junction, a damper, an expansion. Right after a disturbance the gas is swirling and stratified: pockets of high and low concentration that haven't blended yet. Measure there and your reading depends on exactly where in the swirl you happened to sample. Give the flow enough straight duct to settle and it becomes uniform — *well mixed*, as principle two requires.

The Guidelines set the target as a run of straight duct measured in **equivalent duct diameters (D)** — the hydraulic diameter of the duct. The working requirement (§4.2.2.1) is a plane at least **5 D downstream** of the disturbance behind it and at least **2 D upstream** of the next disturbance ahead of it, within an overall ideal of 5 D either side.

<figure class="fig">
<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sl-t sl-d" font-family="'Helvetica Neue',Helvetica,Arial,sans-serif">
<title id="sl-t">The 5D / 2D straight-length rule for a CEMS measurement plane</title>
<desc id="sl-d">A horizontal duct with a flow disturbance at each end. The measurement plane sits at least five duct diameters downstream of the upstream disturbance and at least two duct diameters upstream of the next disturbance.</desc>
<!-- duct walls -->
<line x1="70" y1="110" x2="610" y2="110" stroke="var(--ink)" stroke-width="2"/>
<line x1="70" y1="190" x2="610" y2="190" stroke="var(--ink)" stroke-width="2"/>
<!-- disturbance zones -->
<rect x="70" y="110" width="52" height="80" fill="var(--line)"/>
<rect x="558" y="110" width="52" height="80" fill="var(--line)"/>
<text x="96" y="80" text-anchor="middle" font-size="10" fill="var(--muted)">upstream</text>
<text x="96" y="93" text-anchor="middle" font-size="10" fill="var(--muted)">disturbance</text>
<text x="584" y="80" text-anchor="middle" font-size="10" fill="var(--muted)">next</text>
<text x="584" y="93" text-anchor="middle" font-size="10" fill="var(--muted)">disturbance</text>
<!-- flow arrow -->
<line x1="150" y1="150" x2="210" y2="150" stroke="var(--green)" stroke-width="2"/>
<path d="M210 150 L200 145 L200 155 Z" fill="var(--green)"/>
<text x="180" y="168" text-anchor="middle" font-size="9" fill="var(--muted)">flow</text>
<!-- diameter D -->
<line x1="150" y1="110" x2="150" y2="190" stroke="var(--grey)" stroke-width="1" stroke-dasharray="3 3"/>
<text x="160" y="135" font-size="11" font-weight="700" fill="var(--ink)">D</text>
<text x="160" y="149" font-size="8.5" fill="var(--muted)">duct dia.</text>
<!-- measurement plane -->
<line x1="430" y1="100" x2="430" y2="200" stroke="var(--green-d)" stroke-width="2" stroke-dasharray="5 4"/>
<rect x="424" y="92" width="12" height="18" fill="var(--green-d)"/>
<text x="430" y="84" text-anchor="middle" font-size="11" font-weight="700" fill="var(--green-d)">measurement plane</text>
<text x="430" y="216" text-anchor="middle" font-size="9" fill="var(--muted)">sampling port</text>
<!-- dimension 5D -->
<line x1="122" y1="245" x2="430" y2="245" stroke="var(--grey)" stroke-width="1"/>
<path d="M122 245 L132 240 L132 250 Z" fill="var(--grey)"/>
<path d="M430 245 L420 240 L420 250 Z" fill="var(--grey)"/>
<text x="276" y="262" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">≥ 5 D</text>
<text x="276" y="277" text-anchor="middle" font-size="9" fill="var(--muted)">downstream of disturbance</text>
<!-- dimension 2D -->
<line x1="430" y1="245" x2="558" y2="245" stroke="var(--grey)" stroke-width="1"/>
<path d="M430 245 L440 240 L440 250 Z" fill="var(--grey)"/>
<path d="M558 245 L548 240 L548 250 Z" fill="var(--grey)"/>
<text x="494" y="262" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">≥ 2 D</text>
<text x="494" y="277" text-anchor="middle" font-size="9" fill="var(--muted)">before the next</text>
</svg>
<figcaption>The straight-length rule (Guidelines V8 §4.2.2.1): give the gas at least five duct diameters to settle after a disturbance, and keep at least two before the next one, so the plane sees well-mixed flow.</figcaption>
</figure>

The rule is about **flow, not orientation.** The Guidelines define *upstream* and *downstream* by the direction the gas travels — from the stack inlet toward the sampling port, then from the port toward the outlet — so the same 5 D / 2 D applies whether the gas runs along a horizontal duct or straight up a vertical stack. The vertical chimney is in fact the more common case:

<figure class="fig">
<svg viewBox="0 0 680 350" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="vs-t vs-d" font-family="'Helvetica Neue',Helvetica,Arial,sans-serif">
<title id="vs-t">The 5D / 2D straight-length rule on a vertical stack</title>
<desc id="vs-d">A vertical stack with gas flowing upward, a disturbance at the inlet below and the outlet above. The measurement plane sits at least five duct diameters above the inlet disturbance and at least two duct diameters below the outlet.</desc>
<!-- stack walls -->
<line x1="250" y1="50" x2="250" y2="300" stroke="var(--ink)" stroke-width="2"/>
<line x1="330" y1="50" x2="330" y2="300" stroke="var(--ink)" stroke-width="2"/>
<!-- disturbance zones -->
<rect x="250" y="300" width="80" height="26" fill="var(--line)"/>
<rect x="250" y="24" width="80" height="26" fill="var(--line)"/>
<text x="290" y="343" text-anchor="middle" font-size="10" fill="var(--muted)">upstream disturbance (inlet · bend)</text>
<text x="290" y="18" text-anchor="middle" font-size="10" fill="var(--muted)">next disturbance (outlet)</text>
<!-- flow arrow up -->
<line x1="290" y1="252" x2="290" y2="202" stroke="var(--green)" stroke-width="2"/>
<path d="M290 202 L285 212 L295 212 Z" fill="var(--green)"/>
<text x="306" y="232" font-size="9" fill="var(--muted)">flow</text>
<!-- diameter D -->
<line x1="250" y1="88" x2="330" y2="88" stroke="var(--grey)" stroke-width="1" stroke-dasharray="3 3"/>
<text x="290" y="80" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">D</text>
<text x="290" y="105" text-anchor="middle" font-size="8.5" fill="var(--muted)">duct dia.</text>
<!-- measurement plane -->
<line x1="240" y1="122" x2="340" y2="122" stroke="var(--green-d)" stroke-width="2" stroke-dasharray="5 4"/>
<rect x="330" y="116" width="18" height="12" fill="var(--green-d)"/>
<text x="360" y="120" font-size="11" font-weight="700" fill="var(--green-d)">measurement plane</text>
<text x="360" y="134" font-size="9" fill="var(--muted)">sampling port</text>
<!-- dim 5D (left) -->
<line x1="205" y1="300" x2="205" y2="122" stroke="var(--grey)" stroke-width="1"/>
<path d="M205 300 L200 290 L210 290 Z" fill="var(--grey)"/>
<path d="M205 122 L200 132 L210 132 Z" fill="var(--grey)"/>
<text x="190" y="207" text-anchor="end" font-size="13" font-weight="700" fill="var(--ink)">≥ 5 D</text>
<text x="190" y="222" text-anchor="end" font-size="9" fill="var(--muted)">downstream of disturbance</text>
<!-- dim 2D (left) -->
<line x1="205" y1="122" x2="205" y2="50" stroke="var(--grey)" stroke-width="1"/>
<path d="M205 122 L200 112 L210 112 Z" fill="var(--grey)"/>
<path d="M205 50 L200 60 L210 60 Z" fill="var(--grey)"/>
<text x="190" y="84" text-anchor="end" font-size="13" font-weight="700" fill="var(--ink)">≥ 2 D</text>
<text x="190" y="99" text-anchor="end" font-size="9" fill="var(--muted)">before the next</text>
</svg>
<figcaption>The same rule on a vertical stack (Guidelines V8 §4.2.2.1). Upstream and downstream follow the gas — up from the inlet, on toward the outlet — so the 5 D / 2 D spacing is identical to the horizontal case.</figcaption>
</figure>

The same plane serves the CEMS and the **manual stack test** — under §4.2.8 the Standard Reference Method location is prepared to the same criteria, because the [SRM is what your CEMS is calibrated against]({{ '/insights/why-cems-needs-manual-stack-tests-srm/' | relative_url }}). One well-chosen plane does both jobs.

## Where exactly in the cross-section

Straight-length gets you a good plane; now the question is *where in that plane* each measurement sits. There are three answers, depending on what's measuring.

<figure class="fig">
<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="xs-t xs-d" font-family="'Helvetica Neue',Helvetica,Arial,sans-serif">
<title id="xs-t">Where the analyser and the SRM sit in the duct cross-section</title>
<desc id="xs-d">Three duct cross-sections. A point CEMS measures at one spot at least one metre from the wall or over the centroidal area. A path CEMS sends a double-pass beam across the duct, at least 70 percent of it within the inner half of the area. The manual SRM traverses points placed at the centres of equal areas.</desc>
<!-- Panel 1: Point -->
<circle cx="116" cy="104" r="64" fill="none" stroke="var(--ink)" stroke-width="2"/>
<circle cx="116" cy="104" r="26" fill="none" stroke="var(--grey)" stroke-width="1" stroke-dasharray="3 3"/>
<circle cx="116" cy="104" r="7" fill="var(--green-d)"/>
<text x="116" y="26" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Point CEMS</text>
<text x="116" y="194" text-anchor="middle" font-size="9.5" fill="var(--muted)">one point — ≥ 1 m from the wall,</text>
<text x="116" y="207" text-anchor="middle" font-size="9.5" fill="var(--muted)">or over the centroidal area</text>
<!-- Panel 2: Path -->
<circle cx="340" cy="104" r="64" fill="none" stroke="var(--ink)" stroke-width="2"/>
<circle cx="340" cy="104" r="45" fill="none" stroke="var(--grey)" stroke-width="1" stroke-dasharray="3 3"/>
<line x1="276" y1="104" x2="404" y2="104" stroke="var(--green-d)" stroke-width="3"/>
<path d="M404 104 L394 99 L394 109 Z" fill="var(--green-d)"/>
<rect x="404" y="92" width="5" height="24" fill="var(--grey)"/>
<text x="340" y="26" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Path CEMS</text>
<text x="340" y="194" text-anchor="middle" font-size="9.5" fill="var(--muted)">beam across — double-pass,</text>
<text x="340" y="207" text-anchor="middle" font-size="9.5" fill="var(--muted)">≥ 70% within the inner 50% of area</text>
<!-- Panel 3: SRM traverse -->
<circle cx="564" cy="104" r="64" fill="none" stroke="var(--ink)" stroke-width="2"/>
<line x1="500" y1="104" x2="628" y2="104" stroke="var(--line)" stroke-width="1"/>
<line x1="564" y1="40" x2="564" y2="168" stroke="var(--line)" stroke-width="1"/>
<circle cx="564" cy="104" r="4" fill="var(--ink)"/>
<circle cx="532" cy="104" r="4" fill="var(--ink)"/><circle cx="508" cy="104" r="4" fill="var(--ink)"/>
<circle cx="596" cy="104" r="4" fill="var(--ink)"/><circle cx="620" cy="104" r="4" fill="var(--ink)"/>
<circle cx="564" cy="72" r="4" fill="var(--ink)"/><circle cx="564" cy="48" r="4" fill="var(--ink)"/>
<circle cx="564" cy="136" r="4" fill="var(--ink)"/><circle cx="564" cy="160" r="4" fill="var(--ink)"/>
<text x="564" y="26" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">SRM traverse</text>
<text x="564" y="194" text-anchor="middle" font-size="9.5" fill="var(--muted)">manual method — points at</text>
<text x="564" y="207" text-anchor="middle" font-size="9.5" fill="var(--muted)">the centres of equal areas</text>
</svg>
<figcaption>Three things share the plane: the continuous analyser as a point or a path (Guidelines V8 §4.2.6–4.2.7), and the manual SRM's grid of equal-area traverse points (ISO 9096:2017, Table 1). The bigger the duct, the more traverse points the SRM needs.</figcaption>
</figure>

A **point** CEMS measures at a single spot, which must be **at least 1.0 m from the duct wall** or sit over the centroidal area (§4.2.6). A **path** CEMS shoots a beam across the duct — and remember from Part 3 that DOE accepts **double-pass only**; the path must lie within 1 m of the wall, with **at least 70% of it inside the inner 50%** of the cross-section (§4.2.7). The **manual SRM**, meanwhile, doesn't measure at one place at all: it traverses a grid of points set at the centres of equal areas, and ISO 9096 scales that grid with duct size — a small duct may need a handful of points, a duct over 2 m needs seventeen.

That last detail is why the plane has to be *genuinely* well mixed: the CEMS reads one point or one line, but it has to agree with the SRM's full-section average at [QAL2]({{ '/insights/qal2-calibration-variability-test-cems/' | relative_url }}). A stratified plane is exactly where that agreement breaks down.

### Round stack or square duct?

The shape of your duct changes how that traverse grid is laid out — and therefore how many ports and how much platform you'll need to budget for. ISO 9096 divides a **circular** duct into equal-area rings, so the points sit on two perpendicular diameters and bunch toward the wall (Table 1: 5, 9, 13 or 17 points as the duct widens). A **rectangular or square** duct is instead split into a grid of equal rectangles with a point at the centre of each — 4, 9 or 16 points as the plane area grows (Table 2).

<figure class="fig">
<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sh-t sh-d" font-family="'Helvetica Neue',Helvetica,Arial,sans-serif">
<title id="sh-t">Traverse points in a circular versus a rectangular duct</title>
<desc id="sh-d">A circular duct divides into equal-area rings with sampling points on two diameters that cluster toward the wall. A rectangular or square duct divides into an even grid of equal rectangles with a point at the centre of each cell.</desc>
<!-- Circular -->
<text x="180" y="26" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Circular duct</text>
<circle cx="180" cy="110" r="66" fill="none" stroke="var(--ink)" stroke-width="2"/>
<line x1="114" y1="110" x2="246" y2="110" stroke="var(--line)" stroke-width="1"/>
<line x1="180" y1="44" x2="180" y2="176" stroke="var(--line)" stroke-width="1"/>
<circle cx="180" cy="110" r="4" fill="var(--ink)"/>
<circle cx="147" cy="110" r="4" fill="var(--ink)"/><circle cx="213" cy="110" r="4" fill="var(--ink)"/>
<circle cx="123" cy="110" r="4" fill="var(--ink)"/><circle cx="237" cy="110" r="4" fill="var(--ink)"/>
<circle cx="180" cy="77" r="4" fill="var(--ink)"/><circle cx="180" cy="53" r="4" fill="var(--ink)"/>
<circle cx="180" cy="143" r="4" fill="var(--ink)"/><circle cx="180" cy="167" r="4" fill="var(--ink)"/>
<text x="180" y="200" text-anchor="middle" font-size="9.5" fill="var(--muted)">equal-area rings — points sit on</text>
<text x="180" y="213" text-anchor="middle" font-size="9.5" fill="var(--muted)">diameters, clustering toward the wall</text>
<!-- Rectangular -->
<text x="500" y="26" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Rectangular / square duct</text>
<rect x="435" y="45" width="130" height="130" fill="none" stroke="var(--ink)" stroke-width="2"/>
<line x1="478.3" y1="45" x2="478.3" y2="175" stroke="var(--line)" stroke-width="1"/>
<line x1="521.7" y1="45" x2="521.7" y2="175" stroke="var(--line)" stroke-width="1"/>
<line x1="435" y1="88.3" x2="565" y2="88.3" stroke="var(--line)" stroke-width="1"/>
<line x1="435" y1="131.7" x2="565" y2="131.7" stroke="var(--line)" stroke-width="1"/>
<circle cx="456.7" cy="66.7" r="4" fill="var(--ink)"/><circle cx="500" cy="66.7" r="4" fill="var(--ink)"/><circle cx="543.3" cy="66.7" r="4" fill="var(--ink)"/>
<circle cx="456.7" cy="110" r="4" fill="var(--ink)"/><circle cx="500" cy="110" r="4" fill="var(--ink)"/><circle cx="543.3" cy="110" r="4" fill="var(--ink)"/>
<circle cx="456.7" cy="153.3" r="4" fill="var(--ink)"/><circle cx="500" cy="153.3" r="4" fill="var(--ink)"/><circle cx="543.3" cy="153.3" r="4" fill="var(--ink)"/>
<text x="500" y="200" text-anchor="middle" font-size="9.5" fill="var(--muted)">equal grid — a point at the centre</text>
<text x="500" y="213" text-anchor="middle" font-size="9.5" fill="var(--muted)">of each cell (here 3 × 3 = 9)</text>
</svg>
<figcaption>Two ways to grid the same plane: equal-area rings for circular ducts (ISO 9096:2017, Table 1) and an even grid for rectangular or square ducts (Table 2 / Annex B). Both place a point at the centre of an equal area — the geometry just differs.</figcaption>
</figure>

The DOE straight-length rule doesn't change with shape: for a non-circular duct you compute the **hydraulic diameter** (D_H) and apply the same 5 D / 2 D spacing. The buyer's takeaway is modest but real — a larger or rectangular stack needs **more sampling ports and a bigger working platform**, so it pays to know the shape before you price the access. The full traverse mechanics are the tester's domain; we go deeper on the standards behind them in the [reference-methods series]({{ '/insights/ms-1596-iso-9096-en-13284-particulate-standards/' | relative_url }}).

## The other location rules

Straight-length and cross-section position are the big two, but §4.2.3 adds a checklist of placement rules that catch people out:

- **Downstream of the SRM port** — the CEMS sits after the manual sampling location, not before it.
- **Downstream of all abatement** — measure what actually leaves the stack, after the bag filter, scrubber or ESP.
- **Downstream of any merging ducts** — so you're not reading one stream before it joins another.
- **One CEMS per stack** — each system monitors a single stack or chimney.
- **PM above gas** — locate the particulate CEMS above the gas CEMS where both share a stack.
- **As far from the final exhaust as practicable** — away from the influence of the open top.

## When the stack won't give you the straight run

Plenty of existing stacks simply don't have 5 D of clean duct to offer. The Guidelines don't leave you stranded — §4.2.4 gives two routes for a stack that can't meet the standard criteria:

- **The USEPA geometry** — a plane at **8 D downstream and 2 D upstream** of disturbances for dust and gas (or 2 D downstream, ½ D upstream for gas only), available to stacks that hold a Written Approval and meet the US EPA sampling-location criteria.
- **Prove the flow is good anyway** — run a **homogeneity or stratification test** and pass it with no stratification found, using a recognised procedure (**EN 15259** for homogeneity, or **US EPA Chapter 2**, "Bias Due to Probe Location and Stratification," for stratification).

That second route is the important one for retrofits: if you can *demonstrate* the gas is well mixed at your available plane, the exact diameters matter less. It's also why the homogeneity assessment shows up on DOE's siting paperwork.

## What DOE actually asks for

When you submit the install for approval, the siting isn't described in prose — it goes onto a defined data sheet (Guidelines Vol II, §2.3.1–2.3.3). Knowing the shape of that form tells you exactly what to nail down at the design stage:

<figure class="fig report">
<p class="fig-title">The siting datasheet DOE expects</p>
<div class="rep-rows">
  <div class="rep-row"><span class="rep-k">A</span><span class="rep-body"><span class="rep-name">Stack / chimney characteristic</span><span class="rep-desc">Shape, internal diameter and stack height — the geometry the diameter rule is measured against.</span></span></div>
  <div class="rep-row hl"><span class="rep-k">B</span><span class="rep-body"><span class="rep-name">Distance from disturbances</span><span class="rep-desc">Length of the sampling location from the downstream and upstream disturbance — your 5 D / 2 D evidence.</span></span></div>
  <div class="rep-row"><span class="rep-k">C</span><span class="rep-body"><span class="rep-name">Sample ports</span><span class="rep-desc">Port size, number used and orientation — separately for particulate and gases.</span></span></div>
  <div class="rep-row"><span class="rep-k">D</span><span class="rep-body"><span class="rep-name">Sample points & filtration</span><span class="rep-desc">Number of points / lines across the plane, and where filtration sits in the train.</span></span></div>
  <div class="rep-row"><span class="rep-k">E</span><span class="rep-body"><span class="rep-name">Platform & safe access</span><span class="rep-desc">A permanent, strong platform with ladders, staircase or elevator, weather protection, tools and spares on site, and reference gas injectable at the probe (§4.2.5, §4.2.9, §2.3.2).</span></span></div>
  <div class="rep-row"><span class="rep-k">F</span><span class="rep-body"><span class="rep-name">Homogeneity / stratification</span><span class="rep-desc">The assessment report, attached — your proof the plane is well mixed (§2.3.3).</span></span></div>
</div>
<figcaption>What the DOE siting submission asks for (Guidelines V8, Vol II §2.3.1–2.3.3). Most of it is fixed the moment the stack drawings are signed off.</figcaption>
</figure>

The platform line (row E) is the one buyers most often under-budget. A CEMS needs a **permanent, strong, safely-accessed platform** at the probe — not a temporary scaffold — because every future calibration, audit and repair happens there. Designing it in is cheap; bolting it on later is not.

## Why it matters to you

Siting is the part of a CEMS project with the longest tail. The analyser you can swap; a badly placed plane you live with for the life of the stack. A plane too close to a bend may read fine day-to-day and then **fail QAL2 or the annual surveillance test**, because the one spot your CEMS watches doesn't match the SRM's full-section average — and as we noted across the [reference-methods series]({{ '/insights/why-cems-needs-manual-stack-tests-srm/' | relative_url }}), that's the agreement your compliance data ultimately rests on.

So before you sign off a stack design or accept an installer's proposal, make sure someone has checked: the **5 D / 2 D straight run** (or a passed homogeneity test), the **cross-section position** for your point or path analyser, the **ports and traverse** the SRM will need, and a **permanent platform** with safe access. Get those onto the drawings now and the rest of the project — [QAL2]({{ '/insights/qal2-calibration-variability-test-cems/' | relative_url }}), and years of routine testing — has somewhere proper to happen. Siting is the last of the build decisions; [Part 5]({{ '/insights/cems-buying-decision-cost-compliance/' | relative_url }}) pulls the whole purchase together — choosing a partner, the true cost, and the order that gets you to a compliant report.

**Designing a new stack, or unsure an existing one can be sited compliantly?** [Talk to us]({{ '/' | relative_url }}#contact) — we [assess sampling planes]({{ '/services/cems-installation/' | relative_url }}), run the homogeneity tests and prepare the DOE siting submission, using the same DOE CEMS Guidelines we helped write.

<div class="related">
  <p class="label">Related insights</p>
  <ul>
    <li><a href="{{ '/insights/why-cems-needs-manual-stack-tests-srm/' | relative_url }}">Why a continuous monitor still needs manual stack tests</a></li>
    <li><a href="{{ '/insights/isokinetic-sampling-explained-stack-test/' | relative_url }}">Isokinetic sampling, explained: why the sample velocity must match the flue</a></li>
    <li><a href="{{ '/insights/qal2-calibration-variability-test-cems/' | relative_url }}">QAL2 and the Calibration & Variability Test: certifying your CEMS against the SRM</a></li>
    <li><a href="{{ '/insights/en-14181-explained-cems-quality-assurance/' | relative_url }}">EN 14181 explained: the standard that keeps your CEMS data trustworthy</a></li>
  </ul>
</div>

---

*This article is general guidance, not legal advice. For obligations specific to your facility, refer to the current Environmental Quality (Clean Air) Regulations 2014, the EQA 1974, the DOE CEMS Guidelines, and the current editions of MS 1596, ISO 9096 and EN 13284, or speak with us directly.*
