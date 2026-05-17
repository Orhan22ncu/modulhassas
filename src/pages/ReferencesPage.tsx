import { useLanguage } from '@/context/LanguageContext';
import { Car, Factory, Hammer, Cpu, Settings, Boxes } from 'lucide-react';

const sectorIcons = [Car, Factory, Hammer, Cpu, Settings, Boxes];
const sectors = ['ref.sector1', 'ref.sector2', 'ref.sector3', 'ref.sector4', 'ref.sector5', 'ref.sector6'];

export default function ReferencesPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="pt-[72px] relative min-h-[40vh] flex items-center bg-bg-secondary">
        <div className="container-main mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <span className="inline-block text-xs font-medium text-accent-primary uppercase tracking-[0.15em] mb-4">
            {t('nav.references') as string}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight max-w-3xl mb-6">
            {t('refPage.hero.title') as string}
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
            {t('refPage.hero.subtitle') as string}
          </p>
        </div>
      </section>

      {/* Sectors */}
      <section className="section-padding bg-bg-primary">
        <div className="container-main mx-auto">
          <h2 className="text-2xl font-bold text-text-primary text-center mb-12">
            {t('refPage.sectors.title') as string}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {sectors.map((key, index) => {
              const Icon = sectorIcons[index];
              return (
                <div
                  key={key}
                  className="bg-bg-secondary border border-surface-border rounded-lg p-8 text-center hover:border-accent-primary/30 transition-all duration-200"
                >
                  <div className="w-16 h-16 bg-accent-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={28} className="text-accent-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {t(key) as string}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Info note */}
          <div className="mt-16 max-w-2xl mx-auto text-center p-6 bg-bg-secondary border border-surface-border rounded-lg">
            <p className="text-sm text-text-secondary">
              {t('ref.desc') as string}
            </p>
            <p className="text-xs text-text-muted mt-2">
              {t('projPage.cta') as string}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
