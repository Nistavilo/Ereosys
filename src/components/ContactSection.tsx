'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  Globe,
  Github,
  Twitter,
  Linkedin,
  Headphones,
  Zap,
  Users,
  Building,
  Calendar,
  CheckCircle,
  Star,
  Heart,
  Rocket,
  Terminal,
  Database,
  Cloud,
  Shield,
  Settings
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const contactMethods = [
  {
    icon: Mail,
    title: "General Inquiries",
    description: "Questions about our SaaS products and services",
    contact: "hello@ereosys.com",
    color: "from-blue-500 to-purple-500",
    action: "Send Email"
  },
  {
    icon: Building,
    title: "Enterprise Sales",
    description: "Custom solutions and enterprise licensing",
    contact: "enterprise@ereosys.com",
    color: "from-purple-500 to-cyan-500",
    action: "Contact Sales"
  },
  {
    icon: Headphones,
    title: "Product Support",
    description: "Technical support for all EREOSYS products",
    contact: "support@ereosys.com",
    color: "from-emerald-500 to-cyan-500",
    action: "Get Support"
  }
];

const companyInfo = [
  { icon: MapPin, label: "Headquarters", value: "Istanbul, Turkey" },
  { icon: Clock, label: "Business Hours", value: "09:00 - 18:00 GMT+3" },
  { icon: Globe, label: "Global Reach", value: "Worldwide SaaS Delivery" },
  { icon: Users, label: "Active Users", value: "15,000+" }
];

const socialLinks = [
  { icon: Github, label: "GitHub", color: "text-gray-400", href: "#" },
  { icon: Twitter, label: "Twitter", color: "text-blue-400", href: "#" },
  { icon: Linkedin, label: "LinkedIn", color: "text-blue-600", href: "#" }
];

const productSupport = [
  { name: "EreoCRM", icon: Building, users: "2.5K+", status: "Live" },
  { name: "EreoAnalytics", icon: Database, users: "1.8K+", status: "Live" },
  { name: "EreoCloud", icon: Cloud, users: "3.2K+", status: "Beta" },
  { name: "EreoSecurity", icon: Shield, users: "950+", status: "Live" },
  { name: "EreoWorkflow", icon: Settings, users: "1.2K+", status: "Live" }
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        product: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 bg-gradient-to-br from-slate-950 via-blue-950/10 to-slate-950 relative overflow-hidden"
      ref={ref}
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-8">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 35%),
              radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.12) 0%, transparent 35%),
              linear-gradient(135deg, transparent 48%, rgba(6, 182, 212, 0.08) 50%, transparent 52%)
            `,
          }}
        />
      </div>

      {/* Floating product icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[Terminal, Database, Cloud, Shield, Settings].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute opacity-5"
            style={{
              left: `${10 + i * 20}%`,
              top: `${15 + (i % 3) * 25}%`
            }}
            animate={{
              y: [-15, -30, -15],
              x: [-8, 8, -8],
              rotate: [0, 180, 360],
              opacity: [0.05, 0.1, 0.05]
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
                "0 0 30px rgba(59, 130, 246, 0.3)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Badge
              variant="secondary"
              className="mb-6 bg-gradient-to-r from-blue-900/60 to-purple-900/60 text-blue-300 border-blue-500/30 text-sm backdrop-blur-sm font-mono"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Get in Touch • 24/7 Support Available
            </Badge>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 font-mono">
            <motion.span
              className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "300% 300%" }}
            >
              Contact EREOSYS
            </motion.span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-mono">
            <span className="text-blue-400 text-2xl">{">"}</span> Need help with our{" "}
            <span className="text-purple-400 font-bold">SaaS products</span>? Want{" "}
            <span className="text-cyan-400 font-bold">enterprise solutions</span>? Or ready to{" "}
            <span className="text-emerald-400 font-bold">scale your business</span>? Let's talk.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-slate-900/80 backdrop-blur-xl border border-blue-500/30 shadow-2xl shadow-blue-500/10 overflow-hidden">
              <CardHeader className="border-b border-blue-500/30 bg-slate-800/50">
                <CardTitle className="flex items-center gap-2 font-mono">
                  <Send className="h-5 w-5 text-blue-400" />
                  <span className="text-blue-400">Send Message</span>
                </CardTitle>
                <CardDescription className="font-mono">
                  Tell us about your project or SaaS requirements
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="mb-4"
                    >
                      <CheckCircle className="h-16 w-16 text-emerald-400 mx-auto" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-emerald-400 mb-2 font-mono">Message Sent!</h3>
                    <p className="text-gray-300 font-mono">
                      Our team will respond within 24 hours. Check your email for confirmation.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">Name *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-slate-800/50 border-blue-500/30 text-white placeholder:text-gray-500 focus:border-purple-500/50 font-mono"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">Email *</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-slate-800/50 border-blue-500/30 text-white placeholder:text-gray-500 focus:border-purple-500/50 font-mono"
                          placeholder="your@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">Company</label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="bg-slate-800/50 border-blue-500/30 text-white placeholder:text-gray-500 focus:border-purple-500/50 font-mono"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">Product Interest</label>
                        <select
                          name="product"
                          value={formData.product}
                          onChange={handleInputChange}
                          className="w-full bg-slate-800/50 border border-blue-500/30 rounded-md px-3 py-2 text-white font-mono focus:border-purple-500/50 focus:outline-none"
                        >
                          <option value="">Select a product</option>
                          <option value="EreoCRM">EreoCRM - Customer Management</option>
                          <option value="EreoAnalytics">EreoAnalytics - Business Intelligence</option>
                          <option value="EreoCloud">EreoCloud - Cloud Infrastructure</option>
                          <option value="EreoSecurity">EreoSecurity - Security Platform</option>
                          <option value="EreoWorkflow">EreoWorkflow - Process Automation</option>
                          <option value="Enterprise">Enterprise - Custom Solutions</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">Subject *</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-800/50 border-blue-500/30 text-white placeholder:text-gray-500 focus:border-purple-500/50 font-mono"
                        placeholder="What can we help you with?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">Message *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="bg-slate-800/50 border-blue-500/30 text-white placeholder:text-gray-500 focus:border-purple-500/50 resize-none font-mono"
                        placeholder="Tell us about your project, requirements, or questions about our SaaS products..."
                      />
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg disabled:opacity-50 font-mono"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="mr-2"
                            >
                              <Zap className="h-4 w-4" />
                            </motion.div>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Methods & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <motion.div
                    key={index}
                    className="relative p-6 rounded-xl bg-slate-800/30 border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 group"
                    whileHover={{ scale: 1.02, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-5 group-hover:opacity-10 transition-opacity rounded-xl`}
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{ duration: 8, repeat: Infinity }}
                      style={{ backgroundSize: "200% 200%" }}
                    />

                    <div className="relative z-10 flex items-start gap-4">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-r ${method.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all`}
                      >
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white mb-2 font-mono">{method.title}</h4>
                        <p className="text-sm text-gray-400 mb-3 font-mono">{method.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-cyan-400 font-mono">{method.contact}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-xs border-blue-500/50 text-blue-300 hover:bg-blue-500/10 font-mono"
                          >
                            {method.action}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}