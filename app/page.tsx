import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import TrustBar from "@/app/components/TrustBar";
import HomeServices from "@/app/components/home/HomeServices";
import HomeFeaturedWork from "@/app/components/home/HomeFeaturedWork";
import HomeProcess from "@/app/components/home/HomeProcess";
import HomeWhyMetal from "@/app/components/home/HomeWhyMetal";
import HomeValue from "@/app/components/home/HomeValue";
import WhyUs from "@/app/components/WhyUs";
import ServiceAreas from "@/app/components/ServiceAreas";
import FinalCTA from "@/app/components/FinalCTA";

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
