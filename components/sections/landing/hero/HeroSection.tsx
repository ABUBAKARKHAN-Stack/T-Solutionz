"use client"

import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";
import { ContainerLayout } from "@/components/layout/";
import MagneticButton from "@/components/shared/MagneticButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import GrainNoiseOverlay from "./GrainNoiseOverlay";
import AnimatedGradientMesh from "./AnimatedGradientMesh";
import DecorativeVerticalLine from "./DecorativeVerticalLine";
import { BorderBeam } from "@/components/ui/border-beam";
import { heroContent } from "@/data/landing.data";
import {
    HighlightedBrandName,
    ContactDrawer
} from "@/components/shared/";
import { useServices } from "@/context/ServiceContext";
import { getIconByName } from "@/lib/icon-mapper";

const HeroSection = () => {

    const heroRef = useRef(null);
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });
    const heroY = useTransform(heroScroll, [0, 1], [0, 150]);
    const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);
    const {
        servicesOverview
    } = useServices()

    return (
        <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">

            {/* Grain noise overlay */}
            <GrainNoiseOverlay />

            {/* Animated gradient mesh */}
            <AnimatedGradientMesh heroY={heroY} />

            {/* Decorative vertical line */}
            <DecorativeVerticalLine />

            <ContainerLayout className="relative z-10">
                <motion.div style={{ opacity: heroOpacity }}>

                    <div className="pt-28 lg:pt-32 mb-16 lg:mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-16 lg:pb-24">

                        {/* Left column — main content */}
                        <div className="lg:col-span-6">

                            {/* Eyebrow */}
                            <motion.div
                                className="flex relative w-fit py-2.25 px-4 bg-accent/20 dark:bg-accent/10  rounded-full items-center gap-3 mb-8"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >

                                <BorderBeam
                                    colorFrom="var(--color-accent)"
                                    colorTo="var(--color-accent)"
                                />

                                <span className="text-[10px] font-semibold text-accent uppercase tracking-[0.3em]">
                                    {heroContent.eyebrow}
                                </span>
                            </motion.div>

                            {/* Headline */}
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-foreground leading-[0.92] tracking-[-0.01em] mb-8">
                                {heroContent.headline.map((word, i) => (
                                    <span key={word} className="block">
                                        <motion.span
                                            className="block"
                                            initial={{ y: "110%" }}
                                            animate={{ y: 0 }}
                                            transition={{
                                                duration: 0.8,
                                                ease: [0.22, 1, 0.36, 1],
                                                delay: 0.15 + i * 0.1,
                                            }}
                                        >
                                            {word.toLowerCase().trim().includes("solutions") ? (
                                                <motion.span
                                                    className="text-accent italic"
                                                    initial={{ opacity: 0, filter: "blur(8px)" }}
                                                    animate={{ opacity: 1, filter: "blur(0px)" }}
                                                    transition={{ duration: 0.8, delay: 0.55 }}
                                                >
                                                    {word}
                                                </motion.span>
                                            ) : (
                                                word
                                            )}
                                        </motion.span>
                                    </span>
                                ))}
                            </h1>

                            {/* Subtext Paragraphs */}
                            <motion.p
                                className="text-base md:text-lg text-muted-foreground max-w-lg leading-[1.8] font-light mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                {heroContent.subtext}
                            </motion.p>

                            <motion.p
                                className="text-base md:text-lg text-muted-foreground max-w-lg leading-[1.8] font-light mb-10"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <HighlightedBrandName
                                    animate
                                    once
                                /> is a digital solutions agency focused on building reliable and scalable technology.
                            </motion.p>



                            {/* CTAs */}
                            <motion.div
                                className="flex flex-wrap items-center gap-4 pb-8 border-b"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <MagneticButton>
                                    <Button asChild size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90 text-sm px-8 h-12 font-medium tracking-wide">
                                        <Link href="/services">
                                            {heroContent.cta.primary} <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </MagneticButton>
                                <MagneticButton>
                                    <ContactDrawer>
                                        <Button variant="outline" size="lg" className="rounded-full text-foreground hover:bg-accent/10 text-sm px-6 h-12 font-medium">
                                            {heroContent.cta.secondary} <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </ContactDrawer>
                                </MagneticButton>
                            </motion.div>

                        </div>

                        {/* Right column — services preview + mission */}
                        <motion.div
                            className="lg:col-span-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.7 }}
                        >
                            <div className="space-y-5">
                                {/* Mission card */}
                                <div className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[60px]" />

                                    <div className="flex items-center gap-3 mb-6 relative z-10">
                                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                        <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.3em]">{heroContent.mission.title}</span>
                                    </div>

                                    <p className="text-lg md:text-xl font-semibold text-foreground leading-relaxed font-playfair mb-6 relative z-10" >
                                        "{heroContent.mission.quote}"
                                    </p>

                                    <div className="space-y-4 relative z-10">
                                        {servicesOverview.filter(s => s.featured ).map((service, i) => {
                                            const Icon = getIconByName(service.icon)
                                            return (
                                                <Link key={service._id} href={`/services/${service.slug}`}>
                                                    <motion.div
                                                        className="group flex items-center gap-4 p-3 rounded-xl border border-transparent hover:border-accent/15 hover:bg-accent/5 transition-all duration-300"
                                                        initial={{ opacity: 0, x: -15 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                                                    >

                                                        <div className="w-10 h-10 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center shrink-0 transition-colors duration-300">
                                                            <Icon className="size-4 text-accent" />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-medium text-foreground">{service.title}</p>
                                                            <p className="text-xs text-muted-foreground ">{service.description}</p>
                                                        </div>
                                                        <ArrowUpRight className="size-3.5 text-muted-foreground/30 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
                                                    </motion.div>
                                                </Link>
                                            )
                                        })}
                                    </div>
                                </div>

                                {/* Small accent cards row */}
                                <div className="grid grid-cols-2 gap-4">
                                    {
                                        heroContent.accentCards.map((c, i) => (
                                            <motion.div
                                                key={c.sub}
                                                className="glass-card rounded-2xl p-5 text-center"
                                                initial={{ opacity: 0, y: 15 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 1.2 }}
                                            >
                                                <c.icon className="h-5 w-5 text-accent mx-auto mb-2" />
                                                <p className="text-sm font-bold text-foreground">{c.label}</p>
                                                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{c.sub}</p>
                                            </motion.div>
                                        ))
                                    }
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </motion.div>
            </ContainerLayout>
        </section>
    )
}

export default HeroSection