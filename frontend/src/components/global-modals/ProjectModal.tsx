'use client'

import useProjectModalStore from "@/store/useProjectModalStore";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

export default function ProjectModal() {
    const {isOpened, toggleProjectModal} = useProjectModalStore()

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
                toggleProjectModal();
            }
        };

        if (isOpened) {
            document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpened, toggleProjectModal]);

    return (
        <AnimatePresence>
            {
                isOpened && (
                    <motion.div 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    transition={{duration: 0.3}}
                    className="fixed z-[999] inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center"
                    onClick={toggleProjectModal}
                    >
                        <div 
                        data-aos="fade-up"
                        className="flex flex-col gap-y-6 items-center relative w-11/12 md:w-10/12 lg:w-8/12 max-h-[80vh] overflow-auto no-scrollbar bg-white py-4 px-6"
                        onClick={(e) => e.stopPropagation()}>
                            <button 
                            className="absolute top-2 right-2"
                            onClick={toggleProjectModal}>
                                <Image 
                                src="/images/cross-icon.svg"
                                alt="close modal"
                                width={20}
                                height={20}
                                />
                            </button>

                            <div className="flex flex-col text-center gap-y-2 md:gap-y-4">
                                <p className="font-bold tracking-widest text-2xl md:text-3xl lg:text-4xl">Swapy</p>
                                <p className="font-normal tracking-widest text-lg md:text-xl lg:text-2xl">MAY 2021 - MAY 2021</p>
                            </div>

                            <div className="flex flex-col gap-y-2 items-center">
                                <p 
                                data-aos="fade-up"
                                className="section-text-xl">
                                    Stack
                                </p>

                                <div className="flex gap-x-4 overflow-hidden">
                                    <div 
                                    data-aos="slide-down"
                                    data-aos-delay="300"
                                    data-aos-duration="1000"
                                    className="bg-black w-[3px] grow"/>

                                    <ul 
                                    data-aos="fade-in"
                                    data-aos-delay="300"
                                    className="flex gap-x-4 gap-y-2 flex-wrap section-text-lg uppercase">
                                        <li>asd</li>
                                        <li>asd</li>
                                        <li>asd</li>
                                        <li>asd</li>
                                    </ul>

                                    <div 
                                    data-aos="slide-down"
                                    data-aos-delay="300"
                                    data-aos-duration="1000"
                                    className="bg-black w-[3px] grow"/>
                                </div>
                            </div>

                            <div className="w-full flex flex-col items-center gap-y-2 overflow-clip">
                                <p 
                                data-aos="fade-down"
                                data-aos-delay="300"
                                className="section-text-xl overflow-hidden">
                                    Description
                                </p>

                                <div 
                                data-aos="slide-right"
                                data-aos-delay="300"
                                data-aos-duration="1000"
                                className="w-full bg-black h-[3px]"
                                />

                                <p 
                                data-aos="fade-up"
                                data-aos-delay="300"
                                className="text-start w-full section-text-lg">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>

                            <ul className="w-full flex flex-col gap-y-5">
                                <li data-aos="fade-up">
                                    <Image 
                                    src="/images/project.png"
                                    alt="project image"
                                    width={980}
                                    height={510}
                                    className="w-full"
                                    />
                                </li>
                                <li data-aos="fade-up">
                                    <Image 
                                    src="/images/project.png"
                                    alt="project image"
                                    width={980}
                                    height={510}
                                    className="w-full"
                                    />
                                </li>
                                <li data-aos="fade-up">
                                    <Image 
                                    src="/images/project.png"
                                    alt="project image"
                                    width={980}
                                    height={510}
                                    className="w-full"
                                    />
                                </li>
                            </ul>

                            <div className="flex w-full gap-x-4 justify-around">
                                <button className="bg-black w-1/2 md:w-1/3 text-white p-4 section-text-lg 
                                border-2 border-transparent transition-colors hover:bg-transparent hover:text-black hover:border-black">
                                    WEBSITE
                                </button>

                                <button className="border-2 border-black w-1/2 md:w-1/3 text-black section-text-lg transition-colors
                                hover:bg-black hover:text-white hover:border-transparent"
                                onClick={toggleProjectModal}>
                                    BACK
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}