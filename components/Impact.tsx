export default function Impact() {
  const stats = [
    { num: "$300K–$30M", label: "Target Member Revenue" },
    { num: "12 mo.", label: "Guided Program Duration" },
    { num: "4", label: "Structured Basecamps" },
    { num: "6", label: "Operational Pillars" },
    { num: "36", label: "BXR Diagnostic Questions" },
    { num: "7+", label: "Financial KPIs Tracked" },
    { num: "90 days", label: "Tactical Execution Cycle" },
    { num: "Before & After", label: "Documented Outcomes" },
  ];

  return (
    <section className="impact">
      <div className="inner impact-inner reveal">
        <span className="eyebrow on-dark" style={{ display: "flex", justifyContent: "center" }}>
          By the numbers
        </span>
        <h2 className="section-h on-dark">
          The numbers behind the <span className="accent">journey.</span>
        </h2>
        <div className="impact-grid">
          {stats.map((s) => (
            <div className="i-stat" key={s.label}>
              <div className="i-num">{s.num}</div>
              <div className="i-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
