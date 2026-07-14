---
layout: post
title: "Calibrating a transmissometer-type particulate CEMS: a walk-through with the DustHunter T100"
full_title: "Calibrating a Transmissometer TPM CEMS (DustHunter T100) | Mesra"
date: 2026-07-14 00:07:00
description: "A transmissometer measures light, not dust — so calibrating one means two separate things. The instrument's own linearity and zero checks, and the QAL2 correlation against a gravimetric SRM that turns extinction into mg/m³. Worked through on the SICK DustHunter T100."
image: /assets/og/calibrating-transmissometer-t100.png
series: reference-methods
part: 6
---

*The reference methods behind your CEMS — Part 6 of a practical series for industry and regulators, drawn from the DOE CEMS Guidelines (Version 8, 2025), which we helped develop.*

Ask an operator how their particulate CEMS is calibrated and you'll often get one answer that quietly runs two very different jobs together. A transmissometer — the double-pass optical system DOE accepts for in-situ particulate monitoring — doesn't measure dust. It measures how much light survives a trip across the duct and back. Everything the instrument reports in mg/m³ is downstream of a correlation someone built between *that optical signal* and a real, weighed dust mass. Calibrating the system properly means keeping **both** halves honest: the optics that produce the signal, and the function that converts the signal into a concentration.

This post separates those two jobs and works through each on a real, DOE-accepted example — the **[SICK DustHunter T100]({{ '/insights/in-situ-cems-installation-anatomy/' | relative_url }})**, the double-pass transmittance system we install on biomass boiler stacks.

> **New here?** If you haven't met the four-stage quality-assurance chain, start with [QAL1, QAL2, QAL3 and AST]({{ '/insights/cems-quality-assurance-chain-qal1-qal2-qal3-ast/' | relative_url }}). This post assumes you know roughly where those stages sit.

## Why a transmissometer needs calibrating at all

A transmissometer sends a light beam from the sender/receiver unit, across the flue gas, off a reflector on the far wall, and back. Dust in the path scatters and absorbs some of that light. The instrument's primary measured quantity is **transmittance** — the fraction of light that returns — from which it derives opacity and extinction. On the T100, transmittance is the primary optical quantity and everything else is calculated from it.

Here's the catch the Guidelines state plainly: particulate matter is measured *using a surrogate* — light — which "has a variable response to different particle physical characteristics" (Guidelines V8 §4.1.18). Two stacks emitting the identical mass of dust can dim the beam by different amounts if their particles differ in size, shape, colour or refractive index. The Guidelines list exactly these dependencies for optical extinction devices: the "concentration calibration factor [is] dependent on particle size, composition, shape, colour and refractive index." So there is no universal "extinction → mg/m³" conversion. The one that applies to your stack has to be *built* on your stack, against dust from your process.

That is the fundamental reason calibration exists here, and it drives everything below.

<figure class="fig flow">
<p class="fig-title">Two calibration jobs, not one</p>
<div class="flow-row">
<div class="flow-step"><span class="fs-k">Job 1</span><span class="fs-name">Instrument checks</span><span class="fs-q">Optics reading true?</span></div>
<div class="flow-arrow" aria-hidden="true">→</div>
<div class="flow-step"><span class="fs-k">Job 2</span><span class="fs-name">SRM correlation</span><span class="fs-q">Signal → mg/m³</span></div>
</div>
<p class="fig-note">Job 1 (linearity + zero) proves the signal is trustworthy. Job 2 (QAL2 vs SRM) gives it meaning in mg/m³.</p>
<figcaption>Confuse the two and you'll "calibrate" a healthy instrument with a filter set — while the number DOE receives is still uncalibrated against your dust.</figcaption>
</figure>

## Job one: the instrument's own checks (linearity and zero)

This is the part that happens with the instrument's own hardware — filters, a reflector, and the electronics — and it answers a narrow question: *is the optical measurement itself functioning correctly and reading a stable zero?* It does **not** produce a concentration and it does not replace the SRM correlation.

