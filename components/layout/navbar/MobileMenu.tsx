import ContactDrawer from '@/components/ContactDrawer'
import { Button } from '@/components/ui/button'
import { navLinks } from '@/constants/navigation.constants'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { Dispatch, SetStateAction } from 'react'

type Props = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}
const MobileMenu = ({
    open,
    setOpen,
}: Props) => {

    const pathname = usePathname()
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-40 lg:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
                    <motion.nav
                        className="relative z-10 flex flex-col items-center justify-center h-full gap-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ delay: 0.1 }}
                    >
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.to}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15 + i * 0.05 }}
                            >
                                <Link
                                    href={link.to}
                                    onClick={() => setOpen(false)}
                                    className={`text-3xl font-semibold transition-colors ${pathname === link.to
                                        ? "text-accent"
                                        : "text-foreground/60 hover:text-foreground"
                                        }`}
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                    {link.label}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <ContactDrawer>
                                <Button
                                    size="lg"
                                    className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-10 mt-4"
                                    onClick={() => setOpen(false)}
                                >
                                    Get in Touch
                                </Button>
                            </ContactDrawer>
                        </motion.div>
                    </motion.nav>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default MobileMenu