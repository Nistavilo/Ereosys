'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Globe, 
  Users, 
  Building2, 
  Zap,
  Shield,
  TrendingUp,
  Code2,
  Rocket,
  CheckCircle,
  Star,
  Terminal,
  Database,
  Cloud,
  Layers
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const companyValues = [
  {
    icon: Rocket,
    title: "Product Innovation",
    description: "Creating next-generation SaaS products that revolutionize how businesses operate, with cutting-edge features and intuitive user experiences.",
    color: "from-blue-500 to-purple-500"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Building SOC 2 compliant products with bank-level security, ensuring our SaaS platforms protect customer data with military-grade encryption.",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description: "Designing SaaS products that prioritize user experience, with intuitive interfaces and workflows that increase productivity and satisfaction.",
    color: "from-emerald-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description: "Engineering SaaS platforms that scale from startups to enterprises, handling millions of users with consistent performance and reliability.",
    color: "from-purple-500 to-pink-500"
  }
];

const achievements = [
  {
    number: "15K+",
    label: "Active Users",
    icon: Users,
    color: "text-blue-400"
  },
  {
    number: "99.9%",
    label: "Platform Uptime",
    icon: CheckCircle,
    color: "text-emerald-400"
  },
  {
    number: "5+",
    label: "SaaS Products",
    icon: Rocket,
    color: "text-purple-400"
  },
  {
    number: "24/7",
    label: "Product Support",
    icon: Star,
    color: "text-cyan-400"
  }
];

