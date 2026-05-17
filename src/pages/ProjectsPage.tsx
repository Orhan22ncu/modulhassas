import { useLanguage } from '@/context/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const projects = [
  {
    title: 'proj.1',
    images: ['/images/engine_block_1.jpg', '/images/engine_block_2.jpg', '/images/engine_block_3.jpg'],
  },
  {
    title: 'proj.2',
    images: ['/images/hydraulic_fixture_1.jpg', '/images/hydraulic_fixture_2.jpg', '/images/hydraulic_fixture_3.jpg'],
  },
  {
    title: 'proj.3',
    images: ['/images/turnkey_project_1.jpg', '/images/turnkey_project_2.jpg', '/images/turnkey_project_3.jpg'],
  },
  {
    title: 'Knuckle OP10-20',
    images: ['/images/knuckle_fixture_1.jpg', '/images/knuckle_fixture_2.jpg', '/images/knuckle_fixture_3.jpg'],
    isCustom: true,
  },
  {
    title: 'Cylinder Head Processing',
    images: ['/images/cylinder_head_line_1.jpg', '/images/cylinder_head_line_2.jpg'],
    isCustom: true,
  },
];

export default function ProjectsPage() {
  const { t } = useLanguage();
  const ref = useScrollReveal();

  return (
    <>
      {/* Hero */}
      <section className="pt-[72px] relative min-h-[40vh] flex items-center bg-bg-secondary">
        <div className="container-main mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <span className="inline-block text-xs font-medium text-accent-primary uppercase tracking-[0.15em] mb-4">
            {t('nav.projects') as string}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight max-w-3xl mb-6">
            {t('projPage.hero.title') as string}
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
            {t('projPage.hero.subtitle') as string}
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-bg-primary" ref={ref}>
        <div className="container-main mx-auto">
          <div className="space-y-16">
            {projects.map((proj, index) => {
              const isReversed = index % 2 !== 0;
              const titleText = proj.isCustom
                ? proj.title
                : (t(`${proj.title}.title`) as string);
              const descText = proj.isCustom
                ? (t('projPage.cta') as string)
                : (t(`${proj.title}.desc`) as string);

              return (
                <div
                  key={proj.title}
                  className="reveal-item grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                >
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className={`grid ${proj.images.length > 2 ? 'grid-cols-2' : 'grid-cols-2'} gap-3`}>
                      {proj.images.map((img, imgIdx) => (
                        <div
                          key={imgIdx}
                          className={`rounded-lg overflow-hidden border border-surface-border ${
                            imgIdx === 0 && proj.images.length > 2 ? 'col-span-2' : ''
                          }`}
                        >
                          <img
                            src={img}
                            alt={`${titleText} ${imgIdx + 1}`}
                            className="w-full h-36 md:h-48 object-cover hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <span className="text-[10px] font-medium text-accent-primary uppercase tracking-[0.15em]">
                      {t('nav.projects') as string}
                    </span>
                    <h3 className="text-2xl font-semibold text-text-primary mt-2 mb-4">
                      {titleText}
                    </h3>
                    <p className="text-base text-text-secondary leading-relaxed">
                      {descText}
                    </p>
                    <div className="mt-6 p-4 bg-bg-secondary border border-surface-border rounded-lg">
                      <p className="text-xs text-text-muted">
                        {t('projPage.cta') as string}
                      </p>
                    </div>
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
