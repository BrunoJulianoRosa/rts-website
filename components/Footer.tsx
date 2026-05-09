import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <Image src="/assets/RTS-hor-white.png" alt="Roadmap to Success" width={130} height={26} />
      <div className="footer-links">
        <a href="#opener">The Opportunity</a>
        <a href="#journey">The Journey</a>
        <a href="#partnership">Partnership</a>
        <a href="#howstart">Get Started</a>
        <a href="mailto:explore@roadmaptosuccess.ai">Contact</a>
      </div>
      <div className="footer-copy">© 2026 Roadmap to Success · Guiding Business Journeys</div>
    </footer>
  );
}
