import { PageTransition } from '@/components/layout'
import {
    ServicesCTASection,
    ServicesGridSection,
    ServicesPageHero
} from '@/components/sections/services'

const ServicesPage = () => {
    return (
        <PageTransition>
            <ServicesPageHero />
            <ServicesGridSection />
            <ServicesCTASection />
        </PageTransition>
    )
}

export default ServicesPage