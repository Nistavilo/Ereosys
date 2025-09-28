"use client";
import React from "react";
import { motion } from "framer-motion";
import { STATS } from "./constants";
import { StatItem } from "./types";

interface StatCardProps {
  stat: StatItem;
  index: number;
  reduceMotion: boolean;
}

const StatCard = React.memo(function StatCard({ stat, index, reduceMotion }: StatCardProps) {
  const IconComponent = stat.icon;
  return (
    <motion.div
      className="text-center relative group"
      whileHover={!reduceMotion ? { scale: 1.08, y: -6 } : undefined}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-xl blur-xl group-hover:blur-lg"
        animate={
          reduceMotion
            ? undefined
            : { scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }
        }
        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
      />
      <div className="relative z-10 p-4 bg-slate-900/60 backdrop-blur-xl rounded-xl border border-gray-700/50 group-hover:border-blue-500/50 transition-colors">
        <IconComponent className={`h-6 w-6 mx-auto mb-2 ${stat.color}`} aria-hidden="true" />
        <motion.div
          className={`text-3xl font-bold ${stat.color} mb-1 font-mono`}
          animate={
            reduceMotion
              ? undefined
              : {
                  textShadow: [
                    "0 0 10px currentColor",
                    "0 0 20px currentColor",
                    "0 0 10px currentColor"
                  ]
                }
          }
          transition={{ duration: 3, repeat: Infinity, delay: index * 0.7 }}
          aria-label={stat.label.toLowerCase()}
        >
          {stat.value}
        </motion.div>
        <div className="text-sm text-gray-400 font-mono">{stat.label}</div>
      </div>
    </motion.div>
  );
});

interface StatsGridProps {
  reduceMotion: boolean;
}

export function StatsGrid({ reduceMotion }: StatsGridProps) {
  return (
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="grid grid-cols-3 gap-6"
      role="list"
      aria-label="Company statistics"
    >
      {STATS.map((stat, idx) => (
        <StatCard key={stat.label} stat={stat} index={idx} reduceMotion={reduceMotion} />
      ))}
    </motion.div>
  );
}