"use client";

import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import {
  ArrowRight,
  Terminal,
  Copy,
  Check,
  Shield,
  Building2,
  Database,
  Cloud,
  Code,
  Users,
  Rocket,
  Mail
} from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

const FLOATING_ICONS = [Terminal, Code, Database, Shield, Cloud, Building2];

const STATS = [
  { value: "99.9%", label: "UPTIME", color: "text-cyan-400", icon: Shield },
  { value: "15K+", label: "ACTIVE USERS", color: "text-purple-400", icon: Users },
  { value: "5+", label: "SAAS PRODUCTS", color: "text-pink-400", icon: Rocket }
];

const CODE_EXAMPLE = `// Integrate Ereosys Products
import { 
  EreoCRM, 
  EreoAnalytics, 
  EreoCloud 
} from '@ereosys/sdk'

export function MyApp() {
  const [user, setUser] = useState(null)
  
  return (
    <EreoCloud region="us-east-1">
      <EreoCRM 
        apiKey="your-api-key"
        features={["contacts", "deals", "automation"]}
      >
        <EreoAnalytics 
          tracking={true}
          realtime={true}
          dashboards="custom"
        >
          <YourApplication 
            user={user}
            onEvent={(event) => track(event)}
          />
        </EreoAnalytics>
      </EreoCRM>
    </EreoCloud>
  )
}`;

