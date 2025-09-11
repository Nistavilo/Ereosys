'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Users, 
  Download, 
  Star, 
  TrendingUp, 
  Eye,
  Play,
  Code,
  Zap,
  Shield,
  Building2,
  Terminal,
  Database,
  Cloud,
  Rocket,
  Wifi,
  CheckCircle,
  ExternalLink,
  Layers,
  BarChart,
  Settings
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const saasProducts = [
  {
    id: 'ereo-crm',
    name: "EreoCRM",
    description: "Next-generation customer relationship management platform with AI-powered insights, automated workflows, and enterprise-grade security for scaling businesses.",
    category: "Business Management",
    activeUsers: "2,500+",
    monthlyGrowth: "+27%",
    satisfaction: "98%",
    version: "v3.2.0",
    pricing: "$49/user/month",
    tech: ["React", "Node.js", "PostgreSQL", "AI/ML"],
    color: "from-blue-500 via-purple-500 to-cyan-500",
    icon: Building2,
    codeExample: `// EreoCRM API Integration
import { EreoCRM } from '@ereosys/crm-sdk'

const crm = new EreoCRM({
  apiKey: process.env.EREO_CRM_API_KEY,
  environment: 'production'
})

// Create customer with AI insights
const customer = await crm.customers.create({
  name: "Enterprise Corp",
  industry: "Technology",
  enableAI: true,
  automations: ["lead-scoring", "follow-ups"]
})

// Get AI-powered sales predictions
const insights = await crm.analytics.getPredictions(customer.id)
console.log("Sales probability:", insights.probability)`,
    features: ["AI-Powered Insights", "Automated Workflows", "Enterprise Security", "Custom Dashboards"],
    status: "live",
    uptime: 99.9,
    dataPoints: {
      customers: "10K+",
      deals: "$2.5M+",
      automations: "500K+",
      integrations: "150+"
    }
  },
  {
    id: 'ereo-analytics',
    name: "EreoAnalytics",
    description: "Advanced business intelligence platform with real-time data visualization, predictive analytics, and custom reporting for data-driven decision making.",
    category: "Business Intelligence",
    activeUsers: "1,800+",
    monthlyGrowth: "+34%",
    satisfaction: "96%",
    version: "v2.8.1",
    pricing: "$89/user/month",
    tech: ["React", "Python", "ClickHouse", "Apache Kafka"],
    color: "from-cyan-500 via-blue-500 to-purple-500",
    icon: BarChart,
    codeExample: `// EreoAnalytics SDK
import { EreoAnalytics } from '@ereosys/analytics-sdk'

const analytics = new EreoAnalytics({
  workspace: "your-workspace",
  apiKey: process.env.EREO_ANALYTICS_KEY
})

// Create real-time dashboard
const dashboard = await analytics.dashboards.create({
  name: "Revenue Analytics",
  widgets: [
    { type: "revenue-chart", timeframe: "30d" },
    { type: "customer-funnel", source: "all" },
    { type: "predictive-model", model: "churn-prediction" }
  ],
  realtime: true
})

// Track custom business events
analytics.track("subscription_upgraded", {
  userId: "user_123",
  plan: "enterprise",
  revenue: 5000
})`,
    features: ["Real-time Dashboards", "Predictive Analytics", "Custom Reports", "Data Warehouse"],
    status: "live",
    uptime: 99.8,
    dataPoints: {
      reports: "50K+",
      dataSources: "200+",
      queries: "1M+/day",
      insights: "10K+/month"
    }
  },
  {
    id: 'ereo-cloud',
    name: "EreoCloud",
    description: "Comprehensive cloud infrastructure platform with auto-scaling, monitoring, deployment automation, and cost optimization for modern applications.",
    category: "Cloud Infrastructure",
    activeUsers: "3,200+",
    monthlyGrowth: "+45%",
    satisfaction: "95%",
    version: "v4.1.0-beta",
    pricing: "$0.10/hour/instance",
    tech: ["Kubernetes", "Docker", "Terraform", "Prometheus"],
    color: "from-emerald-500 via-cyan-500 to-blue-500",
    icon: Cloud,
    codeExample: `// EreoCloud Infrastructure as Code
import { EreoCloud } from '@ereosys/cloud-sdk'

const cloud = new EreoCloud({
  region: "us-east-1",
  apiKey: process.env.EREO_CLOUD_KEY
})

// Deploy scalable application
const app = await cloud.applications.deploy({
  name: "my-saas-app",
  image: "my-company/app:latest",
  scaling: {
    min: 2,
    max: 100,
    targetCPU: 70
  },
  monitoring: {
    alerts: true,
    metrics: ["cpu", "memory", "requests"],
    notifications: ["slack", "email"]
  },
  costOptimization: true
})

// Auto-scale based on demand
cloud.monitoring.onMetric("high_cpu", async (data) => {
  await app.scale({ instances: data.recommendedInstances })
})`,
    features: ["Auto-scaling", "Cost Optimization", "Monitoring", "CI/CD Pipeline"],
    status: "beta",
    uptime: 99.7,
    dataPoints: {
      deployments: "25K+",
      instances: "100K+",
      uptime: "99.7%",
      savings: "40%"
    }
  },
  {
    id: 'ereo-security',
    name: "EreoSecurity",
    description: "Enterprise security platform with threat detection, vulnerability scanning, compliance monitoring, and automated incident response for SaaS applications.",
    category: "Security & Compliance",
    activeUsers: "950+",
    monthlyGrowth: "+67%",
    satisfaction: "97%",
    version: "v1.5.0",
    pricing: "$199/app/month",
    tech: ["AI/ML", "Zero Trust", "SIEM", "SOAR"],
    color: "from-red-500 via-orange-500 to-yellow-500",
    icon: Shield,
    codeExample: `// EreoSecurity Integration
import { EreoSecurity } from '@ereosys/security-sdk'

const security = new EreoSecurity({
  organization: "your-org",
  apiKey: process.env.EREO_SECURITY_KEY,
  compliance: ["SOC2", "GDPR", "HIPAA"]
})

// Monitor application security
await security.applications.monitor({
  appId: "my-saas-app",
  scanTypes: ["vulnerabilities", "secrets", "dependencies"],
  realtime: true,
  aiThreatDetection: true
})

// Automated incident response
security.incidents.onThreat("high_severity", async (threat) => {
  await security.response.isolate(threat.source)
  await security.notifications.alert("security-team", threat)
  await security.compliance.logIncident(threat)
})`,
    features: ["Threat Detection", "Compliance Monitoring", "Incident Response", "Vulnerability Scanning"],
    status: "live",
    uptime: 99.9,
    dataPoints: {
      threats: "1K+ blocked",
      scans: "10K+/day",
      compliance: "100%",
      incidents: "<5min response"
    }
  },
  {
    id: 'ereo-workflow',
    name: "EreoWorkflow",
    description: "Advanced business process automation platform with drag-and-drop workflow builder, integrations, and AI-powered optimization for operational efficiency.",
    category: "Process Automation",
    activeUsers: "1,200+",
    monthlyGrowth: "+89%",
    satisfaction: "94%",
    version: "v2.3.0",
    pricing: "$29/user/month",
    tech: ["Node.js", "React Flow", "Redis", "Webhook"],
    color: "from-purple-500 via-pink-500 to-red-500",
    icon: Settings,
    codeExample: `// EreoWorkflow Automation
import { EreoWorkflow } from '@ereosys/workflow-sdk'

const workflow = new EreoWorkflow({
  workspace: "your-workspace",
  apiKey: process.env.EREO_WORKFLOW_KEY
})

// Create automated business process
const process = await workflow.processes.create({
  name: "Customer Onboarding",
  trigger: "new_customer_signup",
  steps: [
    { action: "send_welcome_email", delay: "immediate" },
    { action: "create_crm_record", delay: "5_minutes" },
    { action: "schedule_demo_call", delay: "1_hour" },
    { action: "assign_success_manager", delay: "1_day" }
  ],
  conditions: {
    plan_type: "enterprise",
    revenue_threshold: 1000
  },
  aiOptimization: true
})

// Monitor workflow performance
const metrics = await workflow.analytics.getMetrics(process.id)`,
    features: ["Visual Workflow Builder", "AI Optimization", "Multi-app Integration", "Performance Analytics"],
    status: "live",
    uptime: 99.6,
    dataPoints: {
      workflows: "5K+",
      executions: "100K+/month",
      timeSaved: "40%",
      integrations: "300+"
    }
  }
];

