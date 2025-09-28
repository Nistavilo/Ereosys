
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Rocket, ExternalLink } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Boş ürün listesi (sonradan doldurabilirsin)
const saasProducts: any[] = [];

export function ProductsSection() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Kategori barı ve filtrelerin hepsini kaldırdım, sadece ürün eklenirse açılır.
  // Boş state için gösterilecek alan:
  const isEmpty = !saasProducts || saasProducts.length === 0;

  return (
    <section
      id="products"
      className="py-24 px-4 bg-gradient-to-br from-slate-950 via-blue-950/10 to-slate-950 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-8 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 30%),
              radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.12) 0%, transparent 30%),
              linear-gradient(45deg, transparent 48%, rgba(6, 182, 212, 0.08) 50%, transparent 52%)
            `,
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <Badge
            variant="secondary"
            className="mb-6 bg-gradient-to-r from-blue-900/60 to-purple-900/60 text-blue-300 border-blue-500/30 text-sm backdrop-blur-sm font-mono"
          >
            <Rocket className="mr-2 h-4 w-4" />
            SaaS Product Suite
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 font-mono">
            <motion.span
              className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
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

        {/* Placeholder if no products */}
        {isEmpty && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center justify-center min-h-[300px] bg-slate-900/60 backdrop-blur-xl rounded-xl border border-blue-500/30 p-16"
          >
            <div className="flex flex-col items-center gap-4">
              <Rocket className="h-12 w-12 text-blue-400" />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-mono mb-2">
                Product suite coming soon!
              </h3>
              <p className="text-gray-300 max-w-md font-mono text-center mb-4">
                We are building next-generation SaaS products for business management, analytics, cloud infrastructure, security, and automation.
                <br />
                <span className="text-blue-400">Stay tuned!</span>
              </p>
              <div className="flex gap-4">
    
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 font-mono"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}