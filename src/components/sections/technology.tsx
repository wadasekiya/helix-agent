const technologies = [
  "Autonomous Task System",
  "Structural Analysis",
  "Long-context Processing",
  "Runtime Optimization",
  "Intelligent Repair System",
  "Agent Architecture",
];

export function TechnologySection() {
  return (
    <section className="section">
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "64px",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                color: "#D4AF37",
                marginBottom: "20px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontSize: "0.8rem",
              }}
            >
              Technology
            </p>

            <h2
              className="section-title"
              style={{
                maxWidth: "620px",
              }}
            >
              Engineered
              <br />
              for Structured Intelligence.
            </h2>

            <p
              className="section-description"
              style={{
                marginTop: "28px",
              }}
            >
              Helix Agent is designed around scalable autonomous
              architectures capable of intelligent execution,
              contextual understanding, and structural optimization
              across complex development workflows.
            </p>
          </div>

          <div
            style={{
              position: "relative",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "18px",
              padding: "32px",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "1px",
                height: "80%",
                background:
                  "linear-gradient(to bottom, transparent, rgba(212,175,55,0.25), transparent)",
                transform: "translate(-50%, -50%)",
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >
              {technologies.map((item, index) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "999px",
                      background:
                        index === 0
                          ? "#F5D36A"
                          : "rgba(255,255,255,0.18)",
                      flexShrink: 0,
                    }}
                  />

                  <div
                    style={{
                      color:
                        index === 0
                          ? "#F5F5F5"
                          : "#A0A0A0",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}