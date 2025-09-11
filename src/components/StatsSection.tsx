'use client'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Clock,
  Building2,
  Database,
  Cloud,
  Shield,
  Settings,
  Zap,
  Globe,
  Award,
  BarChart
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const platformStats = [
  {
    value: "15,247",
    label: "Active Users",
    change: "+23% this month",
    icon: Users,
    color: "from-blue-500 to-purple-500"
  },
  {
    value: "99.9%",
    label: "Platform Uptime",
    change: "Last 30 days",
    icon: CheckCircle,
    color: "from-emerald-500 to-cyan-500"
  },
  {
    value: "$2.8M",
    label: "Revenue Processed",
    change: "+45% this quarter",
    icon: TrendingUp,
    color: "from-purple-500 to-pink-500"
  },
  {
    value: "5.2K",
    label: "Companies Served",
    change: "Across 50+ countries",
    icon: Building2,
    color: "from-cyan-500 to-blue-500"
  }
];

const productMetrics = [
  {
    name: "EreoCRM",
    users: "2,547",
    growth: "+27%",
    icon: Building2,
    satisfaction: 98,
    color: "from-blue-500 to-purple-500"
  },
  {
    name: "EreoAnalytics", 
    users: "1,823",
    growth: "+34%",
    icon: BarChart,
    satisfaction: 96,
    color: "from-purple-500 to-cyan-500"
  },
  {
    name: "EreoCloud",
    users: "3,156",
    growth: "+45%",
    icon: Cloud,
    satisfaction: 95,
    color: "from-cyan-500 to-emerald-500"
  },
  {
    name: "EreoSecurity",
    users: "957",
    growth: "+67%",
    icon: Shield,
    satisfaction: 97,
    color: "from-emerald-500 to-blue-500"
  }
];

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="stats" 
      className="py-24 px-4 bg-gradient-to-br from-slate-950 via-purple-950/10 to-slate-950 relative overflow-hidden" 
      ref={ref}
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.12) 0%, transparent 40%)
          `
        }} />
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
              <BarChart className="mr-2 h-4 w-4" />
              Live Platform Statistics • Updated: 2025-08-23 13:28:12 UTC
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
              Platform Insights
            </motion.span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-mono">
            <span className="text-blue-400 text-2xl">{">"}</span> Real-time{" "}
            <span className="text-purple-400 font-bold">platform analytics</span> and{" "}
            <span className="text-cyan-400 font-bold">performance metrics</span> from our{" "}
            <span className="text-emerald-400 font-bold">SaaS ecosystem</span>.
          </p>
        </motion.div>

        {/* Platform Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {platformStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <Card className="bg-slate-900/80 backdrop-blur-xl border border-blue-500/30 shadow-2xl shadow-blue-500/10 overflow-hidden relative">
                  {/* Animated glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-5 group-hover:opacity-15 transition-opacity`}
                    animate={{ 
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    style={{ backgroundSize: "200% 200%" }}
                  />
                  
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="outline" className="text-xs bg-emerald-900/30 text-emerald-400 border-emerald-500/30 font-mono">
                      Live
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <motion.div 
                      className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent font-mono`}
                      animate={{ 
                        textShadow: [
                          "0 0 10px currentColor",
                          "0 0 20px currentColor", 
                          "0 0 10px currentColor"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {stat.value}
                    </motion.div>
                    <p className="text-sm text-gray-300 mb-1 font-mono">{stat.label}</p>
                    <p className="text-xs text-cyan-400 font-mono">{stat.change}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Product Performance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 font-mono">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Product Performance Dashboard
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productMetrics.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Card className="bg-slate-800/40 border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden">
                    <div className={`h-1 bg-gradient-to-r ${product.color}`} />
                    
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <IconComponent className="h-5 w-5 text-blue-400" />
                          <CardTitle className="text-lg font-mono">{product.name}</CardTitle>
                        </div>
                        <Badge variant="outline" className="text-xs bg-emerald-900/30 text-emerald-400 border-emerald-500/30 font-mono">
                          {product.growth}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm font-mono">
                        <span className="text-gray-400">Active Users:</span>
                        <span className="text-white font-bold">{product.users}</span>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm font-mono">
                          <span className="text-gray-400">Satisfaction:</span>
                          <span className="text-white">{product.satisfaction}%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${product.color} rounded-full`}
                            initial={{ width: 0 }}
                            animate={{ width: `${product.satisfaction}%` }}
                            transition={{ duration: 1.5, delay: 0.7 + index * 0.2 }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* User Welcome */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Card className="bg-slate-900/80 backdrop-blur-xl border border-purple-500/30 shadow-2xl shadow-purple-500/10 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2 font-mono">
                <Users className="h-5 w-5 text-purple-400" />
                <span className="text-purple-400">Welcome Back, Nistavilo</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <p className="text-sm text-gray-300 mb-2 font-mono">
                  Last login: <span className="text-cyan-400">2025-08-23 13:28:12 UTC</span>
                </p>
                <p className="text-sm text-gray-300 font-mono">
                  You have access to all EREOSYS products and premium features.
                </p>
              </div>
              <div className="flex gap-3">
                <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-mono">
                  <Globe className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
                <Button variant="outline" size="sm" className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 font-mono">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}