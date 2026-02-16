import { PageHero } from '@/components/shared'

const ServicesPageHero = () => {
  return (
     <PageHero
        eyebrow="Our Services"
        title={<>What we <span className="text-accent italic">do best</span></>}
        description="End-to-end development services designed to help your business build, ship, and scale with confidence."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
  )
}

export default ServicesPageHero