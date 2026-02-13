import { ServiceContextProvider } from "@/context/ServiceContext";
import { getServicesOverview, getServices } from "@/helpers/service.helper";
import RootProvider from "@/providers/RootProvider";
import { SanityLive } from "@/sanity/lib/live";

export default async function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [
        servicesOverviewResponse,
        servicesResponse
    ] = await Promise.allSettled([
        getServicesOverview(),
        getServices()
    ])

    const servicesOverview = servicesOverviewResponse.status === "fulfilled" ? servicesOverviewResponse.value : []
    const services = servicesResponse.status === "fulfilled" ? servicesResponse.value : []
    return (
        <ServiceContextProvider
            services={services}
            servicesOverview={servicesOverview}
        >
            <RootProvider>
                {children}
            </RootProvider>
            <SanityLive />
        </ServiceContextProvider>
    );
}
