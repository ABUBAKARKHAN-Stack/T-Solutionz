"use client"
import { motion } from "motion/react";
import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ContainerLayout } from "../layout";
import { urlFor } from "@/sanity/lib/image";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  /** Optional background image for detail pages */
  backgroundImage?: {
    source: string;
    alt: string
  };

  /** Breadcrumb trail */
  breadcrumbs?: BreadcrumbItem[];
  /** Optional content rendered before the title (e.g., back links, badges) */
  children?: ReactNode;
}

const PageHero = ({ eyebrow, title, description, backgroundImage, breadcrumbs, children }: PageHeroProps) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {backgroundImage ? (
        <div className="absolute inset-0">
          <div className="h-20 absolute inset-0 z-10 glass" />
          <Image
            fill
            src={
              urlFor(backgroundImage.source)
                .quality(90)
                .url()
            }
            alt={backgroundImage.alt}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/90 to-background" />
        </div>
      ) : (
        <div className="absolute top-0 right-0 w-125 h-125 bg-accent/5 rounded-full blur-[150px]" />
      )}
      <ContainerLayout className="relative z-10">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm">
                {breadcrumbs.map((crumb, i) => (
                  <li key={i} className="inline-flex items-center gap-1.5">
                    {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" />}
                    {crumb.href ? (
                      <Link href={crumb.href} className="text-muted-foreground hover:text-foreground transition-colors">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-foreground font-medium">{crumb.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          {children}
          <p className="text-xs font-medium text-accent uppercase tracking-[0.3em] mb-4">{eyebrow}</p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.95] tracking-tight mb-6 font-playfair"
          >
            {title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl font-light">{description}</p>
        </motion.div>
      </ContainerLayout>
    </section>
  );
};

export default PageHero;
