export function VisionSection() {
  return (
    <section className="section">
      <div className="container">
        <div
          style={{
            maxWidth: "980px",
          }}
        >
          <p
            style={{
              color: "#D4AF37",
              marginBottom: "20px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontSize: "0.8rem",
            }}
          >
            Vision
          </p>

          <h2
            className="section-title"
            style={{
              lineHeight: 1.1,
            }}
          >
            Intelligent Systems
            <br />
            Designed Beyond Conventional Interfaces.
          </h2>

          <p
            className="section-description"
            style={{
              marginTop: "36px",
              maxWidth: "760px",
            }}
          >
            Helix Agent is built around the concept of autonomous
            intelligence operating within structured development
            environments. Rather than functioning as a conventional
            AI tool, Helix is designed as an adaptive infrastructure
            for intelligent execution, scalable reasoning,
            and future autonomous systems.
          </p>

          <div
            style={{
              marginTop: "72px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: "24px",
            }}
          >
            {[
              "Autonomous Systems",
              "Intelligent Execution",
              "Structured Reasoning",
              "High Reliability",
            ].map((item) => (
              <div
                key={item}
                style={{
                  padding: "28px",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "1px",
                    background: "#D4AF37",
                    marginBottom: "18px",
                  }}
                />

                <div
                  style={{
                    fontSize: "1rem",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}