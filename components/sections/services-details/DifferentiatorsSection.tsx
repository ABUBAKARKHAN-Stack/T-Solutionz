"use client"
import { ContainerLayout } from '@/components/layout'
import { AnimatedSection, SectionHeader } from '@/components/shared'
import { ServiceDifferentiator } from '@/types/service.types'
import { CheckCircle2 } from 'lucide-react'

type Props = {
    differentiators: ServiceDifferentiator[]
}
const DifferentiatorsSection = ({
    differentiators
}: Props) => {
    return (
        <section className="section-padding bg-card/30">
            <ContainerLayout>
                <SectionHeader eyebrow="Why Us" title={<>Why we <span className="text-accent italic">stand out</span></>} centered />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {differentiators.map((diff, i) => (
                        <AnimatedSection key={diff.title} delay={i * 0.1}>
                            <div className="flex items-start gap-4 p-6 rounded-2xl border border-border/40 bg-background h-full">
                                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="text-base font-semibold text-foreground mb-2">{diff.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed font-light">{diff.description}</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </ContainerLayout>
        </section>
    )
}

export default DifferentiatorsSection