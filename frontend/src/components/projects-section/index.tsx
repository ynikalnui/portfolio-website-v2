import OpenModalImage from './OpenModalImage'

export default function ProjectsSection() {
  const projects = [
    {
      name: 'Swapy',
      image: '/images/project.png',
      date: 'MAY 2025 - MAY 2025',
      description: 'askjdhaskjhgdkhjashkdashkdas'
    },
    {
      name: 'Project 2',
      image: '/images/project.png',
      date: 'JUN 2025 - JUN 2025',
      description: 'Description for project 2'
    },
    {
      name: 'Project 3',
      image: '/images/project.png',
      date: 'JUL 2025 - JUL 2025',
      description: 'Description for project 3'
    }
  ]

  return (
    <section id='projects' className='section-container'>
      <h2 data-aos='fade-up' className='section-title'>
        Projects
      </h2>

      <div className='flex flex-wrap justify-between gap-y-8'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='w-full overflow-hidden md:flex md:gap-x-8'
          >
            <div className='flex w-full flex-col items-center gap-y-4 md:w-7/12'>
              <h3
                data-aos='fade-down'
                className='text-2xl font-normal tracking-widest lg:text-3xl'
              >
                {project.name}
              </h3>

              <OpenModalImage
                imageSrc={project.image}
                imageAlt={project.name}
              />

              <h4
                data-aos='fade-up'
                className='text-lg font-normal tracking-widest lg:text-xl'
              >
                {project.date}
              </h4>
            </div>

            <div className='hidden h-full w-5/12 flex-col items-center justify-center gap-y-8 md:flex'>
              <div className='h-[3px] w-full bg-black' data-aos='fade-down' />

              <p
                className='text-center text-sm font-normal lg:text-base'
                data-aos='fade-in'
                data-aos-delay='300'
              >
                {project.description}
              </p>

              <div className='h-[3px] w-full bg-black' data-aos='fade-up' />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
