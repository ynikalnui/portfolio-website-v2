import type { Metadata } from 'next'
import { AOSInit } from '@/lib/aos'
import Header from '@/components/header'
import GlobalModals from '@/components/global-modals'
import Footer from '@/components/footer'
import localFont from 'next/font/local'
import '../styles/globals.css'
import { Providers } from '@/providers'
import { Toaster } from 'react-hot-toast'

const montserrat = localFont({
  src: [
    {
      path: '../../public/fonts/Montserrat-Italic.ttf',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../public/fonts/Montserrat-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Montserrat-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Montserrat-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Montserrat-Bold.ttf',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' className={montserrat.variable}>
      <AOSInit />
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />

          <Toaster position='top-center'/>
          <GlobalModals />
        </Providers>
      </body>
    </html>
  )
}
