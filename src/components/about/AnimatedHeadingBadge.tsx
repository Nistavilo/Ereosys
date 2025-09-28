"use client";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { BADGE_ICON } from "./constants";

interface AnimatedHeadingBadgeProps {
  reduceMotion: boolean;
}

export function AnimatedHeadingBadge({ reduceMotion }: AnimatedHeadingBadgeProps) {
  const Icon = BADGE_ICON;
  return (
    <motion.div
      animate={
        reduceMotion
          ? undefined
          : {
              boxShadow: [
                "0 0 30px rgba(59,130,246,0.3)",
                "0 0 40px rgba(139,92,246,0.4)",
                "0 0 30px rgba(59,130,246,0.3)"
              ]
            }
      }
      transition={{ duration: 4, repeat: Infinity }}
    >
      <Badge
        variant="secondary"
        className="mb-6 bg-gradient-to-r from-blue-900/60 to-purple-900/60 text-blue-300 border-blue-500/30 text-sm backdrop-blur-sm font-sans"
      >
        <Icon className="mr-2 h-4 w-4" aria-hidden="true" />
        SaaS Product Company • Since 2018
      </Badge>
    </motion.div>
  );
}