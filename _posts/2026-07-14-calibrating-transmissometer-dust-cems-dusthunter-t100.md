---
layout: post
title: "Calibrating a transmissometer dust CEMS: from light beam to legal mg/m³"
full_title: "How to Calibrate a Transmissometer Dust CEMS (DustHunter T100) | Mesra"
date: 2026-07-14 00:05:00
description: "An optical dust monitor never measures milligrams — it measures light. The full calibration chain for a transmissometer TPM CEMS, worked through on the SICK DustHunter T100: normalisation, linearity, initial setting, QAL2 and QAL3."
image: /assets/og/calibrating-transmissometer-t100.png
series: reference-methods
part: 6
---

*The reference methods behind your CEMS — Part 6. A hands-on walk-through for operators running an optical dust monitor, using the SICK DustHunter T100 — the double-pass transmissometer we install on biomass boilers — as the worked example throughout. Drawn from the DOE CEMS Guidelines (Version 8, 2025), which we helped develop.*

Here is the fact that every other question about dust-CEMS calibration hangs from: **a transmissometer never measures dust concentration.** It measures light. The DustHunter T100's own QAL1 certificate says so in one sentence — *"the measuring system uses the measured quantities of transmission, opacity and extinction, wherein transmission is determined as the primary optical quantity."* Every mg/m³ figure the instrument will ever report to DOE is a *derived* number, and the thing that derives it — the calibration function — is built on your stack, on your process, against manual gravimetric sampling.

That's why "calibrating" an optical dust CEMS isn't one procedure. It's a chain of five, each answering a different question, each with its own owner, tools and frequency. Skip a link and the numbers going to [DOE's CEMS monitoring system]({{ '/insights/doe-iremote-cems-data-transmission-explained/' | relative_url }}) are — in the Guidelines' own words — "unverified and invalid."

## Why light can't be factory-calibrated into milligrams

The physics first, because it explains everything downstream. A transmissometer sends a beam across the duct to a reflector and measures how much comes back. Dust in the path scatters and absorbs light, so **transmission** falls as dust load rises. From transmission the instrument derives **opacity** (the fraction of light lost) and **extinction** (the same loss on a logarithmic scale, which has the useful property of being proportional to dust concentration — the Beer–Lambert relationship).

Proportional — but with a proportionality constant that belongs to *your* dust. The DOE Guidelines put it plainly: the concentration calibration factor of an optical extinction instrument is *"dependent on particle size, composition, shape, colour and refractive index"* (Guidelines V8, Table 3.2). Fly ash from EFB fibre, sawdust char and rubberwood smoke all attenuate light differently per milligram. No factory, and no test dust, can know that constant in advance — which is why the same table says a transmissometer *"gives a measure of particulate concentration after calibration with gravimetric SRM."*

There's an honest reminder of this printed inside the T100's own certificate: during EN 15267-3 suitability testing, the requirement on the determination coefficient R² of the *laboratory* calibration function was noted as not fulfilled. Read cold, that sounds alarming — but it's a statistical artefact, not a fault, and it's worth understanding because you'll meet the same effect on your own stack. When dust concentrations are low and tightly clustered, there's little spread for a regression line to "explain," so R² falls even when the instrument is behaving perfectly. The DOE Guidelines carve out exactly this case: an R² below 0.9 *"does not necessarily indicate a QAL2 failure when the emissions are low level cluster,"* and *"the variability test shall always be considered as the definitive test"* (§5.3.9). The same certificate shows the system passing the metric that actually counts — a total expanded uncertainty of **8.1% of the ELV against a 22.5% allowance** (more on that below). The lesson carries straight to site work: judge a transmissometer's calibration on the variability test and uncertainty, never on R² alone. The calibration that legally matters is never the laboratory one anyway — it's the one performed on your stack, which is the subject of the rest of this post.

