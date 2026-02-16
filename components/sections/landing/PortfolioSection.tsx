// "use client"

// import { Easing, motion } from "motion/react";
// import { StaggerChildren, itemVariants, SectionHeader } from "@/components/shared/";
// import { caseStudies } from "@/constants";
// import { ContainerLayout } from "@/components/layout";
// import { useRef, useState } from "react";

// const PortfolioSection = () => {
//     return (
//         <section className="section-padding bg-card/30 relative overflow-hidden">
//             <div className="absolute top-0 left-0 w-125 h-125 bg-accent/5 rounded-full blur-[150px]" />
//             <ContainerLayout className="relative z-10">

//                 <SectionHeader
//                     eyebrow="Portfolio"
//                     title={<>Project that we're <span className="text-accent italic">proud of</span></>}
//                     description="Drag the slider to see the transformation. We turn challenges into measurable outcomes."
//                 />

//                 <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-8" staggerDelay={0.12}>
//                     {caseStudies.map((study) => (
//                         <PortfolioImageCard key={study.slug} />
//                     ))}
//                 </StaggerChildren>
//             </ContainerLayout>
//         </section>
//     );
// };

// export default PortfolioSection;


// const PortfolioImageCard = () => {
//     const cardRef = useRef<HTMLImageElement | null>(null);
//     const containerRef = useRef<HTMLDivElement | null>(null);

//     const [scrollAmount, setScrollAmount] = useState(0);
//     const [duration, setDuration] = useState(6);
//     const [ease, setEase] = useState<Easing>("easeOut");

//     const easingOptions: Easing[] = [
//         [0.43, 0.13, 0.23, 0.96],
//         [0.25, 0.46, 0.45, 0.94],
//         [0.33, 0.11, 0.27, 0.99],
//         [0.39, 0.21, 0.29, 0.96]
//     ];

//     const getRandomEasing = () =>
//         easingOptions[Math.floor(Math.random() * easingOptions.length)];

//     const getRandomHoverDuration = () => Math.random() * 4 + 6; //* 6–10s
//     const getRandomLeaveDuration = () => Math.random() * 3 + 1; //* 1-4s

//     const handleHoverStart = () => {
//         if (!cardRef.current || !containerRef.current) return;

//         const imageHeight = cardRef.current.offsetHeight;
//         const containerHeight = containerRef.current.offsetHeight;

//         const distance = imageHeight - containerHeight;

//         setDuration(getRandomHoverDuration());
//         setEase(getRandomEasing());
//         setScrollAmount(distance > 0 ? distance : 0);
//     };

//     const handleHoverEnd = () => {
//         setDuration(getRandomLeaveDuration());
//         setEase(getRandomEasing());
//         setScrollAmount(0);
//     };

//     return (
//         <motion.div
//             ref={containerRef}
//             onHoverStart={handleHoverStart}
//             onHoverEnd={handleHoverEnd}
//             variants={itemVariants}
//             className="h-95 rounded-lg overflow-hidden relative bg-card"
//         >
//             <motion.img
//                 ref={cardRef}
//                 src="/assets/portfolio-1.png"
//                 className="absolute top-0 left-0 w-full"
//                 initial={{ y: 0 }}
//                 animate={{ y: -scrollAmount }}
//                 transition={{
//                     duration,
//                     ease
//                 }}
//             />
//         </motion.div>
//     );
// };

"use client"
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    StaggerChildren,
    itemVariants,
    SectionHeader,
    MagneticButton
} from "@/components/shared";
import { portfolioProjects } from "@/data/landing.data";
import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/constants/app.constants";
import { ContainerLayout } from "@/components/layout";

const PortfolioSection = () => {
    // Show first 4 projects on home page
    const featured = portfolioProjects.slice(0, 4);

    return (
        <section className="section-padding bg-card/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-125 h-125 bg-accent/5 rounded-full blur-[150px]" />
            <ContainerLayout className="relative z-10">

                <SectionHeader
                    eyebrow="Portfolio"
                    title={<>Projects we're <span className="text-accent italic">proud of</span></>}
                    description="A curated selection of our recent work — each project a partnership built on trust, ambition, and measurable outcomes."
                    action={
                        <MagneticButton>
                            <Button asChild variant="outline" className="rounded-full border-border text-foreground hover:bg-accent/10 text-sm px-6 h-10 font-medium">
                                <Link href="/portfolio">
                                    View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </MagneticButton>
                    }
                />

                <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
                    {featured.map((project) => (
                        <motion.div key={project.slug} variants={itemVariants}>
                            <Link href={`/portfolio/${project.slug}`} className="group block">
                                <article className="relative h-full rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-accent/25 hover:shadow-[0_8px_40px_-12px] shadow-accent/15">

                                    {/* Top accent line */}
                                    <div className="h-px bg-linear-to-r from-transparent via-accent/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                                    {/* Image */}
                                    <div className="relative h-52 md:h-56 overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={`Screenshot of ${project.title} project created by ${APP_NAME}`}
                                            fill
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-card via-card/40 to-transparent" />

                                        {/* Category badge */}
                                        <span className="absolute top-4 left-4 text-[10px] font-semibold text-accent uppercase tracking-[0.25em] px-2.5 py-1 rounded-full border border-accent/20 bg-card/70 backdrop-blur-md">
                                            {project.category}
                                        </span>

                                        {/* Year */}
                                        <span className="absolute top-4 right-4 text-[10px] font-mono text-muted-foreground/70 bg-card/60 backdrop-blur-md px-2 py-1 rounded-full">
                                            {project.year}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col">
                                        <h3
                                            className="text-lg font-semibold text-foreground leading-snug mb-2 group-hover:text-accent transition-colors duration-300"
                                            style={{ fontFamily: "'Playfair Display', serif" }}
                                        >
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed font-light mb-4 line-clamp-2">
                                            {project.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-1.5 mb-5">
                                            {project.tags.slice(0, 3).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-[10px] font-medium text-muted-foreground/70 bg-muted/50 px-2 py-0.5 rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                            {project.tags.length > 3 && (
                                                <span className="text-[10px] font-medium text-muted-foreground/50 px-1 py-0.5">
                                                    +{project.tags.length - 3}
                                                </span>
                                            )}
                                        </div>

                                        {/* Footer */}
                                        <div className="flex items-center justify-between pt-4 border-t border-border/30">
                                            <span className="text-xs font-medium text-muted-foreground/60">{project.client}</span>
                                            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                                                <ArrowUpRight className="h-3.5 w-3.5" />
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </motion.div>
                    ))}
                </StaggerChildren>
            </ContainerLayout>
        </section>
    );
};

export default PortfolioSection;
