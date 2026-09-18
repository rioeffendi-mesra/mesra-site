---
layout: post
title: "Corrected, dry and referenced: when a dust reading becomes a compliance number"
full_title: "When a Biomass Boiler Dust Reading Becomes a Compliance Number | Mesra"
date: 2026-09-18 00:05:00
description: "A transmissometer dust monitor outputs milligrams at stack conditions. Malaysia's dust limit is set at STP, dry and 12% CO₂. What sits between the two — correction, normalisation, and the sensors a biomass boiler dust CEMS actually needs."
image: /assets/og/dust-cems-correction-normalisation.png
series: biomass-boilers
---

*Drawn from the DOE CEMS Guidelines (Version 8, 2025), which we helped develop, the international standards they implement — EN 14181 and ISO 9096 — and the Environmental Quality (Clean Air) Regulations 2014. A plain walk-through of why the number on a dust monitor is not yet the number the law compares against — and what closes the gap.*

A [transmissometer dust CEMS]({{ '/insights/calibrating-transmissometer-dust-cems-dusthunter-t100/' | relative_url }}) on a biomass boiler — the kind sitting on almost every palm oil mill stack in Malaysia — will, after calibration, put a tidy figure on the screen: so many milligrams per cubic metre. It is tempting to read that figure straight across to the limit — 150 mg/m³ — and call it compliant or not. But the two numbers are not on the same footing. The limit in the Clean Air Regulations is not "150 mg/m³" full stop; it is 150 mg/m³ **at standard temperature and pressure, on a dry basis, referenced to 12% carbon dioxide**. The reading coming off a bare dust monitor is at none of those conditions. It is measured in hot, wet flue gas, at whatever pressure and whatever CO₂ the boiler happens to be producing that minute.

Getting from one to the other is what "correction" and "normalisation" mean. It is not a formality, and — this is the part that matters for a great many mills — it needs measurements a dust monitor does not make on its own.

And here the field reality is stark. In Malaysian palm oil mills today, the transmissometer dust monitor is installed **on its own**. The moisture and CO₂ measurements that normalisation depends on are simply not there, and in most cases no data-acquisition correction stage is present at all. So the number on the screen is, and stays, a reading at actual stack conditions — while the limit it will be judged against is written on a different basis entirely. This article is about that gap: what it is, why it is easy to miss, and what closes it.

## What the limit is actually written against

Every emission limit has to state the conditions it applies at, or it can be gamed. Open a damper, pull in more excess air, and the same mass of dust leaving the stack is diluted into a larger gas volume — the concentration falls without a single milligram less being emitted. So the regulation fixes the conditions: report the dust *as if* the gas were dry, at 273 K and 101.3 kPa, and diluted to a fixed reference level. For fuel-burning equipment not covered by the First Schedule — which is where an ordinary biomass boiler, a palm oil mill's included, sits — the Second Schedule of CAR 2014 is explicit: **"The CO₂ reference content is 12%,"** and Total Particulate Matter is limited to **150 mg/m³**.

That single sentence settles a question we are asked constantly on site: should the correction gas be CO₂ or O₂? For a biomass boiler under the Second Schedule, the schedule has already answered — it is CO₂, at 12%. Oxygen only enters for the large installations in the Third Schedule (Heat and Power boilers above 10 MWe, referenced to 6% O₂ for solid fuel). The two are not interchangeable house preferences; the regulation assigns a different reference gas to each category, and for the mill boiler it is carbon dioxide.

