---
layout: post
title: "iRemote, \"CEMS 2.0\", \"CEMS 3.0\": what DOE's data platform for CEMS is actually called"
full_title: "DOE iRemote & CEMS-DIS: How CEMS Data Reaches DOE | Mesra"
date: 2026-07-07 05:00:00
last_modified_at: 2026-07-08 09:00:00
description: "iRemote, \"CEMS 2.0\" and \"CEMS 3.0\" all point to the same destination. Here's what the DOE CEMS Guidelines actually call it, what CEMS-DIS requires on your end, and how your data gets there."
series: watch
---

If you've spent any time around Malaysian CEMS, you've heard the platform your data lands on called at least three different names — **iRemote**, **"CEMS 2.0"**, **"CEMS 3.0"** — often in the same conversation, sometimes by the same person. That's not sloppiness on anyone's part. The **DOE CEMS Guidelines (Version 8, 2025)**, which we helped develop, are surprisingly candid about why: describing the platform in detail isn't actually their job. Volume II says so directly — "*the details of DOE's CEMS System will not be described in this guideline*." So the naming has been left to whoever's talking, and it drifts.

Here's what's actually verifiable, and what your CEMS needs to do regardless of which name is current when you read this.

## What the Guidelines call it

The Guidelines' own term, used consistently through Chapters 2, 3 and 6, is the **DOE System for CEMS** (Volume II also calls it **"DOE's CEMS Monitoring System"**) — a web-based application that receives CEMS data from industrial premises and shows each premise's compliance status based on its own readings (§6.2.6). **iRemote** is the public portal name DOE has used for that system since at least the early 2020s — it's a real, named DOE service, not informal shorthand. **"CEMS 2.0" and "CEMS 3.0" don't appear anywhere in the Guidelines or on DOE's own CEMS page** — as far as we can verify, they're industry shorthand for "whichever version of the portal is current," which is exactly the kind of drift you'd expect when the Guidelines deliberately leave the platform undescribed. Worth knowing: DOE's public portal addresses have themselves shifted over the years, with older iRemote links now pointing to a data-reference-only endpoint alongside a newer one — so "which URL is current" is a fair question to ask us directly rather than assume, precisely because the Guidelines don't fix it in writing.

None of that changes what the regulation requires of your CEMS. That part is written down precisely, in Volume II's **CEMS Data Interface System (CEMS-DIS)** specification.

## The chain from stack to DOE, with the missing link named

Our own [DOE integration service page]({{ '/services/doe-iremote-integration/' | relative_url }}) shows the chain from stack to regulator. The part that's easy to skate past is the **CEMS-DIS** in the middle — a real, specified component, not just "the connection."

<figure class="fig flow">
<p class="fig-title">From stack to regulator — with CEMS-DIS named</p>
<div class="flow-row">
  <div class="flow-step"><span class="fs-k">Measure</span><span class="fs-name">Analyser + DAS</span><span class="fs-q">Captures &amp; conditions the signal</span></div>
  <div class="flow-arrow" aria-hidden="true">→</div>
  <div class="flow-step hl"><span class="fs-k">Interface</span><span class="fs-name">CEMS-DIS</span><span class="fs-q">Stores readings, formats for transfer</span></div>
  <div class="flow-arrow" aria-hidden="true">→</div>
  <div class="flow-step"><span class="fs-k">Regulator</span><span class="fs-name">DOE System for CEMS</span><span class="fs-q">"iRemote" in everyday use</span></div>
</div>
<p class="fig-note">Direct transmission only — no intermediate storage server permitted</p>
<figcaption>DOE CEMS Guidelines V8, Volume II Ch. 3 (CEMS-DIS specification) and §2.6.8.</figcaption>
</figure>

Two rules govern that last leg, and both are stricter than most people expect. First, **all CEMS data must be transmitted directly from the industrial premise to the DOE System for CEMS, without using any intermediate or centralised server as a medium of temporary data storage** (§2.6.8) — you can't route your data through a third-party dashboard and forward it on afterwards. Second, communication is sequenced and initiated by DOE's side, not yours (Vol II §3.2.1d) — the premise's CEMS-DIS and the DOE server talk on DOE's terms, to avoid the whole national system choking on simultaneous uploads.

