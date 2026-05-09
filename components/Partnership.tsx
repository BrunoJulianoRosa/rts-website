export default function Partnership() {
  return (
    <section className="partnership" id="partnership">
      <div className="inner reveal">
        <span className="eyebrow">The Partnership Architecture</span>
        <h2 className="section-h">
          Three organizations. <span className="accent">One powerful ecosystem.</span>
        </h2>
        <p className="lede">
          The strongest RTS implementations bring together three organizations — your chamber or
          association, a community bank sponsor, and Roadmap to Success — each contributing unique
          strengths toward a shared community mission.
        </p>
        <div className="partner-grid">
          <div className="partner-col pc-chamber">
            <h3>
              <svg viewBox="0 0 24 24">
                <path d="M3 21 H21 M5 21 V10 L12 5 L19 10 V21 M10 21 V14 H14 V21" />
              </svg>
              Chamber / Association / ECD
            </h3>
            <ul>
              <li>Member convening power and community trust</li>
              <li>Outreach and enrollment through existing relationships</li>
              <li>Co-branded program marketing and event integration</li>
              <li>Host for cohort kickoffs, milestone events, and graduation</li>
              <li>Community impact narrative for economic development reporting</li>
              <li>Annual cohort aggregate health report for board and stakeholders</li>
            </ul>
          </div>
          <div className="partner-col pc-bank">
            <h3>
              <svg viewBox="0 0 24 24">
                <path d="M3 9 L12 4 L21 9 H3 Z M5 9 V18 M9 9 V18 M15 9 V18 M19 9 V18 M3 21 H21" />
              </svg>
              Bank / Financial Sponsor
            </h3>
            <ul>
              <li>Program sponsorship and CRA Small Business TA credit</li>
              <li>Access to examiner-ready documentation and cohort impact data</li>
              <li>Portfolio intelligence on member business financial health</li>
              <li>Pre-identified investment-ready graduates for lending relationships</li>
              <li>Community visibility as the economic development champion</li>
              <li>Co-branded recognition across all program materials</li>
            </ul>
          </div>
          <div className="partner-col pc-rts">
            <h3>
              <svg viewBox="0 0 24 24">
                <path d="M3 21 L9 12 L13 17 L17 10 L21 21 Z" />
              </svg>
              Roadmap to Success
            </h3>
            <ul>
              <li>AI Sherpa guided platform and all program technology</li>
              <li>36-question BXR Assessment and scored reporting engine</li>
              <li>Strategic planning, HPF tactical execution, and Bottom Line tracking</li>
              <li>Industry-specific cohort curriculum and facilitation</li>
              <li>Virtual COO guidance for every enrolled business</li>
              <li>Community impact reports and CRA documentation delivered to all partners</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
