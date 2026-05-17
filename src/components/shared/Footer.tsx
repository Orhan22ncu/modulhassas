import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const { language, t } = useLanguage();
  const isTR = language === 'tr';

  const quickLinks = [
    { key: 'nav.home', path: '' },
    { key: 'nav.about', path: 'about' },
    { key: 'nav.capabilities', path: 'capabilities' },
    { key: 'nav.machinery', path: 'machinery' },
  ];

  const otherLinks = [
    { key: 'nav.quality', path: 'quality' },
    { key: 'nav.projects', path: 'projects' },
    { key: 'nav.references', path: 'references' },
    { key: 'nav.contact', path: 'contact' },
  ];

  return (
    <footer className="relative z-10 bg-bg-secondary border-t border-surface-border">
      <div className="container-main mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col leading-none mb-4">
              <span className="text-lg font-bold tracking-tight text-text-primary">
                MODÜL HASSAS
              </span>
              <span className="text-[10px] tracking-[0.2em] text-text-muted font-medium uppercase">
                Group / APROSES Production
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              {isTR
                ? 'Özel makine, fikstür, hassas talaşlı imalat ve anahtar teslim üretim çözümlerinde güvenilir mühendislik ortağınız.'
                : 'Your trusted engineering partner for special machinery, fixtures, precision machining and turnkey production solutions.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              {isTR ? 'Hızlı Linkler' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={`/${language}/${link.path}`}
                    className="text-sm text-text-secondary hover:text-accent-primary transition-colors duration-200"
                  >
                    {t(link.key) as string}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              {isTR ? 'Diğer' : 'Other'}
            </h4>
            <ul className="space-y-2">
              {otherLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={`/${language}/${link.path}`}
                    className="text-sm text-text-secondary hover:text-accent-primary transition-colors duration-200"
                  >
                    {t(link.key) as string}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              {t('cont.info.title') as string}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-accent-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-text-secondary">proje@modulhassas.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-text-secondary">
                  {isTR ? 'Türkiye' : 'Turkey'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-accent-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-text-secondary">
                  {isTR ? 'Talep üzerine' : 'Upon request'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {t('footer.copyright') as string}
          </p>
          <div className="flex items-center gap-3">
            <span className="text-sm text-text-muted">{t('footer.design') as string}</span>
            <a
              href="https://palette.systems"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/palette-logo.png"
                alt="Palette Systems"
                className="h-10 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
