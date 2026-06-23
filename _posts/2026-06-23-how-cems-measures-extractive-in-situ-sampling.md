---
layout: post
title: "How does a CEMS actually measure? Extractive vs in-situ — and what DOE accepts"
date: 2026-06-23 03:00:00
description: "Part 3 of our Buying a CEMS series: the two ways a CEMS gets a measurement — extractive (bring the gas to the analyser) and in-situ (put the analyser on the stack) — how your flue gas decides between them, and the two Malaysia-specific rules that quietly disqualify some products: no dilution sampling, and only double-pass in-situ path."
series: buying
part: 3
---

*Buying a CEMS — Part 3 of 5. A practical series for industry, drawn from the DOE CEMS Guidelines (Version 8, 2025), which we helped develop.*

In [Part 1]({{ '/insights/need-a-cems-clean-air-regulations-2014/' | relative_url }}) we covered whether your facility needs a CEMS, and in [Part 2]({{ '/insights/qal1-certification-mcert-tuv-doe-registered-cems/' | relative_url }}) how QAL1 certification proves the *model* is sound. But a certificate doesn't tell you whether a system suits *your* stack. That comes down to a more fundamental question buyers often skip: **how does the system actually get its measurement?**

There are only two answers — and in Malaysia, two quiet rules narrow the field further than most suppliers will volunteer.

## Two ways to get a measurement

Every CEMS belongs to one of two families, defined by **where the measurement happens** (CEMS Guidelines V8, §3.1):

- **Extractive** — a sample is drawn out of the duct, conditioned (impurities and usually water removed), and piped to an analyser sitting in a protected, climate-controlled shelter away from the stack.
- **In-situ** — the analyser is mounted *on* the stack and measures the gas where it flows, with no sample removed at all.

Neither is "better" in the abstract. Each trades off against the other, and the right choice is dictated by your flue-gas conditions — not by a brand preference or the lowest quote.

## The extractive family: hot-wet vs cold-dry

Extractive systems split by how they treat the sample on the way to the analyser. **Hot-wet** keeps the whole sampling line heated above the dew point and measures the gas in its wet state — nothing condenses, so water-soluble gases such as HCl or NH₃ survive the journey. **Cold-dry** does the opposite: a chiller or permeation drier strips the moisture out first, so the gas is measured cool and dry. Cold-dry is the most common route for the staple gases (CO, SO₂, NOₓ, O₂); hot-wet earns its keep where a chiller would otherwise wash a soluble target gas out with the condensate.

The trade-off is maintenance. An extractive system has the most maintainable components — probe, heated line, pump, filter, chiller or drier — which means more to keep in tune, but also parts that are relatively easy to repair on site.

## The in-situ family: point vs path

In-situ systems put the analyser at the stack and come in two geometries (§3.1.2):

- **Point (in-stack)** — the measurement is taken at a single point in the duct, much like a simple extractive probe.
- **Path (cross-stack)** — a transmitter sends a beam across the full width of the flue to a detector and back, averaging the concentration along that whole path.

Because there's no sampling train, an in-situ system can't alter the sample, has fewer parts, and responds fast. The catch is that the analyser lives in the stack's heat, moisture and vibration, so faults at stack height can be harder to reach and repair — and maintenance demands a higher level of training.

## Two rules that quietly disqualify products in Malaysia

This is where the international picture and the Malaysian rulebook diverge — and where a buyer can be sold something that simply won't be accepted:

**Dilution sampling is not allowed in Malaysia.** Dilution-extractive systems, which mix the sample with clean air at a fixed ratio, are common in some markets. The DOE Guidelines are explicit that they are "rarely and not allowed to be used in Malaysia" (§3.1.1.2). If a quotation offers a dilution probe, that's an immediate red flag.

**Only double-pass in-situ path is accepted.** An in-situ path analyser can be single-pass (beam crosses once) or double-pass (beam crosses, reflects off a mirror and returns). DOE accepts **only double-pass in-situ path CEMS** (§3.1.2). A single-pass path system, however well-built, doesn't meet the requirement.

Knowing these two rules before you read a single quote saves you from shortlisting equipment that can never be registered.

<figure class="fig lineage">
<p class="fig-title">The sampling methods DOE recognises</p>
<div class="lin-cols">
  <div class="lin-col en">
    <span class="lin-tier">Family A · Extractive</span>
    <span class="lin-code">Hot-Wet</span>
    <span class="lin-full">Sample drawn through a fully heated line and measured wet — no moisture removed.</span>
    <dl>
      <dt>Analyser sits</dt><dd>In a controlled shelter, away from the stack.</dd>
      <dt>Conditioning</dt><dd>Heated throughout, kept above dew point so nothing condenses.</dd>
      <dt>Best suited to</dt><dd>Water-soluble gases (HCl, NH₃) a chiller would strip out.</dd>
    </dl>
  </div>
  <div class="lin-col ms">
    <span class="lin-tier">Family A · Extractive</span>
    <span class="lin-code">Cold-Dry</span>
    <span class="lin-full">Sample drawn out, then dried by chiller or permeation drier before the analyser.</span>
    <dl>
      <dt>Analyser sits</dt><dd>In a controlled shelter, away from the stack.</dd>
      <dt>Conditioning</dt><dd>Moisture removed; gas measured cool and dry.</dd>
      <dt>Best suited to</dt><dd>The staple gases — CO, SO₂, NOₓ, O₂ — on a dry basis.</dd>
    </dl>
  </div>
  <div class="lin-col iso">
    <span class="lin-tier">Family B · In-situ</span>
    <span class="lin-code">In-situ</span>
    <span class="lin-full">Analyser mounted on the stack; gas measured in place, never extracted.</span>
    <dl>
      <dt>Analyser sits</dt><dd>On the duct — Point (one spot) or Path (beam across it).</dd>
      <dt>Conditioning</dt><dd>None — no sampling train to alter the sample.</dd>
      <dt>DOE rule</dt><dd>Only <strong>double-pass</strong> path is accepted; single-pass is not.</dd>
    </dl>
  </div>
