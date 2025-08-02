import React from "react";
import WizardingHeader from "../components/Landingpagecomps/Header";
import HeroSection from "../components/Landingpagecomps/Hero";
import EventCarousel from "../components/Landingpagecomps/carousel";
import WizardingFooter from "../components/Landingpagecomps/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-serif overflow-hidden relative">
      {/* Glowing Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-16 left-16 w-40 h-40 bg-purple-800 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-24 right-24 w-52 h-52 bg-purple-700 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-amber-600 rounded-full blur-3xl opacity-20"></div>
      </div>

      <WizardingHeader />
      <HeroSection />
      <EventCarousel />
      <WizardingFooter />
    </div>
  );
};

export default LandingPage;
