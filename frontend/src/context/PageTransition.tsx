"use client"

import { motion } from "framer-motion"

interface MotionProps {
    children: React.ReactNode;
}

export const PageTransition = ({ children }: MotionProps) => {
    return (
        <motion.div
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 12, opacity: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                mass: 1,
                overshootClamping: true,
                restDelta: 0.4,
            }}
        >
            {children}
        </motion.div>

    )
}

export default PageTransition

