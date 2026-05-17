import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import ImageZoom from '@/components/shared/ImageZoom';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function HeroSection() {
  const { language, t } = useLanguage();
  const titleText = (t('hero.title') as string) || '';

  return (
    <section className="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
      {/* Animated grid lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-0 w-full h-[1px] bg-accent-primary/[0.08] line-anim-h" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-[60%] left-0 w-full h-[1px] bg-accent-primary/[0.05] line-anim-h-r" style={{ animationDelay: '0.8s' }} />
        <div className="absolute top-0 left-[30%] w-[1px] h-full bg-accent-primary/[0.05] line-anim-v" style={{ animationDelay: '0.6s' }} />
      </div>

      <div className="container-main mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[55%_45%] gap-8 lg:gap-12 items-center min-h-[calc(100vh-72px)]">
          {/* Left: Text */}
          <div className="py-12 lg:py-0">
            {/* Label */}
            <span className="inline-block text-xs font-medium text-text-muted uppercase tracking-[0.15em] mb-6 fade-in-up fade-in-up-d1">
              {t('hero.label') as string}
            </span>

            {/* Title with character animation — words grouped to prevent break */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-5xl font-bold text-text-primary leading-[1.15] tracking-tight mb-6">
              {titleText.split(' ').map((word, wi) => (
                <span key={wi} className="inline-block mr-[0.25em] whitespace-nowrap">
                  {word.split('').map((char, ci) => (
                    <span
                      key={ci}
                      className="char-anim inline-block"
                      style={{ animationDelay: `${0.4 + (wi * word.length + ci) * 0.035}s` }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-text-secondary leading-relaxed max-w-lg mb-10 fade-in-up fade-in-up-d4">
              {t('hero.subtitle') as string}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 fade-in-up fade-in-up-d5">
              <Link
                to={`/${language}/contact`}
                className="inline-flex items-center justify-center gap-2 bg-accent-primary hover:bg-accent-hover text-white px-6 py-3.5 rounded-md font-medium text-sm transition-all duration-200 hover:shadow-lg hover:shadow-accent-primary/25 hover:-translate-y-0.5"
              >
                {t('hero.cta.primary') as string}
                <ArrowRight size={16} />
              </Link>
              <Link
                to={`/${language}/capabilities`}
                className="inline-flex items-center justify-center gap-2 bg-transparent border border-surface-border hover:border-accent-primary/50 text-text-primary px-6 py-3.5 rounded-md font-medium text-sm transition-all duration-200 hover:bg-surface-hover"
              >
                {t('hero.cta.secondary') as string}
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative fade-in-up fade-in-up-d3">
            <ImageZoom
              src="/images/cover_facility.jpg"
              alt="Modül Hassas Production Facility"
              className="aspect-[4/3] lg:aspect-[3/2] rounded-lg border border-surface-border"
            />

            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
              <div className="absolute top-0 right-0 w-full h-[2px] bg-accent-primary/60 corner-anim" style={{ animationDelay: '1.2s' }} />
              <div className="absolute top-0 right-0 h-full w-[2px] bg-accent-primary/60 corner-anim" style={{ animationDelay: '1.4s', transformOrigin: 'top', animationName: 'lineGrowY' }} />
            </div>
            <div className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none">
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-primary/40 corner-anim" style={{ animationDelay: '1.3s' }} />
              <div className="absolute bottom-0 left-0 h-full w-[2px] bg-accent-primary/40 corner-anim" style={{ animationDelay: '1.5s', transformOrigin: 'top', animationName: 'lineGrowY' }} />
            </div>

            {/* Stats badge */}
            <div className="absolute -bottom-4 -left-4 bg-bg-secondary border border-surface-border rounded-lg px-4 py-3 shadow-xl z-20 fade-in-up fade-in-up-d6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent-primary rounded-full pulse-dot" />
                <span className="text-xs font-mono-tech text-text-secondary">
                  {language === 'tr' ? "Üretim 2009'dan beri" : 'Manufacturing since 2009'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 fade-in-up fade-in-up-d6">
        <span className="text-[10px] text-text-muted uppercase tracking-widest">
          {language === 'tr' ? 'Keşfet' : 'Explore'}
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-accent-primary/60 to-transparent" />
      </div>
    </section>
  );
}
