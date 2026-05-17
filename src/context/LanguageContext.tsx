import React, { createContext, useContext, useState, useCallback } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string | string[];
}

const translations = {
  tr: {
    // Navbar
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımızda',
    'nav.capabilities': 'Kabiliyetler',
    'nav.machinery': 'Makine Parkuru',
    'nav.quality': 'Kalite',
    'nav.projects': 'Projeler',
    'nav.references': 'Referanslar',
    'nav.contact': 'İletişim',

    // Hero
    'hero.label': 'MODÜL HASSAS GROUP',
    'hero.title': 'Hassasiyetin Mühendisliği',
    'hero.subtitle': 'Özel makine, fikstür, hassas talaşlı imalat ve anahtar teslim üretim çözümlerinde güvenilir mühendislik ortağınız.',
    'hero.cta.primary': 'Bizimle İletişime Geçin',
    'hero.cta.secondary': 'Kabiliyetlerimizi İnceleyin',

    // Metrics
    'metrics.label': 'ÜRETİM GÜCÜMÜZ',
    'metrics.title': 'Sayılarla Modül Hassas',
    'metrics.desc': "2009'dan bu yana sürdürdüğümüz üretim yolculuğumuzda teknik altyapımız ve uzman ekibimizle büyümeye devam ediyoruz.",
    'metrics.m1.value': '2009',
    'metrics.m1.label': 'Kuruluş Yılı',
    'metrics.m1.desc': 'Sektör deneyimimizin temeli',
    'metrics.m2.value': '2200',
    'metrics.m2.label': "m² Kapalı Alan",
    'metrics.m2.desc': 'Modern üretim tesisi',
    'metrics.m3.value': '22',
    'metrics.m3.label': 'Uzman Ekip',
    'metrics.m3.desc': 'Deneyimli personel',
    'metrics.m4.value': '5 Eksen',
    'metrics.m4.label': 'CNC İşleme',
    'metrics.m4.desc': 'CMM Ölçüm altyapısı',

    // Capabilities
    'cap.label': 'KABİLİYETLERİMİZ',
    'cap.title': 'Mühendislikten Teslimata',
    'cap.desc': "Projenizin her aşamasında yanınızdayız — tasarımdan kalite kontrole, üretimden montaja.",
    'cap.cta': 'Tüm Kabiliyetlerimiz',
    'cap.1.title': 'Özel Makine ve Turnkey Çözümler',
    'cap.1.desc': 'Müşteriye özel makine tasarımı, otomatik besleme presleri, montaj makineleri ve transfer işleme tezgahları. Endüstri 4.0 uyumlu çözümler.',
    'cap.2.title': 'Hidrolik / Mekanik / Pnömatik Fikstürler',
    'cap.2.desc': 'CNC ve manuel işleme operasyonlarında maksimum verimlilik sağlayan, süreçleri hızlandıran ve hassasiyeti artıran fikstür sistemleri.',
    'cap.3.title': 'Hassas Talaşlı İmalat',
    'cap.3.desc': '5 eksen CNC işleme, frezeleme, tornalama, tel erozyon ve taşlama ile yüksek hassasiyetli parça üretimi.',
    'cap.4.title': 'Kontrol Fikstürleri ve Kalite Ekipmanları',
    'cap.4.desc': 'Üretim süreçlerinde kalite kontrolünü sağlayan, yüksek hassasiyet ve dayanıklılığa sahip özel kontrol fikstürleri.',
    'cap.5.title': 'Kaynak ve Montaj',
    'cap.5.desc': 'Gaz kaynağı, lazer kaynağı, fikstür montajı ve kaynaklı montaj operasyonları ile entegre üretim çözümleri.',
    'cap.6.title': 'Saç Kesme Kalıpları ve Özel Parçalar',
    'cap.6.desc': "Metal saçların hassas kesimi için uzun ömürlü kalıplar ve müşteri taleplerine özel özel imalat parçaları.",

    // Process
    'proc.label': 'ÜRETİM SÜRECİMİZ',
    'proc.title': "Projenizin Yolculuğu",
    'proc.desc': 'Her projeyi mühendislik disipliniyle yönetiyor, ölçülebilir kalite ile teslim ediyoruz.',
    'proc.1.title': 'İhtiyaç Analizi',
    'proc.1.desc': 'Müşteri ihtiyaçlarını ve teknik şartnameleri detaylı şekilde analiz ediyoruz.',
    'proc.2.title': 'Tasarım ve Mühendislik',
    'proc.2.desc': 'CAD/CAM yazılımlarıyla (NX, SOLIDWORKS, CATIA) optimum üretim çözümünü tasarlıyoruz.',
    'proc.3.title': 'Üretim Planlama',
    'proc.3.desc': 'Makine parkuru ve kapasite planlaması ile en verimli üretim rotasını belirliyoruz.',
    'proc.4.title': 'CNC İşleme / Kaynak / Montaj',
    'proc.4.desc': '5 eksen CNC, tornalama, frezeleme, kaynak ve montaj operasyonlarını gerçekleştiriyoruz.',
    'proc.5.title': 'Ölçüm ve Kalite Kontrol',
    'proc.5.desc': 'ZEISS CMM cihazlarımızla nihai ölçüm ve kalite kontrolü yapıyoruz.',
    'proc.6.title': 'Teslimat',
    'proc.6.desc': 'Tüm kalite belgeleriyle birlikte projenizi zamanında teslim ediyoruz.',

    // Machinery
    'mach.label': 'MAKİNE PARKURU',
    'mach.title': 'Teknik Altyapımız',
    'mach.desc': 'MAZAK, GROB, MATEC, ZEISS gibi dünya standartlarındaki makinelerimizle kompleks parça işleme yeteneği.',
    'mach.cta': 'Makine Parkurunu İnceleyin',
    'mach.item1': 'MAZAK FJV 35/80 — 3 Eksen',
    'mach.item2': 'GROB G550 — 5 Eksen',
    'mach.item3': 'MATEC 30 FD-Z — 5 Eksen Millturn',
    'mach.item4': 'ZEISS CONTURA CMM — 2000x900x600mm',
    'mach.item5': 'HURON EX-C 20 — 1600x800x650mm',

    // Quality
    'qual.label': 'KALİTE',
    'qual.title': 'Ölçülebilir Kalite, Tekrarlanabilir Üretim',
    'qual.desc': 'Üretim süreçlerimizde ölçülebilir ve tekrarlanabilir kalite hedefliyoruz. ZEISS CONTURA ve ZEISS ACCURA CMM cihazlarımızla her parçayı teknik resme göre kontrol ediyoruz.',
    'qual.item1': 'ZEISS CONTURA CMM — 2000x900x600mm (L330/1,7µm)',
    'qual.item2': 'ZEISS ACCURA CMM — 1200x600x500mm',
    'qual.item3': 'Teknik resim ve tolerans odaklı üretim',
    'qual.item4': 'Nihai kontrol süreçleri',
    'qual.item5': 'Uzun vadeli sanayi iş birlikleri',
    'qual.cta': 'Kalite Altyapımız',

    // Projects
    'proj.label': 'PROJELER',
    'proj.title': 'Teknik Vaka Çalışmaları',
    'proj.desc': 'Gerçekleştirdiğimiz projelerden örnekler — her biri mühendislik disiplini ve ölçülebilir kalite ile tamamlanmış üretim çözümleri.',
    'proj.cta': 'Tüm Projeler',
    'proj.1.title': 'Motor Bloku Projeleri',
    'proj.1.desc': 'Otomotiv sektörü için motor bloku işleme ve üretim projeleri. Yüksek hassasiyetli parça işleme ve montaj.',
    'proj.2.title': 'Fikstür ve Kontrol Sistemleri',
    'proj.2.desc': 'Hidrolik-mekanik işleme fikstürleri, kontrol fikstürleri ve klamp gücü 10 tona kadar özel fikstür sistemleri.',
    'proj.3.title': 'Anahtar Teslim Projeler',
    'proj.3.desc': 'Mekanik/elektronik kontrol cihazları, özel makine tasarım ve imalatı, transfer işleme tezgahları.',

    // References
    'ref.label': 'REFERANSLAR',
    'ref.title': 'Uzun Vadeli Sanayi İş Birlikleri',
    'ref.desc': 'Otomotiv, makine ve ağır sanayi alanlarında güvenilir üretim ortağı.',
    'ref.cta': 'Referansları İnceleyin',
    'ref.sector1': 'Otomotiv',
    'ref.sector2': 'Makine Üretimi',
    'ref.sector3': 'Ağır Sanayi',
    'ref.sector4': 'Endüstriyel Ekipman',
    'ref.sector5': 'Özel Üretim',
    'ref.sector6': 'Anahtar Teslim',

    // Contact CTA
    'cta.title': 'Projeniz için güvenilir bir üretim ve mühendislik ortağı mı arıyorsunuz?',
    'cta.desc': 'Teknik resimlerinizi, numune taleplerinizi veya özel üretim ihtiyaçlarınızı bizimle paylaşın. Ekibimiz en kısa sürede sizinle iletişime geçsin.',
    'cta.button': 'Bizimle İletişime Geçin',

    // Footer
    'footer.copyright': '2024 Modül Hassas Group. Tüm hakları saklıdır.',
    'footer.design': 'Design by',

    // About page
    'about.hero.title': 'Hakkımızda',
    'about.hero.subtitle': '2009\'dan bu yana hassas üretim ve mühendislik alanında güvenilir çözüm ortağınız.',
    'about.story.title': 'Hikayemiz',
    'about.story.p1': 'Modül Hassas Group / APROSES Production, 2009 yılında kurulmuş olup, hassas talaşlı imalat, özel makine tasarımı ve anahtar teslim üretim çözümleri alanlarında faaliyet göstermektedir.',
    'about.story.p2': "2200 m² kapalı üretim alanımızda, 22 kişilik uzman ekibimizle; otomotiv, makine üretimi ve ağır sanayi sektörlerine yönelik yüksek hassasiyetli parça üretimi, fikstür sistemleri ve özel makine imalatı gerçekleştirmekteyiz.",
    'about.story.p3': "Müşterilerimizle uzun vadeli iş ortaklıkları kurmayı ilke edinerek, projelerin her aşamasında mühendislik disiplini ve ölçülebilir kalite anlayışıyla çalışıyoruz.",
    'about.values.title': 'Değerlerimiz',
    'about.values.1': 'Mühendislik disipliniyle üretim',
    'about.values.2': 'Ölçülebilir ve tekrarlanabilir kalite',
    'about.values.3': 'Uzun vadeli iş ortaklıkları',
    'about.values.4': 'Sürekli gelişim ve teknoloji yatırımı',

    // Capabilities page
    'capPage.hero.title': 'Kabiliyetlerimiz',
    'capPage.hero.subtitle': 'Özel makineden hassas imalata, fikstürden anahtar teslim projelere kadar geniş bir üretim yelpazesi.',
    'capPage.special.title': 'Özel Makine ve Turnkey Çözümler',
    'capPage.special.desc': 'Müşteriye özel makine tasarımı ve imalatı: otomatik besleme sıkıştırma presleri, montaj makineleri, transfer işleme tezgahları. Endüstri 4.0 uyumlu, mekanik ve elektronik kontrol cihazları entegrasyonu.',
    'capPage.fixtures.title': 'Fikstür ve Sıkıştırma Sistemleri',
    'capPage.fixtures.desc': 'Hidrolik, pnömatik ve mekanik işleme fikstürleri. CNC ve manuel operasyonlarda maksimum verimlilik. Kontrol fikstürleri ile kalite güvencesi. Klamp gücü 10 tona kadar özel sistemler.',
    'capPage.machining.title': 'Hassas Talaşlı İmalat',
    'capPage.machining.desc': '5 eksen CNC işleme, frezeleme, tornalama, tel erozyon ve yüzey/taşlama işlemleri ile kompleks parça üretimi. Çelik, paslanmaz çelik, alüminyum, titanyum, bakır, Inconel, GG/GGG dökme demir işleme.',
    'capPage.control.title': 'Kontrol Fikstürleri ve Ölçüm Ekipmanları',
    'capPage.control.desc': 'Üretim süreçlerinde kalite kontrolünü sağlayan özel kontrol fikstürleri. Yüksek hassasiyet, dayanıklılık ve müşteriye özel çözümler.',
    'capPage.sheet.title': 'Saç Kesme Kalıpları',
    'capPage.sheet.desc': 'Metal saçların hassas ve verimli kesimi için uzun ömürlü, yüksek performanslı kalıplar.',
    'capPage.welding.title': 'Kaynak ve Montaj',
    'capPage.welding.desc': 'Gaz kaynağı ve lazer kaynağı operasyonları. Fikstür montajı ve kaynaklı montaj. Entegre üretim süreçleri.',
    'capPage.custom.title': 'Özel İmalat Parçaları',
    'capPage.custom.desc': 'Müşteri taleplerine özel olarak üretilmiş parçalar. Projeye özel mühendislik desteği. Farklı sektörlere uygun geniş üretim kapasitesi.',

    // Machinery page
    'machPage.hero.title': 'Makine Parkuru',
    'machPage.hero.subtitle': 'MAZAK, GROB, MATEC, ZEISS gibi dünya standartlarındaki makine ve ölçüm ekipmanlarımız.',
    'machPage.cnc.title': 'CNC İşleme Merkezleri',
    'machPage.fiveaxis.title': '5 Eksen İşleme',
    'machPage.turning.title': 'CNC Tornalama',
    'machPage.edm.title': 'Tel Erozyon',
    'machPage.grinding.title': 'Taşlama',
    'machPage.measure.title': 'Ölçüm Ekipmanları',
    'machPage.software.title': 'CAD/CAM Yazılımları',

    // Quality page
    'qualPage.hero.title': 'Kalite ve Ölçüm',
    'qualPage.hero.subtitle': 'Ölçülebilir kalite anlayışı ve ZEISS CMM altyapımızla her parçayı teknik resme göre kontrol ediyoruz.',
    'qualPage.philosophy.title': 'Kalite Felsefemiz',
    'qualPage.philosophy.desc': 'Üretim süreçlerimizde ölçülebilir ve tekrarlanabilir kalite hedefliyoruz. Her parça, teknik resim ve tolerans değerlerine göre üretilir ve kontrol edilir.',
    'qualPage.cmm.title': 'CMM Ölçüm Altyapısı',
    'qualPage.cmm.desc': 'ZEISS CONTURA ve ZEISS ACCURA koordinat ölçüm cihazlarımızla yüksek hassasiyetli ölçüm gerçekleştiriyoruz.',
    'qualPage.compliance.title': 'Teknik Resim Uygunluğu',
    'qualPage.compliance.desc': 'Her üretim operasyonu teknik resme ve tolerans şartnamesine göre planlanır ve yürütülür.',
    'qualPage.final.title': 'Nihai Kontrol',
    'qualPage.final.desc': 'Tüm parçalar sevkiyat öncesi nihai kontrolden geçer. Ölçüm raporları teslimatın ayrılmaz parçasıdır.',

    // Projects page
    'projPage.hero.title': 'Projelerimiz',
    'projPage.hero.subtitle': 'Gerçekleştirdiğimiz teknik vaka çalışmaları — mühendislik disiplini ve ölçülebilir kalite ile.',
    'projPage.cta': 'Proje detayları talep üzerine sunulmaktadır.',

    // References page
    'refPage.hero.title': 'Referanslarımız',
    'refPage.hero.subtitle': 'Otomotiv, makine ve ağır sanayi alanlarında uzun vadeli iş birlikleri.',
    'refPage.sectors.title': 'Çalıştığımız Sektörler',

    // Contact page
    'cont.hero.title': 'İletişim',
    'cont.hero.subtitle': 'Projeniz için teklif almak veya daha fazla bilgi edinmek için bizimle iletişime geçin.',
    'cont.form.title': 'Teklif Talep Formu',
    'cont.form.name': 'Ad Soyad',
    'cont.form.company': 'Firma Adı',
    'cont.form.email': 'E-posta',
    'cont.form.phone': 'Telefon',
    'cont.form.country': 'Ülke / Şehir',
    'cont.form.type': 'Talep Türü',
    'cont.form.type.machining': 'Talaşlı İmalat',
    'cont.form.type.fixture': 'Fikstür',
    'cont.form.type.machine': 'Özel Makine',
    'cont.form.type.quality': 'Ölçüm / Kalite',
    'cont.form.type.welding': 'Montaj / Kaynak',
    'cont.form.type.other': 'Diğer',
    'cont.form.desc': 'Proje Açıklaması',
    'cont.form.file': 'Dosya Yükleme',
    'cont.form.file.hint': 'Teknik resim, STEP, PDF, Fotoğraf',
    'cont.form.privacy': 'KVKK kapsamında kişisel verilerimin işlenmesini onaylıyorum.',
    'cont.form.submit': 'Bizimle İletişime Geçin',
    'cont.info.title': 'İletişim Bilgileri',
    'cont.info.email': 'E-posta',
    'cont.info.email.val': 'proje@modulhassas.com',
    'cont.info.address': 'Adres',
    'cont.info.address.val': 'Üretim bilgileri talep üzerine paylaşılmaktadır.',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.capabilities': 'Capabilities',
    'nav.machinery': 'Machinery',
    'nav.quality': 'Quality',
    'nav.projects': 'Projects',
    'nav.references': 'References',
    'nav.contact': 'Contact',

    // Hero
    'hero.label': 'MODÜL HASSAS GROUP',
    'hero.title': 'Engineering Precision',
    'hero.subtitle': 'Your trusted engineering partner for special machinery, fixtures, precision machining and turnkey production solutions.',
    'hero.cta.primary': 'Contact Us',
    'hero.cta.secondary': 'Explore Capabilities',

    // Metrics
    'metrics.label': 'PRODUCTION CAPACITY',
    'metrics.title': 'Modül Hassas in Numbers',
    'metrics.desc': 'Since 2009, we continue to grow with our technical infrastructure and expert team.',
    'metrics.m1.value': '2009',
    'metrics.m1.label': 'Established',
    'metrics.m1.desc': 'Foundation of our experience',
    'metrics.m2.value': '2200',
    'metrics.m2.label': 'm² Closed Area',
    'metrics.m2.desc': 'Modern production facility',
    'metrics.m3.value': '22',
    'metrics.m3.label': 'Specialist Team',
    'metrics.m3.desc': 'Experienced personnel',
    'metrics.m4.value': '5-Axis',
    'metrics.m4.label': 'CNC Machining',
    'metrics.m4.desc': 'CMM inspection capability',

    // Capabilities
    'cap.label': 'OUR CAPABILITIES',
    'cap.title': 'From Engineering to Delivery',
    'cap.desc': 'We are with you at every stage of your project — from design to quality control, from production to assembly.',
    'cap.cta': 'All Capabilities',
    'cap.1.title': 'Special Machinery & Turnkey Solutions',
    'cap.1.desc': 'Custom machine design, automatic feeding fastening presses, assembly machines and transfer processing benches. Industry 4.0 compatible solutions.',
    'cap.2.title': 'Hydraulic / Mechanical / Pneumatic Fixtures',
    'cap.2.desc': 'Fixture systems that maximize efficiency in CNC and manual machining operations, accelerate processes and increase precision.',
    'cap.3.title': 'Precision Machining',
    'cap.3.desc': '5-axis CNC machining, milling, turning, wire EDM and grinding for high-precision part production.',
    'cap.4.title': 'Control Fixtures & Inspection Equipment',
    'cap.4.desc': 'Special control fixtures ensuring quality control in production processes, with high precision and durability.',
    'cap.5.title': 'Welding & Assembly',
    'cap.5.desc': 'Gas welding, laser welding, fixture assembly and welded assembly operations with integrated production solutions.',
    'cap.6.title': 'Sheet Metal Cutting Dies & Custom Parts',
    'cap.6.desc': 'Long-lasting, high-performance dies for precise cutting of sheet metal and custom manufacturing parts tailored to customer requirements.',

    // Process
    'proc.label': 'OUR PRODUCTION PROCESS',
    'proc.title': 'Your Project Journey',
    'proc.desc': 'We manage every project with engineering discipline and deliver with measurable quality.',
    'proc.1.title': 'Requirement Analysis',
    'proc.1.desc': 'We thoroughly analyze customer needs and technical specifications.',
    'proc.2.title': 'Design & Engineering',
    'proc.2.desc': 'We design the optimal production solution with CAD/CAM software (NX, SOLIDWORKS, CATIA).',
    'proc.3.title': 'Production Planning',
    'proc.3.desc': 'We determine the most efficient production route with machinery and capacity planning.',
    'proc.4.title': 'CNC Machining / Welding / Assembly',
    'proc.4.desc': 'We perform 5-axis CNC, turning, milling, welding and assembly operations.',
    'proc.5.title': 'Measurement & Quality Control',
    'proc.5.desc': 'We perform final measurement and quality control with our ZEISS CMM devices.',
    'proc.6.title': 'Delivery',
    'proc.6.desc': 'We deliver your project on time with all quality documentation.',

    // Machinery
    'mach.label': 'MACHINERY',
    'mach.title': 'Our Technical Infrastructure',
    'mach.desc': 'With world-class machines like MAZAK, GROB, MATEC, and ZEISS, we offer complex part machining capability.',
    'mach.cta': 'View Machinery',
    'mach.item1': 'MAZAK FJV 35/80 — 3 Axis',
    'mach.item2': 'GROB G550 — 5 Axis',
    'mach.item3': 'MATEC 30 FD-Z — 5 Axis Millturn',
    'mach.item4': 'ZEISS CONTURA CMM — 2000x900x600mm',
    'mach.item5': 'HURON EX-C 20 — 1600x800x650mm',

    // Quality
    'qual.label': 'QUALITY',
    'qual.title': 'Measurable Quality, Repeatable Production',
    'qual.desc': 'We aim for measurable and repeatable quality in our production processes. With ZEISS CONTURA and ZEISS ACCURA CMM devices, we inspect every part according to technical drawings.',
    'qual.item1': 'ZEISS CONTURA CMM — 2000x900x600mm (L330/1.7µm)',
    'qual.item2': 'ZEISS ACCURA CMM — 1200x600x500mm',
    'qual.item3': 'Technical drawing and tolerance focused production',
    'qual.item4': 'Final inspection processes',
    'qual.item5': 'Long-term industrial partnerships',
    'qual.cta': 'Our Quality Infrastructure',

    // Projects
    'proj.label': 'PROJECTS',
    'proj.title': 'Technical Case Studies',
    'proj.desc': 'Examples of our completed projects — each a production solution completed with engineering discipline and measurable quality.',
    'proj.cta': 'All Projects',
    'proj.1.title': 'Engine Block Projects',
    'proj.1.desc': 'Engine block machining and production projects for the automotive industry. High-precision part machining and assembly.',
    'proj.2.title': 'Fixture & Control Systems',
    'proj.2.desc': 'Hydraulic-mechanical machining fixtures, control fixtures and special fixture systems with clamping force up to 10 tons.',
    'proj.3.title': 'Turnkey Projects',
    'proj.3.desc': 'Mechanical/electronic control devices, special machinery design and manufacturing, transfer processing benches.',

    // References
    'ref.label': 'REFERENCES',
    'ref.title': 'Long-Term Industrial Partnerships',
    'ref.desc': 'A reliable production partner in automotive, machinery and heavy industry sectors.',
    'ref.cta': 'View References',
    'ref.sector1': 'Automotive',
    'ref.sector2': 'Machinery',
    'ref.sector3': 'Heavy Industry',
    'ref.sector4': 'Industrial Equipment',
    'ref.sector5': 'Custom Manufacturing',
    'ref.sector6': 'Turnkey Solutions',

    // Contact CTA
    'cta.title': 'Looking for a reliable production and engineering partner for your project?',
    'cta.desc': 'Share your technical drawings, sample requests or custom manufacturing needs with us. Our team will contact you as soon as possible.',
    'cta.button': 'Contact Us',

    // Footer
    'footer.copyright': '2024 Modül Hassas Group. All rights reserved.',
    'footer.design': 'Design by',

    // About page
    'about.hero.title': 'About Us',
    'about.hero.subtitle': 'Your reliable partner in precision manufacturing and engineering since 2009.',
    'about.story.title': 'Our Story',
    'about.story.p1': 'Modül Hassas Group / APROSES Production, established in 2009, operates in precision machining, custom machine design and turnkey production solutions.',
    'about.story.p2': 'In our 2200 m² closed production area, our 22-person expert team carries out high-precision part production, fixture systems and special machine manufacturing for the automotive, machinery production and heavy industry sectors.',
    'about.story.p3': 'We work with an engineering discipline and measurable quality approach at every stage of projects, aiming to establish long-term partnerships with our customers.',
    'about.values.title': 'Our Values',
    'about.values.1': 'Manufacturing with engineering discipline',
    'about.values.2': 'Measurable and repeatable quality',
    'about.values.3': 'Long-term business partnerships',
    'about.values.4': 'Continuous improvement and technology investment',

    // Capabilities page
    'capPage.hero.title': 'Our Capabilities',
    'capPage.hero.subtitle': 'From special machinery to precision manufacturing, fixtures to turnkey projects — a wide range of production capabilities.',
    'capPage.special.title': 'Special Machinery & Turnkey Solutions',
    'capPage.special.desc': 'Custom machine design and manufacturing: automatic feeding fastening presses, assembly machines, transfer processing benches. Industry 4.0 compatible, with mechanical and electronic control device integration.',
    'capPage.fixtures.title': 'Fixtures & Clamping Systems',
    'capPage.fixtures.desc': 'Hydraulic, pneumatic and mechanical machining fixtures. Maximum efficiency in CNC and manual operations. Quality assurance with control fixtures. Special systems with clamping force up to 10 tons.',
    'capPage.machining.title': 'Precision Machining',
    'capPage.machining.desc': '5-axis CNC machining, milling, turning, wire EDM and surface/grinding operations for complex part production. Processing of steel, stainless steel, aluminum, titanium, copper, Inconel, GG/GGG cast iron.',
    'capPage.control.title': 'Control Fixtures & Inspection Equipment',
    'capPage.control.desc': 'Special control fixtures ensuring quality control in production processes. High precision, durability and customer-specific solutions.',
    'capPage.sheet.title': 'Sheet Metal Cutting Dies',
    'capPage.sheet.desc': 'Long-lasting, high-performance dies for precise and efficient cutting of metal sheets.',
    'capPage.welding.title': 'Welding & Assembly',
    'capPage.welding.desc': 'Gas welding and laser welding operations. Fixture assembly and welded assembly. Integrated production processes.',
    'capPage.custom.title': 'Custom Manufacturing Parts',
    'capPage.custom.desc': 'Parts manufactured according to customer requirements. Project-specific engineering support. Wide production capacity for different sectors.',

    // Machinery page
    'machPage.hero.title': 'Machinery',
    'machPage.hero.subtitle': 'World-standard machines and measurement equipment including MAZAK, GROB, MATEC, and ZEISS.',
    'machPage.cnc.title': 'CNC Machining Centers',
    'machPage.fiveaxis.title': '5-Axis Machining',
    'machPage.turning.title': 'CNC Turning',
    'machPage.edm.title': 'Wire EDM',
    'machPage.grinding.title': 'Grinding',
    'machPage.measure.title': 'Measurement Equipment',
    'machPage.software.title': 'CAD/CAM Software',

    // Quality page
    'qualPage.hero.title': 'Quality & Measurement',
    'qualPage.hero.subtitle': 'With our measurable quality approach and ZEISS CMM infrastructure, we inspect every part against technical drawings.',
    'qualPage.philosophy.title': 'Our Quality Philosophy',
    'qualPage.philosophy.desc': 'We aim for measurable and repeatable quality in our production processes. Every part is produced and inspected according to technical drawings and tolerance values.',
    'qualPage.cmm.title': 'CMM Measurement Infrastructure',
    'qualPage.cmm.desc': 'We perform high-precision measurement with ZEISS CONTURA and ZEISS ACCURA coordinate measuring machines.',
    'qualPage.compliance.title': 'Technical Drawing Compliance',
    'qualPage.compliance.desc': 'Every production operation is planned and executed according to technical drawings and tolerance specifications.',
    'qualPage.final.title': 'Final Inspection',
    'qualPage.final.desc': 'All parts undergo final inspection before shipment. Measurement reports are an integral part of delivery.',

    // Projects page
    'projPage.hero.title': 'Our Projects',
    'projPage.hero.subtitle': 'Technical case studies we have completed — with engineering discipline and measurable quality.',
    'projPage.cta': 'Project details available upon request.',

    // References page
    'refPage.hero.title': 'Our References',
    'refPage.hero.subtitle': 'Long-term collaborations in automotive, machinery and heavy industry sectors.',
    'refPage.sectors.title': 'Industries We Serve',

    // Contact page
    'cont.hero.title': 'Contact',
    'cont.hero.subtitle': 'Get in touch with us for a quote or more information about your project.',
    'cont.form.title': 'Request for Quote',
    'cont.form.name': 'Full Name',
    'cont.form.company': 'Company Name',
    'cont.form.email': 'Email',
    'cont.form.phone': 'Phone',
    'cont.form.country': 'Country / City',
    'cont.form.type': 'Request Type',
    'cont.form.type.machining': 'Machining',
    'cont.form.type.fixture': 'Fixture',
    'cont.form.type.machine': 'Special Machine',
    'cont.form.type.quality': 'Measurement / Quality',
    'cont.form.type.welding': 'Assembly / Welding',
    'cont.form.type.other': 'Other',
    'cont.form.desc': 'Project Description',
    'cont.form.file': 'File Upload',
    'cont.form.file.hint': 'Technical drawing, STEP, PDF, Photo',
    'cont.form.privacy': 'I consent to the processing of my personal data under KVKK/GDPR.',
    'cont.form.submit': 'Contact Us',
    'cont.info.title': 'Contact Information',
    'cont.info.email': 'Email',
    'cont.info.email.val': 'proje@modulhassas.com',
    'cont.info.address': 'Address',
    'cont.info.address.val': 'Production details shared upon request.',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'tr',
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: () => '',
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('tr');

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    document.documentElement.lang = lang;
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState(prev => {
      const next = prev === 'tr' ? 'en' : 'tr';
      document.documentElement.lang = next;
      return next;
    });
  }, []);

  const t = useCallback((key: string): string | string[] => {
    const currentTranslations = translations[language];
    const value = currentTranslations[key as keyof typeof currentTranslations];
    return value || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
