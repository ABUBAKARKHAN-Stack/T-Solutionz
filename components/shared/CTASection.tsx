"use client"

import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AnimatedSection,
  ContactDrawer,
  MagneticButton
} from "@/components/shared";
import { ContainerLayout } from "../layout";

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
      <div className="absolute top-0 right-1/4 w-100 h-100 bg-accent/10 rounded-full blur-[150px]" />
      <ContainerLayout className="relative z-10 text-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">{title}</h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto font-light text-lg">{description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <ContactDrawer>
              <MagneticButton>
                <Button size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90 text-sm px-10 h-12 font-medium">
                  {buttonText} <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </MagneticButton>
            </ContactDrawer>
            {extraActions}
          </div>
        </AnimatedSection>
      </ContainerLayout>
    </section>
  );
};

export default CTASection;
