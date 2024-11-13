'use client'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { ArrowRightIcon } from '@/components/Icons'
import { Alert } from '@/components/Alert'
import Link from 'next/link'
import { FacebookIcon } from '@/components/Icons'
import { useState, useRef } from 'react'
import { z } from 'zod'

async function submitEmail(email: string) {
  const url = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT
  const key = process.env.NEXT_PUBLIC_NEWSLETTER_API_KEY
  const response = await fetch(`${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(key && { 'x-api-key': key }),
    },
    body: JSON.stringify({ subscriber_email: email }),
  })

  if (!response.ok) {
    throw new Error()
  }
  return await response.json()
}

export function Newsletter() {
  const [emailValidation, setEmailValidation] = useState('')
  const [isReceived, setIsReceived] = useState('')
  const EmailSchema = z
    .string()
    .regex(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      'ex: john@doe.com',
    )
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = new FormData(e.currentTarget).get('email')
    try {
      const parsedEmail = EmailSchema.safeParse(email)
      if (!parsedEmail.success) {
        setEmailValidation(parsedEmail.error.errors[0].message)
        return
      } else {
        setEmailValidation('')
      }
      const submitted = await submitEmail(email as string)
      if (submitted) {
        setIsReceived(submitted.message)
        formRef.current?.reset()
        setTimeout(() => {
          setIsReceived('')
        }, 2000)
      }
    } catch (error) {
      if (error instanceof Error) {
        setEmailValidation(error.message)
        setTimeout(() => {
          setEmailValidation('')
        }, 2000)
      } else {
        setEmailValidation('Unexpected error occurred')
        setTimeout(() => {
          setEmailValidation('')
        }, 2000)
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValidation('')
    setIsReceived('')
  }

  return (
    <section id="newsletter" aria-label="Newsletter">
      <Container className="my-20">
        <div className="relative -mx-4 overflow-hidden bg-indigo-50 px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-4xl md:px-16 xl:px-24 xl:py-36">
          <Image
            className="absolute left-0 top-0 object-cover opacity-30 sm:h-full sm:w-full sm:object-none"
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
              <div className="mt-3 flex items-center fill-zinc-900 align-middle text-lg text-zinc-900 hover:fill-zinc-500 hover:text-zinc-600">
                <Link
                  href="https://www.facebook.com/Coach-Lawson-Training-and-Track-Foundation-102960111692089/"
                  className="text-md focus:outline-zinc-900 md:mt-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow us on Facebook too!
                </Link>
                <FacebookIcon className="ml-2 h-7 w-7" />
              </div>
            </div>
            <form onSubmit={handleSubmit} ref={formRef}>
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
                Sign up to our newsletter <span aria-hidden="true">&darr;</span>
              </h3>
              <div className="mt-5 flex rounded-3xl border-none bg-white py-2.5 pr-2.5 shadow-xl shadow-zinc-900/5 focus-within:ring-2 focus-within:ring-zinc-900">
                <input
                  style={{ boxShadow: 'none' }}
                  onChange={handleChange}
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
              {isReceived && <Alert success message={isReceived} />}
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
