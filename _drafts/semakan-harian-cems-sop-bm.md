---
layout: post
title: "Semakan harian CEMS: SOP satu halaman untuk operator loji"
full_title: "SOP Semakan Harian CEMS untuk Operator Loji (DAHS, AMS, Portal JAS) | Mesra"
date: 2026-10-07 00:05:00
description: "SOP harian satu halaman untuk operator CEMS: semak DAHS, monitor kelegapan T100 dan portal CEMS JAS dalam 15 minit, dengan tempoh pemberitahuan JAS yang tepat di bawah Peraturan Udara Bersih 2014 dan AKAS 1974."
lang: ms
alt_lang: en
alt_url: /insights/daily-cems-check-sop/
---

<div lang="ms" markdown="1">

*Rutin harian satu halaman untuk operator loji: tiga semakan ringkas, kira-kira 15 minit kesemuanya, bagi memastikan CEMS anda sedang mengukur, merekod dan melapor kepada Jabatan Alam Sekitar (JAS). Ditulis untuk pemasangan monitor kelegapan SICK DustHunter T100 kami, dan boleh dicetak serta digunakan secara percuma.*

CEMS yang dihidupkan tidak semestinya CEMS yang menjalankan tugasnya. Instrumen boleh hanyut, perakam data boleh berhenti merekod, atau data boleh berhenti sampai kepada JAS tanpa disedari, dan petunjuk pertama ialah jurang dalam rekod. Di bawah Peraturan-Peraturan Kualiti Alam Sekeliling (Udara Bersih) 2014, [peranti pemantauan yang gagal mesti dilaporkan dalam masa satu jam]({{ '/insights/cems-notification-rules-excess-emission-cems-failure/' | relative_url }}), jadi masalah yang ditemui pada hari kejadian jauh lebih murah daripada yang ditemui pada audit seterusnya.

Rutin di bawah membahagikan CEMS kepada tiga tempat di mana kerosakan boleh tersembunyi: **DAHS** (sistem perolehan dan pengendalian data, iaitu kabinet dan skrin sentuh), **AMS** (sistem pengukuran automatik, di sini monitor kelegapan T100 di cerobong), dan **portal CEMS JAS** (cems.doe.gov.my, apa yang sebenarnya dilihat oleh pegawai JAS).

## Sebelum bermula

**Siapa:** operator loji atau penyelia syif yang bertugas. **Bila:** sekali sehari pada waktu yang sama, dan sekali lagi selepas sebarang gangguan bekalan elektrik, gangguan rangkaian atau dandang dihidupkan semula. Anda hanya melihat dan merekod. Jangan sekali-kali but semula, set semula, konfigurasi semula atau bersihkan apa-apa melainkan Mesra memberitahu anda.

Tandakan setiap baris dengan salah satu daripada tiga keputusan:

- **OK**: bacaan sepadan dengan lajur Normal.
- **ACT**: di luar julat Normal. Lakukan tindakan dalam lajur terakhir, kemudian semak semula.
- **REPORT**: masih salah selepas tindakan, atau ditanda REPORT. Lapor serta-merta, kerana tempoh notis sah bagi peranti pemantauan yang gagal ialah 1 jam. Ambil gambar atau tangkapan skrin, maklumkan penyelia dan Mesra, dan ikut bahagian *Apabila ada masalah* di bawah.

## Bahagian A: Sistem Perolehan dan Pengendalian Data (DAHS)

DAHS ialah kabinet dan skrin sentuh yang merekod output penganalisis dan menghantarnya kepada JAS. DAHS yang berkuasa tetapi tidak merekod atau tidak menghantar tetap dikira kegagalan.

