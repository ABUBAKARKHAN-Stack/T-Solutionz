"use client"

import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { IServiceOverview } from "@/types/service.types";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { getIconByName } from "@/lib/icon-mapper";

interface ServiceCardProps {
  service: IServiceOverview
  num: number;

}

const ServiceCard = ({
  num,
  service: {
    description,
    featured,
    icon,
    image,
    slug,
    tags,
    title
  }
}: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const Icon = getIconByName(icon)

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 250,
    damping: 25,
  });

  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 250,
    damping: 25,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const resetTilt = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <Link
      href={slug ? `/services/${slug}` : "/services"}
      className="group block h-full"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={resetTilt}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative rounded-2xl overflow-hidden h-full border border-border/30 hover:border-accent/30 transition-colors duration-500"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={
              urlFor(image.source)
                .quality(80)
                .url()
            }
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-foreground/95 via-foreground/60 to-foreground/10 dark:from-background/95 dark:via-background/65 dark:to-background/15" />
        </div>

        {/* Hover gradient */}
        <motion.div
          className="absolute inset-0 bg-linear-to-br from-accent/15 via-transparent to-accent/10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Shine sweep */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: `linear-gradient(105deg, transparent 40%, color-mix(in srgb, var(--accent) 7%, transparent) 45%, color-mix(in srgb, var(--accent) 12%, transparent) 50%, transparent 55%)`,
          }}
          initial={{ opacity: 0, x: "-100%" }}
          animate={{
            opacity: isHovered ? 1 : 0,
            x: isHovered ? "100%" : "-100%",
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Top accent line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-0.5 bg-accent z-20"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />

        {/* Content */}
        <div className="relative z-10 p-6 lg:p-7 flex flex-col h-full min-h-90 justify-between">
          {/* Top: Number + Arrow */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-mono font-bold text-accent drop-shadow-sm">{num}</span>
            <motion.div
              className="w-9 h-9 rounded-lg bg-primary-foreground/10 dark:bg-foreground/10 backdrop-blur-md border border-primary-foreground/15 dark:border-border/40 flex items-center justify-center"
              animate={{
                backgroundColor: isHovered ? "var(--accent)" : undefined,
                borderColor: isHovered ? "var(--accent)" : undefined,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ rotate: isHovered ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight className="h-3.5 w-3.5 text-primary-foreground/80 dark:text-foreground/80 group-hover:text-accent-foreground transition-colors duration-300" />
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom: Icon, Title, Description, Tags */}
          <div className="mt-auto space-y-3">
            <div className="w-10 h-10 rounded-xl bg-accent/20 backdrop-blur-sm flex items-center justify-center border border-accent/25">
              <Icon className="h-5 w-5 text-accent" />
            </div>

            <h3 className="text-lg lg:text-xl font-bold text-primary-foreground dark:text-foreground leading-snug tracking-tight">
              {title}
            </h3>

            <p className="text-[13px] text-primary-foreground/65 dark:text-muted-foreground leading-relaxed font-light line-clamp-3">
              {description}
            </p>

            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium text-primary-foreground/55 dark:text-muted-foreground bg-primary-foreground/8 dark:bg-foreground/8 border border-primary-foreground/10 dark:border-border/30 px-2.5 py-1 rounded-md backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
                {tags.length > 3 && (
                  <span className="text-[10px] font-medium text-accent bg-accent/15 border border-accent/20 px-2.5 py-1 rounded-md backdrop-blur-sm">
                    +{tags.length - 3} more
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Bottom glow on hover */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-16 bg-accent/25 blur-2xl rounded-full pointer-events-none"
          animate={{ opacity: isHovered ? 0.5 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </Link>
  );
};

export default ServiceCard;
