import { ContainerLayout } from '@/components/layout'
import { AnimatedSection, SectionHeader } from '@/components/shared'
import { ServiceApproachStep } from '@/types/service.types'

type Props = {
    approach: ServiceApproachStep[]
}
const ApproachSection = ({ approach }: Props) => {
    return (

        <section className="section-padding bg-background">
            <ContainerLayout>
                <SectionHeader eyebrow="Our Approach" title={<>How we <span className="text-accent italic">deliver</span></>} centered />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {approach.map((step, i) => (
                        <AnimatedSection key={step.step} delay={i * 0.1}>
                            <div className="relative p-6 rounded-2xl border border-border/40 bg-card h-full">
                                <span
                                    className="text-5xl font-bold text-accent/10 absolute top-4 right-4"
                                    style={{ fontFamily: "'Space Mono', monospace" }}
                                >
                                    {step.step}
                                </span>
                                <div className="relative z-10">
                                    <h3 className="text-base font-semibold text-foreground mb-3 mt-4">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed font-light">{step.description}</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </ContainerLayout>
        </section>
    )
}

export default ApproachSection