**The linearity (span) check.** The T100 is verified with a set of optical filter glasses of known transmittance value inserted into the beam path. The instrument's reading is compared against each filter's certified value; if every reading falls inside the permitted tolerance, the transmission measurement is confirmed linear across its range. The QAL1 certificate for the T100 describes exactly this "auxiliary equipment for device testing": filter glasses with predetermined transmission values, whose values "are subsequently compared with those measured by DUSTHUNTER T100." This is a check of the optics — nothing about it involves dust mass.

**The zero / normalisation reference.** A transmissometer needs a defined "100% transmittance" reference — the reading it would give across a clean, dust-free path. On the T100 this is established either with adjustment mounts holding the sender/receiver and reflector at the exact duct spacing on a smoke-free section, or with a dust-free tube of the exact duct length inserted between the two units. That "dust-free" transmittance is set to 100%, and every subsequent in-duct reading is expressed relative to it. The system can then perform **zero checks** — automatically (the T100 offers a 24-hour automatic cycle on the related T200) or manually — to confirm the reference hasn't drifted.

<figure class="fig report">
<p class="fig-title">Job 1 · what each instrument check proves</p>
<div class="rep-rows">
  <div class="rep-row">
    <span class="rep-k">1</span>
    <span class="rep-body"><span class="rep-name">Linearity / span check</span><span class="rep-desc">Certified filter glasses in the beam. Confirms the optics read known transmittance values within tolerance across the range. <strong>Produces no mg/m³.</strong></span></span>
  </div>
  <div class="rep-row">
    <span class="rep-k">2</span>
    <span class="rep-body"><span class="rep-name">Zero / normalisation</span><span class="rep-desc">A dust-free path — adjustment mounts or a tube — set to 100% transmittance. Confirms the clean-path reference is correct and stable. <strong>Produces no mg/m³.</strong></span></span>
  </div>
  <div class="rep-row">
    <span class="rep-k">3</span>
    <span class="rep-body"><span class="rep-name">Contamination check</span><span class="rep-desc">The swivel element on the sender/receiver. Confirms the optical surfaces aren't fouled enough to bias the reading. <strong>Produces no mg/m³.</strong></span></span>
  </div>
</div>
<figcaption>All three keep the signal trustworthy. None tells you what a signal means in milligrams per cubic metre — that's Job 2.</figcaption>
</figure>

The Guidelines are explicit that these surrogates count only when they're proper reference materials for the certified system: "any surrogates including filter, field current, calibration block etc. must be certified QAL1 and be dedicated reference materials for the installed CEMS" (§4.1.16). A generic filter set is not a shortcut around the correlation.

## Job two: the correlation against a gravimetric SRM (this is the real calibration)

This is where a transmissometer becomes a *particulate* monitor. The Guidelines put it directly: "for particulate matter CEMS, it is essential that the device be calibrated on the process being measured. A gravimetric reference method (such as EN 13284-1 / USEPA Method 5 / MS 1596) shall be used to correlate the output of the device with the obtained results" (§4.1.17). You run the instrument and a manual gravimetric stack test side by side, and you fit a function from the instrument's signal to the weighed mg/m³.

Two moments in the CEMS life-cycle do this, and it's worth keeping them distinct.

**Initial setting.** Done during installation, following the manufacturer's method, to give the instrument a first working correlation. The Guidelines require this to be "conducted separately from QAL2 testing" and to follow the procedure in the manufacturer's manual (§5.3.7). Think of it as the factory-to-field starting point — not the certified calibration.

**QAL2 — the Calibration and Variability Test.** This is the calibration that DOE recognises. It's covered in depth in our [QAL2 post]({{ '/insights/qal2-calibration-variability-test-cems/' | relative_url }}), so here we'll focus on what matters specifically for a transmissometer.

