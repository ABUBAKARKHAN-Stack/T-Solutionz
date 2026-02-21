import {
  Code2, Cloud, Brain, Shield, Users, Zap, Lightbulb, Globe, Target, Eye, Heart, Award, Clock, HeartHandshake, Sparkles, Search, Rocket
} from "lucide-react";


// ── Partners ────────────────────────────────────────────────

// ── Stats (About Preview) ───────────────────────────────────


// ── About Page ──────────────────────────────────────────────
export const values = [
  { icon: Target, title: "Purpose-Driven", description: "Every decision we make is guided by our commitment to sustainable growth and positive impact." },
  { icon: Eye, title: "Transparency", description: "We believe in open communication and honest partnerships with every client we serve." },
  { icon: Heart, title: "Integrity", description: "We hold ourselves to the highest ethical standards in everything we do." },
  { icon: Award, title: "Excellence", description: "We strive for exceptional results through innovation, expertise, and dedication." },
];

export const team = [
  { name: "Alexandra Reed", role: "Founder & CEO", initials: "AR" },
  { name: "Marcus Johnson", role: "Head of Strategy", initials: "MJ" },
  { name: "Priya Sharma", role: "Director of Operations", initials: "PS" },
  { name: "David Kim", role: "Lead Consultant", initials: "DK" },
];

// ── Approach ────────────────────────────────────────────────
export const approachSteps = [
  { num: "01", icon: Search, title: "Discover", description: "We analyze your requirements, tech stack, and business goals to define the perfect solution." },
  { num: "02", icon: Lightbulb, title: "Architect", description: "Our engineers design scalable architectures with clear milestones and technology choices." },
  { num: "03", icon: Rocket, title: "Build & Ship", description: "We develop iteratively with CI/CD, keeping you in the loop with demos every sprint." },
  { num: "04", icon: Zap, title: "Scale & Optimize", description: "Continuous monitoring, performance tuning, and feature iteration ensure long-term success." },
];

// ── Why Choose Us ───────────────────────────────────────────
export const whyChooseUsReasons = [
  { icon: Award, title: "Industry Experts", description: "Our team brings decades of combined experience across multiple industries." },
  { icon: Target, title: "Results-Driven", description: "Every engagement is designed around measurable outcomes and KPIs." },
  { icon: HeartHandshake, title: "True Partnership", description: "We work alongside your team, not in isolation — your success is ours." },
  { icon: Clock, title: "Agile Delivery", description: "Fast, iterative execution so you see value from day one." },
  { icon: Shield, title: "Trusted & Transparent", description: "No hidden agendas. Full visibility into progress, costs, and decisions." },
  { icon: Sparkles, title: "Innovation-First", description: "We leverage the latest tools and methodologies to keep you ahead." },
];

// ── Testimonials ────────────────────────────────────────────
export const testimonials = [
  { quote: "T-Solutions brought a fresh perspective to our sustainability roadmap. Their energy and dedication were exactly what our team needed.", name: "Sarah Mitchell", role: "Founder, EcoSphere" },
  { quote: "Working with a young, hungry team made all the difference. They treated our project like their own and delivered beyond expectations.", name: "James Chen", role: "CTO, TechVault" },
  { quote: "Their strategic framework helped us find clarity during a pivotal growth phase. Highly recommend for any startup or scaling business.", name: "Elena Rodriguez", role: "Director, NovaBridge" },
  { quote: "What they lack in decades, they make up for in insight and hustle. T-Solutions is the real deal.", name: "Marcus Liu", role: "Co-founder, PeakPoint" },
  { quote: "They challenged our assumptions in the best way possible. A truly collaborative experience from start to finish.", name: "Aisha Patel", role: "CEO, Horizon Inc" },
];

// ── FAQ ─────────────────────────────────────────────────────
export const faqs = [
  { q: "What industries do you specialize in?", a: "We work across technology, finance, healthcare, energy, and consumer goods. Our frameworks are adaptable to any sector, and we tailor every engagement to your specific market dynamics." },
  { q: "How long does a typical engagement last?", a: "Most projects range from 4 to 16 weeks depending on scope. We start with a discovery phase and provide a clear timeline before any commitment." },
  { q: "Do you work with startups or only enterprises?", a: "Both. We've helped early-stage startups define their go-to-market strategy and guided Fortune 500 companies through digital transformation. Our approach scales to fit your stage." },
  { q: "What makes your sustainability audits different?", a: "We go beyond compliance checklists. Our audits combine environmental impact data with actionable business strategies, ensuring sustainability efforts also drive profitability." },
  { q: "How do you measure success?", a: "Every project begins with defined KPIs. We track progress through regular check-ins, dashboards, and a final impact report so results are always transparent and measurable." },
  { q: "Can we start with a small pilot project?", a: "Absolutely. Many clients start with a focused engagement to experience our approach firsthand before expanding into larger initiatives." },
];

