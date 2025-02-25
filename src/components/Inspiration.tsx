import { Container } from '@/components/Container'
import Image from 'next/image'

export function Inspiration() {
  return (
    <section
      id="inspiration"
      aria-labelledby="inspiration-title"
      className="py-24 sm:my-32 sm:py-20"
    >
      <Container>
        <div className="flex flex-col justify-center gap-8 sm:flex-row lg:gap-12">
          <Image
            alt="Coach Mike Lawson hanging out during a motorcycle ride."
            src="/images/clttf_mike_lawson.webp"
            className="rounded-5xl object-cover"
            unoptimized
            width={375}
            height={200}
          />
          <div className="mx-auto flex w-5/6 flex-col justify-center text-center sm:w-1/2 sm:text-left">
            <h2 className="mt-6 text-lg/8 font-semibold text-gray-900">
              Mike &quot;Coach&quot; Lawson
            </h2>
            <span className="text-base/7 text-gray-600">
              8/26/1983 - 9/22/2020
            </span>
            <p
              id="inspiration-title"
              className="mt-4 text-base/7 text-gray-600"
            >
              “Coach” Mike Lawson’s love for motorcycles began at just four
              years old, riding a Yamaha Tri-Zinger. At six, he lost his father
              in a motorcycle accident, a tragedy that shaped his journey.
              Throughout his life, Mike rode everything from dirt bikes to stunt
              bikes, street bikes, and eventually took his passion to the track.
              Known as a mentor and inspiration to many in the riding community,
              he left a lasting impact on fellow track enthusiasts. On his final
              track day, friends remarked that he seemed happier than ever. Mike
              returned home and told his mother it was “THE BEST DAY EVER.”
              Tragically, two days later, at 37, he lost his life in an accident
              in his favorite canyon. His legacy of mentorship continues to
              inspire through CLTTF.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
