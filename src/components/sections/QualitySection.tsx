import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ImageZoom from '@/components/shared/ImageZoom';
import { Check, ArrowRight } from 'lucide-react';

const items = ['qual.item1', 'qual.item2', 'qual.item3', 'qual.item4', 'qual.item5'];

export default function QualitySection() {
  const { language, t } = useLanguage();
  const imgRef = useScrollReveal();
  const contentRef = useScrollReveal();

  return (
    <section className="section-padding bg-bg-secondary">
      <div className="container-main mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Image */}
          <div ref={imgRef} className="rounded-lg overflow-hidden border border-surface-border animate-on-scroll">
            <ImageZoom
              src="/images/measurement_cmm_1.jpg"
              alt="CMM Quality Measurement"
              className="aspect-[4/3]"
            />
          </div>

          {/* Right: Content */}
          <div ref={contentRef} className="animate-on-scroll">
            <span className="child-stagger inline-block text-xs font-medium text-accent-primary uppercase tracking-[0.15em] mb-3">
              {t('qual.label') as string}
            </span>
            <h2 className="child-stagger text-3xl md:text-4xl font-bold text-text-primary leading-tight mb-4">
              {t('qual.title') as string}
            </h2>
            <p className="child-stagger text-base text-text-secondary leading-relaxed mb-6">
              {t('qual.desc') as string}
            </p>
            <ul className="space-y-3 mb-8">
              {items.map((key) => (
                <li key={key} className="child-stagger flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-6 h-6 bg-accent-primary/10 rounded-md flex items-center justify-center mt-0.5 group-hover:bg-accent-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Check size={14} className="text-accent-primary" />
                  </div>
                  <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">{t(key) as string}</span>
                </li>
              ))}
            </ul>
            <Link
              to={`/${language}/quality`}
              className="child-stagger inline-flex items-center gap-2 text-sm font-medium text-accent-primary hover:text-accent-hover transition-colors"
            >
              {t('qual.cta') as string}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