const ourProducts = [
  {
    name: "EreoCRM",
    description: "Customer relationship management platform",
    icon: Building2,
    users: "2.5K+",
    status: "Live",
    color: "from-blue-500 to-purple-500"
  },
  {
    name: "EreoAnalytics", 
    description: "Business intelligence and analytics suite",
    icon: Database,
    users: "1.8K+",
    status: "Live",
    color: "from-cyan-500 to-blue-500"
  },
  {
    name: "EreoCloud",
    description: "Cloud infrastructure management platform",
    icon: Cloud,
    users: "3.2K+",
    status: "Beta",
    color: "from-emerald-500 to-cyan-500"
  }
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="about" 
      className="py-24 px-4 bg-gradient-to-br from-slate-950 via-blue-950/10 to-slate-950 relative overflow-hidden" 
      ref={ref}
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-8 pointer-events-none">
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[Terminal, Database, Cloud, Code2].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute opacity-5"
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + (i % 3) * 25}%`
            }}
            animate={{
              y: [-20, -40, -20],
              x: [-10, 10, -10],
              rotate: [0, 180, 360],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 2
            }}
          >
            <Icon className="h-16 w-16 text-blue-400" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 30px rgba(59, 130, 246, 0.3)",
                "0 0 40px rgba(139, 92, 246, 0.4)",
                "0 0 30px rgba(59, 130, 246, 0.3)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Badge 
              variant="secondary" 
              className="mb-6 bg-gradient-to-r from-blue-900/60 to-purple-900/60 text-blue-300 border-blue-500/30 text-sm backdrop-blur-sm font-mono"
            >
              <Layers className="mr-2 h-4 w-4" />
              SaaS Product Company • Since 2018
            </Badge>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 font-mono">
            <motion.span 
              className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "300% 300%" }}
            >
              About EREOSYS
            </motion.span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-mono">
            <span className="text-blue-400 text-2xl">{">"}</span> We build{" "}
            <span className="text-purple-400 font-bold">enterprise-grade SaaS products</span> that power{" "}
            <span className="text-cyan-400 font-bold">15,000+ users</span> worldwide with{" "}
            <span className="text-emerald-400 font-bold">innovative solutions</span> for modern business challenges.
          </p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {[{
            icon: Target,
            title: "Our Mission",
            description: "To create powerful SaaS products that simplify complex business processes, enabling companies to focus on growth while our platforms handle the operational complexity with reliability and intelligence.",
            borderColor: "border-blue-500/30",
            bgColor: "bg-slate-900/80",
            hoverBorder: "hover:border-purple-500/50",
            iconColor: "from-blue-500 to-purple-500",
            iconTextColor: "text-blue-400",
          }, {
            icon: Eye,
            title: "Our Vision", 
            description: "To be the leading SaaS ecosystem where businesses discover, integrate, and scale with our suite of products that work seamlessly together to create unified digital experiences.",
            borderColor: "border-purple-500/30",
            bgColor: "bg-slate-900/80",
            hoverBorder: "hover:border-cyan-500/50",
            iconColor: "from-purple-500 to-cyan-500",
            iconTextColor: "text-purple-400",
          }, {
            icon: Heart,
            title: "Our Values",
            description: "User obsession, product excellence, and continuous innovation drive our SaaS development. We believe in building products that users love, with transparent pricing and world-class support.",
            borderColor: "border-cyan-500/30",
            bgColor: "bg-slate-900/80",
            hoverBorder: "hover:border-emerald-500/50",
            iconColor: "from-cyan-500 to-emerald-500",
            iconTextColor: "text-cyan-400",
          }].map(({icon: IconComponent, title, description, borderColor, bgColor, hoverBorder, iconColor, iconTextColor}, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
            >
              <Card className={`h-full ${bgColor} backdrop-blur-xl border ${borderColor} shadow-2xl shadow-blue-500/10 ${hoverBorder} transition-all duration-300 group`}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${iconColor} bg-opacity-20 group-hover:bg-opacity-30 transition-all`}>
                      <IconComponent className={`h-6 w-6 ${iconTextColor}`} />
                    </div>
                    <CardTitle className={`${iconTextColor} font-mono`}>{title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-300 leading-relaxed font-mono text-sm">
                    {description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Our SaaS Products */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 font-mono">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our SaaS Product Suite
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ourProducts.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <motion.div
                  key={index}
                  className="relative p-6 rounded-xl bg-slate-900/60 border border-blue-500/30 hover:border-purple-500/50 transition-all duration-300 group overflow-hidden backdrop-blur-xl"
                  whileHover={{ scale: 1.03, y: -8 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {/* Product Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-5 group-hover:opacity-15 transition-opacity`}
                    animate={{ 
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    style={{ backgroundSize: "200% 200%" }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${product.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white font-mono">{product.name}</h4>
                          <Badge variant="outline" className={`text-xs ${
                            product.status === 'Live' 
                              ? 'bg-emerald-900/30 text-emerald-400 border-emerald-500/30' 
                              : 'bg-orange-900/30 text-orange-400 border-orange-500/30'
                          } font-mono`}>
                            {product.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-cyan-400 font-mono">{product.users}</div>
                        <div className="text-xs text-gray-500 font-mono">users</div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed font-mono">{product.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Company Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 font-mono">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Core Development Principles
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  className="relative p-8 rounded-xl bg-slate-800/30 border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 group overflow-hidden"
                  whileHover={{ scale: 1.02, y: -5 }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-5 group-hover:opacity-10 transition-opacity`}
                    animate={{ 
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    style={{ backgroundSize: "200% 200%" }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-4 rounded-lg bg-gradient-to-r ${value.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-3 font-mono">{value.title}</h4>
                        <p className="text-gray-300 leading-relaxed font-mono text-sm">{value.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Product Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <Card className="bg-slate-900/80 backdrop-blur-xl border border-blue-500/30 shadow-2xl shadow-blue-500/10 overflow-hidden">
            <CardHeader className="text-center border-b border-blue-500/30 bg-slate-800/50">
              <CardTitle className="text-2xl font-mono">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Product Performance Metrics
                </span>
              </CardTitle>
              <CardDescription className="font-mono">
                Real-time statistics from our SaaS platform ecosystem
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <motion.div
                      key={index}
                      className="text-center group"
                      whileHover={{ scale: 1.05, y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                    >
                      <motion.div
                        className="relative mx-auto mb-4 w-fit"
                        animate={{ 
                          boxShadow: [
                            `0 0 20px rgba(59, 130, 246, 0.3)`,
                            `0 0 30px rgba(139, 92, 246, 0.4)`,
                            `0 0 20px rgba(59, 130, 246, 0.3)`
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      >
                        <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 bg-opacity-20 group-hover:bg-opacity-30 transition-all">
                          <IconComponent className={`h-8 w-8 ${achievement.color}`} />
                        </div>
                      </motion.div>
                      <motion.div 
                        className={`text-4xl font-bold ${achievement.color} mb-2 font-mono`}
                        animate={{ 
                          textShadow: [
                            "0 0 10px currentColor",
                            "0 0 20px currentColor",
                            "0 0 10px currentColor"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      >
                        {achievement.number}
                      </motion.div>
                      <div className="text-sm text-gray-400 font-mono">{achievement.label}</div>
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center relative"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-3xl font-bold mb-4 font-mono">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Try Our Products?
              </span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto font-mono">
              <span className="text-blue-400 text-xl">{">"}</span> Join{" "}
              <span className="text-purple-400 font-bold">15,000+ users</span> who trust our{" "}
              <span className="text-cyan-400 font-bold">SaaS products</span> to{" "}
              <span className="text-emerald-400 font-bold">scale their businesses</span> with reliable, innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 font-mono">
                  <Rocket className="mr-2 h-5 w-5" />
                  Try Our Products Free
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 font-mono">
                  <Award className="mr-2 h-5 w-5" />
                  View Product Demos
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}