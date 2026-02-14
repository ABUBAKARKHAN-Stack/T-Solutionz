"use client"
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}

const ParallaxSection = ({
  children,
  className,
  speed = 0.3,
  direction = "up",
}: ParallaxSectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const factor = direction === "up" ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [factor * speed * 100, factor * -speed * 100]);

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxSection;