<figure class="fig">
<p class="fig-title">Which reference gas? The schedule decides</p>
<svg viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="g0t g0d" font-family="'Helvetica Neue',Helvetica,Arial,sans-serif">
<title id="g0t">The reference gas is set by which schedule a boiler falls under</title>
<desc id="g0d">Two panels. Left: the Second Schedule, covering ordinary fuel-burning equipment such as a biomass boiler at a palm oil mill, sets a carbon dioxide reference of 12 percent and a total particulate matter limit of 150 milligrams per cubic metre. Right: the Third Schedule, covering large Heat and Power boilers above 10 megawatts electrical, sets an oxygen reference of 6 percent for solid fuel. The ordinary biomass boiler uses the left panel.</desc>
<rect x="20" y="30" width="310" height="150" rx="12" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="2"/>
<text x="175" y="58" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Second Schedule</text>
<text x="175" y="78" text-anchor="middle" font-size="10.5" fill="var(--muted)">Fuel-burning equipment</text>
<text x="175" y="93" text-anchor="middle" font-size="10.5" fill="var(--muted)">(the biomass boiler)</text>
<text x="175" y="128" text-anchor="middle" font-size="22" font-weight="700" fill="var(--green-d)">12% CO₂</text>
<text x="175" y="152" text-anchor="middle" font-size="11" fill="var(--ink)">reference gas · TPM 150 mg/m³</text>
<text x="175" y="170" text-anchor="middle" font-size="9.5" fill="var(--green-d)" font-weight="700">◄ applies to a palm oil mill boiler</text>
<rect x="350" y="30" width="310" height="150" rx="12" fill="var(--white)" stroke="var(--line)" stroke-width="1.5"/>
<text x="505" y="58" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Third Schedule</text>
<text x="505" y="78" text-anchor="middle" font-size="10.5" fill="var(--muted)">Heat &amp; Power boilers</text>
<text x="505" y="93" text-anchor="middle" font-size="10.5" fill="var(--muted)">above 10 MWe</text>
<text x="505" y="128" text-anchor="middle" font-size="22" font-weight="700" fill="var(--grey)">6% O₂</text>
<text x="505" y="152" text-anchor="middle" font-size="11" fill="var(--ink)">reference gas (solid fuel)</text>
<text x="505" y="170" text-anchor="middle" font-size="9.5" fill="var(--muted)">large plant only</text>
</svg>
<figcaption>The reference gas is not a matter of preference — it is set by the schedule the boiler falls under. An ordinary biomass boiler is a Second-Schedule source: CO₂ at 12%.</figcaption>
</figure>

## From a light measurement to a compliance number

A transmissometer dust monitor never measures milligrams — it measures light, and its control unit turns that light into a concentration using the calibration coefficients cc0, cc1 and cc2 established during QAL2. That is the whole job of the control unit, and it is done superbly. But notice *what basis* the number lands on. The calibration is built against gravimetric sampling expressed at the conditions the monitor itself sees — the actual, wet, hot stack gas — so the mg/m³ the control unit outputs is dust **at actual stack conditions**. Honest, traceable, correctly calibrated — and not yet on the ELV's basis.

Three more steps stand between that reading and a compliance number, and each one needs a measurement the dust monitor does not make:

