---
layout: post
title: "MS 1596, ISO 9096 and EN 13284: how Malaysia's stack-test standard fits the international picture"
full_title: "MS 1596, ISO 9096 & EN 13284 Particulate Standards"
date: 2026-06-22 02:00:00
description: "MS 1596, ISO 9096 and EN 13284 are one gravimetric stack-test method at three levels. How they relate, where Malaysia's MS 1596 sits, and why low-dust matters."
series: reference-methods
part: 3
---

*The reference methods behind your CEMS — Part 3 of 5. A series for industry and regulators, drawn from the DOE CEMS Guidelines (Version 8, 2025) we helped develop and the standards-committee work behind MS 1596.*

When your CEMS is calibrated, the [QAL2 test]({{ '/insights/qal2-calibration-variability-test-cems/' | relative_url }}) measures it against a **Standard Reference Method (SRM)** — a [manual stack test]({{ '/insights/why-cems-needs-manual-stack-tests-srm/' | relative_url }}) run alongside your analyser. For particulate (dust), that manual method is a *gravimetric [isokinetic]({{ '/insights/isokinetic-sampling-explained-stack-test/' | relative_url }})* measurement: pull a sample from the flue at the right velocity, catch the dust on a filter, weigh it, report the concentration.

But read three different stack-test reports and you'll see that same method called by three different names — **MS 1596**, **ISO 9096**, **EN 13284**. It's a reasonable moment to ask: are these competing methods? Which one applies in Malaysia? And does it matter which your tester quotes?

The short answer: they are **not three methods**. They are **one method, adopted at three levels** — and knowing how they relate tells you a lot about what your dust data can and can't be trusted to do.

## One method, adopted three times

Strip away the cover pages and all three describe the same physical procedure: isokinetic extraction, filtration, gravimetric determination of mass concentration. What differs is *who adopted it* and *what dust range they tuned it for*.

<figure class="fig lineage">
<p class="fig-title">One method, three standards</p>
<div class="lin-cols">
  <div class="lin-col iso">
    <span class="lin-tier">Tier 01 · International root</span>
    <span class="lin-code">ISO 9096</span>
    <span class="lin-full">Stationary source emissions — manual determination of mass concentration of particulate matter</span>
    <dl>
      <dt>Role</dt><dd>The origin method. The other two are adoptions of it.</dd>
      <dt>Range</dt><dd>~20–1000 mg/m³ — the higher-load global baseline.</dd>
      <dt>Current edition</dt><dd>ISO 9096:2017 (3rd) — succeeding 2003 and 1992.</dd>
    </dl>
  </div>
  <div class="lin-col en">
    <span class="lin-tier">Tier 02 · European adoption</span>
    <span class="lin-code">EN 13284-1</span>
    <span class="lin-full">Determination of <em>low-range</em> mass concentration of dust — manual gravimetric method</span>
    <dl>
      <dt>Role</dt><dd>Europe's refinement, sharpened for low-dust (post-abatement) stacks.</dd>
      <dt>Range</dt><dd>Below 50 mg/m³; validated down to ~5 mg/m³.</dd>
      <dt>Plugs into</dt><dd>EN 14181 as the SRM for QAL2 / AST.</dd>
    </dl>
  </div>
  <div class="lin-col ms">
    <span class="lin-tier">Tier 03 · Malaysian adoption</span>
    <span class="lin-code">MS 1596</span>
    <span class="lin-full">Determination of concentration and mass flow rate of particulate in flue gas, stationary sources</span>
    <dl>
      <dt>Live edition</dt><dd>MS 1596:2003 — built on ISO 9096:1992 + ISO 10780.</dd>
      <dt>Status</dt><dd><span class="lin-badge live">2003 · confirmed 2013</span><span class="lin-badge draft">revision in progress</span></dd>
      <dt>Role in Malaysia</dt><dd>The DOE-referenced SRM for compliance stack tests.</dd>
    </dl>
  </div>
</div>
<p class="fig-note">EN 13284 and MS 1596 are <strong>siblings, not a chain</strong> — both adopt ISO 9096 independently.</p>
<figcaption>The same manual gravimetric isokinetic method, adopted at three levels. Each adoption inherits from the ISO root, not from the others.</figcaption>
</figure>

## ISO 9096 — the international root

**ISO 9096** is the origin. It sets out the manual gravimetric reference method for measuring dust mass concentration in a flue, and it's written for the *general* case — concentrations from roughly **20 mg/m³ up to 1000 mg/m³**. It's the baseline that national and regional bodies adopt and localise.

It has also moved on over the years: the current edition is **ISO 9096:2017**, the third, which replaced the 2003 edition, which in turn replaced the original **1992** version. That detail matters in a moment, because Malaysia's standard is anchored to a specific edition of ISO 9096 — and not the newest one.

## EN 13284-1 — Europe's low-dust refinement

Europe adopted the same ISO method but ran into a practical problem: modern abated stacks — bag filters, scrubbers, electrostatic precipitators — emit *very little* dust. Down near a few mg/m³, the baseline ISO accuracy starts to degrade. So CEN published **EN 13284-1**, a version of the method **purpose-built for low dust concentrations below 50 mg/m³**, validated in field tests around **5 mg/m³**.

