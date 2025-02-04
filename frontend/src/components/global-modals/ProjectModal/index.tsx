'use client'

import Image from 'next/image'
import ProjectModalLayout from './ProjectModalLayout'
import { GET_PROJECTS_ITEM_DATA, TProjectsItemResponse } from './projects-item-query'
import { useQuery } from '@apollo/client'
import useProjectModalStore from '@/store/useProjectModalStore'
import { getStrapiUrl } from '@/utils/getStrapiUrl'
import Link from 'next/link'

export default function ProjectModal() {
  const toggleProjectModal = useProjectModalStore((state) => state.toggleProjectModal)

  const documentId = useProjectModalStore((state) => state.documentId)
  const { data } = useQuery<TProjectsItemResponse>(GET_PROJECTS_ITEM_DATA, { variables: { documentId: documentId } })

  return (
    <ProjectModalLayout>
      <button className='absolute right-2 top-2' onClick={toggleProjectModal}>
        <Image src='/images/cross-icon.svg' alt='close modal' width={20} height={20} />
      </button>

      <div className='flex flex-col gap-y-2 text-center md:gap-y-4'>
        <p className='text-2xl font-bold tracking-widest md:text-3xl lg:text-4xl'>{data?.projectItem.title}</p>
        <p className='text-lg font-normal tracking-widest md:text-xl lg:text-2xl'>{data?.projectItem.dates}</p>
      </div>

      <div className='flex flex-col items-center gap-y-2'>
        <p data-aos='fade-up' className='section-text-xl'>
          Stack
        </p>

        <div className='flex gap-x-4 overflow-hidden'>
          <div data-aos='slide-down' data-aos-delay='300' data-aos-duration='1000' className='w-[3px] grow bg-black' />

          <ul data-aos='fade-in' data-aos-delay='300' className='section-text-lg flex flex-wrap gap-x-4 gap-y-2 uppercase'>
            {data?.projectItem.projectStack.map((e, index) => <li key={index}>{e.content}</li>)}
          </ul>

          <div data-aos='slide-down' data-aos-delay='300' data-aos-duration='1000' className='w-[3px] grow bg-black' />
        </div>
      </div>

      <div className='flex w-full flex-col items-center gap-y-2'>
        <p data-aos='fade-down' data-aos-delay='300' className='section-text-xl overflow-hidden'>
          Description
        </p>

        <div className='w-full overflow-hidden'>
          <div data-aos='slide-right' data-aos-delay='300' data-aos-duration='1000' className='h-[3px] w-full bg-black' />
        </div>

        <p data-aos='fade-up' data-aos-delay='300' className='section-text-lg w-full text-start'>
          {data?.projectItem.projectFullDescription}
        </p>
      </div>

      <ul className='flex w-full flex-col gap-y-5'>
        {data?.projectItem.projectShowcase.map((e, index) => (
          <li key={index}>
            <Image src={getStrapiUrl(e.url)} alt={e.alternativeText} width={980} height={510} className='w-full' />
          </li>
        ))}
      </ul>

      <div className='flex w-full justify-around gap-x-4'>
        <Link
          href={data?.projectItem.projectWebsite || '#'}
          target='_blank'
          className='section-text-lg w-1/2 border-2 border-transparent bg-black p-4 text-center text-white transition-colors hover:border-black hover:bg-transparent hover:text-black md:w-1/3'
        >
          WEBSITE
        </Link>

        <button
          className='section-text-lg w-1/2 border-2 border-black text-black transition-colors hover:border-transparent hover:bg-black hover:text-white md:w-1/3'
          onClick={toggleProjectModal}
        >
          BACK
        </button>
      </div>
    </ProjectModalLayout>
  )
}
