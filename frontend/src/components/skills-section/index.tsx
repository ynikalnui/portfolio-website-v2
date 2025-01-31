export default function SkillsSection() {
    const skillsData = [
        {
          title: "Hard Skills",
          skills: [
            "HTML", "CSS", "JavaScript", "React", "Node.js", 
            "Tailwind CSS", "Git", "Webpack", "Next.js", "TypeScript"
          ],
          aosEffect: "slide-right"
        },
        {
          title: "Soft Skills",
          skills: [
            "Kind", "Empathy", "Communication", "Problem-Solving", "Teamwork", 
            "Adaptability", "Leadership", "Creativity", "Time Management", "Conflict Resolution"
          ],
          aosEffect: "slide-left"
        }
      ];

    return (
        <section className="section-container">
            <h2 
            data-aos="fade-up"
            className="section-title">
                Skills
            </h2>

            <div className="flex flex-col gap-y-8">
                {skillsData.map((section, index) => (
                    <div 
                    key={index} 
                    className="flex flex-col gap-y-4 overflow-hidden">
                        <h3 
                        data-aos="fade-up"
                        className="section-text-xl">
                            {section.title}
                        </h3>
                        
                        <ul className="flex gap-x-4 gap-y-2 flex-wrap section-text-lg">
                            {section.skills.map((skill, idx) => (
                                <li 
                                data-aos="fade-in"
                                data-aos-delay={idx*200}
                                key={idx}>
                                    {skill}
                                </li>
                            ))}
                        </ul>

                        <div 
                            data-aos={section.aosEffect}
                            data-aos-duration="1000"
                            className="bg-black w-full h-[3px]"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}