## What CEMS-DIS actually requires on your premise

This is where the Guidelines get unusually specific — Volume II gives an actual hardware and software spec for the DIS server or PC at your facility:

<figure class="fig report">
<p class="fig-title">CEMS-DIS: what your side has to run (Vol II §3.2.1–3.2.2)</p>
<div class="rep-rows">
  <div class="rep-row">
    <span class="rep-k">1</span>
    <span class="rep-body"><span class="rep-name">Hardware</span><span class="rep-desc">Minimum Intel i5 (10th gen+) or AMD Ryzen 5, 8GB DDR4 RAM, 256GB SSD.</span></span>
  </div>
  <div class="rep-row">
    <span class="rep-k">2</span>
    <span class="rep-body"><span class="rep-name">Database</span><span class="rep-desc">MySQL (v8 component library or later) — the CEMS-DIS database, named <code>dis_reading</code>, with <code>reading</code> and <code>reading_log</code> tables.</span></span>
  </div>
  <div class="rep-row">
    <span class="rep-k">3</span>
    <span class="rep-body"><span class="rep-name">Connectivity</span><span class="rep-desc">A 24/7 internet connection with a dynamic IP; Windows 10 or later, able to support an open-source database.</span></span>
  </div>
  <div class="rep-row hl">
    <span class="rep-k">★</span>
    <span class="rep-body"><span class="rep-name">Availability</span><span class="rep-desc">The DIS PC must be operational 24 hours a day, 7 days a week. A UPS with AVR is recommended to protect data through power interruptions.</span></span>
  </div>
</div>
<figcaption>Recommended: keep the local CEMS-DIS database for at least 5 years as your own archive, separate from the 3-year statutory record under CAR 2014 (Reg 17(5)) covered in <a href="{{ '/insights/cems-records-reports-doe-compliance-verification/' | relative_url }}">Records, reports and the regulator's view</a>.</figcaption>
</figure>

That last distinction matters and is easy to conflate: the **5-year CEMS-DIS archive** is a DOE recommendation for your own local database, while the **3-year record retention** under Reg 17(5) is a separate statutory minimum covering your wider compliance file (test reports, correspondence, exceptions log). Keep both — they aren't the same clock.

Chapter 3 doesn't stop at hardware, either. The data-loading procedure right after it folds in the same validity math used at the compliance-test end: a 1-minute average only counts with valid data for at least 45 of the preceding 60 seconds, and DOE's system only treats a 30-minute average as valid when it's built from at least 22 of those one-minute averages — 75% availability. Fall short and the average isn't discounted, it's discarded. We cover that logic in full in [Valid averages and the 75% rule]({{ '/insights/cems-valid-averages-75-percent-rule/' | relative_url }}) — worth reading alongside this one, since it's the same validity gate CEMS-DIS applies on the way in.

## Getting connected is a registration process, not a cable

Before any of this runs live, connecting to the DOE System for CEMS is a gated, three-step process under the Guidelines' Figure 2.1 — and it starts well before your CEMS is even installed:

<figure class="fig flow">
<p class="fig-title">Registration to live connection</p>
<div class="flow-row">
  <div class="flow-step"><span class="fs-k">Step 1</span><span class="fs-name">Register</span><span class="fs-q">Consultant + equipment, via DOE System for CEMS</span></div>
  <div class="flow-arrow" aria-hidden="true">→</div>
  <div class="flow-step"><span class="fs-k">Step 2</span><span class="fs-name">Apply</span><span class="fs-q">Installation application → DOE acknowledgement letter</span></div>
  <div class="flow-arrow" aria-hidden="true">→</div>
  <div class="flow-step hl"><span class="fs-k">Step 3</span><span class="fs-name">Connect</span><span class="fs-q">CEMS-DIS live, data submitted continuously</span></div>
