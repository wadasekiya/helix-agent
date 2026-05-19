export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        paddingBlock: "32px",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "24px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              color: "#F5F5F5",
              fontSize: "0.95rem",
              letterSpacing: "-0.03em",
            }}
          >
            Helix Agent
          </div>

          <div
            style={{
              marginTop: "8px",
              color: "#666",
              fontSize: "0.85rem",
            }}
          >
            Autonomous Intelligence Infrastructure
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            color: "#888",
            fontSize: "0.85rem",
          }}
        >
          <span>Docs</span>
          <span>API</span>
          <span>Dashboard</span>
          <span>Update Logs</span>
        </div>

        <div
          style={{
            color: "#666",
            fontSize: "0.85rem",
          }}
        >
          © 2026 Helix Agent
        </div>
      </div>
    </footer>
  );
}