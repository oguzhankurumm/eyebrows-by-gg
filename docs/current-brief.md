# Current authority: redesign approved on November 2, 2026

The user explicitly chose: “Yeni metinleri ve metadata’yı koru; PROMPT.md’yi güncelle.” This replaces rules 1–2 and the previous visual direction below.

- Keep the rewritten marketing copy, titles and descriptions. Preserve existing URLs and canonical destinations. Maintain factual JSON-LD with known studio data; do not restore obsolete schema blindly.
- Preserve Sora + Manrope and the rounded studio direction. Primary slogan: “Let’s touch your beauty”. Use the verified studio Instagram portfolio and current artist information supplied by the user.
- Retain original website information in an accessible, clearly sourced reference layer and prove coverage against the live source and handoff data. Conflicting historical prices must not become chosen current prices.
- Artist information: 28 years of eyebrow threading experience; shape expert; licensed PMU artist in Connecticut; AAM Gold Certified in New Jersey; makeup artist. This supersedes earlier 20-year summaries.
- No production deployment until a new, explicit approval for the reviewed result. Previous production approval does not carry forward.

The historical prompt below is retained as context. Its verbatim-copy, metadata-fidelity and magazine-cover instructions are superseded by the current authority above.

---

# Prompt: Eyebrows by GG sitesini inşa et

Aşağıdaki metni yeni projedeki Claude Code oturumuna yapıştır. Bu klasörü (`eyebrowsbygg-handoff`) yeni projeye kopyala veya yolunu ver.

---

Görev: Eyebrows by GG (Milford, Connecticut, kaş/kalıcı makyaj stüdyosu) için https://www.eyebrowsbygg.com/ sitesini sıfırdan, müşterinin seçtiği **"Dergi Kapağı"** tasarım diliyle yeniden inşa et. Yayın yok, müşteriyle iletişim yok; sadece geliştir ve yerelde doğrula.

## Elindeki hazır malzeme (bu klasör)
- `site/data/pages.json`: eski WordPress sitesinin **90 sayfası** temizlenmiş halde. Alanlar: `path, title, desc, h1, type (home|service|area|post|page|about|contact|portfolio|photo-gallery|areas|services|blog-index), date (YYYY-MM-DD), ogimage, body (HTML), images[{src,alt}], jsonld[], words`.
- `site/assets/orig/`: eski siteden indirilmiş 69 görsel (21 portfolyo önce/sonra fotoğrafı, hizmet/blog görselleri, logo). `site/assets/gg/`: GG'nin kendi sitedeki fotoğrafından (`gonul-home.png`) üretilen iki portre (`gg-cover.png` 2752×1536, `gg-portrait.png` 1856×2304). Bunlar AI yeniden üretimi, müşteri onayı gerekir.
- `site/build.py` + `site/src/style.css` + `site/src/main.js`: çalışan ilk statik üretici (`pip install -r site/requirements.txt`, çalıştır `python site/build.py`, çıktı `site/dist/`, 90 sayfa üretir). Başlangıç noktası olarak kullan, istersen Next.js/Astro'ya taşı.
- `PLAN.md` (plan), `yonler.md` + `index.html` (10 yönün sunumu), `gorseller/09.webp` (seçilen dergi kapağı hero örneği).

## Kurallar (birebir + geliştirilmiş)
1. **Metin birebir taşınır**: başlıklar, paragraflar, fiyatlar, SSS, yorumlar, rakamlar. Yeni iddia/rakam/yorum uydurma. Yalnızca bariz yazım hatası düzeltilir ve listelenir.
2. **URL yapısı, title, meta description, JSON-LD, canonical aynen korunur** (domain değişmiyor; SEO kaybı olmasın).
3. Gerçek görseller kullanılır: GG'nin 21 portfolyo fotoğrafı, hizmet/blog görselleri, GG portreleri. Başka kişi fotoğrafı veya stok yok.
4. Rezervasyon GlossGenius'ta kalır: `https://eyebrowsbygg.glossgenius.com/services`. Telefon `+1 (203) 385-2243`, adres `972 Boston Post Rd, Milford, CT 06461`, saat Pzt–Cmt 10:00–20:00, Pazar kapalı, `info@eyebrowsbygg.com`, Instagram `@eyebrows_by_gg`, Facebook, WhatsApp. Üst bant: "SPECIAL OFFER $100 OFF ON PERMANENT MAKE-UP". Alt bilgide "Website: Oğuzhan Kurum" kredisi kalır.

