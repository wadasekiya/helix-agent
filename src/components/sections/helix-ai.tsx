import { FeatureCard } from "@/components/ui/feature-card";

const features = [
  {
    title: "API Independent",
    description:
      "Designed for autonomous operation without conventional API dependency.",
  },
  {
    title: "Autonomous System",
    description:
      "Structured for intelligent execution and self-directed workflows.",
  },
  {
    title: "Long-context Capable",
    description:
      "Built to process large-scale contextual and structural information.",
  },
  {
    title: "Structural Understanding",
    description:
      "Focused on architecture-level reasoning and intelligent analysis.",
  },
  {
    title: "Intelligent Execution",
    description:
      "Designed to support adaptive execution pipelines and repair systems.",
  },
  {
    title: "Local-first Architecture",
    description:
      "Optimized for scalable local environments with high reliability.",
  },
];

export function HelixAISection() {
  return (
    <section className="section">
      <div className="container">
        <p
          style={{
            color: "#D4AF37",
            marginBottom: "20px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontSize: "0.8rem",
          }}
        >
          Helix AI
        </p>

        <h2
          className="section-title"
          style={{
            maxWidth: "760px",
          }}
        >
          Structured Intelligence
          <br />
          Built for Autonomous Systems.
        </h2>

        <p
          className="section-description"
          style={{
            marginTop: "28px",
          }}
        >
          Helix AI is designed as a scalable autonomous development
          environment focused on structural reasoning, intelligent execution,
          and high-reliability local-first operation.
        </p>

        <div
          style={{
            marginTop: "72px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "24px",
          }}
        >
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <FeatureCard
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}