<figure class="fig report">
<p class="fig-title">Bahagian A: lapan semakan DAHS</p>
<div class="rep-rows">
<div class="rep-row"><span class="rep-k">A1</span><span class="rep-body"><span class="rep-name">Kabinet dan skrin sentuh</span><span class="rep-desc"><strong>Normal:</strong> Skrin menyala dan nilai berubah setiap minit. Pintu tertutup, tiada habuk, air atau bau terbakar. <strong>Jika tidak normal:</strong> Skrin beku atau kosong: ACT, semak UPS dan suis utama, jangan but semula. Masih beku atau kosong: REPORT serta-merta.</span></span></div>
<div class="rep-row"><span class="rep-k">A2</span><span class="rep-body"><span class="rep-name">Kuasa dan UPS</span><span class="rep-desc"><strong>Normal:</strong> UPS berjalan dengan kuasa utama tanpa bunyi bip atau LED penggera. Pemutus litar (RCCB, MCB) berada di kedudukan atas. <strong>Jika tidak normal:</strong> Menggunakan bateri atau berbunyi: ACT, maklumkan juruelektrik, cari punca gangguan kuasa utama. Kabinet mati: REPORT.</span></span></div>
<div class="rep-row"><span class="rep-k">A3</span><span class="rep-body"><span class="rep-name">Tarikh dan masa</span><span class="rep-desc"><strong>Normal:</strong> Jam DAHS sama dengan jam dinding anda (waktu Malaysia) dalam lingkungan 1 minit. <strong>Jika tidak normal:</strong> Jam salah: REPORT. Jam yang salah menyebabkan data direkodkan pada masa yang salah di JAS.</span></span></div>
<div class="rep-row"><span class="rep-k">A4</span><span class="rep-body"><span class="rep-name">Bacaan langsung</span><span class="rep-desc"><strong>Normal:</strong> Kelegapan (%) dipaparkan dengan cap masa semasa. Nilai munasabah mengikut keadaan dandang. <strong>Jika tidak normal:</strong> Nilai beku pada satu nombor, bacaan 0 semasa dandang beroperasi, atau bacaan 100 semasa dandang mati: REPORT.</span></span></div>
<div class="rep-row"><span class="rep-k">A5</span><span class="rep-body"><span class="rep-name">Purata dan jurang data</span><span class="rep-desc"><strong>Normal:</strong> Purata setengah jam dan harian dipaparkan. Tiada tempoh kosong dalam trend semalam. <strong>Jika tidak normal:</strong> Jurang ditemui: catat masa mula dan tamat, cari puncanya (kuasa, rangkaian, dandang mati), REPORT jika puncanya tidak diketahui.</span></span></div>
<div class="rep-row"><span class="rep-k">A6</span><span class="rep-body"><span class="rep-name">Skrin penggera</span><span class="rep-desc"><strong>Normal:</strong> Tiada penggera kegagalan penentukuran, kerosakan atau pelepasan berlebihan yang masih terbuka. <strong>Jika tidak normal:</strong> Penggera terbuka: salin teks dan masanya, REPORT. Jangan padamkannya.</span></span></div>
<div class="rep-row"><span class="rep-k">A7</span><span class="rep-body"><span class="rep-name">Sambungan rangkaian</span><span class="rep-desc"><strong>Normal:</strong> LED penghala (router) dan radio tanpa wayar menyala dan tetap. <strong>Jika tidak normal:</strong> Gelap atau merah: ACT, semak bekalan kuasanya, jangan ubah tetapan. Masih terputus: REPORT.</span></span></div>
<div class="rep-row"><span class="rep-k">A8</span><span class="rep-body"><span class="rep-name">Ejen CEMS</span><span class="rep-desc"><strong>Normal:</strong> Ejen menunjukkan berjalan, Connected, dan Last upload bergerak ke hadapan sepanjang hari. JAS menjangkakan satu bacaan setiap minit. <strong>Jika tidak normal:</strong> Last upload tidak bergerak, atau bacaan hilang: REPORT serta-merta. Minit yang hilang ialah jurang dalam rekod JAS, dan purata setengah jam memerlukan sekurang-kurangnya 22 bacaan sah (Garis Panduan CEMS JAS 2.3.1).</span></span></div>
</div>
<figcaption>DAHS merekod, memurnikan dan menghantar data. Semak terlebih dahulu.</figcaption>
</figure>

