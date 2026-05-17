import { useLanguage } from '@/context/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Machine {
  name: string;
  category: string;
  axes: string;
  capacity: string;
  note: string;
}

const machines: Machine[] = [
  { name: 'MAZAK FJV 35/80', category: 'CNC Machining Center', axes: '3', capacity: '2000 x 800 x 650 mm', note: 'Large part machining' },
  { name: 'HURON EX-C 20', category: 'CNC Machining Center', axes: '3', capacity: '1600 x 800 x 650 mm', note: 'Universal milling' },
  { name: 'MT RENT V85', category: 'CNC Machining Center', axes: '3', capacity: '850 x 560 x 560 mm', note: 'Compact machining' },
  { name: 'MATEC 30 FD-Z', category: 'Millturn', axes: '5', capacity: '2000 x 800 x 800 mm', note: 'Multi-tasking, full 5-axis' },
  { name: 'MAZAK FJV 60/120', category: 'CNC Machining Center', axes: '3', capacity: '3000 x 1480 x 640 mm', note: 'Extra large capacity' },
  { name: 'GROB G550', category: '5-Axis Machining', axes: '5', capacity: '1020 x 950 x 1020 mm', note: 'Premium 5-axis simultaneous' },
  { name: 'Universal Turning Machine', category: 'CNC Turning', axes: '2', capacity: 'Ø900 x 5000 mm', note: 'Large diameter turning' },
  { name: 'Universal Turning Machine', category: 'CNC Turning', axes: '2', capacity: 'Ø300 x 1500 mm', note: 'Precision turning' },
  { name: 'Universal Milling Machine', category: 'Milling', axes: '3', capacity: '1020 x 550 x 550 mm', note: 'Flexible operations' },
  { name: 'Cylindrical Grinder', category: 'Grinding', axes: '2', capacity: 'Ø300 x 600 mm', note: 'Surface + inside-hole grinding' },
  { name: 'Surface Grinder', category: 'Grinding', axes: '3', capacity: '1600 x 600 x 500 mm', note: 'Precision surface finish' },
];

const measurement = [
  { name: 'ZEISS CONTURA', type: 'CMM', capacity: '2000 x 900 x 600 mm', note: 'L330/1.7µm accuracy' },
  { name: 'ZEISS ACCURA', type: 'CMM', capacity: '1200 x 600 x 500 mm', note: 'High precision measurement' },
  { name: 'MITUTOYO', type: 'Mihengir', capacity: '1200 mm', note: 'Length measurement' },
];

const software = [
  { name: 'NX 12', licenses: 2 },
  { name: 'SOLIDWORKS 2025', licenses: 4 },
  { name: 'CATIA V5 2023', licenses: 4 },
  { name: 'MASTERCAM 2020', licenses: 1 },
  { name: 'WORKNC CAM & EDGECAM 2021', licenses: 2 },
];

export default function MachineryPage() {
  const { t } = useLanguage();
  const ref = useScrollReveal();

  return (
    <>
      {/* Hero */}
      <section className="pt-[72px] relative min-h-[40vh] flex items-center bg-bg-secondary">
        <div className="container-main mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <span className="inline-block text-xs font-medium text-accent-primary uppercase tracking-[0.15em] mb-4">
            {t('nav.machinery') as string}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight max-w-3xl mb-6">
            {t('machPage.hero.title') as string}
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
            {t('machPage.hero.subtitle') as string}
          </p>
        </div>
      </section>

      {/* Processing Machines */}
      <section className="section-padding bg-bg-primary" ref={ref}>
        <div className="container-main mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            {t('machPage.cnc.title') as string}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {machines.map((machine) => (
              <div
                key={machine.name + machine.capacity}
                className="reveal-item bg-bg-secondary border border-surface-border rounded-lg p-5 hover:border-l-2 hover:border-l-accent-primary hover:translate-x-0.5 transition-all duration-200"
              >
                <span className="text-[10px] font-medium text-accent-primary uppercase tracking-[0.15em]">
                  {machine.category}
                </span>
                <h3 className="text-base font-semibold text-text-primary mt-1 mb-3">
                  {machine.name}
                </h3>
                <div className="space-y-1.5 font-mono-tech text-xs">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Eksen:</span>
                    <span className="text-text-secondary">{machine.axes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Kapasite:</span>
                    <span className="text-text-secondary">{machine.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Not:</span>
                    <span className="text-text-secondary">{machine.note}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Measurement Equipment */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-main mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            {t('machPage.measure.title') as string}
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {measurement.map((device) => (
              <div
                key={device.name}
                className="bg-bg-primary border border-surface-border rounded-lg p-5"
              >
                <span className="text-[10px] font-medium text-accent-primary uppercase tracking-[0.15em]">
                  {device.type}
                </span>
                <h3 className="text-base font-semibold text-text-primary mt-1 mb-3">
                  {device.name}
                </h3>
                <div className="space-y-1.5 font-mono-tech text-xs">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Kapasite:</span>
                    <span className="text-text-secondary">{device.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Not:</span>
                    <span className="text-text-secondary">{device.note}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software */}
      <section className="section-padding bg-bg-primary">
        <div className="container-main mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            {t('machPage.software.title') as string}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {software.map((sw) => (
              <div
                key={sw.name}
                className="bg-bg-secondary border border-surface-border rounded-lg p-5 text-center"
              >
                <h3 className="text-sm font-semibold text-text-primary mb-2">{sw.name}</h3>
                <span className="text-xs font-mono-tech text-accent-primary">
                  {sw.licenses} {t('machPage.software.title') === 'CAD/CAM Yazılımları' ? 'Lisans' : 'Licenses'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
