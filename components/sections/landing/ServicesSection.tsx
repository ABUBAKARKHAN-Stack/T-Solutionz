"use client"

import {
    MagneticButton,
    SectionHeader,
    ServiceCard,
    StaggerChildren,
    itemVariants
} from '@/components/shared'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useServices } from '@/context/ServiceContext'
import { ContainerLayout } from '@/components/layout'

const ServicesSection = () => {
    const {
        servicesOverview
    } = useServices()
    return (
        <section className="section-padding bg-card/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-125 h-125 bg-accent/5 rounded-full blur-[150px]" />

            <ContainerLayout className="relative z-10">

                <SectionHeader
                    eyebrow="Our Services"
                    title={<>What we <span className="text-accent italic">do best</span></>}
                    action={
                        <MagneticButton>
                            <Button asChild variant="outline" className="rounded-full border-border text-foreground hover:bg-accent/10 text-sm px-6 h-10 font-medium">
                                <Link href="/services">
                                    View All Services <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </MagneticButton>
                    }
                />

                <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
                    {servicesOverview.map((s, i) => (
                        <motion.div key={s.title} variants={itemVariants}>
                            <ServiceCard
                                service={s}
                                num={i = i + 1}
                            />
                        </motion.div>
                    ))}
                </StaggerChildren>
            </ContainerLayout>
        </section>
    )
}

export default ServicesSection