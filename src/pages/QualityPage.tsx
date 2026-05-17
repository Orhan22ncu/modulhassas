import { useLanguage } from '@/context/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Check, Shield, FileCheck, Microscope } from 'lucide-react';

export default function QualityPage() {
  const { t } = useLanguage();
  const ref = useScrollReveal();

  const sections = [
    {
      key: 'qualPage.philosophy',
      icon: Shield,
      image: '/images/measurement_cmm_1.jpg',
    },
    {
      key: 'qualPage.cmm',
      icon: Microscope,
      image: '/images/facility_cnc_wide_2.jpg',
    },
    {
      key: 'qualPage.compliance',
      icon: FileCheck,
      image: '/images/cnc_operation_3.jpg',
    },
    {
      key: 'qualPage.final',
      icon: Check,
      image: '/images/cnc_machining_part_2.jpg',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-[72px] relative min-h-[40vh] flex items-center bg-bg-secondary">
        <div className="container-main mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <span className="inline-block text-xs font-medium text-accent-primary uppercase tracking-[0.15em] mb-4">
            {t('nav.quality') as string}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight max-w-3xl mb-6">
            {t('qualPage.hero.title') as string}
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
            {t('qualPage.hero.subtitle') as string}
          </p>
        </div>
      </section>

      {/* Quality Sections */}
      <section className="section-padding bg-bg-primary" ref={ref}>
        <div className="container-main mx-auto space-y-16">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={section.key}
                className={`reveal-item grid lg:grid-cols-2 gap-8 lg:gap-12 items-center`}
              >
                <div className={isReversed ? 'lg:order-2' : ''}>
                  <div className="rounded-lg overflow-hidden border border-surface-border">
                    <img
                      src={section.image}
                      alt={t(`${section.key}.title`) as string}
                      className="w-full h-56 md:h-72 object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className={isReversed ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent-primary/10 rounded-lg flex items-center justify-center">
                      <Icon size={20} className="text-accent-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {t(`${section.key}.title`) as string}
                  </h3>
                  <p className="text-base text-text-secondary leading-relaxed">
                    {t(`${section.key}.desc`) as string}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
