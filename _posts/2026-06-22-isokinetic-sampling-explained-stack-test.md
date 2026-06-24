---
layout: post
title: "Isokinetic sampling, explained: why the sample velocity must match the flue"
date: 2026-06-22 01:45:00
description: "Part 2 of our Reference Methods series: a plain-English explanation of isokinetic sampling — why a stack test has to draw its sample at exactly the flue's own velocity, what happens to your dust result when it doesn't, and the isokinetic % that decides whether a test is valid."
series: reference-methods
part: 2
---

*The reference methods behind your CEMS — Part 2 of 5. A series for industry and regulators, drawn from the DOE CEMS Guidelines (Version 8, 2025) we helped develop and the standards-committee work behind MS 1596.*

In [Part 1]({{ '/insights/why-cems-needs-manual-stack-tests-srm/' | relative_url }}) we saw that your CEMS is anchored to a manual stack test — the Standard Reference Method. Now to the single idea that decides whether that stack test is any good: **isokinetic sampling.**

It sounds like jargon, but the principle is simple, and once you've seen it you'll understand why a stack-test report always quotes an "isokinetic %" — and why a number in the wrong range means the whole test gets thrown out.

## The one-sentence version

**Isokinetic** just means *same speed*. To pull a representative dust sample from a flue, the gas entering the sampling nozzle has to be travelling at the **same velocity** as the gas flowing past it in the duct. Match the speed, and the sample you collect genuinely represents what's in the stack. Get the speed wrong, and your dust result is biased — before the sample ever reaches a balance.

## Why speed changes the answer

The reason is **inertia.** Gas molecules are light and follow whatever path the flow takes. Dust particles are heavier, so they resist changing direction. That difference is the whole problem.

If the nozzle samples **too slowly** (sub-isokinetic), it can't swallow all the gas heading toward it, so some gas spills around the nozzle mouth. The light gas curves away — but the heavier particles, carried by their own momentum, keep going straight into the nozzle. You collect **more dust than is really there**, and the result **over-reads**.

If the nozzle samples **too fast** (super-isokinetic), it pulls in extra gas from around the opening. That surrounding gas comes in, but many of its heavier particles have too much momentum to make the turn into the nozzle and sail straight past. You collect **less dust than is really there**, and the result **under-reads**.

Only when the nozzle velocity matches the flue velocity do the streamlines run straight into the mouth, particles and all — and the sample is true.

