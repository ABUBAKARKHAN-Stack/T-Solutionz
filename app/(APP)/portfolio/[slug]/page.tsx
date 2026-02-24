import { PageTransition } from "@/components/layout";
import { OtherProjectsSection, ProjectCTA, ProjectDetailsPageHero, ProjectDetailsSection } from "@/components/sections/portfolio-details";
import { APP_NAME } from "@/constants/app.constants";
import { getProjectDetails } from "@/helpers/portfolio.helper";
import { notFound } from "next/navigation";


type Props = {
    params: Promise<{ slug: string }>
}

const PortfolioDetailsPage = async ({ params }: Props) => {
    const { slug } = await params;
    const project = await getProjectDetails(slug);

    if (!project) return notFound()

    return (
        <PageTransition>

            {/* Project Page Hero  */}
            <ProjectDetailsPageHero
                category={project.category}
                description={project.description}
                image={{
                    ...project.image,
                    alt: `${project.title} – Screenshot of the project created by ${APP_NAME}`
                }}
                title={project.title}
                year={project.year}
            />

            {/* Project Details  */}

            <ProjectDetailsSection
                image={{
                    ...project.image,
                    alt: `${project.title} – Screenshot of the project created by ${APP_NAME}`
                }}
                longDescription={project.longDescription}
                results={project.results}
                tags={project.tags}
                testimonial={project.testimonial}
            />

            {/* Other Projects  */}
            <OtherProjectsSection />

            {/* Project CTA  */}
            <ProjectCTA />

        </PageTransition>
    );
};

export default PortfolioDetailsPage;
