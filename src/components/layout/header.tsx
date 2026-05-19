"use client";

import { HelixLogo } from "@/components/ui/helix-logo";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Helix AI", href: "#helix-ai" },
  { label: "Technology", href: "#technology" },
  { label: "Download", href: "#download" },
  { label: "Vision", href: "#vision" },
  { label: "Support", href: "#donate" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 100,
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        backdropFilter: "blur(14px)",
        background: "rgba(5,5,5,0.72)",
      }}
    >
      <div
        className="container"
        style={{
          height: "76px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <HelixLogo />

          <span
            style={{
              fontSize: "1rem",
              color: "#F5F5F5",
              letterSpacing: "-0.03em",
            }}
          >
            Helix Agent
          </span>
        </Link>

        {/* NAV */}
        <nav
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="mobile-menu-button"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.02)",
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            cursor: "pointer",
          }}
        >
          <Menu size={18} />
        </button>
      </div>
    </motion.header>
  );
}