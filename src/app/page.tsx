"use client";

import { useState } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import TrustSection from "../components/Trust/TrustSection";
import LocationMap from "../components/LocationMap/LocationMap";
import SpaceSpecsSection from "../components/SpaceSpecs/SpaceSpecsSection";
import BenefitsSection from "../components/Benefits/BenefitsSection";
import PricingStripe from "../components/PricingStripe/PricingStripe";
import FaqSection from "../components/FaqSection/FaqSection";
import Footer from "../components/Footer/Footer";
import WizardModal from "../components/Wizard/WizardModal";
import { LeadData } from "../types";

export default function Home() {
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [wizardConfig, setWizardConfig] = useState<{ step: number, data: Partial<LeadData> }>({ step: 0, data: {} });

  const handleOpenWizard = (interest?: string) => {
    if (interest) {
      setWizardConfig({ step: 1, data: { interest } });
    } else {
      setWizardConfig({ step: 0, data: {} });
    }
    setIsWizardOpen(true);
  };

  return (
    <>
      <Header />
      <main>
        <HeroSection onOpenWizard={handleOpenWizard} />
        <TrustSection onOpenWizard={() => handleOpenWizard()} />
        <LocationMap />
        <SpaceSpecsSection />
        <BenefitsSection />
        <PricingStripe onOpenWizard={handleOpenWizard} />
        <FaqSection />
      </main>
      <Footer />

      {isWizardOpen && (
        <WizardModal 
          onClose={() => setIsWizardOpen(false)} 
          initialStep={wizardConfig.step}
          initialData={wizardConfig.data}
        />
      )}
    </>
  );
}
