---
layout: post
title: "The two clocks: notifying DOE of an excess emission and a CEMS failure"
date: 2026-06-23 05:00:00
description: "Part 3 of our Enforcing the Clean Air Regulations 2014 series: the two notification deadlines every operator must meet — 24 hours from the discovery of an excess emission (Reg 17(6)), and one hour from a CEMS failure (Reg 17(7)) — plus what the DOE report must contain."
series: enforcing
part: 3
---

*Enforcing the Clean Air Regulations 2014 — Part 3 of 5. A series for regulators and compliance staff, drawn from the DOE CEMS Guidelines (Version 8, 2025), which we helped develop.*

[Part 1]({{ '/insights/cems-compliance-daily-half-hourly-rule-reg-17-3/' | relative_url }}) set out *what* compliance means — no daily average above the ELV, no half-hourly average above twice it. [Part 2]({{ '/insights/cems-valid-averages-75-percent-rule/' | relative_url }}) settled *which numbers count* — only valid averages. This part answers the question both of those raise but neither resolves: **the moment a valid exceedance happens, or the CEMS stops working — what must the operator actually do, and how fast?**

The Clean Air Regulations 2014 give two answers, and they run on two very different clocks.

## The two clocks

Regulation 17 sets two separate notification duties, with two separate triggers and two separate deadlines:

> **(6)** In the event where emission standards exceed the prescribed limit values, the owner or occupier of such premises shall notify the Director General **within twenty-four hours from the discovery of the excess emission**.
>
> **(7)** In the event a monitoring device fails to operate, the owner or occupier of the premises shall notify the Director General **not later than one hour from the occurrence of such failure**.

So a *breach of the limit* buys you twenty-four hours. A *broken monitor* gives you one. The tighter deadline is reserved for the failure — because a CEMS that isn't measuring is a facility the regulator is, for that window, blind to.

<figure class="fig">
<svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="clk-t clk-d" font-family="'Helvetica Neue',Helvetica,Arial,sans-serif">
<title id="clk-t">The two notification clocks under Regulation 17</title>
<desc id="clk-d">Two panels. Left: an excess emission must be notified within 24 hours from discovery, under Regulation 17(6). Right: a CEMS failure must be notified within one hour from the occurrence, under Regulation 17(7).</desc>
<text x="350" y="30" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)">Two duties, two clocks</text>
<text x="350" y="50" text-anchor="middle" font-size="11" fill="var(--muted)">the trigger decides which deadline applies</text>
<rect x="46" y="74" width="294" height="178" rx="13" fill="var(--green-tint)" stroke="var(--green-d)" stroke-width="1.5"/>
<rect x="360" y="74" width="294" height="178" rx="13" fill="var(--white)" stroke="var(--grey)" stroke-width="1.5"/>
<text x="193" y="104" text-anchor="middle" font-size="11" font-weight="700" letter-spacing="0.08em" fill="var(--green-d)">EXCESS EMISSION</text>
<text x="507" y="104" text-anchor="middle" font-size="11" font-weight="700" letter-spacing="0.08em" fill="var(--grey)">CEMS FAILURE</text>
<text x="193" y="174" text-anchor="middle" font-size="62" font-weight="800" fill="var(--green-d)">24</text>
<text x="193" y="196" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="0.12em" fill="var(--green-d)">HOURS</text>
<text x="507" y="174" text-anchor="middle" font-size="62" font-weight="800" fill="var(--ink)">1</text>
<text x="507" y="196" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="0.12em" fill="var(--ink)">HOUR</text>
<text x="193" y="222" text-anchor="middle" font-size="11.5" fill="var(--body)">from the discovery of the excess</text>
<text x="507" y="222" text-anchor="middle" font-size="11.5" fill="var(--body)">from the failure occurring</text>
<text x="193" y="242" text-anchor="middle" font-size="11" font-weight="700" fill="var(--muted)">Reg 17(6)</text>
<text x="507" y="242" text-anchor="middle" font-size="11" font-weight="700" fill="var(--muted)">Reg 17(7)</text>
</svg>
<figcaption>The deadline turns entirely on the trigger: an exceedance of a valid limit (24 hours) versus a monitor that has stopped working (one hour).</figcaption>
</figure>

## When does the clock start?

The wording is precise, and the two triggers start counting from different events.

For an **excess emission**, the clock starts at **discovery**. An excess emission, as Part 1 set out, is an exceedance of the applicable ELV *as shown by a valid measurement* — in CAR 2014 terms, a daily average above the ELV or a half-hourly average above twice it. Because the daily figure is only known once the day's [valid half-hours]({{ '/insights/cems-valid-averages-75-percent-rule/' | relative_url }}) are evaluated, "discovery" is the point at which that evaluation reveals the breach — not necessarily the instant the stack ran high.

For a **CEMS failure**, the clock starts at the **occurrence** of the failure — the moment the monitoring device fails to operate. There's no evaluation step to wait for: a CEMS that has gone down is down, and the hour runs from then.

That difference matters in practice. The excess-emission duty depends on an operator running its evaluations promptly and honestly; the failure duty depends on someone noticing the monitor is offline quickly. The [DOE System for CEMS]({{ '/services/doe-iremote-integration/' | relative_url }}) (the iRemote platform) helps on both fronts — it carries an alert feature for excess emissions, and a gap in transmitted data is itself a visible signal that a device may have failed.

## Don't confuse these with the neighbouring duties

Two other notification rules sit close by and are easy to muddle with the CEMS clocks:

