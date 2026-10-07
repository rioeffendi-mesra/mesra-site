---
layout: post
title: "Daily CEMS check: a one-page SOP for plant operators"
full_title: "Daily CEMS Check SOP for Plant Operators (DAHS, AMS, DOE Portal) | Mesra"
date: 2026-10-07 00:05:00
description: "A one-page daily SOP for CEMS operators: check the DAHS, the T100 opacity monitor and the DOE CEMS portal in 15 minutes, with the exact DOE notification deadlines under CAR 2014 and the EQA 1974."
---

*A one-page daily routine for plant operators: three short checks, about 15 minutes in total, to confirm your CEMS is measuring, recording and reporting to the Department of Environment. Written for our SICK DustHunter T100 opacity installations, and free for you to print and use.*

A CEMS that is powered on is not the same as a CEMS that is doing its job. The instrument can drift, the data logger can stop recording, or the data can silently stop reaching DOE, and the first anyone hears of it is a gap in the record. Under the Environmental Quality (Clean Air) Regulations 2014, [a failed monitoring device has to be reported within one hour]({{ '/insights/cems-notification-rules-excess-emission-cems-failure/' | relative_url }}), so a problem found on the day is far cheaper than one found at the next audit.

The routine below splits the CEMS into the three places a fault can hide: the **DAHS** (the data acquisition and handling system, the cabinet and touch screen), the **AMS** (the automated measuring system, here the T100 opacity monitor on the stack), and the **DOE CEMS portal** (cems.doe.gov.my, what DOE officers actually see).

## Before you start

**Who:** the plant operator or shift supervisor on duty. **When:** once a day at the same time, and again after any power cut, network outage or boiler restart. You only look and record. Never reboot, reset, re-configure or clean anything unless Mesra tells you to.

Mark every line with one of three results:

- **OK**: the reading matches the Normal column.
- **ACT**: outside Normal. Do the action in the last column, then check again.
- **REPORT**: still wrong after the action, or marked REPORT. Report at once, because the legal notice period for a failed monitoring device is 1 hour. Take a photo or screenshot, tell your supervisor and Mesra, and follow *When something is wrong* below.

## Part A: Data Acquisition and Handling System (DAHS)

The DAHS is the cabinet and touch screen that record the analyser output and send it to DOE. A DAHS that is powered but not logging or not sending is still a failure.

<figure class="fig report">
<p class="fig-title">Part A: eight DAHS checks</p>
<div class="rep-rows">
<div class="rep-row"><span class="rep-k">A1</span><span class="rep-body"><span class="rep-name">Cabinet and touch screen</span><span class="rep-desc"><strong>Normal:</strong> Screen is on and values change every minute. Door closed, no dust, water or burnt smell. <strong>If not normal:</strong> Screen frozen or blank: ACT, check the UPS and mains switch, do not reboot. Still frozen or blank: REPORT at once.</span></span></div>
<div class="rep-row"><span class="rep-k">A2</span><span class="rep-body"><span class="rep-name">Power and UPS</span><span class="rep-desc"><strong>Normal:</strong> UPS runs on mains with no beep or alarm LED. Breakers (RCCB, MCB) are up. <strong>If not normal:</strong> On battery or beeping: ACT, tell the electrician, find the mains fault. Cabinet off: REPORT.</span></span></div>
<div class="rep-row"><span class="rep-k">A3</span><span class="rep-body"><span class="rep-name">Date and time</span><span class="rep-desc"><strong>Normal:</strong> DAHS clock matches your wall clock (Malaysia time) within 1 minute. <strong>If not normal:</strong> Wrong clock: REPORT. A wrong clock puts data at the wrong time at DOE.</span></span></div>
<div class="rep-row"><span class="rep-k">A4</span><span class="rep-body"><span class="rep-name">Live readings</span><span class="rep-desc"><strong>Normal:</strong> Opacity (%) is shown with a current time stamp. Values are plausible for the boiler state. <strong>If not normal:</strong> Value frozen at one number, reads 0 while the boiler runs, or reads 100 with the boiler off: REPORT.</span></span></div>
<div class="rep-row"><span class="rep-k">A5</span><span class="rep-body"><span class="rep-name">Averages and gaps</span><span class="rep-desc"><strong>Normal:</strong> Half-hour and daily averages are shown. No blank periods in yesterday's trend. <strong>If not normal:</strong> Gap found: note the start and end time, find the cause (power, network, boiler off), REPORT if the cause is unknown.</span></span></div>
<div class="rep-row"><span class="rep-k">A6</span><span class="rep-body"><span class="rep-name">Alarm screen</span><span class="rep-desc"><strong>Normal:</strong> No open calibration-failure, fault or excess-emission alarm. <strong>If not normal:</strong> Alarm open: copy the wording and time, REPORT. Do not clear it.</span></span></div>
<div class="rep-row"><span class="rep-k">A7</span><span class="rep-body"><span class="rep-name">Network link</span><span class="rep-desc"><strong>Normal:</strong> Router and wireless radio LEDs are lit and steady. <strong>If not normal:</strong> Dark or red: ACT, check their power, do not change settings. Still down: REPORT.</span></span></div>
<div class="rep-row"><span class="rep-k">A8</span><span class="rep-body"><span class="rep-name">CEMS agent</span><span class="rep-desc"><strong>Normal:</strong> Agent shows running, Connected, and Last upload is moving forward during the day. DOE expects one reading every minute. <strong>If not normal:</strong> Last upload not moving, or readings missing: REPORT at once. Missing minutes are a gap in the DOE record, and a half-hour average needs at least 22 valid readings (DOE CEMS Guidelines 2.3.1).</span></span></div>
</div>
<figcaption>The DAHS records, averages and sends the data. Check it first.</figcaption>
</figure>

