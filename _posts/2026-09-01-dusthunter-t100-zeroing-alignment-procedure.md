---
layout: post
title: "How to zero and align a SICK DustHunter T100: the field procedure"
full_title: "SICK DustHunter T100 Zeroing & Alignment Procedure | Mesra"
date: 2026-09-01 00:05:00
description: "Field procedure for zeroing and aligning a SICK DustHunter T100 dust CEMS in SOPAS — the QAL3 zero-and-span check that keeps readings valid and DOE-reportable."
image: /assets/og/dusthunter-t100-zeroing-alignment.png
---

*A hands-on field procedure for technicians and CEMS operators running a SICK DustHunter T100 double-pass transmissometer — the optical dust monitor we install on biomass boilers. It covers the routine **zero and alignment** performed in SICK's SOPAS ET software: what to measure first, how to centre the optics, how to set the reference, and how to confirm the result before you sign off.*

Zeroing is the check that keeps an optical dust monitor honest. A transmissometer doesn't measure milligrams — [it measures light]({{ '/insights/calibrating-transmissometer-dust-cems-dusthunter-t100/' | relative_url }}), and every mg/m³ it reports to DOE is derived from how much of its beam survives the trip across your stack. If the instrument no longer knows what a *clean* path looks like — because the optics have drifted, or the sender and reflector are no longer aligned — then every reading downstream is off by that error. Zeroing re-establishes the 100 % transmission reference; alignment makes sure the beam is actually landing where it should before you set it. Done together, on a smoke-free path, they are the practical core of the [QAL3 drift check]({{ '/insights/qal3-ongoing-performance-monitoring-drift-control/' | relative_url }}) every operator owns.

> **Do this on a smoke- and dust-free path only.** Zeroing sets the instrument's reference for a perfectly clean beam. If there is dust or smoke in the path while you zero, that contamination is baked into the reference and every later reading is biased. Perform it during a genuine shutdown with clean air in the duct, or on SICK's normalisation set-up (adjustment mounts or a waste-gas-free tube). Follow your site's confined-space, isolation and purge-air procedures throughout.

