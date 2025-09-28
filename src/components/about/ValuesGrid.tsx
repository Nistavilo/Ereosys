"use client";
import React from "react";
import { motion } from "framer-motion";
import { COMPANY_VALUES } from "./constants";

interface ValuesGridProps {
  inView: boolean;
  reduceMotion: boolean;
}

export function ValuesGrid({ inView, reduceMotion }: ValuesGridProps) {
  return (
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0, y: 30 }}
      animate={
        inView ? { opacity: 1, y: 0 } : reduceMotion ? undefined : { opacity: 0, y: 30 }
      }
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mb-20"
      aria-labelledby="core-principles-heading"
    >
      <h3
        id="core-principles-heading"
        className="text-3xl font-bold text-center mb-12 font-sans"
      >
        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Core Development Principles
        </span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {COMPANY_VALUES.map((value, index) => {
          const IconComponent = value.icon;
          return (
            <motion.div
              key={value.title}
              className="relative p-8 rounded-xl bg-slate-800/30 border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 group overflow-hidden"
              whileHover={!reduceMotion ? { scale: 1.02, y: -5 } : undefined}
              initial={reduceMotion ? undefined : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : undefined}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              {!reduceMotion && (
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-5 group-hover:opacity-10 transition-opacity`}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                  style={{ backgroundSize: "200% 200%" }}
                />
              )}
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`p-4 rounded-lg bg-gradient-to-r ${value.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all`}
                  >
                    <IconComponent className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-3 font-sans">
                      {value.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed font-sans text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}