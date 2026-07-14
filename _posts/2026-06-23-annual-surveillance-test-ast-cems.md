---
layout: post
title: "The Annual Surveillance Test: the yearly check that confirms your calibration still holds"
full_title: "CEMS Annual Surveillance Test (AST) Explained | Mesra"
date: 2026-06-23 05:00:00
description: "What the CEMS Annual Surveillance Test (AST) checks each year — that your QAL2 calibration still holds, how it differs from QAL2, and what a failure means."
image: /assets/og/annual-surveillance-test-ast-cems.png
series: operating
part: 5
---

*Operating a Compliant CEMS — Part 5 of 5. A practical series for industry, drawn from the DOE CEMS Guidelines (Version 8, 2025), which we helped develop.*

Across this series we've built up the full quality-assurance programme: the [QA chain]({{ '/insights/cems-quality-assurance-chain-qal1-qal2-qal3-ast/' | relative_url }}) overview (Part 1), the [QAL2 Calibration & Variability Test]({{ '/insights/qal2-calibration-variability-test-cems/' | relative_url }}) that certifies your system (Part 2), [the changes that force a fresh QAL2]({{ '/insights/changes-that-trigger-new-qal2-cems/' | relative_url }}) (Part 3), and the continuous [QAL3 drift checks]({{ '/insights/qal3-ongoing-performance-monitoring-drift-control/' | relative_url }}) you run in between (Part 4). One checkpoint completes the cycle: the **Annual Surveillance Test (AST)** — the yearly exam that confirms the whole thing still holds.

## What the AST checks

QAL2 established a **calibration function** — the equation that turns your analyser's raw signal into a true, traceable emission value. The AST exists to answer one question, once a year: *is that calibration function still valid, and is the system's variability still within limits?* (Guidelines V8, §5.6.1).

Time, wear and process conditions can erode a calibration that was perfect on commissioning day. QAL3 watches for that erosion continuously; the AST is the formal, independent annual confirmation that the calibration you're reporting against is still trustworthy. Crucially, an AST **checks an existing calibration — it doesn't create a new one.** You cannot run an AST without a valid QAL2 calibration function to validate against (§5.6.7).

## A lighter QAL2 — same method, fewer runs

The AST isn't a different procedure; it's the QAL2 method, scaled down. It uses the **same Functional Test and the same Standard Reference Method (SRM) parallel measurements** as the [QAL2-CVT]({{ '/insights/qal2-calibration-variability-test-cems/' | relative_url }}) — the same manual method ([MS 1596]({{ '/insights/ms-1596-iso-9096-en-13284-particulate-standards/' | relative_url }}) for dust) — the one real difference is how many parallel runs you do (§5.6.2):

