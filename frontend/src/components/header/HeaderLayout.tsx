'use client'

import useNavMenuStore from '@/store/useNavMenuStore'
import { ReactNode, useEffect, useState } from 'react'
import throttle from 'lodash.throttle'

export default function HeaderLayout({ children }: { children: ReactNode }) {
  const isOpened = useNavMenuStore((state) => state.isOpened)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollY(window.scrollY)
    }, 100)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      handleScroll.cancel()
    }
  }, [])

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-50 mx-auto flex w-full justify-between border-b-2 p-4 transition-all duration-200 
        ${isOpened 
          ? 'border-transparent bg-transparent delay-200' 
          : scrollY > 20 
            ? 'border-black bg-white/60 backdrop-blur-sm' 
            : 'border-transparent'}`}
    >
      {children}
    </div>
  )
}
