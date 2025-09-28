"use client";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Rocket } from "lucide-react";

interface AnimatedBadgeProps {
  reduceMotion: boolean;
}

export function AnimatedBadge({ reduceMotion }: AnimatedBadgeProps) {
  return (
    <motion.div
      animate={
        reduceMotion
          ? undefined
          : {
              boxShadow: [
                "0 0 20px rgba(59, 130, 246, 0.4)",
                "0 0 35px rgba(139, 92, 246, 0.5)",
                "0 0 20px rgba(59, 130, 246, 0.4)"
              ]
            }
      }
      transition={{ duration: 4, repeat: Infinity }}
      className="inline-block mb-6"
    >
      <Badge
        variant="secondary"
        className="bg-gradient-to-r from-blue-900/70 to-purple-900/70 text-blue-300 border border-blue-500/50 font-mono text-sm backdrop-blur-xl px-5 py-2 shadow-xl"
        aria-label="SaaS product company badge"
      >
        <motion.div
          animate={reduceMotion ? undefined : { rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <Rocket className="mr-2 h-4 w-4" aria-hidden="true" />
        </motion.div>
        SAAS PRODUCT COMPANY
      </Badge>
    </motion.div>
  );
}