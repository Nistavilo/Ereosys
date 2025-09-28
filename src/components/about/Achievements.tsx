"use client";
import React from "react";
import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "./constants";

interface AchievementsProps {
  inView: boolean;
  reduceMotion: boolean;
}

export function Achievements({ inView, reduceMotion }: AchievementsProps) {
  return (
    <motion.div
      className="mb-20"
      initial={reduceMotion ? undefined : { opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.8, delay: 0.4 }}
      aria-labelledby="achievements-heading"
    >
      <h3
        id="achievements-heading"
        className="text-3xl font-bold text-center mb-10 font-sans bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
      >
        Platform Achievements
      </h3>

      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
        role="list"
        aria-label="Key company metrics"
      >
        {ACHIEVEMENTS.map((a, i) => {
          const Icon = a.icon;
          return (
            <motion.div
              key={a.label}
              whileHover={!reduceMotion ? { scale: 1.05, y: -4 } : undefined}
              className="relative group rounded-xl border border-slate-700/40 bg-slate-900/60 backdrop-blur-xl p-5 overflow-hidden"
            >
              {!reduceMotion && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              )}
              <div className="relative z-10 flex flex-col items-center text-center">
                <Icon className={`h-7 w-7 mb-3 ${a.color}`} aria-hidden="true" />
                <div className={`text-2xl font-extrabold ${a.color} font-mono`}>
                  {a.number}
                </div>
                <div className="text-xs uppercase tracking-wide text-gray-400 mt-1 font-sans">
                  {a.label}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}