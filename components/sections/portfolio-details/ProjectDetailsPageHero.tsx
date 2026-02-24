import { PageHero } from '@/components/shared'
import { IImage } from '@/types/shared.types';
import React, { FC } from 'react'

type Props = {
    category: string;
    title: string;
    description: string;
    image: IImage;
    year: string
}
const ProjectDetailsPageHero: FC<Props> = ({
    category,
    description,
    image,
    title,
    year

}) => {
    return (
        <PageHero
            eyebrow={category}
            title={title}
            description={description}
            backgroundImage={image}
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Portfolio", href: "/portfolio" },
                { label: title },
            ]}
        >
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">

                <div>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60">Year</span>
                    <p className="font-medium text-foreground">{year}</p>
                </div>
                <div>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60">Category</span>
                    <p className="font-medium text-foreground">{category}</p>
                </div>
            </div>
        </PageHero>

    )
}

export default ProjectDetailsPageHero