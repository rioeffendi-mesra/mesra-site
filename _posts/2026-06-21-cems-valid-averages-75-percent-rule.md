---
layout: post
title: "Valid averages and the 75% rule: when a reading counts, and when it doesn't"
date: 2026-06-21 03:00:00
description: "Part 2 of our Enforcing the Clean Air Regulations 2014 series: how a valid average is built from the minute up — the 45-second minute, the 22-of-30 half-hour, and the daily mean — and why invalid data is excluded, not counted as zero."
series: enforcing
part: 2
---

*Enforcing the Clean Air Regulations 2014 — Part 2 of 5. A series for regulators and compliance staff, drawn from the DOE CEMS Guidelines (Version 8, 2025), which we helped develop.*

In [Part 1]({{ '/insights/cems-compliance-daily-half-hourly-rule-reg-17-3/' | relative_url }}) we set out the two-part compliance test: no daily average above the ELV, and no half-hourly average above twice the ELV. But that test only means something if the averages going into it are *valid*. An exceedance, the guidelines are careful to say, is an exceedance "as indicated by **valid measurement**." So before you can ask "did this average breach the limit?", you have to ask a prior question: **does this average even count?**

That question is answered from the bottom up.

## Averages are built, not measured

A CEMS doesn't record a "half-hour" directly. It records fast, then rolls the data up through three tiers — and each tier has its own validity gate:

<figure class="fig flow">
<p class="fig-title">How a valid average is built · minute → half-hour → day</p>
<div class="flow-row">
<div class="flow-step"><span class="fs-name">1-minute average</span><span class="fs-q">valid data for ≥ 45 sec</span></div>
<div class="flow-arrow" aria-hidden="true">→</div>
<div class="flow-step"><span class="fs-name">Half-hour average</span><span class="fs-q">≥ 22 of 30 valid minutes</span></div>
<div class="flow-arrow" aria-hidden="true">→</div>
<div class="flow-step"><span class="fs-name">Daily average</span><span class="fs-q">from valid half-hours, over operating time</span></div>
<div class="flow-arrow" aria-hidden="true">→</div>
<div class="flow-step muted"><span class="fs-name">Compliance test</span><span class="fs-q">vs ELV / 2× ELV</span></div>
</div>
<p class="fig-note">● A tier only counts if the tier below it cleared its 75% gate</p>
<figcaption>Validity flows upward. A half-hour built on too few valid minutes is itself invalid — and never reaches the compliance test.</figcaption>
</figure>

## Tier 1 — the valid one-minute average

The smallest building block of a half-hour is the **one-minute average**. Under §2.3.2 of the guidelines, a one-minute average is valid only if it contains **valid data readings representing any 45 seconds** of the preceding minute.

Forty-five seconds out of sixty is **75%**. If the analyser was warming up, mid-calibration, or simply not returning good data for more than a quarter of that minute, the minute doesn't qualify — and it can't be used as a building block above it.

## Tier 2 — the valid half-hour, and the 22-of-30 rule

Half-hourly averages are the unit the law actually judges (alongside the daily figure), so this is the tier that matters most for enforcement. The sub-average period for a half-hour is the one-minute average, and under §2.3.1:

> A valid half-hour average must contain **at least 22 sub-average data within the half-hour period (75%)**.

Thirty minutes, of which at least 22 must be valid one-minute averages. Twenty-two of thirty is, again, **75%**. Clear the bar and the half-hour stands as a number the regulator can act on. Fall short — 21 valid minutes or fewer — and the half-hour is **invalid**: it isn't a low reading, a zero, or a pass. It simply isn't a measurement.

