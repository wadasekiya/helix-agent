"use client";

import { HelixBackground } from "@/components/background/helix-background";
import { DonateSection } from "@/components/sections/donate-section";
import { Footer } from "@/components/layout/footer";
import { ContactSection } from "@/components/sections/contact";
import { DownloadSection } from "@/components/sections/download";
import { HelixAISection } from "@/components/sections/helix-ai";
import { TechnologySection } from "@/components/sections/technology";
import { VisionSection } from "@/components/sections/vision";
import { Header } from "@/components/layout/header";
import { LoadingScreen } from "@/components/system/loading-screen";
import { PremiumButton } from "@/components/ui/premium-button";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ✔ 背景は最背面 */}
      <HelixBackground />

      <LoadingScreen />

      <Header />

      <div className="subtle-grid" />
      <div className="noise-overlay" />

      {/* HOME */}
      <section id="home" className="section">
        <div className="container">
          <p
            style={{
              color: "#D4AF37",
              marginBottom: "24px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontSize: "0.8rem",
            }}
          >
            Autonomous Agent Environment
          </p>

          <h1
            className="section-title"
            style={{ maxWidth: "900px" }}
          >
            Autonomous Intelligence,
            <br />
            Engineered Without Limits.
          </h1>

          <p
            className="section-description"
            style={{ marginTop: "32px" }}
          >
            Helix Agent is a next-generation autonomous AI development system
            designed for intelligent project execution, structural analysis,
            and scalable local-first operation.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "40px",
              flexWrap: "wrap",
            }}
          >
            <PremiumButton primary>
              Explore Helix AI
            </PremiumButton>

            <PremiumButton>
              Download
            </PremiumButton>
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <div id="helix-ai">
        <HelixAISection />
      </div>

      <div id="technology">
        <TechnologySection />
      </div>

      <div id="download">
        <DownloadSection />
      </div>

      <div id="vision">
        <VisionSection />
      </div>

      <div id="donate">
        <DonateSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}