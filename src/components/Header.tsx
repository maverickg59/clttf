'use client'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Image from 'next/image'
import { useScroll } from '@/context/ScrollContext'

export function Header() {
  const { scrollToTarget } = useScroll()

  return (
    <header className="relative z-50 flex-none">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <a href="/">
            <Image
              src="/images/clttf_logo_black.png"
              alt="logo"
              className="w-20"
              width={140}
              height={140}
              unoptimized
            />
          </a>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button outline onClick={scrollToTarget}>
            Apply
          </Button>
          <Button
            outline
            className="ml-6"
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
