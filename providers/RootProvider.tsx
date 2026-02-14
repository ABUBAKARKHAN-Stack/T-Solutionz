import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "next-themes"
import { ReactNode } from "react"
import { Footer, Navbar } from "@/components/layout/index"

export const RootProvider = ({ children }: { children: ReactNode }) => {
    return (
        <ThemeProvider
            attribute={"class"}
            enableColorScheme
            defaultTheme="dark"
            storageKey="t-solutions-theme"
        >
            <Toaster />
            <Navbar />
            {children}
            <Footer />
        </ThemeProvider>
    )
}

export default RootProvider