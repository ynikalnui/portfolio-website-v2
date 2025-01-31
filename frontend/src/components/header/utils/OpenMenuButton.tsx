'use client'

import { AnimatePresence, motion } from "framer-motion";
import BurgerIcon from "./BurgerIcon";
import useNavMenuStore from "@/store/useNavMenuStore";

export default function OpenMenuButton() {
    const {isOpened, toggleMenu} = useNavMenuStore()

    return (
        <button 
        className="flex md:hidden gap-x-2 font-semibold text-base tracking-wide items-center cursor-pointer"
        onClick={() => toggleMenu()}
        >
            <span className="relative w-14 h-full flex items-center">
                <AnimatePresence initial={false}>
                    {isOpened ? (
                        <motion.span
                            key="CLOSE"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.2 }} 
                            className="absolute text-white transition-all"
                        >
                            CLOSE
                        </motion.span>
                    ) : (
                        <motion.span
                            key="MENU"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.2 }}
                            className="absolute text-black transition-all"
                        >
                            MENU
                        </motion.span>
                    )}
                </AnimatePresence>
            </span>
            
            <BurgerIcon isOpened={isOpened}/>
        </button>
    )
}