</div>
<p class="fig-note">Dilution-extractive systems are a fourth approach used elsewhere — but they are <strong>not allowed in Malaysia</strong>.</p>
<figcaption>The CEM sampling methods DOE recognises (CEMS Guidelines V8, §3.1–3.2, Fig 3.5). Your flue-gas conditions decide which column you fall into.</figcaption>
</figure>

## Your flue gas chooses for you

The Guidelines list the physical characteristics of the gas stream that drive analyser selection (§3.3.4). In practice these are the questions that settle the extractive-vs-in-situ decision for you:

- **Moisture content** — high or variable moisture often points to hot-wet extractive (or careful drying), and is decisive for wet particulate monitoring. Water-vapour content itself is determined per BS EN 14790, by process data, or by the plant operator.
- **Particulate load** — heavy, sticky or wet particulate can foul an in-situ optic or an extractive filter, and shapes the filtering design and PM analyser configuration.
- **Temperature and pressure** — set the materials of construction and how the system mounts to the duct.
- **Corrosive components** — the presence of something like HCl narrows the materials and methods that will survive.
- **Your abatement equipment** — the type and proximity of your air-pollution-control system, and the resulting clean-stack concentrations, feed directly into the choice (§3.3.3).

Separately, the *pollutant* you're measuring narrows the **analyser technique** — NDIR for CO/SO₂/NOₓ, chemiluminescence for NOₓ, zirconia or paramagnetic cells for O₂, optical path methods like DOAS or FTIR across the stack, and so on (Guidelines V8, Table 3.2). Certification matters here too: a QAL1-certified analyser is certified *with* a specific sampling-system type, so the analyser and the sampling method aren't independent choices — they come as a matched pair.

## You have to justify the choice to DOE

One point buyers miss: the sampling system isn't a free pick. Under §3.2, the **applicant must justify to DOE which sampling system is best suited** to their application — installed, operated and maintained accordingly. That justification is a design argument grounded in exactly the gas characteristics above, and it's submitted as part of your application through the **[DOE System for CEMS]({{ '/services/doe-iremote-integration/' | relative_url }})**. A competent DOE-registered consultant builds that case with you, rather than leaving you to defend a box someone sold you. We unpack siting, ports and the rest of the physical install in a later part of this series.

## A buyer's sampling-system checklist

Before you accept a proposed configuration, you should be able to tick all of these:

- ✅ The system is **extractive or in-situ by deliberate choice**, matched to your moisture, particulate, temperature and corrosives — not by default.
- ✅ If in-situ path, it is **double-pass** (single-pass is not DOE-accepted).
- ✅ It is **not a dilution system** (not allowed in Malaysia).
- ✅ The **analyser technique suits each pollutant** on your monitoring list.
- ✅ The sampling method matches the type stated on the **[QAL1 certificate]({{ '/insights/qal1-certification-mcert-tuv-doe-registered-cems/' | relative_url }})** for that analyser.
- ✅ There's a written **justification ready for DOE** explaining why this configuration fits your stack.

Get the sampling architecture right and the rest of the project — installation, QAL2, day-to-day operation — has a sound foundation. Get it wrong and no amount of good maintenance will rescue a system that was never suited to your gas.

**Reviewing a CEMS proposal and unsure the sampling method fits your stack?** [Talk to us]({{ '/' | relative_url }}#contact) — matching the system to the gas is exactly the judgement we make every day, using the same DOE CEMS Guidelines we helped write.

<div class="related">
  <p class="label">Related insights</p>
  <ul>
    <li><a href="{{ '/insights/cems-quality-assurance-chain-qal1-qal2-qal3-ast/' | relative_url }}">The CEMS quality-assurance chain: QAL1 → QAL2 → QAL3 → AST</a></li>
    <li><a href="{{ '/insights/en-14181-explained-cems-quality-assurance/' | relative_url }}">EN 14181 explained: the standard that keeps your CEMS data trustworthy</a></li>
    <li><a href="{{ '/insights/why-cems-needs-manual-stack-tests-srm/' | relative_url }}">Why a continuous monitor still needs manual stack tests</a></li>
  </ul>
</div>

---

*This article is general guidance, not legal advice. For obligations specific to your facility, refer to the current Environmental Quality (Clean Air) Regulations 2014, the EQA 1974, and the DOE CEMS Guidelines, or speak with us directly.*
