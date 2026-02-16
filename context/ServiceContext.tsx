"use client"

import { IServiceOverview } from "@/types/service.types";
import { createContext, ReactNode, useContext } from "react";

type ServiceContextType = {
    servicesOverview: IServiceOverview[];
}
const ServiceContext = createContext<ServiceContextType | null>(null)



const ServiceContextProvider = ({
    children,
    servicesOverview
}: ServiceContextType & { children: ReactNode }) => {

    return (
        <ServiceContext.Provider
            value={{
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