<figure class="fig flow">
<p class="fig-title">The QAL2 correlation, on a transmissometer</p>
<div class="flow-row">
<div class="flow-step"><span class="fs-k">Step 1</span><span class="fs-name">Parallel test</span><span class="fs-q">≥15 pairs · 3 days</span></div>
<div class="flow-arrow" aria-hidden="true">→</div>
<div class="flow-step"><span class="fs-k">Step 2</span><span class="fs-name">Calibration function</span><span class="fs-q">Extinction → mg/m³</span></div>
<div class="flow-arrow" aria-hidden="true">→</div>
<div class="flow-step hl"><span class="fs-k">Step 3</span><span class="fs-name">Variability test</span><span class="fs-q">The decider</span></div>
</div>
<p class="fig-note">Filters can't substitute for this — they "do not replicate sufficiently the stack gas matrix" (§5.3.8a).</p>
<figcaption>Job 1 verifies the optics; only paired measurement against a weighed dust mass builds the function that makes the reading mean something.</figcaption>
</figure>

The numbers that govern it, from Guidelines V8 §5.3.8:

- **At least 15 valid parallel measurements**, spread uniformly over three days (not necessarily consecutive, but within at most four weeks), while the plant operates normally.
- **Each sample at least 30 minutes**, with at least one hour between the start of successive samples.
- **A good spread of concentrations** — the plant should be run across as much of its normal operating range as possible so the function is valid across that range, defining the **valid calibration range (VCR)**.
- **Reference-material-only calibration is not permitted.** The correlation must come from parallel measurement against the SRM, because filters don't replicate the real stack-gas matrix.
- **R² ≥ 0.9** is the guidance indicator for a valid regression — but the Guidelines are careful that low-level emissions can legitimately fall below this, and that **"the variability test shall always be considered as the definitive test."**

That last point matters more for a transmissometer than almost any other CEMS, because the T100's own certificate is a live illustration of it.

## The R² footnote every transmissometer buyer should read

The T100's public QAL1 certificate carries an unusual remark from the German testing body: "the requirements of suitability testing according to EN 15267-3 regarding the determination coefficient R² of the calibration function were not fulfilled." Read cold, that sounds alarming. It isn't — and understanding why is the whole point of this section.

Optical particulate systems tested against very low, tightly-clustered dust concentrations struggle to hit a high R² for a simple statistical reason: when all your calibration points sit in a narrow band, there's little spread for a regression line to "explain," so R² drops even when the instrument is behaving well. This is exactly the low-level-cluster case the DOE Guidelines carve out — an R² under 0.9 "does not necessarily indicate a QAL2 failure when the emissions are low level cluster" (§5.3.9q). The same certificate shows the system comfortably **passing** the metric that actually counts: its total expanded uncertainty came out at **8.1% of the ELV against a 22.5% requirement** — a clear QAL1 pass on the uncertainty budget.

The practical lesson: when you calibrate a transmissometer on a real stack, judge the result on the **variability test and uncertainty**, not on R² alone. A low R² on a clean, low-dust biomass stack is often the statistics of the situation, not a fault in the instrument. We covered how to read this trade-off from the certificate itself in [reading a QAL1 certificate]({{ '/insights/qal1-certificate-tpm-opacity-biomass-boiler/' | relative_url }}).

## Keeping the calibration honest: QAL3 and the AST

A calibration function is only as good as the day it was built unless you check that it still holds. Two mechanisms do that, and both lean on job one.

**QAL3 — ongoing performance monitoring.** The operator's own routine: recording **zero and span checks** over time and plotting them on control charts (Shewhart, CUSUM or equivalent) to catch drift before it becomes an excess-emission problem. Frequency follows the maintenance interval in the QAL1 certificate — DOE recommends a shorter interval, every four weeks, and a shorter one still for PM systems on "high and dirty dust load," where drift shows up faster (§5.5.7–5.5.8). Note the T100 certificate specifies a **three-month maintenance interval**; DOE's four-week recommendation is deliberately tighter than the certificate minimum. This is precisely where the instrument's own zero and span hardware from job one earns its keep. See [QAL3 and drift control]({{ '/insights/qal3-ongoing-performance-monitoring-drift-control/' | relative_url }}).

