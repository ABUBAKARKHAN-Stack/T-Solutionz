"use client"
import { motion, type Variants } from "motion/react";

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

const containerVariants = (staggerDelay: number): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
    },
  },
});

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const StaggerChildren = ({
  children,
  className,
  staggerDelay = 0.1,
}: StaggerChildrenProps) => {
  return (
    <motion.div
      className={className}
      variants={containerVariants(staggerDelay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
};

export { StaggerChildren, itemVariants };
