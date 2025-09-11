  "use client";

  import { Button } from "./ui/button";
  import { Badge } from "./ui/badge";
  import { Card, CardContent } from "./ui/card";
  import { 
    Github, 
    ArrowRight, 
    Terminal,
    Sparkles,
    Copy,
    Check,
    Brain,
    Code2,
    Shield,
    Cpu,
    Database,
    Rocket
  } from "lucide-react";
  import { motion, useScroll, useTransform } from "framer-motion";
  import { useState, useEffect } from "react";

  export default function HeroSection() {
    const [copied, setCopied] = useState(false);
    const [typedText, setTypedText] = useState("");
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const fullText = "npm install @luciantech/core";

    useEffect(() => {
      let i = 0;
      const timer = setInterval(() => {
        if (i < fullText.length) {
          setTypedText(fullText.slice(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
        }
      }, 100);
      return () => clearInterval(timer);
    }, []);

    const codeExample = `// Başlat LucianTech deneyimini
  import { Quantum, NeuralNet, CyberUI } from '@luciantech/core'

  export function LucianApp() {
    const [active, setActive] = useState(true)
    
    return (
      <Quantum.Grid active={active}>
        <NeuralNet.Interface 
          theme="cyber"
          performance="maximized"
        >
          <CyberUI.Button 
            variant="neon"
            onClick={() => activateLucianTech()}
          >
            ACTIVATE
          </CyberUI.Button>
        </NeuralNet.Interface>
      </Quantum.Grid>
    )
  }`;

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(fullText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        console.error("Metin kopyalanamadı:", error);
      }
    };

    const floatingIcons = [Terminal, Cpu, Database, Shield, Rocket, Brain];

    // Bu state'ler matrix rain için client'ta oluşturulacak
    const [matrixDrops, setMatrixDrops] = useState<
      { left: number; duration: number; delay: number }[]
    >([]);

    useEffect(() => {
      // client'ta üret ve set et
      const drops = Array.from({ length: 20 }).map(() => ({
        left: Math.random() * 100,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2
      }));
      setMatrixDrops(drops);
    }, []);

    return (
      <section className="relative overflow-hidden py-24 px-4 min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        {/* Cyberpunk Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'grid-move 20s linear infinite'
            }} />
          </div>

          {/* Matrix Rain Effect */}
          <div className="absolute inset-0 opacity-5">
            {matrixDrops.map(({ left, duration, delay }, i) => (
              <motion.div
                key={i}
                className="absolute w-px bg-gradient-to-b from-transparent via-green-400 to-transparent"
                style={{
                  left: `${left}%`,
                  height: '100px'
                }}
                animate={{
                  y: ['-100px', 'calc(100vh + 100px)'],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration,
                  repeat: Infinity,
                  delay,
                  ease: "linear"
                }}
              />
            ))}
          </div>

          {/* Floating Orbs */}
          <motion.div
            style={{ y }}
            className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            style={{ y: useTransform(scrollY, [0, 500], [0, -100]) }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 0.8, 1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Floating Tech Icons */}
          {floatingIcons.map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute opacity-10"
              animate={{
                y: [-20, -60, -20],
                x: [-10, 10, -10],
                rotate: [0, 360, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                delay: i * 0.8
              }}
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 20}%`
              }}
            >
              <Icon className="h-12 w-12 text-cyan-400" />
            </motion.div>
          ))}
        </div>

        <motion.div 
          style={{ opacity :1 }}
          className="container mx-auto relative z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(6, 182, 212, 0.3)",
                      "0 0 30px rgba(139, 92, 246, 0.4)",
                      "0 0 20px rgba(6, 182, 212, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Badge variant="secondary" className="mb-6 bg-gradient-to-r from-purple-900/50 to-cyan-900/50 text-cyan-300 border-cyan-500/30 font-mono text-xs backdrop-blur-sm">
                    <Sparkles className="mr-2 h-4 w-4" />
                    LATEK STATUS: 100+ PACKAGES & LIBRARIES ONLINE
                  </Badge>
                </motion.div>
                
                <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight font-mono">
                  <motion.span 
                    className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    animate={{ 
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    LUVIAN
                  </motion.span>
                  <motion.span 
                    className="block bg-gradient-to-r from-pink-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
                    animate={{ 
                      backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    TECH
                  </motion.span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg font-mono">
                  <span className="text-cyan-400">{">"}</span> Yazılım teknolojilerinde öncü,{" "}
                  <span className="text-purple-400 font-bold">açık kaynak</span> paketler ve kütüphaneler sunuyoruz.{" "}
                  <span className="text-pink-400">Modern</span> altyapılarla{" "}
                  <span className="text-green-400">geleceği şekillendiriyoruz</span>.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur-lg opacity-75"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.75, 1, 0.75]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <Button size="lg" className="relative text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-mono shadow-lg">
                    <Terminal className="mr-2 h-5 w-5" />
                    GET STARTED
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:text-purple-200 font-mono">
                    <Github className="mr-2 h-5 w-5" />
                    GITHUB
                  </Button>
                </motion.div>
              </motion.div>

              {/* Terminal Command */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-slate-900/80 backdrop-blur-sm rounded-lg p-4 border border-cyan-500/30 shadow-lg shadow-cyan-500/10"
              >
                <div className="flex items-center justify-between">
                  <div className="font-mono text-sm text-green-400 flex items-center gap-2">
                    <span className="text-cyan-400">lucian@tech:~$</span>
                    <span>{typedText}</span>
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="inline-block w-2 h-5 bg-green-400"
                    />
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={handleCopy}
                    className="ml-2 text-cyan-300 hover:text-cyan-100 hover:bg-cyan-500/10"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </motion.div>

              {/* Cyberpunk Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-3 gap-6"
              >
                {[
                  { value: "∞", label: "ACTIVE_CONNECTIONS", color: "text-cyan-400", icon: Brain },
                  { value: "120K+", label: "PACKAGES_PUBLISHED", color: "text-purple-400", icon: Code2 },
                  { value: "1500", label: "DEVELOPERS_SUPPORTED", color: "text-pink-400", icon: Shield }
                ].map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div 
                      key={index}
                      className="text-center relative"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg blur-xl"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      />
                      <div className="relative z-10 p-4">
                        <IconComponent className={`h-6 w-6 mx-auto mb-2 ${stat.color}`} />
                        <motion.div 
                          className={`text-3xl font-bold ${stat.color} mb-1 font-mono`}
                          animate={{ 
                            textShadow: [
                              "0 0 10px currentColor",
                              "0 0 20px currentColor",
                              "0 0 10px currentColor"
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
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

            {/* Right Content - Cyberpunk Code Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <Card className="bg-slate-900/90 backdrop-blur-xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-slate-800/50 px-4 py-3 border-b border-purple-500/30 flex items-center gap-2">
                    <div className="flex gap-2">
                      <motion.div 
                        className="w-3 h-3 bg-red-500 rounded-full"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div 
                        className="w-3 h-3 bg-yellow-500 rounded-full"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                      />
                      <motion.div 
                        className="w-3 h-3 bg-green-500 rounded-full"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                      />
                    </div>
                    <div className="text-sm text-cyan-400 ml-2 font-mono">luciantech.core</div>
                    <div className="ml-auto text-xs text-gray-500 font-mono">PRODUCTION_MODE</div>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-slate-900/50 to-purple-900/20 hologram-effect">
                    <pre className="text-sm font-mono text-gray-300 leading-relaxed">
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 1 }}
                        className="block"
                      >
                        {codeExample.split('\n').map((line, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                            className="flex"
                          >
                            <span className="text-gray-600 mr-4 select-none w-6 text-right">
                              {index + 1}
                            </span>
                            <span className="text-gray-300">{line}</span>
                          </motion.div>
                        ))}
                      </motion.span>
                    </pre>
                  </div>
                </CardContent>
              </Card>

              {/* Floating Holographic Elements */}
              <motion.div
                className="absolute -top-6 -right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-lg"
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 20, -20, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Sparkles className="h-8 w-8" />
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -left-8 bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-5 rounded-xl shadow-lg"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, -15, 0],
                  y: [0, -5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Terminal className="h-10 w-10" />
              </motion.div>

              {/* Cyber Lines */}
              <motion.div
                className="absolute top-1/2 -left-20 w-16 h-px bg-gradient-to-r from-transparent to-purple-500"
                animate={{ 
                  scaleX: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 2 }}
              />
              <motion.div
                className="absolute top-1/2 -right-20 w-16 h-px bg-gradient-to-l from-transparent to-cyan-500"
                animate={{ 
                  scaleX: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
              />
            </motion.div>
          </div>
        </motion.div>

        <style jsx>{`
          @keyframes grid-move {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }
        `}</style>
      </section>
    );
  }
  