<figure class="fig">
<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="iso-t iso-d" font-family="'Helvetica Neue',Helvetica,Arial,sans-serif">
<title id="iso-t">Sub-isokinetic, isokinetic and super-isokinetic sampling</title>
<desc id="iso-d">Three panels showing gas streamlines and dust particles entering a sampling nozzle. When the sample is too slow, streamlines diverge but heavy particles still enter, over-reading dust. When matched, streamlines run straight in for a true reading. When too fast, streamlines converge but heavy particles bypass the nozzle, under-reading dust.</desc>
<!-- panel 1: sub-isokinetic -->
<g>
<text x="113" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="var(--grey)">Too slow</text>
<text x="113" y="36" text-anchor="middle" font-size="10" fill="var(--muted)">sub-isokinetic</text>
<path d="M20 70 H150" stroke="var(--line)" stroke-width="1.4" fill="none"/>
<path d="M20 100 H120 Q150 100 175 78" stroke="var(--line)" stroke-width="1.4" fill="none"/>
<path d="M20 140 H120 Q150 140 175 162" stroke="var(--line)" stroke-width="1.4" fill="none"/>
<path d="M20 170 H150" stroke="var(--line)" stroke-width="1.4" fill="none"/>
<!-- nozzle -->
<path d="M175 120 L205 108 L205 132 Z" fill="var(--grey)"/>
<rect x="205" y="114" width="20" height="12" fill="var(--grey)"/>
<!-- particles travelling straight in -->
<circle cx="60" cy="100" r="4" fill="var(--ink)"/><circle cx="95" cy="140" r="4" fill="var(--ink)"/>
<circle cx="150" cy="120" r="4" fill="var(--ink)"/><circle cx="120" cy="118" r="4" fill="var(--ink)"/>
<text x="113" y="210" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Over-reads dust</text>
<text x="113" y="228" text-anchor="middle" font-size="10" fill="var(--muted)">extra particles pulled in</text>
</g>
<!-- panel 2: isokinetic -->
<g>
<text x="340" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="var(--green-d)">Matched</text>
<text x="340" y="36" text-anchor="middle" font-size="10" fill="var(--muted)">isokinetic</text>
<path d="M247 70 H402" stroke="var(--green)" stroke-width="1.4" fill="none"/>
<path d="M247 100 H402" stroke="var(--green)" stroke-width="1.4" fill="none"/>
<path d="M247 140 H402" stroke="var(--green)" stroke-width="1.4" fill="none"/>
<path d="M247 170 H402" stroke="var(--green)" stroke-width="1.4" fill="none"/>
<path d="M402 120 L432 108 L432 132 Z" fill="var(--green-d)"/>
<rect x="432" y="114" width="20" height="12" fill="var(--green-d)"/>
<circle cx="287" cy="100" r="4" fill="var(--ink)"/><circle cx="322" cy="140" r="4" fill="var(--ink)"/>
<circle cx="360" cy="120" r="4" fill="var(--ink)"/>
<text x="340" y="210" text-anchor="middle" font-size="12" font-weight="700" fill="var(--green-d)">True reading ✓</text>
<text x="340" y="228" text-anchor="middle" font-size="10" fill="var(--muted)">sample represents the flue</text>
</g>
<!-- panel 3: super-isokinetic -->
<g>
<text x="567" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="var(--grey)">Too fast</text>
<text x="567" y="36" text-anchor="middle" font-size="10" fill="var(--muted)">super-isokinetic</text>
<path d="M474 70 Q600 70 629 112" stroke="var(--line)" stroke-width="1.4" fill="none"/>
<path d="M474 100 H629" stroke="var(--line)" stroke-width="1.4" fill="none"/>
<path d="M474 140 H629" stroke="var(--line)" stroke-width="1.4" fill="none"/>
<path d="M474 170 Q600 170 629 128" stroke="var(--line)" stroke-width="1.4" fill="none"/>
<path d="M629 120 L659 108 L659 132 Z" fill="var(--grey)"/>
<rect x="659" y="114" width="14" height="12" fill="var(--grey)"/>
<!-- particles bypassing -->
<circle cx="514" cy="100" r="4" fill="var(--ink)"/><circle cx="560" cy="120" r="4" fill="var(--ink)"/>
<circle cx="600" cy="78" r="4" fill="var(--muted)"/><circle cx="600" cy="162" r="4" fill="var(--muted)"/>
<text x="567" y="210" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Under-reads dust</text>
<text x="567" y="228" text-anchor="middle" font-size="10" fill="var(--muted)">heavy particles sail past</text>
</g>
</svg>
<figcaption>Light gas follows the streamlines; heavier dust resists turning. Only at matched (isokinetic) velocity does the sample collect dust in true proportion.</figcaption>
</figure>

## The number that decides validity

Because this bias is predictable, the reference-method standards turn it into a simple pass/fail check: the **isokinetic ratio**, reported as a percentage of the flue velocity. Sample exactly at flue speed and you're at 100%.

Tests are only accepted inside a tight window around 100% — within **±10%** of flue speed, a **90–110%** band, under ISO 9096, with the exact figure set by the governing standard. (Those standards — MS 1596, ISO 9096 and EN 13284 — and how they fit together are the subject of [Part 3]({{ '/insights/ms-1596-iso-9096-en-13284-particulate-standards/' | relative_url }}).) Fall outside the window and the run isn't "a bit off" — it's **invalid**, and it has to be repeated.

## How a tester actually hits it

Isokinetic sampling isn't guesswork. Before and during the run, the tester:

