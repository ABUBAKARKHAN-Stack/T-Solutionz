import { sanityFetch } from "@/sanity/lib/live"
import { IPortfolio, IPortfolioOverview } from "@/types/portfolio.types"
import { defineQuery } from "next-sanity"

const PORTFOLIO_OVERVIEW_QUERY = defineQuery(`*[_type == "portfolio"]{
  _id,
  title,
  "slug": slug.current,
  category,
  year,
  "image": {"source": image.asset._ref},
  description,
  tags,
  featured
}
`)

const PORTFOLIO_DATA_QUERY = defineQuery(`
 *[_type == "portfolio" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  category,
  year,
  "image": {"source": image.asset._ref},
  description,
  longDescription,
  tags,
  results,
  testimonial,
  featured
}
`)


export const getPortfolioOverview = async () => {
    try {
        const { data } = await sanityFetch({
            query: PORTFOLIO_OVERVIEW_QUERY,
            perspective: "published"
        })
        const portfolio = data as IPortfolioOverview[]
        return portfolio ?? []
    } catch (error) {
        console.log("Failed to fetch portfolio overview from sanity :: ", error);
        throw error

    }
}


export const getProjectDetails = async (slug: string) => {
    try {
        const { data } = await sanityFetch({
            query: PORTFOLIO_DATA_QUERY,
            params: { slug },
            perspective: "published"
        })
        const project = data as IPortfolio
        return project ?? null
    } catch (error) {
        console.log("Failed to fetch portfolio from sanity :: ", error);
        throw error
    }
}