import Hero from "@/components/Hero";
import ContactSection from "@/components/ContactSection";
import InnovationSection from "@/components/InnovationSection/InnovationSection";
import TraditionSection from "@/components/TraditionSection/TraditionSection";
import WhatIsPanSection from "@/components/WhatIsPanSection/WhatIsPanSection";
import RevolutionSection from "@/components/RevolutionSection/RevolutionSection";
import ComparisonSection from "@/components/ComparisonSection/ComparisonSection";
import ProductFeaturesSection from "@/components/ProductFeaturesSection/ProductFeaturesSection";
import ProfessionalBenefitsSection from "@/components/ProfessionalBenefitsSection/ProfessionalBenefitsSection";
import ExcellenceSection from "@/components/ExcellenceSection/ExcellenceSection";
//import Header from "@/components/Header/Header";
//import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      
      <Hero />
      <InnovationSection />
      <TraditionSection />
      <WhatIsPanSection />
      <RevolutionSection />
      <ComparisonSection />
      <ProductFeaturesSection />
      <ProfessionalBenefitsSection />
      <ExcellenceSection />
      <ContactSection />
    
    </>
  );
}
