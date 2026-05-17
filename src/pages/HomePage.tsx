import HeroSection from '@/components/sections/HeroSection';
import TrustMetricsSection from '@/components/sections/TrustMetricsSection';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';
import ProcessTimelineSection from '@/components/sections/ProcessTimelineSection';
import MachineryPreviewSection from '@/components/sections/MachineryPreviewSection';
import QualitySection from '@/components/sections/QualitySection';
import ProjectsTeaserSection from '@/components/sections/ProjectsTeaserSection';
import ReferencesTeaserSection from '@/components/sections/ReferencesTeaserSection';
import ContactCTASection from '@/components/sections/ContactCTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustMetricsSection />
      <CapabilitiesSection />
      <ProcessTimelineSection />
      <MachineryPreviewSection />
      <QualitySection />
      <ProjectsTeaserSection />
      <ReferencesTeaserSection />
      <ContactCTASection />
    </>
  );
}
