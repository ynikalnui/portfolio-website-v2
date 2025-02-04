'use client'

import useProjectModalStore from '@/store/useProjectModalStore'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { ReactNode, useEffect } from 'react'

export default function ProjectModalLayout({ children }: { children: ReactNode }) {
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
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
