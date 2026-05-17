import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeader from '@/components/shared/SectionHeader';
import { Car, Factory, Hammer, Cpu, Settings, Boxes, ArrowRight } from 'lucide-react';

const sectorIcons = [Car, Factory, Hammer, Cpu, Settings, Boxes];
const sectors = ['ref.sector1', 'ref.sector2', 'ref.sector3', 'ref.sector4', 'ref.sector5', 'ref.sector6'];

export default function ReferencesTeaserSection() {
  const { language, t } = useLanguage();
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-bg-secondary">
      <div className="container-main mx-auto">
        <SectionHeader
          label={t('ref.label') as string}
          title={t('ref.title') as string}
          description={t('ref.desc') as string}
          centered
        />
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 animate-on-scroll">
          {sectors.map((key, index) => {
            const Icon = sectorIcons[index];
            return (
              <div
                key={key}
                className="child-stagger group flex flex-col items-center gap-3 p-5 bg-bg-primary rounded-lg border border-surface-border hover:border-accent-primary/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent-primary/10 rounded-full flex items-center justify-center group-hover:bg-accent-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Icon size={22} className="text-accent-primary" />
                </div>
                <span className="text-sm font-medium text-text-primary text-center group-hover:text-accent-primary transition-colors">
                  {t(key) as string}
                </span>
              </div>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Link
            to={`/${language}/references`}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-primary hover:text-accent-hover transition-colors"
          >
            {t('ref.cta') as string}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
