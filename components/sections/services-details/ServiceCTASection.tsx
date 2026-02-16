"use client"
import { CTASection } from '@/components/shared'

type Props = { serviceTitle: string }
const ServiceCTASection = ({ serviceTitle }: Props) => {
    return (
        <CTASection
            title={<>Ready to <span className="text-accent italic">get started?</span></>}
            description={`Let's discuss how ${serviceTitle.toLowerCase()} can transform your business.`}
        />
    )
}

export default ServiceCTASection