Not part of the daily check: Raspberry Pi power health, disk space, backups and software versions. Mesra checks these at the quarterly preventive-maintenance visit.

## Part B: Automated Measuring System (AMS)

This part covers the SICK DustHunter T100 opacity monitor on the boiler stack: the sender/receiver unit, the reflector and the MCU control unit. Check the MCU display and the DAHS readings from the ground. **Do not climb the stack for the daily check.**

<figure class="fig report">
<p class="fig-title">Part B: eight T100 checks</p>
<div class="rep-rows">
<div class="rep-row"><span class="rep-k">B1</span><span class="rep-body"><span class="rep-name">MCU display</span><span class="rep-desc"><strong>Normal:</strong> Shows measurement mode with no error and no warning. <strong>If not normal:</strong> Any error or warning: copy the wording and time, REPORT.</span></span></div>
<div class="rep-row"><span class="rep-k">B2</span><span class="rep-body"><span class="rep-name">Maintenance mode</span><span class="rep-desc"><strong>Normal:</strong> Not in Maintenance. After any service visit, confirm it was switched back to Measurement. <strong>If not normal:</strong> Still in Maintenance: REPORT at once. Readings are not valid in this mode.</span></span></div>
<div class="rep-row"><span class="rep-k">B3</span><span class="rep-body"><span class="rep-name">Reading against the boiler</span><span class="rep-desc"><strong>Normal:</strong> Boiler running: opacity is a real, varying value. Boiler off: reading falls to about 0%. <strong>If not normal:</strong> Flat 100% with the boiler off, or flat 0% with visible smoke: REPORT.</span></span></div>
<div class="rep-row"><span class="rep-k">B4</span><span class="rep-body"><span class="rep-name">Emission against the limit</span><span class="rep-desc"><strong>Normal:</strong> One-minute opacity stays at or below 20% (Regulation 12, Clean Air Regulations 2014), or the lower value in your DOE licence. <strong>If not normal:</strong> Above the limit: tell your supervisor now and go to <em>When something is wrong</em>.</span></span></div>
<div class="rep-row"><span class="rep-k">B5</span><span class="rep-body"><span class="rep-name">Automatic control cycle</span><span class="rep-desc"><strong>Normal:</strong> A control cycle runs about every 8 hours and shows as a short dip in the trend. Zero reads 0% (4 mA) and span reads 70% (15.2 mA), each within 3% of the baseline. <strong>If not normal:</strong> No dip in 8 hours, or zero or span more than 3% off: REPORT. Do not adjust anything.</span></span></div>
<div class="rep-row"><span class="rep-k">B6</span><span class="rep-body"><span class="rep-name">Contamination (dirty optics)</span><span class="rep-desc"><strong>Normal:</strong> The warning limit is 20% and the failure limit is 30%. If the DAHS or MCU shows contamination, it is below 20%. <strong>If not normal:</strong> At 20% or above: REPORT. Mesra or a trained technician cleans the optics.</span></span></div>
<div class="rep-row"><span class="rep-k">B7</span><span class="rep-body"><span class="rep-name">Purge air</span><span class="rep-desc"><strong>Normal:</strong> The purge-air blower runs and you hear air flow. Hoses and clamps are intact, and the filter cover is closed. <strong>If not normal:</strong> Blower stopped or hose off: REPORT at once. Dust will foul the optics fast.</span></span></div>
<div class="rep-row"><span class="rep-k">B8</span><span class="rep-body"><span class="rep-name">Housing and cables</span><span class="rep-desc"><strong>Normal:</strong> Sender/receiver and reflector covers are closed. No loose or damaged cable you can see from the ground. <strong>If not normal:</strong> Damage or open cover: REPORT.</span></span></div>
</div>
<figcaption>Look and record only. The 3% tolerance is the control limit we use in our QAL3 drift charts.</figcaption>
</figure>

