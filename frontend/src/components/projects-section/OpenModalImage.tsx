'use client'

import useProjectModalStore from '@/store/useProjectModalStore'
import Image from 'next/image'

type TOpenModalImageProps = {
  imageSrc: string
  imageAlt: string
  documentId: string
}

export default function OpenModalImage({ imageSrc, imageAlt, documentId }: TOpenModalImageProps) {
  const { toggleProjectModal, setDocumentId } = useProjectModalStore()

  const handleOpenModal = () => {
    setDocumentId(documentId)
    toggleProjectModal()
  }

  return (
    <div data-aos='fade-in' className='group relative w-full cursor-pointer' onClick={handleOpenModal}>
      <Image src={imageSrc} alt={imageAlt} width={650} height={370} className='h-auto w-full' />

      <div className='absolute inset-0 hidden items-center justify-center bg-black/60 opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100 md:flex'>
        <p className='section-text-base tracking-widest text-white'>View More</p>
      </div>
    </div>
  )
}