<figure class="fig">
<p class="fig-title">The chain from a light measurement to a compliance number</p>
<svg viewBox="0 0 680 548" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="g1t g1d" font-family="'Helvetica Neue',Helvetica,Arial,sans-serif">
<title id="g1t">From a light measurement to a compliance number, and where a dust-only monitor stops</title>
<desc id="g1d">A vertical chain. The transmissometer measures extinction and opacity; the control unit applies the calibration coefficients cc0, cc1 and cc2 to output dust in milligrams per cubic metre at actual stack conditions. A dust-only installation stops there. Three further steps are needed to reach a compliance number: correct to standard temperature and pressure, which needs stack temperature and pressure; convert to a dry basis, which needs a moisture measurement; and normalise to the 12 percent carbon dioxide reference, which needs a CO2 analyser. The result is milligrams per cubic metre at STP, dry and 12 percent CO2, which is the basis the 150 limit is compared on.</desc>
<!-- box 1 -->
<rect x="150" y="16" width="300" height="48" rx="9" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="2"/>
<text x="300" y="38" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Transmissometer measures light</text>
<text x="300" y="54" text-anchor="middle" font-size="10" fill="var(--muted)">transmission · opacity · extinction</text>
<line x1="300" y1="64" x2="300" y2="84" stroke="var(--grey)" stroke-width="1.5"/>
<path d="M300 84 L295 74 L305 74 Z" fill="var(--grey)"/>
<!-- box 2 -->
<rect x="150" y="84" width="300" height="56" rx="9" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="2"/>
<text x="300" y="106" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Control unit applies cc0 / cc1 / cc2</text>
<text x="300" y="123" text-anchor="middle" font-size="11" fill="var(--green-d)" font-weight="700">Dust mg/m³ — at actual stack conditions</text>
<text x="300" y="135" text-anchor="middle" font-size="9" fill="var(--muted)">calibrated, traceable — but not yet referenced</text>
<rect x="470" y="92" width="96" height="40" rx="6" fill="var(--white)" stroke="var(--green-d)" stroke-width="1.5"/>
<text x="518" y="109" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--green-d)">INSTALLED</text>
<text x="518" y="122" text-anchor="middle" font-size="8.5" fill="var(--muted)">transmissometer only</text>
<!-- cutoff -->
<line x1="30" y1="162" x2="650" y2="162" stroke="#C0392B" stroke-width="2" stroke-dasharray="6 5"/>
<text x="340" y="178" text-anchor="middle" font-size="11" font-weight="700" fill="#C0392B">A dust-only monitor stops here — everything below needs more sensors</text>
<line x1="300" y1="140" x2="300" y2="196" stroke="var(--grey)" stroke-width="1.5"/>
<path d="M300 196 L295 186 L305 186 Z" fill="var(--grey)"/>
<!-- box 3 STP -->
<rect x="150" y="196" width="300" height="52" rx="9" fill="var(--white)" stroke="var(--muted)" stroke-width="1.6" stroke-dasharray="5 4"/>
<text x="300" y="217" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Correct to STP</text>
<text x="300" y="234" text-anchor="middle" font-size="10" fill="var(--muted)">273 K · 101.3 kPa</text>
<rect x="470" y="203" width="150" height="38" rx="6" fill="var(--light)" stroke="var(--line)" stroke-width="1.2"/>
<text x="545" y="220" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--grey)">needs: temperature</text>
<text x="545" y="233" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--grey)">+ pressure</text>
<line x1="300" y1="248" x2="300" y2="272" stroke="var(--grey)" stroke-width="1.5"/>
<path d="M300 272 L295 262 L305 262 Z" fill="var(--grey)"/>
<!-- box 4 dry -->
<rect x="150" y="272" width="300" height="52" rx="9" fill="var(--white)" stroke="var(--muted)" stroke-width="1.6" stroke-dasharray="5 4"/>
<text x="300" y="293" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Convert to a dry basis</text>
<text x="300" y="310" text-anchor="middle" font-size="10" fill="var(--muted)">remove the water-vapour dilution</text>
<rect x="470" y="279" width="150" height="38" rx="6" fill="var(--light)" stroke="var(--line)" stroke-width="1.2"/>
<text x="545" y="303" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--grey)">needs: moisture (H₂O)</text>
<line x1="300" y1="324" x2="300" y2="348" stroke="var(--grey)" stroke-width="1.5"/>
<path d="M300 348 L295 338 L305 338 Z" fill="var(--grey)"/>
<!-- box 5 CO2 -->
<rect x="150" y="348" width="300" height="52" rx="9" fill="var(--white)" stroke="var(--muted)" stroke-width="1.6" stroke-dasharray="5 4"/>
<text x="300" y="369" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Normalise to 12% CO₂</text>
<text x="300" y="386" text-anchor="middle" font-size="10" fill="var(--muted)">the Second-Schedule reference</text>
<rect x="470" y="355" width="150" height="38" rx="6" fill="var(--light)" stroke="var(--line)" stroke-width="1.2"/>
<text x="545" y="379" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--grey)">needs: CO₂ analyser</text>
<line x1="300" y1="400" x2="300" y2="424" stroke="var(--grey)" stroke-width="1.5"/>
<path d="M300 424 L295 414 L305 414 Z" fill="var(--grey)"/>
<!-- box 6 compliance -->
<rect x="120" y="424" width="360" height="64" rx="9" fill="var(--white)" stroke="var(--ink)" stroke-width="2"/>
<text x="300" y="447" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--ink)">Compliance number</text>
<text x="300" y="465" text-anchor="middle" font-size="11" fill="var(--ink)">mg/m³ at STP · dry · 12% CO₂</text>
<text x="300" y="481" text-anchor="middle" font-size="10.5" fill="var(--muted)">compared against ELV <tspan fill="var(--green-d)" font-weight="700">150 mg/m³</tspan></text>
</svg>
<figcaption>The control unit's output is honest dust at actual conditions. Three correction and normalisation steps — each needing its own measurement — turn it into the number the 150 mg/m³ limit is written against. A dust monitor alone cannot take those steps.</figcaption>
</figure>

