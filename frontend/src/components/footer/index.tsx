import { SocialIcon } from 'react-social-icons'

export default function Footer() {
  return (
    <footer className='flex w-full flex-col items-center gap-y-4 border-t-2 border-black py-4'>
      <ul className='flex gap-x-2'>
        <li>
          <SocialIcon url='mailto:ovskakun@gmail.com' fgColor='#ffffff' bgColor='#000000' style={{ width: 45, height: 45 }} />
        </li>
        <li>
          <SocialIcon url='https://www.linkedin.com/in/oleh-skakun-11a500198/' fgColor='#ffffff' bgColor='#000000' style={{ width: 45, height: 45 }} />
        </li>
        <li>
          <SocialIcon url='https://github.com/ynikalnui' fgColor='#ffffff' bgColor='#000000' style={{ width: 45, height: 45 }} />
        </li>
        <li>
          <SocialIcon url='https://t.me/ynikalnui_chelovek' fgColor='#ffffff' bgColor='#000000' style={{ width: 45, height: 45 }} />
        </li>
      </ul>

      <p className='text-sm font-medium md:text-base'>&copy; {new Date().getFullYear()} Oleh Skakun. All rights reserved.</p>
    </footer>
  )
}
