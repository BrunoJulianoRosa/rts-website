import Image from "next/image";

export default function Nav() {
  return (
    <nav>
      <a href="#top" className="nav-logo">
        <Image src="/assets/RTS-hor-white.png" alt="Roadmap to Success" width={160} height={34} />
      </a>
      <div className="nav-links">
        <a href="#opener">The Opportunity</a>
        <a href="#journey">The Journey</a>
        <a href="#partnership">Partnership</a>
        <a href="#howstart">Get Started</a>
        <a href="https://calendly.com/roadmaptosuccess" className="nav-cta">
          Schedule a Session
        </a>
      </div>
    </nav>
  );
}
