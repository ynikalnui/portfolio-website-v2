import { client } from '@/lib/apollo'
import OpenModalImage from './OpenModalImage'
import { GET_PROJECTS_SECTION_DATA, TProjectsSectionResponse } from './projects-section-query'
import { getStrapiUrl } from '@/utils/getStrapiUrl'

export default async function ProjectsSection() {
  const { data } = await client.query<TProjectsSectionResponse>({
    query: GET_PROJECTS_SECTION_DATA
  })

  return (
    <section id='projects' className='section-container'>
      <h2 data-aos='fade-up' className='section-title'>
        Projects
      </h2>

      <div className='flex flex-wrap justify-between gap-y-8'>
        {data.projectItems.map((project, index) => (
          <div key={index} className='w-full overflow-hidden md:flex md:gap-x-8'>
            <div className='flex w-full flex-col items-center gap-y-4 md:w-7/12'>
              <h3 data-aos='fade-down' className='text-2xl font-normal tracking-widest lg:text-3xl'>
                {project.title}
              </h3>

              <OpenModalImage
                imageSrc={getStrapiUrl(project.projectImage.url)}
                imageAlt={project.projectImage.alternativeText}
                documentId={project.documentId}
              />

              <h4 data-aos='fade-up' className='text-lg font-normal tracking-widest lg:text-xl'>
                {project.dates}
              </h4>
            </div>

            <div className='hidden h-full w-5/12 flex-col items-center justify-center gap-y-8 md:flex'>
              <div className='h-[3px] w-full bg-black' data-aos='fade-down' />

              <p className='text-center text-sm font-normal lg:text-base' data-aos='fade-in' data-aos-delay='300'>
                {project.projectShortDescription}
              </p>

              <div className='h-[3px] w-full bg-black' data-aos='fade-up' />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
