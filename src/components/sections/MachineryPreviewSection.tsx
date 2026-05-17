import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeader from '@/components/shared/SectionHeader';
import ImageZoom from '@/components/shared/ImageZoom';
import { ArrowRight } from 'lucide-react';

const machines = ['mach.item1', 'mach.item2', 'mach.item3', 'mach.item4', 'mach.item5'];
const images = [
  '/images/cnc_operation_3.jpg',
  '/images/facility_cnc_wide_2.jpg',
  '/images/cnc_operation_2.jpg',
  '/images/cnc_machining_part_1.jpg',
];

export default function MachineryPreviewSection() {
  const { language, t } = useLanguage();
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-bg-primary">
      <div className="container-main mx-auto">
        <SectionHeader
          label={t('mach.label') as string}
          title={t('mach.title') as string}
          description={t('mach.desc') as string}
        />
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Machine list */}
          <div ref={ref} className="animate-left">
            <div className="space-y-3">
              {machines.map((key) => (
                <div key={key} className="flex items-center gap-4 py-4 border-b border-surface-border/60 group hover:border-accent-primary/40 transition-all duration-300">
                  <div className="w-2 h-2 bg-accent-primary rounded-full flex-shrink-0 group-hover:scale-150 group-hover:shadow-lg group-hover:shadow-accent-primary/40 transition-all duration-300" />
                  <span className="text-sm font-mono-tech text-text-primary group-hover:text-accent-primary group-hover:translate-x-1 transition-all duration-300">
                    {t(key) as string}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                to={`/${language}/machinery`}
                className="inline-flex items-center gap-2 bg-accent-primary hover:bg-accent-hover text-white px-6 py-3 rounded-md font-medium text-sm transition-all duration-200 hover:shadow-lg hover:shadow-accent-primary/25 hover:-translate-y-0.5"
              >
                {t('mach.cta') as string}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right: Image grid */}
          <div className="grid grid-cols-2 gap-3 animate-right">
            {images.map((src, index) => (
              <div key={index} className="rounded-lg border border-surface-border overflow-hidden">
                <ImageZoom
                  src={src}
                  alt={`Production facility ${index + 1}`}
                  className="h-32 md:h-44"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