- measures the **flue gas velocity** with a pitot tube (and the temperature, moisture and pressure that affect it),
- selects a **nozzle size** to suit, and
- continuously adjusts the **sampling pump** so the velocity into the nozzle tracks the velocity in the duct — across every point of the traverse, as conditions shift.

Done well, the final isokinetic % lands comfortably inside the window. Done carelessly, an otherwise good test is wasted — and as we noted in the QAL2 article, [sloppy reference-method work can even make a perfectly good CEMS fail its calibration]({{ '/insights/qal2-calibration-variability-test-cems/' | relative_url }}).

## Not one point, but a traverse

There's a second reason a single reading won't do. The flue isn't uniform: gas moves faster down the centre of a duct and slower near the walls, and dust can be spread unevenly across the section. A sample drawn at one spot would represent *that spot*, not the stack. So the reference method samples a **traverse** — a set of points spread across the cross-section, each standing for an equal slice of it, with the isokinetic speed re-matched at every one.

Where those points sit isn't left to the tester's eye. ISO 9096 divides the measurement plane into **equal areas** and puts a sampling point at the centre of each. A **circular** duct is split into equal-area rings, so the points fall along two perpendicular diameters and bunch closer together near the wall, where each ring is thinner. A **rectangular or square** duct is split into an even grid, with one point per cell.

<figure class="fig">
<svg viewBox="0 0 680 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="tv-t tv-d" font-family="'Helvetica Neue',Helvetica,Arial,sans-serif">
<title id="tv-t">Traverse points in a circular versus a rectangular duct</title>
<desc id="tv-d">A circular duct is divided into equal-area rings with points along two diameters that cluster toward the wall, and the probe traverses them; a rectangular or square duct is divided into an even grid with a point at the centre of each cell.</desc>
<!-- Circular -->
<text x="180" y="30" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Circular duct</text>
<circle cx="180" cy="135" r="74" fill="none" stroke="var(--ink)" stroke-width="2"/>
<circle cx="180" cy="135" r="52" fill="none" stroke="var(--grey)" stroke-width="1" stroke-dasharray="3 3"/>
<line x1="106" y1="135" x2="254" y2="135" stroke="var(--line)" stroke-width="1"/>
<line x1="180" y1="61" x2="180" y2="209" stroke="var(--line)" stroke-width="1"/>
<!-- probe traversing along the horizontal diameter from a right-side port -->
<line x1="300" y1="135" x2="116" y2="135" stroke="var(--grey)" stroke-width="2"/>
<text x="300" y="128" font-size="9" fill="var(--muted)">probe</text>
<circle cx="180" cy="135" r="4" fill="var(--ink)"/>
<circle cx="217" cy="135" r="4" fill="var(--ink)"/><circle cx="244" cy="135" r="4" fill="var(--ink)"/>
<circle cx="143" cy="135" r="4" fill="var(--ink)"/>
<circle cx="116" cy="135" r="5.5" fill="var(--green-d)"/>
<circle cx="180" cy="98" r="4" fill="var(--ink)"/><circle cx="180" cy="71" r="4" fill="var(--ink)"/>
<circle cx="180" cy="172" r="4" fill="var(--ink)"/><circle cx="180" cy="199" r="4" fill="var(--ink)"/>
<text x="180" y="252" text-anchor="middle" font-size="9.5" fill="var(--muted)">equal-area rings — points cluster</text>
<text x="180" y="265" text-anchor="middle" font-size="9.5" fill="var(--muted)">toward the wall (5 to 17 by size)</text>
<!-- Rectangular -->
<text x="500" y="30" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Rectangular / square duct</text>
<rect x="430" y="65" width="140" height="140" fill="none" stroke="var(--ink)" stroke-width="2"/>
<line x1="476.7" y1="65" x2="476.7" y2="205" stroke="var(--line)" stroke-width="1"/>
<line x1="523.3" y1="65" x2="523.3" y2="205" stroke="var(--line)" stroke-width="1"/>
<line x1="430" y1="111.7" x2="570" y2="111.7" stroke="var(--line)" stroke-width="1"/>
<line x1="430" y1="158.3" x2="570" y2="158.3" stroke="var(--line)" stroke-width="1"/>
<circle cx="453.3" cy="88.3" r="4" fill="var(--ink)"/><circle cx="500" cy="88.3" r="4" fill="var(--ink)"/><circle cx="546.7" cy="88.3" r="4" fill="var(--ink)"/>
<circle cx="453.3" cy="135" r="4" fill="var(--ink)"/><circle cx="500" cy="135" r="4" fill="var(--ink)"/><circle cx="546.7" cy="135" r="4" fill="var(--ink)"/>
<circle cx="453.3" cy="181.7" r="4" fill="var(--ink)"/><circle cx="500" cy="181.7" r="4" fill="var(--ink)"/><circle cx="546.7" cy="181.7" r="4" fill="var(--ink)"/>
<text x="500" y="252" text-anchor="middle" font-size="9.5" fill="var(--muted)">equal grid — one point per cell</text>
<text x="500" y="265" text-anchor="middle" font-size="9.5" fill="var(--muted)">(4, 9 or 16 by area)</text>
</svg>
<figcaption>The SRM samples a traverse, not a single point. ISO 9096:2017 sets the points at the centres of equal areas — rings for circular ducts (Table 1), a grid for rectangular and square ducts (Table 2 / Annex B) — and the tester re-matches isokinetic speed at each.</figcaption>
</figure>

