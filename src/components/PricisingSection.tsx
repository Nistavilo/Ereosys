'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from './ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import {
  Rocket,
  Layers,
  Zap,
  Shield,
  CheckCircle2,
  Building2,
  Infinity as InfinityIcon,
  ArrowRight,
  Users,
  Cpu,
  BarChart3,
  Cloud,
  Plug,
  Lock,
  LifeBuoy,
  Crown,
  Sparkles
} from 'lucide-react'

type BillingCycle = 'monthly' | 'yearly'

interface Tier {
  id: string
  name: string
  tagline: string
  icon: any
  gradient: string
  priceMonthly: number
  priceYearly: number
  highlight?: boolean
  badge?: string
  cta: string
  href: string
  features: string[]
  limits: {
    users?: string
    apiCalls?: string
    storage?: string
    support?: string
  }
}

const tiers: Tier[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Launch fast with core features',
    icon: Rocket,
    gradient: 'from-blue-500 to-purple-500',
    priceMonthly: 0,
    priceYearly: 0,
    cta: 'Get Started Free',
    href: '#signup',
    features: [
      'EreoCRM basic pipeline',
      'EreoAnalytics starter dashboards',
      'EreoWorkflow 10 active workflows',
      'Community support'
    ],
    limits: {
      users: 'Up to 3',
      apiCalls: '50K / month',
      storage: '5 GB',
      support: 'Community'
    }
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Scale your SaaS operations',
    icon: Layers,
    gradient: 'from-purple-500 to-cyan-500',
    priceMonthly: 49,
    priceYearly: 39, // per month when billed yearly
    highlight: true,
    badge: 'Popular',
    cta: 'Start Growth',
    href: '#signup',
    features: [
      'Everything in Starter',
      'Advanced CRM automation',
      'Custom analytics models',
      'Workflow versioning',
      'API rate boost x3',
      'Role-based access',
      'Priority ticket queue'
    ],
    limits: {
      users: 'Up to 25',
      apiCalls: '500K / month',
      storage: '100 GB',
      support: 'Priority'
    }
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Full platform + compliance',
    icon: Shield,
    gradient: 'from-cyan-500 to-emerald-500',
    priceMonthly: 149,
    priceYearly: 119,
    badge: 'SOC 2',
    cta: 'Contact Sales',
    href: '#contact',
    features: [
      'Everything in Growth',
      'Dedicated VPC option',
      'Advanced security suite',
      'Custom AI analytics models',
      'Unlimited workflows',
      'SLA 99.95% uptime',
      'Dedicated success manager',
      'Single Sign-On (SAML)',
      'Audit logging & exports'
    ],
    limits: {
      users: 'Unlimited',
      apiCalls: 'Unlimited*',
      storage: '1+ TB',
      support: '24/7 Premium'
    }
  }
]

const featureMatrix: {
  label: string
  tiers: Record<string, boolean | string>
  group?: string
}[] = [
  { group: 'Core Platform', label: 'EreoCRM Pipelines', tiers: { starter: 'Basic', growth: 'Advanced', enterprise: 'Advanced+' } },
  { label: 'EreoAnalytics Dashboards', tiers: { starter: 'Starter', growth: 'Pro', enterprise: 'Enterprise' } },
  { label: 'EreoWorkflow Active Workflows', tiers: { starter: '10', growth: '100', enterprise: 'Unlimited' } },
  { label: 'EreoCloud Deployments', tiers: { starter: 'Shared', growth: 'Optimized', enterprise: 'Isolated' } },
  { group: 'Security & Access', label: 'Role-Based Access Control', tiers: { starter: false, growth: true, enterprise: true } },
  { label: 'SAML / SSO', tiers: { starter: false, growth: false, enterprise: true } },
  { label: 'Audit Logs', tiers: { starter: false, growth: true, enterprise: true } },
  { label: 'Field Level Permissions', tiers: { starter: false, growth: true, enterprise: true } },
  { group: 'Automation & AI', label: 'AI Insight Models', tiers: { starter: 'Basic', growth: 'Extended', enterprise: 'Custom' } },
  { label: 'Workflow Versioning', tiers: { starter: false, growth: true, enterprise: true } },
  { label: 'Custom Predictive Models', tiers: { starter: false, growth: false, enterprise: true } },
  { group: 'Support & SLA', label: 'Support Channel', tiers: { starter: 'Community', growth: 'Priority', enterprise: '24/7' } },
  { label: 'Uptime SLA', tiers: { starter: 'Best Effort', growth: '99.9%', enterprise: '99.95%' } },
  { label: 'Dedicated Success Manager', tiers: { starter: false, growth: false, enterprise: true } }
]

const addons = [
  {
    icon: Cpu,
    title: 'AI Model Training',
    price: '$199 / model',
    description: 'Custom predictive models tuned to your business KPIs.',
    gradient: 'from-purple-500 to-blue-500'
  },
  {
    icon: Plug,
    title: 'Custom Integrations',
    price: 'From $99',
    description: 'We build and maintain mission-critical integrations.',
    gradient: 'from-cyan-500 to-emerald-500'
  },
  {
    icon: Lock,
    title: 'Dedicated VPC',
    price: 'Custom',
    description: 'Isolated infrastructure with network policy control.',
    gradient: 'from-emerald-500 to-blue-500'
  }
]

