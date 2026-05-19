export function ContactSection() {
  return (
    <section
      className="section"
      style={{
        paddingBottom: "120px",
      }}
    >
      <div className="container">
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "64px",
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
            Contact
          </p>

          <h2
            className="section-title"
            style={{
              marginBottom: "28px",
            }}
          >
            Connect with Helix.
          </h2>

          <p className="section-description">
            Contact channels and future communication infrastructure
            for the Helix autonomous development environment.
          </p>

          <div
            style={{
              marginTop: "48px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <a
              href="mailto:eita00eizo@gmail.com"
              style={{
                color: "#F5F5F5",
                width: "fit-content",
              }}
            >
              eita00eizo@gmail.com
            </a>

            <a
              href="https://github.com"
              target="_blank"
              style={{
                color: "#A0A0A0",
                width: "fit-content",
              }}
            >
              GitHub
            </a>

            <a
              href="https://x.com"
              target="_blank"
              style={{
                color: "#A0A0A0",
                width: "fit-content",
              }}
            >
              X / Twitter
            </a>
          </div>

          <div
            style={{
              marginTop: "72px",
              padding: "32px",
              borderRadius: "18px",
              border: "1px dashed rgba(255,255,255,0.12)",
              color: "#666",
            }}
          >
            Future contact form area.
          </div>
        </div>
      </div>
    </section>
  );
}