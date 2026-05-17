import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeader from '@/components/shared/SectionHeader';
import ImageZoom from '@/components/shared/ImageZoom';
import { ArrowRight } from 'lucide-react';

const projects = [
  { key: 'proj.1', image: '/images/engine_block_1.jpg' },
  { key: 'proj.2', image: '/images/hydraulic_fixture_1.jpg' },
  { key: 'proj.3', image: '/images/turnkey_project_1.jpg' },
];

export default function ProjectsTeaserSection() {
  const { language, t } = useLanguage();
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-bg-primary">
      <div className="container-main mx-auto">
        <SectionHeader
          label={t('proj.label') as string}
          title={t('proj.title') as string}
          description={t('proj.desc') as string}
        />
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll">
          {projects.map((proj) => (
            <div
              key={proj.key}
              className="child-stagger group bg-bg-secondary border border-surface-border rounded-lg overflow-hidden hover:border-accent-primary/30 hover:-translate-y-3 hover:shadow-2xl hover:shadow-accent-primary/10 transition-all duration-500"
            >
              <div className="relative h-52 overflow-hidden">
                <ImageZoom
                  src={proj.image}
                  alt={t(`${proj.key}.title`) as string}
                  className="h-52"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/80 via-bg-secondary/20 to-transparent pointer-events-none" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                  {t(`${proj.key}.title`) as string}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {t(`${proj.key}.desc`) as string}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to={`/${language}/projects`}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-primary hover:text-accent-hover transition-colors"
          >
            {t('proj.cta') as string}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
