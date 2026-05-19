"use client";

import { useEffect, useRef } from "react";

export function HelixBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    let t = 0;

    // ✔ カラフル＋エネルギー追加（赤・ピンク追加）
    const colors = [
      "rgba(212,175,55,0.55)", // gold
      "rgba(0,200,255,0.40)",  // cyan
      "rgba(180,80,255,0.40)", // purple
      "rgba(255,60,120,0.35)", // pink
      "rgba(255,30,60,0.30)",  // red
    ];

    // ✔ 擬似ノイズ（滑らかなランダム）
    const noise = (x: number) => {
      return (
        Math.sin(x * 1.7 + t * 0.6) * 0.5 +
        Math.sin(x * 3.1 + t * 0.3) * 0.3 +
        Math.sin(x * 0.7 + t * 1.2) * 0.2
      );
    };

    const drawHelix = (
      radius: number,
      speed: number,
      color: string,
      offset: number,
      intensity: number
    ) => {
      ctx.beginPath();

      const centerX = width / 2;
      const centerY = height / 2;

      for (let i = 0; i < 320; i++) {
        const n = noise(i * 0.08 + offset);

        const angle = i * 0.04 + t * speed + offset;

        const x =
          centerX +
          Math.cos(angle) * (radius + n * 60 * intensity);

        const y =
          centerY +
          (i - 160) * 2.8 +
          Math.sin(angle) * (radius * 0.25 + n * 30);

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.shadowBlur = 25;
      ctx.shadowColor = color;

      ctx.strokeStyle = color;
      ctx.lineWidth = 2.0;

      ctx.stroke();

      ctx.shadowBlur = 0;
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // 背景は黒固定（塗らない）

      // ✔ 既存ヘリックス
      drawHelix(120, 0.22, colors[0], 0, 1.0);
      drawHelix(190, 0.20, colors[1], 1.5, 1.2);
      drawHelix(270, 0.18, colors[2], 3.0, 1.4);

      // ✔ 赤・ピンクエネルギー層（重要）
      drawHelix(160, 0.28, colors[3], 0.8, 1.8);
      drawHelix(220, 0.26, colors[4], 2.2, 2.0);

      t += 0.01;
      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}