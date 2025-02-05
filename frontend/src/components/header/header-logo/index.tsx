'use client'

import useNavMenuStore from '@/store/useNavMenuStore'
import { Link } from 'react-scroll'

type THeaderLogoProps = {
  fullName: string
  initials: string
  specialty: string
}

export default function HeaderLogo({ fullName, initials, specialty }: THeaderLogoProps) {
  const isOpened = useNavMenuStore((state) => state.isOpened)

  return (
    <Link to='hero' smooth={true} duration={500} className='flex cursor-pointer select-none items-center gap-x-1'>
      <div
        className={`flex size-10 items-center justify-center rounded-full border-[3px] font-bold transition-all ${isOpened ? 'border-white text-white delay-200' : 'border-black text-black'}`}
      >
        {initials}
      </div>

      <div>
        <p className={`text-base font-bold transition-all ${isOpened ? 'text-white delay-200' : 'text-black'}`}>
          {fullName}
        </p>
        <p
          className={`text-sm font-medium uppercase transition-all ${isOpened ? 'text-white delay-200' : 'text-black'}`}
        >
          {specialty}
        </p>
      </div>
    </Link>
  )
}
