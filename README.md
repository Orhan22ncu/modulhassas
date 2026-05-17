# Modul Hassas Group - Kurumsal Web Sitesi

Premium, cift dill (TR/EN), cok sayfali endustriyel kurumsal web sitesi.
React + TypeScript + Vite + Tailwind CSS + shadcn/ui ile gelistirilmistir.

## Ozellikler

- **8 Sayfa**: Ana Sayfa, Hakkimizda, Kabiliyetler, Makine Parkuru, Kalite, Projeler, Referanslar, Iletisim
- **Cift Dil**: Turkce (TR) / Ingilizce (EN) - aninda gecis
- **Premium Animasyonlar**: GSAP ScrollTrigger, karakter animasyonu, count-up, clip-path reveal, parallax
- **Image Zoom Magnifier**: Butun gorsellerde 2.5x zoom paneli (e-ticaret tarzi)
- **Responsive**: Mobil, tablet, masaustu
- **Koyu Tema**: Endustriyel premium tasarim

## Yerel Calistirma

```bash
# Bagimliliklari yukle
npm install

# Gelistirme sunucusu (localhost:5173)
npm run dev

# Uretim build'i
npm run build
```

## Vercel'e Deploy Etme

### 1. GitHub Repo Olustur

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADI/REPO_ADI.git
git push -u origin main
```

### 2. Vercel Uzerinden Deploy

1. [vercel.com](https://vercel.com) adresine git
2. "Add New Project" > GitHub repo'yu sec
3. Framework Preset: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. **Deploy!**

`vercel.json` dosyasi SPA routing icin hazir (`HashRouter` kullaniliyor, bu yuzden 404 sorunu olmayacak).

## Proje Yapisi

```
app/
  src/
    components/
      sections/       - Ana sayfa section'lari
      shared/         - Navbar, Footer, ImageZoom vb.
    pages/            - 8 sayfa bileseni
    hooks/            - useScrollReveal, useCountUp
    context/          - Dil sistemi (TR/EN)
    data/             - Makine ve olcum verileri
  public/images/      - Uretim gorselleri (66 adet)
  vite.config.ts      - Vite yapilandirmasi
  tailwind.config.js  - Tailwind + ozel renkler
  vercel.json         - SPA routing
```

## Footer Imzasi

Design by [Palette Systems](https://palette.systems)

## Lisans

Tum haklari saklidir. (c) 2024 Modul Hassas Group.
