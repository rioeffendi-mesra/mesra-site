---
layout: post
title: "QAL3: the drift checks that keep your CEMS in control between tests"
date: 2026-06-23 04:00:00
description: "Part 4 of our Operating a Compliant CEMS series: QAL3 On-Going Performance Monitoring — the periodic zero-and-span checks your own team runs between QAL2 tests, plotted on control charts to catch drift before it becomes non-compliant data. The levels to check at, who does it, and what a QAL3 failure means."
series: operating
part: 4
---

*Operating a Compliant CEMS — Part 4 of 5. A practical series for industry, drawn from the DOE CEMS Guidelines (Version 8, 2025), which we helped develop.*

So far in this series we've covered the [quality-assurance chain]({{ '/insights/cems-quality-assurance-chain-qal1-qal2-qal3-ast/' | relative_url }}) (Part 1), the [QAL2 Calibration & Variability Test]({{ '/insights/qal2-calibration-variability-test-cems/' | relative_url }}) that certifies your CEMS after install (Part 2), and [the changes that force a fresh QAL2]({{ '/insights/changes-that-trigger-new-qal2-cems/' | relative_url }}) (Part 3). But QAL2 is a snapshot — it proves your system was accurate *on the day it was tested*. A CEMS runs every minute of every day in between. What stops it from quietly drifting off-true until the next test? That's the job of **QAL3**.

## What QAL3 is for

QAL3 — **On-Going Performance Monitoring (OGPM)** — is the stage of EN 14181 that runs continuously through normal operation. The DOE Guidelines define it as the procedures that ensure the CEMS "remains within the required specifications during continuous use," achieved by having the plant operator's competent person **regularly measure the drift and precision** of the system on its maintenance interval.

The key word is *drift*. Analysers don't fail all at once; they creep. A zero point edges upward, a span response slowly weakens. QAL3 is the routine that catches that creep early — while it's a maintenance task, not yet a compliance problem.

Unlike QAL2 and the Annual Surveillance Test, **QAL3 is the operator's own responsibility.** Your competent person (or your maintenance team) runs it on the maintenance interval stated in the analyser's **MCERTS/TÜV certificate** — or a shorter interval if your consultant recommends one, but never longer than the certificate allows. You may appoint your DOE-registered consultant or a CEMS tester to carry out the checks, plot the graphs and flag corrective actions, but the obligation to keep it running sits with you.

## Zero and span: the two questions QAL3 asks

Every QAL3 check puts a known input into the system and asks whether the system still reads it correctly. There are two such inputs:

- **Zero** — a clean, pollutant-free reference. Does the CEMS still read (near) zero when there's nothing to measure?
- **Span** — a reference at a high, known concentration. Does the CEMS still read the right value near the top of its range?

The change in the reading at the span point over the maintenance interval is the **span drift**; the equivalent at the zero point is the **zero drift**. Both are what you're tracking. Critically, the reference material has to be trustworthy in its own right: calibration gases and surrogates must be **QAL1-certified, dedicated to your installed CEMS, and carry a valid certificate of analysis** (corrected to standard temperature and pressure where expressed in mg/m³). You can't measure drift against a yardstick you don't trust.

A note on *how* the reference is introduced. A **direct** check sends the calibration gas straight to the analyser — quick, and what a routine zero/span check uses. A **system** check injects it at the probe so it travels the entire sampling train — slower, but it tests the whole CEMS, leaks and losses included, which is why it's used for Functional Tests, QAL2, QAL3 and AST.

## The levels you check at

The Guidelines set the zero and span levels by what you're measuring (§4.1.16). They're worth knowing because a span check is only as sensitive as the level you run it at:

- **Gas:** zero at 0–20% of the span value; span at 80–100% of **2.5× the daily ELV**. (Good practice is a span gas around 80% of the operating range covering the relevant emission values — the higher the concentration, the more sensitive the check.)
- **Opacity:** low level 0–10%; span level 40–60%.
- **Particulate matter:** low level 0–10%; span level 50–100% of the full-scale measurement range.

