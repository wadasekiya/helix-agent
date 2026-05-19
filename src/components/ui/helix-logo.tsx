"use client";

import { motion } from "framer-motion";

export function HelixLogo() {
  return (
    <motion.svg
      width="34"
      height="34"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: [
          "drop-shadow(0 0 0px rgba(212,175,55,0))",
          "drop-shadow(0 0 10px rgba(212,175,55,0.35))",
          "drop-shadow(0 0 0px rgba(212,175,55,0))",
        ],
      }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
      }}
    >
      {/* 外枠 */}
      <rect
        x="1"
        y="1"
        width="62"
        height="62"
        rx="18"
        stroke="rgba(212,175,55,0.25)"
        strokeWidth="1.2"
      />

      {/* メインライン */}
      <path
        d="M20 44L32 18L44 44"
        stroke="#D4AF37"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 横ライン */}
      <path
        d="M25 35H39"
        stroke="#F5D36A"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* 中央点 */}
      <motion.circle
        cx="32"
        cy="32"
        r="2"
        fill="#F5D36A"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      />
    </motion.svg>
  );
}