"use client"
import { ContainerLayout } from '@/components/layout'
import { AnimatedSection } from '@/components/shared'
import { stats } from '@/data/shared.data'
import { motion } from 'motion/react'

const MissionSection = () => {
  return (
        <section className="section-padding bg-background">
            <ContainerLayout>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <AnimatedSection direction="left">
                  <p className="text-xs font-medium text-accent uppercase tracking-[0.3em] mb-4">Our Mission</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                    Empowering sustainable growth
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6 font-light">
                    To empower businesses to achieve sustainable growth by providing innovative strategies, actionable insights, and dedicated partnerships that create value for all stakeholders.
                  </p>
                  <p className="text-muted-foreground leading-relaxed font-light text-sm">
                    Since our founding in 2015, we've helped over 200 companies across 30 industries transform their operations, reduce their environmental footprint, and increase profitability.
                  </p>
                </AnimatedSection>
                <AnimatedSection direction="right" delay={0.2}>
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        className="glass-card rounded-2xl p-6 text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                      >
                        <p className="text-3xl font-bold text-foreground">{stat.val}</p>
                        <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </ContainerLayout>
          </section>
    
  )
}

export default MissionSection