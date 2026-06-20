import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutRinjani from "./components/AboutRinjani";
import AboutUs from "./components/AboutUs";
import TourPackages from "./components/TourPackages";
import MountainMajesty from "./components/MountainMajesty";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Location from "./components/Location";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const refreshScrollTriggers = () => {
      ScrollTrigger.refresh();
    };

    // Refresh when all assets (images, stylesheets, fonts) are loaded
    window.addEventListener("load", refreshScrollTriggers);

    // Refresh at progressive delays to handle dynamic renders
    const timer1 = setTimeout(refreshScrollTriggers, 500);
    const timer2 = setTimeout(refreshScrollTriggers, 1500);
    const timer3 = setTimeout(refreshScrollTriggers, 3000);

    return () => {
      window.removeEventListener("load", refreshScrollTriggers);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div id="top" className="min-h-screen flex flex-col justify-between bg-stone-50 font-sans selection:bg-sunrise-500 selection:text-white antialiased">
      {/* Sticky Premium Navbar header */}
      <Navbar />

      {/* Primary Layout Sections */}
      <main className="flex-grow">
        {/* Full Screen Cinematic Hero Section */}
        <Hero />

        {/* Bento Service Features Section */}
        <WhyChooseUs />

        {/* Interactive Stats and Mountain descriptions */}
        <AboutRinjani />

        {/* About Us Company Profile Section */}
        <AboutUs />

        {/* Packages Selector (Includes interactive detail modal popup) */}
        <TourPackages />

        {/* Dedicated focused Volcano description and photo */}
        <MountainMajesty />

        {/* Testimonials Reviews Slider Carousel */}
        <Testimonials />

        {/* Accordion preparation Frequently Asked Questions */}
        <FAQ />

        {/* Google Maps Basecamp Location Section */}
        <Location />

        {/* Conversions booster final visual backdrop card */}
        <CTA />
      </main>

      {/* Sustainable Local Enterprise Footer */}
      <Footer />
    </div>
  );
}