- **Failure of the air pollution control system (Reg 8).** If the *abatement plant itself* — not the monitor — fails, the Director General must be notified **not later than one hour from the occurrence**. Same one-hour deadline as a CEMS failure, but a different trigger: the scrubber or bag-filter going down, rather than the analyser.
- **Accidental emission (Reg 21).** An accidental emission must be reported to the Director General **immediately upon discovery** — no fixed-hour window, the standard is *immediately*.

Keeping them straight is part of the job: a single incident can trip more than one duty at once. A control-system failure that drives the stack over its limit, for instance, can engage the Reg 8 one-hour clock *and* the Reg 17(6) twenty-four-hour clock together.

## How you actually notify: the report and where it goes

The Guidelines turn these statutory deadlines into a concrete procedure. Under §6.2, notification is made to the **state or branch DOE**, using the standard **Failure and Excess Emission Report Format at Appendix 4**:

- **§6.2.3 — Report of excess emission.** Where a half-hourly average exceeds 2× ELV or a daily average exceeds the ELV, the operator notifies DOE **within 24 hours** of the occurrence, on Appendix 4.
- **§6.2.4 — Report of CEMS failure.** Where the CEMS fails to operate, the operator notifies DOE **not later than one hour**, on Appendix 4.
- **§6.2.5 — Source or CEMS shutdown.** This one is easy to overlook: a *planned* stop — scheduled maintenance, a change of parts, or ceasing operation — must also be notified to DOE. Not every notification is an emergency; predictable downtime has to be declared too.

The Appendix 4 report is not a one-line email. Before you file, it helps to know what it asks for — the format is built around five parts:

<figure class="fig report">
<p class="fig-title">What the report asks for · Appendix 4 of the Guidelines</p>
<div class="rep-rows">
<div class="rep-row"><span class="rep-k">A</span><span class="rep-body"><span class="rep-name">Premise &amp; installation</span><span class="rep-desc">Company, plant and contact details; the equipment, stack and installation IDs; and operating hours.</span></span></div>
<div class="rep-row"><span class="rep-k">B</span><span class="rep-body"><span class="rep-name">Source of pollutant</span><span class="rep-desc">Stack ID, the parameters affected, the cause of the incident, and a chronology of the case.</span></span></div>
<div class="rep-row"><span class="rep-k">C</span><span class="rep-body"><span class="rep-name">Statement of excess emissions</span><span class="rep-desc">For each event: date, start and end time, duration, reason (start-up, soot-blowing, control-equipment problem), and corrective action.</span></span></div>
<div class="rep-row"><span class="rep-k">D</span><span class="rep-body"><span class="rep-name">APCS / CEMS failure</span><span class="rep-desc">The problem, the corrective action taken, and the expected date to resume operation.</span></span></div>
<div class="rep-row hl"><span class="rep-k">E</span><span class="rep-body"><span class="rep-name">Declaration</span><span class="rep-desc">A signed certification that the information is true, accurate and complete — and an acknowledgement that failure to resolve the situation is an offence under CAR 2014.</span></span></div>
</div>
<figcaption>The authoritative form is Appendix 4 of the DOE CEMS Guidelines. Have these ready before the clock runs out.</figcaption>
</figure>

That last section is the one operators underestimate. By signing, the operator doesn't just report the event — it commits to corrective action and puts its name to the acknowledgement that an unresolved problem is an offence under CAR 2014. Notifying is not an admission that closes the matter; it opens a documented corrective process the regulator can follow and hold the facility to.

## Why this matters for enforcement

For anyone assessing a facility's conduct, the notification duties are as enforceable as the limits themselves:

- **The duty to notify is independent of the breach.** An operator can be non-compliant for *failing to notify on time* even where the underlying excess was brief or quickly corrected. The clock is a legal obligation in its own right.
- **The timestamps tell their own story.** The gap between when an exceedance was discoverable (the data evaluation) — or when a monitor went dark — and when the report landed is something a regulator can check directly against the 24-hour and one-hour limits.
- **Silence around downtime is a red flag.** With scheduled shutdowns also requiring notification, unexplained gaps in the record aren't neutral. Read alongside the [validity rules]({{ '/insights/cems-valid-averages-75-percent-rule/' | relative_url }}), they point either to a CEMS that isn't being maintained or to a duty that wasn't met.

With the limits (Part 1), the data that counts (Part 2), and now the duties that follow a breach all in place, the series turns next to the standard the whole framework leans on — and the people who maintain it.

**Operating a CEMS and unsure when the clock starts — or facing a notification you need to get right?** [Talk to us]({{ '/' | relative_url }}#contact) — we help operators and regulators apply the DOE CEMS Guidelines we helped write.

<div class="related">
  <p class="label">Related insights</p>
  <ul>
    <li><a href="{{ '/insights/clean-air-regulations-2014-cems/' | relative_url }}">What the Clean Air Regulations 2014 mean for your CEMS</a></li>
    <li><a href="{{ '/insights/cems-quality-assurance-chain-qal1-qal2-qal3-ast/' | relative_url }}">The CEMS quality-assurance chain: why your data is valid in the first place</a></li>
    <li><a href="{{ '/insights/qal2-calibration-variability-test-cems/' | relative_url }}">QAL2 and the variability test: how a CEMS earns the right to report</a></li>
    <li><a href="{{ '/insights/en-14181-explained-cems-quality-assurance/' | relative_url }}">EN 14181 explained: the standard that keeps your CEMS data trustworthy</a></li>
  </ul>
</div>

---

*This article is general guidance, not legal advice. For the precise legal position, refer to the Environmental Quality (Clean Air) Regulations 2014, the EQA 1974, and the DOE CEMS Guidelines.*
