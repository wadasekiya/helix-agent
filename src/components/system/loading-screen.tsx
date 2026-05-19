"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "fixed",
            inset: 0,
            background: "#050505",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 14,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "18px",
              textAlign: "center",
            }}
          >
            {/* 金ライン */}
            <div
              style={{
                width: "120px",
                height: "1px",
                background:
                  "linear-gradient(to right, transparent, #D4AF37, transparent)",
              }}
            />

            {/* メインロゴテキスト（ここが重要修正） */}
            <div
              style={{
                color: "#F5F5F5",
                letterSpacing: "-0.04em",
                fontSize: "2.2rem",
                fontWeight: 500,
              }}
            >
              Helix Agent
            </div>

            {/* サブテキスト */}
            <div
              style={{
                color: "#666",
                fontSize: "0.85rem",
                letterSpacing: "0.12em",
              }}
            >
              Autonomous Intelligence System
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}