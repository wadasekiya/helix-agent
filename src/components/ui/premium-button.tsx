"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  primary?: boolean;
};

export function PremiumButton({
  children,
  primary = false,
}: Props) {
  return (
    <motion.button
      whileHover={{
        y: -2,
      }}
      whileTap={{
        scale: 0.99,
      }}
      transition={{
        duration: 0.2,
      }}
      style={{
        height: "52px",
        paddingInline: "22px",
        borderRadius: "12px",
        border: primary
          ? "1px solid rgba(212,175,55,0.4)"
          : "1px solid rgba(255,255,255,0.08)",
        background: primary
          ? "rgba(212,175,55,0.08)"
          : "rgba(255,255,255,0.02)",
        color: primary ? "#F5D36A" : "#F5F5F5",
        fontSize: "0.95rem",
        fontWeight: 500,
        letterSpacing: "-0.02em",
        cursor: "pointer",
        transition: "0.25s ease",
        backdropFilter: "blur(12px)",
      }}
    >
      {children}
    </motion.button>
  );
}