import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "next-themes"
import { ReactNode } from "react"

export const RootProvider = ({ children }: { children: ReactNode }) => {
    return (
        <ThemeProvider
            attribute={"class"}
            enableColorScheme
            defaultTheme="dark"
            storageKey="t-solutions-theme"
        >
            <Toaster />
            {children}
        </ThemeProvider>
    )
}

export default RootProvider