---
layout: post
title: "Isokinetic sampling, explained: why the sample velocity must match the flue"
date: 2026-06-22 01:45:00
description: "Part 2 of our Reference Methods series: a plain-English explanation of isokinetic sampling — why a stack test has to draw its sample at exactly the flue's own velocity, what happens to your dust result when it doesn't, and the isokinetic % that decides whether a test is valid."
series: reference-methods
part: 2
published: false  # held back until the latest ISO 9096 & MS 1596 PDFs are in the folder for fact-check
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

Tests are only accepted inside a tight window around 100% — broadly **95–115%** under ISO 9096, with the exact band set by the governing standard. (Those standards — MS 1596, ISO 9096 and EN 13284 — and how they fit together are the subject of [Part 3]({{ '/insights/ms-1596-iso-9096-en-13284-particulate-standards/' | relative_url }}).) Fall outside the window and the run isn't "a bit off" — it's **invalid**, and it has to be repeated.

## How a tester actually hits it

Isokinetic sampling isn't guesswork. Before and during the run, the tester:

- measures the **flue gas velocity** with a pitot tube (and the temperature, moisture and pressure that affect it),
- selects a **nozzle size** to suit, and
- continuously adjusts the **sampling pump** so the velocity into the nozzle tracks the velocity in the duct — across every point of the traverse, as conditions shift.

Done well, the final isokinetic % lands comfortably inside the window. Done carelessly, an otherwise good test is wasted — and as we noted in the QAL2 article, [sloppy reference-method work can even make a perfectly good CEMS fail its calibration]({{ '/insights/qal2-calibration-variability-test-cems/' | relative_url }}).

## Why it matters to you

If you're paying for a stack test — for compliance, or to calibrate your CEMS at QAL2 — the isokinetic % is the first thing worth checking on the report. A figure outside the accepted range means a repeat visit: more cost, more downtime, and a delay to getting your CEMS signed off. It's also a fair proxy for how carefully the whole test was run.

In **Part 5** we'll walk through reading a stack-test report end to end — concentration, mass flow and that isokinetic % — so you can sanity-check the work you've paid for.

**Booking a compliance stack test or a QAL2?** [Talk to us]({{ '/' | relative_url }}#contact) — we run isokinetic reference-method testing for facilities across Malaysia, to the same DOE CEMS Guidelines we helped write.

<div class="related">
  <p class="label">Related insights</p>
  <ul>
    <li><a href="{{ '/insights/qal2-calibration-variability-test-cems/' | relative_url }}">QAL2 and the Calibration & Variability Test: certifying your CEMS against the SRM</a></li>
    <li><a href="{{ '/insights/cems-quality-assurance-chain-qal1-qal2-qal3-ast/' | relative_url }}">The CEMS quality-assurance chain: QAL1 → QAL2 → QAL3 → AST</a></li>
    <li><a href="{{ '/insights/clean-air-regulations-2014-cems/' | relative_url }}">What the Clean Air Regulations 2014 mean for your CEMS</a></li>
  </ul>
</div>

---

*This article is general guidance, not legal advice. For obligations specific to your facility, refer to the current Environmental Quality (Clean Air) Regulations 2014, the EQA 1974, the DOE CEMS Guidelines, and the current editions of MS 1596, ISO 9096 and EN 13284, or speak with us directly.*