## Part C: DOE CEMS portal (cems.doe.gov.my)

The portal is what DOE officers see. Log in from any office computer with your premise account and confirm the data from your stack is arriving. Compare it with the DAHS reading you just checked.

<figure class="fig report">
<p class="fig-title">Part C: six portal checks</p>
<div class="rep-rows">
<div class="rep-row"><span class="rep-k">C1</span><span class="rep-body"><span class="rep-name">Log in</span><span class="rep-desc"><strong>Normal:</strong> Your premise account opens. The customer keeps the login working. <strong>If not normal:</strong> Cannot log in: the customer asks DOE to restore access the same day, because Part C cannot be done without it. This is not a CEMS fault.</span></span></div>
<div class="rep-row"><span class="rep-k">C2</span><span class="rep-body"><span class="rep-name">Premise and stack</span><span class="rep-desc"><strong>Normal:</strong> Premise name is current, and every stack in your licence is listed. <strong>If not normal:</strong> Old company name, or a stack missing: REPORT to Mesra with a screenshot.</span></span></div>
<div class="rep-row"><span class="rep-k">C3</span><span class="rep-body"><span class="rep-name">Latest data time</span><span class="rep-desc"><strong>Normal:</strong> The newest reading on the portal has the same time and value as the latest reading on the DAHS. <strong>If not normal:</strong> Portal behind the DAHS: REPORT at once. Data is not reaching DOE.</span></span></div>
<div class="rep-row"><span class="rep-k">C4</span><span class="rep-body"><span class="rep-name">Match with DAHS</span><span class="rep-desc"><strong>Normal:</strong> The portal value for the same time is close to the DAHS value. <strong>If not normal:</strong> Large difference, or portal flat while the DAHS varies: REPORT with both screenshots.</span></span></div>
<div class="rep-row"><span class="rep-k">C5</span><span class="rep-body"><span class="rep-name">Gaps in yesterday's graph</span><span class="rep-desc"><strong>Normal:</strong> Graph is continuous across the whole day the boiler ran. <strong>If not normal:</strong> Gap: write the start and end times and compare with the A5 gap. REPORT if the DAHS has no gap.</span></span></div>
<div class="rep-row"><span class="rep-k">C6</span><span class="rep-body"><span class="rep-name">Alerts and notices</span><span class="rep-desc"><strong>Normal:</strong> No excess-emission alert. No reminder or notice from DOE that you have not acted on. <strong>If not normal:</strong> Alert shown: go to <em>When something is wrong</em>. Notice from DOE: pass it to your supervisor and Mesra.</span></span></div>
</div>
<figcaption>A healthy DAHS with an empty portal is a case we see often, which is why this part exists.</figcaption>
</figure>

## When something is wrong

The owner or occupier of the premises carries the legal duty to notify DOE. Mesra helps you find and fix the fault. The deadlines below run from the moment of failure or discovery, not from when the paperwork is ready.

