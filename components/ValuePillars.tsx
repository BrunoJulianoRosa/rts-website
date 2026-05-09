export default function ValuePillars() {
  return (
    <section className="value">
      <div className="inner reveal">
        <span className="eyebrow">Why Organizations Partner With RTS</span>
        <h2 className="section-h">
          Three dimensions of <span className="accent">organizational value.</span>
        </h2>
        <p className="lede">
          Every chamber, association, or ECD that partners with RTS gains on three dimensions
          simultaneously — and each one maps directly to what your members, your board, and your
          community already expect from you.
        </p>
        <div className="value-grid">
          <div className="val-card">
            <div className="val-num">01</div>
            <div className="val-icon">
              <svg viewBox="0 0 24 24">
                <path d="M3 21 L8 12 L12 17 L16 9 L21 21 Z" />
                <circle cx="18" cy="5" r="2" />
              </svg>
            </div>
            <h3>Member Business Impact</h3>
            <p>
              Your members receive a 12-month AI Sherpa guided journey with structured assessments,
              strategic planning, tactical execution, and bottom-line measurement — the kind of
              transformational support most small businesses could never access or afford on their
              own.
            </p>
          </div>
          <div className="val-card">
            <div className="val-num">02</div>
            <div className="val-icon">
              <svg viewBox="0 0 24 24">
                <path d="M3 20 V6 M3 20 H21 M7 20 V14 M11 20 V10 M15 20 V12 M19 20 V8" />
              </svg>
            </div>
            <h3>Documented Community Impact</h3>
            <p>
              Every cohort generates a before-and-after aggregate report showing real business
              performance improvement across your member base — a powerful story of economic
              development that resonates with elected officials, sponsors, and future members.
            </p>
          </div>
          <div className="val-card">
            <div className="val-num">03</div>
            <div className="val-icon">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <h3>Organizational Differentiation</h3>
            <p>
              Position your chamber as the only organization in your region offering AI-powered
              structured business growth support to members. The benefit that drives retention,
              attracts new members, and opens sponsorship conversations with banks and ECDs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
