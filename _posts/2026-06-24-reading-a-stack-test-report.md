---
layout: post
title: "Reading a stack-test report: concentration, mass flow and the isokinetic % that decide it"
date: 2026-06-24 05:00:00
description: "Part 5 of our Reference Methods series — the finale. How to read a manual stack-test report end to end: the corrected concentration that meets (or misses) your ELV, the mass emission rate, the isokinetic % and QA checks that decide whether the result is valid, and the reference conditions that make the number mean anything."
series: reference-methods
part: 5
---

*The reference methods behind your CEMS — Part 5 of 5. A series for industry and regulators, drawn from the DOE CEMS Guidelines (Version 8, 2025) we helped develop and the standards-committee work behind MS 1596.*

Across this series we've seen why your CEMS [depends on a manual stack test]({{ '/insights/why-cems-needs-manual-stack-tests-srm/' | relative_url }}) (Part 1), what makes that test valid — [isokinetic sampling]({{ '/insights/isokinetic-sampling-explained-stack-test/' | relative_url }}) and the traverse (Part 2) — and [which standards govern it]({{ '/insights/ms-1596-iso-9096-en-13284-particulate-standards/' | relative_url }}) (Part 3). Now the payoff: when the report lands on your desk, what do you actually look at? Whether you've paid for a compliance test or the SRM behind a [QAL2 calibration]({{ '/insights/qal2-calibration-variability-test-cems/' | relative_url }}), a stack-test report is only useful if you can read it — and spot when something's off.

This is a reader's guide, grounded in what ISO 9096 (Clause 11) requires a report to contain. It comes down to three questions: **what did the test find, can you trust it, and against what was it measured?**

## What the test found: the headline numbers

Two figures carry the result, and a third decides compliance.

**Concentration** is the dust loading in the flue, in **mg/m³** — but the raw figure the balance produces isn't the number that meets your limit. It has to be *corrected* before it means anything (more on that below). The result you compare to your ELV is the **corrected concentration**.

**Mass emission rate** is that concentration multiplied by the stack's gas flow — the actual quantity of dust leaving the stack, typically in kg/h. It's what matters for load-based limits and for understanding your real environmental output, as opposed to the per-cubic-metre concentration.

**The verdict** is the corrected concentration set against your **Emission Limit Value**. Pass or fail turns on the corrected number, not the raw one — which is why the corrections are not a technicality.

<figure class="fig flow">
<p class="fig-title">From filter to compliance number</p>
<div class="flow-row">
<div class="flow-step"><span class="fs-name">Dust on the filter</span><span class="fs-q">the mass weighed in the lab (mg)</span></div>
<div class="flow-arrow" aria-hidden="true">→</div>
<div class="flow-step"><span class="fs-name">÷ sampled volume</span><span class="fs-q">gives the raw concentration (mg/m³, actual)</span></div>
<div class="flow-arrow" aria-hidden="true">→</div>
<div class="flow-step"><span class="fs-name">To standard conditions</span><span class="fs-q">fixed temperature &amp; pressure, dry basis</span></div>
<div class="flow-arrow" aria-hidden="true">→</div>
<div class="flow-step"><span class="fs-name">To reference O₂</span><span class="fs-q">the diluent level set for your activity</span></div>
<div class="flow-arrow" aria-hidden="true">→</div>
<div class="flow-step hl"><span class="fs-name">Compare to ELV</span><span class="fs-q">pass or fail</span></div>
</div>
<p class="fig-note">● The number that meets your limit is the <em>corrected</em> concentration — never the raw mg/m³</p>
<figcaption>A raw concentration becomes a compliance figure only after correction to standard conditions and to the reference oxygen level. A report that quotes a bare mg/m³ without its basis hasn't finished the job.</figcaption>
</figure>

## Can you trust it: the validity checks

A concentration is only as good as the run that produced it, so before you act on the headline number, check the report's quality-assurance section. ISO 9096 expects it to be there.

**Isokinetic %** is the first thing to find. As we covered in [Part 2]({{ '/insights/isokinetic-sampling-explained-stack-test/' | relative_url }}), the sample has to be drawn at the flue's own velocity; the report states how close it got, as a percentage. Under ISO 9096 the run must sit **within ±10% — a 90–110% window**. Outside that, the run isn't slightly off, it's **invalid**, and the result shouldn't be used.

