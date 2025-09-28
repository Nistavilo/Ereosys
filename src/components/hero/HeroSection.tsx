"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail, Rocket } from "lucide-react";
import { Button } from "../ui/button";
import { AnimatedBadge } from "./AnimatedBadge";
import { StatsGrid } from "./Stats";
import { CodeTerminal } from "./CodeTerminal";
import { Background } from "./Background";

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden py-24 px-6 min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950"
      aria-label="Ereosys Hero Bölümü"
    >
      <Background reduceMotion={reduceMotion} />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
            <div className="space-y-8">
              <motion.div
                initial={reduceMotion ? undefined : { opacity: 0, y: 50 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <AnimatedBadge reduceMotion={reduceMotion} />
                <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight font-mono">
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
                    EREOSYS
                  </motion.span>
                </h1>
                <div className="space-y-3">
                  <p className="text-xl text-gray-300 leading-relaxed max-w-lg font-mono">
                    <span className="text-blue-400 text-3xl" aria-hidden="true">
                      &gt;
                    </span>{" "}
                    Building next-generation{" "}
                    <span className="text-purple-400 font-bold bg-purple-400/10 px-2 py-1 rounded">
                      SaaS products
                    </span>{" "}
                    that power modern businesses worldwide.
                  </p>
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={reduceMotion ? undefined : { opacity: 0, y: 30 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div
                  whileHover={!reduceMotion ? { scale: 1.05, y: -3 } : undefined}
                  whileTap={!reduceMotion ? { scale: 0.95 } : undefined}
                  className="relative group"
                >
                  {!reduceMotion && (
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-lg blur-lg opacity-60 group-hover:opacity-100"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        scale: [1, 1.02, 1]
                      }}
                      style={{ backgroundSize: "200% 200%" }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  )}
                  <Button
                    size="lg"
                    className="relative text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-mono shadow-2xl"
                    aria-label="Try our products"
                  >
                    <Rocket className="mr-2 h-5 w-5" aria-hidden="true" />
                    TRY OUR PRODUCTS
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={!reduceMotion ? { scale: 1.05, y: -3 } : undefined}
                  whileTap={!reduceMotion ? { scale: 0.95 } : undefined}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-6 border-2 border-blue-500/60 text-blue-300 hover:bg-blue-500/20 hover:text-blue-200 font-mono backdrop-blur-sm"
                    asChild
                  >
                    <a href="#contact" rel="noopener noreferrer" aria-label="Contact us section link">
                      <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
                      CONTACT US
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              <StatsGrid reduceMotion={reduceMotion} />
            </div>

          {/* Right */}
          <CodeTerminal reduceMotion={reduceMotion} />
        </div>
      </div>
    </section>
  );
}