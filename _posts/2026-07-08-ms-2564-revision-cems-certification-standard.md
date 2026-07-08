---
layout: post
title: "The MS 2564 revision: why Malaysia's CEMS certification standard is becoming MS 2564-1"
full_title: "The MS 2564 Revision: Toward MS 2564-1 | Mesra"
date: 2026-07-08 00:30:00
description: "MS 2564, Malaysia's CEMS performance-certification standard, is under revision and set to be renamed MS 2564-1. What it covers today, why it's changing, and the direction it's heading."
series: watch
---

*A standard for industry, regulators and equipment buyers, drawn from MS 2564:2014 and the standards-committee work behind its revision.*

We've written before about [MS 1596]({{ '/insights/ms-1596-iso-9096-en-13284-particulate-standards/' | relative_url }}) — Malaysia's stack-test standard. There's a second Malaysian Standard behind CEMS compliance, and it's also under revision: **MS 2564**. Same working group, same moment for a why-and-direction piece — and the same disclosure line applies:

> **Status — July 2026:** MS 2564 is under revision. This article explains what the current 2014 edition covers, why it's being revised, and the direction that's already visible from its own text and from the published international standards it points to. It does not disclose draft content or pre-empt the committee. The specifics will follow here once the Department of Standards Malaysia (JSM) publishes the new edition.

## MS 1596 measures the stack. MS 2564 proves the instrument.

It's easy to conflate the two, so it's worth being precise. [MS 1596]({{ '/insights/ms-1596-iso-9096-en-13284-particulate-standards/' | relative_url }}) is the **Standard Reference Method (SRM)** — the manual stack test a [QAL2]({{ '/insights/qal2-calibration-variability-test-cems/' | relative_url }}) checks your CEMS against. **MS 2564** sits earlier in the chain: it's Malaysia's standard for **performance criteria and test procedures for continuous emission monitoring systems** — the requirements a CEMS *design* has to satisfy, and how a certification body tests it, before it ever reaches a Malaysian stack. In the language of [EN 14181]({{ '/insights/en-14181-explained-cems-quality-assurance/' | relative_url }}), MS 2564 sits behind [QAL1]({{ '/insights/qal1-certification-mcert-tuv-doe-registered-cems/' | relative_url }}) — the certification stage, owned by the manufacturer, that happens before purchase.

## What MS 2564 covers today

The current edition, **MS 2564:2014**, was developed — like MS 1596's revision — by the **Working Group on Stationary Source Emissions**, under the Industry Standards Committee on Environmental Management. Its scope is broad: performance criteria, test procedures and general requirements for CEMS. The standard's own list of covered determinands — "including, but not restricted to" — runs to SO₂, NOₓ, CO and CO₂, HCl, HF, CH₄, mercury, VOCs (as TOC), O₂, water vapour, flow rate, and particulate matter, across incineration, combustion, solvent-using and gas-turbine processes.

Certification under MS 2564 runs in three phases:

- **Laboratory testing** — performance characteristics measured under highly controlled conditions: linearity, cross-sensitivity, response time, detection limit, and more.
- **Field testing** — at least three months, on a process representative of the intended application.
- **Surveillance** — an ongoing audit of the manufacturer's production and design-control processes, so a certified model doesn't quietly degrade after certification.

One part of MS 2564 deserves more attention than it usually gets, because it isn't reflected anywhere else on this site yet: **particulate monitors aren't all held to the same standard.**

<figure class="fig report">
<p class="fig-title">MS 2564's three classes of particulate monitor</p>
<div class="rep-rows">
  <div class="rep-row hl">
    <span class="rep-k">1</span>
    <span class="rep-body"><span class="rep-name">Class 1</span><span class="rep-desc">Measures emissions in mg/m³. Meets EN 14181's QAL1 and QAL3 requirements. Mandatory for large combustion plant and incineration; may be used elsewhere too. MS 2564 covers only Class 1 requirements.</span></span>
  </div>
  <div class="rep-row">
    <span class="rep-k">2</span>
    <span class="rep-body"><span class="rep-name">Class 2</span><span class="rep-desc">"Filter dust monitors" — also measure in mg/m³, but for installations outside large combustion and incineration where emissions normally run below 50% of the ELV. Used to confirm a process is under control, not for compliance reporting.</span></span>
  </div>
  <div class="rep-row">
    <span class="rep-k">3</span>
    <span class="rep-body"><span class="rep-name">Class 3</span><span class="rep-desc">Filter-leakage monitors. Alarm on a change in dust-arrestment performance but don't report a concentration in mg/m³ at all.</span></span>
  </div>
</div>
<figcaption>MS 2564:2014, Introduction (0.1) and Annex G. Only Class 1 monitors are required to meet QAL3 under EN 14181; Classes 2 and 3 just need a way to check their own stability.</figcaption>
</figure>

The practical takeaway: if your facility falls under large combustion plant or incineration rules, "a dust monitor" isn't enough — you need a **Class 1** instrument, held to the full QAL1/QAL3 bar. That's also the standard buying a MCERTS- or TÜV-certified analyser already gets you, which is why this classification rarely surfaces as a buying decision in practice — but it's the reasoning underneath it.

## Where MS 2564 already points internationally

Here's the detail that sets up the revision, and it's already visible in the 2014 text: MS 2564 was never a standalone Malaysian invention. Its own normative references list **EN 15267-2** and **EN 15267-3** — the European certification series for automated measuring systems — alongside **MS ISO 14956**, the Malaysian adoption of the ISO standard for evaluating whether a measurement method meets a required uncertainty. The standard's Foreword is explicit that certification itself runs on **EN 15267-1**, and that test laboratories need accredited procedures complying with **EN 15267-3** and **MS ISO/IEC 17025**.