<figure class="fig flow">
<p class="fig-title">The five links in the dust-CEMS calibration chain</p>
<div class="flow-row">
<div class="flow-step"><span class="fs-name">QAL1</span><span class="fs-q">Design proven (factory / TÜV)</span></div>
<div class="flow-arrow" aria-hidden="true">→</div>
<div class="flow-step"><span class="fs-name">Normalisation + linearity</span><span class="fs-q">Optics read true (install / service)</span></div>
<div class="flow-arrow" aria-hidden="true">→</div>
<div class="flow-step"><span class="fs-name">Initial setting</span><span class="fs-q">First mg/m³ scale (≥5 SRM runs)</span></div>
<div class="flow-arrow" aria-hidden="true">→</div>
<div class="flow-step"><span class="fs-name">QAL2-CVT</span><span class="fs-q">Legal calibration (≥15 SRM runs)</span></div>
<div class="flow-arrow" aria-hidden="true">→</div>
<div class="flow-step"><span class="fs-name">QAL3 + AST</span><span class="fs-q">Hold it (filters, charts, yearly check)</span></div>
</div>
<p class="fig-note">● Only after QAL2 does the data legally count — everything after that exists to keep the calibration valid.</p>
<figcaption>Five procedures, one purpose: making a light measurement legally mean milligrams per cubic metre.</figcaption>
</figure>

## Link 1 — QAL1: the calibration you inherit

