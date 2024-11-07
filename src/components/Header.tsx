'use client'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Image from 'next/image'
import logo from '@/images/clttf_logo_black.png'
import { useScroll } from '@/context/ScrollContext'

export function Header() {
  const { scrollToTarget } = useScroll()

  return (
    <header className="relative z-50 flex-none">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Image src={logo} alt="logo" width={140} />
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button outline onClick={scrollToTarget}>
            Apply
          </Button>
          <Button
            outline
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.paypal.com/donate?hosted_button_id=VMLY57KNSCXQS"
          >
            Donate
          </Button>
        </div>
      </Container>
    </header>
  )
}
