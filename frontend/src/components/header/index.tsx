'use client'

import useNavMenuStore from "@/store/useNavMenuStore";
import DesktopNav from "./DesktopNav";
import OpenMenuButton from "./utils/OpenMenuButton";
import { Link } from "react-scroll";

export default function Header() {
    const isOpened = useNavMenuStore((state) => state.isOpened);

    return (
        <div className={`fixed z-50 top-0 left-0 right-0 mx-auto w-full py-4 px-4 flex justify-between
        ${isOpened ? 'delay-300 bg-transparent' : 'border-b-2 border-black bg-white/60 backdrop-blur-sm'}`}>

            <Link 
            to="hero"
            smooth={true}
            duration={500}
            className="flex gap-x-1 items-center cursor-pointer select-none">
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
            </Link>

            <DesktopNav />

            <OpenMenuButton />
        </div>
    );
}
