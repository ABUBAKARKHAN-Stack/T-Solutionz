import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { faqs } from "@/constants";

const FAQSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <SectionHeader
            eyebrow="FAQ"
            title={<>Questions? <br /><span className="text-accent italic">We've got answers</span></>}
            description="Can't find what you're looking for? Reach out to our team and we'll be happy to help."
          />

          <AnimatedSection delay={0.2}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="glass-card rounded-xl px-6 border-none"
                >
                  <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
