"use client";
import { motion } from "motion/react";
import { itemVariants } from "./StaggerChildren";
import { ArrowUpRight, Clock } from "lucide-react";
import Image from "next/image";
import CardCategoryBadge from "./CardMetaDataBadge";
type Props = {
  post: {
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    slug: string;
    image: string;
  };
};
const BlogCard = ({ post }: Props) => {
  return (
    <motion.div key={post.slug} variants={itemVariants}>
      <article className="group border-border/40 bg-card/60 hover:border-accent/25 hover:shadow-accent/15 relative h-full overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-500 hover:shadow-[0_8px_40px_-12px]">
        {/* Top accent line */}
        <div className="via-accent/40 h-px scale-x-0 bg-linear-to-r from-transparent to-transparent transition-transform duration-500 group-hover:scale-x-100" />

        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="from-card/80 via-card/20 absolute inset-0 bg-linear-to-t to-transparent" />

          {/* Category badge on image */}
          <CardCategoryBadge
            className="absolute top-4 left-4"
            label={post.category}
          />
        </div>

        <div className="flex flex-1 flex-col p-7">
          {/* Title */}
          <h3
            className="text-foreground group-hover:text-accent mb-3 text-lg leading-snug font-semibold transition-colors duration-300"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-muted-foreground line-clamp-3 flex-1 text-sm leading-relaxed font-light">
            {post.excerpt}
          </p>

          {/* Footer */}
          <div className="border-border/30 mt-6 flex items-center justify-between border-t pt-5">
            <div className="text-muted-foreground/50 flex items-center gap-1.5">
              <Clock className="h-3 w-3" />
              <span className="text-[11px] font-medium">{post.readTime}</span>
            </div>
            <div className="text-muted-foreground/40 group-hover:text-accent flex items-center gap-1.5 text-sm font-medium transition-colors duration-300">
              <span className="text-xs">Read</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>
      </article>
    </motion.div>
  );
};

export default BlogCard;
