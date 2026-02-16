import { PageHero } from '@/components/shared'
import { APP_NAME } from '@/constants/app.constants'

const AboutPageHero = () => {
    return (
        <PageHero
            eyebrow="About Us"
            title={<>About <span className="text-accent italic">{APP_NAME}</span></>}
            description="Founded with a vision to redefine corporate consulting, T-Solutions combines strategic expertise with a deep commitment to sustainability."
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        />
    )
}

export default AboutPageHero