**The supporting QA** rounds out the picture: a passed **leak test**, a low **blank value** (the report should even give the ratio of measured dust to blank), and **enough traverse points for the duct** — the equal-area grid from Part 2, which grows with duct size. A handful of points on a large duct is a warning sign. The **sampling time and sampled volume** should be substantial enough to collect a weighable, representative mass.

**Insist on the raw data, not just the summary.** A single bottom-line isokinetic % or a lone corrected concentration can't be verified — and under ISO 9096 (Clause 11) it isn't all the report owes you. The report must carry the **per-run working**: point-by-point velocities, the **sampled volume and flowrate**, the **gas composition and moisture** behind the density and the corrections, and the **intermediate calculations** — not just the answers. Without them, neither the isokinetic ratio nor the corrected concentration can be independently checked. A tester who can't produce that raw data can't actually demonstrate a valid result.

**Gas composition is its own line item — and the one most often missing.** ISO 9096 requires the **oxygen, carbon dioxide, moisture content and molecular mass** of the flue gas to be measured at the sampling location — point by point if they vary across the section (6.1, §7). These aren't optional extras: the molecular mass sets the gas **density** the isokinetic calculation depends on, and the O₂/CO₂ and moisture are the **basis the result is corrected to**. The raw values — not just the final correction factors — belong in the report. In practice this is the data testers most often can't supply, and without it both the isokinetic ratio *and* the corrected concentration rest on numbers no one can verify. (Note that ISO 9096 requires these be *measured and reported accurately* — to a gas density within ±0,05 kg/m³ — but it doesn't itself "certify" the analyser used; that assurance, if you need it, comes from the tester's accreditation, not from ISO 9096.)

**The sample-handling evidence matters just as much.** A gravimetric result hangs on how the sample was recovered and weighed, so the QA section should show the **dust deposits upstream of the filter — from the nozzle and probe — recovered and added to the filter mass** (§7.4.4; skip this and the result reads low), the **overall blank** with its dust-to-blank ratio, the **leak test**, and basic weighing discipline (a calibrated balance, consistent oven-drying and desiccation before and after). This isn't pedantry: a stack test run carelessly doesn't just misreport one day's emissions — because it's the reference your CEMS is regressed against, [it can miscalibrate the analyser for years]({{ '/insights/qal2-calibration-variability-test-cems/' | relative_url }}).

<figure class="fig report">
<p class="fig-title">A stack-test report, field by field</p>
<div class="rep-rows">
  <div class="rep-row"><span class="rep-k">A</span><span class="rep-body"><span class="rep-name">Corrected concentration</span><span class="rep-desc">The result in mg/m³ at standard conditions and reference O₂ — the figure that meets, or misses, your ELV.</span></span></div>
  <div class="rep-row"><span class="rep-k">B</span><span class="rep-body"><span class="rep-name">Mass emission rate</span><span class="rep-desc">Concentration × stack gas flow — the actual dust leaving the stack (e.g. kg/h).</span></span></div>
  <div class="rep-row hl"><span class="rep-k">C</span><span class="rep-body"><span class="rep-name">Isokinetic %</span><span class="rep-desc">Must sit within 90–110% (ISO 9096). Outside the window, the run is invalid — check this first.</span></span></div>
  <div class="rep-row"><span class="rep-k">D</span><span class="rep-body"><span class="rep-name">Gas composition &amp; reference conditions</span><span class="rep-desc">Temperature, pressure, and the measured O₂/CO₂, moisture and molecular mass — taken at the plane — that set the gas density and correct the raw reading.</span></span></div>
  <div class="rep-row"><span class="rep-k">E</span><span class="rep-body"><span class="rep-name">QA &amp; handling</span><span class="rep-desc">Leak test, overall blank (with dust-to-blank ratio), recovery of upstream/nozzle deposits, weighing records, and enough traverse points for the duct.</span></span></div>
  <div class="rep-row"><span class="rep-k">F</span><span class="rep-body"><span class="rep-name">Method &amp; tester</span><span class="rep-desc">Which standard (MS 1596 / ISO 9096 / EN 13284), and an independent, DOE-registered tester, with site and date.</span></span></div>
</div>
<figcaption>The fields ISO 9096 (Clause 11) expects on a report, grouped for reading. Scan C first; it decides whether A and B can be believed at all.</figcaption>
</figure>

## Against what: the reference conditions

Here's the point that trips up most first-time readers: **a concentration with no stated basis is meaningless.** The same stack can be quoted at very different mg/m³ figures depending on how the number is expressed, and all of them can be correct. The report has to state, and apply, the basis:

