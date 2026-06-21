---
layout: post
title: "QAL2 and the Calibration & Variability Test: certifying your CEMS after install"
date: 2026-06-21 02:00:00
description: "Part 2 of our Operating a Compliant CEMS series: how the QAL2 Calibration & Variability Test certifies your CEMS against the Standard Reference Method — the parallel measurements, the calibration function, the valid calibration range, and the variability test that has the final say."
---

*Operating a compliant CEMS — Part 2 of 5. A practical series for industry, drawn from the DOE CEMS Guidelines (Version 8, 2025), which we helped develop.*

In [Part 1]({{ '/insights/cems-quality-assurance-chain-qal1-qal2-qal3-ast/' | relative_url }}) we mapped the four-stage quality-assurance chain. [QAL1]({{ '/insights/qal1-certification-mcert-tuv-doe-registered-cems/' | relative_url }}) proved the instrument *design* is sound before it ever reached your stack. But a certified analyser bolted onto *your* chimney, breathing *your* flue gas, still has to prove it reads true. That proof is **QAL2** — and until it passes, your data officially counts for nothing.

## What QAL2 actually certifies

The **QAL2 Calibration and Variability Test (QAL2-CVT)** is the test that **accepts and certifies your CEMS installation and operation** at the plant. It does two jobs at once: it *calibrates* your analyser against a trusted reference, and it *checks* that the calibrated system is precise enough to be relied on.

Here's the part operators most often underestimate: QAL2 **must be completed before your CEMS data is connected to the DOE System for CEMS** (the iRemote platform). Any data transmitted before that is, in the words of the guidelines, **"unverified and invalid."** QAL2 is the gate between *installed* and *officially reporting*.

<figure class="fig flow">
<p class="fig-title">The QAL2-CVT sequence · from functional check to valid data</p>
<div class="flow-row">
<div class="flow-step"><span class="fs-name">Functional test</span><span class="fs-q">System ready?</span></div>
<div class="flow-arrow" aria-hidden="true">→</div>
<div class="flow-step"><span class="fs-name">Parallel test</span><span class="fs-q">CEMS vs SRM, 15 runs / 3 days</span></div>
<div class="flow-arrow" aria-hidden="true">→</div>
<div class="flow-step"><span class="fs-name">Calibration function</span><span class="fs-q">Signal → true value</span></div>
<div class="flow-arrow" aria-hidden="true">→</div>
<div class="flow-step"><span class="fs-name">Variability test</span><span class="fs-q">Precise enough? (decider)</span></div>
</div>
<p class="fig-note">● Pass → CVT report verified by DOE → CEMS data connects as valid</p>
<figcaption>Each step gates the next. Fail the functional test and the parallel test can't start; fail variability and the calibration doesn't stand.</figcaption>
</figure>

## First, the functional test

Before any of the real measurement happens, the system has to clear a **functional test** — a series of checks (alignment, zero and span, leak, interferences, drift) confirming the CEMS is fit to be tested. It must be carried out **no more than one month** before the parallel measurements begin, and **validated before the test proceeds**. If it fails and no corrective action is taken, the QAL2 simply **cannot go ahead**. It's the gate we flagged in Part 1 — the thing that stops you wasting a test campaign on a system that isn't ready.

## The parallel measurement: CEMS against the SRM

This is the heart of QAL2. A **DOE-registered, independent CEMS tester** runs the **Standard Reference Method (SRM)** — the trusted manual measurement method — *alongside* your CEMS, sampling the same flue gas at the same time. Pair after pair, the SRM gives the "true" value to compare your analyser against.

The guidelines are specific about how this is done:

- **At least 15 valid parallel measurements**, spread uniformly over **three days** (not necessarily consecutive, but within four weeks), with the plant operating normally.
- **Each sample at least 30 minutes**, and the start of each at least **one hour apart**.
- **At least one measurement at or near zero** (defined as ≤ 5% of the ELV).
- Testers are advised to collect **18–19 sets** so enough valid pairs remain after any outliers are removed.

One rule matters more than it looks: **reference gases alone are not permitted** to build the calibration. The test has to use the real stack-gas matrix — only the SRM, on your actual emissions, captures the moisture, temperature and interferences your analyser really sees. The tester also picks times when emissions are likely to be **highest and most varied** (without artificially forcing them), so the calibration covers your genuine operating range.

## The calibration function

From those paired readings, the tester derives the **calibration function** — the equation that converts your analyser's raw signal into a **true, traceable concentration**. From this point on, your CEMS no longer reports raw counts; it reports calibrated, defensible values.

