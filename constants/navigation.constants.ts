import { Brain, Cloud, Code2, Container, Mail, MapPin, Phone, Smartphone } from "lucide-react";

export const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services", hasDropdown: true },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Contact", to: "/contact" },
];


export const serviceItems = [
  { icon: Code2, label: "Full Stack Development", description: "End-to-end web applications" },
  { icon: Smartphone, label: "App Development", description: "iOS, Android & cross-platform" },
  { icon: Cloud, label: "Cloud Solutions", description: "Scalable cloud infrastructure" },
  { icon: Container, label: "DevOps & Automation", description: "CI/CD & infrastructure as code" },
  { icon: Brain, label: "AI & Machine Learning", description: "Intelligent automation & insights" },
];
export const contactInfo = [
  {
    label: "Email",
    link: "mailto:info@t-solutionz.com",
    icon: Mail
  },
   {
    label: "Phone",
    link: "+92-3257030523",
    icon: Phone
  },
]