</div>
<figcaption>DOE CEMS Guidelines V8, Figure 2.1 (Steps 1–3). Functional Test / CVT (Step 4) and Calibration Function application (Step 5) follow once the connection is confirmed — see our <a href="{{ '/insights/cems-quality-assurance-chain-qal1-qal2-qal3-ast/' | relative_url }}">QA chain</a> and <a href="{{ '/insights/qal2-calibration-variability-test-cems/' | relative_url }}">QAL2-CVT</a> posts.</figcaption>
</figure>

Only CEMS and consultants that meet the pre-set conditions get registered at all — an equipment or consultant mismatch stops the process before installation is even applied for. And existing CEMS installed before the current Guidelines took effect, or never acknowledged by DOE, must still register through the same system (§2.6.5) — there's no informal grandfathering.

## Once you're live, the obligations don't stop

Being connected changes what you're on the hook for, not just what you can see. Once your CEMS-DIS is transmitting, the DOE System for CEMS is visible to the CEMS consultant, the CEMS tester, the plant operator *and* DOE officers simultaneously (§6.2.6b) — everyone is looking at the same live number, which is exactly why we cover [how compliance is actually verified]({{ '/insights/cems-records-reports-doe-compliance-verification/' | relative_url }}) as its own topic. The system also pushes **alerts**: it flags excess emissions and prompts scheduled quality-assurance activity, and the Guidelines are explicit that you must act on those notifications, not just receive them (§6.2.6f).

The obligation that catches people out is narrower and easy to miss: **if your CEMS data fails to transmit to the DOE server, you must notify DOE** (§6.2.6e). That's a platform-level administrative duty, distinct from — but related to — the statutory **one-hour clock** for a monitoring-device failure under CAR 2014 Reg 17(7), which we cover in detail in [The two clocks]({{ '/insights/cems-notification-rules-excess-emission-cems-failure/' | relative_url }}). In practice, a dead CEMS-DIS link is the kind of event both provisions are watching for — don't treat a quiet dashboard as a pause; treat it as something to report.

## The takeaway

Whatever it's called when you hear it — iRemote, CEMS 2.0, CEMS 3.0, or the Guidelines' own "DOE System for CEMS" — the underlying requirement is fixed and specific: a CEMS-DIS interface running on your premise, 24/7, transmitting directly with no intermediate server, registered through a gated process before it ever goes live, and watched continuously once it does. The name will keep drifting because the Guidelines deliberately leave it undescribed; the specification behind it won't.

**Want your data connection built and registered right the first time?** [Talk to us]({{ '/' | relative_url }}#contact) — we're a DOE-registered CEMS party, and our own [DOE integration service]({{ '/services/doe-iremote-integration/' | relative_url }}) is built directly to the CEMS-DIS specification in Volume II of the Guidelines we helped write.

<div class="related">
  <p class="label">Related insights</p>
  <ul>
    <li><a href="{{ '/insights/cems-records-reports-doe-compliance-verification/' | relative_url }}">Records, reports and the regulator's view: how CEMS compliance is actually verified</a></li>
    <li><a href="{{ '/insights/cems-notification-rules-excess-emission-cems-failure/' | relative_url }}">The two clocks: notifying DOE of an excess emission and a CEMS failure</a></li>
    <li><a href="{{ '/insights/cems-valid-averages-75-percent-rule/' | relative_url }}">Valid averages and the 75% rule: when a reading counts, and when it doesn't</a></li>
    <li><a href="{{ '/insights/need-a-cems-clean-air-regulations-2014/' | relative_url }}">Do you even need a CEMS? What the Clean Air Regulations 2014 require before you buy</a></li>
    <li><a href="{{ '/insights/qal2-calibration-variability-test-cems/' | relative_url }}">QAL2 and the Calibration &amp; Variability Test: certifying your CEMS after install</a></li>
  </ul>
</div>

---

*This article is general guidance, not legal advice, based on the DOE CEMS Guidelines Version 8 (2025) and CAR 2014. Portal names and addresses are drawn from DOE's public materials at the time of writing and may change; for the current registration and connection method, refer to DOE's own procedural guide or speak with us directly.*
