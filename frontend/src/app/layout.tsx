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
  title: 'Oleh Skakun | Front-End Developer Portfolio',
  description: 'Explore the portfolio of Oleh Skakun, a skilled Front-End Developer',
  keywords:
    'Front-End Developer, Frontend, JavaScript, TypeScript, React.js, Next.js, Vue.js, UI/UX, Web Development, Oleh Skakun',
  authors: [{ name: 'Oleh Skakun', url: 'https://oleh.dieselservice.com.ua' }],
  creator: 'Oleh Skakun',
  publisher: 'Oleh Skakun',
  robots: 'index, follow',
  openGraph: {
    title: 'Oleh Skakun | Front-End Developer Portfolio',
    description: 'Explore the portfolio of Oleh Skakun, a skilled Front-End Developer',
    url: 'https://oleh.dieselservice.com.ua',
    siteName: 'Oleh Skakun Portfolio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://oleh.dieselservice.com.ua/hero-image.png',
        width: 1200,
        height: 630,
        alt: 'Oleh Skakun Portfolio Preview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ovskakun',
    creator: '@ovskakun',
    title: 'Oleh Skakun | Front-End Developer Portfolio',
    description: 'Explore the portfolio of Oleh Skakun, a skilled Front-End Developer',
    images: ['https://oleh.dieselservice.com.ua/hero-image.png']
  },
  icons: {
    icon: '/favicon.ico'
  },
  manifest: '/site.webmanifest'
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

          <Toaster position='top-center' />
          <GlobalModals />
        </Providers>
      </body>
    </html>
  )
}