You don't perform QAL1; you buy it. It's the [type-approval certification]({{ '/insights/qal1-certification-mcert-tuv-doe-registered-cems/' | relative_url }}) proving the instrument *design* can meet the uncertainty the law demands. But the certificate sets three boundaries your site calibration must live inside, so read it before anything is bolted to the stack. (We've covered [how to read a QAL1 certificate]({{ '/insights/qal1-certificate-tpm-opacity-biomass-boiler/' | relative_url }}) line by line — here's what the T100's says about calibration specifically.)

**The certified ranges are optical, not mass.** The T100 (TÜV certificate 0000036946_02, valid to 19 July 2027) carries five certified ranges from 0–0.05 to 0–1.0 extinction, with a reference point of **0–0.1 extinction ≙ 15 mg/m³ at a 5 m measurement path**. Note the path length in that sentence: extinction accumulates along the beam, so the same dust concentration produces a different extinction on a wider duct. Your installed path length is a calibration parameter from day one.

**The uncertainty budget is what your calibration protects.** The certificate's final page totals every error source — repeatability in field conditions, lack of fit, zero and span drift, temperature, supply voltage, beam excursion, reference-material uncertainty — into an expanded uncertainty of **8.1% of a 10 mg/m³ ELV, against an allowance of 22.5%**. That headroom is the design margin. Site-side neglect (fouled optics, drifted zero, stale calibration function) spends it.

**The maintenance interval is a calibration clock.** The T100's certificate specifies a **three-month maintenance interval** — and, as we'll see at QAL3, that interval is precisely the maximum legal spacing of your zero-and-span checks.

Two more certificate lines that matter on a biomass stack: the T100 measures dust *"in wet stack gas under operating conditions"* (so SRM results must be converted to the same basis before any comparison — more below), and it may only be used where *"a fall below the dew point can be excluded."* Condensing water droplets scatter light exactly like dust; no calibration survives them.

## Link 2 — Normalisation and linearity: making the optics read true

Everything in this link concerns light only — no dust, no milligrams. It's performed at installation and repeated at service intervals, and it establishes the two fixed points of any optical measurement: what *clean* looks like, and whether the scale between clean and opaque is straight.

**Normalisation (the 100% point).** The instrument must learn what full transmission looks like through its own optics, at its own installed separation. The T100 offers two certified ways to create the required smoke-free path: **adjustment mounts** that hold the DHT-T sender/receiver and DHT-R reflector at exactly the installed distance in clean air, with optical axes aligned; or a **waste-gas-free tube** of exactly the duct's length fitted between the two units, sealed with end caps when not in use so dust can't creep in. Either way, the transmission measured across that clean path is set as **100%** — the anchor every subsequent reading is relative to. Get the geometry wrong here and you've built a bias into every number the system will ever report.

**Linearity (the scale between the points).** With the zero of the optical scale anchored, the span and straightness are verified with **filter glasses of predetermined transmission** inserted into the beam path — the T100's certificate describes exactly this as its linearity test. The instrument's reading for each filter is compared with the filter's certified value; agreement within tolerance at each step confirms the transmission measurement is behaving linearly across the range.

Two Guidelines requirements sharpen this from good practice into compliance:

- The filters aren't generic accessories. Any surrogate — *"filter, field current, calibration block etc."* — must be **QAL1-certified and dedicated reference material for the installed CEMS** (Guidelines V8, §4.1.16). A filter set from a different instrument, or an uncertified one, doesn't count.
- The check levels are prescribed. For PM, the low-level check sits at **0–10%** and the span check at **50–100% of the full-scale range**; if the same instrument reports opacity for [Regulation 12]({{ '/insights/clean-air-regulations-2014-cems/' | relative_url }}) purposes, opacity checks sit at **0–10%** low and **40–60%** span (§4.1.16). DOE also states a preference for systems that run zero and span **automatically** — no extra personnel, no forgotten checks — which the T100's control cycle provides.

## Link 3 — Initial setting: the first milligram scale

Now, and only now, does mass enter the picture. Before the formal QAL2, the Guidelines require an **initial setting** for PM CEMS: *"a gravimetric reference method (such as EN 13284-1 / USEPA Method 5 / MS 1596) shall be used to correlate the output of the device with the obtained results"* (§4.1.17). In practice a stack-testing team runs [isokinetic sampling]({{ '/insights/isokinetic-sampling-explained-stack-test/' | relative_url }}) alongside the instrument, and the paired results give the T100 its first working extinction-to-mg/m³ factor.

The Guidelines are specific about how this differs from QAL2 (§5.3.7): the initial setting is conducted **separately from QAL2 testing**, follows the **manufacturer's procedure**, and needs **at least 5 runs** of SRM data representative of the emission profile, sampled to MS 1596 / EN 13284-1. Think of it as a working calibration — good enough to commission against and to confirm the range selection is sensible, but carrying no legal weight. The instrument is now *reading in* mg/m³; it is not yet *certified in* mg/m³.

## Link 4 — QAL2-CVT: the calibration that counts

The [QAL2 Calibration and Variability Test]({{ '/insights/qal2-calibration-variability-test-cems/' | relative_url }}) is the legal calibration — the test that accepts your installation and must be completed **before your data is connected to the DOE system**. We've covered the generic procedure in the operating series; what follows is what's specific to a dust transmissometer.

**The SRM is gravimetric, and there is no shortcut.** For gases, the reference method is another analyser. For dust, it's a filter, a balance and an isokinetic sampling train run to MS 1596 / EN 13284-1 — and the Guidelines close the door the industry sometimes hopes is open: *"the use of reference materials alone to obtain calibration function is not permitted"* (§5.3.8). You cannot QAL2 a dust CEMS with filter glasses. The glasses prove the optics are linear; they know nothing about your dust's size, colour or refractive index — the very things the calibration factor depends on.

**The campaign.** At least **15 parallel measurements**, spread uniformly over **three days** of normal operation (8–10 running hours each), the days within at most **four weeks** of each other. Each SRM sample runs at least **30 minutes**, with starts at least **one hour** apart. The plant should be exercised across its normal envelope — the Guidelines ask for concentrations *"varied as much as possible within the normal operations of the plant"*, ideally scheduling the test when emissions are highest and most varied (without deliberately running abnormally to manufacture them). On a biomass boiler that means capturing load swings, fuel-mix changes and sootblowing windows, not three days of steady baseload.

**The wet-basis trap.** The T100 reads in the duct: wet gas, stack temperature and pressure. A gravimetric SRM result comes off the balance referenced to standard conditions. Before any pairing, *"the results obtained from the SRM must be expressed under the same conditions with CEMS measured data"* (§5.3.8) — moisture, temperature and pressure conversions the CEMS tester must get right, and the single most common source of a mysteriously poor correlation on a high-moisture biomass stack.

**The result.** Regressing the 15+ valid pairs (18–19 sets are advisable, so outlier removal can't drop you below the minimum) gives the **calibration function** — the site-specific line that turns the T100's optical signal into reportable mg/m³ — plus the **valid calibration range** within which that line may legally be used. An R² of 0.9 or better indicates a sound function, though the Guidelines note low-level emission clusters can defeat that guideline, and the **variability test remains the definitive pass/fail**. The whole campaign is run by a [DOE-registered CEMS tester]({{ '/insights/why-cems-needs-manual-stack-tests-srm/' | relative_url }}), not the operator, and the function is then applied in the data acquisition system.

## Link 5 — QAL3 and the AST: holding the calibration

A calibration function is a snapshot. Two ongoing procedures keep it honest.

**QAL3 — your job, every cycle.** [QAL3]({{ '/insights/qal3-ongoing-performance-monitoring-drift-control/' | relative_url }}) is the operator's routine of zero-and-span checks plotted on Shewhart or CUSUM control charts to catch drift before it becomes an exceedance. For the T100 the mechanics are optical: the automatic control cycle checks the zero point, the span is verified against the certified filter glasses, and the instrument's **swivel-element contamination measurement** tracks window fouling between checks. The frequency rule comes straight from the certificate: checks must happen at least every **QAL1 maintenance interval — three months for the T100** — but DOE recommends **every 4 weeks**, and explicitly expects *shorter* intervals for PM systems on *"high and dirty dust load"* stacks where fouling drives drift (§5.5.7–5.5.8). Two T100 design notes belong in your QAL3 thinking: unlike its T200 sibling it has **no automatic deflection compensation** and measures contamination **on one side only** — so mounting rigidity, flange alignment and purge-air health (the blower keeping hot dusty gas off the optics) deserve a place on the same checklist as the filter checks.

**AST — the yearly referee.** The [Annual Surveillance Test]({{ '/insights/annual-surveillance-test-ast-cems/' | relative_url }}) repeats a reduced parallel-measurement campaign to confirm the calibration function still holds — which lines up with the Guidelines' blunt statement for PM that *"calibration must be undertaken typically on an annual basis"* based on gravimetric measurement (§4.1.18). And some events don't wait for the anniversary: a fuel change, a new fuel mixture, or plant modifications [trigger a fresh QAL2]({{ '/insights/changes-that-trigger-new-qal2-cems/' | relative_url }}) — with the new function in place within three months — because different dust means a different extinction-per-milligram, and yesterday's line no longer describes it.

## The chain on one page

<figure class="fig report">
<p class="fig-title">The calibration chain on one page</p>
<div class="rep-rows">
  <div class="rep-row">
    <span class="rep-k">1</span>
    <span class="rep-body"><span class="rep-name">QAL1 — instrument design</span><span class="rep-desc">Proven against the EN 15267 lab + field test. Once, for the certificate's validity. By the manufacturer + TÜV/MCERTS.</span></span>
  </div>
  <div class="rep-row">
    <span class="rep-k">2</span>
    <span class="rep-body"><span class="rep-name">Normalisation + linearity — optical zero, span, straightness</span><span class="rep-desc">Against a clean path + certified filter glasses. At install, then every service / QAL3 cycle. By the installer / operator. Produces no mg/m³.</span></span>
  </div>
  <div class="rep-row">
    <span class="rep-k">3</span>
    <span class="rep-body"><span class="rep-name">Initial setting — first mg/m³ scale</span><span class="rep-desc">Against ≥5 gravimetric SRM runs. At installation. By the stack-test team. A working scale, no legal weight.</span></span>
  </div>
  <div class="rep-row hl">
    <span class="rep-k">4</span>
    <span class="rep-body"><span class="rep-name">QAL2-CVT — legal calibration function + valid range</span><span class="rep-desc">Against ≥15 gravimetric SRM runs over 3 days. Before data connection, and on trigger events. By a DOE-registered CEMS tester. This is the one that counts.</span></span>
  </div>
  <div class="rep-row">
    <span class="rep-k">5</span>
    <span class="rep-body"><span class="rep-name">QAL3 — drift control</span><span class="rep-desc">Zero point + filter glasses, plotted on control charts. At most every maintenance interval (3 months for the T100); DOE recommends 4-weekly. By the operator.</span></span>
  </div>
  <div class="rep-row">
    <span class="rep-k">6</span>
    <span class="rep-body"><span class="rep-name">AST — calibration function still valid</span><span class="rep-desc">A reduced SRM campaign re-checking the QAL2 function. Yearly. By a DOE-registered CEMS tester.</span></span>
  </div>
</div>
<figcaption>Six procedures, one purpose: making a light measurement legally mean milligrams per cubic metre. Only after link 4 does the data legally count.</figcaption>
</figure>

The instrument measures light superbly — the certificate proves that once, at the factory. Whether that light legally means milligrams on *your* stack is decided by this chain, and most of its links are recurring site work, not equipment features. It's also, in our experience, where dust-CEMS compliance is genuinely won or lost: not in the brochure comparison, but in whether the filter glasses are certified and dedicated, the SRM conversions are done on the right basis, and the control chart actually gets plotted.

If you're commissioning a transmissometer, planning a QAL2 on a biomass boiler, or staring at a control chart that's wandering — [talk to us]({{ '/' | relative_url }}#contact). Calibration is the part of this business we'd rather you get right the first time.
