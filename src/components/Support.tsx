import Image from 'next/image'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'

const faqs = [
  {
    question: 'Funding:',
    answer:
      'Funding covers administrative expenses and the purchase of basic riders course, advance rider training, track days, and new gear.',
  },
  {
    question: 'Gear:',
    answer:
      'Our students need quality gear to ride safely, both on and off the track. Your gear, new or used, could make a life-saving difference in a crash and may even be tax deductible.',
  },
  {
    question: 'Track Days & Rider Training:',
    answer:
      'Donating track day passes and training sessions is another powerful way to support our mission. These contributions directly fund scholarships, giving students access to crucial hands-on experience and skill-building opportunities.',
  },
  {
    question: 'High Value Items:',
    answer:
      'High-value donations, like cars and motorcycles, may also be tax deductible and can help fund multiple student scholarships. By selling or raffling these items, we can turn your generosity into essential gear and track day scholarships for our students.',
  },
]

export function Support() {
  return (
    <section
      id="support"
      aria-labelledby="support-title"
      className="py-20 sm:my-32"
    >
      <div className="relative mt-14 sm:mt-24">
        <BackgroundImage className="-bottom-40 -top-40 hidden scale-x-[-1] brightness-75 sm:block">
          <Image
            className="left-0 top-0 h-full w-full object-contain sm:object-cover"
            src="/images/clttf_tf_3.jpg"
            alt="Coach Lawson riding his R3 at the Phoenix Kart Racing Association track."
            priority
            unoptimized
            fill
          />
        </BackgroundImage>
        <Container className="relative">
          <div className="mx-auto max-w-7xl bg-slate-900 bg-opacity-65 px-6 md:rounded-4xl lg:px-8">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-5">
                  <h2
                    id="support-title"
                    className="mb-10 font-display text-4xl font-medium tracking-tighter text-white sm:text-5xl"
                  >
                    Supporting Our Mission
                  </h2>
                  <p className="mt-4 w-4/5 font-display text-lg tracking-tight text-white">
                    Our mission is to reduce motorcycle accidents and minimize
                    their impact by empowering riders with access to top-tier
                    training and safety gear. Through generous donations of
                    equipment, track days, bike rentals, training courses, and
                    funds, we’re dedicated to creating safer riding experiences
                    for all. At CLTTF, we welcome every rider—no
                    exceptions—seeking support for protective gear, advanced
                    training, or track time. We take pride in our commitment to
                    serving the community and fostering safety across all
                    riders.
                  </p>
                </div>
                <div className="mt-10 lg:col-span-7 lg:mt-0">
                  <dl className="space-y-10">
                    {faqs.map((faq) => (
                      <div key={faq.question}>
                        <dt className="text-base/7 font-semibold text-white">
                          {faq.question}
                        </dt>
                        <dd className="mt-2 text-base/7 text-white">
                          {faq.answer}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