## The sensors that do the correcting

The correction is not something the dust monitor's control unit does, and never was. Under the Guidelines, converting the reading to STP, drying it, and referencing it to 12% CO₂ is a **data-acquisition** function — the job of the data-acquisition and handling system (DAHS), which would take the dust reading and combine it with live gas measurements. On a dust-only mill that stage has nothing to work with — and, in practice, is usually not even present — because the sensors that feed it were never installed.

Four measurements are involved. Temperature and pressure bring the gas to STP; a modern in-situ dust monitor can usually supply these itself. The two that a dust-only mill is genuinely missing are **moisture** (to reach a dry basis) and **CO₂** (to reach the 12% reference). Those are the additions that actually move the number.

<figure class="fig">
<p class="fig-title">What a compliant TPM CEMS carries — and what a dust-only mill is missing</p>
<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="g2t g2d" font-family="'Helvetica Neue',Helvetica,Arial,sans-serif">
<title id="g2t">The sensor stack for a compliant TPM CEMS</title>
<desc id="g2d">On the stack: a dust monitor, which is installed, shown in green; and three peripheral measurements — temperature and pressure, moisture, and CO2 — shown dashed and grey as missing on a dust-only mill. All feed a data-acquisition and handling system, the DAHS, which produces the normalised compliance value transmitted to DOE. Without the peripherals the DAHS can only pass through the dust reading at actual conditions.</desc>
<text x="120" y="26" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">At the stack</text>
<!-- dust monitor installed -->
<rect x="30" y="40" width="180" height="42" rx="8" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="2"/>
<text x="120" y="58" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Transmissometer</text>
<text x="120" y="72" text-anchor="middle" font-size="9" fill="var(--green-d)" font-weight="700">dust monitor · installed</text>
<!-- peripherals missing -->
<rect x="30" y="96" width="180" height="34" rx="8" fill="var(--white)" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="5 4"/>
<text x="120" y="117" text-anchor="middle" font-size="10.5" fill="var(--muted)">Temperature + pressure</text>
<rect x="30" y="140" width="180" height="34" rx="8" fill="var(--white)" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="5 4"/>
<text x="120" y="161" text-anchor="middle" font-size="10.5" fill="var(--muted)">Moisture (H₂O)</text>
<rect x="30" y="184" width="180" height="34" rx="8" fill="var(--white)" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="5 4"/>
<text x="120" y="205" text-anchor="middle" font-size="10.5" fill="var(--muted)">CO₂ analyser</text>
<text x="120" y="242" text-anchor="middle" font-size="9.5" fill="#C0392B" font-weight="700">dashed = missing on a</text>
<text x="120" y="256" text-anchor="middle" font-size="9.5" fill="#C0392B" font-weight="700">dust-only installation</text>
<!-- arrows to DAHS -->
<line x1="210" y1="61" x2="330" y2="120" stroke="var(--green-d)" stroke-width="2"/>
<line x1="210" y1="113" x2="330" y2="130" stroke="var(--muted)" stroke-width="1.3" stroke-dasharray="4 3"/>
<line x1="210" y1="157" x2="330" y2="145" stroke="var(--muted)" stroke-width="1.3" stroke-dasharray="4 3"/>
<line x1="210" y1="201" x2="330" y2="160" stroke="var(--muted)" stroke-width="1.3" stroke-dasharray="4 3"/>
<!-- DAHS -->
<rect x="330" y="104" width="150" height="80" rx="10" fill="var(--light)" stroke="var(--ink)" stroke-width="1.8"/>
<text x="405" y="134" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">DAHS</text>
<text x="405" y="150" text-anchor="middle" font-size="9" fill="var(--muted)">applies STP · dry ·</text>
<text x="405" y="162" text-anchor="middle" font-size="9" fill="var(--muted)">12% CO₂ correction</text>
<!-- output -->
<line x1="480" y1="144" x2="520" y2="144" stroke="var(--ink)" stroke-width="1.8"/>
<path d="M520 144 L510 139 L510 149 Z" fill="var(--ink)"/>
<rect x="520" y="112" width="140" height="64" rx="10" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="2"/>
<text x="590" y="138" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Compliance value</text>
<text x="590" y="153" text-anchor="middle" font-size="9" fill="var(--muted)">to DOE's CEMS system</text>
<text x="590" y="166" text-anchor="middle" font-size="9" fill="var(--muted)">every minute</text>
</svg>
<figcaption>Normalisation lives in the DAHS, not the dust monitor. Feed it the peripherals and it outputs a referenced compliance value; starve it of them — or leave it out entirely, as most mills do — and the best that reaches DOE is the dust reading at actual conditions.</figcaption>
</figure>

