export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-photo" />
      <div className="hero-radial" />
      <div className="hero-grid" />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="dot" />
          <span className="label" style={{ color: "var(--brand-accent)" }}>
            Guiding Business Journeys
          </span>
        </div>
        <h1>
          Your members are ready to{" "}
          <span style={{ color: "var(--brand-accent)" }}>climb.</span>
          <br />
          Give them a sherpa.
        </h1>
        <p className="hero-sub">
          Roadmap to Success is the AI Sherpa Guide platform that transforms your small business
          members into measurably stronger, more successful companies — and delivers the documented
          community impact your organization was built to create.
        </p>
        <div className="hero-btns">
          <a href="https://calendly.com/roadmaptosuccess" className="btn btn-gold">
            Schedule a Discovery Session →
          </a>
          <a href="#opener" className="btn btn-outline-light">
            See the Opportunity ↓
          </a>
        </div>
        <div className="hero-audience">
          <span className="aud-tag">Chambers of Commerce</span>
          <span className="aud-tag">Business Associations</span>
          <span className="aud-tag">Economic Development Organizations</span>
          <span className="aud-tag">Community Leaders</span>
        </div>
      </div>
    </section>
  );
}
