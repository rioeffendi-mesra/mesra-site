---
layout: post
title: "The CEMS quality-assurance chain: QAL1 → QAL2 → QAL3 → AST, and why each exists"
date: 2026-06-19 02:10:00
description: "Part 1 of our Operating a Compliant CEMS series: the four-stage EN 14181 quality-assurance programme explained — what each stage proves, and who is responsible for it."
---

*Operating a compliant CEMS — Part 1 of 5. A practical series for industry, drawn from the DOE CEMS Guidelines (Version 8, 2025), which we helped develop.*

Buying a certified CEMS is the easy part. Keeping it producing data the regulator will accept — every hour, all year — is a continuous **quality-assurance programme**. Under the international **EN 14181** standard that Malaysia's guidelines follow, that programme has four stages. Each answers a different question, and each has a clearly assigned owner. Skip one and the whole chain of trust in your data breaks.

Here's the chain, in plain terms.

<figure class="fig">
<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="qac-t qac-d" font-family="'Helvetica Neue',Helvetica,Arial,sans-serif">
<title id="qac-t">The CEMS quality-assurance chain under EN 14181</title>
<desc id="qac-d">Four sequential stages — QAL1, QAL2, QAL3 and AST — each answering a different question and owned by a different party, with a functional test required before QAL2 and AST.</desc>
<defs><marker id="qac-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="var(--green-d)"/></marker></defs>
<text x="340" y="26" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)">The CEMS quality-assurance chain · EN 14181</text>
<line x1="152" y1="108" x2="184" y2="108" stroke="var(--green-d)" stroke-width="2.4" marker-end="url(#qac-ah)"/>
<line x1="324" y1="108" x2="356" y2="108" stroke="var(--green-d)" stroke-width="2.4" marker-end="url(#qac-ah)"/>
<line x1="496" y1="108" x2="528" y2="108" stroke="var(--green-d)" stroke-width="2.4" marker-end="url(#qac-ah)"/>
<circle cx="168" cy="108" r="3.4" fill="var(--green)"/><circle cx="512" cy="108" r="3.4" fill="var(--green)"/>
<g><rect x="12" y="56" width="140" height="104" rx="10" fill="none" stroke="var(--green)" stroke-width="2"/><rect x="12" y="56" width="140" height="5" rx="2" fill="var(--green)"/><text x="82" y="98" text-anchor="middle" font-size="21" font-weight="700" fill="var(--ink)">QAL1</text><text x="82" y="124" text-anchor="middle" font-size="13" fill="var(--body)">Right design?</text><text x="82" y="180" text-anchor="middle" font-size="11.5" fill="var(--muted)">Owner: Manufacturer</text></g>
<g><rect x="184" y="56" width="140" height="104" rx="10" fill="none" stroke="var(--green)" stroke-width="2"/><rect x="184" y="56" width="140" height="5" rx="2" fill="var(--green)"/><text x="254" y="98" text-anchor="middle" font-size="21" font-weight="700" fill="var(--ink)">QAL2</text><text x="254" y="124" text-anchor="middle" font-size="13" fill="var(--body)">Right on your stack?</text><text x="254" y="180" text-anchor="middle" font-size="11.5" fill="var(--muted)">Owner: Independent tester</text></g>
<g><rect x="356" y="56" width="140" height="104" rx="10" fill="none" stroke="var(--green)" stroke-width="2"/><rect x="356" y="56" width="140" height="5" rx="2" fill="var(--green)"/><text x="426" y="98" text-anchor="middle" font-size="21" font-weight="700" fill="var(--ink)">QAL3</text><text x="426" y="124" text-anchor="middle" font-size="13" fill="var(--body)">Staying right daily?</text><text x="426" y="180" text-anchor="middle" font-size="11.5" fill="var(--muted)">Owner: Plant operator</text></g>
<g><rect x="528" y="56" width="140" height="104" rx="10" fill="none" stroke="var(--grey)" stroke-width="2"/><rect x="528" y="56" width="140" height="5" rx="2" fill="var(--grey)"/><text x="598" y="98" text-anchor="middle" font-size="21" font-weight="700" fill="var(--ink)">AST</text><text x="598" y="124" text-anchor="middle" font-size="13" fill="var(--body)">Valid this year?</text><text x="598" y="180" text-anchor="middle" font-size="11.5" fill="var(--muted)">Owner: Independent tester</text></g>
<text x="340" y="230" text-anchor="middle" font-size="11.5" fill="var(--body)">● Functional test must pass before QAL2 and AST</text>
</svg>
<figcaption>Each stage assumes the one before it held — skip one and the chain of trust in your data breaks.</figcaption>
</figure>