<figure class="fig">
<p class="fig-title">The zero-and-align procedure at a glance</p>
<svg viewBox="0 0 680 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ov-t ov-d" font-family="'Helvetica Neue',Helvetica,Arial,sans-serif">
<title id="ov-t">The six stages of the DustHunter T100 zero-and-align procedure</title>
<desc id="ov-d">Six stages in sequence: measure, connect, set parameters, align, zero, then verify and save. Stage five, zero, is highlighted as the step that writes the new reference.</desc>
<rect x="7" y="40" width="96" height="66" rx="11" fill="var(--white)" stroke="var(--green)" stroke-width="2"/>
<text x="55" y="63" text-anchor="middle" font-family="'Roboto Mono',ui-monospace,Menlo,monospace" font-size="10.5" font-weight="700" fill="var(--green-d)">1</text>
<text x="55" y="83" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--ink)">Measure</text>
<text x="55" y="99" text-anchor="middle" font-size="8" fill="var(--muted)">path + inputs</text>
<rect x="121" y="40" width="96" height="66" rx="11" fill="var(--white)" stroke="var(--green)" stroke-width="2"/>
<text x="169" y="63" text-anchor="middle" font-family="'Roboto Mono',ui-monospace,Menlo,monospace" font-size="10.5" font-weight="700" fill="var(--green-d)">2</text>
<text x="169" y="83" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--ink)">Connect</text>
<text x="169" y="99" text-anchor="middle" font-size="8" fill="var(--muted)">SOPAS &#183; log in</text>
<rect x="235" y="40" width="96" height="66" rx="11" fill="var(--white)" stroke="var(--green)" stroke-width="2"/>
<text x="283" y="63" text-anchor="middle" font-family="'Roboto Mono',ui-monospace,Menlo,monospace" font-size="10.5" font-weight="700" fill="var(--green-d)">3</text>
<text x="283" y="83" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--ink)">Parameters</text>
<text x="283" y="99" text-anchor="middle" font-size="8" fill="var(--muted)">ranges &#183; app data</text>
<rect x="349" y="40" width="96" height="66" rx="11" fill="var(--white)" stroke="var(--green)" stroke-width="2"/>
<text x="397" y="63" text-anchor="middle" font-family="'Roboto Mono',ui-monospace,Menlo,monospace" font-size="10.5" font-weight="700" fill="var(--green-d)">4</text>
<text x="397" y="83" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--ink)">Align</text>
<text x="397" y="99" text-anchor="middle" font-size="8" fill="var(--muted)">beam centred</text>
<rect x="463" y="40" width="96" height="66" rx="11" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="2.5"/>
<text x="511" y="63" text-anchor="middle" font-family="'Roboto Mono',ui-monospace,Menlo,monospace" font-size="10.5" font-weight="700" fill="var(--green-d)">5</text>
<text x="511" y="83" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--ink)">Zero</text>
<text x="511" y="99" text-anchor="middle" font-size="8" fill="var(--green-d)">100% reference</text>
<rect x="577" y="40" width="96" height="66" rx="11" fill="var(--white)" stroke="var(--green)" stroke-width="2"/>
<text x="625" y="63" text-anchor="middle" font-family="'Roboto Mono',ui-monospace,Menlo,monospace" font-size="10.5" font-weight="700" fill="var(--green-d)">6</text>
<text x="625" y="83" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--ink)">Verify</text>
<text x="625" y="99" text-anchor="middle" font-size="8" fill="var(--muted)">check &#183; save</text>
<line x1="105" y1="73" x2="117" y2="73" stroke="var(--green-d)" stroke-width="2"/>
<path d="M117 73 L109 69 L109 77 Z" fill="var(--green-d)"/>
<line x1="219" y1="73" x2="231" y2="73" stroke="var(--green-d)" stroke-width="2"/>
<path d="M231 73 L223 69 L223 77 Z" fill="var(--green-d)"/>
<line x1="333" y1="73" x2="345" y2="73" stroke="var(--green-d)" stroke-width="2"/>
<path d="M345 73 L337 69 L337 77 Z" fill="var(--green-d)"/>
<line x1="447" y1="73" x2="459" y2="73" stroke="var(--green-d)" stroke-width="2"/>
<path d="M459 73 L451 69 L451 77 Z" fill="var(--green-d)"/>
<line x1="561" y1="73" x2="573" y2="73" stroke="var(--green-d)" stroke-width="2"/>
<path d="M573 73 L565 69 L565 77 Z" fill="var(--green-d)"/>
</svg>
<p class="fig-note">&#9679; Six stages. Only stage 5 writes the new reference &#8212; everything before it exists to make that reference correct, and everything after it protects the record.</p>
<figcaption>The full field routine for a routine zero and alignment on a DustHunter T100 via SOPAS ET.</figcaption>
</figure>

## Before you start

Gather these before you open SOPAS — a zero attempted with a missing value or a fouled path is a zero you'll be redoing:

- **SOPAS ET** installed on your laptop, with the correct **device driver versions** for both the **MCU** (control unit) and the **DHT T100** sensor, plus the connection cable.
- **Authorized operator** login for SOPAS. The password is SICK's standard operator-level password, documented in the official SICK DustHunter manual — we don't reproduce it on this public page; use the value from your device documentation.
- The **two path measurements** from Stage 1 (flange-to-flange and the optical measuring distance).
- From your **latest stack sampling report**: the **actual dust concentration (mg/m³)**, and the corresponding **extinction value** read from the MCU. These are the application inputs the instrument needs to relate light to mass.
- A confirmed **smoke- and dust-free path** — shutdown clean air, or SICK adjustment mounts / a waste-gas-free tube.
- Certified **filter glasses** if you are also performing a span check (optional to a routine zero, but good practice).

## Stage 1 — Measure the geometry

Extinction accumulates along the beam, so the **path length is a calibration parameter**: the same dust load gives a different reading on a wider duct. Measure it before anything else.

- **Flange-to-flange** = stack (duct) diameter **+** the flange length from the flange face to the sender/receiver reference point (A) **+** the flange length to the reflector point (F, taken at the middle of the rubber seal). In short: the distance **A → F**.
- **Optical measuring distance** = the chimney opening the beam actually crosses (the "CD" value).

Write both down. They go into the application parameters in Stage 3, and a wrong path length quietly biases every reading the system will ever report.