Bukan sebahagian daripada semakan harian: kesihatan kuasa Raspberry Pi, ruang cakera, sandaran dan versi perisian. Mesra menyemaknya semasa lawatan penyelenggaraan pencegahan suku tahunan.

## Bahagian B: Sistem Pengukuran Automatik (AMS)

Bahagian ini merangkumi monitor kelegapan SICK DustHunter T100 di cerobong dandang: unit penghantar/penerima, pemantul dan unit kawalan MCU. Semak paparan MCU dan bacaan DAHS dari aras tanah. **Jangan memanjat cerobong untuk semakan harian.**

<figure class="fig report">
<p class="fig-title">Bahagian B: lapan semakan T100</p>
<div class="rep-rows">
<div class="rep-row"><span class="rep-k">B1</span><span class="rep-body"><span class="rep-name">Paparan MCU</span><span class="rep-desc"><strong>Normal:</strong> Menunjukkan mod pengukuran tanpa ralat dan tanpa amaran. <strong>Jika tidak normal:</strong> Sebarang ralat atau amaran: salin teks dan masanya, REPORT.</span></span></div>
<div class="rep-row"><span class="rep-k">B2</span><span class="rep-body"><span class="rep-name">Mod penyelenggaraan</span><span class="rep-desc"><strong>Normal:</strong> Tidak dalam mod Maintenance. Selepas sebarang lawatan servis, sahkan ia telah ditukar semula ke mod Measurement. <strong>Jika tidak normal:</strong> Masih dalam mod Maintenance: REPORT serta-merta. Bacaan tidak sah dalam mod ini.</span></span></div>
<div class="rep-row"><span class="rep-k">B3</span><span class="rep-body"><span class="rep-name">Bacaan berbanding dandang</span><span class="rep-desc"><strong>Normal:</strong> Dandang beroperasi: kelegapan ialah nilai sebenar yang berubah-ubah. Dandang mati: bacaan jatuh kepada kira-kira 0%. <strong>Jika tidak normal:</strong> Tetap 100% semasa dandang mati, atau tetap 0% walaupun asap kelihatan: REPORT.</span></span></div>
<div class="rep-row"><span class="rep-k">B4</span><span class="rep-body"><span class="rep-name">Pelepasan berbanding had</span><span class="rep-desc"><strong>Normal:</strong> Kelegapan satu minit kekal pada atau di bawah 20% (Peraturan 12, Peraturan-Peraturan Kualiti Alam Sekeliling (Udara Bersih) 2014), atau nilai yang lebih rendah dalam lesen JAS anda. <strong>Jika tidak normal:</strong> Melebihi had: maklumkan penyelia anda sekarang dan rujuk <em>Apabila ada masalah</em>.</span></span></div>
<div class="rep-row"><span class="rep-k">B5</span><span class="rep-body"><span class="rep-name">Kitaran kawalan automatik</span><span class="rep-desc"><strong>Normal:</strong> Satu kitaran kawalan berjalan kira-kira setiap 8 jam dan kelihatan sebagai penurunan singkat dalam trend. Sifar membaca 0% (4 mA) dan span membaca 70% (15.2 mA), masing-masing dalam lingkungan 3% daripada garis asas. <strong>Jika tidak normal:</strong> Tiada penurunan dalam 8 jam, atau sifar atau span tersasar lebih 3%: REPORT. Jangan laras apa-apa.</span></span></div>
<div class="rep-row"><span class="rep-k">B6</span><span class="rep-body"><span class="rep-name">Pencemaran (optik kotor)</span><span class="rep-desc"><strong>Normal:</strong> Had amaran ialah 20% dan had kegagalan ialah 30%. Jika DAHS atau MCU menunjukkan pencemaran, nilainya di bawah 20%. <strong>Jika tidak normal:</strong> Pada 20% atau lebih: REPORT. Mesra atau juruteknik terlatih akan membersihkan optik.</span></span></div>
<div class="rep-row"><span class="rep-k">B7</span><span class="rep-body"><span class="rep-name">Udara pembersih (purge air)</span><span class="rep-desc"><strong>Normal:</strong> Penghembus udara pembersih berjalan dan anda mendengar aliran udara. Hos dan pengapit kukuh, dan penutup penapis tertutup. <strong>Jika tidak normal:</strong> Penghembus berhenti atau hos tercabut: REPORT serta-merta. Habuk akan mengotorkan optik dengan cepat.</span></span></div>
<div class="rep-row"><span class="rep-k">B8</span><span class="rep-body"><span class="rep-name">Rumah dan kabel</span><span class="rep-desc"><strong>Normal:</strong> Penutup penghantar/penerima dan pemantul tertutup. Tiada kabel longgar atau rosak yang kelihatan dari aras tanah. <strong>Jika tidak normal:</strong> Kerosakan atau penutup terbuka: REPORT.</span></span></div>
</div>
<figcaption>Lihat dan rekod sahaja. Toleransi 3% ialah had kawalan yang kami gunakan dalam carta hanyutan QAL3.</figcaption>
</figure>

