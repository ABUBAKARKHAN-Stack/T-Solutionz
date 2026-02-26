"use client"
import { ContainerLayout } from '@/components/layout';
import { AnimatedSection, ContactDrawer } from '@/components/shared'
import { Button } from '@/components/ui/button';
import { urlFor } from '@/sanity/lib/image';
import { IImage, ITestimonial } from '@/types/shared.types';
import { ArrowUpRight, CheckCircle2, Quote } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';

type Props = {
    longDescription: string;
    image: IImage;
    tags: string[];
    results: string[];
    testimonial?: ITestimonial


}
const ProjectDetailsSection: FC<Props> = ({
    image,
    longDescription,
    results,
    tags,
    testimonial
}) => {
    return (
        <section className="section-padding bg-background">
            <ContainerLayout>
                <div className="grid grid-cols-1 gap-y-16">
                    {/* Main Content */}
                    <AnimatedSection>
                        <h2 className="text-2xl font-bold text-foreground mb-6">The Challenge & Solution</h2>
                        <div className="space-y-4 max-w-5xl">
                            {longDescription.split("\n\n").map((paragraph, i) => (
                                <p key={i} className="text-muted-foreground leading-relaxed font-light text-base">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Project Screenshot */}
                        <div className="rounded-2xl mt-6 overflow-hidden border border-border/40 shadow-lg shadow-accent/10">
                            <Image
                                src={
                                    urlFor(image.source)
                                        .width(1920)
                                        .height(1080)
                                        .quality(85)
                                        .url()
                                }
                                alt={image.alt}
                                height={1920}
                                width={1080}
                                loading='lazy'
                                className=" w-full h-auto object-cover"
                            />
                        </div>

                        {/* Tech Stack */}
                        <div className="mt-10">
                            <h3 className="text-lg font-semibold text-foreground mb-4">Technology Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs font-medium text-foreground/80 bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Sidebar */}
                    <AnimatedSection delay={0.2} className="lg:col-span-2 space-y-8">
                        {/* Key Results */}
                        <div className="glass-card rounded-2xl p-8 border border-border/40">
                            <h3 className="text-lg font-semibold text-foreground mb-6">Key Results</h3>
                            <ul className="space-y-4">
                                {results.map((r, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                                        <span className="text-sm text-muted-foreground leading-relaxed">{r}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-6 border-t border-border/30">
                                <ContactDrawer>
                                    <Button className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium">
                                        Start a Similar Project <ArrowUpRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </ContactDrawer>
                            </div>
                        </div>

                        {/* Testimonial */}
                        {testimonial && (
                            <div className="glass-card rounded-2xl p-8 border border-accent/20 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-[60px]" />
                                <Quote className="h-8 w-8 text-accent/30 mb-4" />
                                <p
                                    className="text-base text-foreground leading-relaxed mb-5 italic"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                    "{testimonial.quote}"
                                </p>
                                <div>
                                    <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </div>
                        )}
                    </AnimatedSection>
                </div>
            </ContainerLayout>
        </section>
    )
}

export default ProjectDetailsSection