const categories = [
  { id: 'all', label: 'All Products', count: saasProducts.length, color: 'from-blue-400 to-purple-400' },
  { id: 'Business Management', label: 'Business Mgmt', count: 1, color: 'from-blue-400 to-purple-400' },
  { id: 'Business Intelligence', label: 'Analytics', count: 1, color: 'from-cyan-400 to-blue-400' },
  { id: 'Cloud Infrastructure', label: 'Cloud', count: 1, color: 'from-emerald-400 to-cyan-400' },
  { id: 'Security & Compliance', label: 'Security', count: 1, color: 'from-red-400 to-orange-400' },
  { id: 'Process Automation', label: 'Automation', count: 1, color: 'from-purple-400 to-pink-400' }
];

const statusColors = {
  live: 'from-emerald-500 to-green-500',
  beta: 'from-orange-500 to-yellow-500',
  preview: 'from-blue-500 to-cyan-500',
  enterprise: 'from-purple-500 to-pink-500'
};

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProducts = activeCategory === 'all' 
    ? saasProducts 
    : saasProducts.filter(product => product.category === activeCategory);

  const selectedProd = selectedProduct ? saasProducts.find(p => p.id === selectedProduct) ?? null : null;

  return (
    <section id="products" className="py-24 px-4 bg-gradient-to-br from-slate-950 via-blue-950/10 to-slate-950 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 30%),
            radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.12) 0%, transparent 30%),
            linear-gradient(45deg, transparent 48%, rgba(6, 182, 212, 0.08) 50%, transparent 52%)
          `
        }} />
      </div>

      {/* Floating SaaS Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[Database, Cloud, Building2, BarChart, Shield].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute opacity-5"
            style={{
              left: `${15 + i * 18}%`,
              top: `${10 + (i % 4) * 20}%`
            }}
            animate={{
              y: [-15, -35, -15],
              x: [-8, 8, -8],
              rotate: [0, 180, 360],
              opacity: [0.05, 0.12, 0.05]
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              delay: i * 1.5
            }}
          >
            <Icon className="h-12 w-12 text-blue-400" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto relative z-10">
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
            <Badge variant="secondary" className="mb-6 bg-gradient-to-r from-blue-900/60 to-purple-900/60 text-blue-300 border-blue-500/30 text-sm backdrop-blur-sm font-mono">
              <Rocket className="mr-2 h-4 w-4" />
              SaaS Product Suite • 15K+ Active Users
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
              Our Products
            </motion.span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-mono">
            <span className="text-blue-400 text-2xl">{">"}</span> Powerful{" "}
            <span className="text-purple-400 font-bold">SaaS solutions</span> designed for{" "}
            <span className="text-cyan-400 font-bold">modern businesses</span>. From{" "}
            <span className="text-emerald-400 font-bold">CRM to cloud infrastructure</span>, we've got you covered.
          </p>
        </motion.div>

        {/* Category Selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-slate-900/60 backdrop-blur-xl rounded-xl p-3 border border-blue-500/30">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`p-4 rounded-lg text-sm transition-all duration-300 border font-mono ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/50 text-white'
                      : 'border-gray-700/50 text-gray-400 hover:border-blue-500/30 hover:text-gray-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="font-medium">{category.label}</div>
                  <div className="text-xs mt-1 opacity-70">[{category.count}]</div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProducts.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                {/* Product Glow Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${product.color} rounded-xl blur-xl opacity-15 group-hover:opacity-30 transition-opacity duration-300`}
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.15, 0.25, 0.15]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.8 }}
                />

                <Card className="relative h-full bg-slate-900/80 backdrop-blur-xl border border-blue-500/30 shadow-2xl shadow-blue-500/10 overflow-hidden hover:border-purple-500/50 transition-all duration-300">
                  {/* Status Bar */}
                  <div className={`h-1 bg-gradient-to-r ${product.color}`} />
                  
                  <CardHeader className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${product.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all relative`}>
                        <IconComponent className="h-6 w-6 text-white" />
                        <motion.div
                          className="absolute inset-0 bg-white/20 rounded-lg"
                          animate={{ opacity: [0, 0.5, 0] }}
                          transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Badge 
                          variant="outline" 
                          className={`text-xs bg-gradient-to-r ${statusColors[product.status as keyof typeof statusColors]} bg-opacity-20 border-none text-white font-mono`}
                        >
                          {product.status.toUpperCase()}
                        </Badge>
                        <Badge variant="outline" className="text-xs bg-emerald-500/10 text-emerald-400 border-emerald-500/30 font-mono">
                          {product.monthlyGrowth}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl mb-2 group-hover:text-blue-400 transition-colors font-mono">
                      {product.name}
                    </CardTitle>
                    <Badge variant="secondary" className="w-fit mb-3 bg-blue-900/30 text-blue-300 border-blue-500/30 font-mono">
                      {product.category}
                    </Badge>
                    <CardDescription className="text-sm leading-relaxed text-gray-300 font-mono">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-1 space-y-4">
                    {/* User Satisfaction */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm font-mono">
                        <span className="text-blue-400">User Satisfaction:</span>
                        <span className="text-white">{product.satisfaction}</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${product.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: product.satisfaction }}
                          transition={{ duration: 1.5, delay: index * 0.2 }}
                        />
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {product.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs bg-slate-800/30 text-gray-300 border-gray-600/30 font-mono">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-3 pt-2 border-t border-gray-700/30">
                      {Object.entries(product.dataPoints).slice(0, 4).map(([key, value], metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className={`text-sm font-bold bg-gradient-to-r ${product.color} bg-clip-text text-transparent font-mono`}>
                            {value}
                          </div>
                          <div className="text-xs text-gray-500 font-mono capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* User Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-400 pt-2 border-t border-gray-700/30 font-mono">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3 text-blue-400" />
                          {product.activeUsers}
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="h-3 w-3 text-emerald-400" />
                          {product.monthlyGrowth}
                        </span>
                      </div>
                      <span className="text-cyan-400">{product.pricing}</span>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex justify-between items-center pt-4">
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setSelectedProduct(product.id)}
                        className="text-xs border-blue-500/50 text-blue-300 hover:bg-blue-500/10 font-mono"
                      >
                        <Eye className="mr-1 h-3 w-3" />
                        Demo
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs border-purple-500/50 text-purple-300 hover:bg-purple-500/10 font-mono">
                        <Play className="mr-1 h-3 w-3" />
                        Try Free
                      </Button>
                    </div>
                    <div className="text-xs text-gray-500 font-mono">
                      {product.version}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* SDK/API Preview */}
        {selectedProd && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <Card className="bg-slate-900/90 backdrop-blur-xl border border-blue-500/30 shadow-2xl shadow-blue-500/20 overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between bg-slate-800/50 border-b border-blue-500/30">
                <div>
                  {selectedProd && (() => {
                    const Icon = selectedProd.icon;
                    return (
                      <CardTitle className="flex items-center gap-2 font-mono">
                        <Icon className="h-5 w-5 text-blue-400" />
                        <span className="text-blue-400">SDK Integration:</span> {selectedProd.name}
                      </CardTitle>
                    );
                  })()}
                  <CardDescription className="font-mono">
                    Status: {selectedProd.status.toUpperCase()} | Users: {selectedProd.activeUsers} | Satisfaction: {selectedProd.satisfaction}
                  </CardDescription>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setSelectedProduct(null)}
                  className="border-red-500/50 text-red-300 hover:bg-red-500/10 font-mono"
                >
                  Close
                </Button>
              </CardHeader>
              <CardContent className="p-6">
                <div className="bg-slate-950/80 rounded-lg p-6 border border-blue-500/20 text-sm relative overflow-hidden">
                  <pre className="text-gray-300 leading-relaxed whitespace-pre-wrap relative z-10 font-mono">
                    {selectedProd.codeExample.split('\n').map((line, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="flex"
                      >
                        <span className="text-gray-600 mr-4 select-none w-6 text-right">
                          {index + 1}
                        </span>
                        <span className="text-sm">{line}</span>
                      </motion.div>
                    ))}
                  </pre>
                </div>
                <div className="flex gap-3 mt-6">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-mono">
                    <Play className="mr-2 h-4 w-4" />
                    Try Live Demo
                  </Button>
                  <Button variant="outline" className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 font-mono">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    API Documentation
                  </Button>
                  <Button variant="outline" className="border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/10 font-mono">
                    <Download className="mr-2 h-4 w-4" />
                    SDK Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
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
                Ready to Transform Your Business?
              </span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto font-mono">
              <span className="text-blue-400 text-xl">{">"}</span> Join{" "}
              <span className="text-purple-400 font-bold">15,000+ users</span> who trust our{" "}
              <span className="text-cyan-400 font-bold">SaaS products</span> to{" "}
              <span className="text-emerald-400 font-bold">scale their operations</span> and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 font-mono">
                  <Rocket className="mr-2 h-5 w-5" />
                  Start Free Trial
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 font-mono">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Schedule Demo
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}