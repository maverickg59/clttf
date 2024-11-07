import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Support } from '@/components/Support'
import { Inspiration } from '@/components/Inspiration'
import { Team } from '@/components/Team'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Inspiration />
      <Support />
      <Team />
      <Contact />
      <Newsletter />
    </>
  )
}
