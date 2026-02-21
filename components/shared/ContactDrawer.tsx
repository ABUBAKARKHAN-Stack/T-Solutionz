"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { toast } from "sonner";
import { ContactFormValues, contactSchema } from "@/schemas/contact.schema";
import { contactInfo } from "@/constants/navigation.constants";
import Link from "next/link";
import { useServices } from "@/context/ServiceContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../ui/select";


interface ContactDrawerProps {
  children: React.ReactNode;
}

const ContactDrawer = ({ children }: ContactDrawerProps) => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { servicesOverview } = useServices()

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "", service: "" },
  });

  const onSubmit = (data: ContactFormValues) => {
    toast("Message Sent", {
      description: "Thank you for reaching out! We'll get back to you soon.",
    });
    form.reset();
    setSubmitted(true);
    setTimeout(() => {
      setOpen(false);
      setTimeout(() => setSubmitted(false), 300);
    }, 2000);
  };

  const mailInfo = contactInfo.filter((info) => info.label.toLowerCase().trim() === "mail")[0]

  return (
    <Sheet open={open} onOpenChange={(v) => { setOpen(v); if (!v) { setTimeout(() => setSubmitted(false), 300); form.reset(); } }}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-md bg-background border-border/50 p-0 overflow-y-auto">
        <div className="p-6 pb-0">
          <SheetHeader className="text-left mb-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] font-semibold text-accent uppercase tracking-[0.3em]">Quick Contact</span>
            </div>
            <SheetTitle className="text-2xl font-bold text-foreground font-playfair">
              Let's <span className="text-accent italic">talk</span>
            </SheetTitle>
            <SheetDescription className="text-sm text-muted-foreground font-light">
              Fill out the form below and we'll get back to you within 24 hours.
            </SheetDescription>
          </SheetHeader>
        </div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              className="flex flex-col items-center justify-center p-10 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Send className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
              <p className="text-sm text-muted-foreground">We'll be in touch soon.</p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              className="p-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" className="rounded-xl bg-muted/30 border-border/50 h-11 focus:border-accent transition-colors text-sm" {...field} />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@email.com" className="rounded-xl bg-muted/30 border-border/50 h-11 focus:border-accent transition-colors text-sm" {...field} />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">Service Interested In</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-xl w-full bg-muted/30 border-border/50 h-11! focus:border-accent transition-colors text-sm">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-popover border-border z-200">
                            {servicesOverview.map((s) => (
                              <SelectItem key={s.slug} value={s.title} className="text-sm focus:bg-accent/10">
                                {s.title}
                              </SelectItem>
                            ))}
                            <SelectItem value={"Other"} className="text-sm focus:bg-accent/10">
                              Other
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />


                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="How can we help?" className="rounded-xl bg-muted/30 border-border/50 h-11 focus:border-accent transition-colors text-sm" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell us about your project..." rows={4} className="rounded-xl bg-muted/30 border-border/50 focus:border-accent transition-colors resize-none text-sm" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90 h-12 font-medium text-sm">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>

                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Mail className="h-3.5 w-3.5 text-accent" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Or email us directly</p>
                      <Link href={mailInfo.link} className="text-xs hover:text-accent transition-colors duration-300 font-medium text-foreground">{mailInfo.value}</Link>
                    </div>
                    <ArrowUpRight className="h-3 w-3 text-muted-foreground/40 ml-auto" />
                  </div>
                </form>
              </Form>
            </motion.div>
          )}
        </AnimatePresence>
      </SheetContent>
    </Sheet>
  );
};

export default ContactDrawer;