// ── Case Studies (Portfolio) ────────────────────────────────
export const caseStudies = [
  { title: "EcoSphere Sustainability Overhaul", slug: "ecosphere-sustainability", category: "Sustainability", client: "EcoSphere", industry: "Clean Energy", duration: "12 weeks", description: "Reduced carbon emissions by 35% while cutting operational costs through a comprehensive sustainability audit.", longDescription: "EcoSphere, a mid-size clean energy company, approached us to overhaul their sustainability practices across manufacturing and distribution. Our team conducted a full lifecycle carbon analysis, identified 12 key emission reduction opportunities, and implemented a phased green strategy. The result was a 35% reduction in carbon emissions within the first year — alongside a 15% decrease in operational costs through energy optimization and waste reduction.", result: "35% emission reduction", results: ["35% carbon emission reduction", "15% operational cost savings", "$2.1M annual energy savings", "GRI-compliant ESG reporting"], before: 'assets/case-ecosphere-before.jpg', after: 'assets/case-ecosphere.jpg' },
  { title: "TechVault Digital Transformation", slug: "techvault-digital", category: "Digital", client: "TechVault", industry: "Enterprise Software", duration: "16 weeks", description: "Modernized legacy systems and boosted team productivity with AI-powered workflows.", longDescription: "TechVault's engineering team was bottlenecked by legacy infrastructure and manual processes. We mapped their entire technology stack, identified automation opportunities, and designed a cloud migration strategy. Over 16 weeks, we migrated critical systems to a modern cloud architecture, implemented AI-powered code review and testing pipelines, and trained their team on new workflows — resulting in a 2x productivity increase.", result: "2x productivity increase", results: ["2x team productivity increase", "60% faster deployment cycles", "99.9% system uptime achieved", "40% reduction in tech debt"], before: 'assets/case-techvault-before.jpg', after: 'assets/case-techvault.jpg' },
  { title: "NovaBridge Market Expansion", slug: "novabridge-expansion", category: "Growth", client: "NovaBridge", industry: "Financial Services", duration: "20 weeks", description: "Entered three new international markets within 12 months with a tailored expansion strategy.", longDescription: "NovaBridge, a growing fintech company, wanted to expand beyond their domestic market. We conducted deep market research across 8 potential regions, developed entry strategies for the top 3, and guided their leadership through regulatory compliance, localization, and partnership development. Within 12 months of engagement, NovaBridge successfully launched in three new markets — driving a 40% increase in annual revenue.", result: "40% revenue growth", results: ["40% year-over-year revenue growth", "3 new international markets", "12 strategic partnerships formed", "Regulatory approval in all regions"], before: 'assets/case-novabridge-before.jpg', after: 'assets/case-novabridge.jpg' },
];

// ── Hero badges & mission preview ───────────────────────────
export const heroBadges = [
  { icon: Lightbulb, label: "Fresh Thinking" },
  { icon: Users, label: "Dedicated Team" },
  { icon: Globe, label: "Global Mindset" },
];

export const heroMissionServices = [
  { icon: Code2, label: "Full Stack Development", desc: "End-to-end web apps" },
  { icon: Cloud, label: "Cloud Solutions", desc: "Scalable infrastructure" },
  { icon: Brain, label: "AI & Machine Learning", desc: "Intelligent automation" },
];

// ── About Preview highlights ────────────────────────────────
export const aboutHighlights = [
  { icon: Target, label: "Purpose-Driven" },
  { icon: Users, label: "Dedicated Team" },
  { icon: Globe, label: "Global Impact" },
];

// ── Contact info ────────────────────────────────────────────
export const contactInfo = [
  { icon: "Mail" as const, label: "Email", value: "hello@t-solutions.com" },
  { icon: "Phone" as const, label: "Phone", value: "+1 (555) 123-4567" },
];
