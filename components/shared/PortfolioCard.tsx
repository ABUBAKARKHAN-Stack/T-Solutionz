"use client";
import { motion } from "motion/react";
import { itemVariants } from "./StaggerChildren";
import Link from "next/link";
import { IPortfolioOverview } from "@/types/portfolio.types";
import Image from "next/image";
import { APP_NAME } from "@/constants/app.constants";
import { ArrowUpRight } from "lucide-react";
import { getPreviewImageUrl } from "@/lib/transformed-img-urls";
import CardMetaDataBadge from "./CardMetaDataBadge";

type Props = {
  project: IPortfolioOverview;
};

const PortfolioCard = ({ project }: Props) => {
  return (
    <motion.div key={project.slug} variants={itemVariants}>
      <Link href={`/portfolio/${project.slug}`} className="group block">
        <article className="border-border/40 bg-card/60 hover:border-accent/25 shadow-accent/15 relative h-full overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-500 hover:shadow-[0_8px_40px_-12px]">
          {/* Top accent line */}
          <div className="via-accent/40 h-px scale-x-0 bg-linear-to-r from-transparent to-transparent transition-transform duration-500 group-hover:scale-x-100" />

          {/* Image */}
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={getPreviewImageUrl(project.image.source)}
              alt={`Screenshot of ${project.title} project created by ${APP_NAME}`}
              fill
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />

            <div className="from-card/60 absolute inset-0 bg-linear-to-t to-transparent" />


          </div>

          {/* Content */}
          <div className="flex flex-col p-6">

            <div className="flex justify-between mb-4">
              {/* Category badge */}
              <CardMetaDataBadge
                label={project.category}
              // className="absolute top-4 left-4"
              />

              {/* Year */}
              <CardMetaDataBadge
                className=" px-2 py-1"
                label={project.year}
              />
            </div>

            <h3 className="text-foreground group-hover:text-accent font-playfair mb-2 text-lg leading-snug font-semibold transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-muted-foreground mb-4 line-clamp-2 text-sm leading-relaxed font-light">
              {project.description}
            </p>

            {/* Tags */}
            <div className="mb-5 flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-muted-foreground/70 bg-muted/50 rounded-full px-2 py-0.5 text-[10px] font-medium"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="text-muted-foreground/50 px-1 py-0.5 text-[10px] font-medium">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>

            {/* Footer */}
            <div className="border-border/30 flex items-center justify-end border-t pt-4">
              <div className="bg-accent/10 group-hover:bg-accent group-hover:text-accent-foreground flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
};

export default PortfolioCard;