<figure class="fig report">
<p class="fig-title">Who to notify, and by when</p>
<div class="rep-rows">
<div class="rep-row"><span class="rep-k">1</span><span class="rep-body"><span class="rep-name">CEMS or any monitoring device fails to operate</span><span class="rep-desc"><strong>Notify:</strong> the Director General of DOE, through the state or branch DOE office, on the CEMS Failure form (Appendix 4 of the DOE CEMS Guidelines). <strong>Deadline:</strong> not later than 1 hour from the failure (Regulation 17(7), Clean Air Regulations 2014; Guidelines 6.2.4).</span></span></div>
<div class="rep-row"><span class="rep-k">2</span><span class="rep-body"><span class="rep-name">CEMS data fails to reach the DOE server</span><span class="rep-desc"><strong>Notify:</strong> DOE through the state or branch office, on the Appendix 4 form (Guidelines 6.2.6(e)). <strong>Deadline:</strong> the Guidelines give no time limit. Mesra advises treating it as a CEMS failure and notifying within 1 hour.</span></span></div>
<div class="rep-row"><span class="rep-k">3</span><span class="rep-body"><span class="rep-name">Emissions exceed a prescribed limit value</span><span class="rep-desc"><strong>Notify:</strong> the Director General, through the state or branch DOE office, on the Excess Emission form (Appendix 4). <strong>Deadline:</strong> within 24 hours from discovery (Regulation 17(6); Guidelines 6.2.3). The limit for opacity is 20% on a 1-minute average (Regulation 12). The Guidelines describe an excess as a half-hour average above 2 times the limit value, or a daily average above the limit value.</span></span></div>
<div class="rep-row"><span class="rep-k">4</span><span class="rep-body"><span class="rep-name">CEMS shutdown for scheduled maintenance or a change of parts, or the source stops operating</span><span class="rep-desc"><strong>Notify:</strong> DOE through the state or branch office, on the Appendix 4 form (Guidelines 6.2.5). <strong>Deadline:</strong> the Guidelines give no time limit. Mesra advises notifying before the shutdown starts.</span></span></div>
<div class="rep-row"><span class="rep-k">5</span><span class="rep-body"><span class="rep-name">The air pollution control system (for example the scrubber or dust filter) fails</span><span class="rep-desc"><strong>Notify:</strong> the Director General, through the state or branch DOE office, on the Appendix 4 form. <strong>Deadline:</strong> not later than 1 hour from the failure (Regulation 8).</span></span></div>
<div class="rep-row"><span class="rep-k">6</span><span class="rep-body"><span class="rep-name">Accidental emission at the premises</span><span class="rep-desc"><strong>Notify:</strong> the Director General. <strong>Deadline:</strong> immediately upon discovery (Regulation 21(1)).</span></span></div>
</div>
<figcaption>Regulation numbers are from the Environmental Quality (Clean Air) Regulations 2014; clause numbers are from the DOE CEMS Guidelines Version 8.</figcaption>
</figure>

One point to be aware of: Regulation 17(3) says no half-hour average may exceed the standard "more than two times", while the DOE Guidelines read this as 2 times the limit value. Regulation 17(6) requires notice whenever emissions exceed the prescribed limit values. If you are unsure whether an event needs a notice, notify. Your DOE officer can confirm which trigger applies to your licence.

When you contact Mesra at help@alamsekitar.com.my, send:

1. Premise name, stack number and your name and phone number.
2. The check number that failed (for example A8 or C3) and the time you found it.
3. A photo of the MCU display and a screenshot of the DAHS screen, the CEMS agent status and the portal graph.
4. Whether the boiler was running, and any power cut or network outage that day.

**Keep records.** Keep these daily sheets, the notices and the logbook for at least 3 years, and have them ready for inspection (Regulations 10(2) and 17(5); Guidelines 6.1.3).

Other DOE deadlines, not part of the daily check:

- Yearly CEMS evaluation results: within 3 months after the end of each calendar year (Regulation 17(5); Guidelines 6.2.2, Appendix 3 form).
- Functional Test Audit Report and CVT or AST report: not later than 2 calendar months after the audit is completed (Guidelines 6.2.1).

