---
layout: post
title: "Why a continuous monitor still needs manual stack tests"
full_title: "Why a CEMS Still Needs Manual Stack Tests | Mesra"
date: 2026-06-22 01:30:00
description: "You installed a CEMS to avoid climbing the stack — so why do the rules still require manual tests? A continuous monitor reads a proxy that needs anchoring."
image: /assets/og/why-cems-needs-manual-stack-tests-srm.png
series: reference-methods
part: 1
---

*The reference methods behind your CEMS — Part 1 of 5. A series for industry and regulators, drawn from the DOE CEMS Guidelines (Version 8, 2025) we helped develop and the standards-committee work behind MS 1596.*

You installed a Continuous Emission Monitoring System for a good reason: so you wouldn't need someone climbing the stack with a sampling train every time you wanted to know your emissions. The analyser reads around the clock, the data flows to the DOE, and the job is done — automatically.

So it surprises a lot of plant managers to learn that the rules *still* send a team up the stack with manual gear, on day one and every year after. If the CEMS is the whole point, why does a manual test keep coming back?

The answer is the subject of this whole series, and it starts with a simple fact about what your CEMS is actually doing.

## Your CEMS measures a proxy, not the dust itself

A continuous analyser doesn't weigh your emissions. It can't — there's no scale on a chimney. Instead it measures something it *can* sense continuously and quickly: a beam of light scattered or blocked by passing dust, the absorption of a gas at a certain wavelength, and so on. That raw signal rises and falls with your emissions, but it isn't a concentration. It's a **proxy** — a number that *stands in for* the real thing.

To turn that proxy into a defensible "X mg/m³," the analyser needs to be told what its signal means in real units. And the only way to know what the real value is, is to measure it the slow, honest way: pull a physical sample from the flue, capture the dust on a filter, and **weigh it.** That manual, first-principles measurement is the **Standard Reference Method (SRM)**.

## The manual stack test is the "truth" the CEMS is calibrated to

The SRM is everything the CEMS isn't: slow, manual, labour-intensive — and traceable to a physical mass on a balance. It doesn't infer anything. It collects the dust and puts it on a scale.

That's exactly why the rules keep it in the picture. The SRM is the **reference** — the trusted measurement that the continuous analyser's proxy signal gets anchored to. Without it, your CEMS would be producing precise-looking numbers with nothing tying them to reality.

## QAL2 ties the two together — at install

The moment those two measurements are formally connected is the **QAL2 test**. A registered tester runs the SRM alongside your CEMS, pairs the readings, and derives the equation — the *calibration function* — that converts your analyser's proxy signal into true concentration. From then on, your CEMS reports calibrated, traceable values instead of raw counts.

We covered that test in detail in the Operating series — [QAL2 and the Calibration & Variability Test]({{ '/insights/qal2-calibration-variability-test-cems/' | relative_url }}) — and it's where this Reference Methods series plugs in. QAL2 is *built on* the manual stack test. Everything QAL2 proves about your CEMS is only as good as the SRM underneath it.

## They drift apart — which is why it's never one-and-done

If a CEMS stayed perfectly true to its first calibration forever, you'd run the SRM once and never again. But analysers drift. Optics foul, sources age, the flue itself changes. Over months, the proxy signal slowly stops meaning exactly what it meant on calibration day.

So the manual reference test comes back on a schedule. The **Annual Surveillance Test (AST)** re-runs the SRM against the CEMS each year to confirm the calibration still holds, while routine **QAL3** drift checks watch for trouble in between. (The full quality chain — QAL1 → QAL2 → QAL3 → AST — is mapped [here]({{ '/insights/cems-quality-assurance-chain-qal1-qal2-qal3-ast/' | relative_url }}).) The reference method isn't a one-time hurdle at install — it's the recurring anchor that keeps your continuous data honest.

## So: why a continuous monitor still needs manual stack tests

Because the CEMS gives you *speed and coverage* — a reading every moment, forever — and the manual SRM gives you *truth* — a value tied to a weighed mass. Neither replaces the other. The continuous monitor watches; the reference method tells the monitor what it's seeing, and keeps telling it, year after year.

That's the bridge. The rest of this series is about the reference method itself — the thing your whole CEMS quietly depends on:

- **[Part 2]({{ '/insights/isokinetic-sampling-explained-stack-test/' | relative_url }})** explains **isokinetic sampling** — why the sample has to be drawn at exactly the flue's own velocity, in plain English.
- **Part 3** maps the standards that govern it — **[MS 1596, ISO 9096 and EN 13284]({{ '/insights/ms-1596-iso-9096-en-13284-particulate-standards/' | relative_url }})**.
- **Part 4** looks at the **MS 1596 revision** now under way.
- **[Part 5]({{ '/insights/reading-a-stack-test-report/' | relative_url }})** shows you how to **read a stack-test report** — concentration, mass flow and isokinetic %.

**Facing your first QAL2, or an AST that has to pass?** [Talk to us]({{ '/' | relative_url }}#contact) — we run CEMS and the [reference-method stack tests]({{ '/services/qal2-qal3-testing/' | relative_url }}) behind them for facilities across Malaysia, against the same DOE CEMS Guidelines we helped write.

<div class="related">
  <p class="label">Related insights</p>
  <ul>
    <li><a href="{{ '/insights/qal2-calibration-variability-test-cems/' | relative_url }}">QAL2 and the Calibration & Variability Test: certifying your CEMS against the SRM</a></li>
    <li><a href="{{ '/insights/en-14181-explained-cems-quality-assurance/' | relative_url }}">EN 14181 explained: the standard that keeps your CEMS data trustworthy</a></li>
    <li><a href="{{ '/insights/cems-quality-assurance-chain-qal1-qal2-qal3-ast/' | relative_url }}">The CEMS quality-assurance chain: QAL1 → QAL2 → QAL3 → AST</a></li>
    <li><a href="{{ '/insights/clean-air-regulations-2014-cems/' | relative_url }}">What the Clean Air Regulations 2014 mean for your CEMS</a></li>
    <li><a href="{{ '/insights/palm-oil-mill-periodic-testing-tiers-dust-load/' | relative_url }}">Below 2.5 kg/hour: the periodic tiers in practice, and what moves your number</a></li>
  </ul>
</div>

---

*This article is general guidance, not legal advice. For obligations specific to your facility, refer to the current Environmental Quality (Clean Air) Regulations 2014, the EQA 1974, and the DOE CEMS Guidelines, or speak with us directly.*
