---
layout: post
title: "Reading a QAL1 certificate: does it actually cover TPM and opacity on your biomass boiler?"
full_title: "How to Read a QAL1 Certificate for a Biomass Boiler CEMS | Mesra"
date: 2026-07-10 00:15:00
last_modified_at: 2026-07-14
description: "A valid EN 15267 / QAL1 certificate doesn't mean a system suits your boiler. Two checks — what it actually measures, and what range it's certified to — worked through using two real, public certificates."
series: biomass-boilers
---

Every analyser we'd consider recommending carries a QAL1 certificate — proof it was tested to EN 15267 by an accredited body and found fit for *some* application. What a certificate doesn't say, in bold letters on the front page, is whether that application is yours. Two systems can both be validly certified and still not be equally suited to a biomass boiler in Malaysia. The difference is in the detail most buyers never read past page one.

QAL1 certificates are public documents — every one referenced here is registered and searchable at **[qal1.de](https://www.qal1.de/)**, published in the German Federal Gazette by the German Environment Agency (UBA). You don't need to take a supplier's word for what's on one. Search the manufacturer and model you're being quoted, open the certificate, and read it yourself.

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

Transmittance-type certificates typically state their range in extinction units (Ext), not mg/m³ directly, because the mg/m³ equivalent depends on the actual measurement path length across your specific duct — that conversion is fixed on-site during QAL2, not printed once on the certificate. A reference conversion is usually given at one path length (for example, a stated range might read "0–0.1 Ext ≙ 15 mg/m³ dust at a 5 m measurement path"), alongside several wider certified ranges extending well beyond it.

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
    <span class="rep-body"><span class="rep-name">Certified ranges</span><span class="rep-desc">Five certified ranges, 0–0.05 Ext up to 0–1.0 Ext. Reference point: 0–0.1 Ext ≙ 15 mg/m³ at a 5 m measurement path — the widest certified range extends ten times further.</span></span>
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

Malaysia's Second Schedule sets the biomass TPM limit at **150 mg/m³** — not 20, not 60.

<figure class="fig">
<svg viewBox="0 0 680 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="qc-t qc-d" font-family="'Helvetica Neue',Helvetica,Arial,sans-serif">
<title id="qc-t">The competing system's ranges against Malaysia's biomass TPM limit</title>
<desc id="qc-d">A number line from 0 to 170 milligrams per cubic metre. The competing scattered-light system's primary range runs from 0 to 20, with supplementary ranges extending to about 60. Malaysia's Second Schedule biomass TPM limit sits at 150, well beyond anything the certificate covers.</desc>
<line x1="60" y1="100" x2="640" y2="100" stroke="var(--line)" stroke-width="1.5"/>
<rect x="265" y="70" width="307" height="60" fill="#FCE9E7"/>
<rect x="60" y="88" width="68" height="24" fill="var(--grey)"/>
<rect x="128" y="88" width="137" height="24" fill="none" stroke="var(--grey)" stroke-width="1.5" stroke-dasharray="4 3"/>
<line x1="572" y1="62" x2="572" y2="130" stroke="#C0392B" stroke-width="2.5"/>
<path d="M572 62 L566 52 L578 52 Z" fill="#C0392B"/>
<text x="60" y="146" text-anchor="middle" font-size="9" fill="var(--muted)">0</text>
<text x="128" y="146" text-anchor="middle" font-size="9" fill="var(--ink)" font-weight="700">20</text>
<text x="265" y="146" text-anchor="middle" font-size="9" fill="var(--muted)">~60</text>
<text x="572" y="146" text-anchor="middle" font-size="10" fill="#C0392B" font-weight="700">150</text>
<text x="94" y="76" text-anchor="middle" font-size="8.5" fill="var(--ink)">certified</text>
<text x="196" y="76" text-anchor="middle" font-size="8.5" fill="var(--muted)">supplementary, to ~60</text>
<text x="418" y="76" text-anchor="middle" font-size="9" fill="#C0392B" font-weight="700">not covered by this certificate</text>
<text x="572" y="44" text-anchor="middle" font-size="10" fill="#C0392B" font-weight="700">Malaysia's biomass</text>
<text x="572" y="56" text-anchor="middle" font-size="10" fill="#C0392B" font-weight="700">TPM ELV — 150 mg/m³</text>
</svg>
<figcaption>The competing system's own certified and supplementary ranges (mg/m³) plotted against Malaysia's Second Schedule solid-fuel TPM limit. The certificate simply doesn't extend to a 150 mg/m³ application — a gap you can see directly on the document, not a judgement call.</figcaption>
</figure>

The DustHunter T100's ranges aren't reducible to one number line the same way — extinction units need the installed path length to convert — but the widest of its five certified ranges extends ten times past its stated reference point, which comfortably brackets a 150 mg/m³ application in a way the competing system's single 0–20 mg/m³ range does not.

## What this means before you sign a quotation

Two checks, in this order:

1. **Does the certificate list opacity, or only dust?** If your boiler needs both under Regulation 12(3) and the Second Schedule, a dust-only certificate can't be the whole answer — you'd need a second instrument, or a different analyser.
2. **Does the certified range reach your ELV, with margin?** Look up your own Second Schedule row — 150 mg/m³ for general solid fuel — and check it against the certificate's stated range, not the sales brochure's.

Both checks take five minutes. Before you sign anything, go to **[qal1.de](https://www.qal1.de/)**, search the exact manufacturer and model on your quotation, and open the certificate yourself — don't rely on a datasheet's summary of what it says. We cover the physical side of a compliant installation — what's actually mounted on the stack — in [Anatomy of an in-situ CEMS install]({{ '/insights/in-situ-cems-installation-anatomy/' | relative_url }}), and the broader extractive-vs-in-situ decision in [how a CEMS actually measures]({{ '/insights/how-cems-measures-extractive-in-situ-sampling/' | relative_url }}). That shared R² caveat, incidentally, is not the red flag it looks like — we explain why in [calibrating a transmissometer dust CEMS]({{ '/insights/calibrating-transmissometer-dust-cems-dusthunter-t100/' | relative_url }}).

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

---

*This article is general guidance, not legal advice. Certificate details are drawn from currently valid, publicly registered EN 15267 / QAL1 certificates at qal1.de; verify the current status of any certificate directly before relying on it. For obligations specific to your facility, refer to the current Clean Air Regulations 2014, the DOE CEMS Guidelines, or speak with us directly.*
