import { Container } from '@/components/Container'
import Image from 'next/image'

const supporters = [
  {
    business_name: 'The Husband & Wife Law Team',
    business_logo: '/images/hb_wf_lw_tm.webp',
    website_link:
      'https://husbandandwifelawteam.com/practice-areas/motorcycle-accidents',
  },
]

export function SupporterSection() {
  return (
    <section id="sponsors" aria-labelledby="sponsors-title" className="pt-32">
      <Container className="flex flex-col items-center justify-center">
        <h2
          id="sponsors-title"
          className="max-w-2xl font-display text-4xl font-medium tracking-tighter text-zinc-900 sm:text-5xl"
        >
          Our Supporters
        </h2>
        <p className="mt-10 text-center text-lg tracking-tight text-zinc-600 lg:max-w-5xl lg:text-left">
          Our work is made possible by the generosity of so many. The majority
          of our funding comes from small donors—people who believe in our
          mission and contribute what they can. Every donation, no matter the
          size, makes a difference, and we are deeply grateful for each and
          every one of you. We also want to recognize the individuals and
          organizations whose larger contributions help sustain and expand our
          efforts. Their support allows us to reach further and do more, and we
          are honored to acknowledge their generosity here.
        </p>
        <div className="mt-10 flex w-full max-w-5xl flex-wrap justify-start gap-8">
          {supporters.map((supporter) => (
            <a
              key={supporter.business_name}
              href={supporter.website_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={supporter.business_logo}
                alt={supporter.business_name}
                className="object-contain"
                unoptimized
                height={70}
                width={350}
              />
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}
