'use client'
import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { useScroll } from '@/context/ScrollContext'
import Image from 'next/image'

export function Hero() {
  const { scrollToTarget } = useScroll()
  return (
    <section className="relative pb-20 pt-10 sm:pt-32">
      <BackgroundImage className="-bottom-14 -top-36">
        <Image
          className="top-0 h-full w-full object-cover"
          src="/images/clttf_tf_1.jpg"
          alt="Coach Lawson riding his Yamaha R1 at Tortilla Flats."
          priority
          unoptimized
          fill
        />
      </BackgroundImage>
      <Container className="relative">
        <div className="flex items-center justify-center gap-8 pb-10 sm:hidden">
          <Button
            outline
            className="text-white ring-white"
            onClick={scrollToTarget}
          >
            Apply
          </Button>
          <Button
            outline
            className="text-white ring-white"
            href="https://www.paypal.com/donate?hosted_button_id=VMLY57KNSCXQS"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate
          </Button>
        </div>
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="text-center font-display text-3xl font-bold tracking-tighter text-white sm:text-6xl">
            Coach Lawson Training and Track Foundation
          </h1>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 text-center sm:mt-16 sm:gap-x-16 sm:gap-y-10 lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-between lg:text-left">
            {[
              ['Volunteers', '150+'],
              ['Riders Assisted', '600+'],
              ['Support', '$120,000+'],
              ['Serving', 'Arizona'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-white">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-white">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}
