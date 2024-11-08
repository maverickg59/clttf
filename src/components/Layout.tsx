import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({
  children,
  showFooter = true,
}: {
  readonly children: React.ReactNode
  readonly showFooter?: boolean
}) {
  return (
    <>
      <Header />
      <main className="flex-auto">{children}</main>
      {showFooter && <Footer />}
    </>
  )
}
