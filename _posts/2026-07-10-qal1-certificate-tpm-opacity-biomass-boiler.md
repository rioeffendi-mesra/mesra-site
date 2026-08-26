---
layout: post
title: "Reading a QAL1 certificate: does it actually cover TPM and opacity on your biomass boiler?"
full_title: "How to Read a QAL1 Certificate for a Biomass CEMS | Mesra"
date: 2026-07-10 00:15:00
last_modified_at: 2026-08-26
description: "A valid EN 15267 / QAL1 certificate doesn't mean a system suits your boiler. Two checks — what it measures, and what range it's certified to."
image: /assets/og/qal1-certificate-tpm-opacity-biomass-boiler.png
series: biomass-boilers
---

Every analyser we'd consider recommending carries a QAL1 certificate — proof it was tested to EN 15267 by an accredited body and found fit for *some* application. What a certificate doesn't say, in bold letters on the front page, is whether that application is yours. Two systems can both be validly certified and still not be equally suited to a biomass boiler in Malaysia. The difference is in the detail most buyers never read past page one.

QAL1 certificates are public documents — every one referenced here is registered and searchable at **[qal1.de](https://www.qal1.de/qal1/en/main-navigation/start/)**, published in the German Federal Gazette by the German Environment Agency (UBA). You don't need to take a supplier's word for what's on one. Search the manufacturer and model you're being quoted, open the certificate, and read it yourself.

## Why a biomass boiler needs both, from one system

We've covered this in detail in [CEMS for biomass boilers]({{ '/insights/biomass-boiler-cems-which-industries-need-one/' | relative_url }}): once your measured dust load reaches **2.5 kg/hour**, two provisions of the Clean Air Regulations 2014 converge on the same stack. The Second Schedule sets a Total Particulate Matter limit of **150 mg/m³ at 12% CO₂** for solid fuel and requires **continuous** monitoring at that threshold. Regulation 12(3) separately requires a transmissometer for **opacity**: any premises that *emits* 2.5 kg/hour of dust or more, or *has the potential to emit* smoke darker than Ringelmann Shade No. 2, must install and operate one. In practice, for most biomass boilers it's the same 2.5 kg/hour figure that decides both obligations at once — one system needs to cover both.

That makes the certificate's answer to a simple question decisive: **does this analyser actually produce an opacity reading, or only a dust concentration?**

## Check 1 — what does it actually measure?

The DOE CEMS Guidelines (Version 8, 2025) list the recognised particulate-monitoring techniques and what each one can report (§3.1, Table 3.2). Two are relevant here, and they behave differently:

**Optical extinction (transmissometer).** A beam crosses the duct and the loss of light — the extinction — is measured directly. Because opacity *is* a measure of light loss across a path, this technique reports **transmittance, opacity and dust concentration from the same measurement**. The Guidelines note a typical usable range of roughly 10 to 2,000 mg/m³, and specifically flag that high-moisture flue gas can affect accuracy — adding, in the Guidelines' own words, that "*this type of emission typically occurs at biomass boiler which uses fuel with high moisture content*." Malaysia's own regulator guidance names biomass boilers as the reason this matters.

**Scattered light (backscatter).** A beam is fired into the gas stream and the light reflected back toward the source is measured. The Guidelines describe this technique as giving "a measure of particulate concentration... after calibration with SRM," reported to suit **low particulate concentrations**. It has no path across the duct to measure a transmittance loss over, so it has nothing to report as opacity — the certificate for a system built this way lists dust concentration only.

Before anything else, the certificate's "measured values" or "certified components" section tells you which family you're looking at. If opacity isn't listed, it isn't measured — no matter what else the datasheet promises.

## Check 2 — what range is it certified to?

A QAL1 certificate doesn't just say an analyser works. It states the specific range over which it was tested and found compliant, and that range has to sit sensibly against your Emission Limit Value — the same principle behind MS 2564's rule that "the certification range is always related to the daily ELV," which we cover in the [QAL1 post]({{ '/insights/qal1-certification-mcert-tuv-doe-registered-cems/' | relative_url }}). A certificate is not a blanket license to measure anything; it's a statement about a tested window.

Transmittance-type certificates typically state their range in extinction units (Ext), not mg/m³ directly, because the mg/m³ equivalent depends on the actual measurement path length across your specific duct — that conversion is fixed on-site during QAL2, not printed once on the certificate. A reference conversion is usually given at one path length (for example, a stated range might read "0–0.1 Ext ≙ 15 mg/m³ dust at a 5 m measurement path"), alongside wider extinction ranges among its performance-test settings.

Scattered-light-type certificates, by contrast, are usually stated directly in mg/m³ — no path-length conversion needed, but also no flexibility beyond the figure printed.

## Two real certificates, read side by side

Both of the following are current, valid EN 15267 / QAL1 certificates for products actively sold into the Malaysian market. One is the **[SICK DustHunter T100]({{ '/insights/in-situ-cems-installation-anatomy/' | relative_url }})** — the double-pass transmittance system we install on biomass boilers. The other is a competing product; we've left its name off, because the point of this exercise isn't who makes it, it's what its own certificate says.

<figure class="fig report">
<p class="fig-title">SICK DustHunter T100 — transmittance</p>
<div class="rep-rows">
  <div class="rep-row">
    <span class="rep-k">1</span>
    <span class="rep-body"><span class="rep-name">Measuring principle</span><span class="rep-desc">Transmittance (optical extinction) — a beam crosses the duct and back.</span></span>
  </div>
  <div class="rep-row hl">
    <span class="rep-k">2</span>
    <span class="rep-body"><span class="rep-name">Measured values</span><span class="rep-desc">Transmittance, opacity, relative opacity, extinction <strong>and</strong> dust concentration — all from one measurement.</span></span>
  </div>
  <div class="rep-row">
    <span class="rep-k">3</span>
    <span class="rep-body"><span class="rep-name">Certified range</span><span class="rep-desc">One certification range: 0–0.1 Ext ≙ 15 mg/m³ at a 5 m path. Wider extinction ranges up to 0–1.0 Ext are listed among the performance-test settings; because extinction is path-integrated, the mg/m³ each represents is fixed on your stack at QAL2. The 15 mg/m³ is a reference at 5 m, not a ceiling.</span></span>
  </div>
  <div class="rep-row">
    <span class="rep-k">4</span>
    <span class="rep-body"><span class="rep-name">ELV used in the uncertainty calculation</span><span class="rep-desc">10 mg/m³ — the demanding EU reference point used for testing, not a ceiling on the certified range.</span></span>
  </div>
</div>
<figcaption>Certificate no. 0000036946_02, registered at qal1.de, valid until 19 July 2027. The stated ranges are given in extinction units because the mg/m³ equivalent depends on the installed path length, fixed during QAL2 on your own stack.</figcaption>
</figure>

<figure class="fig report">
<p class="fig-title">A competing system — scattered light</p>
<div class="rep-rows">
  <div class="rep-row">
    <span class="rep-k">1</span>
    <span class="rep-body"><span class="rep-name">Measuring principle</span><span class="rep-desc">Scattered light (backscatter) — light reflected back toward the source.</span></span>
  </div>
  <div class="rep-row hl">
    <span class="rep-k">2</span>
    <span class="rep-body"><span class="rep-name">Measured values</span><span class="rep-desc">Dust concentration only. No opacity or transmittance value is produced by this measuring principle.</span></span>
  </div>
  <div class="rep-row">
    <span class="rep-k">3</span>
    <span class="rep-body"><span class="rep-name">Certified ranges</span><span class="rep-desc">One primary certified range, 0–20 mg/m³, plus two supplementary ranges corresponding to roughly 9 and 60 mg/m³.</span></span>
  </div>
  <div class="rep-row">
    <span class="rep-k">4</span>
    <span class="rep-body"><span class="rep-name">ELV used in the uncertainty calculation</span><span class="rep-desc">10 mg/m³ — matching its certified ranges, all stated directly in mg/m³.</span></span>
  </div>
</div>
<figcaption>Registered at qal1.de. Both certificates carry an identical EN 15267-3 calibration-function caveat (the R² requirement wasn't met at testing) — that detail is common to both and isn't a point of difference.</figcaption>
</figure>

A certified range isn't just about the top number — it has to be chosen around your limit. Under EN 15267-3, as the regulators apply it, the certified range must **reach and include the ELV** and sit within about **2.5× of it** for a combustion or "other" process (1.5× for waste incineration), and the operational range must capture emission peaks without capping. For Malaysia's 150 mg/m³ solid-fuel TPM limit, that points to a certified range of roughly **150–375 mg/m³**.

<figure class="fig">
<svg viewBox="0 0 680 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="qc-t qc-d" font-family="'Arimo','Helvetica Neue',Helvetica,Arial,sans-serif">
<title id="qc-t">Certified range selection against a 150 mg/m³ ELV</title>
<desc id="qc-d">A number line in milligrams per cubic metre. For a 150 mg/m³ emission limit, EN 15267-3 wants the certified range to reach the limit and sit within 2.5 times it — a window from 150 to 375. The competing scattered-light certificate is certified to 0 to 20 with a supplementary range to about 60, stopping well short of the 150 limit.</desc>
<rect x="278" y="62" width="326" height="52" fill="var(--green-tint)"/>
<text x="441" y="54" text-anchor="middle" font-size="9.5" fill="var(--green-d)" font-weight="700">suitable certified range — reach ELV, ≤ 2.5×</text>
<line x1="60" y1="114" x2="640" y2="114" stroke="var(--line)" stroke-width="1.5"/>
<rect x="60" y="102" width="29" height="24" fill="var(--grey)"/>
<rect x="89" y="102" width="58" height="24" fill="none" stroke="var(--grey)" stroke-width="1.5" stroke-dasharray="4 3"/>
<line x1="278" y1="44" x2="278" y2="126" stroke="var(--jg-red)" stroke-width="2.5"/>
<path d="M278 44 L272 34 L284 34 Z" fill="var(--jg-red)"/>
<line x1="604" y1="62" x2="604" y2="126" stroke="var(--green-d)" stroke-width="1.5" stroke-dasharray="3 3"/>
<text x="278" y="28" text-anchor="middle" font-size="9.5" fill="var(--jg-red)" font-weight="700">ELV 150 mg/m³</text>
<text x="604" y="54" text-anchor="middle" font-size="8.5" fill="var(--green-d)" font-weight="700">2.5 × ELV</text>
<text x="60" y="142" text-anchor="middle" font-size="9" fill="var(--muted)">0</text>
<text x="89" y="142" text-anchor="middle" font-size="9" fill="var(--ink)" font-weight="700">20</text>
<text x="147" y="142" text-anchor="middle" font-size="9" fill="var(--muted)">~60</text>
<text x="278" y="142" text-anchor="middle" font-size="10" fill="var(--jg-red)" font-weight="700">150</text>
<text x="604" y="142" text-anchor="middle" font-size="9.5" fill="var(--green-d)" font-weight="700">375</text>
<text x="60" y="166" text-anchor="start" font-size="8.5" fill="var(--muted)">backscatter certificate — 0–20 certified, ~60 supplementary</text>
</svg>
<figcaption>For a 150 mg/m³ solid-fuel ELV, EN 15267-3 wants a certified range that reaches the limit and sits within 2.5× of it (≈150–375 mg/m³). The scattered-light certificate, stated in mg/m³, stops at ~60 — short of the limit. A transmissometer is not on this axis: it certifies in extinction, mapped to mg/m³ on your own stack at QAL2.</figcaption>
</figure>

That's where the two technologies part ways — for a structural reason, not a rhetorical one. The scattered-light certificate is stated **directly in mg/m³ and stops at ~60** — it never reaches the 150 mg/m³ limit, so within its certification it can't be ranged to monitor a solid-fuel boiler. The DustHunter T100 states its range in **extinction**, which is path-integrated: the same certificate is mapped to whatever mg/m³ span your stack needs during QAL2, and the DOE Guidelines put a transmissometer's usable range at roughly **10–2,000 mg/m³** — comfortably around a 150 mg/m³ ELV. The transmissometer's suitability is proven on your stack; the backscatter certificate's ceiling is printed on the page.

## What this means before you sign a quotation

Two checks, in this order:

1. **Does the certificate list opacity, or only dust?** If your boiler needs both under Regulation 12(3) and the Second Schedule, a dust-only certificate can't be the whole answer — you'd need a second instrument, or a different analyser.
2. **Does the certified range reach your ELV — and within 2.5× of it?** For a 150 mg/m³ solid-fuel limit, EN 15267-3 wants a range that reaches the limit and sits within about 2.5× (≈150–375 mg/m³). A dust-only device certified in mg/m³ to ~60 can't monitor a 150 mg/m³ boiler; a transmissometer's extinction range is mapped to that limit on your own stack at QAL2 — so read the *units* on the range, not just the number.

Both checks take five minutes. Before you sign anything, go to **[qal1.de](https://www.qal1.de/qal1/en/main-navigation/start/)**, search the exact manufacturer and model on your quotation, and open the certificate yourself — don't rely on a datasheet's summary of what it says. We cover the physical side of a compliant installation — what's actually mounted on the stack — in [Anatomy of an in-situ CEMS install]({{ '/insights/in-situ-cems-installation-anatomy/' | relative_url }}), and the broader extractive-vs-in-situ decision in [how a CEMS actually measures]({{ '/insights/how-cems-measures-extractive-in-situ-sampling/' | relative_url }}). That shared R² caveat, incidentally, is not the red flag it looks like — we explain why in [calibrating a transmissometer dust CEMS]({{ '/insights/calibrating-transmissometer-dust-cems-dusthunter-t100/' | relative_url }}).

**Evaluating a quotation and want a second opinion on whether the certificate actually fits your boiler?** [Talk to us]({{ '/' | relative_url }}#contact) — we read these certificates against the DOE CEMS Guidelines we helped write, before anything gets installed.

<div class="related">
  <p class="label">Related insights</p>
  <ul>
    <li><a href="{{ '/insights/biomass-boiler-cems-which-industries-need-one/' | relative_url }}">CEMS for biomass boilers in Malaysia: which industries need one</a></li>
    <li><a href="{{ '/insights/palm-oil-mill-cems-dust-load-threshold/' | relative_url }}">Does your palm oil mill need a CEMS? The 2.5 kg/hour dust-load test</a></li>
    <li><a href="{{ '/insights/qal1-certification-mcert-tuv-doe-registered-cems/' | relative_url }}">What "DOE-registered CEMS" and MCERT/TÜV actually mean</a></li>
    <li><a href="{{ '/insights/how-cems-measures-extractive-in-situ-sampling/' | relative_url }}">How does a CEMS actually measure? Extractive vs in-situ — and what DOE accepts</a></li>
    <li><a href="{{ '/insights/in-situ-cems-installation-anatomy/' | relative_url }}">Anatomy of an in-situ CEMS install: what's actually on the stack</a></li>
  </ul>
</div>

<div class="related">
  <p class="label">References</p>
  <ul>
    <li><a href="https://www.qal1.de/en/main-navigation/certificates/" target="_blank" rel="noopener">QAL1 certified measuring systems (EN 15267)</a> — TÜV Rheinland</li>
    <li><a href="https://mysol.jsm.gov.my/" target="_blank" rel="noopener">Malaysian Standards catalogue (MySOL)</a> — Department of Standards Malaysia</li>
    <li><a href="https://www.doe.gov.my/wp-content/uploads/2025/12/SERIES-OF-CEMS_V12_final_interactive.pdf" target="_blank" rel="noopener">CEMS Guidelines, Volumes I &amp; II (Version 8, 2025)</a> — Department of Environment Malaysia</li>
    <li><a href="https://www.sepa.gov.uk/media/156220/qg1_selecting_cems_v1_sepa_version_1.pdf" target="_blank" rel="noopener">Selecting a CEMS: matching the certified range to the ELV (EN 15267-3)</a> — SEPA / MCERTS guidance</li>
  </ul>
</div>

---

*This article is general guidance, not legal advice. Certificate details are drawn from currently valid, publicly registered EN 15267 / QAL1 certificates at qal1.de; verify the current status of any certificate directly before relying on it. For obligations specific to your facility, refer to the current Clean Air Regulations 2014, the DOE CEMS Guidelines, or speak with us directly.*
