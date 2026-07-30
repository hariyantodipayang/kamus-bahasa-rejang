/**
 * BERENDO Extractor Script
 * ========================
 * Tempel kode ini di Console browser (F12) saat berada di halaman
 * https://berendo.kemendikdasmen.go.id/pencarian
 *
 * Cara pakai:
 * 1. Buka https://berendo.kemendikdasmen.go.id/pencarian di browser
 * 2. Tekan F12 → pilih tab Console
 * 3. Salin seluruh isi file ini dan tempel di Console
 * 4. Tekan Enter — tunggu hingga selesai (bisa 5–10 menit)
 * 5. File berendo-export.json akan terunduh otomatis
 * 6. Import file tersebut di tab BERENDO → kamus akan bertambah
 *
 * Catatan:
 * - Skrip menggunakan Inertia.js API yang sama dengan website BERENDO
 * - Tiap request diberi jeda 300ms agar tidak membebani server
 * - Jika ada error "Tidak diizinkan", coba login dulu ke BERENDO
 */

(async () => {
  const hasil = [];
  const abjad = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const logEl = document.createElement('div');
  logEl.style.cssText = 'position:fixed;top:10px;right:10px;background:#003580;color:#fff;padding:12px 16px;border-radius:10px;font-family:monospace;font-size:12px;z-index:99999;min-width:260px;max-width:320px;box-shadow:0 4px 20px rgba(0,0,0,0.3)';
  logEl.innerHTML = '🔍 BERENDO Extractor mulai...';
  document.body.appendChild(logEl);

  function log(msg) {
    logEl.innerHTML = msg;
    console.log('[BERENDO]', msg);
  }

  for (const huruf of abjad) {
    let page = 1, lanjut = true;
    while (lanjut) {
      try {
        const r = await fetch(
          `/pencarian?kata=${encodeURIComponent(huruf)}&page=${page}`,
          {
            headers: {
              'X-Inertia': 'true',
              'X-Inertia-Version': '1',
              'Accept': 'application/json',
              'X-Requested-With': 'XMLHttpRequest'
            }
          }
        );

        if (!r.ok) { lanjut = false; break; }

        let d;
        try { d = await r.json(); } catch { lanjut = false; break; }

        // Coba berbagai path response
        const items =
          d?.props?.kamus?.data ||
          d?.props?.data?.data ||
          d?.props?.pencarian?.data ||
          d?.data?.data ||
          [];

        if (!items.length) { lanjut = false; break; }

        items.forEach(i => {
          hasil.push({
            indonesia: i.indonesia || i.indo || '',
            rejang:    i.rejang   || i.kata  || i.bahasa_rejang || '',
            english:   i.english  || i.inggris || '',
            kategori:  i.kategori || i.jenis || '',
            ipa:       i.ipa      || i.pelafalan || '',
            sumber:    'BERENDO'
          });
        });

        const lastPage =
          d?.props?.kamus?.last_page ||
          d?.props?.data?.last_page ||
          d?.props?.pencarian?.last_page ||
          1;

        log(`📖 Huruf "${huruf.toUpperCase()}" — halaman ${page}/${lastPage} — ${hasil.length} kata terkumpul`);

        if (page >= lastPage) { lanjut = false; }
        page++;
        await new Promise(res => setTimeout(res, 300));

      } catch (err) {
        console.error('[BERENDO] Error:', err);
        lanjut = false;
      }
    }
  }

  // Hapus duplikat
  const unik = [];
  const seen = new Set();
  hasil.forEach(item => {
    const key = (item.rejang + '|' + item.indonesia).toLowerCase();
    if (!seen.has(key) && (item.rejang || item.indonesia)) {
      seen.add(key);
      unik.push(item);
    }
  });

  // Unduh JSON
  const blob = new Blob([JSON.stringify(unik, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'berendo-export.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  log(`✅ Selesai! ${unik.length} kata unik diekstrak. File berendo-export.json diunduh.`);
  console.log('[BERENDO] Data lengkap:', unik);
  setTimeout(() => logEl.remove(), 5000);
})();
