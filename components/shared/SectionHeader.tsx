import { ReactNode } from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  /** Right-side content (e.g., a CTA button) */
  action?: ReactNode;
  /** Center-align the header */
  centered?: boolean;
  className?: string;
}

const SectionHeader = ({ eyebrow, title, description, action, centered, className }: SectionHeaderProps) => {
  if (action) {
    return (
      <AnimatedSection className={cn("mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6", className)}>
        <div>
          <p className="text-xs font-medium text-accent uppercase tracking-[0.3em] mb-4">{eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground max-w-lg leading-tight">{title}</h2>
          {description && <p className="text-sm text-muted-foreground max-w-sm leading-relaxed font-light mt-4">{description}</p>}
        </div>
        {action}
      </AnimatedSection>
    );
  }

  return (
    <AnimatedSection className={cn(centered ? "text-center mb-16" : "mb-16", className)}>
      <p className="text-xs font-medium text-accent uppercase tracking-[0.3em] mb-4">{eyebrow}</p>
      <h2 className={cn(
        "text-3xl md:text-4xl font-bold text-foreground leading-tight",
        centered ? "" : "max-w-md"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-muted-foreground font-light mt-4",
          centered ? "max-w-lg mx-auto" : "max-w-sm"
        )}>
          {description}
        </p>
      )}
    </AnimatedSection>
  );
};

export default SectionHeader;