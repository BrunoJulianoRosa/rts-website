export default function Cohorts() {
  return (
    <section className="cohorts">
      <div className="inner reveal">
        <span className="eyebrow">Industry Cohorts</span>
        <h2 className="section-h">
          Programs built for <span className="accent">your members&apos; industries.</span>
        </h2>
        <p className="lede">
          RTS deploys industry-specific cohort programs — meaning your members receive guidance
          that reflects their actual operational realities, not a generic business curriculum.
        </p>
        <div className="cohorts-grid">
          <div className="coh-card">
            <div className="coh-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 3 V21 M3 12 H21" />
                <rect x="3" y="3" width="18" height="18" rx="2" />
              </svg>
            </div>
            <h4>Specialty Healthcare Practices</h4>
            <p>
              Revenue cycle management, patient acquisition cost, provider productivity, payer mix
              optimization, and care delivery process efficiency. Purpose-built for medical, dental,
              and allied health practices.
            </p>
          </div>
          <div className="coh-card">
            <div className="coh-icon">
              <svg viewBox="0 0 24 24">
                <path d="M3 21 H21 M5 21 V11 L12 6 L19 11 V21 M9 21 V15 H15 V21" />
              </svg>
            </div>
            <h4>Construction &amp; Skilled Trades</h4>
            <p>
              Project profitability, crew management, estimating accuracy, SOP documentation,
              subcontractor management, and customer acquisition systems for the trades market.
            </p>
          </div>
          <div className="coh-card">
            <div className="coh-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 3 V21 M5 8 L12 5 L19 8 M5 8 L3 14 H7 Z M19 8 L17 14 H21 Z" />
              </svg>
            </div>
            <h4>Professional Services</h4>
            <p>
              Client lifetime value, pricing strategy, service line profitability, workflow
              efficiency, and business development systems for law, accounting, consulting, and
              financial services firms.
            </p>
          </div>
          <div className="coh-card">
            <div className="coh-icon">
              <svg viewBox="0 0 24 24">
                <path d="M5 8 H19 L18 21 H6 Z M9 8 V5 a3 3 0 0 1 6 0 V8" />
              </svg>
            </div>
            <h4>Retail &amp; Food &amp; Beverage</h4>
            <p>
              Inventory optimization, customer retention, margin management, labor cost control, and
              omnichannel customer acquisition for local retail and restaurant businesses.
            </p>
          </div>
          <div className="coh-card">
            <div className="coh-icon">
              <svg viewBox="0 0 24 24">
                <path d="M3 11 L12 4 L21 11 V21 H3 Z M9 21 V14 H15 V21" />
              </svg>
            </div>
            <h4>Real Estate &amp; Property Services</h4>
            <p>
              Lead conversion systems, client acquisition cost, transaction management SOPs, team
              building, and market positioning for real estate professionals and property managers.
            </p>
          </div>
          <div className="coh-card">
            <div className="coh-icon">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="9" r="5" />
                <path d="M9 17 H15 M10 21 H14 M12 14 V17" />
              </svg>
            </div>
            <h4>Mixed Industry Cohort</h4>
            <p>
              The cross-sector cohort experience leverages peer learning across industries, with AI
              Sherpa personalization ensuring each business receives guidance relevant to their
              specific challenges and growth stage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
