export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="cta-glow" />
      <div className="cta-mtn">
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 200 L0 130 L160 60 L320 100 L480 30 L640 80 L800 20 L960 70 L1120 40 L1280 90 L1440 50 L1440 200 Z"
            fill="rgba(255,255,255,0.06)"
          />
          <path
            d="M0 200 L0 160 L120 120 L260 150 L400 90 L560 130 L720 70 L880 110 L1040 80 L1200 130 L1360 100 L1440 130 L1440 200 Z"
            fill="rgba(255,255,255,0.04)"
          />
        </svg>
      </div>
      <div className="final-cta-inner">
        <h2>
          Your members are ready
          <br />
          to reach the <span className="display">summit.</span>
        </h2>
        <p>
          Schedule a 30-minute Discovery Session. We&apos;ll show you exactly how the RTS cohort
          model works, what your members will build, and what your community impact report looks
          like at graduation.
        </p>
        <div className="btn-pair">
          <a
            href="https://calendly.com/roadmaptosuccess"
            className="btn btn-gold"
            style={{ padding: "16px 38px" }}
          >
            Schedule a Discovery Session
          </a>
          <a
            href="mailto:explore@roadmaptosuccess.ai"
            className="btn btn-outline-light"
            style={{ padding: "15px 38px" }}
          >
            Email Our Team
          </a>
        </div>
        <div className="cta-contact">
          explore@roadmaptosuccess.ai &nbsp;·&nbsp; roadmaptosuccess.ai &nbsp;·&nbsp; 901-848-7900
        </div>
      </div>
    </section>
  );
}
