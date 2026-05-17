import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeader from '@/components/shared/SectionHeader';
import { Settings, Wrench, Cog, ClipboardCheck, Flame, Layers, ArrowRight } from 'lucide-react';

const icons = [Settings, Wrench, Cog, ClipboardCheck, Flame, Layers];

const capabilities = [
  { key: 'cap.1', icon: 0 },
  { key: 'cap.2', icon: 1 },
  { key: 'cap.3', icon: 2 },
  { key: 'cap.4', icon: 3 },
  { key: 'cap.5', icon: 4 },
  { key: 'cap.6', icon: 5 },
];

export default function CapabilitiesSection() {
  const { language, t } = useLanguage();
  const gridRef = useScrollReveal();

  return (
    <section className="section-padding bg-bg-primary">
      <div className="container-main mx-auto">
        <SectionHeader
          label={t('cap.label') as string}
          title={t('cap.title') as string}
          description={t('cap.desc') as string}
        />
        <div ref={gridRef} className="grid md:grid-cols-2 gap-6 animate-on-scroll">
          {capabilities.map((cap) => {
            const Icon = icons[cap.icon];
            return (
              <div
                key={cap.key}
                className="child-stagger group bg-bg-secondary border border-surface-border rounded-lg p-6 hover:border-accent-primary/30 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent-primary/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-primary/10 rounded-xl flex items-center justify-center group-hover:bg-accent-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Icon size={22} className="text-accent-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                      {t(`${cap.key}.title`) as string}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-3">
                      {t(`${cap.key}.desc`) as string}
                    </p>
                    <Link
                      to={`/${language}/capabilities`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-accent-primary hover:text-accent-hover transition-colors"
                    >
                      {language === 'tr' ? 'Detaylı Bilgi' : 'Learn More'}
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Link
            to={`/${language}/capabilities`}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-primary hover:text-accent-hover transition-colors"
          >
            {t('cap.cta') as string}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
