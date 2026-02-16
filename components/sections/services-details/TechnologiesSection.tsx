"use client"

import { ContainerLayout } from '@/components/layout'
import { AnimatedSection, SectionHeader } from '@/components/shared'
import { ServiceTechnology } from '@/types/service.types'
import { Star } from 'lucide-react'

type Props = {
    technologies: ServiceTechnology[]
}
const TechnologiesSection = ({
    technologies
}: Props) => {
    return (

        <section className="section-padding bg-card/30">
            <ContainerLayout>

                <SectionHeader
                    eyebrow="Tech Stack"
                    title={<>Technologies <span className="text-accent italic">we use</span></>} centered
                />

                {/* Featured Technologies */}
                {technologies.some((t) => t.featured) && (
                    <AnimatedSection className="mb-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
                            {technologies.filter((t) => t.featured).map((tech) => (
                                <div
                                    key={tech.name}
                                    className="relative p-6 rounded-2xl border border-accent/20 bg-background group hover:border-accent/40 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-base font-semibold text-foreground">{tech.name}</span>
                                        <span className="inline-flex items-center gap-1 text-[9px] font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                                            <Star className="h-2.5 w-2.5 fill-accent" /> Core
                                        </span>
                                    </div>
                                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60 block mb-2">{tech.category}</span>
                                    <p className="text-sm text-muted-foreground leading-relaxed font-light">{tech.description}</p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                )}

                {/* Other Technologies */}
                {technologies.some((t) => !t.featured) && (
                    <AnimatedSection>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
                            {technologies.filter((t) => !t.featured).map((tech) => (
                                <div
                                    key={tech.name}
                                    className="group relative flex flex-col items-center gap-1 p-5 rounded-2xl border border-border/40 bg-background hover:border-accent/40 transition-all duration-300"
                                    title={tech.description}
                                >
                                    <span className="text-sm font-semibold text-foreground">{tech.name}</span>
                                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60">{tech.category}</span>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                )}
            </ContainerLayout>
        </section>

    )
}

export default TechnologiesSection