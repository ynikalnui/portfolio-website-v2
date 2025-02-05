import { SocialIcon } from 'react-social-icons'
import { GET_SOCIALS_DATA, TSocialsResponse } from './socials-query'
import { client } from '@/lib/apollo'

export default async function Footer() {
  const { data } = await client.query<TSocialsResponse>({
    query: GET_SOCIALS_DATA
  })
  return (
    <footer className='flex w-full flex-col items-center gap-y-4 border-t-2 border-black py-4'>
      <ul className='flex gap-x-2'>
        {
          data.socials.map((social, index) => (
            <li key={index}>
              <SocialIcon url={social.link} fgColor='#ffffff' bgColor='#000000' style={{ width: 40, height: 40 }} />
            </li>))
        }
      </ul>

      <p className='text-sm font-medium md:text-base'>&copy; {new Date().getFullYear()} Oleh Skakun. All rights reserved.</p>
    </footer>
  )
}
