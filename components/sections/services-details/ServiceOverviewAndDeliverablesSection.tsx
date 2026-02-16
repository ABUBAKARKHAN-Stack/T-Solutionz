"use client"

import { ContainerLayout } from '@/components/layout'
import { AnimatedSection, ContactDrawer } from '@/components/shared'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'

type Props = {
    serviceLongDescription:string;
    tags:string[];
    deliverables: string[]
}

const ServiceOverviewAndDeliverablesSection = ({
deliverables,
serviceLongDescription,
tags
}:Props) => {
    return (
        <section className="section-padding bg-background">

            <ContainerLayout>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
                    <AnimatedSection className="lg:col-span-3">
                        <h2 className="text-2xl font-bold text-foreground mb-6">Overview</h2>
                        <p className="text-muted-foreground leading-relaxed font-light text-base">{serviceLongDescription}</p>

                        {tags && (
                            <div className="flex flex-wrap gap-2 mt-8">
                                {tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs font-medium text-accent bg-accent/10 border border-accent/20 px-4 py-2 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </AnimatedSection>

                    <AnimatedSection delay={0.2} className="lg:col-span-2">
                        <div className="glass-card rounded-2xl p-8 border border-border/40">
                            <h3 className="text-lg font-semibold text-foreground mb-6">Key Deliverables</h3>
                            <ul className="space-y-4">
                                {deliverables?.map((d, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                                        <span className="text-sm text-muted-foreground leading-relaxed">{d}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-6 border-t border-border/30">
                                <ContactDrawer>
                                    <Button className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium">
                                        Discuss This Service <ArrowUpRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </ContactDrawer>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </ContainerLayout>
        </section>
    )
}

export default ServiceOverviewAndDeliverablesSection