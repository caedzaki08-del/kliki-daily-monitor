// ====== TETAPAN DAILY MONITOR — ubah di sini sahaja ======
window.CONFIG = {
  // MASTER SHEET (dibaca sahaja — app ini tak pernah menulis ke sheet)
  SHEET_ID: '1QlxAVRWLfpIrqMTXgOIGFFlstOjEAE4zkpCTMBVBoaY',
  TAB_DATA: 'masterFRONT',   // tab data jualan harian
  TAB_PLAN: 'PLAN',          // tab target bulanan per outlet

  // PIN masuk (SHA-256). Default PIN = kliki2026  -> TUKAR sebelum guna.
  // Cara jana hash baharu: buka console browser dan jalankan:
  //   crypto.subtle.digest('SHA-256', new TextEncoder().encode('PIN-BARU')).then(b=>console.log([...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')))
  PIN_HASH: '9bca73e935754d7a6a8fc24090f6f3ac5228e13597ff5ff9cfaae0dfa651547e',

  REFRESH_MINUTES: 5,

  // closed = hari tutup mingguan (0=Ahad ... 3=Rabu ... 6=Sabtu)
  // Kulim = Lunas (kul) + Kelang Lama (kll), ikut PDF target
  // cols   = awalan lajur dalam masterFRONT (kul = kod lama, digabung ke Kelang Lama)
  // plan   = kod outlet dalam tab PLAN
  OUTLETS: [
    { key: 'kll', name: 'Kulim',        short: 'KLM', plan: 'kul', cols: ['kll', 'kul'], closed: [] },
    { key: 'aor', name: 'Alor Setar',   short: 'AOR', plan: 'aor', cols: ['aor'],        closed: [3] },
    { key: 'sgp', name: 'Sungai Petani',short: 'SGP', plan: 'sgp', cols: ['sgp'],        closed: [3] },
    { key: 'pdg', name: 'Pendang',      short: 'PDG', plan: 'pdg', cols: ['pdg'],        closed: [3] }
  ],

  // Kategori KPI. Aksesori tidak dikira dalam Sales/Unit/APU.
  CATS: [
    { id: 'used', label: 'Apple Used',  planRM: 'APPLE_USED_RM',  apu: 'APPLE_USED',  unit: ['IPHONE USED (UNIT)'],                     rm: ['IP USED (RM)'] },
    { id: 'new',  label: 'Apple New',   planRM: 'APPLE_NEW_RM',   apu: 'APPLE_NEW',   unit: ['IP NEWSET (UNIT)'],                       rm: ['IP NEWSET (RM)'] },
    { id: 'and',  label: 'Android New', planRM: 'ANDROID_NEW_RM', apu: 'ANDROID_NEW', unit: ['ANDROID NEW (UNIT)'],                     rm: ['ANDROID NEW (RM)'] },
    { id: 'ccti', label: 'CCTI Sold',   planRM: 'CCTI_SOLD_RM',   apu: 'CCTI_SOLD',   unit: ['CCTI SOLD (UNIT)', 'CC/TI SOLD (UNIT)'],  rm: ['CCTI SOLD (RM)', 'CC/TI SOLD (RM)'] },
    { id: 'rep',  label: 'Repair',      planRM: 'REPAIR_RM',      apu: 'REPAIR',      unit: ['REPAIR (UNIT)'],                          rm: ['REPAIR (RM)'], repair: true }
  ],

  // Aksesori: ada target RM tapi tiada unit; dipapar berasingan (tidak dikira dalam Total Sales).
  ACC: { label: 'Aksesori', planRM: 'ACCESSORIES_RM', rm: ['AKSESORI (RM)'] },

  // Pecahan target ikut minggu: W1=hari 1-7, W2=8-14, W3=15-21, W4=22-akhir bulan.
  // Dibaca dari tab PLAN (lajur MINGGU/KONGSI); nilai ini hanya ganti jika PLAN tiada.
  WEEK_SHARE_FALLBACK: [0.25, 0.24, 0.21, 0.30],
  // APU rujukan (Sept) — dibaca dari PLAN (PRODUK/APU_SEPT_RM); ini hanya ganti jika PLAN tiada.
  APU_FALLBACK: { APPLE_USED: 2032, APPLE_NEW: 4457, ANDROID_NEW: 1368, CCTI_SOLD: 1301, REPAIR: 188 },

  // Cuti am / hari tutup khas: { 'YYYY-MM-DD': ['aor','sgp'] }  (kosong = tiada)
  OFF_DATES: {}
};
