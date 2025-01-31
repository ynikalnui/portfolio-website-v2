'use client'

import useNavMenuStore from "@/store/useNavMenuStore"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect } from "react";

export default function MobileNav() {
    const {isOpened, toggleMenu} = useNavMenuStore()

    useEffect(() => {
        if (isOpened) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpened]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                toggleMenu();
            }
        };

        if (isOpened) {
            document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpened, toggleMenu]);

    return (
        <AnimatePresence>
            {
                isOpened && (
                    <motion.div 
                    initial={{y:"100%", opacity:0}}
                    animate={{y:0, opacity:1}}
                    exit={{y:"-100%", opacity:0}}
                    transition={{bounce: 0, duration: 0.3}}
                    className="fixed md:hidden z-40 inset-0 bg-black/90 backdrop-blur-xl"
                    >

                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}