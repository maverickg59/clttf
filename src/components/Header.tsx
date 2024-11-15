'use client'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Image from 'next/image'
import { useScroll } from '@/context/ScrollContext'
import Link from 'next/link'

export function Header() {
  const { scrollToTarget } = useScroll()

  return (
    <header className="relative z-50 flex-none">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-4 sm:mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Link
            className="focus:outline-white sm:focus:outline-zinc-900"
            href="/"
          >
            <Image
              src="/images/clttf_logo_black.png"
              alt="logo"
              className="w-40 border-0 sm:block"
              width={400}
              height={400}
              unoptimized
            />
          </Link>
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