export default function HeroSection() {
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();

  const orb1Y = useTransform(scrollY, [0, 500], [0, 100]);
  const orb2Y = useTransform(scrollY, [0, 500], [0, -75]);
  const orb3Y = useTransform(scrollY, [0, 400], [0, 50]);

  const [copiedCode, setCopiedCode] = useState(false);

  // Floating data (removed CRM/SDK chars)
  const [dataPoints, setDataPoints] = useState<Array<{
    left: number;
    duration: number;
    delay: number;
    char: string;
  }>>([]);

  useEffect(() => {
    const chars = "EREOSYS<>{}()";
    const points = Array.from({ length: 20 }).map(() => ({
      left: Math.random() * 100,
      duration: Math.random() * 8 + 10,
      delay: Math.random() * 5,
      char: chars[Math.floor(Math.random() * chars.length)]
    }));
    setDataPoints(points);
  }, []);

  const handleCopyCode = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch (e) {
      console.error("Kopyalama hatası:", e);
    }
  };

  const codeLines = useMemo(() => CODE_EXAMPLE.split("\n"), []);

  return (
    <section className="relative overflow-hidden py-24 px-6 min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950">
      {/* Enhanced Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Professional Grid Pattern */}
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

        {/* Product Data Stream */}
        <div className="absolute inset-0 opacity-8">
          {dataPoints.map((point, i) => (
            <motion.div
              key={i}
              className="absolute font-mono text-xs font-bold text-cyan-400"
              style={{ left: `${point.left}%` }}
              animate={
                reduceMotion ? undefined : {
                  y: ["-50px", "calc(100vh + 50px)"],
                  opacity: [0, 0.6, 0.3, 0]
                }
              }
              transition={{
                duration: point.duration,
                repeat: Infinity,
                delay: point.delay,
                ease: "linear"
              }}
            >
              {point.char}
            </motion.div>
          ))}
        </div>

        {/* Enhanced Orbs */}
        <motion.div
          style={{ y: orb1Y }}
          className="absolute top-20 left-10 w-[440px] h-[440px] bg-gradient-to-r from-blue-500/25 to-purple-500/25 rounded-full blur-3xl"
          animate={
            reduceMotion ? undefined : {
              scale: [1, 1.3, 1],
              opacity: [0.25, 0.5, 0.25],
              rotate: [0, 180, 360]
            }
          }
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          style={{ y: orb2Y }}
          className="absolute bottom-20 right-10 w-[440px] h-[440px] bg-gradient-to-l from-purple-500/25 to-pink-500/25 rounded-full blur-3xl"
          animate={
            reduceMotion ? undefined : {
              scale: [1, 0.8, 1.2, 1],
              opacity: [0.25, 0.6, 0.25],
              rotate: [360, 180, 0]
            }
          }
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          style={{ y: orb3Y }}
          className="absolute top-1/2 left-1/3 w-[320px] h-[320px] bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl"
          animate={
            reduceMotion ? undefined : {
              scale: [1, 1.4, 1],
              x: [-50, 50, -50],
              opacity: [0.2, 0.4, 0.2]
            }
          }
          transition={{ duration: 18, repeat: Infinity }}
        />

        {/* Floating Product Icons */}
        {FLOATING_ICONS.map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${8 + i * 14}%`,
              top: `${15 + (i % 4) * 18}%`
            }}
            animate={
              reduceMotion ? undefined : {
                y: [-25, -65, -25],
                x: [-12, 12, -12],
                rotate: [0, 360, 0],
                scale: [1, 1.2, 1],
                opacity: [0.08, 0.15, 0.08]
              }
            }
            transition={{
              duration: 12 + i * 1.5,
              repeat: Infinity,
              delay: i * 1.2
            }}
          >
            <Icon className="h-14 w-14 text-blue-400" />
          </motion.div>
        ))}

        {/* Data Flow Lines */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
          animate={
            reduceMotion ? undefined : {
              scaleX: [0, 1, 0],
              opacity: [0, 0.6, 0]
            }
          }
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
          animate={
            reduceMotion ? undefined : {
              scaleX: [0, 1, 0],
              opacity: [0, 0.6, 0]
            }
          }
          transition={{ duration: 4, repeat: Infinity, delay: 3 }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Product Company Badge */}
              <motion.div
                animate={
                  reduceMotion ? undefined : {
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
                >
                  <motion.div
                    animate={
                      reduceMotion ? undefined : {
                        rotate: [0, 360]
                      }
                    }
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Rocket className="mr-2 h-4 w-4" />
                  </motion.div>
                  SAAS PRODUCT COMPANY 
                </Badge>
              </motion.div>

              {/* Company Title */}
              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight font-mono">
                <motion.span
                  className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                  animate={
                    reduceMotion ? undefined : {
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }
                  }
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{ backgroundSize: "300% 300%" }}
                >
                  EREOSYS
                </motion.span>
              </h1>

              {/* Description */}
              <div className="space-y-3">
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg font-mono">
                  <span className="text-blue-400 text-3xl">&gt;</span> Building next-generation{" "}
                  <span className="text-purple-400 font-bold bg-purple-400/10 px-2 py-1 rounded">SaaS products</span>{" "}
                  that power modern businesses worldwide.
                </p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
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
                <Button size="lg" className="relative text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-mono shadow-2xl">
                  <Rocket className="mr-2 h-5 w-5" />
                  TRY OUR PRODUCTS
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              {/* Farklı aksiyon: Contact */}
              <motion.div 
                whileHover={{ scale: 1.05, y: -3 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 border-2 border-blue-500/60 text-blue-300 hover:bg-blue-500/20 hover:text-blue-200 font-mono backdrop-blur-sm"
                  asChild
                >
                  <a href="#contact" rel="noopener noreferrer">
                    <Mail className="mr-2 h-5 w-5" />
                    CONTACT US
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* SDK Installation Terminal removed */}

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-6"
            >
              {STATS.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center relative group"
                    whileHover={{ scale: 1.08, y: -6 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-xl blur-xl group-hover:blur-lg"
                      animate={
                        reduceMotion ? undefined : {
                          scale: [1, 1.1, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }
                      }
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    />
                    <div className="relative z-10 p-4 bg-slate-900/60 backdrop-blur-xl rounded-xl border border-gray-700/50 group-hover:border-blue-500/50 transition-colors">
                      <IconComponent className={`h-6 w-6 mx-auto mb-2 ${stat.color}`} />
                      <motion.div
                        className={`text-3xl font-bold ${stat.color} mb-1 font-mono`}
                        animate={
                          reduceMotion ? undefined : {
                            textShadow: [
                              "0 0 10px currentColor",
                              "0 0 20px currentColor",
                              "0 0 10px currentColor"
                            ]
                          }
                        }
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.7 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-sm text-gray-400 font-mono">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Code Terminal (generic, no CRM) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            {/* Frame */}
            <motion.div
              className="absolute -inset-3 bg-gradient-to-r from-blue-500/25 via-purple-500/25 to-blue-500/25 rounded-xl blur-xl"
              animate={
                reduceMotion ? undefined : {
                  opacity: [0.25, 0.5, 0.25],
                  scale: [1, 1.02, 1]
                }
              }
              transition={{ duration: 5, repeat: Infinity }}
            />

            <Card className="relative bg-slate-900/95 backdrop-blur-2xl border border-blue-500/40 shadow-2xl shadow-blue-500/30 overflow-hidden rounded-xl">
              <CardContent className="p-0">
                <div className="bg-slate-800/60 px-4 py-3 border-b border-blue-500/30 flex items-center gap-2">
                  <div className="flex gap-2">
                    {["bg-red-500","bg-yellow-500","bg-green-500"].map((c,i) => (
                      <motion.div
                        key={c}
                        className={`w-3 h-3 rounded-full ${c}`}
                        animate={
                          reduceMotion ? undefined : { opacity: [1, 0.4, 1] }
                        }
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-blue-400 ml-2 font-mono flex items-center gap-1">
                    <Code className="h-3 w-3" />
                    example.tsx
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <span className="text-xs text-gray-500 font-mono bg-slate-700/50 px-2 py-1 rounded text-[10px]">EXAMPLE</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleCopyCode(CODE_EXAMPLE)}
                      className="text-blue-300 hover:text-blue-100 hover:bg-blue-500/20 p-2"
                    >
                      {copiedCode ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <div className="p-5 bg-gradient-to-br from-slate-900/70 to-blue-900/20">
                  <pre className="text-sm font-mono text-gray-300 leading-relaxed">
                    <code>
                      {codeLines.map((line, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.8 + index * 0.04 }}
                          className="flex hover:bg-blue-500/8 -mx-2 px-2 py-0.5 rounded transition-colors"
                        >
                          <span className="text-gray-600 mr-3 select-none w-6 text-right text-xs">
                            {index + 1}
                          </span>
                          <span className="text-gray-300 text-sm">
                            {line.includes('//') ? (
                              <>
                                {line.split('//')[0]}
                                <span className="text-green-400">//{line.split('//')[1]}</span>
                              </>
                            ) : line.includes('export') ? (
                              <span className="text-purple-400">{line}</span>
                            ) : line.includes('function') ? (
                              <span className="text-blue-400">{line}</span>
                            ) : line || " "}
                          </span>
                        </motion.div>
                      ))}
                    </code>
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl shadow-xl"
              animate={
                reduceMotion ? undefined : {
                  y: [-8, 8, -8],
                  rotate: [0, 8, -8, 0],
                  scale: [1, 1.1, 1]
                }
              }
              transition={{ duration: 6, repeat: Infinity }}
            >
              <Database className="h-7 w-7" />
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-xl shadow-xl"
              animate={
                reduceMotion ? undefined : {
                  scale: [1, 1.15, 1],
                  rotate: [0, -6, 0],
                  y: [0, -6, 0]
                }
              }
              transition={{ duration: 5, repeat: Infinity }}
            >
              <Cloud className="h-8 w-8" />
            </motion.div>

            {/* Connection Lines */}
            <motion.div
              className="absolute top-1/2 -left-16 w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-purple-500"
              animate={
                reduceMotion ? undefined : {
                  scaleX: [0, 1, 0],
                  opacity: [0, 0.8, 0]
                }
              }
              transition={{ duration: 3, repeat: Infinity, delay: 2 }}
            />
            <motion.div
              className="absolute top-1/2 -right-16 w-12 h-px bg-gradient-to-l from-transparent via-purple-500 to-blue-500"
              animate={
                reduceMotion ? undefined : {
                  scaleX: [0, 1, 0],
                  opacity: [0, 0.8, 0]
                }
              }
              transition={{ duration: 3, repeat: Infinity, delay: 2.5 }}
            />
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-flow {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(100px, 100px) rotate(360deg); }
        }
      `}</style>
    </section>
  );
}