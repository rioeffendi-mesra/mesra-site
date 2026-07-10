---
layout: post
title: "Why CO isn't monitored the same way as TPM and opacity at your mill"
full_title: "Palm Oil Mill CEMS: Why CO Stays Periodic | Mesra"
date: 2026-07-06 03:00:00
last_modified_at: 2026-07-10
description: "Under the Second Schedule of CAR 2014, dust and opacity can escalate to continuous monitoring — but carbon monoxide at a palm oil mill's biomass boiler stays periodic regardless of load. Here's why, and where the line actually sits."
series: palm-oil-mills
part: 3
---

*CEMS for palm oil mills — Part 3 of 4. A focused series for palm oil mill operators and EHS managers, drawn from the Clean Air Regulations 2014 and the DOE CEMS Guidelines (Version 8, 2025), which we helped develop.*

[Parts 1]({{ '/insights/palm-oil-mill-cems-dust-load-threshold/' | relative_url }}) and [2]({{ '/insights/palm-oil-mill-periodic-testing-tiers-dust-load/' | relative_url }}) of this series were all about dust: the 2.5 kg/hour line that decides whether your mill needs a CEMS, and the periodic tiers below it. But the same Second Schedule table that sets your dust rules also sets a limit for carbon monoxide — and CO doesn't follow the same escalating logic at all. This part is about that difference, and why it exists.

## What the Second Schedule actually says about CO

Recall the table from Part 1 — solid fuel, fuel burning equipment not covered by the First Schedule. Total particulate matter carries a limit of 150 mg/m³ and a monitoring frequency that climbs from once a year to continuous as your dust load rises through 2.5 kg/hour. Carbon monoxide sits in the same table, but reads very differently:

> **Carbon monoxide (CO) — 1,000 mg/m³ — Periodic.**

No tiers. No load figure that pushes it toward continuous. Under this part of the Second Schedule, CO is periodic, full stop, regardless of how much your boiler emits.

That's a real structural difference, not an oversight. CAR 2014 uses continuous monitoring selectively — dust and opacity earn it once you cross a threshold, but for this category of fuel-burning equipment, CO simply isn't written as an escalating parameter the way dust is.

## This isn't a universal rule about CO — it's specific to your category

It's worth being precise here, because CO is treated very differently elsewhere in CAR 2014. Large boilers over 10 MWe (a First Schedule category) have CO listed as **continuous**, at limits ranging from 50–200 mg/m³ depending on fuel. Combustion turbines over 10 MWe also carry continuous CO limits. Waste incinerators carry a continuous CO limit too.

None of those categories are the one a typical palm oil mill boiler falls into — and even within the First Schedule, treatment isn't uniform: smaller generator sets used for combined heat and power (3 MWe and above, below the 10 MWe boiler/turbine cutoffs) have CO listed as periodic too, not continuous. As Part 1 covered, most mill boilers aren't captured by the First Schedule's capacity-based categories at all — they're judged under the general "fuel burning equipment not covered by the First Schedule" table, and it's specifically *that* table where CO stays periodic regardless of load. The rule isn't "CO is always periodic in Malaysia," nor "CO is always continuous above some size" — it's category-specific, and the category your mill actually sits in keeps CO periodic.

## This is the federal position — and it's the one that governs

CAR 2014 is subsidiary legislation made under the **Environmental Quality Act 1974**, a federal Act of Parliament, under powers the Act gives to the Minister. The Act itself vests administration in a single, nationally appointed **Director General of Environmental Quality** (EQA 1974, s.3) — the office responsible for administering the Act and its regulations, and specifically for controlling emissions through licences and for specifying sampling and testing methods. Every "as determined by the Director General" clause running through CAR 2014 — and we've met several in this series — traces back to that one federal office.

State and branch DOE offices carry out enforcement and issue premise-level licences under **delegation from the Director General (EQA 1974, s.49)** — the Act lets the DG delegate licensing and enforcement powers to public officers, government departments or local authorities, but delegation doesn't create an independent rulebook. The DG retains overall responsibility for administering the Act, and can revoke or vary any delegation at any time. So the position above — dust and opacity can escalate to continuous monitoring past 2.5 kg/hour, CO stays periodic under this table regardless of load — is the federal position set by the Second Schedule and the DOE CEMS Guidelines, and it's the one your mill should work from.

If a locally issued licence for your premises ever appears to state something different, the sensible response is to clarify it directly with DOE against the Act, the Regulations and the Guidelines — not to treat the local document as a standing alternative to them. We look at that relationship more closely in the next part of this series: where your obligations actually trace back to, and why the federal framework is what a licence should be read against, not instead of.

## If CO ever does need continuous monitoring, it's a different instrument

There's a practical reason this distinction matters beyond paperwork. If your mill crosses the 2.5 kg/hour line and installs a CEMS for dust and opacity, that doesn't give you a CO channel for free. The gravimetric method behind Malaysia's dust testing — [MS 1596 and its international relatives, ISO 9096 and EN 13284]({{ '/insights/ms-1596-iso-9096-en-13284-particulate-standards/' | relative_url }}) — is a dust-only method. It doesn't measure CO at all; the only carbon-related figure in that family is a CO₂ correction factor used to normalise the dust result, not a CO reading.

Continuous CO measurement, where it's required, runs on a completely different principle: non-dispersive infrared (NDIR) spectrometry, referenced internationally as **EN 15058**. It's a different analyser, a different reference method, and a different QAL2 exercise from your dust channel — so if a future licence condition or DOE directive ever brings continuous CO into scope for your mill, budget for it as a separate instrument, not an add-on to your existing dust CEMS.

## What this means for your mill

Two things to take from this: your dust load is what drives your monitoring regime toward continuous, not your CO reading, so don't expect a high CO result to change your testing frequency the way a rising dust number would. And treat the Second Schedule and the DOE CEMS Guidelines as your reference point — the next part of this series looks at why that federal framework, rather than any single locally issued document, is what your obligations ultimately rest on.

**Not sure how the federal position applies to your mill's specific pollutants?** [Talk to us]({{ '/' | relative_url }}#contact) — we help palm oil mills work through the Second Schedule and the DOE CEMS Guidelines against their actual operating conditions.

<div class="related">
  <p class="label">Related insights</p>
  <ul>
    <li><a href="{{ '/insights/palm-oil-mill-cems-dust-load-threshold/' | relative_url }}">Does your palm oil mill need a CEMS? The 2.5 kg/hour dust-load test</a></li>
    <li><a href="{{ '/insights/palm-oil-mill-periodic-testing-tiers-dust-load/' | relative_url }}">Below 2.5 kg/hour: the periodic tiers in practice, and what moves your number</a></li>
    <li><a href="{{ '/insights/ms-1596-iso-9096-en-13284-particulate-standards/' | relative_url }}">MS 1596, ISO 9096 and EN 13284: how Malaysia's stack-test standard fits the international picture</a></li>
    <li><a href="{{ '/insights/en-14181-explained-cems-quality-assurance/' | relative_url }}">EN 14181 explained: the standard that keeps your CEMS data trustworthy</a></li>
  </ul>
</div>

---

*This article is general guidance, not legal advice, based on the Environmental Quality Act 1974, the Clean Air Regulations 2014 made under it, and the DOE CEMS Guidelines. For obligations specific to your mill, refer to those documents directly or speak with us — and raise any apparent inconsistency in a locally issued document with DOE for clarification against the federal framework.*