export function PricingSection() {
  const [billing, setBilling] = useState<BillingCycle>('monthly')
  const [showMatrix, setShowMatrix] = useState(false)

  return (
    <section
      id="pricing"
      className="py-32 px-4 bg-gradient-to-br from-slate-950 via-blue-950/10 to-slate-950 relative overflow-hidden"
    >
      {/* subtle backdrop */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 15% 20%, rgba(59,130,246,0.2) 0%, transparent 50%),
              radial-gradient(circle at 85% 70%, rgba(139,92,246,0.2) 0%, transparent 55%)
            `
          }}
        />
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(59,130,246,0.25)',
                  '0 0 30px rgba(139,92,246,0.35)',
                  '0 0 20px rgba(59,130,246,0.25)'
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-block rounded-full"
            >
              <Badge className="bg-gradient-to-r from-blue-900/60 to-purple-900/60 text-blue-300 border-blue-500/30 backdrop-blur-sm font-mono px-4 py-2">
                <Crown className="h-4 w-4 mr-2 inline-block" />
                Flexible Pricing • Scale as you grow
              </Badge>
            </motion.div>

          <h2 className="font-mono text-5xl md:text-6xl font-bold mt-8 mb-6">
            <span className="text-blue-400">$</span>{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              pricing
            </span>{' '}
            <span className="text-white">--plans</span>
          </h2>
          <p className="text-gray-300 font-mono text-lg leading-relaxed">
            Choose a plan that matches your growth stage. Start free, scale smoothly,
            unlock enterprise capabilities when you need them.
          </p>

          {/* Billing toggle */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className={`font-mono text-sm ${billing === 'monthly' ? 'text-white' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBilling(prev => (prev === 'monthly' ? 'yearly' : 'monthly'))}
              className="relative w-16 h-8 rounded-full bg-slate-800 border border-blue-500/40 flex items-center px-1 transition-colors"
            >
              <motion.div
                layout
                className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow"
                animate={{ x: billing === 'yearly' ? 32 : 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              />
            </button>
            <span className={`font-mono text-sm ${billing === 'yearly' ? 'text-white' : 'text-gray-500'}`}>
              Yearly
            </span>
            <Badge className="bg-emerald-900/30 text-emerald-400 border-emerald-500/30 font-mono">
              Save up to 20%
            </Badge>
          </div>
        </div>

        {/* Tiers */}
        <div className="grid gap-10 md:grid-cols-3 mb-24">
          {tiers.map((tier, idx) => {
            const Icon = tier.icon
            const monthlyPrice = tier.priceMonthly
            const yearlyPrice = tier.priceYearly
            const display = billing === 'monthly' ? monthlyPrice : yearlyPrice
            const isFree = display === 0

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative"
              >
                {tier.highlight && (
                  <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 opacity-70 blur group-hover:opacity-100 transition" />
                )}
                <Card
                  className={`relative h-full flex flex-col bg-slate-900/70 backdrop-blur-xl border ${
                    tier.highlight ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' : 'border-blue-500/20'
                  }`}
                >
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${tier.gradient} bg-opacity-20`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      {tier.badge && (
                        <Badge className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-mono">
                          {tier.badge}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="font-mono text-xl">{tier.name}</CardTitle>
                    <CardDescription className="font-mono text-sm leading-relaxed text-gray-300">
                      {tier.tagline}
                    </CardDescription>
                    <div className="pt-2">
                      <div className="flex items-end gap-1">
                        <span className="font-mono text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                          {isFree ? 'Free' : `$${display}`}
                        </span>
                        {!isFree && (
                          <span className="text-xs font-mono text-gray-500 mb-1">
                            /{billing === 'monthly' ? 'mo' : 'mo (billed yearly)'}
                          </span>
                        )}
                      </div>
                      {billing === 'yearly' && !isFree && (
                        <div className="text-xs font-mono text-emerald-400 mt-1">
                          ${monthlyPrice} monthly → save ${(monthlyPrice * 12) - (yearlyPrice * 12)}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-4 pt-2 text-xs font-mono text-gray-400">
                      {tier.limits.users && (
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {tier.limits.users}
                        </span>
                      )}
                      {tier.limits.apiCalls && (
                        <span className="flex items-center gap-1">
                          <Zap className="h-3 w-3" />
                          {tier.limits.apiCalls}
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5" />
                          <span className="text-sm font-mono text-gray-300 leading-snug">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                      <Button
                        className={`w-full font-mono ${
                          tier.highlight
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                            : 'bg-gradient-to-r from-slate-800 to-slate-700'
                        } text-white`}
                        variant={tier.highlight ? 'default' : 'outline'}
                      >
                        {tier.cta}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                      <p className="text-[11px] text-gray-500 font-mono mt-3">
                        {tier.limits.support} support · {tier.limits.storage} storage
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Feature Matrix Toggle */}
        <div className="text-center mb-20">
          <Button
            variant="outline"
            className="font-mono border-blue-500/40 text-blue-300 hover:bg-blue-500/10"
            onClick={() => setShowMatrix(s => !s)}
          >
            {showMatrix ? 'Hide Detailed Comparison' : 'Show Detailed Comparison'}
          </Button>
        </div>

        <AnimatePresence>
          {showMatrix && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5 }}
              className="mb-28"
            >
              <div className="overflow-x-auto rounded-xl border border-blue-500/20 bg-slate-900/60 backdrop-blur-xl">
                <table className="min-w-full text-sm font-mono">
                  <thead>
                    <tr className="border-b border-blue-500/30">
                      <th className="text-left py-4 px-4 text-gray-400 font-medium">Feature</th>
                      {tiers.map(t => (
                        <th key={t.id} className="py-4 px-4 text-center text-gray-300 font-medium">
                          {t.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {featureMatrix.map((row, i) => (
                      <FragmentRow key={i} row={row} />
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 font-mono mt-4">
                * Fair use applies for unlimited API calls. Enterprise overages and dedicated throughput negotiated via sales.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Add-ons */}
        <div className="mb-28">
          <div className="flex items-center justify-between mb-10 flex-col md:flex-row gap-6">
            <h3 className="text-2xl font-mono font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Platform Add‑Ons
            </h3>
            <Badge className="bg-slate-800/80 border-blue-500/30 text-blue-300 font-mono">
              Optional • Enhance capabilities
            </Badge>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {addons.map((a, i) => {
              const Icon = a.icon
              return (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition rounded-xl blur-sm pointer-events-none"
                       style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                  />
                  <Card className="h-full bg-slate-900/70 border border-blue-500/20 backdrop-blur-xl relative">
                    <CardHeader>
                      <div className={`p-3 rounded-md bg-gradient-to-r ${a.gradient} bg-opacity-20 w-fit mb-4`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="font-mono text-lg">{a.title}</CardTitle>
                      <CardDescription className="font-mono text-sm text-gray-300">
                        {a.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                      <span className="font-mono text-cyan-400 text-sm">{a.price}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="font-mono border-purple-500/40 text-purple-300 hover:bg-purple-500/10"
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl border border-purple-500/30 bg-slate-900/70 backdrop-blur-xl p-10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 opacity-40" />
          <div className="relative z-10 grid md:grid-cols-3 gap-10 items-center">
            <div className="md:col-span-2 space-y-4">
              <Badge className="bg-purple-900/40 text-purple-300 border-purple-500/30 font-mono">
                <Shield className="h-3 w-3 mr-1" /> Enterprise Upgrade
              </Badge>
              <h3 className="text-3xl font-mono font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Need custom compliance, security or scale?
              </h3>
              <p className="text-gray-300 font-mono text-sm leading-relaxed max-w-xl">
                Our enterprise package unlocks dedicated infrastructure isolation, advanced security layers,
                audit & compliance tooling, and guaranteed response times. Talk to us about custom data residency,
                throughput guarantees, or migration planning.
              </p>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2 font-mono text-xs text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  SOC 2 / ISO 27001 Ready
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Data Residency Options
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Premium SLA
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Dedicated Success
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-mono h-12">
                Contact Sales
              </Button>
              <Button
                variant="outline"
                className="w-full h-12 font-mono border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10"
              >
                Download Enterprise Brief
              </Button>
              <p className="text-[11px] text-gray-500 font-mono">
                Typical response under 12 hours (business days).
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* Helper row component for matrix table */
function FragmentRow({ row }: { row: { label: string; tiers: Record<string, boolean | string>; group?: string } }) {
  return (
    <>
      {row.group && (
        <tr className="bg-slate-800/60 border-t border-blue-500/30">
          <td colSpan={4} className="py-3 px-4 text-xs font-mono text-blue-300 tracking-wide">
            {row.group}
          </td>
        </tr>
      )}
      <tr className="border-t border-slate-800/60 hover:bg-slate-800/30 transition">
        <td className="py-3 px-4 text-gray-300 font-mono text-xs md:text-sm">{row.label}</td>
        {['starter', 'growth', 'enterprise'].map(t => {
          const val = row.tiers[t]
          const isBool = typeof val === 'boolean'
          return (
            <td
              key={t}
              className="py-3 px-4 text-center font-mono text-xs md:text-sm text-gray-300"
            >
              {isBool ? (
                val ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 inline" />
                ) : (
                  <span className="text-gray-600">—</span>
                )
              ) : (
                <span
                  className={`${
                    typeof val === 'string' && val.toLowerCase().includes('unlimited')
                      ? 'text-emerald-400'
                      : 'text-gray-200'
                  }`}
                >
                  {val}
                </span>
              )}
            </td>
          )
        })}
      </tr>
    </>
  )
}