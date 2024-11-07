import { Layout } from '@/components/Layout'
import { ScrollProvider } from '@/context/ScrollContext'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ScrollProvider>
      <Layout>{children}</Layout>
    </ScrollProvider>
  )
}
