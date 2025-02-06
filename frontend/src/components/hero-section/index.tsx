import { client } from '@/lib/apollo'
import { GET_HERO_SECTION_DATA, THeroSectionResponse } from './hero-section-query'
import { getStrapiUrl } from '@/utils/getStrapiUrl'
import Image from 'next/image'

export default async function HeroSection() {
  const { data } = await client.query<THeroSectionResponse>({
    query: GET_HERO_SECTION_DATA
  })

  return (
    <section
      id='hero'
      className='relative flex min-h-[70vh] w-full bg-gradient-to-t from-white to-white/0 pt-20 md:h-screen'
    >
      <Image
        src={getStrapiUrl(data.heroSection.personalPhoto.url)}
        alt='Hero Background'
        quality={100}
        fill
        priority
        className='-z-10 object-contain object-[center_bottom] md:object-right-bottom'
      />
      <div className='mt-auto flex h-fit w-full flex-col items-center justify-center gap-y-10 pb-14 md:h-[80%] md:w-7/12 xl:h-full xl:w-6/12'>
        <h1 data-aos='fade-up' className='text-center text-5xl font-semibold tracking-wider lg:text-7xl'>
          {data.heroSection.title}
        </h1>

        <ul className='flex w-full flex-col gap-y-8 text-2xl font-medium lg:text-3xl'>
          {data.heroSection.qualities.map((item, index) => (
            <li key={index} className='flex w-full items-center overflow-hidden'>
              <div data-aos='slide-right' data-aos-delay={index * 200} className='h-[3px] flex-1 bg-black' />

              <h2 data-aos='fade-in' data-aos-delay={index * 300} className='px-4'>
                {item.content}
              </h2>

              <div data-aos='slide-left' data-aos-delay={index * 200} className='h-[3px] flex-1 bg-black' />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
