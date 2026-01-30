import HeroSection from "../components/HeroSection";
import BrandStatement from "../components/BrandStatement";
import CareerReadySkills from "../components/CareerReadySkills";
import ValueProposition from "../components/ValueProposition";
import StudentPrograms from "../components/StudentPrograms";
import KidsPrograms from "../components/KidsPrograms";
import UniqueFeatures from "../components/UniqueFeatures";
import CTASection from "../components/CTASection";
import OurPartners from "../components/OurPartners";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <BrandStatement />
      <CareerReadySkills />
      <ValueProposition />
      <StudentPrograms />
      <KidsPrograms />
      <UniqueFeatures />
      <CTASection />
      <OurPartners />
      <Footer />
    </div>
  );
}
