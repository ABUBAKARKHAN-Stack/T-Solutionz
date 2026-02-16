import { ServiceContextProvider } from "@/context/ServiceContext";
import { getServicesOverview } from "@/helpers/service.helper";
import RootProvider from "@/providers/RootProvider";
import { SanityLive } from "@/sanity/lib/live";

export default async function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [
        servicesOverviewResponse,
    ] = await Promise.allSettled([
        getServicesOverview(),
    ])

    const servicesOverview = servicesOverviewResponse.status === "fulfilled" ? servicesOverviewResponse.value : [];
    
    return (
        <ServiceContextProvider
            servicesOverview={servicesOverview}
        >
            <RootProvider>
                {children}
            </RootProvider>
            <SanityLive />
        </ServiceContextProvider>
    );
}
