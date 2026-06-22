---
layout: post
title: "What 'compliant' actually means: the daily-average and 2× half-hourly rule"
date: 2026-06-19 02:00:00
description: "Part 1 of our Enforcing the Clean Air Regulations 2014 series: the precise two-part compliance test in Reg 17(3) — no daily average above the ELV, and no half-hourly average above twice the ELV — with a worked example."
series: enforcing
part: 1
---

*Enforcing the Clean Air Regulations 2014 — Part 1 of 5. A series for regulators and compliance staff, drawn from the DOE CEMS Guidelines (Version 8, 2025), which we helped develop.*

"Is this facility compliant?" sounds like a yes/no question, but the answer rests on a precise test that's easy to half-remember and get wrong. Under the **Environmental Quality (Clean Air) Regulations 2014 (CAR 2014)**, continuous-monitoring compliance is a **two-part** rule — and *both* parts must hold.

## The rule: Regulation 17(3)

For continuous emission monitoring, the Emission Limit Values (ELVs) are complied with if, over the operating period **within any one calendar year**:

1. **no daily average exceeds the ELV**, *and*
2. **no half-hourly average exceeds two (2) times the ELV.**

Two thresholds, two averaging periods, one verdict. Pass both and the facility is compliant for that period; breach either — even once — and it is not.

## A worked example

Say a facility's **daily ELV for total particulate matter is 150 mg/m³.** Then:

- The **daily limit** is **150 mg/m³** — every daily average must stay at or below it.
- The **half-hourly limit** is **2 × 150 = 300 mg/m³** — no half-hour average may exceed it.

So:

- A half-hour averaging **280 mg/m³** is *within* the half-hourly limit (≤ 300). On its own, not an exceedance.
- A day averaging **160 mg/m³** is an **exceedance** of the daily ELV — non-compliant, even though no single half-hour may have looked dramatic.
- A half-hour spiking to **320 mg/m³** breaches the 2× half-hourly limit — an exceedance, regardless of where the daily average lands.

<figure class="fig">
<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="r17-t r17-d" font-family="'Helvetica Neue',Helvetica,Arial,sans-serif">
<title id="r17-t">Regulation 17(3): the two-part compliance test</title>
<desc id="r17-d">A chart of half-hourly averages across one day. The daily ELV of 150 and the half-hourly ceiling of twice the ELV (300) are shown as limit lines. A normal half-hour at 280 stays below the ceiling, while a spike to 320 breaches it.</desc>
<rect x="72" y="196" width="576" height="104" fill="var(--green-tint)"/>
<rect x="72" y="58" width="576" height="35" fill="#FBE9E7"/>
<line x1="72" y1="93" x2="648" y2="93" stroke="var(--grey)" stroke-width="1.5" stroke-dasharray="6 4"/>
<line x1="72" y1="196" x2="648" y2="196" stroke="var(--green-d)" stroke-width="1.5" stroke-dasharray="6 4"/>
<line x1="72" y1="58" x2="72" y2="300" stroke="var(--grey)" stroke-width="1"/>
<line x1="72" y1="300" x2="648" y2="300" stroke="var(--grey)" stroke-width="1"/>
<text x="66" y="97" text-anchor="end" font-size="10.5" fill="var(--muted)">300</text>
<text x="66" y="200" text-anchor="end" font-size="10.5" fill="var(--muted)">150</text>
<text x="66" y="304" text-anchor="end" font-size="10.5" fill="var(--muted)">0</text>
<text x="360" y="332" text-anchor="middle" font-size="11" fill="var(--muted)">Half-hourly averages across one operating day</text>
<text x="28" y="182" text-anchor="middle" font-size="11" fill="var(--muted)" transform="rotate(-90 28 182)">mg/m³</text>
<text x="644" y="88" text-anchor="end" font-size="10.5" fill="var(--grey)">Half-hourly ceiling = 300 (2× ELV)</text>
<text x="644" y="191" text-anchor="end" font-size="10.5" fill="var(--green-d)">Daily ELV = 150</text>
<text x="80" y="78" text-anchor="start" font-size="10.5" fill="#C0392B">Above 2× ELV — exceedance</text>
<text x="80" y="290" text-anchor="start" font-size="10.5" fill="var(--green-d)">At/below ELV — daily-average compliant zone</text>
<polyline points="100,155 147,134 194,144 241,120 288,106 335,127 382,138 429,117 476,124 523,79 570,134 617,141" fill="none" stroke="var(--green-d)" stroke-width="2.5" stroke-linejoin="round"/>
<circle cx="100" cy="155" r="2.4" fill="var(--green-d)"/><circle cx="147" cy="134" r="2.4" fill="var(--green-d)"/><circle cx="194" cy="144" r="2.4" fill="var(--green-d)"/><circle cx="241" cy="120" r="2.4" fill="var(--green-d)"/><circle cx="335" cy="127" r="2.4" fill="var(--green-d)"/><circle cx="382" cy="138" r="2.4" fill="var(--green-d)"/><circle cx="429" cy="117" r="2.4" fill="var(--green-d)"/><circle cx="476" cy="124" r="2.4" fill="var(--green-d)"/><circle cx="570" cy="134" r="2.4" fill="var(--green-d)"/><circle cx="617" cy="141" r="2.4" fill="var(--green-d)"/>
<circle cx="288" cy="106" r="4.5" fill="var(--green)" stroke="#fff" stroke-width="1.5"/>
<text x="288" y="124" text-anchor="middle" font-size="11" font-weight="600" fill="var(--green-d)">280 ✓</text>
<circle cx="523" cy="79" r="4.5" fill="#C0392B" stroke="#fff" stroke-width="1.5"/>
<text x="523" y="70" text-anchor="middle" font-size="11" font-weight="600" fill="#C0392B">320 ✗ breach</text>
<text x="340" y="28" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)">Regulation 17(3): two thresholds, one verdict</text>
</svg>
<figcaption>Half-hourly averages may sit between the ELV and the 2× ceiling — but a day averaging 160 mg/m³ still fails the 150 daily ELV. Both parts must hold.</figcaption>
</figure>

