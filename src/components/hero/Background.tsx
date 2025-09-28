"use client";
import React, { useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FLOATING_ICONS, FLOATING_CHARS_COUNT, FLOATING_CHARS_SET } from "./constants";
import { FloatingChar } from "./types";

interface BackgroundProps {
  reduceMotion: boolean;
}

/**
 * Küçük deterministik PRNG.
 * Aynı seed => her render aynı dizi (SSR & Client eşlenir).
 */
function createPRNG(seed: number) {
  // mulberry32 benzeri
  let t = seed >>> 0;
  return () => {
    t += 0x6D2B79F5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Sabit seed seçimi:
 * - Statik olsun istersen hep aynı görünüm üretir.
 * - Dinamik olsun (her deploy’da değişsin) dersen seed’i env’den alabilirsin:
 *   const SEED = parseInt(process.env.NEXT_PUBLIC_BG_SEED ?? "2025", 10);
 */
const SEED = 2025;

export function Background({ reduceMotion }: BackgroundProps) {
  const { scrollY } = useScroll();

  const orb1Y = useTransform(scrollY, [0, 500], [0, 100]);
  const orb2Y = useTransform(scrollY, [0, 500], [0, -75]);
  const orb3Y = useTransform(scrollY, [0, 400], [0, 50]);

  // Deterministik dataPoints üretimi
  const dataPoints: FloatingChar[] = useMemo(() => {
    const rng = createPRNG(SEED);
    return Array.from({ length: FLOATING_CHARS_COUNT }).map(() => ({
      left: rng() * 100,
      duration: rng() * 8 + 10,
      delay: rng() * 5,
      char: FLOATING_CHARS_SET[Math.floor(rng() * FLOATING_CHARS_SET.length)]
    }));
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
      // (İstersen mismatch riskli parçalar için: suppressHydrationWarning)
    >
      {/* Grid */}
      <div className="absolute inset-0 opacity-12">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.2) 0%, transparent 40%),
              radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 45%),
              radial-gradient(circle at 60% 10%, rgba(6, 182, 212, 0.1) 0%, transparent 35%),
              linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "400px 400px, 500px 500px, 300px 300px, 92px 92px, 92px 92px",
            animation: reduceMotion ? undefined : "grid-flow 35s linear infinite"
          }}
        />
      </div>

      {/* Floating Data */}
      <div className="absolute inset-0 opacity-8">
        {dataPoints.map((p, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-xs font-bold text-cyan-400"
            style={{ left: `${p.left}%` }}
            animate={
              reduceMotion
                ? undefined
                : {
                    y: ["-50px", "calc(100vh + 50px)"],
                    opacity: [0, 0.6, 0.3, 0]
                  }
            }
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear"
            }}
          >
            {p.char}
          </motion.div>
        ))}
      </div>

      {/* Orbs */}
      <motion.div
        style={{ y: orb1Y }}
        className="absolute top-20 left-10 w-[440px] h-[440px] bg-gradient-to-r from-blue-500/25 to-purple-500/25 rounded-full blur-3xl"
        animate={
          reduceMotion
            ? undefined
            : { scale: [1, 1.3, 1], opacity: [0.25, 0.5, 0.25], rotate: [0, 180, 360] }
        }
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ y: orb2Y }}
        className="absolute bottom-20 right-10 w-[440px] h-[440px] bg-gradient-to-l from-purple-500/25 to-pink-500/25 rounded-full blur-3xl"
        animate={
          reduceMotion
            ? undefined
            : { scale: [1, 0.8, 1.2, 1], opacity: [0.25, 0.6, 0.25], rotate: [360, 180, 0] }
        }
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ y: orb3Y }}
        className="absolute top-1/2 left-1/3 w-[320px] h-[320px] bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl"
        animate={
          reduceMotion
            ? undefined
            : { scale: [1, 1.4, 1], x: [-50, 50, -50], opacity: [0.2, 0.4, 0.2] }
        }
        transition={{ duration: 18, repeat: Infinity }}
      />

      {/* Floating Icons */}
      {FLOATING_ICONS.map((Icon, i) => (
        <motion.div
          key={i}
          className="absolute opacity-10"
          style={{ left: `${8 + i * 14}%`, top: `${15 + (i % 4) * 18}%` }}
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [-25, -65, -25],
                  x: [-12, 12, -12],
                  rotate: [0, 360, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.08, 0.15, 0.08]
                }
          }
          transition={{ duration: 12 + i * 1.5, repeat: Infinity, delay: i * 1.2 }}
        >
          <Icon className="h-14 w-14 text-blue-400" />
        </motion.div>
      ))}

      {/* Data Flow Lines */}
      <motion.div
        className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
        animate={
          reduceMotion ? undefined : { scaleX: [0, 1, 0], opacity: [0, 0.6, 0] }
        }
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
        animate={
          reduceMotion ? undefined : { scaleX: [0, 1, 0], opacity: [0, 0.6, 0] }
        }
        transition={{ duration: 4, repeat: Infinity, delay: 3 }}
      />

      <style jsx>{`
        @keyframes grid-flow {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(100px, 100px) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}