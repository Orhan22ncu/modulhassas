import { useScrollReveal } from '@/hooks/useScrollReveal';

interface SectionHeaderProps {
  label: string;
  title: string;
  description: string;
  centered?: boolean;
}

export default function SectionHeader({ label, title, description, centered = false }: SectionHeaderProps) {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      <span className="child-stagger inline-block text-xs font-medium text-accent-primary uppercase tracking-[0.15em] mb-3">
        {label}
      </span>
      <h2 className="child-stagger text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-text-primary leading-tight mb-4">
        {title}
      </h2>
      <p className={`child-stagger text-base text-text-secondary leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''}`}>
        {description}
      </p>
    </div>
  );
}
