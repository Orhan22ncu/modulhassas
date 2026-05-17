import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { lang } = useParams<{ lang: string }>();
  const { setLanguage, language } = useLanguage();

  useEffect(() => {
    if ((lang === 'tr' || lang === 'en') && lang !== language) {
      setLanguage(lang);
    }
  }, [lang, language, setLanguage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lang]);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary font-body antialiased">
      <ScrollProgress />
      <div className="fixed inset-0 grid-overlay pointer-events-none" style={{ zIndex: 0 }} />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 10 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
