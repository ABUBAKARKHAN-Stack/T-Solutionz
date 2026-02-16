"use client"
import { ContainerLayout } from '@/components/layout';
import { AnimatedSection, SectionHeader } from '@/components/shared';
import { useServices } from '@/context/ServiceContext';
import { getIconByName } from '@/lib/icon-mapper';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const OtherServicesSection = () => {
    const { servicesOverview } = useServices()
    const { slug } = useParams()
    const otherServices = servicesOverview.filter(s => s.slug !== slug);

    return (
        <section className="section-padding bg-card/30">
            <ContainerLayout>
                <SectionHeader eyebrow="Explore More" title="Other Services" className="mb-12" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {otherServices.map((s) => {
                        const SIcon = getIconByName(s.icon);
                        return (
                            <AnimatedSection key={s.slug} delay={0.1}>
                                <Link href={`/services/${s.slug}`} className="group block">
                                    <div className="rounded-2xl overflow-hidden bg-card border border-border/40 hover:border-accent/40 transition-all duration-500 shadow-sm">
                                        <div className="relative h-36 overflow-hidden">
                                            <img
                                                src={
                                                    urlFor(s.image.source)
                                                        .quality(75)
                                                        .url()
                                                }
                                                alt={s.image.alt}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                                            <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent" />
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center gap-3 mb-2">
                                                <SIcon className="h-4 w-4 text-accent" />
                                                <h3 className="text-sm font-semibold text-foreground">{s.title}</h3>
                                            </div>
                                            <p className="text-xs text-muted-foreground line-clamp-2">{s.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        );
                    })}
                </div>
            </ContainerLayout>
        </section>
    )
}

export default OtherServicesSection