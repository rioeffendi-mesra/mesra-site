---
layout: post
title: "Anatomy of an in-situ CEMS install: what's actually on the stack"
full_title: "Anatomy of an In-Situ CEMS Install | Mesra"
date: 2026-07-10 00:05:00
last_modified_at: 2026-07-14
description: "Analyser, purge air, MCU, DAS and power distribution — what a double-pass in-situ CEMS installation actually looks like on a biomass boiler stack, using the SICK DustHunter T100 as a worked example."
image: /assets/og/in-situ-cems-installation-anatomy.png
---

We've written about *how* a CEMS measures — [extractive versus in-situ]({{ '/insights/how-cems-measures-extractive-in-situ-sampling/' | relative_url }}) — and about the data path from a plant to DOE. What we haven't shown is the physical hardware in between: what's actually bolted to the stack, what sits in the boiler house, and how it's wired together. This is that walk-through, using a real double-pass in-situ system we install — the **SICK DustHunter T100** — as the worked example.

## The stack area: the analyser itself

An in-situ path analyser measures across the duct rather than pulling a sample out of it. As covered in [extractive vs in-situ]({{ '/insights/how-cems-measures-extractive-in-situ-sampling/' | relative_url }}), DOE accepts only the **double-pass** configuration — the beam crosses the duct, reflects, and returns to the same unit (Guidelines V8 §3.1.2). The DustHunter T100 is built exactly this way: a combined **DHT-T10 sender/receiver unit** mounted on one wall of the duct, and a passive **DHT-R0x reflector** on the opposite wall, needing no cable of its own. The device is EN 15267 and EN 14181 certified, with a certified dust-concentration range set during QAL1 and matched to your daily Emission Limit Value — the same "certification range is always related to the daily ELV" principle we cover in the [QAL1 post]({{ '/insights/qal1-certification-mcert-tuv-doe-registered-cems/' | relative_url }}).

<figure class="fig">
<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="an-t an-d" font-family="'Helvetica Neue',Helvetica,Arial,sans-serif">
<title id="an-t">What's mounted at the stack for a double-pass in-situ analyser</title>
<desc id="an-d">A duct cross-section showing a combined sender and receiver unit mounted on one wall, a passive reflector on the opposite wall, and a purge air unit feeding clean air to the sender/receiver's optics. A cable runs from the sender/receiver down to the boiler house.</desc>
<rect x="150" y="60" width="380" height="120" rx="10" fill="none" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4 4"/>
<text x="340" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Stack / duct cross-section</text>
<rect x="116" y="88" width="46" height="64" rx="5" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="2"/>
<text x="139" y="168" text-anchor="middle" font-size="9" fill="var(--ink)" font-weight="700">Sender / receiver</text>
<text x="139" y="180" text-anchor="middle" font-size="8.5" fill="var(--muted)">DHT-T10 unit</text>
<rect x="518" y="98" width="34" height="44" rx="5" fill="var(--white)" stroke="var(--grey)" stroke-width="2"/>
<text x="535" y="160" text-anchor="middle" font-size="9" fill="var(--ink)" font-weight="700">Reflector</text>
<text x="535" y="172" text-anchor="middle" font-size="8.5" fill="var(--muted)">DHT-R0x unit</text>
<line x1="162" y1="112" x2="516" y2="118" stroke="var(--green-d)" stroke-width="2.5"/>
<path d="M516 118 L506 113 L506 123 Z" fill="var(--green-d)"/>
<line x1="516" y1="130" x2="162" y2="124" stroke="var(--green-d)" stroke-width="2.5"/>
<path d="M162 124 L172 119 L172 129 Z" fill="var(--green-d)"/>
<rect x="60" y="204" width="76" height="34" rx="5" fill="var(--white)" stroke="var(--grey)" stroke-width="1.5"/>
<text x="98" y="225" text-anchor="middle" font-size="8.5" fill="var(--ink)">Purge air unit</text>
<line x1="98" y1="204" x2="130" y2="152" stroke="var(--grey)" stroke-width="1.5"/>
<line x1="139" y1="152" x2="139" y2="262" stroke="var(--ink)" stroke-width="1.5"/>
<path d="M139 262 L134 252 L144 252 Z" fill="var(--ink)"/>
<text x="139" y="280" text-anchor="middle" font-size="9" fill="var(--muted)">comm + power cable</text>
<text x="139" y="292" text-anchor="middle" font-size="9" fill="var(--muted)">down to the boiler house →</text>
</svg>
<figcaption>Stack-area hardware for a double-pass in-situ analyser like the DustHunter T100: sender/receiver on one wall, passive reflector on the other, and a purge air unit protecting the sender/receiver's optics from the flue gas. Everything else lives one level down.</figcaption>
</figure>

The **purge air unit** is worth calling out on its own: it feeds a constant stream of clean, filtered air across the sender/receiver's optical window so stack dust doesn't coat the lens and bias the reading over time — an external accessory option on the T100, not a Guidelines-mandated component, but standard practice on most dusty biomass stacks we work on.

## The boiler house: control and data

