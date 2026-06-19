---
layout: post
title: "What 'compliant' actually means: the daily-average and 2× half-hourly rule"
date: 2026-06-19 02:00:00
description: "Part 1 of our Enforcing the Clean Air Regulations 2014 series: the precise two-part compliance test in Reg 17(3) — no daily average above the ELV, and no half-hourly average above twice the ELV — with a worked example."
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

## Why two thresholds?

The structure is deliberate. The **daily average** governs *sustained* performance — it stops a facility running persistently high. The **2× half-hourly** ceiling caps *short-term* behaviour — it tolerates brief, normal process variation but draws a hard line on spikes. Together they prevent both "always a bit over" and "occasionally way over."

## How the daily average is built — Reg 17(4)

The daily figure isn't measured directly; it's **derived**. Under Reg 17(4), for each calendar day the owner or occupier calculates the **daily mean value (relating to the daily operating time) from the half-hourly mean values.** In other words, half-hourly averages are the building blocks, and the daily average is computed from them.

That's why data quality at the half-hourly level matters so much for enforcement — if the underlying half-hours aren't *valid*, the daily figure built on them can't be relied on. (We cover exactly when a reading counts as valid in Part 2 of this series.)

## What counts as an "excess emission"

An **excess emission** is an **exceedance of the applicable ELV as shown by a valid measurement**, reported in the correct units and averaging period. The emphasis on *valid* is the point: enforcement stands on data that has passed the validity rules — not on raw, unqualified numbers. An exceedance also triggers specific notification duties (the 24-hour rule), which we'll cover in Part 3.

## The yardstick, for regulators

Assessing a year's data comes down to two passes:

- Check **every daily average** against the **ELV**; and
- Check **every half-hourly average** against **2× the ELV**.

A single valid exceedance of either threshold is non-compliance for that period — and the basis for the reporting and enforcement steps that follow.

**Operate a regulated facility and want to understand how your data will be assessed?** [Talk to us]({{ '/' | relative_url }}#contact) — we help operators read their numbers the way the regulator does, using the DOE CEMS Guidelines we helped write.

*Next in the series — Part 2: Valid averages and the 75% rule — when a reading counts, and when it doesn't.*

---

*This article is general guidance, not legal advice. For the precise legal position, refer to the Environmental Quality (Clean Air) Regulations 2014, the EQA 1974, and the DOE CEMS Guidelines.*
