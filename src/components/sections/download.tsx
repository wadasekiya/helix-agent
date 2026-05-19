import { downloadConfig } from "@/config/download";
import { PremiumButton } from "@/components/ui/premium-button";

export function DownloadSection() {
  return (
    <section className="section">
      <div className="container">
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.02)",
            padding: "64px",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at top right, rgba(212,175,55,0.08), transparent 40%)",
              pointerEvents: "none",
            }}
          />

          <p
            style={{
              color: "#D4AF37",
              marginBottom: "20px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontSize: "0.8rem",
            }}
          >
            Download
          </p>

          <h2
            className="section-title"
            style={{
              maxWidth: "760px",
            }}
          >
            Access the Autonomous
            <br />
            Development Environment.
          </h2>

          <p
            className="section-description"
            style={{
              marginTop: "28px",
              maxWidth: "760px",
            }}
          >
            Helix Agent is an autonomous AI development environment
            designed for intelligent execution, structural analysis,
            and scalable local-first operation. Built to support
            high-performance workflows and autonomous task systems.
          </p>

          <div
            style={{
              marginTop: "40px",
              display: "flex",
              gap: "20px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href={downloadConfig.file}
              download
            >
              <PremiumButton primary>
                Download ZIP
              </PremiumButton>
            </a>

            <span
              style={{
                color: "#A0A0A0",
                fontSize: "0.95rem",
              }}
            >
              Version {downloadConfig.version}
            </span>
          </div>

          <div
            style={{
              marginTop: "48px",
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            {["Windows", "Mac", "Linux"].map((os) => (
              <div
                key={os}
                style={{
                  height: "38px",
                  paddingInline: "16px",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  color: "#A0A0A0",
                  fontSize: "0.85rem",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                {os}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}