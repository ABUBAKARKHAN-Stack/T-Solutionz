"use client"
import { ContainerLayout } from '@/components/layout'
import { AnimatedSection, SectionHeader } from '@/components/shared'
import { APP_NAME } from '@/constants/app.constants'
import { usePortfolio } from '@/context/PortfolioContext'
import { getPreviewImageUrl } from '@/lib/transformed-img-urls'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const OtherProjectsSection = () => {
    const { slug } = useParams()
    const { portfolioOverview } = usePortfolio()
    const otherProjects = portfolioOverview.filter(p => p.slug !== slug);

    if (otherProjects.length === 0) return;

    return (
        <section className="section-padding bg-card/30">
            <ContainerLayout>
                <SectionHeader
                    eyebrow="More Work"
                    title="Other Projects"
                    className="mb-12"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {otherProjects.map((p) => (
                        <AnimatedSection key={p.slug} delay={0.1}>
                            <Link href={`/portfolio/${p.slug}`} className="group block">
                                <div className="rounded-2xl overflow-hidden bg-card border border-border/40 hover:border-accent/40 transition-all duration-500 shadow-sm">
                                    <div className="relative h-44 overflow-hidden">
                                        <Image
                                            src={getPreviewImageUrl(p.image.source)}
                                            fill
                                            alt={`${p.title} – Screenshot of the project created by ${APP_NAME}`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            loading="lazy"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-card/60 to-transparent" />
                                    </div>
                                    <div className="p-5">
                                        <span className="text-[10px] font-medium uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                                            {p.category}
                                        </span>
                                        <h3 className="text-sm font-semibold text-foreground mt-3 mb-1">{p.title}</h3>
                                        <p className="text-xs text-muted-foreground line-clamp-2">{p.description}</p>
                                    </div>
                                </div>
                            </Link>
                        </AnimatedSection>
                    ))}
                </div>
            </ContainerLayout>
        </section>
    )
}

export default OtherProjectsSection