## Tasarım: Dergi Kapağı
- Bodoni Moda (başlık) + Jost (gövde); fildişi `#F7F2EA`, mürekkep `#111`, gül `#C2185B`, çizgi `#D9CFC0`.
- Ana sayfa = kapak: dev "Eyebrows by GG" mastheadi, GG portresi, "Let's Touch Your Beauty" kapak yazısı, hizmetler "cover lines" (fiyatlarıyla). Masthead GG'nin başının arkasından geçer hissi (şu an basit mask + z-index; daha iyisini sen çöz, örn. kesme maskesi).
- Hizmet sayfaları = kapak hikâyesi (koyu hero, fiyat/süre şeridi, süreç, SSS, yorumlar). Bölge sayfaları, blog (içindekiler listesi ve makale düzeni, drop-cap), portfolyo = kontakt-sheet + lightbox.
- Mobil önce, sticky Book/Call çubuğu, `prefers-reduced-motion`, a11y (kontrast, odak, alt metinler), hız (WebP, lazy).
- Skiller: impeccable, design-taste-frontend, ecc:taste, ecc:frontend-design-direction, frontend-design, ui-ux-pro-max, design-md (DESIGN.md yaz), web-design-guidelines, gsap-scrolltrigger veya CSS scroll-timeline, claude-seo (seo-local, seo-schema, seo-technical), ecc:accessibility, webapp-testing.

## Bilinen sorunlar / kararlar
- Eski sitede 31 yazıda görünür metin olarak `[FAQPage schema renders the 4 questions and answers]` placeholder'ı var; SSS içeriği yalnızca JSON-LD'de. `build.py` bunu JSON-LD'den görünür `<details>` SSS'ye çeviriyor (mevcut içerik, uydurma yok).
- **Fiyat tutarsızlığı**: rezervasyon menüsü/ana sayfa Microblading/Nano/Powder $350 gösteriyor; hizmet sayfası tablosu "Initial Microblading Session $500, Annual Touch-Up $400, Color Refresh $250" diyor. Birebir taşındı; müşteriye sorulmalı, tahmin edilip birleştirilmemeli.
- Blog'da yakın-kopya çiftler var (`does-microblading-hurt` vs `-2026` ikizleri vb.). Hepsi taşınır; kanonikleştirme müşteri kararı.
- Ana sayfa metni WordPress'te dinamik olduğu için `build.py` içinde elle (verbatim) kuruldu; hizmet/bölge/yazı sayfaları `pages.json` gövdesinden render edilir (`.ebg-*` sınıfları CSS'te stillenmiş).
- Dergi kapağı hero'su: son düzeltme `src/style.css` `.cover .gg` kuralı ve `build.py` içinde `cover_bg` örneklemesi. Tarayıcıda 1440 ve 390 px'te kontrol et; henüz görsel doğrulama bitmedi.

## Teslim kriteri
90 sayfa üretilmiş, tüm iç linkler çözülüyor, eski metinle yeni metin diff'i (kelime eşleşme oranı) raporlanmış, mobil + masaüstü ekran görüntüsü alınmış, Lighthouse/a11y notu var, sitemap.xml + robots.txt + clean URL ayarı hazır. Vercel preview yayını için önce kullanıcıdan onay iste.


Current source authority approved November 2, 2026: use the live GlossGenius menu as the single price/duration source. Preserve earlier conflicting rates only in historical reference content. Current Google Maps business information and attributed selected review excerpts are authorized. See web/docs/todo-content.md and web/docs/booking-integration.md.


Latest user correction, November 2, 2026: remove the public Original website reference panel. Preserve historical source material internally for audit rather than republishing it. The booking picker must permit stable pointer and keyboard selection inside the dialog; use the inline expandable native-radio list. The user explicitly authorized commit, push and production deployment of this corrected release.
