import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { language, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentLang = language;
  const otherLang = currentLang === 'tr' ? 'en' : 'tr';

  const navLinks = [
    { key: 'nav.home', path: '' },
    { key: 'nav.about', path: 'about' },
    { key: 'nav.capabilities', path: 'capabilities' },
    { key: 'nav.machinery', path: 'machinery' },
    { key: 'nav.quality', path: 'quality' },
    { key: 'nav.projects', path: 'projects' },
    { key: 'nav.references', path: 'references' },
    { key: 'nav.contact', path: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const switchLanguage = () => {
    const newPath = location.pathname.replace(`/${currentLang}`, `/${otherLang}`);
    navigate(newPath);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled
          ? 'bg-bg-primary/90 backdrop-blur-xl border-b border-surface-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-main mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link to={`/${currentLang}`} className="flex items-center gap-2 group">
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-tight text-text-primary">MODÜL HASSAS</span>
              <span className="text-[10px] tracking-[0.2em] text-text-muted font-medium uppercase">Group / APROSES Production</span>
            </div>
            <div className="w-[3px] h-6 bg-accent-primary rounded-full ml-1 group-hover:h-8 transition-all duration-200" />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === `/${currentLang}/${link.path}` || (link.path === '' && location.pathname === `/${currentLang}`);
              return (
                <Link
                  key={link.key}
                  to={`/${currentLang}/${link.path}`}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive ? 'text-accent-primary' : 'text-text-secondary hover:text-text-primary'}`}
                >
                  {t(link.key) as string}
                  {isActive && <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-accent-primary rounded-full" />}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <button onClick={switchLanguage} className="flex items-center gap-1 text-sm font-medium">
              <span className={currentLang === 'tr' ? 'text-accent-primary font-semibold' : 'text-text-muted'}>TR</span>
              <span className="text-text-muted">|</span>
              <span className={currentLang === 'en' ? 'text-accent-primary font-semibold' : 'text-text-muted'}>EN</span>
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-text-primary hover:text-accent-primary transition-colors" aria-label="Toggle menu">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`lg:hidden absolute top-full left-0 right-0 bg-bg-primary/95 backdrop-blur-xl border-b border-surface-border transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="container-main mx-auto px-4 py-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === `/${currentLang}/${link.path}` || (link.path === '' && location.pathname === `/${currentLang}`);
            return (
              <Link key={link.key} to={`/${currentLang}/${link.path}`} className={`block py-3 text-base font-medium border-b border-surface-border/50 ${isActive ? 'text-accent-primary' : 'text-text-secondary hover:text-text-primary'}`}>
                {t(link.key) as string}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
