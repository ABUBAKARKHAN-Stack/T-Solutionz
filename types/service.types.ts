import { IImage } from "./shared.types";

export type IService = {
    _id: string
    icon: string
    title: string
    overviewLabel: string;
    slug: string
    image: IImage

    featured: boolean

    description: string
    longDescription: string

    tags: string[]
    deliverables: string[]

    technologies: ServiceTechnology[]
    approach: ServiceApproachStep[]
    differentiators: ServiceDifferentiator[]
    faqs: ServiceFAQ[]
}

export type IServiceOverview = {
    _id: string
    icon: string
    title: string
    overviewLabel: string
    slug: string
    image: IImage
    description: string
    tags: string[]
    featured: boolean
}


export type ServiceTechnology = {
    name: string
    category: string
    featured?: boolean
    description: string
}

export type ServiceApproachStep = {
    step: string
    title: string
    description: string
}

export type ServiceDifferentiator = {
    title: string
    description: string
}

export type ServiceFAQ = {
    q: string
    a: string
}