## Stage 2 — Connect, log in, and enter maintenance

1. Open **SOPAS ET** and load the matching **driver versions** for the **MCU** and the **DHT T100**. Connect to both.
2. Log in on each as **Authorized operator**.
3. Work on the **MCU first**. Under the **Maintenance** folder, tick the box to **activate maintenance mode**, and wait until the **orange maintenance indicator** appears — this signals the instrument has stopped reporting live data to DOE and is safe to adjust.
4. **Save the current parameters before you change anything.** Under **Protocol**, save the existing ("default") parameter set for the MCU. This is your rollback point.
5. Now repeat for the **DHT T100**: log in, tick **maintenance**, wait for the orange indicator, and save its current parameters under **Protocol** too.

Always capturing the "before" state first means a mistake costs you a reload, not a site revisit.

## Stage 3 — Set the parameters

With both units in maintenance:

- **Confirm the selected variant** matches the sensor actually installed, and enter the **mounting location** so the record is unambiguous.
- Under **Overview Screen Setting**, set **Bar 1 & 2**, the **Value**, and the **Range Low & High** to the values your site requires.
- Under **Application Parameters**, enter the **path length** from Stage 1, then the two calibration inputs from your stack sampling report: the **actual dust (mg/m³)** and the **extinction value** from the MCU. This is what lets the instrument translate its optical signal into a reportable concentration.

## Stage 4 — Align the optics

Before you set any reference, the beam has to be landing where it should. The optical axes of the **sender/receiver** and the **reflector** must coincide, so the returning spot sits **dead centre** on the alignment target. A zero set on a misaligned beam is a zero set on the wrong amount of light.

<figure class="fig">
<svg viewBox="0 0 680 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="al-t al-d" font-family="'Helvetica Neue',Helvetica,Arial,sans-serif">
<title id="al-t">Aligning the DustHunter T100 optical beam on the target</title>
<desc id="al-d">Two alignment targets. On the left the returning light spot sits off-centre — misaligned. On the right, after adjustment, the spot sits at the centre of the crosshair — correctly aligned before zeroing.</desc>
<!-- LEFT: misaligned -->
<text x="175" y="30" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Misaligned</text>
<circle cx="175" cy="140" r="76" fill="none" stroke="var(--ink)" stroke-width="2"/>
<circle cx="175" cy="140" r="50" fill="none" stroke="var(--grey)" stroke-width="1" stroke-dasharray="3 3"/>
<circle cx="175" cy="140" r="24" fill="none" stroke="var(--grey)" stroke-width="1" stroke-dasharray="3 3"/>
<line x1="175" y1="58" x2="175" y2="222" stroke="var(--grey)" stroke-width="1"/>
<line x1="93" y1="140" x2="257" y2="140" stroke="var(--grey)" stroke-width="1"/>
<circle cx="139" cy="108" r="14" fill="var(--grey)"/>
<line x1="153" y1="122" x2="171" y2="136" stroke="var(--green-d)" stroke-width="2"/>
<path d="M171 136 L161 133 L165 126 Z" fill="var(--green-d)"/>
<text x="175" y="252" text-anchor="middle" font-size="10.5" fill="var(--muted)">return spot off the centre — adjust the mounts</text>
<!-- RIGHT: aligned -->
<text x="505" y="30" text-anchor="middle" font-size="13" font-weight="700" fill="var(--green-d)">Aligned</text>
<circle cx="505" cy="140" r="76" fill="none" stroke="var(--ink)" stroke-width="2"/>
<circle cx="505" cy="140" r="50" fill="none" stroke="var(--grey)" stroke-width="1" stroke-dasharray="3 3"/>
<circle cx="505" cy="140" r="24" fill="none" stroke="var(--green)" stroke-width="1.5"/>
<line x1="505" y1="58" x2="505" y2="222" stroke="var(--grey)" stroke-width="1"/>
<line x1="423" y1="140" x2="587" y2="140" stroke="var(--grey)" stroke-width="1"/>
<circle cx="505" cy="140" r="14" fill="var(--green-d)"/>
<circle cx="505" cy="140" r="14" fill="none" stroke="var(--green)" stroke-width="3" opacity="0.5"/>
<text x="505" y="252" text-anchor="middle" font-size="10.5" fill="var(--muted)">return spot centred — ready to zero</text>
</svg>
<figcaption>Align before you zero. On the T100 — which has a one-sided contamination measurement and no automatic deflection compensation — mounting rigidity and flange alignment do the work its optics won't, so get the beam centred and the mounts firm before setting any reference.</figcaption>
</figure>

