"use client"
import { motion, useInView } from "motion/react"
import { useRef } from "react"

const HighlightedBrandName = ({ animate = false, once = false }) => {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, {
        once,
        margin: "-20px"
    })
    return (
        animate ? <span
            ref={containerRef}
            className='relative inline-block '>
            <motion.span
                className='text-accent-foreground font-playfair font-extrabold px-0.5 py-px'
                initial={{
                    filter: "blur(10px)",
                    scale: 0.8,
                    opacity: 0
                }}
                animate={animate && isInView ? {
                    filter: "blur(0px)",
                    scale: 1,
                    opacity: 1
                } : {}}
                transition={{
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                    filter: { duration: 0.5, delay: 0.3 },
                    scale: {
                        type: "spring",
                        stiffness: 100,
                        damping: 15
                    }
                }}
            >
                T-Solutionz
            </motion.span>
            <motion.span
                className="absolute inset-0 -z-10  bg-accent"
                initial={{
                    filter: "blur(10px)",
                }}
                animate={animate && isInView ? {
                    filter: "blur(0px)",
                } : {}}
                transition={{
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                    filter: { duration: .8 },
                }}
            />
        </span> : <span
            className='relative inline-block '>
            <span
                className='text-accent-foreground font-playfair font-extrabold px-0.5 py-px'>
                T-Solutionz
            </span>
            <span
                className="absolute inset-0 -z-10  bg-accent"
            />
        </span>
    )
}

export default HighlightedBrandName