- **Five parallel SRM measurements**, not the fifteen a full QAL2 requires (it's advised to run at least one extra in case a test is ruled invalid).
- Spread **uniformly over the whole measuring day**.
- At least **one hour between the start of each measurement**, with **at least 30 minutes of sampling** per run.
- The **valid calibration range** is determined and the **variability test** applied, using the same pass/fail criteria as QAL2 (§5.6.5).

In other words: the same independent manual stack test that calibrated your CEMS is run again in miniature, and the results are checked against the calibration line QAL2 drew. If the CEMS still tracks the SRM within the allowed variability, the calibration stands for another year.

## First, the Functional Test

The AST can't begin until the CEMS passes a **Functional Test** — the series of checks (zero and span response, leak checks, and the rest) that proves the system is fit to be tested at all (§5.6.2, §5.2). The timing rules matter here:

- The Functional Test must be done **no more than one month before** the parallel measurements start, and its result is valid for one month.
- **An AST won't proceed if the Functional Test has failed** and no corrective action has been taken.
- Any delay to the AST must **not exceed two months** from the date the Functional Test was last conducted (and only with DOE approval) — past that, a new Functional Test is required.

The Functional Test is the gate: it stops you wasting a day's stack testing on a system that was never going to give clean results.

## Who runs it

Like QAL2 — and unlike QAL3 — the AST is **not a job you do yourself**. You appoint an **independent, DOE-registered CEMS tester** to perform the SRM, with your CEMS consultant present, and the Functional Test performed before testing begins. The tester reports the results to you and to DOE. The completed **AST report is submitted to DOE through the DOE System for CEMS** for verification, with all raw data (softcopy and hardcopy) needed to recalculate the reported parameters, in the format Appendix 2 sets out (§5.6.8) — one report in the broader [records-and-reporting regime]({{ '/insights/cems-records-reports-doe-compliance-verification/' | relative_url }}). That independence is the same principle that makes QAL2 credible: the party checking your data can't be the party that runs your plant.

## When the AST says no

An AST is a checkpoint, which means it can fail — and the Guidelines are clear about what follows. **If the AST fails, a full QAL2-CVT must be performed** to re-establish a valid calibration. The same logic governs repairs and modifications (§5.7): a component change that differs from the original MCERTS/TÜV-certified design must go through QAL3; if that fails, an AST verifies the calibration; and if the AST fails too, you're back to a full QAL2.

<figure class="fig flow">
<p class="fig-title">The annual AST · check, don't rebuild</p>
<div class="flow-row">
<div class="flow-step"><span class="fs-name">Functional Test</span><span class="fs-q">must pass first — within one month of testing</span></div>
<div class="flow-arrow" aria-hidden="true">→</div>
<div class="flow-step"><span class="fs-name">5 parallel SRM runs</span><span class="fs-q">≥ 1 hr apart, ≥ 30 min each, spread over the day</span></div>
<div class="flow-arrow" aria-hidden="true">→</div>
<div class="flow-step"><span class="fs-name">Check vs QAL2 calibration</span><span class="fs-q">valid calibration range + variability test</span></div>
<div class="flow-arrow" aria-hidden="true">→</div>
<div class="flow-step hl"><span class="fs-name">Verdict</span><span class="fs-q">pass: calibration stands another year · fail: back to a full QAL2-CVT</span></div>
</div>
<p class="fig-note">● The AST validates the calibration QAL2 drew — it never replaces it</p>
<figcaption>The Annual Surveillance Test in five SRM runs. It confirms the existing calibration function still holds; only a QAL2-CVT can establish a new one.</figcaption>
</figure>

## The takeaway — and the end of the chain

Put the five stages together and the logic of EN 14181 is complete: **QAL1** proves the design, **QAL2** calibrates it on your stack, **QAL3** watches it daily, and the **AST** re-confirms once a year that the calibration still describes reality — with a fresh QAL2 waiting whenever a trigger, a failure or the AST itself says the old one no longer does. None of these stages stands alone; each assumes the one before it held. That unbroken chain is the entire reason a regulator can trust a number your CEMS reported at 3am without anyone watching.

That brings our *Operating a Compliant CEMS* series to a close. If you've followed all five parts, you now have the whole quality-assurance picture — from the day your system is certified to the yearly test that keeps it credible.

**Want your AST planned, your Functional Test passed first time, and the report DOE-ready?** [Talk to us]({{ '/' | relative_url }}#contact) — [QAL2, QAL3 and AST testing]({{ '/services/qal2-qal3-testing/' | relative_url }}) is core to what we do, using the same DOE CEMS Guidelines we helped write.

<div class="related">
  <p class="label">Related insights</p>
  <ul>
    <li><a href="{{ '/insights/en-14181-explained-cems-quality-assurance/' | relative_url }}">EN 14181 explained: the standard that keeps your CEMS data trustworthy</a></li>
    <li><a href="{{ '/insights/why-cems-needs-manual-stack-tests-srm/' | relative_url }}">Why a continuous monitor still needs manual stack tests</a></li>
    <li><a href="{{ '/insights/cems-compliance-daily-half-hourly-rule-reg-17-3/' | relative_url }}">What 'compliant' actually means: the daily-average and 2× half-hourly rule</a></li>
  </ul>
</div>

---

*This article is general guidance, not legal advice. For obligations specific to your facility, refer to the current Environmental Quality (Clean Air) Regulations 2014, the EQA 1974, and the DOE CEMS Guidelines, or speak with us directly.*
