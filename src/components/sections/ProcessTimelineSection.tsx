import { useLanguage } from '@/context/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeader from '@/components/shared/SectionHeader';

const steps = ['proc.1', 'proc.2', 'proc.3', 'proc.4', 'proc.5', 'proc.6'];

export default function ProcessTimelineSection() {
  const { t } = useLanguage();
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-bg-secondary">
      <div className="container-main mx-auto">
        <SectionHeader
          label={t('proc.label') as string}
          title={t('proc.title') as string}
          description={t('proc.desc') as string}
        />
        <div ref={ref} className="relative max-w-4xl mx-auto animate-on-scroll">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-surface-border md:-translate-x-px">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-accent-primary/60 via-accent-primary/30 to-transparent" />
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={step} className={`child-stagger relative flex items-start gap-6 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Number circle with pulse */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="relative w-10 h-10 rounded-full bg-bg-secondary border-2 border-accent-primary flex items-center justify-center shadow-lg shadow-accent-primary/20">
                      <span className="text-xs font-mono-tech font-bold text-accent-primary">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Content card */}
                  <div className={`pl-14 md:pl-0 md:w-1/2 ${isLeft ? 'md:pr-14 md:text-right' : 'md:pl-14'}`}>
                    <div className="bg-bg-primary border border-surface-border rounded-lg p-5 hover:border-accent-primary/30 transition-all duration-300 glow-hover">
                      <h3 className="text-lg font-semibold text-text-primary mb-2">{t(`${step}.title`) as string}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{t(`${step}.desc`) as string}</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