**AST — the Annual Surveillance Test.** Once a year, a fresh (smaller) set of parallel SRM measurements checks whether the QAL2 calibration function is *still valid* — that the extinction-to-mg/m³ relationship built at QAL2 hasn't shifted. It's the yearly re-test of job two. See [the Annual Surveillance Test]({{ '/insights/annual-surveillance-test-ast-cems/' | relative_url }}).

<figure class="fig report">
<p class="fig-title">When each calibration activity happens</p>
<div class="rep-rows">
  <div class="rep-row">
    <span class="rep-k">1</span>
    <span class="rep-body"><span class="rep-name">Initial setting</span><span class="rep-desc">At installation, by the installer, following the manufacturer's method. The first working correlation — not the certified one. <strong>(Job 2, provisional.)</strong></span></span>
  </div>
  <div class="rep-row hl">
    <span class="rep-k">2</span>
    <span class="rep-body"><span class="rep-name">QAL2 · Calibration &amp; Variability Test</span><span class="rep-desc">Before data goes to DOE, by a DOE-registered CEMS tester. The certified correlation, re-triggered by a material plant or fuel change. <strong>(Job 2, certified.)</strong></span></span>
  </div>
  <div class="rep-row">
    <span class="rep-k">3</span>
    <span class="rep-body"><span class="rep-name">QAL3 · Ongoing monitoring</span><span class="rep-desc">Ongoing — every 4 weeks (DOE recommendation), by the plant operator. Zero and span checks plotted on drift charts. <strong>(Job 1.)</strong></span></span>
  </div>
  <div class="rep-row">
    <span class="rep-k">4</span>
    <span class="rep-body"><span class="rep-name">Annual Surveillance Test</span><span class="rep-desc">Annually, by a DOE-registered CEMS tester. A smaller parallel test that re-checks the QAL2 correlation still holds. <strong>(Job 2.)</strong></span></span>
  </div>
</div>
<figcaption>Job 1 keeps the signal trustworthy day to day; Job 2 establishes and periodically re-confirms what the signal means in mg/m³.</figcaption>
</figure>

## What triggers a fresh calibration

A QAL2 calibration function isn't permanent. The Guidelines require a new QAL2 — and until it's done, continued use of the existing function — when the plant or fuel changes materially (§5.3.3): a switch from a single fuel to a mixed fuel or vice versa, a change of process affecting the emission character, or an alternative-fuel thermal input rising more than 10% per year, among others. For a transmissometer this is doubly important, because a fuel change often changes the *particle character* — size, colour, composition — and therefore the very extinction-to-mass relationship the calibration encodes. A new fuel can quietly invalidate an optical calibration in a way it wouldn't for a gravimetric beta-attenuation monitor. When in doubt, our post on [changes that trigger a new QAL2]({{ '/insights/changes-that-trigger-new-qal2-cems/' | relative_url }}) walks through the tests.

## The one-paragraph version

A transmissometer like the DustHunter T100 measures light, not dust, so "calibration" is really two jobs. The instrument's own **linearity and zero checks** — filter glasses in the beam, a dust-free 100% reference — prove the optics are reading truthfully, but produce no concentration. The **QAL2 Calibration and Variability Test** builds the function that turns the optical signal into mg/m³ by running the instrument against a gravimetric SRM (≥15 paired measurements, ≥30 minutes each, over three days, R² ≥ 0.9 as guidance but the variability test as the decider). Because dust character drives the optical response, that correlation is specific to your stack and fuel, must be re-checked yearly by the AST, and must be rebuilt when the plant or fuel changes. Judge a transmissometer's calibration on uncertainty and the variability test — not on R² alone.

---

*Mesra Alam Sekitar helped develop the DOE CEMS Guidelines and installs DOE-accepted in-situ particulate CEMS, including the SICK DustHunter T100, on biomass and industrial stacks across Malaysia. If you're planning a CEMS install or a QAL2, [talk to us]({{ '/' | relative_url }}#contact).*
