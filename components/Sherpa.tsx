import Image from "next/image";

export default function Sherpa() {
  return (
    <section className="sherpa">
      <div className="inner sherpa-inner reveal">
        <div className="sherpa-text">
          <span className="eyebrow on-dark">The Metaphor</span>
          <h2 className="section-h on-dark">
            Every business needs a <span className="accent">guide</span> for the climb.
          </h2>
          <p>
            In the Himalayas, even the most capable climbers hire a Sherpa. Someone who knows the
            mountain, reads the conditions, carries the gear, and guides the team safely to the
            summit — and back. The Sherpa doesn&apos;t do the climbing for you. They prepare you,
            equip you, and walk beside you at every stage of the journey.
          </p>
          <p>
            That&apos;s Roadmap to Success for your members. The mountain is real: strategy,
            operations, cash flow, team management, customer growth. The journey is organized into
            four structured Basecamps. The AI Sherpa and Virtual COO are there at every step. And
            your organization receives the documented proof that your members reached the summit.
          </p>
        </div>
        <div className="sherpa-visual">
          <div className="sherpa-ring" />
          <div className="sherpa-ring r2" />
          <div className="sherpa-ring r3" />
          <div className="sherpa-icon">
            <Image src="/assets/icon.jpg" alt="RTS mountain icon" width={200} height={200} />
          </div>
          <div className="sherpa-caption">Guiding Business Journeys</div>
        </div>
      </div>
    </section>
  );
}
