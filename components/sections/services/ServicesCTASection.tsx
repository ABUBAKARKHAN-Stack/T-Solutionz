import { CTASection } from '@/components/shared'

const ServicesCTASection = () => {
    return (
        <CTASection
            title={<>Need a custom<br /><span className="text-accent italic">solution?</span></>}
            description="Every business is unique. Let's talk about how we can tailor our services to your needs."
            buttonText="Get in Touch"
        />
    )
}

export default ServicesCTASection