**Why the deadlines matter.** Failing to comply with the Clean Air Regulations 2014 is an offence, with a fine of up to RM100,000 or imprisonment of up to 2 years, or both (Regulation 29). Under the Environmental Quality Act 1974, as amended by Act A1712 (2024), an emission that breaches the acceptable conditions under section 21 carries a fine of RM10,000 to RM1,000,000, or imprisonment of up to 5 years, or both, plus up to RM1,000 for each day it continues after DOE serves a notice (section 22(3)). A licence holder who breaks the terms or conditions of the licence faces a fine of RM25,000 to RM250,000, or imprisonment of up to 5 years, or both, plus RM1,000 for each day after DOE serves a notice (section 16(2)). Directors and managers of a company can be held liable unless they prove they did not consent and took all due diligence (section 43). More in [offences and penalties under the Clean Air Regulations and the EQA]({{ '/insights/offences-penalties-clean-air-regulations-eqa-1974/' | relative_url }}).

## Daily record sheet

Tick OK, or write ACT or REPORT with the check number. Print this page, or copy the table into your logbook.

<div class="sheet-wrap" style="overflow-x:auto">
<table style="width:100%;border-collapse:collapse;font-size:.85rem">
<thead><tr><th style="border:1px solid var(--line);padding:6px 8px;text-align:left">Date</th><th style="border:1px solid var(--line);padding:6px 8px;text-align:left">Time</th><th style="border:1px solid var(--line);padding:6px 8px;text-align:left">A. DAHS</th><th style="border:1px solid var(--line);padding:6px 8px;text-align:left">B. AMS</th><th style="border:1px solid var(--line);padding:6px 8px;text-align:left">C. DOE portal</th><th style="border:1px solid var(--line);padding:6px 8px;text-align:left">Initials</th><th style="border:1px solid var(--line);padding:6px 8px;text-align:left">Remarks and action taken</th></tr></thead>
<tbody>
<tr><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td></tr>
<tr><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td></tr>
<tr><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td></tr>
<tr><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td></tr>
<tr><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td></tr>
</tbody>
</table>
</div>

## Where this fits

The daily check is the operator's layer of the [QAL3 ongoing performance monitoring]({{ '/insights/qal3-ongoing-performance-monitoring-drift-control/' | relative_url }}) that keeps a calibrated CEMS valid between campaigns. It does not replace the zero-and-span work done by a technician ([how that is done on a T100]({{ '/insights/dusthunter-t100-zeroing-alignment-procedure/' | relative_url }})), and it does not change what counts as a valid average ([the 75 percent rule]({{ '/insights/cems-valid-averages-75-percent-rule/' | relative_url }})). It makes sure the problems that do reach DOE are the ones you found first.

If you would like Mesra to run these checks for you, or to train your operators on your own stack, [talk to us]({{ '/' | relative_url }}#contact). See also our [CEMS maintenance]({{ '/services/cems-maintenance/' | relative_url }}) and [DOE CEMS integration]({{ '/services/doe-cems-integration/' | relative_url }}) services.

<div class="related">
  <p class="label">References</p>
  <ul>
    <li><a href="{{ '/insights/cems-notification-rules-excess-emission-cems-failure/' | relative_url }}">CEMS notification rules: excess emission and CEMS failure</a> — the full set of notification duties</li>
    <li><a href="{{ '/insights/doe-cems-data-transmission-explained/' | relative_url }}">cems.doe.gov.my, "CEMS 2.0", "CEMS 3.0": what DOE's data platform is called</a> — what Part C is checking</li>
    <li><a href="{{ '/insights/cems-records-reports-doe-compliance-verification/' | relative_url }}">CEMS records and reports for DOE compliance verification</a> — what to keep, and for how long</li>
    <li><a href="https://www.doe.gov.my/wp-content/uploads/2025/12/SERIES-OF-CEMS_V12_final_interactive.pdf" target="_blank" rel="noopener">CEMS Guidelines, Volumes I &amp; II (Version 8, 2025)</a> — Department of Environment Malaysia</li>
    <li><a href="https://cems.doe.gov.my" target="_blank" rel="noopener">cems.doe.gov.my</a> — DOE System for CEMS</li>
  </ul>
</div>

<p><em>This is general guidance, not legal advice. It describes the daily routine we recommend for CEMS we install and service, and it does not replace the manufacturer's manual, your DOE licence conditions or your site's safety procedures. Confirm the notification requirements for your licence with your DOE office.</em></p>