- **Standard temperature and pressure** — the raw sample is measured hot; the result is corrected to a fixed reference temperature and pressure so tests are comparable.
- **Dry basis** — water vapour is removed from the calculation, because moisture content varies and would otherwise dilute or concentrate the figure.
- **Reference oxygen** — emissions are corrected to a reference O₂ (or CO₂) level set for your activity in the [Schedules of CAR 2014]({{ '/insights/need-a-cems-clean-air-regulations-2014/' | relative_url }}), so a plant can't dilute its way under a limit with excess air.

A report that gives you a bare "X mg/m³" without naming its reference conditions hasn't given you a compliance number — it's given you a measurement you can't compare to anything. Alongside these, the report should record the **plant's operating conditions during the test**: a result is only representative if the plant was running normally when it was taken.

## Where the report comes from: method and provenance

The last things to confirm are the ones that make the whole document defensible. The report should name the **standard** it followed — MS 1596, ISO 9096 or EN 13284, the [family we mapped in Part 3]({{ '/insights/ms-1596-iso-9096-en-13284-particulate-standards/' | relative_url }}) — along with the sampling equipment, nozzle and filter details, and the calibration of the velocity and flow devices. It should identify the **tester**, who must be an independent, DOE-registered party, and record the **site and date**. If the method had to be modified for any reason, ISO 9096 requires that to be stated plainly.

If the report is the **SRM behind a QAL2**, it does double duty: those same corrected concentrations are the reference values your CEMS is regressed against to build its calibration function. A weak stack test there doesn't just misreport one day's emissions — it can [miscalibrate your CEMS for years]({{ '/insights/qal2-calibration-variability-test-cems/' | relative_url }}).

## A reader's checklist

Next time a report lands, scan these in order:

- ✅ **Isokinetic % in the 90–110% window?** If not, stop — the run is invalid.
- ✅ **Corrected concentration**, with **standard conditions, dry basis and reference O₂** all stated.
- ✅ **Mass emission rate** quoted where load-based limits apply.
- ✅ **QA present**: leak test passed, blank value low, traverse points suited to the duct.
- ✅ **Raw data supplied**: per-run velocities, volumes and flows, gas composition, and the intermediate calculations — not just summary figures.
- ✅ **Sample handling shown**: upstream/nozzle deposits recovered and added in, blank-to-dust ratio given, weighing records present.
- ✅ **Plant running representatively** during the test.
- ✅ **Standard named**, **tester independent and DOE-registered**, site and date recorded.
- ✅ The verdict compares the **corrected** figure to your **ELV** — not the raw number.

Run through those and you can tell, in a couple of minutes, whether the report you paid for is sound — and whether the number it hands you is one you can stand behind in front of the regulator.

That closes this series. From the [reason a CEMS needs a manual test]({{ '/insights/why-cems-needs-manual-stack-tests-srm/' | relative_url }}) to the report that test produces, the reference method is the quiet foundation your continuous data stands on.

**Want a stack-test report you can trust — or a second read of one you've been handed?** [Talk to us]({{ '/' | relative_url }}#contact) — we run [reference-method testing and reporting]({{ '/services/qal2-qal3-testing/' | relative_url }}) for facilities across Malaysia, to the same DOE CEMS Guidelines we helped write.

<div class="related">
  <p class="label">Related insights</p>
  <ul>
    <li><a href="{{ '/insights/qal2-calibration-variability-test-cems/' | relative_url }}">QAL2 and the Calibration & Variability Test: certifying your CEMS against the SRM</a></li>
    <li><a href="{{ '/insights/cems-valid-averages-75-percent-rule/' | relative_url }}">Valid averages and the 75% rule: when a reading counts</a></li>
    <li><a href="{{ '/insights/en-14181-explained-cems-quality-assurance/' | relative_url }}">EN 14181 explained: the standard that keeps your CEMS data trustworthy</a></li>
    <li><a href="{{ '/insights/how-cems-measures-extractive-in-situ-sampling/' | relative_url }}">How does a CEMS actually measure? Extractive vs in-situ</a></li>
  </ul>
</div>

---

*This article is general guidance, not legal advice. For obligations specific to your facility, refer to the current Environmental Quality (Clean Air) Regulations 2014, the EQA 1974, the DOE CEMS Guidelines, and the current editions of MS 1596, ISO 9096 and EN 13284, or speak with us directly.*