Because those references are undated in the 2014 text — under JSM's own drafting convention, an undated reference means "the latest edition applies" — MS 2564 has, in a sense, always been tracking whatever the current EN 15267 and ISO 14956 editions say. The revision's job is largely to make that tracking explicit again for the editions now in force.

<figure class="fig lineage">
<p class="fig-title">Where the revision is heading</p>
<div class="lin-cols">
  <div class="lin-col ms">
    <span class="lin-tier">Today</span>
    <span class="lin-code">MS 2564:2014</span>
    <span class="lin-full">Malaysia's current CEMS performance/certification standard.</span>
    <dl>
      <dt>References</dt><dd>EN 15267-1/-2/-3, MS ISO 14956 (undated).</dd>
      <dt>Structure</dt><dd>One document, all determinands and both lab + field testing.</dd>
      <dt>Status</dt><dd>Being revised.</dd>
    </dl>
  </div>
  <div class="lin-col iso">
    <span class="lin-tier">Aligning to</span>
    <span class="lin-code">EN 15267-3:2023 · ISO 14956:2002</span>
    <span class="lin-full">The certification test-procedure standard and the measurement-uncertainty evaluation standard MS 2564 already references.</span>
    <dl>
      <dt>EN 15267-3</dt><dd>Performance criteria and test procedures for AMS certification.</dd>
      <dt>ISO 14956</dt><dd>Evaluating a method against a required measurement uncertainty.</dd>
      <dt>Both</dt><dd>Already named in MS 2564:2014's own references.</dd>
    </dl>
  </div>
  <div class="lin-col ms">
    <span class="lin-tier">After revision</span>
    <span class="lin-code">MS 2564-1</span>
    <span class="lin-full">A renamed, re-anchored edition — the "-1" signalling a part-numbered structure, as the EN 15267 series it builds on already has.</span>
    <dl>
      <dt>Expected</dt><dd>Formal alignment to the editions above.</dd>
      <dt>Naming</dt><dd>MS 2564-1 (from a single, unnumbered document).</dd>
      <dt>Specifics</dt><dd>Confirmed on JSM publication.</dd>
    </dl>
  </div>
</div>
<p class="fig-note">Direction of travel, drawn from MS 2564's own referencing structure and the working group's stated intent — not the content of any draft.</p>
<figcaption>The exact content of the new edition is set by the committee and confirmed at publication.</figcaption>
</figure>

The rename itself is a useful signal on its own. Moving from an unnumbered "MS 2564" to a part-numbered "**MS 2564-1**" mirrors the shape of the EN 15267 series it already leans on (Parts 1, 2 and 3) — suggesting the Malaysian standard is being structured to grow the same way, rather than staying a single monolithic document.

## How a Malaysian Standard actually gets made

We covered this in detail when [MS 1596's revision]({{ '/insights/ms-1596-revision-low-dust-alignment/' | relative_url }}) went through the same process, so the short version here: JSM develops a Malaysian Standard through an eight-stage consensus process — proposal, committee drafting, public comment, acceptance, verification, and finally the Minister's declaration that publishes it. A draft in committee is exactly that, a draft; its content can still move at public comment. The same working group is doing this work for MS 2564 as for MS 1596, on the same timeline logic.

## Why it matters to you

If you're buying a CEMS today, the practical guidance doesn't wait for the revision. **A current MCERTS or TÜV QAL1 certificate — which is what we already tell buyers to demand in [QAL1 and certification]({{ '/insights/qal1-certification-mcert-tuv-doe-registered-cems/' | relative_url }})** — is issued under schemes built on the same EN 15267 series MS 2564 already references. Buying to that bar means you're already buying to where MS 2564 is heading, not just where it's been. The revision mostly formalises, at the national level, what a properly certified instrument already satisfies internationally.

For testers and regulators, a renamed, re-anchored MS 2564-1 closes the same kind of gap MS 1596's revision closes for stack testing: less daylight between the Malaysian standard and the international editions it was always meant to track.

**Choosing equipment and want the certification checked properly before you commit?** [Talk to us]({{ '/' | relative_url }}#contact) — our [CEMS installation service]({{ '/services/cems-installation/' | relative_url }}) verifies QAL1 certification and instrument fit before anything goes on your stack, and we sit on the working group revising both MS 1596 and MS 2564.

<div class="related">
  <p class="label">Related insights</p>
  <ul>
    <li><a href="{{ '/insights/qal1-certification-mcert-tuv-doe-registered-cems/' | relative_url }}">QAL1 and certification: what "DOE-registered CEMS" and MCERT/TÜV actually mean</a></li>
    <li><a href="{{ '/insights/cems-quality-assurance-chain-qal1-qal2-qal3-ast/' | relative_url }}">The CEMS quality-assurance chain: QAL1 → QAL2 → QAL3 → AST</a></li>
    <li><a href="{{ '/insights/ms-1596-iso-9096-en-13284-particulate-standards/' | relative_url }}">MS 1596, ISO 9096 and EN 13284: how Malaysia's stack-test standard fits the international picture</a></li>
    <li><a href="{{ '/insights/ms-1596-revision-low-dust-alignment/' | relative_url }}">The MS 1596 revision: why Malaysia's dust standard is being rewritten — and where it's heading</a></li>
    <li><a href="{{ '/insights/en-14181-explained-cems-quality-assurance/' | relative_url }}">EN 14181 explained: the standard that keeps your CEMS data trustworthy</a></li>
  </ul>
</div>

---

*This article is general guidance, not legal advice, and discusses a standard that is under revision; nothing here represents the final content of the new edition. For obligations specific to your facility, refer to the current Environmental Quality (Clean Air) Regulations 2014, the EQA 1974, the DOE CEMS Guidelines, and the current edition of MS 2564, or speak with us directly.*
