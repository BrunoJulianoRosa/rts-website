import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Opener from "@/components/Opener";
import Sherpa from "@/components/Sherpa";
import ValuePillars from "@/components/ValuePillars";
import Members from "@/components/Members";
import Journey from "@/components/Journey";
import Cohorts from "@/components/Cohorts";
import Partnership from "@/components/Partnership";
import Impact from "@/components/Impact";
import Testimonial from "@/components/Testimonial";
import HowStart from "@/components/HowStart";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Nav />
      <Hero />
      <Opener />
      <Sherpa />
      <ValuePillars />
      <Members />
      <Journey />
      <Cohorts />
      <Partnership />
      <Impact />
      <Testimonial />
      <HowStart />
      <FinalCTA />
      <Footer />
    </>
  );
}
