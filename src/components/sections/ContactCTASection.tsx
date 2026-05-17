import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

export default function ContactCTASection() {
  const { language, t } = useLanguage();
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-bg-primary border-t border-surface-border">
      <div className="container-main mx-auto">
        <div ref={ref} className="max-w-3xl mx-auto text-center animate-on-scroll">
          <h2 className="child-stagger text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-6">
            {t('cta.title') as string}
          </h2>
          <p className="child-stagger text-base text-text-secondary leading-relaxed mb-10 max-w-xl mx-auto">
            {t('cta.desc') as string}
          </p>
          <div className="child-stagger">
            <Link
              to={`/${language}/contact`}
              className="inline-flex items-center gap-2 bg-accent-primary hover:bg-accent-hover text-white px-8 py-4 rounded-md font-medium text-base transition-all duration-200 hover:shadow-xl hover:shadow-accent-primary/25 hover:-translate-y-1"
            >
              {t('cta.button') as string}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