The signal doesn't go straight to DOE from the stack. It runs first to a **control unit (MCU)** — on the T100, a wall-mounted enclosure that powers the sender/receiver and carries its signal onward — and then into the **Data Acquisition [Handling] System (DAHS/DAS)**. Unlike "MCU," the DAS isn't vendor terminology: Guidelines V8 §3.4 defines it directly as the subsystem that records emission measurements, applies the STP-dry and reference-Oxygen/CO₂ corrections, calculates the 1-minute, 30-minute, hourly and daily averages, and generates the reports DOE reviews. A CEMS "is not complete without" one, in the Guidelines' own words.

Both the analyser and the DAS need power, usually from a dedicated **power distribution panel** in the same boiler house, kept separate from the plant's main distribution board so a plant-side trip doesn't take the monitoring system down with it.

<figure class="fig report">
<p class="fig-title">What's actually on site, piece by piece</p>
<div class="rep-rows">
  <div class="rep-row hl">
    <span class="rep-k">1</span>
    <span class="rep-body"><span class="rep-name">Analyser (sender/receiver + reflector)</span><span class="rep-desc">The certified measuring device — for a double-pass in-situ path system like the DustHunter T100, a combined sender/receiver unit and a passive reflector on opposite duct walls.</span></span>
  </div>
  <div class="rep-row">
    <span class="rep-k">2</span>
    <span class="rep-body"><span class="rep-name">Purge air unit</span><span class="rep-desc">Feeds clean, filtered air across the sender/receiver's optical window so stack dust doesn't foul the measurement.</span></span>
  </div>
  <div class="rep-row">
    <span class="rep-k">3</span>
    <span class="rep-body"><span class="rep-name">MCU (control unit)</span><span class="rep-desc">Wall-mounted in the boiler house; powers the analyser and carries its signal to the DAS. Manufacturer terminology, not a Guidelines-defined term.</span></span>
  </div>
  <div class="rep-row">
    <span class="rep-k">4</span>
    <span class="rep-body"><span class="rep-name">DAS (Data Acquisition [Handling] System)</span><span class="rep-desc">Guidelines V8 §3.4: records emission data, applies STP/O₂ or CO₂ correction, calculates 1-minute through daily averages, generates DOE's reports.</span></span>
  </div>
  <div class="rep-row">
    <span class="rep-k">5</span>
    <span class="rep-body"><span class="rep-name">Power distribution panel</span><span class="rep-desc">A dedicated supply for the analyser, MCU and DAS — common installation practice, kept separate from the plant's main board.</span></span>
  </div>
</div>
<figcaption>Rows 1, 2, 3 and 5 describe common hardware and installation practice, not text lifted from the Guidelines — row 4 is the exception, defined and required by Guidelines V8 §3.4. What happens after the boiler house — the office PC and the link to DOE — is covered in <a href="{{ '/insights/doe-iremote-cems-data-transmission-explained/' | relative_url }}">iRemote, "CEMS 2.0", "CEMS 3.0"</a>.</figcaption>
</figure>

## Why the physical layout is a compliance question, not just an engineering one

None of this hardware is arbitrary. Where the analyser sits on the duct is governed by the [siting and measurement-plane rules]({{ '/insights/cems-siting-sample-ports-measurement-plane/' | relative_url }}) we cover separately — straight-length from disturbances, distance from the wall, access platform. Which sampling method it uses at all is a choice you have to [justify to DOE]({{ '/insights/how-cems-measures-extractive-in-situ-sampling/' | relative_url }}) under §3.2, submitted with the equipment's QAL1 certificate. And once it's wired up, the DAS's own output feeds directly into the CEMS-DIS chain we've written about separately — the same 75%-availability validity rule applies at both ends.

Get any one piece wrong — a single-pass analyser, an undersized purge air supply, a DAS that can't produce the right averages — and the problem doesn't show up as a design flaw. It shows up months later, as a failed QAL2 or a registration DOE won't approve. Once the hardware is right, the next question is making it read true: how a transmittance system like this is [calibrated from light beam to legal mg/m³]({{ '/insights/calibrating-transmissometer-dust-cems-dusthunter-t100/' | relative_url }}).

**Planning an in-situ installation and want the hardware specified right the first time?** [Talk to us]({{ '/' | relative_url }}#contact) — we design, supply and install complete CEMS, including double-pass in-situ systems like the DustHunter T100, against the same DOE CEMS Guidelines we helped write.

<div class="related">
  <p class="label">Related insights</p>
  <ul>
    <li><a href="{{ '/insights/how-cems-measures-extractive-in-situ-sampling/' | relative_url }}">How does a CEMS actually measure? Extractive vs in-situ — and what DOE accepts</a></li>
    <li><a href="{{ '/insights/cems-siting-sample-ports-measurement-plane/' | relative_url }}">Where your CEMS goes: siting, sample ports and the measurement plane DOE accepts</a></li>
    <li><a href="{{ '/insights/doe-iremote-cems-data-transmission-explained/' | relative_url }}">iRemote, "CEMS 2.0", "CEMS 3.0": what DOE's data platform for CEMS is actually called</a></li>
    <li><a href="{{ '/insights/qal1-certification-mcert-tuv-doe-registered-cems/' | relative_url }}">What "DOE-registered CEMS" and MCERT/TÜV actually mean</a></li>
  </ul>
</div>

---

*This article is general guidance, not legal advice, based on the DOE CEMS Guidelines Version 8 (2025) and publicly available manufacturer documentation. Specific hardware and configuration requirements depend on your stack and flue-gas conditions — speak with us directly before specifying equipment.*
