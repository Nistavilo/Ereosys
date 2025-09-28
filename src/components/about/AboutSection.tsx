"use client";
import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { AnimatedHeadingBadge } from "./AnimatedHeadingBadge";
import { MissionVisionCards } from "./MissionVisionCards";
import { ValuesGrid } from "./ValuesGrid";
import { Achievements } from "./Achievements";
import { Background } from "./Background";

export function AboutSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-label="About Ereosys section"
      className="py-24 px-4 bg-gradient-to-br from-slate-950 via-blue-950/10 to-slate-950 relative overflow-hidden"
    >
      <Background reduceMotion={reduceMotion} />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={reduceMotion ? undefined : { opacity: 0, y: 50 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : reduceMotion
              ? undefined
              : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.8 }}
        >
          <AnimatedHeadingBadge reduceMotion={reduceMotion} />

          <h2 className="text-5xl md:text-7xl font-bold mb-6 font-sans">
            <motion.span
              className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
              animate={
                reduceMotion
                  ? undefined
                  : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }
              }
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "300% 300%" }}
            >
              About EREOSYS
            </motion.span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-sans">
            <span className="text-blue-400 text-2xl" aria-hidden="true">
              &gt;
            </span>{" "}
            We build{" "}
            <span className="text-purple-400 font-bold">enterprise-grade SaaS products</span>{" "}
            that power <span className="text-cyan-400 font-bold">15,000+ users</span> worldwide
            with <span className="text-emerald-400 font-bold">innovative solutions</span> for
            modern business challenges.
          </p>
        </motion.div>

        <MissionVisionCards inView={isInView} reduceMotion={reduceMotion} />
        <Achievements inView={isInView} reduceMotion={reduceMotion} />
        <ValuesGrid inView={isInView} reduceMotion={reduceMotion} />
      </div>
    </section>
  );
}