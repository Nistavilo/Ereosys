'use client'
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import { Heart, Github, Twitter, Linkedin, Layers, Users } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "text-gray-400 hover:text-white"
    },
    {
      icon: Twitter,
      label: "Twitter", 
      href: "#",
      color: "text-gray-400 hover:text-cyan-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#", 
      color: "text-gray-400 hover:text-blue-400"
    }
  ];

  const footerLinks = {
    products: ["EreoCRM", "EreoAnalytics", "EreoCloud"],
    company: ["About", "Careers", "Contact"],
    support: ["Documentation", "API", "Help Center"]
  };

  return (
    <footer className="relative bg-slate-950 border-t border-blue-500/20">
      {/* Simple background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950/10" />
      
      <div className="container mx-auto px-6 py-12 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 pb-8 border-b border-gray-800">
          {/* Brand */}
          <motion.div 
            className="flex items-center gap-3 mb-4 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
              <Layers className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-mono">EREOSYS</h3>
              <p className="text-xs text-gray-400 font-mono">SaaS Products</p>
            </div>
          </motion.div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Products */}
          <div>
            <h4 className="text-sm font-medium text-blue-400 mb-3 font-mono">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors font-mono">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-medium text-purple-400 mb-3 font-mono">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors font-mono">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-medium text-cyan-400 mb-3 font-mono">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors font-mono">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-medium text-emerald-400 mb-3 font-mono">Follow</h4>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`p-2 rounded-lg bg-slate-800/50 border border-gray-700/50 hover:border-blue-500/50 transition-all ${social.color}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-gray-800 text-sm text-gray-400">
          <div className="flex items-center gap-1 mb-2 md:mb-0 font-mono">
            Built with <Heart className="h-4 w-4 text-pink-500" /> by EREOSYS team
          </div>
          
          <div className="flex items-center gap-4 font-mono">
            <span>© 2025 EREOSYS</span>
            <span className="text-xs">2025-08-23 13:26:26 UTC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}