## Bahagian C: Portal CEMS JAS (cems.doe.gov.my)

Portal ialah apa yang dilihat oleh pegawai JAS. Log masuk dari mana-mana komputer pejabat dengan akaun premis anda dan sahkan data dari cerobong anda sedang sampai. Bandingkan dengan bacaan DAHS yang baru anda semak.

<figure class="fig report">
<p class="fig-title">Bahagian C: enam semakan portal</p>
<div class="rep-rows">
<div class="rep-row"><span class="rep-k">C1</span><span class="rep-body"><span class="rep-name">Log masuk</span><span class="rep-desc"><strong>Normal:</strong> Akaun premis anda dapat dibuka. Pelanggan memastikan log masuk berfungsi. <strong>Jika tidak normal:</strong> Tidak dapat log masuk: pelanggan memohon JAS memulihkan akses pada hari yang sama, kerana Bahagian C tidak dapat dilakukan tanpanya. Ini bukan kerosakan CEMS.</span></span></div>
<div class="rep-row"><span class="rep-k">C2</span><span class="rep-body"><span class="rep-name">Premis dan cerobong</span><span class="rep-desc"><strong>Normal:</strong> Nama premis adalah terkini, dan setiap cerobong dalam lesen anda disenaraikan. <strong>Jika tidak normal:</strong> Nama syarikat lama, atau cerobong tiada: REPORT kepada Mesra dengan tangkapan skrin.</span></span></div>
<div class="rep-row"><span class="rep-k">C3</span><span class="rep-body"><span class="rep-name">Masa data terkini</span><span class="rep-desc"><strong>Normal:</strong> Bacaan terbaharu pada portal mempunyai masa dan nilai yang sama dengan bacaan terkini pada DAHS. <strong>Jika tidak normal:</strong> Portal ketinggalan berbanding DAHS: REPORT serta-merta. Data tidak sampai kepada JAS.</span></span></div>
<div class="rep-row"><span class="rep-k">C4</span><span class="rep-body"><span class="rep-name">Padanan dengan DAHS</span><span class="rep-desc"><strong>Normal:</strong> Nilai portal pada masa yang sama hampir sama dengan nilai DAHS. <strong>Jika tidak normal:</strong> Perbezaan besar, atau portal mendatar sedangkan DAHS berubah: REPORT dengan kedua-dua tangkapan skrin.</span></span></div>
<div class="rep-row"><span class="rep-k">C5</span><span class="rep-body"><span class="rep-name">Jurang dalam graf semalam</span><span class="rep-desc"><strong>Normal:</strong> Graf berterusan sepanjang hari dandang beroperasi. <strong>Jika tidak normal:</strong> Jurang: tulis masa mula dan tamat dan bandingkan dengan jurang A5. REPORT jika DAHS tiada jurang.</span></span></div>
<div class="rep-row"><span class="rep-k">C6</span><span class="rep-body"><span class="rep-name">Amaran dan notis</span><span class="rep-desc"><strong>Normal:</strong> Tiada amaran pelepasan berlebihan. Tiada peringatan atau notis daripada JAS yang belum anda tindak. <strong>Jika tidak normal:</strong> Amaran dipaparkan: rujuk <em>Apabila ada masalah</em>. Notis daripada JAS: serahkan kepada penyelia dan Mesra.</span></span></div>
</div>
<figcaption>DAHS yang sihat tetapi portal kosong ialah kes yang kerap kami temui, itulah sebabnya bahagian ini wujud.</figcaption>
</figure>

