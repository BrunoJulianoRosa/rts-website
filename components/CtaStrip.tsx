interface CtaStripProps {
  text: string;
  label: string;
}

export default function CtaStrip({ text, label }: CtaStripProps) {
  return (
    <div className="cta-strip">
      <p>{text}</p>
      <a href="https://calendly.com/roadmaptosuccess" className="btn btn-gold">
        {label} →
      </a>
    </div>
  );
}
