import { useScrollReveal, useCountUp } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/context/LanguageContext';
import SectionHeader from '@/components/shared/SectionHeader';

function MetricCard({ value, textValue, label, description }: {
  value?: number; textValue?: string; label: string; description: string;
}) {
  const { ref, count } = useCountUp(value || 0, 2000);

  return (
    <div className="child-stagger bg-bg-secondary border border-surface-border rounded-lg p-6 md:p-8 hover:border-accent-primary/30 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent-primary/5 transition-all duration-300 glow-hover">
      {textValue ? (
        <span className="block text-4xl md:text-5xl font-bold font-mono-tech text-accent-primary mb-3">{textValue}</span>
      ) : (
        <span ref={ref} className="block text-4xl md:text-5xl font-bold font-mono-tech text-accent-primary mb-3">
          {count.toLocaleString()}
        </span>
      )}
      <span className="block text-base font-semibold text-text-primary mb-1">{label}</span>
      <span className="block text-sm text-text-secondary">{description}</span>
    </div>
  );
}

export default function TrustMetricsSection() {
  const { t } = useLanguage();
  const ref = useScrollReveal();

  const metrics = [
    { id: 'm1', value: 2009 },
    { id: 'm2', value: 2200 },
    { id: 'm3', value: 22 },
    { id: 'm4', textValue: '5-Axis' },
  ];

  return (
    <section className="section-padding bg-bg-secondary border-t border-surface-border">
      <div className="container-main mx-auto">
        <SectionHeader
          label={t('metrics.label') as string}
          title={t('metrics.title') as string}
          description={t('metrics.desc') as string}
        />
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-on-scroll">
          {metrics.map((m) => (
            <MetricCard
              key={m.id}
              value={m.value}
              textValue={m.textValue}
              label={t(`metrics.${m.id}.label`) as string}
              description={t(`metrics.${m.id}.desc`) as string}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