## Apabila ada masalah

Pemilik atau penghuni premis menanggung tanggungjawab undang-undang untuk memaklumkan JAS. Mesra membantu anda mencari dan membaiki kerosakan. Tempoh di bawah dikira dari saat kegagalan atau penemuan, bukan dari saat dokumen siap.

<figure class="fig report">
<p class="fig-title">Siapa perlu dimaklumkan, dan bila</p>
<div class="rep-rows">
<div class="rep-row"><span class="rep-k">1</span><span class="rep-body"><span class="rep-name">CEMS atau mana-mana peranti pemantauan gagal beroperasi</span><span class="rep-desc"><strong>Beritahu:</strong> Ketua Pengarah JAS, melalui pejabat JAS negeri atau cawangan, menggunakan borang Kegagalan CEMS (Lampiran 4 Garis Panduan CEMS JAS). <strong>Tempoh:</strong> tidak lewat daripada 1 jam dari masa kegagalan (Peraturan 17(7), Peraturan-Peraturan Udara Bersih 2014; Garis Panduan 6.2.4).</span></span></div>
<div class="rep-row"><span class="rep-k">2</span><span class="rep-body"><span class="rep-name">Data CEMS gagal sampai ke pelayan JAS</span><span class="rep-desc"><strong>Beritahu:</strong> JAS melalui pejabat negeri atau cawangan, menggunakan borang Lampiran 4 (Garis Panduan 6.2.6(e)). <strong>Tempoh:</strong> Garis Panduan tidak menetapkan had masa. Mesra menasihatkan agar ia dianggap sebagai kegagalan CEMS dan dimaklumkan dalam masa 1 jam.</span></span></div>
<div class="rep-row"><span class="rep-k">3</span><span class="rep-body"><span class="rep-name">Pelepasan melebihi nilai had yang ditetapkan</span><span class="rep-desc"><strong>Beritahu:</strong> Ketua Pengarah, melalui pejabat JAS negeri atau cawangan, menggunakan borang Pelepasan Berlebihan (Lampiran 4). <strong>Tempoh:</strong> dalam masa 24 jam dari tarikh dikesan (Peraturan 17(6); Garis Panduan 6.2.3). Had kelegapan ialah 20% pada purata 1 minit (Peraturan 12). Garis Panduan mentakrifkan pelepasan berlebihan sebagai purata setengah jam melebihi 2 kali nilai had, atau purata harian melebihi nilai had.</span></span></div>
<div class="rep-row"><span class="rep-k">4</span><span class="rep-body"><span class="rep-name">CEMS ditutup untuk penyelenggaraan berjadual atau penggantian alat ganti, atau sumber berhenti beroperasi</span><span class="rep-desc"><strong>Beritahu:</strong> JAS melalui pejabat negeri atau cawangan, menggunakan borang Lampiran 4 (Garis Panduan 6.2.5). <strong>Tempoh:</strong> Garis Panduan tidak menetapkan had masa. Mesra menasihatkan agar JAS dimaklumkan sebelum penutupan bermula.</span></span></div>
<div class="rep-row"><span class="rep-k">5</span><span class="rep-body"><span class="rep-name">Sistem kawalan pencemaran udara (contohnya scrubber atau penapis habuk) gagal</span><span class="rep-desc"><strong>Beritahu:</strong> Ketua Pengarah, melalui pejabat JAS negeri atau cawangan, menggunakan borang Lampiran 4. <strong>Tempoh:</strong> tidak lewat daripada 1 jam dari masa kegagalan (Peraturan 8).</span></span></div>
<div class="rep-row"><span class="rep-k">6</span><span class="rep-body"><span class="rep-name">Pelepasan tidak sengaja di premis</span><span class="rep-desc"><strong>Beritahu:</strong> Ketua Pengarah. <strong>Tempoh:</strong> serta-merta setelah dikesan (Peraturan 21(1)).</span></span></div>
</div>
<figcaption>Nombor peraturan ialah daripada Peraturan-Peraturan Kualiti Alam Sekeliling (Udara Bersih) 2014; nombor klausa ialah daripada Garis Panduan CEMS JAS Versi 8.</figcaption>
</figure>

