"use client"

import { ArrowUpRight } from "lucide-react";
import { contactInfo, navLinks, socials } from "@/constants/navigation.constants";
import Link from "next/link";
import ContainerLayout from "./ContainerLayout";
import { useServices } from "@/context/ServiceContext";
import Logo from "../shared/Logo";
import { APP_NAME } from "@/constants/app.constants";
import { MagneticButton } from "../shared";
import { cn } from "@/lib/utils";

const Footer = () => {
  const { servicesOverview } = useServices()
  return (
    <footer className="bg-background text-foreground">
      <ContainerLayout className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo className="lg:h-15 xsm:h-13 h-11" />
            <p className="text-foreground/50 mt-4 leading-relaxed max-w-sm text-sm">
              Building high-performance digital products with full stack development, cloud solutions, DevOps, and AI. We turn your ideas into scalable reality.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-xs uppercase tracking-[0.2em] text-foreground/40 mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    href={link.to}
                    className="text-sm text-foreground/60 hover:text-accent transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-xs uppercase tracking-[0.2em] text-foreground/40 mb-6">Services</h4>
            <ul className="space-y-3">
              {servicesOverview.map((link) => (
                <li key={link.slug}>
                  <Link
                    href={`/services${link.slug}`}
                    className="text-sm text-foreground/60 hover:text-accent transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {link.title}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info And Socials */}
          <div className="lg:col-span-3 space-y-6">

            <div>
              <h4 className="font-semibold text-xs uppercase tracking-[0.2em] text-foreground/40 mb-6">Contact</h4>
              <ul className="space-y-4">
                {contactInfo.map((item) => (
                  <li key={item.link} >
                    <a
                      href={item.link}
                      className="text-sm text-foreground/60 hover:text-accent transition-colors duration-300 flex items-center gap-3 group"
                    > <div className="w-8 h-8 rounded-full bg-foreground/10 group-hover:bg-accent/10 flex items-center justify-center shrink-0 transition-colors duration-300">
                        <item.icon className="h-3.5 w-3.5" />
                      </div>
                      {item.value}
                      <ArrowUpRight className="h-3 w-3 -translate-x-2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-x-2">
              {socials?.map((platform) => (
                <MagneticButton key={platform.url} strength={0.2}>
                  <a
                    href={platform.url}
                    aria-label={platform.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group relative rounded-full size-10 flex items-center justify-center overflow-hidden",
                      "border border-border text-xs font-medium transition-colors",
                      "hover:text-accent-foreground"
                    )}
                  >
                    <platform.icon className="size-5 z-10" />

                    <span
                      className={cn(
                        "absolute inset-0 z-0 bg-accent",
                        "translate-y-full group-hover:translate-y-0",
                        "transition-transform duration-300 ease-out"
                      )}
                    />
                  </a>
                </MagneticButton>
              )
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-foreground/10 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground/30">© {new Date().getFullYear()} {" "}
            <span className="font-bold font-playfair text-accent">
              {APP_NAME}
            </span>. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-foreground/30 hover:text-foreground/60 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-foreground/30 hover:text-foreground/60 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </ContainerLayout>
    </footer>
  );
};

export default Footer;
