'use client'
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Package, 
  Code2, 
  Star, 
  Download,
  Menu,
  X,
  ChevronDown,
  Zap,
  BookOpen,
  Building2,
  Shield,
  Users,
  Mail,
  Database,
  Cloud,
  Layers,
  Rocket,
  Globe
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ourProducts = [

    { 
      name: "OsysAnalytics", 
      users: "O+", 
      description: "Advanced business intelligence", 
      color: "from-cyan-500 to-blue-500", 
      icon: Database, 
      status: "Live" 
    },
  ]

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-950/90 backdrop-blur-xl border-b border-blue-500/20 shadow-lg shadow-blue-500/10' 
            : 'bg-transparent'
        }`}
      >
        {/* Desktop Navbar */}
        <div className="hidden md:flex h-16 items-center justify-between px-60">
          {/* Sol kısım → Logo + Linkler */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
              <motion.div 
                className="flex items-center space-x-3 group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity"
                    animate={{ 
                      boxShadow: [
                        "0 0 20px rgba(59, 130, 246, 0.3)",
                        "0 0 30px rgba(139, 92, 246, 0.5)",
                        "0 0 20px rgba(59, 130, 246, 0.3)"
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <div className="relative z-10 h-10 w-10 rounded-lg overflow-hidden flex items-center justify-center bg-transparent">
                    <img src="/logo3.png" alt="Logo" className="h-full w-full object-contain" />
                  </div>
                </div>
                <h1 className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent text-xl font-bold font-mono">
                  EREOSYS
                </h1>
              </motion.div>


            {/* Menü linkleri */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-sm text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-1 font-mono">
                Products
                <ChevronDown className="h-4 w-4" />
              </button>
              {/* Our SaaS Products Dropdown */}
              <AnimatePresence>
                {activeDropdown === 'products' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-xl border border-blue-500/30 rounded-xl shadow-2xl shadow-blue-500/20 p-6"
                  >
                    <div className="space-y-4">
                      <div className="text-xs text-gray-400 font-mono mb-3">OUR SAAS PRODUCTS</div>
                      {ourProducts.map((product) => {
                        const IconComponent = product.icon;
                        return (
                          <motion.div 
                            key={product.name} 
                            className="group flex items-center justify-between p-3 hover:bg-slate-800/50 rounded-lg cursor-pointer transition-all duration-300 border border-transparent hover:border-blue-500/30"
                            whileHover={{ x: 5, scale: 1.02 }}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-lg bg-gradient-to-r ${product.color} bg-opacity-20 group-hover:bg-opacity-30`}>
                                <IconComponent className="h-4 w-4 text-white" />
                              </div>
                              <div>
                                <div className="font-medium text-sm text-white flex items-center gap-2 font-mono">
                                  {product.name}
                                  <Badge variant="outline" className={`text-xs ${
                                    product.status === 'Live' 
                                      ? 'bg-emerald-900/30 text-emerald-400 border-emerald-500/30' 
                                      : 'bg-orange-900/30 text-orange-400 border-orange-500/30'
                                  }`}>
                                    {product.status}
                                  </Badge>
                                </div>
                                <div className="text-xs text-gray-400">{product.description}</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-cyan-400 font-mono">
                              <Users className="h-3 w-3" />
                              {product.users}
                            </div>
                          </motion.div>
                        );
                      })}
                      <div className="pt-3 border-t border-slate-700/50">
                        <motion.button 
                          className="w-full text-left text-xs text-blue-400 hover:text-blue-300 font-mono flex items-center gap-2"
                          whileHover={{ x: 2 }}
                        >
                          <Rocket className="h-3 w-3" />
                          View All Products →
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#about" className="text-sm text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-1 font-mono">
              <Star className="h-4 w-4" />
              About
            </a>

            <a href="#contact" className="text-sm text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-1 font-mono">
              <Mail className="h-4 w-4" />
              Contact
            </a>

          </div>

          {/* Sağ kısım → Status + Butonlar */}
          <div className="flex items-center space-x-3">
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(34, 197, 94, 0.3)",
                  "0 0 30px rgba(34, 197, 94, 0.5)",
                  "0 0 20px rgba(34, 197, 94, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
            </motion.div>

            {/* Login kaldırıldı */}

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25 font-mono">
                Try Free
                <Zap className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex md:hidden h-16 items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <Layers className="h-5 w-5 text-white" />
            </div>
            <span className="text-white font-bold font-mono">EREOSYS</span>
          </div>

          {/* Menü Butonu */}
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-blue-300 hover:text-blue-100 hover:bg-blue-500/10"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menü */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-16 left-0 w-full bg-slate-950/95 backdrop-blur-xl border-t border-blue-500/30 shadow-lg"
            >
              <div className="flex flex-col p-6 space-y-4">
                <a href="#products" className="text-gray-300 hover:text-blue-400 text-sm font-mono">Our Products</a>
                <a href="#about" className="text-gray-300 hover:text-purple-400 text-sm font-mono">About</a>
                <a href="#contact" className="text-gray-300 hover:text-emerald-400 text-sm font-mono">Contact</a>

                <hr className="border-blue-500/30"/>

                <div className="flex flex-col gap-3">
                  <Badge className="w-fit bg-gradient-to-r from-emerald-900/60 to-green-900/60 text-emerald-300 border-emerald-500/30 font-mono">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse" />
                    All Systems Operational
                  </Badge>

                  {/* Login kaldırıldı */}

                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg font-mono">
                    Try Free
                    <Zap className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <div className="h-16" />
    </>
  );
}