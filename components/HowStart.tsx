const steps = [
  {
    n: "1",
    title: "Discovery Session",
    body: "A 60-minute working session with your leadership team. We walk through the platform, review the cohort model, discuss your member demographics, and identify potential bank co-sponsors in your market. No obligation, just clarity.",
  },
  {
    n: "2",
    title: "Cohort Design",
    body: "We design the inaugural cohort together — industry focus, cohort size (typically 10–20 businesses), revenue stage targeting, and program calendar. We identify the right bank sponsor and structure the three-way partnership.",
  },
  {
    n: "3",
    title: "Member Outreach",
    body: "You announce the program through your existing channels. We provide co-branded marketing materials, talking points, and application support. Members self-select based on growth readiness.",
  },
  {
    n: "4",
    title: "Cohort Launch",
    body: "All enrolled businesses complete their Business X-Ray Assessment. Your organization receives the cohort aggregate health report. Individual member journeys begin. You receive quarterly progress updates throughout.",
  },
  {
    n: "5",
    title: "Graduation & Impact Report",
    body: "Every business completes their before-and-after performance report. Your organization receives the full community impact document — the evidence base for your economic development story, sponsor reporting, and Cohort 2 launch.",
  },
];

export default function HowStart() {
  return (
    <section className="howstart" id="howstart">
      <div className="inner reveal">
        <span className="eyebrow">Getting Started</span>
        <h2 className="section-h">
          From discovery to <span className="accent">first cohort launch.</span>
        </h2>
        <p className="lede">
          The path from first conversation to a fully launched member cohort is shorter than you
          think. Here&apos;s how we build it together.
        </p>
        <div className="start-timeline">
          {steps.map((s) => (
            <div className="s-step" key={s.n}>
              <div className="s-circle">{s.n}</div>
              <div className="s-body">
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
