"use client"

import { IService, IServiceOverview } from "@/types/service.types";
import { createContext, ReactNode, useContext } from "react";

type ServiceContextType = {
    servicesOverview: IServiceOverview[];
    services: IService[]
}
const ServiceContext = createContext<ServiceContextType | null>(null)



const ServiceContextProvider = ({
    children,
    services,
    servicesOverview
}: ServiceContextType & { children: ReactNode }) => {

    return (
        <ServiceContext.Provider
            value={{
                services,
                servicesOverview
            }}
        >
            {children}
        </ServiceContext.Provider>
    )
}

const useServices = () => {
    const ctx = useContext(ServiceContext)
    if (!ctx) throw new Error("useServices must be wrap within the ServiceContextProvider.")
    return ctx;
}

export {
    ServiceContextProvider,
    useServices
}