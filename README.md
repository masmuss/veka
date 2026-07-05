# 🌲 Astro Garden

**The Minimalist Digital Garden & Wiki Starter for Astro.**

Astro Garden bukanlah pesaing kerangka dokumentasi raksasa. Ini adalah antitesisnya. Dibangun khusus untuk Anda yang menginginkan tempat mencatat, _digital garden_, atau wiki personal yang sangat cepat, organik, dan bebas dari konfigurasi _routing_ yang kaku.

Lempar file Markdown Anda ke dalam folder, dan biarkan sistem merajutnya secara otomatis.

![Astro](https://img.shields.io/badge/Astro-3.0+-FF7E33?style=flat-square&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Pagefind](https://img.shields.io/badge/Search-Pagefind-blue?style=flat-square)

---

## ⚡ Mengapa Menggunakan Astro Garden?

- **Zero-Config Routing:** Tidak perlu mendaftarkan navigasi di file `config`. Buat folder sedalam apa pun (contoh: `src/content/wiki/koding/arsitektur/`), dan URL beserta navigasi _sidebar_ akan terbuat secara otomatis.
- **Static Search Ultra-Cepat:** Menggunakan [Pagefind](https://pagefind.app/). Pencarian diindeks secara lokal saat proses _build_ tanpa memerlukan layanan pihak ketiga.
- **Zod Schema Validation:** _Frontmatter_ dijaga ketat. Tidak ada lagi eror saat _build_ hanya karena Anda lupa memasukkan judul atau salah format tanggal.
- **Konsep "Digital Garden":** Dilengkapi dengan properti `growthStage` (`seedling`, `budding`, `evergreen`) untuk melacak tingkat kematangan setiap catatan Anda.
- **100% Lighthouse Score:** UI dibangun secara selektif menggunakan komponen minimalis dan _Vanilla JS_ murni untuk interaktivitas, memastikan tidak ada _runtime bloat_.

---

## 🚀 Quick Start (Kurang dari 1 Menit)

Jalankan perintah ini di terminal Anda untuk mengkloning _template_ dan memulai server lokal:

```bash
# 1. Clone repositori ini (atau gunakan degit)
npx degit your-username/astro-garden my-wiki

# 2. Masuk ke direktori
cd my-wiki

# 3. Install dependensi
npm install

# 4. Jalankan server lokal
npm run dev
```

Catatan Penting untuk Fitur Pencarian: > Fitur pencarian Pagefind bekerja dengan membaca file statis hasil build. Untuk menguji pencarian secara lokal, Anda harus menjalankan npm run build diikuti dengan npm run preview.

## 📝 Cara Menulis Catatan

Semua catatan Anda hidup di dalam direktori src/content/wiki/. Anda bebas membuat sub-direktori baru. Setiap file .md atau .mdx wajib memiliki frontmatter berikut:

```plaintext
---
title: "Judul Catatan Anda"
description: "Penjelasan singkat untuk SEO dan cuplikan pencarian."
createdAt: 2026-07-05
updatedAt: 2026-07-05
tags: ["konsep", "ide"]
isPinned: false
growthStage: "seedling" # Pilihan: seedling | budding | evergreen
---

Tulis isi pikiran Anda di sini menggunakan Markdown...
```

## 🏗️ Struktur Proyek

```plaintext
├── src/
│   ├── content/
│   │   ├── config.ts       # Validasi skema Zod
│   │   └── wiki/           # Kumpulan folder dan file markdown Anda
│   ├── layouts/
│   │   ├── BaseLayout.astro # Kerangka HTML murni (SEO & Meta)
│   │   └── WikiLayout.astro # Grid 3-Kolom (Navigasi, Konten, TOC)
│   └── pages/
│       ├── index.astro      # Pusat Kendali / Beranda
│       └── wiki/
│           └── [...slug].astro # Mesin penggerak routing dinamis
└── tailwind.config.mjs
```

## 🌍 Deployment

Astro Garden dikonfigurasi sebagai Static Site Generator (SSG) secara bawaan. Proses deployment sangat mulus di platform seperti Vercel, Netlify, atau Cloudflare Pages.
Pastikan perintah build Anda di platform target disetel ke: `npm run build`
Perintah ini secara otomatis akan menjalankan astro build lalu memicu integrasi pagefind untuk membangun indeks pencarian.