There is a tempting shortcut worth naming so nobody takes it: fitting the control unit's cc0/cc1/cc2 against *standardised* sampling instead, so the monitor appears to output a "12% CO₂" number with no peripherals at all. That does not measure anything — it bakes the average CO₂ and moisture of the calibration day into the coefficients, freezes them there, and lets them drift as the boiler's excess air and fuel wetness change through the season. Worse, it hides the assumption inside the sensor's output, where there is no separate raw record to check it against. The honest calibration and the correct engineering are the same choice here: let the monitor output real dust at measured conditions, and do the normalisation downstream where it can be seen.

## Why the annual test passes anyway — and why that is the trap

Here is where mill operators often expect trouble that does not come, and miss the trouble that does. If the installation cannot normalise, surely the [QAL2 calibration]({{ '/insights/calibrating-transmissometer-dust-cems-dusthunter-t100/' | relative_url }}) and the Annual Surveillance Test (AST) — which compare the CEMS against fresh reference sampling — must fail?

They do not, and the reason is instructive — and worth being precise about, because none of this is a DOE peculiarity. The QAL2 and AST procedure is **EN 14181**, the international standard the DOE Guidelines implement, and the reference sampling it is measured against is the gravimetric method of **ISO 9096** (aligned in Malaysia as MS 1596). During any QAL2 or AST campaign the reference tester brings a full set of portable instruments and measures the stack's temperature, pressure, moisture and CO₂ for every run — EN 14181 requires it. Those readings describe the stack gas, which the CEMS is looking at simultaneously, so the *same* figures are used to standardise both sides. And the calibration function itself, by EN 14181's method, is fitted with the reference values converted to the monitor's actual measuring conditions — not standardised — so the coefficients are legitimate regardless. The variability and acceptance tests then run on standardised values on both sides.

