'use client'

import useProjectModalStore from '@/store/useProjectModalStore'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'

export default function ProjectModal() {
  const { isOpened, toggleProjectModal } = useProjectModalStore()

  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpened])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        toggleProjectModal()
      }
    }

    if (isOpened) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpened, toggleProjectModal])

  return (
    <AnimatePresence>
      {isOpened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className='fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-xl'
          onClick={toggleProjectModal}
        >
          <div
            data-aos='fade-up'
            className='no-scrollbar relative flex max-h-[80vh] w-11/12 flex-col items-center gap-y-6 overflow-auto bg-white px-6 py-4 md:w-10/12 lg:w-8/12'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className='absolute right-2 top-2'
              onClick={toggleProjectModal}
            >
              <Image
                src='/images/cross-icon.svg'
                alt='close modal'
                width={20}
                height={20}
              />
            </button>

            <div className='flex flex-col gap-y-2 text-center md:gap-y-4'>
              <p className='text-2xl font-bold tracking-widest md:text-3xl lg:text-4xl'>
                Swapy
              </p>
              <p className='text-lg font-normal tracking-widest md:text-xl lg:text-2xl'>
                MAY 2021 - MAY 2021
              </p>
            </div>

            <div className='flex flex-col items-center gap-y-2'>
              <p data-aos='fade-up' className='section-text-xl'>
                Stack
              </p>

              <div className='flex gap-x-4 overflow-hidden'>
                <div
                  data-aos='slide-down'
                  data-aos-delay='300'
                  data-aos-duration='1000'
                  className='w-[3px] grow bg-black'
                />

                <ul
                  data-aos='fade-in'
                  data-aos-delay='300'
                  className='section-text-lg flex flex-wrap gap-x-4 gap-y-2 uppercase'
                >
                  <li>asd</li>
                  <li>asd</li>
                  <li>asd</li>
                  <li>asd</li>
                </ul>

                <div
                  data-aos='slide-down'
                  data-aos-delay='300'
                  data-aos-duration='1000'
                  className='w-[3px] grow bg-black'
                />
              </div>
            </div>

            <div className='flex w-full flex-col items-center gap-y-2'>
              <p
                data-aos='fade-down'
                data-aos-delay='300'
                className='section-text-xl overflow-hidden'
              >
                Description
              </p>

              <div className='w-full overflow-hidden'>
                <div
                  data-aos='slide-right'
                  data-aos-delay='300'
                  data-aos-duration='1000'
                  className='h-[3px] w-full bg-black'
                />
              </div>

              <p
                data-aos='fade-up'
                data-aos-delay='300'
                className='section-text-lg w-full text-start'
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>

            <ul className='flex w-full flex-col gap-y-5'>
              <li data-aos-delay='300' data-aos='fade-up'>
                <Image
                  src='/images/project.png'
                  alt='project image'
                  width={980}
                  height={510}
                  className='w-full'
                />
              </li>
              <li data-aos-delay='300' data-aos='fade-up'>
                <Image
                  src='/images/project.png'
                  alt='project image'
                  width={980}
                  height={510}
                  className='w-full'
                />
              </li>
            </ul>

            <div className='flex w-full justify-around gap-x-4'>
              <button className='section-text-lg w-1/2 border-2 border-transparent bg-black p-4 text-white transition-colors hover:border-black hover:bg-transparent hover:text-black md:w-1/3'>
                WEBSITE
              </button>

              <button
                className='section-text-lg w-1/2 border-2 border-black text-black transition-colors hover:border-transparent hover:bg-black hover:text-white md:w-1/3'
                onClick={toggleProjectModal}
              >
                BACK
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
