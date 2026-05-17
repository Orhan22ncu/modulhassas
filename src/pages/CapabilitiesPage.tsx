import { useLanguage } from '@/context/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Settings, Wrench, Cog, ClipboardCheck, Flame, Layers, Scissors } from 'lucide-react';

const capabilities = [
  { key: 'capPage.special', icon: Settings, image: '/images/special_machine_1.jpg' },
  { key: 'capPage.fixtures', icon: Wrench, image: '/images/fixture_detail_1.jpg' },
  { key: 'capPage.machining', icon: Cog, image: '/images/cnc_machining_part_1.jpg' },
  { key: 'capPage.control', icon: ClipboardCheck, image: '/images/tur_control_fixture_1.png' },
  { key: 'capPage.sheet', icon: Scissors, image: '/images/tur_sheet_metal_1.png' },
  { key: 'capPage.welding', icon: Flame, image: '/images/fixture_assembly_1.jpg' },
  { key: 'capPage.custom', icon: Layers, image: '/images/cnc_operation_4.jpg' },
];

export default function CapabilitiesPage() {
  const { t } = useLanguage();
  const ref = useScrollReveal();

  return (
    <>
      {/* Hero */}
      <section className="pt-[72px] relative min-h-[40vh] flex items-center bg-bg-secondary">
        <div className="container-main mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <span className="inline-block text-xs font-medium text-accent-primary uppercase tracking-[0.15em] mb-4">
            {t('nav.capabilities') as string}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight max-w-3xl mb-6">
            {t('capPage.hero.title') as string}
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
            {t('capPage.hero.subtitle') as string}
          </p>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="section-padding bg-bg-primary" ref={ref}>
        <div className="container-main mx-auto">
          <div className="space-y-12">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              const isReversed = index % 2 !== 0;
              return (
                <div
                  key={cap.key}
                  className={`reveal-item grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className="rounded-lg overflow-hidden border border-surface-border">
                      <img
                        src={cap.image}
                        alt={t(`${cap.key}.title`) as string}
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
                      <h3 className="text-xl font-semibold text-text-primary">
                        {t(`${cap.key}.title`) as string}
                      </h3>
                    </div>
                    <p className="text-base text-text-secondary leading-relaxed">
                      {t(`${cap.key}.desc`) as string}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