<figure class="fig">
<p class="fig-title">Two bases in one test — calibrate at stack conditions, judge on the referenced basis</p>
<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="g3t g3d" font-family="'Helvetica Neue',Helvetica,Arial,sans-serif">
<title id="g3t">QAL2 and AST use two bases</title>
<desc id="g3d">Left panel: the calibration function, coefficients cc0, cc1 and cc2, is fitted from the raw monitor signal against reference sampling expressed at actual stack conditions. Right panel: the variability and acceptance tests, and the comparison against the emission limit, are done on standardised values, both the CEMS and the reference sampling corrected to STP, dry and the reference gas.</desc>
<rect x="20" y="30" width="310" height="190" rx="12" fill="var(--white)" stroke="var(--line)" stroke-width="1.5"/>
<text x="175" y="54" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Calibration function fitted here</text>
<text x="175" y="72" text-anchor="middle" font-size="10" fill="var(--muted)">cc0 / cc1 / cc2</text>
<rect x="60" y="88" width="230" height="30" rx="6" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="1.5"/>
<text x="175" y="107" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">at ACTUAL stack conditions</text>
<text x="175" y="140" text-anchor="middle" font-size="10" fill="var(--muted)">raw monitor signal  vs</text>
<text x="175" y="156" text-anchor="middle" font-size="10" fill="var(--muted)">reference sampling at stack conditions</text>
<text x="175" y="188" text-anchor="middle" font-size="9.5" fill="var(--green-d)" font-weight="700">the control unit's number lives here</text>
<text x="175" y="204" text-anchor="middle" font-size="9" fill="var(--muted)">EN 14181 · Guidelines A4.6 / A4.9</text>
<text x="340" y="130" text-anchor="middle" font-size="16" fill="var(--muted)">→</text>
<rect x="350" y="30" width="310" height="190" rx="12" fill="var(--white)" stroke="var(--line)" stroke-width="1.5"/>
<text x="505" y="54" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Variability &amp; ELV test here</text>
<text x="505" y="72" text-anchor="middle" font-size="10" fill="var(--muted)">the pass / fail decision</text>
<rect x="390" y="88" width="230" height="30" rx="6" fill="var(--light)" stroke="var(--ink)" stroke-width="1.5"/>
<text x="505" y="107" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">on STANDARDISED values</text>
<text x="505" y="140" text-anchor="middle" font-size="10" fill="var(--muted)">CEMS and reference both</text>
<text x="505" y="156" text-anchor="middle" font-size="10" fill="var(--muted)">corrected to STP · dry · 12% CO₂</text>
<text x="505" y="188" text-anchor="middle" font-size="9.5" fill="var(--ink)" font-weight="700">tramlines drawn at the ELV</text>
<text x="505" y="204" text-anchor="middle" font-size="9" fill="var(--muted)">EN 14181 · Guidelines A4.10–A4.12</text>
</svg>
<figcaption>The calibration is built at stack conditions; the pass/fail is judged on the referenced basis. On test day the tester's own instruments supply the correction — which is exactly why a dust-only mill can still pass.</figcaption>
</figure>

Now the subtle part. Because the same correction factor is applied to the CEMS value and the reference value — they are the same gas at the same moment — the normalisation scales both together and preserves their agreement. A monitor that tracks the reference well at stack conditions tracks it just as well after both are standardised. Normalisation cannot make a well-calibrated instrument fail. **So the dust-only CEMS passes QAL2 and passes AST.**

