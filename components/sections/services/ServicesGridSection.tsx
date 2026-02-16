"use client"

import { ContainerLayout } from '@/components/layout'
import { itemVariants, ServiceCard, StaggerChildren } from '@/components/shared'
import { useServices } from '@/context/ServiceContext'
import { motion } from 'motion/react'

const ServicesGridSection = () => {
    const { servicesOverview } = useServices()
    return (
        <section className="section-padding bg-background">
            <ContainerLayout>
                <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

export default ServicesGridSection