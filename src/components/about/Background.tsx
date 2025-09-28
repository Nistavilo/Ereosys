"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { FLOATING_BASE_ICONS, FLOATING_ICONS_SEED } from "./constants";
import { createPRNG } from "./prng";
import { FloatingIconConfig } from "./types";

interface BackgroundProps {
  reduceMotion: boolean;
}

export function Background({ reduceMotion }: BackgroundProps) {
  // Deterministik icon konum/anim parametreleri
  const iconConfigs: FloatingIconConfig[] = useMemo(() => {
    const rng = createPRNG(FLOATING_ICONS_SEED);
    return FLOATING_BASE_ICONS.map((Icon, i) => ({
      Icon,
      left: 10 + i * 20 + rng() * 5, // hafif varyasyon
      top: 20 + (i % 3) * 25 + rng() * 4,
      delay: i * 2,
      duration: 15 + i * 2
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 opacity-8">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 40%),
              radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.12) 0%, transparent 45%),
              radial-gradient(circle at 60% 10%, rgba(6, 182, 212, 0.1) 0%, transparent 35%)
            `
          }}
        />
      </div>

      {/* Floating product elements */}
      {iconConfigs.map(({ Icon, left, top, delay, duration }, i) => (
        <motion.div
          key={i}
            className="absolute opacity-5"
            style={{ left: `${left}%`, top: `${top}%` }}
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [-20, -40, -20],
                    x: [-10, 10, -10],
                    rotate: [0, 180, 360],
                    opacity: [0.05, 0.1, 0.05]
                  }
            }
            transition={{
              duration,
              repeat: Infinity,
              delay
            }}
        >
          <Icon className="h-16 w-16 text-blue-400" />
        </motion.div>
      ))}
    </div>
  );
}