And that is the trap, because passing is not the same as reporting correctly. The tester plugs the sensor gap for one day and leaves. The other 364 days, with no CO₂ and no moisture on the stack, the DAHS — where there is one — has nothing to normalise with, and the value transmitted to [DOE's CEMS system]({{ '/insights/doe-iremote-cems-data-transmission-explained/' | relative_url }}) every minute is dust at actual conditions — compared, at DOE's end, against a limit written at 12% CO₂. The annual test certifies a referenced measurement the installation only assembles on test day.

<figure class="fig">
<p class="fig-title">The inversion: the test passes, the daily data does not</p>
<svg viewBox="0 0 680 168" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="g4t g4d" font-family="'Helvetica Neue',Helvetica,Arial,sans-serif">
<title id="g4t">A dust-only CEMS passes the annual test but transmits off-basis daily data</title>
<desc id="g4d">Left: on test day, the reference tester supplies temperature, pressure, moisture and CO2, both sides are standardised, and the CEMS passes QAL2 and AST. Right: every other day there is no CO2 and no moisture on the stack, so the data sent to DOE is dust at actual conditions compared against a limit set at 12 percent CO2 — off basis.</desc>
<rect x="20" y="24" width="310" height="126" rx="12" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="2"/>
<text x="175" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">On test day ✓</text>
<text x="175" y="74" text-anchor="middle" font-size="10.5" fill="var(--ink)">Tester supplies T, P, moisture, CO₂</text>
<text x="175" y="93" text-anchor="middle" font-size="10.5" fill="var(--ink)">Both sides standardised</text>
<text x="175" y="120" text-anchor="middle" font-size="12" font-weight="700" fill="var(--green-d)">QAL2 &amp; AST PASS</text>
<text x="175" y="138" text-anchor="middle" font-size="9" fill="var(--muted)">the instrument is genuinely fine</text>
<rect x="350" y="24" width="310" height="126" rx="12" fill="var(--white)" stroke="#C0392B" stroke-width="2"/>
<text x="505" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Every other day ✗</text>
<text x="505" y="74" text-anchor="middle" font-size="10.5" fill="var(--ink)">No CO₂, no moisture on the stack</text>
<text x="505" y="93" text-anchor="middle" font-size="10.5" fill="var(--ink)">Data sent at actual conditions</text>
<text x="505" y="120" text-anchor="middle" font-size="12" font-weight="700" fill="#C0392B">OFF THE ELV BASIS</text>
<text x="505" y="138" text-anchor="middle" font-size="9" fill="var(--muted)">judged against a 12% CO₂ limit</text>
</svg>
<figcaption>The problem was never a failing test. It is the reverse: the test passes while the everyday data going to DOE is not on the basis the limit is written against.</figcaption>
</figure>

## What this means for a mill

First, check which regime the stack is even in. The continuous-CEMS obligation is triggered when the boiler's [dust load reaches 2.5 kg/h]({{ '/insights/biomass-boiler-cems-which-industries-need-one/' | relative_url }}) — a figure read off the stack-test certificate as concentration times flow, not a desk estimate. If Total Particulate Matter for that specific premise is periodic-only under its licence, there is no continuous calibration to maintain and no permanent peripherals are needed: each periodic isokinetic test measures and corrects its own result on the day. The four-sensor question only bites where continuous monitoring applies.

Where it does apply, the honest position is straightforward, and it is two claims kept firmly apart. The calibration can be stated with full confidence: the monitor's cc0/cc1/cc2 are properly derived and traceable to corrected, normalised reference sampling. What cannot yet be claimed is that the daily reported value is on the 12% CO₂ basis — that waits on live CO₂ and moisture measurement feeding the DAHS. A referenced instrument on paper and a referenced number every minute are different things, and only the sensors close the gap between them.

So the case for adding a QAL1-certified CO₂ analyser and a moisture measurement is not about passing the annual test — a dust-only mill already does. It is about making the everyday number mean what the annual test certifies, and what the limit assumes. That is the difference between a monitor that looks compliant once a year and a CEMS that reports compliantly every minute. It is, in the end, the whole point of continuous monitoring.

If you are running a dust-only transmissometer on a biomass boiler and are not sure which side of this line you are on, [talk to us]({{ '/' | relative_url }}#contact) — establishing the correct correction chain, and the sensors it needs, is core to what we do.

<div class="related">
  <p class="label">Related insights</p>
  <ul>
    <li><a href="{{ '/insights/calibrating-transmissometer-dust-cems-dusthunter-t100/' | relative_url }}">Calibrating a transmissometer dust CEMS: from light beam to legal mg/m³</a></li>
    <li><a href="{{ '/insights/biomass-boiler-cems-which-industries-need-one/' | relative_url }}">Which biomass boilers need a CEMS — and the 2.5 kg/h dust-load trigger</a></li>
    <li><a href="{{ '/insights/doe-iremote-cems-data-transmission-explained/' | relative_url }}">How CEMS data reaches DOE: iRemote and the data interface system</a></li>
  </ul>
</div>

<div class="related">
  <p class="label">References</p>
  <ul>
    <li><a href="https://www.doe.gov.my/wp-content/uploads/2025/12/SERIES-OF-CEMS_V12_final_interactive.pdf" target="_blank" rel="noopener">CEMS Guidelines, Volumes I &amp; II (Version 8, 2025)</a> — Department of Environment Malaysia</li>
    <li><a href="https://www.doe.gov.my/en/environmental-quality-clean-air-regulations-2014/" target="_blank" rel="noopener">Environmental Quality (Clean Air) Regulations 2014 [P.U.(A) 151]</a> — Department of Environment Malaysia</li>
    <li><a href="https://www.iso.org/standard/70547.html" target="_blank" rel="noopener">ISO 9096:2017 — Manual determination of mass concentration of particulate matter</a> — International Organization for Standardization</li>
    <li><a href="https://www.qal1.de/en/main-navigation/certificates/" target="_blank" rel="noopener">QAL1 certified measuring systems (EN 15267)</a> — TÜV Rheinland</li>
  </ul>
</div>

---

*This article explains how the DOE CEMS Guidelines and the Clean Air Regulations 2014 treat correction and normalisation of dust data. It is general guidance, not a substitute for your stack's licence conditions or a DOE-registered CEMS tester's assessment of your installation.*
