"use client";

import { useState } from "react";

export function DonateSection() {
  const [loading, setLoading] = useState(false);

  const handleDonate = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="donate"
      style={{
        padding: "140px 0",
        background: "linear-gradient(to bottom, #050505, #0b0b0b)",
        textAlign: "center",
      }}
    >
      <div className="container">
        <p
          style={{
            color: "#D4AF37",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontSize: "0.8rem",
            marginBottom: "16px",
          }}
        >
          Support the System
        </p>

        <h2
          style={{
            fontSize: "2.4rem",
            color: "#F5F5F5",
            marginBottom: "20px",
            letterSpacing: "-0.03em",
          }}
        >
          Back the future of autonomous intelligence
        </h2>

        <p
          style={{
            color: "#A0A0A0",
            maxWidth: "720px",
            margin: "0 auto 40px",
            lineHeight: "1.7",
          }}
        >
          Helix Agent is built as an open intelligent infrastructure.
          Contributions support development, scaling, and autonomous system research.
        </p>

        {/* BUTTON */}
        <button
          onClick={handleDonate}
          disabled={loading}
          className="donate-btn"
          style={{
            opacity: loading ? 0.6 : 1,
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Redirecting..." : "Support / Donate"}
        </button>
      </div>
    </section>
  );
}