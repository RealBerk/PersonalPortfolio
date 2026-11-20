# Kişisel Portfolyo — Berk Selvi

GEP1316 **Kodlama Okuryazarlığı** dersi (2026–2027 Güz, Bahçeşehir Üniversitesi) kapsamında geliştirilmiş, çok sayfalı ve duyarlı kişisel portfolyo sitesi. HTML, CSS ve vanilla JavaScript ile sıfırdan yazılmıştır; harici framework veya kütüphane kullanılmamıştır.

**Canlı site:** https://RealBerk.github.io/PersonalPortfolio/

---

## İçindekiler

- [Sayfalar](#sayfalar)
- [Özellikler](#özellikler)
- [Teknolojiler](#teknolojiler)
- [Dosya Yapısı](#dosya-yapısı)
- [Kurulum ve Yerel Çalıştırma](#kurulum-ve-yerel-çalıştırma)
- [Erişilebilirlik](#erişilebilirlik)
- [Yapay Zekâ Kullanımı](#yapay-zekâ-kullanımı)
- [Lisans](#lisans)

---

## Sayfalar

| Sayfa | Dosya | İçerik |
|---|---|---|
| Ana Sayfa | `index.html` | Kısa tanıtım, avatar, gezinti menüsü |
| Hakkımda | `hakkimda.html` | Eğitim, ilgi alanları, üzerine kişisel paragraf |
| Projeler | `projeler.html` | Proje 1–5 kartları, arama + kategori filtresi |
| İletişim | `iletisim.html` | Doğrulamalı iletişim formu, sosyal bağlantılar, gizlilik notu |
| Makale | `oped.html` | Avrupa Siyaseti hakkinda yazdigim op-ed Makalesi |
| Siir | `poem.html` | Ozgun Siirim |

---

## Özellikler

### Duyarlı Tasarım
- Masaüstü, tablet (≤ 900px) ve mobil (≤ 640px) için optimize edilmiş düzen
- CSS Grid ve Flexbox ile akışkan yerleşim
- Mobilde açılır hamburger menü (Escape tuşu ile kapanır)
- Dokunma hedefleri en az 44×44 px

### JavaScript Etkileşimleri
- **Karanlık mod** — `localStorage` ile kalıcı, sayfa geçişlerinde hatırlanır, FOUC önleyici inline script
- **Mobil menü** — `aria-expanded` durumu senkronize, klavye ile erişilebilir
- **Proje filtresi** — metin arama + kategori seçimi birlikte çalışır, sonuç sayısı `aria-live` ile duyurulur
- **Form doğrulama** — alan bazlı hata mesajları, `aria-invalid`, `aria-live` durum bildirimi

### Tasarım Sistemi
- CSS değişkenleri ile merkezi renk paleti (`:root` ve `[data-theme="dark"]`)
- WCAG 2.1 AA hedefli kontrast oranları (tüm eşleşmeler `style.css` başında belgelenmiştir)
- Fraunces (başlık) + Inter Tight (gövde) tipografisi
- `prefers-reduced-motion` desteği

---

## Teknolojiler

- **HTML5** — anlamsal etiketler (`header`, `nav`, `main`, `article`, `section`, `footer`)
- **CSS3** — Grid, Flexbox, custom properties, `clamp()`, `@media`, `prefers-reduced-motion`
- **JavaScript (ES6+)** — vanilla, framework yok; IIFE modül deseni, `localStorage`, DOM API
- **GitHub Pages** — statik barındırma

---

## Dosya Yapısı
├── index.html
├── hakkimda.html
├── projeler.html
├── oped.html
├── poem.html
├── iletisim.html
├── style.css
├── script.js
├── README.md
└── icerikler/
│ ├──  avatar.webp
│ ├──  fonts/
│ │ ├── Fraunces.woff2
│ │ ├── Fraunces.ttf
│ │ ├── InterTight.woff2
│ │ └── InterTight.ttf
│ │ ├── Fraunces-Italic.woff2
│ │ ├── Fraunces-Italic.ttf
│ │ ├── InterTight-Bold.woff2
│ │ └── InterTight-Bold.ttf
│ └── ss/
│ ├── screenshotalfred.jpg
│ ├── screenshotjs.jpg
│ ├── screenshotsite.jpg


## Kurulum ve Yerel Çalıştırma

Depoyu klonlayın:

git clone https://github.com/RealBerk/PersonalPortfolio.git
cd PersonalPortfolio
# Python 3
python -m http.server 5500

# Node.js (npx)
npx serve .

# VS Code
# Live Server eklentisini kurup index.html üzerinde "Open with Live Server"
Ardından tarayıcıda açın:
http://localhost:5500/

Erişilebilirlik

Site, WCAG 2.1 AA hedeflenerek geliştirilmiştir. Uygulanan başlıca önlemler:

    ☑

    Tüm görsellerde anlamlı alt metni
    ☑

    Tüm form alanlarında <label for="..."> eşleşmesi
    ☑

    Klavye ile tam gezinme (Tab / Shift+Tab)
    ☑

    Görünür odak halkası (:focus-visible, 3:1 kontrast)
    ☑

    lang="tr" ve anlamsal HTML yapısı
    ☑

    "İçeriğe geç" atlama bağlantısı (skip link)
    ☑

    aria-current="page" ile aktif sayfa bildirimi
    ☑

    aria-live ile dinamik içerik duyurusu (form durumu, filtre sonucu)
    ☑

    aria-invalid ile hatalı form alanı işaretleme
    ☑

    Renk kontrastı ≥ 4.5:1 (gövde metni), ≥ 3:1 (etkileşimli öğeler)
    ☑

    prefers-reduced-motion desteği
    ☑

    Form altında aydınlatma metni, kişisel veri toplanmıyor, üçüncü taraf betik yok
    
#Yapay Zekâ Kullanımı

Bu proje, geniş kapsamlı yapay zekâ kullanımı ile geliştirilmiştir. YZ araçları; kod üretimi, hata ayıklama, açıklama ve alternatif çözüm önerileri için kullanılmıştır. Üretilen her kod satırı gözden geçirilmiş, test edilmiş ve gerekçelendirilmiştir. Ayrıntılı prompt günlüğü ve kabul/red kararları ders raporunda (Teslim: MS Teams) belgelenmiştir.

#Kullanılan araç:

    DeepSeek. (2026). deepseek.com

Sorumluluk beyanı: Yapay zekâ tarafından üretilen içerik gözden geçirilmiş, gerekli düzeltmeler yapılmış ve teslim edilen çalışmanın doğruluğundan ve akademik dürüstlüğünden öğrenci sorumludur.

#Lisans

Bu depodaki kod ve içerik, eğitim amaçlıdır. Fraunces ve Inter Tight fontları SIL Open Font License (OFL) altında dağıtılmaktadır. Diğer tüm içerik © 2026 [Berk Selvi].
