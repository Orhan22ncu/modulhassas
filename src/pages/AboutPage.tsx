import { useLanguage } from '@/context/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  const { t } = useLanguage();
  const ref = useScrollReveal();

  const values = [
    { key: 'about.values.1', icon: Target },
    { key: 'about.values.2', icon: Award },
    { key: 'about.values.3', icon: Users },
    { key: 'about.values.4', icon: TrendingUp },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-[72px] relative min-h-[40vh] flex items-center bg-bg-secondary">
        <div className="container-main mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <span className="inline-block text-xs font-medium text-accent-primary uppercase tracking-[0.15em] mb-4">
            {t('nav.about') as string}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight max-w-3xl mb-6">
            {t('about.hero.title') as string}
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
            {t('about.hero.subtitle') as string}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-bg-primary" ref={ref}>
        <div className="container-main mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="reveal-item">
              <img
                src="/images/facility_cnc_wide_3.jpg"
                alt="Production Facility"
                className="w-full h-auto rounded-lg border border-surface-border object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
            <div className="reveal-item space-y-5">
              <h2 className="text-3xl font-bold text-text-primary">
                {t('about.story.title') as string}
              </h2>
              <p className="text-base text-text-secondary leading-relaxed">
                {t('about.story.p1') as string}
              </p>
              <p className="text-base text-text-secondary leading-relaxed">
                {t('about.story.p2') as string}
              </p>
              <p className="text-base text-text-secondary leading-relaxed">
                {t('about.story.p3') as string}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-main mx-auto">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
            {t('about.values.title') as string}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.key}
                  className="bg-bg-primary border border-surface-border rounded-lg p-6 text-center hover:border-accent-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-accent-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-accent-primary" />
                  </div>
                  <p className="text-sm font-medium text-text-primary">
                    {t(v.key) as string}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="section-padding bg-bg-primary">
        <div className="container-main mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '2009', label: t('metrics.m1.label') as string },
              { value: '2200 m²', label: t('metrics.m2.label') as string },
              { value: '22', label: t('metrics.m3.label') as string },
              { value: '5-Axis', label: t('metrics.m4.label') as string },
            ].map((m) => (
              <div key={m.value} className="text-center p-6 bg-bg-secondary rounded-lg border border-surface-border">
                <span className="block text-3xl md:text-4xl font-bold font-mono-tech text-accent-primary mb-2">
                  {m.value}
                </span>
                <span className="text-sm text-text-secondary">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
