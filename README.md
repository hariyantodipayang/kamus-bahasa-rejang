# 📖 Kamus Bahasa Rejang & Aksara Kaganga

Aplikasi web open source untuk belajar dan melestarikan **Bahasa Rejang** dari Bengkulu — lengkap dengan **5 dialek** dan **aksara Kaganga** interaktif.

🌐 **Demo langsung:** [buka `index.html` di browser] | [GitHub Pages - segera hadir]

---

## ✨ Fitur

| Fitur | Keterangan |
|-------|------------|
| 📚 **Kamus** | Cari kata Indonesia ↔ Rejang, filter per dialek & kategori |
| 🔤 **Huruf Kaganga** | Tabel lengkap 23 konsonan + vokal + angka, dengan tooltip dan Unicode |
| 🔄 **Konverter Teks** | Ketik Latin → tampil otomatis dalam aksara Kaganga |
| 🎯 **Kuis** | Latihan tebak huruf Kaganga & kosakata dengan skor |

---

## 🗺️ Lima Dialek yang Didokumentasikan

- **Lebong** — Kabupaten Lebong
- **Rejang Lebong** — Kabupaten Rejang Lebong *(dialek referensi)*
- **Kepahiang** — Kabupaten Kepahiang
- **Bengkulu Utara** — Kabupaten Bengkulu Utara
- **Bengkulu Tengah** — Kabupaten Bengkulu Tengah

---

## 📁 Struktur File

```
bahasa-rejang/
├── index.html          ← Aplikasi web utama (bisa langsung dibuka)
├── data/
│   ├── kosakata.json   ← Database kosakata (40+ kata, 5 dialek)
│   └── kaganga.json    ← Data lengkap huruf Kaganga
├── README.md
└── LICENSE
```

---

## 🚀 Cara Pakai

### Buka Lokal
```bash
# Tidak perlu server! Cukup buka file:
open index.html
# atau klik dua kali file index.html
```

### Host di GitHub Pages
1. Fork repositori ini
2. Buka **Settings → Pages**
3. Pilih branch `main`, folder `/root`
4. Kunjungi `https://username.github.io/bahasa-rejang`

### Embed di Website Lain
```html
<iframe src="https://username.github.io/bahasa-rejang" 
  width="100%" height="600" frameborder="0"></iframe>
```

---

## 🤝 Cara Berkontribusi

Kami sangat menyambut kontribusi dari siapapun — terutama penutur asli Bahasa Rejang!

### Menambah Kosakata
Edit file `data/kosakata.json` dengan format:

```json
{
  "id": "041",
  "indonesia": "kata Indonesia",
  "kategori": "alam",
  "dialek": {
    "lebong": { "kata": "kata rejang", "ipa": "transkripsi IPA", "kaganga": "ꤰꤱꤲ" },
    "rejang_lebong": { "kata": "...", "ipa": "...", "kaganga": "..." },
    "kepahiang": { "kata": "...", "ipa": "...", "kaganga": "..." },
    "bengkulu_utara": { "kata": "...", "ipa": "...", "kaganga": "..." },
    "bengkulu_tengah": { "kata": "...", "ipa": "...", "kaganga": "..." }
  }
}
```

**Kategori yang tersedia:** `alam`, `keluarga`, `kegiatan`, `angka`, `sifat`, `tubuh`, `kata_ganti`, `ungkapan`, `bangunan`

### Melaporkan Kesalahan
Buka [GitHub Issues](https://github.com/USERNAME/bahasa-rejang/issues) dan jelaskan:
- Kata atau huruf yang salah
- Koreksi yang benar
- Sumber referensi (jika ada)

### Ide Pengembangan
- [ ] Rekaman audio pengucapan kata
- [ ] Lebih banyak kosakata (target: 500+ kata)
- [ ] Kalimat & frasa umum
- [ ] Cerita pendek dalam Bahasa Rejang
- [ ] Aplikasi mobile (Android/iOS)
- [ ] Mode offline (PWA)
- [ ] API untuk developer

---

## 📚 Referensi

- Jaspan, M.A. (1964). *A Rejang-English dictionary*. ANU Press, Canberra.
- Walker, D.F. (1976). *A grammar of the Rejang language*. Pacific Linguistics.
- The Unicode Consortium. *The Unicode Standard* — Rejang Block (U+A930–U+A95F).
- Noto Sans Rejang Font — Google Fonts.

---

## 📜 Lisensi

- **Kode aplikasi:** [MIT License](LICENSE)
- **Data kosakata & konten:** [CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)

Bebas digunakan, dimodifikasi, dan didistribusikan — dengan menyebut sumber.

---

## 👨‍💻 Developer

<table>
<tr>
<td align="center" width="160">
<img src="https://cdn.lynkid.my.id/profile/01-05-2026/1777639293606_8868403.webp" width="100" style="border-radius:50%"><br>
<strong>Hariyanto, S.Sos</strong><br>
<em>ASN Kepahiang · Developer · Crypto Creator · YouTuber</em>
</td>
<td>

*"Mengabdi dengan ilmu, bertumbuh lewat inovasi."*

Seorang Aparatur Sipil Negara Kabupaten Kepahiang yang percaya bahwa tugas negara dan semangat berinovasi bisa berjalan beriringan. Membangun proyek open source ini sebagai bentuk pelestarian budaya digital Bengkulu.

🏛️ **ASN** — Badan Keuangan Daerah Kabupaten Kepahiang  
💻 **Developer** — Aplikasi web, sistem informasi, AppSheet  
₿ **Crypto Creator** — Edukasi kripto & analisis pasar  
🎬 **YouTuber** — [@ardion_news](https://www.youtube.com/@ardion_news)

**Proyek lain:**
[DIPAYANG](https://dipayang.idcrypt.xyz) · [IDCrypt](https://idcrypt.xyz) · [Kasir Kita](https://hariyantodipayang.github.io/kasir-kita/) · [SIPANDAI](https://kphinside.github.io/sipandai-app/)

🌐 [dipayang.idcrypt.xyz/profil](https://dipayang.idcrypt.xyz/profil) · 💬 [WhatsApp](https://wa.me/6285609326414)

</td>
</tr>
</table>

---

## 🙏 Penghargaan

Terima kasih kepada seluruh penutur Bahasa Rejang yang telah menjaga warisan leluhur ini tetap hidup.  
*Mo te' — ꤸꥋ ꤳꤰ*

---

<p align="center">
Dibuat dengan ❤️ untuk melestarikan warisan budaya Bengkulu<br>
<em>ꤰꤱꤲ · ꤳꤴꤵ · ꤶꤷꤸ</em><br><br>
<a href="https://dipayang.idcrypt.xyz/profil">👨‍💻 Hariyanto, S.Sos</a> · <a href="https://github.com/hariyantodipayang/kamus-bahasa-rejang">⭐ GitHub</a> · <a href="https://wa.me/6285609326414">💬 WhatsApp</a>
</p>