Satu perkara perlu diberi perhatian: Peraturan 17(3) menyatakan tiada purata setengah jam boleh melebihi piawaian "lebih daripada dua kali", manakala Garis Panduan JAS membacanya sebagai 2 kali nilai had. Peraturan 17(6) memerlukan notis setiap kali pelepasan melebihi nilai had yang ditetapkan. Jika anda tidak pasti sama ada sesuatu kejadian memerlukan notis, buat pemberitahuan. Pegawai JAS anda boleh mengesahkan pencetus mana yang terpakai untuk lesen anda.

Apabila menghubungi Mesra di help@alamsekitar.com.my, sertakan:

1. Nama premis, nombor cerobong serta nama dan nombor telefon anda.
2. Nombor semakan yang gagal (contohnya A8 atau C3) dan masa anda menemuinya.
3. Gambar paparan MCU dan tangkapan skrin paparan DAHS, status ejen CEMS dan graf portal.
4. Sama ada dandang beroperasi, dan sebarang gangguan elektrik atau rangkaian pada hari itu.

**Simpan rekod.** Simpan helaian harian ini, notis dan buku log sekurang-kurangnya 3 tahun, dan sediakan untuk pemeriksaan (Peraturan 10(2) dan 17(5); Garis Panduan 6.1.3).

Tempoh JAS lain, bukan sebahagian daripada semakan harian:

- Keputusan penilaian CEMS tahunan: dalam masa 3 bulan selepas tamat setiap tahun kalendar (Peraturan 17(5); Garis Panduan 6.2.2, borang Lampiran 3).
- Laporan Audit Ujian Fungsi dan laporan CVT atau AST: tidak lewat daripada 2 bulan kalendar selepas audit selesai (Garis Panduan 6.2.1).

**Mengapa tempoh ini penting.** Kegagalan mematuhi Peraturan-Peraturan Udara Bersih 2014 ialah suatu kesalahan, dengan denda sehingga RM100,000 atau penjara sehingga 2 tahun, atau kedua-duanya (Peraturan 29). Di bawah Akta Kualiti Alam Sekeliling 1974, sebagaimana dipinda oleh Akta A1712 (2024), pelepasan yang melanggar syarat yang boleh diterima di bawah seksyen 21 boleh dikenakan denda RM10,000 hingga RM1,000,000, atau penjara sehingga 5 tahun, atau kedua-duanya, serta sehingga RM1,000 bagi setiap hari ia berterusan selepas JAS menyampaikan notis (seksyen 22(3)). Pemegang lesen yang melanggar terma atau syarat lesen boleh dikenakan denda RM25,000 hingga RM250,000, atau penjara sehingga 5 tahun, atau kedua-duanya, serta RM1,000 bagi setiap hari selepas JAS menyampaikan notis (seksyen 16(2)). Pengarah dan pengurus syarikat boleh dipertanggungjawabkan melainkan mereka membuktikan bahawa mereka tidak bersetuju dan telah mengambil segala usaha wajar (seksyen 43). Lebih lanjut dalam [kesalahan dan penalti di bawah Peraturan Udara Bersih dan AKAS]({{ '/insights/offences-penalties-clean-air-regulations-eqa-1974/' | relative_url }}).

## Helaian rekod harian

Tanda OK, atau tulis ACT atau REPORT bersama nombor semakan. Cetak halaman ini, atau salin jadual ke dalam buku log anda.