How many points depends on the duct: a circular plane takes from **5 points** on a small duct up to **17** on one over 2 m across (ISO 9096 Table 1), and a rectangular plane takes **4, 9 or 16** as its area grows (Table 2). A bigger plane means more points — and a longer test, because each point is its own isokinetic sample. The dust caught across all of them, over the full sampling time, is what becomes your reported concentration. It's also why the stack needs [access ports placed and sized for the probe]({{ '/insights/cems-siting-sample-ports-measurement-plane/' | relative_url }}) at every traverse line (ISO 9096 recommends at least 125 mm diameter, or 100 × 250 mm).

## Why it matters to you

If you're paying for a stack test — for compliance, or to calibrate your CEMS at QAL2 — the isokinetic % is the first thing worth checking on the report. A figure outside the accepted range means a repeat visit: more cost, more downtime, and a delay to getting your CEMS signed off. It's also a fair proxy for how carefully the whole test was run.

In **Part 5** we'll walk through reading a stack-test report end to end — concentration, mass flow and that isokinetic % — so you can sanity-check the work you've paid for.

**Booking a compliance stack test or a QAL2?** [Talk to us]({{ '/' | relative_url }}#contact) — we run isokinetic reference-method testing for facilities across Malaysia, to the same DOE CEMS Guidelines we helped write.

<div class="related">
  <p class="label">Related insights</p>
  <ul>
    <li><a href="{{ '/insights/qal2-calibration-variability-test-cems/' | relative_url }}">QAL2 and the Calibration & Variability Test: certifying your CEMS against the SRM</a></li>
    <li><a href="{{ '/insights/en-14181-explained-cems-quality-assurance/' | relative_url }}">EN 14181 explained: the standard that keeps your CEMS data trustworthy</a></li>
    <li><a href="{{ '/insights/cems-quality-assurance-chain-qal1-qal2-qal3-ast/' | relative_url }}">The CEMS quality-assurance chain: QAL1 → QAL2 → QAL3 → AST</a></li>
    <li><a href="{{ '/insights/clean-air-regulations-2014-cems/' | relative_url }}">What the Clean Air Regulations 2014 mean for your CEMS</a></li>
  </ul>
</div>

---

*This article is general guidance, not legal advice. For obligations specific to your facility, refer to the current Environmental Quality (Clean Air) Regulations 2014, the EQA 1974, the DOE CEMS Guidelines, and the current editions of MS 1596, ISO 9096 and EN 13284, or speak with us directly.*