<figure class="fig">
<svg viewBox="0 0 700 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="hh-t hh-d" font-family="'Helvetica Neue',Helvetica,Arial,sans-serif">
<title id="hh-t">What makes a half-hour valid</title>
<desc id="hh-d">Thirty cells representing the thirty one-minute averages in a half-hour, arranged in two rows of fifteen. Twenty-four are shaded as valid and six as invalid; because at least twenty-two are valid, the half-hour counts.</desc>
<text x="350" y="26" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)">A half-hour = thirty one-minute averages</text>
<text x="350" y="46" text-anchor="middle" font-size="11" fill="var(--muted)">at least 22 must be valid (75%) for the half-hour to count</text>
<g>
<rect x="70" y="72" width="36" height="40" rx="3" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="1.3"/>
<rect x="109" y="72" width="36" height="40" rx="3" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="1.3"/>
<rect x="148" y="72" width="36" height="40" rx="3" fill="#F0F0F0" stroke="var(--grey)" stroke-width="1.3"/>
<rect x="187" y="72" width="36" height="40" rx="3" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="1.3"/>
<rect x="226" y="72" width="36" height="40" rx="3" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="1.3"/>
<rect x="265" y="72" width="36" height="40" rx="3" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="1.3"/>
<rect x="304" y="72" width="36" height="40" rx="3" fill="#F0F0F0" stroke="var(--grey)" stroke-width="1.3"/>
<rect x="343" y="72" width="36" height="40" rx="3" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="1.3"/>
<rect x="382" y="72" width="36" height="40" rx="3" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="1.3"/>
<rect x="421" y="72" width="36" height="40" rx="3" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="1.3"/>
<rect x="460" y="72" width="36" height="40" rx="3" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="1.3"/>
<rect x="499" y="72" width="36" height="40" rx="3" fill="#F0F0F0" stroke="var(--grey)" stroke-width="1.3"/>
<rect x="538" y="72" width="36" height="40" rx="3" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="1.3"/>
<rect x="577" y="72" width="36" height="40" rx="3" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="1.3"/>
<rect x="616" y="72" width="36" height="40" rx="3" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="1.3"/>
<rect x="70" y="132" width="36" height="40" rx="3" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="1.3"/>
<rect x="109" y="132" width="36" height="40" rx="3" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="1.3"/>
<rect x="148" y="132" width="36" height="40" rx="3" fill="#F0F0F0" stroke="var(--grey)" stroke-width="1.3"/>
<rect x="187" y="132" width="36" height="40" rx="3" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="1.3"/>
<rect x="226" y="132" width="36" height="40" rx="3" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="1.3"/>
<rect x="265" y="132" width="36" height="40" rx="3" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="1.3"/>
<rect x="304" y="132" width="36" height="40" rx="3" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="1.3"/>
<rect x="343" y="132" width="36" height="40" rx="3" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="1.3"/>
<rect x="382" y="132" width="36" height="40" rx="3" fill="#F0F0F0" stroke="var(--grey)" stroke-width="1.3"/>
<rect x="421" y="132" width="36" height="40" rx="3" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="1.3"/>
<rect x="460" y="132" width="36" height="40" rx="3" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="1.3"/>
<rect x="499" y="132" width="36" height="40" rx="3" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="1.3"/>
<rect x="538" y="132" width="36" height="40" rx="3" fill="#F0F0F0" stroke="var(--grey)" stroke-width="1.3"/>
<rect x="577" y="132" width="36" height="40" rx="3" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="1.3"/>
<rect x="616" y="132" width="36" height="40" rx="3" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="1.3"/>
</g>
<g font-size="11" fill="var(--muted)">
<rect x="70" y="196" width="20" height="14" rx="2" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="1.2"/>
<text x="98" y="207" text-anchor="start">valid minute</text>
<rect x="200" y="196" width="20" height="14" rx="2" fill="#F0F0F0" stroke="var(--grey)" stroke-width="1.2"/>
<text x="228" y="207" text-anchor="start">invalid / missing</text>
</g>
<text x="640" y="207" text-anchor="end" font-size="13" font-weight="700" fill="var(--green-d)">24 / 30 valid → ✓ half-hour counts</text>
</svg>
<figcaption>Here 24 of 30 minutes are valid — above the 22 threshold — so the half-hour is valid. At 21 or fewer, the half-hour would be discarded as downtime, not scored as a reading.</figcaption>
</figure>

## Tier 3 — the daily average

The daily figure is **derived, not measured**. Under Regulation 17(4), for each calendar day the owner or occupier calculates the **daily mean value relating to the daily operating time, from the half-hourly mean values**. In other words, the day is the average of the valid half-hours across the hours the plant actually ran.

This is where validity does its quiet, decisive work. Invalid half-hours are **excluded** from the calculation as *downtime* — the guidelines define downtime as periods of operation yielding invalid or no data (calibration, maintenance, malfunction, audits, out-of-control periods). They are not folded in as zeros, which would artificially drag a daily average *down* and hide a genuinely high day. The daily mean is built only from the half-hours that actually count.

## A quick worked example

Why does *excluding* invalid half-hours matter so much more than it sounds? Take a facility with a daily ELV of **150 mg/m³** that runs a full day — 48 half-hours. Suppose a calibration and a short fault leave **10 half-hours invalid**, and the **38 valid half-hours average 140 mg/m³**.

Done correctly, the daily mean is built from the valid half-hours only: **140 mg/m³** — a day running uncomfortably close to its limit, exactly as it should appear.

Now imagine those 10 invalid half-hours were wrongly counted as zeros instead of excluded. The "daily average" becomes (38 × 140 + 10 × 0) ÷ 48 ≈ **111 mg/m³** — a comfortable-looking day that never happened. Zero-filling doesn't just blur the picture; it actively hides a facility operating near its ELV. That single modelling choice is the difference between catching a problem and missing it, which is why the guidelines treat invalid periods as *downtime to set aside*, not data to average in.

## Why this matters for enforcement

Three practical consequences follow, and they're worth holding onto when reviewing a year of data:

- **A breach must rest on a valid average.** A spike inside an *invalid* half-hour is not, by itself, a reportable exceedance — though it is a strong signal that something needs explaining.
- **Invalid data is a story, not a gap to ignore.** Persistent downtime can mean a CEMS that isn't being maintained, isn't holding [calibration]({{ '/insights/qal2-calibration-variability-test-cems/' | relative_url }}), or is being run out of its valid range. Low data availability is itself a compliance concern, even when the valid readings that remain look clean.
- **The 75% gates are deliberate.** They tolerate brief, normal interruptions while refusing to let a facility certify a half-hour — or a day — on too little real data.

That is the foundation the rest of enforcement stands on: a clear, mechanical rule for which numbers are real. With validity settled, the next question is what an operator must *do* the moment a valid exceedance — or a CEMS failure — occurs.

**Assessing CEMS data and want to read validity the way the guidelines intend?** [Talk to us]({{ '/' | relative_url }}#contact) — we work both sides of this, helping operators and regulators interpret the same DOE CEMS Guidelines we helped write.

<div class="related">
  <p class="label">Related insights</p>
  <ul>
    <li><a href="{{ '/insights/cems-quality-assurance-chain-qal1-qal2-qal3-ast/' | relative_url }}">The CEMS quality-assurance chain: why your data is valid in the first place</a></li>
    <li><a href="{{ '/insights/en-14181-explained-cems-quality-assurance/' | relative_url }}">EN 14181 explained: the standard that keeps your CEMS data trustworthy</a></li>
    <li><a href="{{ '/insights/clean-air-regulations-2014-cems/' | relative_url }}">What the Clean Air Regulations 2014 mean for your CEMS</a></li>
  </ul>
</div>

---

*This article is general guidance, not legal advice. For the precise legal position, refer to the Environmental Quality (Clean Air) Regulations 2014, the EQA 1974, and the DOE CEMS Guidelines.*