<figure class="fig">
<svg viewBox="0 0 680 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="cf-t cf-d" font-family="'Helvetica Neue',Helvetica,Arial,sans-serif">
<title id="cf-t">The calibration function</title>
<desc id="cf-d">A scatter plot of paired CEMS-versus-SRM measurements rising from near zero to high concentration, with a straight calibration line fitted through them. The daily ELV and the top of the valid calibration range are marked as horizontal reference lines.</desc>
<rect x="80" y="92" width="560" height="208" fill="var(--green-tint)"/>
<line x1="80" y1="92" x2="640" y2="92" stroke="var(--grey)" stroke-width="1.5" stroke-dasharray="6 4"/>
<line x1="80" y1="120" x2="640" y2="120" stroke="var(--green-d)" stroke-width="1.5" stroke-dasharray="6 4"/>
<line x1="80" y1="60" x2="80" y2="300" stroke="var(--grey)" stroke-width="1"/>
<line x1="80" y1="300" x2="640" y2="300" stroke="var(--grey)" stroke-width="1"/>
<text x="74" y="304" text-anchor="end" font-size="10.5" fill="var(--muted)">0</text>
<text x="74" y="124" text-anchor="end" font-size="10.5" fill="var(--muted)">150</text>
<text x="74" y="64" text-anchor="end" font-size="10.5" fill="var(--muted)">200</text>
<text x="636" y="88" text-anchor="end" font-size="10.5" fill="var(--grey)">Top of valid calibration range (VCR)</text>
<text x="636" y="115" text-anchor="end" font-size="10.5" fill="var(--green-d)">Daily ELV = 150</text>
<text x="360" y="334" text-anchor="middle" font-size="11" fill="var(--muted)">CEMS analyser signal (raw)</text>
<text x="26" y="180" text-anchor="middle" font-size="11" fill="var(--muted)" transform="rotate(-90 26 180)">SRM reference (mg/m³)</text>
<line x1="80" y1="290" x2="640" y2="90" stroke="var(--green-d)" stroke-width="2.5"/>
<g fill="var(--green)" stroke="#fff" stroke-width="1">
<circle cx="95" cy="286" r="4"/><circle cx="120" cy="279" r="4"/><circle cx="160" cy="256" r="4"/><circle cx="200" cy="250" r="4"/><circle cx="240" cy="236" r="4"/><circle cx="280" cy="213" r="4"/><circle cx="320" cy="209" r="4"/><circle cx="360" cy="186" r="4"/><circle cx="400" cy="179" r="4"/><circle cx="440" cy="158" r="4"/><circle cx="480" cy="150" r="4"/><circle cx="520" cy="136" r="4"/><circle cx="560" cy="114" r="4"/><circle cx="600" cy="108" r="4"/><circle cx="640" cy="93" r="4"/>
</g>
<text x="150" y="320" text-anchor="start" font-size="10.5" fill="var(--green-d)">↑ a near-zero pair is required</text>
<rect x="404" y="214" width="150" height="46" rx="4" fill="#fff" stroke="var(--grey)" stroke-width="1"/>
<text x="414" y="232" text-anchor="start" font-size="11" font-weight="600" fill="var(--ink)">R² ≥ 0.9</text>
<text x="414" y="250" text-anchor="start" font-size="10" fill="var(--muted)">good fit (guidance)</text>
<text x="340" y="28" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)">Each point = one parallel CEMS–SRM measurement</text>
</svg>
<figcaption>The line is the calibration function: it translates analyser signal into true concentration. A correlation of R² ≥ 0.9 indicates a good fit — but at low, clustered emissions a lower R² isn't automatically a failure.</figcaption>
</figure>

A correlation of **R² ≥ 0.9** is the guideline's indicator of a good fit. But where emissions are low or tightly clustered, a lower R² can be perfectly legitimate — which is exactly why R² is *guidance*, and the **variability test has the final word**.

## The valid calibration range

A calibration is only trustworthy across the span of concentrations it was actually built on — the **valid calibration range (VCR)**. The guidelines set its top at the **highest calibrated parallel reading plus a margin** (10% for gas, or 100% for particulate, of the ELV — or 20% of the ELV, whichever is greater).

Operate inside the VCR and your data stands on solid ground. The operator must **check weekly** that readings stay within it; readings that persistently sit *outside* the VCR (for example, more than 5% of values over five consecutive weeks) can trigger a **fresh QAL2** — though if an exceedance was caused by a plant failure, fixing the plant is enough and a full recalibration isn't needed.

## The variability test — the decider

Calibration tells you the CEMS reads the right *value*. The **variability test** asks whether it reads *consistently enough*. It compares the scatter of CEMS-versus-SRM differences against an allowed uncertainty (the 95% confidence interval in the regulation), using **stack measurements only** — never reference materials.

This is the **definitive test**. A CEMS can have a tidy-looking calibration line and still fail variability; the test, not the eye, decides. Worth knowing too: sloppy SRM work can make a perfectly good CEMS *fail* — another reason the competence of your independent tester is not a place to economise.

## Passing — and going live

Once the system passes, the tester compiles the **Calibration and Variability Test report** (to the Appendix 2 format) and submits it to **DOE for verification**. Only after that verification can your CEMS data connect to the DOE System for CEMS as **valid, compliant data**.

And then the job shifts from *proving it once* to *keeping it true every day* — which is **QAL3**, the subject of the next part.

**Facing a QAL2 and want it to pass first time?** [Talk to us]({{ '/' | relative_url }}#contact) — we prepare and run CEMS for facilities across Malaysia against the same DOE CEMS Guidelines we helped write.

*Next in the series — Part 3: QAL3 in practice — drift checks, control charts, and catching problems before they become exceedances.*

<div class="related">
  <p class="label">Related insights</p>
  <ul>
    <li><a href="{{ '/insights/cems-quality-assurance-chain-qal1-qal2-qal3-ast/' | relative_url }}">Part 1 — The CEMS quality-assurance chain: QAL1 → QAL2 → QAL3 → AST</a></li>
    <li><a href="{{ '/insights/qal1-certification-mcert-tuv-doe-registered-cems/' | relative_url }}">QAL1 and certification: what "DOE-registered" and MCERT/TÜV mean</a></li>
    <li><a href="{{ '/insights/cems-compliance-daily-half-hourly-rule-reg-17-3/' | relative_url }}">What "compliant" actually means: the daily-average and 2× half-hourly rule</a></li>
  </ul>
</div>

---

*This article is general guidance, not legal advice. For obligations specific to your facility, refer to the current Environmental Quality (Clean Air) Regulations 2014, the EQA 1974, and the DOE CEMS Guidelines, or speak with us directly.*
