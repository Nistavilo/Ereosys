import {
  Target,
  Eye,
  Heart,
  Users,
  Rocket,
  Shield,
  TrendingUp,
  Database,
  Cloud,
  Code2,
  CheckCircle,
  Star,
  Layers,
  Terminal
} from "lucide-react";
import { CompanyValue, Achievement, MissionVisionValueCard } from "./types";

export const COMPANY_VALUES: CompanyValue[] = [
  {
    icon: Rocket,
    title: "Product Innovation",
    description:
      "Creating next-generation SaaS products that revolutionize how businesses operate, with cutting-edge features and intuitive user experiences.",
    color: "from-blue-500 to-purple-500"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Building SOC 2 compliant products with bank-level security, ensuring our SaaS platforms protect customer data with military-grade encryption.",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description:
      "Designing SaaS products that prioritize user experience, with intuitive interfaces and workflows that increase productivity and satisfaction.",
    color: "from-emerald-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description:
      "Engineering SaaS platforms that scale from startups to enterprises, handling millions of users with consistent performance and reliability.",
    color: "from-purple-500 to-pink-500"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { number: "15K+", label: "Active Users", icon: Users, color: "text-blue-400" },
  { number: "99.9%", label: "Platform Uptime", icon: CheckCircle, color: "text-emerald-400" },
  { number: "5+", label: "SaaS Products", icon: Rocket, color: "text-purple-400" },
  { number: "24/7", label: "Product Support", icon: Star, color: "text-cyan-400" }
];

export const MISSION_VISION_VALUES: MissionVisionValueCard[] = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To create powerful SaaS products that simplify complex business processes, enabling companies to focus on growth while our platforms handle the operational complexity with robust automation, intelligence, and seamless integrations.",
    borderColor: "border-blue-500/30",
    bgColor: "bg-slate-900/80",
    hoverBorder: "hover:border-purple-500/50",
    iconColor: "from-blue-500 to-purple-500",
    iconTextColor: "text-blue-400"
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the leading SaaS ecosystem where businesses discover, integrate, and scale with our suite of products that work seamlessly together to create unified digital experiences across departments and teams.",
    borderColor: "border-purple-500/30",
    bgColor: "bg-slate-900/80",
    hoverBorder: "hover:border-cyan-500/50",
    iconColor: "from-purple-500 to-cyan-500",
    iconTextColor: "text-purple-400"
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "User obsession, product excellence, and continuous innovation drive our SaaS development. We believe in building products that users love, with transparent pricing and world-class support.",
    borderColor: "border-cyan-500/30",
    bgColor: "bg-slate-900/80",
    hoverBorder: "hover:border-emerald-500/50",
    iconColor: "from-cyan-500 to-emerald-500",
    iconTextColor: "text-cyan-400"
  }
];

// Arka plan floating icon'ları – deterministik üretim için base list.
export const FLOATING_BASE_ICONS = [Terminal, Database, Cloud, Code2];

// PRNG seed (env ile özelleştirilebilir)
export const FLOATING_ICONS_SEED =
  parseInt(process.env.NEXT_PUBLIC_ABOUT_BG_SEED || "1337", 10);

// Badge ikonu
export const BADGE_ICON = Layers;