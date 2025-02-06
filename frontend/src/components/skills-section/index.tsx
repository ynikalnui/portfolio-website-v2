import { client } from '@/lib/apollo'
import { GET_SKILLS_SECTION_DATA, TSkillsSectionResponse } from './skills-section-query'

export default async function SkillsSection() {
  const { data } = await client.query<TSkillsSectionResponse>({
    query: GET_SKILLS_SECTION_DATA,
    variables: {
      skillsPagination: { limit: 50 }
    }
  })

  return (
    <section id='skills' className='section-container'>
      <h2 data-aos='fade-up' className='section-title'>
        Skills
      </h2>

      <div className='flex flex-col gap-y-8'>
        {data.skillItems.map((item, index) => (
          <div key={index} className='flex flex-col gap-y-4 overflow-hidden'>
            <h3 data-aos='fade-up' className='section-text-xl'>
              {item.title}
            </h3>

            <ul className='section-text-lg flex flex-wrap gap-x-4 gap-y-2'>
              {item.skills.map((skill, idx) => (
                <li data-aos='fade-in' data-aos-delay={idx * 100} data-aos-disabled="mobile" key={idx}>
                  {skill.content}
                </li>
              ))}
            </ul>

            <div
              data-aos={index === 0 ? 'slide-right' : 'slide-left'}
              data-aos-duration='1000'
              className='h-[3px] w-full bg-black'
            />
          </div>
        ))}
      </div>
    </section>
  )
}
