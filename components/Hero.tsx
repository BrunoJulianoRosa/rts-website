export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-radial" />
      <div className="hero-grid" />
      <div className="hero-mtn">
        <svg viewBox="0 0 1440 360" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="mtnA" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3070b6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#003455" stopOpacity="0.85" />
            </linearGradient>
            <linearGradient id="mtnB" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a4f8a" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#002235" stopOpacity="0.95" />
            </linearGradient>
          </defs>
          <path
            d="M0 360 L0 220 L100 150 L210 200 L320 90 L450 140 L580 70 L700 120 L820 50 L950 100 L1070 50 L1180 95 L1290 135 L1380 175 L1440 215 L1440 360 Z"
            fill="url(#mtnA)"
          />
          <path
            d="M0 360 L0 260 L80 220 L190 250 L280 180 L380 220 L480 140 L590 190 L700 110 L800 160 L900 100 L1000 145 L1100 175 L1200 135 L1300 200 L1400 240 L1440 270 L1440 360 Z"
            fill="url(#mtnB)"
          />
          {/* summit glow */}
          <circle cx="700" cy="108" r="28" fill="#d1b223" opacity="0.18" />
          <circle cx="700" cy="108" r="11" fill="#d1b223" opacity="0.55" />
          {/* trail dots */}
          <circle cx="488" cy="142" r="2.6" fill="#d1b223" opacity="0.7" />
          <circle cx="540" cy="128" r="2.4" fill="#d1b223" opacity="0.65" />
          <circle cx="595" cy="118" r="2.6" fill="#d1b223" opacity="0.7" />
          <circle cx="650" cy="112" r="2.4" fill="#d1b223" opacity="0.65" />
          {/* sherpa figure */}
          <circle cx="700" cy="100" r="4.5" fill="#fff" opacity="0.95" />
          <path
            d="M700 105 L697 117 M700 105 L703 117 M700 108 L695 113 M700 108 L705 113"
            stroke="#fff"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.85"
          />
          {/* basecamp labels */}
          <g fontFamily="Poppins, sans-serif" fontSize="9" fontWeight="600">
            <rect x="445" y="156" width="46" height="16" rx="3" fill="#003455" stroke="#3070b6" strokeWidth="1" opacity="0.92" />
            <text x="468" y="167" textAnchor="middle" fill="#fff" opacity="0.95">BC1</text>
            <rect x="525" y="142" width="46" height="16" rx="3" fill="#003455" stroke="#3070b6" strokeWidth="1" opacity="0.92" />
            <text x="548" y="153" textAnchor="middle" fill="#fff" opacity="0.95">BC2</text>
            <rect x="630" y="125" width="46" height="16" rx="3" fill="#003455" stroke="#3070b6" strokeWidth="1" opacity="0.92" />
            <text x="653" y="136" textAnchor="middle" fill="#fff" opacity="0.95">BC3</text>
            <rect x="725" y="115" width="62" height="16" rx="3" fill="#d1b223" opacity="0.95" />
            <text x="756" y="126" textAnchor="middle" fill="#003455" fontWeight="700">SUMMIT</text>
          </g>
        </svg>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="dot" />
          <span className="label" style={{ color: "var(--brand-accent)" }}>
            Guiding Business Journeys
          </span>
        </div>
        <h1>
          Your members are ready
          <br />
          to <span className="display accent">climb.</span>
          <br />
          Give them a{" "}
          <span className="display" style={{ color: "var(--brand-primary-soft)" }}>
            sherpa.
          </span>
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
