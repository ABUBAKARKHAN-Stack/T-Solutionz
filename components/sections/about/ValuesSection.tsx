"use client"
import { SectionHeader, StaggerChildren,itemVariants } from '@/components/shared'
import { motion } from 'motion/react'
import { values } from '@/constants'
import { ContainerLayout } from '@/components/layout'

const ValuesSection = () => {
  return (
       <section className="section-padding border-y border-border/50">
            <ContainerLayout>
              <SectionHeader eyebrow="Our Values" title="What drives us forward" />

              <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((v) => (
                  <motion.div key={v.title} variants={itemVariants}>
                    <div className="glass-card rounded-2xl p-8 text-center h-full">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                        <v.icon className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="text-base font-semibold text-foreground mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {v.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                    </div>
                  </motion.div>
                ))}
              </StaggerChildren>
            </ContainerLayout>
          </section>
  )
}

export default ValuesSection