## Stage 5 — Zero the instrument

Now set the reference, on the confirmed **smoke- and dust-free** path.

1. Under **Transmission**, choose **Set reference**.
2. Follow the SOPAS steps to run the **zeroing**. The instrument measures the light across the clean path and sets that transmission as **100 %** — the anchor every future reading is measured against.
3. **Re-check the alignment** (Stage 4) is still centred *before* you confirm — this is your last chance to catch a nudged mount.

<figure class="fig">
<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="zp-t zp-d" font-family="'Helvetica Neue',Helvetica,Arial,sans-serif">
<title id="zp-t">Setting the 100 percent transmission reference across a clean path</title>
<desc id="zp-d">The sender/receiver unit on the left sends a beam across a smoke-free path to the reflector on the right and back — a double pass. With no dust in the path, full light returns and is set as 100 percent transmission, the zero reference.</desc>
<!-- duct walls (clean) -->
<line x1="150" y1="70" x2="560" y2="70" stroke="var(--line)" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="150" y1="170" x2="560" y2="170" stroke="var(--line)" stroke-width="2" stroke-dasharray="6 5"/>
<text x="355" y="58" text-anchor="middle" font-size="10" fill="var(--muted)">smoke- and dust-free path — clean air / shutdown</text>
<!-- sender/receiver -->
<rect x="70" y="96" width="80" height="48" rx="4" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="2"/>
<text x="110" y="118" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Sender /</text>
<text x="110" y="131" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">receiver</text>
<text x="110" y="160" text-anchor="middle" font-size="9" fill="var(--muted)">DHT-T</text>
<!-- reflector -->
<rect x="560" y="96" width="50" height="48" rx="4" fill="var(--white)" stroke="var(--ink)" stroke-width="2"/>
<text x="585" y="124" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Refl.</text>
<text x="585" y="160" text-anchor="middle" font-size="9" fill="var(--muted)">DHT-R</text>
<!-- outgoing beam -->
<line x1="150" y1="112" x2="556" y2="112" stroke="var(--green)" stroke-width="2.5"/>
<path d="M556 112 L544 106 L544 118 Z" fill="var(--green)"/>
<text x="350" y="106" text-anchor="middle" font-size="9" fill="var(--muted)">out</text>
<!-- return beam -->
<line x1="556" y1="128" x2="152" y2="128" stroke="var(--green)" stroke-width="2.5"/>
<path d="M152 128 L164 122 L164 134 Z" fill="var(--green)"/>
<text x="350" y="142" text-anchor="middle" font-size="9" fill="var(--muted)">back (double pass)</text>
<!-- result callout -->
<text x="355" y="205" text-anchor="middle" font-size="12" font-weight="700" fill="var(--green-d)">Full light returns  →  set as 100 % transmission  =  the zero reference</text>
</svg>
<figcaption>Normalisation in practice: with no dust in the beam, the transmission measured across the clean path is set to 100 %. That is the reference the T100 subtracts every later measurement from — which is exactly why it must be set on a genuinely clean path.</figcaption>
</figure>

## Stage 6 — Verify and save

1. Check the **MCU display**. Because you zeroed on a clean path, **dust** and **opacity** should read at or near their floor and then track the live process once it's running. A zero that leaves a stubborn offset is a sign the path wasn't clean or the alignment slipped — investigate before signing off.
2. Under **Protocol**, **save the new parameter set** for **both** the MCU and the DHT T100. Unsaved, the whole job is lost on the next power cycle.
3. **Close the record.** Complete your service/QAL3 form, capture the before/after parameters, and get the signature and stamp your site requires. An unrecorded zero is, for compliance purposes, a zero that didn't happen.

