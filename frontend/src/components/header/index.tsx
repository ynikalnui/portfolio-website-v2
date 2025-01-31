'use client'

import { useState, useEffect } from "react";
import useNavMenuStore from "@/store/useNavMenuStore";
import DesktopNav from "./DesktopNav";
import OpenMenuButton from "./utils/OpenMenuButton";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const isOpened = useNavMenuStore((state) => state.isOpened);

    useEffect(() => {
        if (window.scrollY > 30) {
            setScrolled(true);
        }

        const handleScroll = () => {
            if (window.scrollY > 30) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`fixed z-50 top-0 left-0 right-0 mx-auto w-full lg:max-w-[1600px] py-4 px-4 flex justify-between
            ${scrolled && !isOpened ? 'bg-white/60 backdrop-blur-sm' : 'delay-300 bg-transparent'}`}
        >
            <div className="flex gap-x-1 items-center">
                <div
                    className={`transition-all border-[3px] rounded-full size-10 flex justify-center items-center font-bold
                    ${isOpened ? 'border-white text-white delay-200' : 'border-black text-black'}`}
                >
                    OS
                </div>

                <div>
                    <p
                        className={`font-bold text-base transition-all ${isOpened ? 'text-white delay-200' : 'text-black'}`}
                    >
                        Oleh Skakun
                    </p>
                    <p
                        className={`font-medium text-sm transition-all ${isOpened ? 'text-white delay-200' : 'text-black'}`}
                    >
                        FRONT-END DEVELOPER
                    </p>
                </div>
            </div>

            <DesktopNav />

            <OpenMenuButton />
        </div>
    );
}
