"use client"

import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import MagneticButton from "@/components/shared/MagneticButton";
import { Button } from "@/components/ui/button";
import { aboutHighlights } from "@/constants";
import { stats,} from '@/data/shared.data'
import Link from "next/link";
import Image from "next/image";
import { ContainerLayout } from "../../layout";
import { HighlightedBrandName } from "@/components/shared";

const TickerNumber = ({ value, suffix, delay }: { value: number; suffix: string; delay: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => {
      const duration = 1500;
      const steps = 60;
      let step = 0;
      const interval = setInterval(() => {
        step++;
        const progress = 1 - Math.pow(1 - step / steps, 3);
        if (step >= steps) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(Math.floor(value * progress));
        }
      }, duration / steps);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [inView, value, delay]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const AboutPreviewSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">

      <div className="absolute bottom-0 left-0 w-125 h-125 bg-accent/5 rounded-full blur-[150px]" />

      <ContainerLayout className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — text content */}
          <AnimatedSection direction="left">
            <p className="text-xs font-medium text-accent uppercase tracking-[0.3em] mb-4">About Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Strategy meets <span className="text-accent italic">purpose</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed font-light mb-4">
              Founded with a vision to build meaningful digital experiences, <HighlightedBrandName animate={false} /> {" "}
              combines strategic thinking with modern technology. We help startups and
              growing businesses scale through smart, reliable, and performance-driven
              solutions.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed font-light mb-8">
              Our multidisciplinary team blends strategy, design,
              and development to create systems that are scalable, efficient, and built
              for long-term growth. We focus on delivering real-world impact, not just
              ideas.
            </p>

            {/* Highlights row */}
            <div className="flex items-center gap-6 mb-8">
              {aboutHighlights.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <item.icon className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <span className="text-xs font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>

            <MagneticButton>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-border text-foreground hover:bg-accent/10 text-sm px-6 h-10 font-medium"
              >
                <Link href="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </MagneticButton>
          </AnimatedSection>

          {/* Right — image + overlaid stats */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative">
              {/* Main image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={'/assets/about-preview.jpg'}
                  alt="T-Solutions team collaborating in a modern office"
                  className="w-full h-125 object-cover"
                  width={500}
                  height={500}
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-foreground/30 via-transparent to-transparent" />
              </div>

              {/* Floating stats overlay */}
              <div className="absolute -bottom-6 left-4 right-4 grid grid-cols-2 gap-3">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="bg-card/80 backdrop-blur-xl border border-border/30 rounded-xl px-4 py-3 text-center group hover:border-accent/30 transition-all duration-500"
                    style={{ willChange: "backdrop-filter" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  >
                    <p className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-500 tabular-nums">
                      <TickerNumber value={stat.val} suffix={stat.suffix} delay={0.3 + i * 0.1} />
                    </p>
                    <p className="text-[9px] text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default AboutPreviewSection;
