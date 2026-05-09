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
import CtaStrip from "@/components/CtaStrip";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Nav />
      <Hero />
      <Opener />
      <Sherpa />
      <ValuePillars />
      <CtaStrip
        text="Sounds like a fit? Let's find out in 60 minutes."
        label="Schedule a Discovery Session"
      />
      <Members />
      <Journey />
      <CtaStrip
        text="Ready to launch your first cohort? We'll build it together."
        label="Book a Session"
      />
      <Cohorts />
      <Partnership />
      <Impact />
      <CtaStrip
        text="Your members deserve a structured path to the summit."
        label="Let's Talk"
      />
      <Testimonial />
      <HowStart />
      <FinalCTA />
      <Footer />
    </>
  );
}
