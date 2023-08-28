import Footer from "@/components/Footer";
import HomeHero from "@/components/LandingPage/HomeHero";
import HowItWorksSection from "@/components/LandingPage/HowItWorksSection";
import LatarBelakangSection from "@/components/LandingPage/LatarBelakangSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeHero />
      <LatarBelakangSection />
      <HowItWorksSection />
      <Footer />
    </>
  );
}
