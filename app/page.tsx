import dynamic from "next/dynamic";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import TrustBar from "@/app/components/TrustBar";
import HomeServices from "@/app/components/home/HomeServices";

// Lazy-load everything below the fold
const HomeFeaturedWork = dynamic(() => import("@/app/components/home/HomeFeaturedWork"));
const HomeProcess = dynamic(() => import("@/app/components/home/HomeProcess"));
const HomeWhyMetal = dynamic(() => import("@/app/components/home/HomeWhyMetal"));
const HomeValue = dynamic(() => import("@/app/components/home/HomeValue"));
const WhyUs = dynamic(() => import("@/app/components/WhyUs"));
const ServiceAreas = dynamic(() => import("@/app/components/ServiceAreas"));
const FinalCTA = dynamic(() => import("@/app/components/FinalCTA"));

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <HomeServices />
        <HomeFeaturedWork />
        <HomeProcess />
        <HomeWhyMetal />
        <HomeValue />
        <WhyUs />
        <ServiceAreas />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
