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
  Users,
  BookOpen,
  Terminal,
  Cpu,
  Shield,
  Coffee,
  Mail,
  Crown,
  LogIn
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

  const packages = [
    { 
      name: "lupus-ui", 
      downloads: "15.3K", 
      description: "Modern React components",
      color: "from-purple-500 to-pink-500",
      icon: Terminal,
      status: "Free"
    },
    { 
      name: "lupus-hooks", 
      downloads: "8.7K", 
      description: "Powerful React hooks",
      color: "from-cyan-500 to-blue-500",
      icon: Cpu,
      status: "Free"
    },
    { 
      name: "lupus-utils", 
      downloads: "12.1K", 
      description: "JavaScript utilities",
      color: "from-green-500 to-emerald-500",
      icon: Shield,
      status: "Free"
    }
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-background/80 backdrop-blur-xl border-b border-purple-500/20 shadow-lg shadow-purple-500/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          {/* Logo + Başlık */}
          <motion.div 
            className="flex items-center space-x-4 group cursor-pointer pl-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 blur-sm opacity-75 group-hover:opacity-100 transition-opacity"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <img
                src="logo.png"
                alt="LuvianTech"
                className="relative z-10 h-12 w-12 rounded-full"
              />
            </div>

            <div>
              <h1 className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent text-xl font-bold">
                LuvianTech
              </h1>
            </div>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('packages')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-sm text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-1">
                <ChevronDown className="h-4 w-4" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'packages' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-xl border border-purple-500/30 rounded-lg shadow-2xl shadow-purple-500/20 p-6 neon-glow"
                  >
                    <div className="space-y-4">
                      {packages.map((pkg) => {
                        const IconComponent = pkg.icon;
                        return (
                          <motion.div 
                            key={pkg.name} 
                            className="group flex items-center justify-between p-3 hover:bg-slate-800/50 rounded-lg cursor-pointer transition-all duration-300 border border-transparent hover:border-purple-500/30"
                            whileHover={{ x: 5, scale: 1.02 }}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-lg bg-gradient-to-r ${pkg.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all`}>
                                <IconComponent className="h-4 w-4 text-white" />
                              </div>
                              <div>
                                <div className="font-medium text-sm text-white flex items-center gap-2">
                                  {pkg.name}
                                  <Badge variant="outline" className="text-xs bg-green-900/30 text-green-400 border-green-500/30">
                                    {pkg.status}
                                  </Badge>
                                </div>
                                <div className="text-xs text-gray-400">{pkg.description}</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-cyan-400">
                              <Download className="h-3 w-3" />
                              {pkg.downloads}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                    <div className="border-t border-purple-500/30 mt-4 pt-4">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white">
                        <Package className="mr-2 h-4 w-4" />
                        Explore All Libraries
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <a href="#docs" className="text-sm text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              Documentation
            </a>
            <a href="#projects" className="text-sm text-gray-300 hover:text-green-400 transition-colors flex items-center gap-1">
              <Code2 className="h-4 w-4" />
              Projects
            </a>
            <a href="#contact" className="text-sm text-gray-300 hover:text-orange-400 transition-colors flex items-center gap-1">
              <Mail className="h-4 w-4" />
              Contact
            </a>
            
            <div className="flex items-center space-x-3">
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(139, 92, 246, 0.3)",
                    "0 0 30px rgba(6, 182, 212, 0.4)",
                    "0 0 20px rgba(139, 92, 246, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Badge variant="secondary" className="text-xs bg-gradient-to-r from-purple-900 to-cyan-900 text-cyan-300 border-cyan-500/30">
                  <Star className="mr-1 h-3 w-3" />
                  Premium
                </Badge>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="sm" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:text-purple-200">
                  <Coffee className="mr-2 h-4 w-4" />
                  Support
                </Button>
              </motion.div>

              {/* Sign In butonu */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="sm" 
                  className="relative overflow-hidden bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 
                             hover:from-cyan-700 hover:via-purple-700 hover:to-pink-700 
                             text-white shadow-lg shadow-purple-500/25 px-5 rounded-2xl"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <LogIn className="h-4 w-4" />
                    Sign In
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-30 blur-xl"
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="sm" className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 text-white shadow-lg shadow-purple-500/25">
                  Get Started
                  <Zap className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-purple-300 hover:text-purple-100 hover:bg-purple-500/10"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed top-16 right-0 h-[calc(100vh-4rem)] w-80 bg-slate-900/95 backdrop-blur-xl border-l border-purple-500/30 z-40 md:hidden shadow-2xl shadow-purple-500/20"
          >
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-cyan-400">Premium Libraries:</h3>
                {packages.map((pkg) => {
                  const IconComponent = pkg.icon;
                  return (
                    <motion.div 
                      key={pkg.name} 
                      className="p-3 bg-slate-800/30 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${pkg.color} bg-opacity-20`}>
                          <IconComponent className="h-4 w-4 text-white" />
                        </div>
                        <div className="font-medium text-sm text-white">{pkg.name}</div>
                      </div>
                      <div className="text-xs text-gray-400">{pkg.description}</div>
                    </motion.div>
                  );
                })}
              </div>
              
              <div className="space-y-3">
                <Button variant="outline" className="w-full border-purple-500/50 text-purple-300 hover:bg-purple-500/10">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white">
                  Get Started
                  <Zap className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Spacer for fixed nav */}
      <div className="h-16" />
    </>
  );
}
