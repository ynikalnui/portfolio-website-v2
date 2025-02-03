'use client'

import useNavMenuStore from '@/store/useNavMenuStore'
import DesktopNav from './DesktopNav'
import OpenMenuButton from './utils/OpenMenuButton'
import { Link } from 'react-scroll'

export default function Header() {
  const isOpened = useNavMenuStore((state) => state.isOpened)

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-50 mx-auto flex w-full justify-between px-4 py-4 ${isOpened ? 'bg-transparent delay-300' : 'border-b-2 border-black bg-white/60 backdrop-blur-sm'}`}
    >
      <Link
        to='hero'
        smooth={true}
        duration={500}
        className='flex cursor-pointer select-none items-center gap-x-1'
      >
        <div
          className={`flex size-10 items-center justify-center rounded-full border-[3px] font-bold transition-all ${isOpened ? 'border-white text-white delay-200' : 'border-black text-black'}`}
        >
          OS
        </div>

        <div>
          <p
            className={`text-base font-bold transition-all ${isOpened ? 'text-white delay-200' : 'text-black'}`}
          >
            Oleh Skakun
          </p>
          <p
            className={`text-sm font-medium transition-all ${isOpened ? 'text-white delay-200' : 'text-black'}`}
          >
            FRONT-END DEVELOPER
          </p>
        </div>
      </Link>

      <DesktopNav />

      <OpenMenuButton />
    </div>
  )
}