Because particulate is measured by a surrogate signal (light), its zero/span checks use validated surrogates — filters or electronic simulations proven during QAL1 — and the PM analyser still needs its periodic gravimetric recalibration against the reference method on top of QAL3.

## How a check becomes an alarm

A single reading tells you little; the *trend* tells you everything. QAL3 results are plotted on a **control chart** — typically a **Shewhart or CUSUM chart** — that tracks drift and precision against pre-determined alarm limits. While the points stay inside those limits, the system is in control and you carry on. The moment a point crosses an alarm limit, the CEMS is deemed **out of control: a QAL3 failure**, and adjustment or maintenance is required before the data can be trusted again.

<figure class="fig flow">
<p class="fig-title">The QAL3 loop · check → plot → act</p>
<div class="flow-row">
<div class="flow-step"><span class="fs-name">Zero &amp; span check</span><span class="fs-q">on the certificate's maintenance interval, using QAL1 reference material</span></div>
<div class="flow-arrow" aria-hidden="true">→</div>
<div class="flow-step"><span class="fs-name">Plot the drift</span><span class="fs-q">zero &amp; span points on a Shewhart or CUSUM chart</span></div>
<div class="flow-arrow" aria-hidden="true">→</div>
<div class="flow-step"><span class="fs-name">Read the trend</span><span class="fs-q">drifting out of control? precision slipping?</span></div>
<div class="flow-arrow" aria-hidden="true">→</div>
<div class="flow-step hl"><span class="fs-name">Act</span><span class="fs-q">within limits: carry on · past the alarm limit: QAL3 failure → adjust or maintain</span></div>
</div>
<p class="fig-note">● The control chart turns a slow creep into a clear, dated signal — before it reaches your reported data</p>
<figcaption>QAL3 runs continuously between the periodic QAL2 and Annual Surveillance Tests. It's the operator's routine, and the first line of defence against drifting data.</figcaption>
</figure>

## Why automatic checks are worth paying for

The Guidelines note that DOE **prefers CEMS with automatic zero and span checks**, for a practical reason: an automatic system runs the checks on schedule without extra personnel or operating cost, so they actually get done. A manual check depends on someone remembering, on the right day, every interval. When the whole value of QAL3 is catching drift *early and consistently*, "the system does it itself" is a feature worth specifying at purchase — one more reason the [sampling and analyser choice]({{ '/insights/how-cems-measures-extractive-in-situ-sampling/' | relative_url }}) you make up front shapes how easy compliance is later.

## The takeaway

QAL2 certifies, AST re-confirms once a year — but **QAL3 is what holds the line in between**, and it's yours to run. Done well, it surfaces a drifting analyser as a quiet maintenance ticket. Skipped, the same drift surfaces as suspect data, a failed AST, or an awkward conversation with DOE. Keep the checks on the certificate's interval, plot every point, and treat the first alarm-limit crossing as the maintenance call it's meant to be. Next in this series: the **Annual Surveillance Test** — the yearly check that ties QAL3 and QAL2 together.

**Want your QAL3 routine and control charts set up so drift never becomes a surprise?** [Talk to us]({{ '/' | relative_url }}#contact) — keeping CEMS [in control between tests]({{ '/services/cems-maintenance/' | relative_url }}) is exactly what we do, using the same DOE CEMS Guidelines we helped write.

<div class="related">
  <p class="label">Related insights</p>
  <ul>
    <li><a href="{{ '/insights/en-14181-explained-cems-quality-assurance/' | relative_url }}">EN 14181 explained: the standard that keeps your CEMS data trustworthy</a></li>
    <li><a href="{{ '/insights/cems-compliance-daily-half-hourly-rule-reg-17-3/' | relative_url }}">What 'compliant' actually means: the daily-average and 2× half-hourly rule</a></li>
    <li><a href="{{ '/insights/why-cems-needs-manual-stack-tests-srm/' | relative_url }}">Why a continuous monitor still needs manual stack tests</a></li>
  </ul>
</div>

---

*This article is general guidance, not legal advice. For obligations specific to your facility, refer to the current Environmental Quality (Clean Air) Regulations 2014, the EQA 1974, and the DOE CEMS Guidelines, or speak with us directly.*
