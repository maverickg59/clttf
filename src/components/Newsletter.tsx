'use client'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Alert } from '@/components/Alert'
import Link from 'next/link'
import { FacebookIcon } from '@/components/Icons'
import { useState } from 'react'
import { z } from 'zod'

function ArrowRightIcon(
  props: Readonly<React.ComponentPropsWithoutRef<'svg'>>,
) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Newsletter() {
  const [emailValidation, setEmailValidation] = useState('')
  const EmailSchema = z.string().regex(/^\S+@\S+\.\S+$/, 'ex: john@doe.com')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = new FormData(e.currentTarget).get('email')
    try {
      const parsedEmail = EmailSchema.safeParse(email)
      if (!parsedEmail.success) {
        setEmailValidation(parsedEmail.error.errors[0].message)
      } else {
        setEmailValidation('')
      }
      console.log(email)
      // Send email to backend
    } catch (error) {
      setEmailValidation('An unexpected error occurred.')
    }
  }

  return (
    <section id="newsletter" aria-label="Newsletter">
      <Container>
        <div className="relative -mx-4 overflow-hidden bg-indigo-50 px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-4xl md:px-16 xl:px-24 xl:py-36">
          <Image
            className="absolute left-0 top-0 h-full w-full object-none opacity-30"
            src="/images/clttf_track_2.jpg"
            alt="Coach Lawson riding his Yamaha R3 at Tortilla Flats."
            unoptimized
            fill
          />
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-4xl font-medium tracking-tighter text-zinc-900 sm:text-5xl">
                Stay up to date
              </p>
              <p className="mt-4 text-lg tracking-tight text-zinc-900">
                Get updates on events, training, and more.
              </p>
              <div className="mt-3 flex items-center fill-zinc-900 text-lg text-zinc-900 hover:fill-zinc-500 hover:text-zinc-600">
                <Link
                  href="https://www.facebook.com/Coach-Lawson-Training-and-Track-Foundation-102960111692089/"
                  className="text-md mt-6 focus:outline-zinc-900 md:mt-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow us on Facebook too!
                </Link>
                <FacebookIcon className="ml-2 h-7 w-7" />
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
                Sign up to our newsletter <span aria-hidden="true">&darr;</span>
              </h3>
              <div className="mt-5 flex rounded-3xl border-none bg-white py-2.5 pr-2.5 shadow-xl shadow-zinc-900/5 focus-within:ring-2 focus-within:ring-zinc-900">
                <input
                  style={{ boxShadow: 'none' }}
                  required
                  placeholder="Email address"
                  aria-label="Email address"
                  id="email"
                  name="email"
                  className="-my-2.5 flex-auto border-none bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
                <Button rounded outline type="submit">
                  <span className="sr-only sm:not-sr-only">Submit</span>
                  <span className="sm:hidden">
                    <ArrowRightIcon className="h-6 w-6" />
                  </span>
                </Button>
              </div>
              {emailValidation && <Alert message={emailValidation} />}
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
