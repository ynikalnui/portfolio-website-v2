export default function HeroSection() {
    const introQualities = ["Front-End Developer", "5+ Years Experience", "3+ Well Done Projects", "20+ Skills"]

    return (
        <section className="flex pt-20 w-full h-[70vh] md:h-screen relative">
            <div className="absolute right-0 bottom-0 pt-20 h-full w-full md:w-auto flex items-end justify-center md:justify-end">
                <img 
                src="/images/personal-photo.png"
                alt="oleh skakun photo"
                className="max-h-full w-auto md:w-9/12 lg:w-11/12 xl:w-full select-none"
                style={{
                    WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
                    maskImage: "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"
                }}
                />
            </div>

            <div className="w-full md:w-7/12 xl:w-6/12 h-fit md:h-[80%] xl:h-full flex flex-col gap-y-10 items-center justify-center mt-auto pb-14">
                <h1 
                data-aos="fade-up"
                className="text-center font-semibold text-5xl lg:text-7xl tracking-wider">
                    Oleh Skakun
                </h1>

                <ul className="font-medium text-2xl lg:text-3xl flex flex-col gap-y-8 w-full">
                    {
                        introQualities.map((quality, index) => (
                            <li
                            key={index}
                            className="flex items-center w-full overflow-hidden">
                                <div 
                                data-aos="slide-right"
                                data-aos-delay={index * 200}
                                className="flex-1 bg-black h-[3px]" />

                                <h2 
                                data-aos="fade-in"
                                data-aos-delay={index * 300}
                                className="px-4">
                                    {quality}
                                </h2>

                                <div
                                data-aos="slide-left"
                                data-aos-delay={index * 200}
                                className="flex-1 bg-black h-[3px]"
                                />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}