export default function SuccessPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#050505",
        color: "#F5F5F5",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <div>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
          Payment Successful
        </h1>

        <p style={{ color: "#A0A0A0", marginBottom: "40px" }}>
          Thank you for supporting Helix Agent.
        </p>

        <a
          href="/"
          style={{
            padding: "12px 24px",
            border: "1px solid #D4AF37",
            color: "#F5D36A",
            borderRadius: "10px",
            textDecoration: "none",
          }}
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}