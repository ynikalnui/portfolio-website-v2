import OpenModalImage from "./OpenModalImage";

export default function ProjectsSection() {
    const projects = [
        { name: "Swapy", image: "/images/project.png", date: "MAY 2025 - MAY 2025", description: "askjdhaskjhgdkhjashkdashkdas" },
        { name: "Project 2", image: "/images/project.png", date: "JUN 2025 - JUN 2025", description: "Description for project 2" },
        { name: "Project 3", image: "/images/project.png", date: "JUL 2025 - JUL 2025", description: "Description for project 3" }
    ];

    return (
        <section className="section-container h-screen">
            <h2 data-aos="fade-up" className="section-title">
                Projects
            </h2>

            <div className="flex flex-wrap gap-y-8 justify-between">
                {projects.map((project, index) => (
                    <div 
                    key={index} 
                    className="w-full md:flex md:gap-x-8 overflow-hidden">
                        <div className="flex flex-col items-center gap-y-4 w-full md:w-7/12">
                            <h3 
                            data-aos="fade-down"
                            className="font-normal tracking-widest text-2xl lg:text-3xl">
                                {project.name}
                            </h3>

                            <OpenModalImage 
                            imageSrc={project.image}
                            imageAlt={project.name}
                            />

                            <h4 
                            data-aos="fade-up" 
                            className="font-normal tracking-widest text-lg lg:text-xl">
                                {project.date}
                            </h4>
                        </div>

                        <div className="hidden md:flex flex-col gap-y-8 items-center w-5/12 h-full justify-center">
                            <div 
                            className="h-[3px] w-full bg-black"
                            data-aos="fade-down"
                            />

                            <p 
                            className="font-normal text-sm lg:text-base text-center"
                            data-aos="fade-in"
                            data-aos-delay="300"
                            >
                                {project.description}
                            </p>

                            <div 
                            className="h-[3px] w-full bg-black"
                            data-aos="fade-up"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
