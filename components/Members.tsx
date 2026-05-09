export default function Members() {
  return (
    <section className="members">
      <div className="inner reveal">
        <span className="eyebrow on-dark">Member Outcomes</span>
        <h2 className="section-h on-dark">
          What your members <span className="accent">walk away with.</span>
        </h2>
        <p className="lede on-dark">
          After 12 months with the RTS AI Sherpa, every member business has a documented growth
          system — not just a plan, but proof of execution and measured results.
        </p>
        <div className="members-cols">
          <div className="m-col op">
            <h3>
              <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2 L4 7 V17 L12 22 L20 17 V7 Z" />
                <path d="M12 2 V22 M4 7 L20 17 M20 7 L4 17" />
              </svg>
              Operational Transformation
            </h3>
            <ul className="m-list">
              <li>AI-scored Business X-Ray Assessment across 6 operational pillars — a true baseline</li>
              <li>Documented Vision, Mission, and Core Values — clarity for the whole team</li>
              <li>3–5 year Strategic Plan with SMART goals tied to financial outcomes</li>
              <li>90-day execution plan with RACI accountability and assigned ownership</li>
              <li>Documented Standard Operating Procedures for core business functions</li>
              <li>Customer acquisition and retention systems built for their market</li>
              <li>Leadership development and data-driven decision-making skills</li>
              <li>Peer cohort accountability network of fellow growing businesses</li>
            </ul>
          </div>
          <div className="m-col fin">
            <h3>
              <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 17 L9 11 L13 15 L21 7" />
                <path d="M21 7 H15 M21 7 V13" />
              </svg>
              Financial Clarity
            </h3>
            <ul className="m-list">
              <li>Monthly KPI Dashboard: Net Profit, Revenue Growth %, Operating Cash Flow</li>
              <li>Cost Ratio optimization — stop leaving margin on the table</li>
              <li>Debt-to-Revenue Ratio visibility — understand leverage position</li>
              <li>Operating Cash Flow management — reduce credit dependency</li>
              <li>Before-and-after financial comparison at program completion</li>
              <li>Virtual COO monthly coaching on profit improvement and financial decisions</li>
              <li>Updated BXR Operational Health Score — documented improvement</li>
              <li>Graduation profile demonstrating investment and lending readiness</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