<figure class="fig report">
<p class="fig-title">The zero-and-align routine on one page</p>
<div class="rep-rows">
  <div class="rep-row">
    <span class="rep-k">1</span>
    <span class="rep-body"><span class="rep-name">Measure the geometry</span><span class="rep-desc">Flange-to-flange (A→F) and the optical measuring distance. Path length is a calibration parameter — get it right first.</span></span>
  </div>
  <div class="rep-row">
    <span class="rep-k">2</span>
    <span class="rep-body"><span class="rep-name">Connect, log in, enter maintenance</span><span class="rep-desc">SOPAS + correct drivers for MCU and DHT T100. Authorized operator. Maintenance mode (orange indicator). Save current parameters via Protocol before changing anything.</span></span>
  </div>
  <div class="rep-row">
    <span class="rep-k">3</span>
    <span class="rep-body"><span class="rep-name">Set the parameters</span><span class="rep-desc">Confirm variant + mounting location. Overview screen ranges. Application parameters: path length, actual dust (mg/m³) and extinction from the stack report.</span></span>
  </div>
  <div class="rep-row">
    <span class="rep-k">4</span>
    <span class="rep-body"><span class="rep-name">Align the optics</span><span class="rep-desc">Centre the return spot on the target. Mounts firm, flange aligned. Never zero a misaligned beam.</span></span>
  </div>
  <div class="rep-row hl">
    <span class="rep-k">5</span>
    <span class="rep-body"><span class="rep-name">Zero — set the 100 % reference</span><span class="rep-desc">Transmission → Set reference, on a smoke- and dust-free path. Re-check alignment before confirming. This is the step that counts.</span></span>
  </div>
  <div class="rep-row">
    <span class="rep-k">6</span>
    <span class="rep-body"><span class="rep-name">Verify and save</span><span class="rep-desc">MCU dust/opacity read true. Save both parameter sets via Protocol. Complete and sign the record.</span></span>
  </div>
</div>
<figcaption>Six stages, one purpose: give the instrument a correct, well-aligned picture of a clean path, so every reading measured against it is trustworthy.</figcaption>
</figure>

## Where this fits in compliance

A zero and alignment is **drift control, not calibration.** It re-establishes the optical reference and confirms the geometry — but it does **not** re-derive the mg/m³ scale. That scale comes from the [QAL2 calibration function]({{ '/insights/qal2-calibration-variability-test-cems/' | relative_url }}), built against gravimetric stack sampling, and only a fresh QAL2 or the [Annual Surveillance Test]({{ '/insights/annual-surveillance-test-ast-cems/' | relative_url }}) can change it. Zeroing keeps that calibration valid between those campaigns.

How often? The rule follows the instrument's certificate: zero-and-span checks must happen **at least every QAL1 maintenance interval — three months for the DustHunter T100** — but DOE recommends **every four weeks**, and expects **shorter** intervals on high, dirty dust loads where the optics foul faster. If you're plotting these on a [QAL3 control chart]({{ '/insights/qal3-ongoing-performance-monitoring-drift-control/' | relative_url }}) and the zero keeps wandering, that's the chart doing its job — telling you to look at purge air, mounting or fouling before it becomes an exceedance.

If you'd rather have this done for you — or want your technicians trained on it on your own stack — [talk to us]({{ '/' | relative_url }}#contact). Keeping optical dust monitors reading true between QAL2 campaigns is core to what we do.

<div class="related">
  <p class="label">References</p>
  <ul>
    <li><a href="{{ '/insights/calibrating-transmissometer-dust-cems-dusthunter-t100/' | relative_url }}">Calibrating a transmissometer dust CEMS: from light beam to legal mg/m³</a> — the full calibration chain this zero sits inside</li>
    <li><a href="{{ '/insights/qal3-ongoing-performance-monitoring-drift-control/' | relative_url }}">QAL3: ongoing performance monitoring &amp; drift control</a> — where routine zero-and-span checks live</li>
    <li><a href="https://www.doe.gov.my/wp-content/uploads/2025/12/SERIES-OF-CEMS_V12_final_interactive.pdf" target="_blank" rel="noopener">CEMS Guidelines, Volumes I &amp; II (Version 8, 2025)</a> — Department of Environment Malaysia</li>
  </ul>
</div>

<p><em>This is a general field guide for the SICK DustHunter T100 as we install and service it, condensed from our internal procedure. It doesn't replace the manufacturer's operating instructions or your site's safety procedures — always work to the current SICK manual and your own permit-to-work.</em></p>
