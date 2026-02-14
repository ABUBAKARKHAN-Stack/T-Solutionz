import { sanityFetch } from "@/sanity/lib/live"
import { IService, IServiceOverview } from "@/types/service.types"
import { defineQuery } from "next-sanity"

const SERVICES_OVERVIEW_QUERY = defineQuery(`*[_type == "service"]{
  _id,
  icon,
  title,
  overviewLabel,
  "slug": slug.current,
  image{
    "source":asset._ref,
    alt
  },
  description,
  tags,
  featured
}
`)

const SERVICES_DATA_QUERY = defineQuery(`
    *[_type == "service"]{
  _id,
  icon,
  title,
  overviewLabel,
  "slug": slug.current,
  image{
    "source":asset._ref,
    alt
  },
  featured,
  description,
  longDescription,
  tags,
  deliverables,
  technologies[]{
    name,
    category,
    featured,
    description
  },
  approach[]{
    step,
    title,
    description
  },
  differentiators[]{
    title,
    description
  },
  faqs[]{
    q,
    a
  }
}
`)


export const getServicesOverview = async () => {
    try {
        const { data } = await sanityFetch({
            query: SERVICES_OVERVIEW_QUERY,
            perspective: "published"
        })
        const services = data as IServiceOverview[]
        return services ?? []
    } catch (error) {
        console.log("Failed to fetch service overview from sanity :: ", error);
        throw error

    }
}


export const getServices = async () => {
    try {
        const { data } = await sanityFetch({
            query: SERVICES_DATA_QUERY,
            perspective: "published"
        })
        const services = data as IService[]
        return services ?? []
    } catch (error) {
        console.log("Failed to fetch service from sanity :: ", error);
        throw error
    }
}