EN 13284-1 is the **SRM that EN 14181 consumes**. When a European CEMS goes through QAL2 or its annual AST, the manual measurements it's calibrated against are EN 13284-1 measurements. (We mapped that QA chain — QAL1 → QAL2 → QAL3 → AST — in the [Operating series]({{ '/insights/cems-quality-assurance-chain-qal1-qal2-qal3-ast/' | relative_url }}).)

## MS 1596 — Malaysia's adoption

**MS 1596** is Malaysia's national adoption of the same method. The edition in force is **MS 1596:2003**, confirmed in 2013, and it is built on **ISO 9096:1992 plus ISO 10780** (the companion standard for duct velocity and flow). It covers a wide range — roughly **0.005 to 10 g/m³** (that is, 5 to 10,000 mg/m³) — and the DOE references it as the SRM for compliance stack testing in Malaysia.

There's one line in MS 1596:2003 worth knowing, because it explains everything that follows: for concentrations **below 0.050 g/m³ (50 mg/m³), the method's inaccuracy exceeds ±10%.** That's not a flaw — it's the honest limit of the 1992-era method at low dust. And it's *exactly* the range that EN 13284-1 was created to handle well.

## Siblings, not a chain

Here's the relationship people most often get wrong. It's tempting to picture ISO → EN → MS as a single descending line. It isn't.

EN 13284 and MS 1596 are **both adoptions of ISO 9096, made independently of each other**. Europe took the ISO root and refined it for low dust; Malaysia took the ISO root (the 1992 edition) and localised it for national use. So:

- **MS 1596 ≈ ISO 9096** (1992 vintage), across a broad dust range.
- **EN 13284-1 ≈ ISO 9096** tuned specifically for low concentrations.

They are siblings descended from a common parent — not a parent and child. Quoting "MS 1596" and "ISO 9096" on the same report isn't a contradiction; it's naming the adoption and its root.

## Why the low-dust distinction matters in Malaysia

This isn't academic. Malaysia's stacks are getting cleaner. A modern [palm-oil-mill boiler]({{ '/insights/palm-oil-mill-cems-dust-load-threshold/' | relative_url }}) with proper abatement can emit dust low enough that it sits in the very range where the **1992-based MS 1596 loses accuracy** — and where **EN 13284-1 is at its strongest**.

That gap is precisely why **MS 1596 is being revised to align with the current ISO 9096** — work now under way in the national standards committee. As the revision moves the Malaysian standard onto the present ISO edition, it inherits much of the low-range thinking that Europe built into EN 13284-1. We cover why that revision is happening and where it's heading in [Part 4]({{ '/insights/ms-1596-revision-low-dust-alignment/' | relative_url }}) of this series.

## Where this sits relative to CEMS calibration

One last clarification, because it's the source of a lot of confusion: **none of these three standards are the CEMS calibration framework.** They supply the *SRM* — the manual paired measurements. The calibration framework is the QA programme that *consumes* those measurements: in Europe, **EN 14181** (QAL2 / QAL3 / AST); in Malaysia, the **DOE CEMS scheme**, which references **MS 1596** as its SRM.

So when your CEMS is certified, the chain is: your analyser is regressed against MS 1596 manual measurements during [QAL2]({{ '/insights/qal2-calibration-variability-test-cems/' | relative_url }}), and that calibration is what makes your continuous data defensible. The standard underneath the SRM is the foundation the whole calibration stands on — which is why it's worth knowing which one you're standing on.

**Running a compliance stack test or a QAL2 and want the reference method done right?** [Talk to us]({{ '/' | relative_url }}#contact) — we run CEMS and [reference-method work]({{ '/services/qal2-qal3-testing/' | relative_url }}) for facilities across Malaysia, and we sit on the committee revising MS 1596.

<div class="related">
  <p class="label">Related insights</p>
  <ul>
    <li><a href="{{ '/insights/qal2-calibration-variability-test-cems/' | relative_url }}">QAL2 and the Calibration & Variability Test: certifying your CEMS against the SRM</a></li>
    <li><a href="{{ '/insights/en-14181-explained-cems-quality-assurance/' | relative_url }}">EN 14181 explained: the standard that keeps your CEMS data trustworthy</a></li>
    <li><a href="{{ '/insights/cems-quality-assurance-chain-qal1-qal2-qal3-ast/' | relative_url }}">The CEMS quality-assurance chain: QAL1 → QAL2 → QAL3 → AST</a></li>
    <li><a href="{{ '/insights/clean-air-regulations-2014-cems/' | relative_url }}">What the Clean Air Regulations 2014 mean for your CEMS</a></li>
    <li><a href="{{ '/insights/palm-oil-mill-cems-dust-load-threshold/' | relative_url }}">Does your palm oil mill need a CEMS? The 2.5 kg/hour dust-load test</a></li>
    <li><a href="{{ '/insights/palm-oil-mill-co-periodic-monitoring/' | relative_url }}">Why CO isn't monitored the same way as TPM and opacity at your mill</a></li>
  </ul>
</div>

---

*This article is general guidance, not legal advice. For obligations specific to your facility, refer to the current Environmental Quality (Clean Air) Regulations 2014, the EQA 1974, the DOE CEMS Guidelines, and the current editions of MS 1596, ISO 9096 and EN 13284, or speak with us directly.*
