"use client";

import useNavMenuStore from "@/store/useNavMenuStore";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-scroll";

export default function MobileNav() {
  const { isOpened, toggleMenu } = useNavMenuStore();

  const navItems = [
    { link: "skills", title: "Skills" },
    { link: "projects", title: "Projects" },
    { link: "feedbacks", title: "Feedbacks" },
    { link: "contact", title: "Contact" },
  ];

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
      {isOpened && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ bounce: 0, duration: 0.3 }}
          className="fixed flex items-center justify-center md:hidden z-40 inset-0 bg-black/90 backdrop-blur-xl"
        >
          <nav>
            <ul className="flex flex-col items-center gap-y-6">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="font-semibold text-4xl text-white cursor-pointer"
                >
                  <Link
                    to={item.link}
                    smooth={true}
                    duration={500}
                    offset={-50}
                    onClick={toggleMenu}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
