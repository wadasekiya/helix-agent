"use client";

import { useState } from "react";

export default function DonatePage() {
  const [loading, setLoading] = useState(false);

  const handleDonate = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/donate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 1000,
        }),
      });

      const data = await res.json();

      if (data?.url) {
        window.location.href = data.url;
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Support / Donate</h1>

      <p>
        このプロジェクトの継続開発を支援するための寄付ページです。
      </p>

      <button onClick={handleDonate} disabled={loading}>
        {loading ? "処理中..." : "1000円を寄付する"}
      </button>
    </div>
  );
}