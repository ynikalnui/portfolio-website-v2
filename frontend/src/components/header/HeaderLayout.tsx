'use client'

import useNavMenuStore from '@/store/useNavMenuStore'
import { ReactNode } from 'react'

export default function HeaderLayout({ children }: { children: ReactNode }) {
  const isOpened = useNavMenuStore((state) => state.isOpened)

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-50 mx-auto flex w-full justify-between p-4 ${isOpened ? 'bg-transparent delay-300' : 'border-b-2 border-black bg-white/60 backdrop-blur-sm'}`}
    >
      {children}
    </div>
  )
}
