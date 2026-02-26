"use client"

import {
    // ThemeToggle,
    Logo
} from '@/components/shared'
import { Button } from '@/components/ui/button'
import { navLinks } from '@/constants/navigation.constants'
import { useServices } from '@/context/ServiceContext'
import { getIconByName } from '@/lib/icon-mapper'
import { cn } from '@/lib/utils'
import { ChevronDown, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import ContainerLayout from '../ContainerLayout'

type Props = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}
const MobileMenu = ({
    open,
    setOpen,
}: Props) => {

    const [mounted, setMounted] = useState(false)


    const pathname = usePathname()
    const [mobileServices, setMobileServices] = useState(false)
    const { servicesOverview } = useServices()

    useEffect(() => {
        if (mounted) return;
        setMounted(true)
    }, [])

    if (!mounted) return;
    return (
        createPortal(
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="fixed inset-0 z-999 bg-background/95 backdrop-blur-xl
                        h-screen overflow-y-auto lg:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.15, ease: "easeInOut" } }}
                    >

                        {/* Mobile Menu Header  */}
                        <motion.header
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ opacity: 0, y: 30, scale: 0.97, transition: { duration: 0.3, ease: "easeIn" } }}
                            transition={{ delay: 0.2 }}
                            className=" fixed glass z-999 w-full">
                            <ContainerLayout className='flex justify-between w-full'>

                                <Logo
                                    className='h-10'
                                    link
                                />

                                <div className="flex items-center gap-2 lg:hidden">
                                    {/* <ThemeToggle /> */}
                                    <Button
                                        onClick={() => setOpen(false)}
                                        className="w-10 h-10 flex items-center justify-center text-foreground rounded-full bg-transparent hover:bg-accent/10 transition-colors"
                                    >
                                        {open && <X className="size-5!" />}
                                    </Button>
                                </div>
                            </ContainerLayout>
                        </motion.header>

                        {/* Mobile Menu Navbar  */}
                        <motion.nav
                            className="relative z-10 flex flex-col items-center 
                            justify-start gap-8 pt-28 pb-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 30, scale: 0.97, transition: { duration: 0.3, ease: "easeIn" } }}
                            transition={{ delay: 0.1 }}
                        >

                            {navLinks.map((link, i) => {
                                const isActive = pathname === link.to || (link.to !== "/" && pathname.startsWith(link.to))
                                return (
                                    <motion.div
                                        key={link.to}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.25 + i * 0.05 }}
                                        className="flex flex-col items-center w-full max-w-xs"
                                    >
                                        {link.hasDropdown ? (
                                            <>
                                                <div className="flex items-center h-full gap-3">
                                                    <Link
                                                        href={link.to}
                                                        onClick={() => setOpen(false)}
                                                        className={cn(
                                                            "text-3xl font-playfair font-semibold transition-colors",
                                                            isActive
                                                                ? "text-accent"
                                                                : "text-foreground/60 hover:text-foreground"
                                                        )}
                                                    >
                                                        {link.label}
                                                    </Link>
                                                    <Button
                                                        type="button"
                                                        onClick={() => setMobileServices(!mobileServices)}
                                                        className="w-9 h-9 rounded-full bg-accent/10 flex items-center hover:bg-accent/20 justify-center active:scale-90 transition-transform"
                                                    >
                                                        <motion.div
                                                            animate={{ rotate: mobileServices ? 180 : 0 }}
                                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                                        >
                                                            <ChevronDown className="h-5 w-5 text-accent" />
                                                        </motion.div>
                                                    </Button>
                                                </div>
                                                <AnimatePresence>
                                                    {mobileServices && (
                                                        <motion.div
                                                            className="mt-4 grid grid-cols-2 gap-2 w-full bg-card/80 backdrop-blur-md rounded-2xl border border-border/50 p-3 overflow-hidden"
                                                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                                            animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                                                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                                        >
                                                            {servicesOverview.map((item) => {
                                                                const Icon = getIconByName(item.icon)
                                                                return (
                                                                    <Link
                                                                        key={item._id}
                                                                        href={`/services/${item.slug}`}
                                                                        onClick={() => { setOpen(false); setMobileServices(false); }}
                                                                        className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-accent/10 active:bg-accent/15 transition-colors"
                                                                    >
                                                                        <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                                                                            <Icon className="h-3.5 w-3.5 text-accent" />
                                                                        </div>
                                                                        <div className="min-w-0">
                                                                            <p className="text-xs font-medium text-foreground leading-tight">
                                                                                {item.title}
                                                                            </p>
                                                                            <p className="text-[10px] text-muted-foreground/80 mt-0.5 leading-snug">
                                                                                {item.overviewLabel}
                                                                            </p>
                                                                        </div>
                                                                    </Link>
                                                                )
                                                            })}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </>
                                        ) : (
                                            <Link
                                                href={link.to}
                                                onClick={() => setOpen(false)}
                                                className={cn(
                                                    "text-3xl font-playfair font-semibold transition-colors",
                                                    isActive
                                                        ? "text-accent"
                                                        : "text-foreground/60 hover:text-foreground"

                                                )}
                                            >
                                                {link.label}
                                            </Link>
                                        )}
                                    </motion.div>
                                )
                            })}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Link href={'/contact'}>
                                    <Button
                                        size="lg"
                                        className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-10 mt-4"
                                        onClick={() => setOpen(false)}
                                    >
                                        Get in Touch
                                    </Button>
                                </Link>
                            </motion.div>
                        </motion.nav>

                    </motion.div>
                )}
            </AnimatePresence>,
            document.body
        )
    )
}

export default MobileMenu