"use client"

import { ContainerLayout } from '@/components/layout'
import { itemVariants, SectionHeader, StaggerChildren } from '@/components/shared'
import { team } from '@/constants'
import { motion } from 'motion/react'

const OurTeamSection = () => {
    return (
        <section className="section-padding bg-background">

            <ContainerLayout>
                <SectionHeader
                    eyebrow="Our Team"
                    title="Our Leadership"
                    description="A team of experienced professionals passionate about driving meaningful change."
                    centered
                />
                <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
                    {team.map((member) => (
                        <motion.div key={member.name} variants={itemVariants} className="text-center">
                            <motion.div
                                className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <span className="text-lg font-bold text-accent">{member.initials}</span>
                            </motion.div>
                            <h3 className="font-semibold text-foreground text-sm">{member.name}</h3>
                            <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
                        </motion.div>
                    ))}
                </StaggerChildren>
            </ContainerLayout>
        </section>
    )
}

export default OurTeamSection