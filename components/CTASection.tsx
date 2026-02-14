import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/shared/AnimatedSection";
import MagneticButton from "@/components/shared/MagneticButton";
import ContactDrawer from "@/components/shared/ContactDrawer";

interface CTASectionProps {
  title: ReactNode;
  description: string;
  buttonText?: string;
  /** Extra buttons rendered alongside the main CTA */
  extraActions?: ReactNode;
}

const CTASection = ({ title, description, buttonText = "Book a Consultation", extraActions }: CTASectionProps) => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[150px]" />
      <AnimatedSection className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">{title}</h2>
        <p className="text-muted-foreground mb-10 max-w-md mx-auto font-light text-lg">{description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <MagneticButton>
            <ContactDrawer>
              <Button size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90 text-sm px-10 h-12 font-medium">
                {buttonText} <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </ContactDrawer>
          </MagneticButton>
          {extraActions}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default CTASection;
