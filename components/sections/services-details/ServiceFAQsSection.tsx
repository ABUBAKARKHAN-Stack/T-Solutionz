"use client"
import { AnimatedSection, SectionHeader } from '@/components/shared'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ServiceFAQ } from '@/types/service.types'

type Props = {
    faqs: ServiceFAQ[]
}

const ServiceFAQsSection = ({
    faqs
}: Props) => {
    return (
        <section className="section-padding bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <SectionHeader eyebrow="FAQ" title={<>Common <span className="text-accent italic">questions</span></>} centered />
                <AnimatedSection className="max-w-2xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`faq-${i}`} className="border-border/40">
                                <AccordionTrigger className="text-sm font-medium text-foreground hover:text-accent transition-colors text-left">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-sm text-muted-foreground leading-relaxed font-light">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </AnimatedSection>
            </div>
        </section>
    )
}

export default ServiceFAQsSection