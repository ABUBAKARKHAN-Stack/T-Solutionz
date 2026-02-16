import { PageTransition } from "@/components/layout";
import {
    ApproachSection,
    DifferentiatorsSection,
    OtherServicesSection,
    ServiceCTASection,
    ServiceFAQsSection,
    ServiceNotFoundSection,
    ServiceOverviewAndDeliverablesSection,
    ServicePageHero,
    TechnologiesSection,

} from "@/components/sections/services-details";
import { getServiceDetails } from "@/helpers/service.helper";

type Props = {
    params: Promise<{ slug: string }>
}

const ServiceDetail = async ({ params }: Props) => {
    const { slug } = await params;
    const service = await getServiceDetails(slug);

    if (!service) {
        return <ServiceNotFoundSection />
    }

    return (
        <PageTransition>

            {/* Service Page Hero  */}
            <ServicePageHero
                icon={service.icon}
                image={service.image}
                isFeatured={service.featured}
                serviceDescription={service.description}
                serviceTitle={service.title}
            />


            {/* Overview + Deliverables Section */}
            <ServiceOverviewAndDeliverablesSection
                deliverables={service.deliverables}
                tags={service.tags}
                serviceLongDescription={service.longDescription}
            />

            {/* Technologies Section */}
            <TechnologiesSection
                technologies={service.technologies}
            />


            {/* Our Approach Section */}
            <ApproachSection
                approach={service.approach}
            />

            {/* Why We Stand Out Section */}
            <DifferentiatorsSection
                differentiators={service.differentiators}
            />


            {/* FAQs Section */}
            <ServiceFAQsSection
                faqs={service.faqs}
            />


            {/* Other Services Section */}
            <OtherServicesSection />

            {/* Cta Section  */}
            <ServiceCTASection
                serviceTitle={service.title}
            />


        </PageTransition>
    );
};

export default ServiceDetail;
