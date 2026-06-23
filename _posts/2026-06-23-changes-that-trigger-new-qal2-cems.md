---
layout: post
title: "Which changes trigger a fresh QAL2 — and the clock that starts when they do"
date: 2026-06-23 02:00:00
description: "Part 3 of our Operating a Compliant CEMS series: the changes that reset your CEMS calibration and force a new QAL2-CVT — equipment repairs, fuel switches, process changes, drifting out of the valid calibration range — plus the three-month clock that starts the moment a trigger fires."
series: operating
part: 3
---

*Operating a compliant CEMS — Part 3 of 5. A practical series for industry, drawn from the DOE CEMS Guidelines (Version 8, 2025), which we helped develop.*

> **New to EN 14181?** Our [plain-English overview of EN 14181]({{ '/insights/en-14181-explained-cems-quality-assurance/' | relative_url }}) explains where QAL2 sits in the wider quality-assurance programme.

In [Part 2]({{ '/insights/qal2-calibration-variability-test-cems/' | relative_url }}) we covered the QAL2 Calibration & Variability Test — the parallel SRM measurements that establish your calibration function and certify your CEMS on your own stack. It's tempting to treat that certificate as a five-year ticket and forget about it. It isn't.

A calibration is only valid for the system, the fuel and the process it was established on. Change any of those enough and the calibration no longer describes reality — so the standard requires you to **redo the QAL2**. We flagged this at the end of [Part 1]({{ '/insights/cems-quality-assurance-chain-qal1-qal2-qal3-ast/' | relative_url }}); here's exactly which changes pull the trigger, and the deadline that follows.

## The baseline: every three years, no matter what

Even if nothing changes, a QAL2-CVT must be repeated **at least every three years** for every CEMS required under the Clean Air Regulations 2014. (EN 14181's own baseline is five years; Malaysia's guidelines set the tighter three-year interval.) The annual AST keeps the calibration honest in between — but the AST is a check, not a re-calibration, and it cannot extend the calibration indefinitely.

So three years is the *ceiling*. Most of the triggers below will arrive sooner.

## When the CEMS itself changes

A calibration belongs to a specific instrument in a specific condition. A new QAL2 is required after:

- **Any CEMS failure or malfunction**, or
- **Any modification, upgrade or repair** to the CEMS that significantly influences and changes the results.

The useful test for "significant" is built into the guidelines: a change is significant if it **would cause the subsequent QAL3 drift checks to fail**. Swapping a like-for-like consumable usually isn't significant; replacing an analyser, a detector, the sample-handling system or the optics usually is. If you're unsure, that's exactly the judgement your tester or consultant should make *before* the work, not after.

## When what you burn changes

Fuel drives the flue-gas composition your CEMS reads, so a real change of fuel can invalidate the calibration. Under the guidelines, a fuel change is **significant** — and triggers a new QAL2-CVT — when any of these apply:

- the change **alters the flue-gas emission profile**;
- it **results in a licence revision**;
- the fuel moves **between states** — solid, liquid or gaseous;
- the fuel goes from a **single type to a mixture** (or the reverse); or
- the **alternative fuel exceeds 10% of thermal input** per year.

Biomass deserves a special mention. Plant-based biomass can differ batch to batch, shifting the emissions enough that the guidelines note such plants may need a **QAL2 every year instead of an AST**. If you co-fire or run variable biomass, plan your QA calendar around that possibility.

## When the process changes

Beyond fuel, **any significant change in plant operation that changes the emissions** triggers a fresh QAL2 — for the measurands affected. A new or altered abatement system, a major process modification, or a change that shifts your typical operating concentrations all qualify. The principle is consistent: if the world your CEMS measures has moved, the calibration that described the old world has to be re-established.

## When the data tells you

Sometimes the trigger comes from the monitoring itself rather than a planned change:

- **QAL3 or AST shows a need.** If your [ongoing drift checks]({{ '/insights/qal3-ongoing-performance-monitoring-drift-control/' | relative_url }}) or the annual surveillance test indicate the calibration no longer holds, a QAL2-CVT is required.
- **You drift outside the valid calibration range (VCR).** A QAL2 calibration is only valid across the concentration range it was established over. If your CEMS is routinely reading outside that range, a new QAL2 is needed to re-establish a valid range. One sensible exception: if the VCR exceedances were caused by a **plant failure**, a full new QAL2 isn't required once the failure is fixed.
- **Legacy non-EN 14181 calibration.** If your system was previously set up using other procedures (RATA, CGA, RCA and the like) with no EN 14181 calibration function to verify at AST, it needs a proper QAL2-CVT to bring it into the framework.

## The three-month clock

Here's the part operators most often miss. Once a trigger fires, the new calibration function must be implemented **as soon as practicable, and within three months**. (EN 14181 allows six; the DOE guidelines halve it to three.)

You are not left without valid data in the meantime: until the new calibration function is determined, you **continue using the previous one**. But the clock is real, and a QAL2-CVT needs an independent, DOE-registered tester, parallel SRM measurements and suitable plant conditions — none of which you can arrange overnight. Treat the trigger as the start of a booking, not a note for later.

## The takeaway

A QAL2 isn't a one-off certificate; it's a calibration that's only true under the conditions it was made. Repairs and upgrades, fuel switches, process changes, a failed AST, or drifting out of the valid range each break that link — and each starts a three-month clock to re-establish it. The operators who stay compliant are the ones who recognise a trigger *before* the work happens and book the re-test in step with it.

**Planning a repair, fuel switch or process change and not sure if it triggers a new QAL2?** [Talk to us]({{ '/' | relative_url }}#contact) — we help facilities across Malaysia time their re-tests correctly, using the DOE CEMS Guidelines we helped write.

<div class="related">
  <p class="label">Related insights</p>
  <ul>
    <li><a href="{{ '/insights/qal2-calibration-variability-test-cems/' | relative_url }}">QAL2 and the Calibration & Variability Test: certifying your CEMS after install</a></li>
    <li><a href="{{ '/insights/en-14181-explained-cems-quality-assurance/' | relative_url }}">EN 14181 explained: the standard that keeps your CEMS data trustworthy</a></li>
    <li><a href="{{ '/insights/cems-quality-assurance-chain-qal1-qal2-qal3-ast/' | relative_url }}">The CEMS quality-assurance chain: QAL1 → QAL2 → QAL3 → AST</a></li>
  </ul>
</div>

---

*This article is general guidance, not legal advice. For obligations specific to your facility, refer to the current Environmental Quality (Clean Air) Regulations 2014, the EQA 1974, EN 14181, and the DOE CEMS Guidelines, or speak with us directly.*
