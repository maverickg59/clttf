'use client'
import { Container } from '@/components/Container'
import Image from 'next/image'
import lawson from '@/images/clttf_mike_lawson.jpg'

export function Inspiration() {
  return (
    <section
      id="inspiration"
      aria-labelledby="inspiration-title"
      className="py-20 sm:my-32"
    >
      <Container className="md:rounded-4xl">
        <div className="relative">
          <div className="mx-auto max-w-7xl">
            <div className="relative z-10 pt-4 lg:w-full lg:max-w-2xl">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              >
                <polygon points="0,0 90,0 50,100 0,100" />
              </svg>
              <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                  <h2
                    id="inspiration-title"
                    className="font-display text-4xl font-medium tracking-tighter text-zinc-900 sm:text-5xl"
                  >
                    Our Inspiration
                  </h2>
                  <p className="mb-1 mt-4 text-3xl text-gray-950">
                    Mike "Coach" Lawson
                  </p>
                  <span className="my-4 text-sm">8/26/1983 - 9/22/2020</span>
                  <p className="mt-4 font-display text-xl tracking-tight text-gray-950">
                    “Coach” Mike Lawson’s love for motorcycles began at just
                    four years old, riding a Yamaha Tri-Zinger. At six, he lost
                    his father in a motorcycle accident, a tragedy that shaped
                    his journey. Throughout his life, Mike rode everything from
                    dirt bikes to stunt bikes, street bikes, and eventually took
                    his passion to the track. Known as a mentor and inspiration
                    to many in the riding community, he left a lasting impact on
                    fellow track enthusiasts. On his final track day, friends
                    remarked that he seemed happier than ever. Mike returned
                    home and told his mother it was “THE BEST DAY EVER.”
                    Tragically, two days later, at 37, he lost his life in an
                    accident in his favorite canyon. His legacy of mentorship
                    continues to inspire through CLTTF.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0">
            <Image
              alt="Coach Mike Lawson hanging out during a motorcycle ride."
              src={lawson}
              className="aspect-[3/2] rounded-b-5xl object-cover sm:rounded-r-5xl sm:rounded-bl-none lg:aspect-auto"
              unoptimized
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
