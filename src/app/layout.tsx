import { type Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import clsx from 'clsx'
import { ScrollProvider } from '@/context/ScrollContext'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: {
    template: 'CLTTF | %s',
    default: 'CLTTF',
  },
  description:
    'The Coach Lawson Track and Training Foundation was established to honor the legacy of Mike “Coach” Lawson who tragically lost his life in a motorcycle accident. Our mission is reduce the prevalence and severity of motorcycle accidents by assisting riders gain access to high quality training and safety equipment. We solicit donations of gear, track days, bike rentals, training courses and funds to achieve our mission.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full bg-white antialiased',
        inter.variable,
        dmSans.variable,
      )}
    >
      <ScrollProvider>
        <body className="flex h-screen min-h-full">
          <div className="flex w-full flex-col bg-cover bg-center bg-no-repeat">
            {children}
          </div>
        </body>
      </ScrollProvider>
    </html>
  )
}
