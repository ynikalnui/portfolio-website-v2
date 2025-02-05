'use client'

import useNavMenuStore from '@/store/useNavMenuStore'
import BurgerIcon from './BurgerIcon'
import { useEffect, useState } from 'react'

export default function OpenMenuButton() {
  const { isOpened, toggleMenu } = useNavMenuStore()
  const [delayedIsOpened, setDelayedIsOpened] = useState(isOpened)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDelayedIsOpened(isOpened)
    }, 200)

    return () => clearTimeout(timeoutId)
  }, [isOpened])

  return (
    <button className='flex cursor-pointer items-center gap-x-2 text-base font-semibold tracking-wide md:hidden' onClick={() => toggleMenu()}>
      {delayedIsOpened ? <span className='text-white'>CLOSE</span> : <span className='text-black'>MENU</span>}

      <BurgerIcon isOpened={isOpened} />
    </button>
  )
}