<div class="sheet-wrap" style="overflow-x:auto">
<table style="width:100%;border-collapse:collapse;font-size:.85rem">
<thead><tr><th style="border:1px solid var(--line);padding:6px 8px;text-align:left">Tarikh</th><th style="border:1px solid var(--line);padding:6px 8px;text-align:left">Masa</th><th style="border:1px solid var(--line);padding:6px 8px;text-align:left">A. DAHS</th><th style="border:1px solid var(--line);padding:6px 8px;text-align:left">B. AMS</th><th style="border:1px solid var(--line);padding:6px 8px;text-align:left">C. Portal JAS</th><th style="border:1px solid var(--line);padding:6px 8px;text-align:left">Inisial</th><th style="border:1px solid var(--line);padding:6px 8px;text-align:left">Catatan dan tindakan diambil</th></tr></thead>
<tbody>
<tr><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td></tr>
<tr><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td></tr>
<tr><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td></tr>
<tr><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td></tr>
<tr><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td><td style="border:1px solid var(--line);height:2.2em">&nbsp;</td></tr>
</tbody>
</table>
</div>

## Kedudukan semakan ini

Semakan harian ialah lapisan operator dalam [pemantauan prestasi berterusan QAL3]({{ '/insights/qal3-ongoing-performance-monitoring-drift-control/' | relative_url }}) yang memastikan CEMS yang telah ditentukur kekal sah antara kempen. Ia tidak menggantikan kerja sifar dan span oleh juruteknik ([cara ia dilakukan pada T100]({{ '/insights/dusthunter-t100-zeroing-alignment-procedure/' | relative_url }})), dan ia tidak mengubah apa yang dikira sebagai purata sah ([peraturan 75 peratus]({{ '/insights/cems-valid-averages-75-percent-rule/' | relative_url }})). Ia memastikan masalah yang sampai kepada JAS ialah masalah yang anda temui dahulu.

Jika anda mahu Mesra menjalankan semakan ini untuk anda, atau melatih operator anda pada sistem anda sendiri, [hubungi kami]({{ '/' | relative_url }}#contact). Lihat juga perkhidmatan [penyelenggaraan CEMS]({{ '/services/cems-maintenance/' | relative_url }}) dan [integrasi CEMS JAS]({{ '/services/doe-cems-integration/' | relative_url }}) kami.

<div class="related">
  <p class="label">Rujukan</p>
  <ul>
    <li><a href="{{ '/insights/cems-notification-rules-excess-emission-cems-failure/' | relative_url }}">Peraturan pemberitahuan CEMS: pelepasan berlebihan dan kegagalan CEMS</a> — senarai lengkap tugas pemberitahuan (dalam bahasa Inggeris)</li>
    <li><a href="{{ '/insights/doe-cems-data-transmission-explained/' | relative_url }}">cems.doe.gov.my, "CEMS 2.0", "CEMS 3.0": apakah nama sebenar platform data JAS</a> — apa yang disemak dalam Bahagian C (dalam bahasa Inggeris)</li>
    <li><a href="{{ '/insights/cems-records-reports-doe-compliance-verification/' | relative_url }}">Rekod dan laporan CEMS untuk pengesahan pematuhan JAS</a> — apa yang perlu disimpan (dalam bahasa Inggeris)</li>
    <li><a href="https://www.doe.gov.my/wp-content/uploads/2025/12/SERIES-OF-CEMS_V12_final_interactive.pdf" target="_blank" rel="noopener">Garis Panduan CEMS, Jilid I &amp; II (Versi 8, 2025)</a> — Jabatan Alam Sekitar Malaysia</li>
    <li><a href="https://cems.doe.gov.my" target="_blank" rel="noopener">cems.doe.gov.my</a> — Sistem DOE untuk CEMS</li>
    <li><a href="{{ '/insights/daily-cems-check-sop/' | relative_url }}" hreflang="en" lang="en">English version</a></li>
  </ul>
</div>

<p><em>Ini ialah panduan am, bukan nasihat undang-undang. Ia menerangkan rutin harian yang kami cadangkan untuk CEMS yang kami pasang dan servis, dan tidak menggantikan manual pengeluar, syarat lesen JAS anda atau prosedur keselamatan tapak anda. Sahkan keperluan pemberitahuan bagi lesen anda dengan pejabat JAS anda.</em></p>

</div>