## QAL1 — *Does the instrument design work?*

This is the type-certification you sorted out at purchase: the make and model is independently tested and holds an **MCERTS or TÜV QAL1 certificate**. It proves the technology is fit for purpose before it ever reaches your stack.

**Owner:** the CEMS manufacturer (who achieves and maintains the certification). *(We covered QAL1 in detail in the [Buying a CEMS series]({{ '/insights/qal1-certification-mcert-tuv-doe-registered-cems/' | relative_url }}).)*

## QAL2 — *Is it right on YOUR stack?*

A certified instrument still has to be proven on *your* chimney, with *your* flue gas. That's the **Calibration and Variability Test (CVT)**, done after installation. A **DOE-registered CEMS tester** runs **Standard Reference Method (SRM)** measurements in parallel with your CEMS, establishes the **calibration function** that relates your analyser's signal to true concentration, and confirms the system's **variability** is within allowed limits.

Two things matter here: a **functional test** must pass first (more below), and the tester must be **independent** — they cannot test a system their own company installed. That independence is what makes your calibration credible.

**Owner:** an independent DOE-registered CEMS tester.

## QAL3 — *Is it staying right, day to day?*

QAL2 proves the system on the day. QAL3 — **On-Going Performance Monitoring (OGPM)** — keeps it honest *between* formal tests. It's the routine discipline of **zero and span drift checks** plotted on **control charts**, so you catch drift early and act before it becomes an exceedance or a failed audit. These checks are done at the maintenance intervals set in the **MCERTS/TÜV certificate** (and never longer than that interval).

**Owner:** the plant operator — who may use competent personnel (your maintenance team, the consultant, or a tester) to perform the drift checks, plotting and corrective action.

## AST — *Is the QAL2 calibration still valid this year?*

Calibrations don't last forever. The **Annual Surveillance Test** checks, once a year, whether the calibration function established at QAL2 is still valid. It uses the **same functional checks as QAL2** and is, again, run by an independent registered tester.

**Owner:** an independent DOE-registered CEMS tester (appointed by the operator).

## The functional test — the gate before every formal test

Before *every* QAL2 and AST, a **functional test** — a series of checks on the CEMS — must be carried out. If it fails and no corrective action is taken, the QAL2 or AST **cannot proceed**. It's the gate that stops you wasting a test day on a system that isn't ready.

## Why the chain matters

Put together, the logic is clean:

> **QAL1** (right design) → **QAL2** (right on your stack) → **QAL3** (stays right daily) → **AST** (re-confirmed yearly).

Each stage assumes the one before it held. A facility that nails QAL2 but neglects QAL3 drift checks can drift out of compliance unnoticed; one that skips the AST can be running on a calibration that's no longer valid. The regulator trusts your data because — and only because — the whole chain is intact.

One more thing to plan for: certain **modifications, upgrades or repairs** reset the clock and require a fresh QAL2. We'll cover exactly which ones later in this series.

**Not sure your QA programme covers all four stages?** [Talk to us]({{ '/' | relative_url }}#contact) — we run this chain for facilities across Malaysia, using the DOE CEMS Guidelines we helped write.

*Next in the series — Part 2: QAL2 and the Calibration & Variability Test — getting certified after install.*

<div class="related">
  <p class="label">Related insights</p>
  <ul>
    <li><a href="{{ '/insights/qal1-certification-mcert-tuv-doe-registered-cems/' | relative_url }}">QAL1 and certification: what "DOE-registered CEMS" and MCERT/TÜV mean</a></li>
    <li><a href="{{ '/insights/need-a-cems-clean-air-regulations-2014/' | relative_url }}">Do you even need a CEMS? What the law requires before you buy</a></li>
    <li><a href="{{ '/insights/clean-air-regulations-2014-cems/' | relative_url }}">What the Clean Air Regulations 2014 mean for your CEMS</a></li>
  </ul>
</div>

---

*This article is general guidance, not legal advice. For obligations specific to your facility, refer to the current Environmental Quality (Clean Air) Regulations 2014, the EQA 1974, and the DOE CEMS Guidelines, or speak with us directly.*
