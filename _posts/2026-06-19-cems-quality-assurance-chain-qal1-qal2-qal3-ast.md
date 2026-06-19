---
layout: post
title: "The CEMS quality-assurance chain: QAL1 → QAL2 → QAL3 → AST, and why each exists"
date: 2026-06-19 08:30:00
description: "Part 1 of our Operating a Compliant CEMS series: the four-stage EN 14181 quality-assurance programme explained — what each stage proves, and who is responsible for it."
---

*Operating a compliant CEMS — Part 1 of 5. A practical series for industry, drawn from the DOE CEMS Guidelines (Version 8, 2025), which we helped develop.*

Buying a certified CEMS is the easy part. Keeping it producing data the regulator will accept — every hour, all year — is a continuous **quality-assurance programme**. Under the international **EN 14181** standard that Malaysia's guidelines follow, that programme has four stages. Each answers a different question, and each has a clearly assigned owner. Skip one and the whole chain of trust in your data breaks.

Here's the chain, in plain terms.

## QAL1 — *Does the instrument design work?*

This is the type-certification you sorted out at purchase: the make and model is independently tested and holds an **MCERTS or TÜV QAL1 certificate**. It proves the technology is fit for purpose before it ever reaches your stack.

**Owner:** the CEMS manufacturer (who achieves and maintains the certification). *(We covered QAL1 in detail in the Buying a CEMS series.)*

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

---

*This article is general guidance, not legal advice. For obligations specific to your facility, refer to the current Environmental Quality (Clean Air) Regulations 2014, the EQA 1974, and the DOE CEMS Guidelines, or speak with us directly.*