## Why two thresholds?

The structure is deliberate. The **daily average** governs *sustained* performance — it stops a facility running persistently high. The **2× half-hourly** ceiling caps *short-term* behaviour — it tolerates brief, normal process variation but draws a hard line on spikes. Together they prevent both "always a bit over" and "occasionally way over."

## How the daily average is built — Reg 17(4)

The daily figure isn't measured directly; it's **derived**. Under Reg 17(4), for each calendar day the owner or occupier calculates the **daily mean value (relating to the daily operating time) from the half-hourly mean values.** In other words, half-hourly averages are the building blocks, and the daily average is computed from them.

That's why data quality at the half-hourly level matters so much for enforcement — if the underlying half-hours aren't *valid*, the daily figure built on them can't be relied on. (We cover exactly when a reading counts as valid in [Part 2]({{ '/insights/cems-valid-averages-75-percent-rule/' | relative_url }}) of this series.)

## What counts as an "excess emission"

An **excess emission** is an **exceedance of the applicable ELV as shown by a valid measurement**, reported in the correct units and averaging period. The emphasis on *valid* is the point: enforcement stands on data that has passed the validity rules — not on raw, unqualified numbers. An exceedance also triggers specific notification duties (the 24-hour rule), which we'll cover in Part 3.

## The yardstick, for regulators

Assessing a year's data comes down to two passes:

- Check **every daily average** against the **ELV**; and
- Check **every half-hourly average** against **2× the ELV**.

A single valid exceedance of either threshold is non-compliance for that period — and the basis for the reporting and enforcement steps that follow.

**Operate a regulated facility and want to understand how your data will be assessed?** [Talk to us]({{ '/' | relative_url }}#contact) — we help operators read their numbers the way the regulator does, using the DOE CEMS Guidelines we helped write.

<div class="related">
  <p class="label">Related insights</p>
  <ul>
    <li><a href="{{ '/insights/clean-air-regulations-2014-cems/' | relative_url }}">What the Clean Air Regulations 2014 mean for your CEMS</a></li>
    <li><a href="{{ '/insights/cems-quality-assurance-chain-qal1-qal2-qal3-ast/' | relative_url }}">The CEMS quality-assurance chain: why your data is valid in the first place</a></li>
    <li><a href="{{ '/insights/need-a-cems-clean-air-regulations-2014/' | relative_url }}">Do you even need a CEMS? What the law requires before you buy</a></li>
  </ul>
</div>

---

*This article is general guidance, not legal advice. For the precise legal position, refer to the Environmental Quality (Clean Air) Regulations 2014, the EQA 1974, and the DOE CEMS Guidelines.*
