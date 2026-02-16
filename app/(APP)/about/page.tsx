import { PageTransition } from '@/components/layout'
import {
    AboutPageHero,
    MissionSection,
    OurTeamSection,
    ValuesSection
} from '@/components/sections/about'

const AboutPage = () => {
    return (
        <PageTransition>
            <AboutPageHero />
            <MissionSection />
            <ValuesSection />
            <OurTeamSection />
        </PageTransition>
    )
}

export default AboutPage