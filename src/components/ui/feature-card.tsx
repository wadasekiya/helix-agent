"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
};

export function FeatureCard({
  title,
  description,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -3,
      }}
      transition={{
        duration: 0.2,
      }}
      style={{
        position: "relative",
        padding: "32px",
        borderRadius: "14px",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.02)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "14px",
          border: "1px solid rgba(212,175,55,0)",
          transition: "0.25s ease",
          pointerEvents: "none",
        }}
        className="feature-card-border"
      />

      <h3
        style={{
          margin: 0,
          fontSize: "1.1rem",
          letterSpacing: "-0.03em",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          marginTop: "16px",
          color: "#A0A0A0",
          lineHeight: 1.8,
          fontSize: "0.95rem",
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}