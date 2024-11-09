'use client'
import { useState } from 'react'
import { Button } from './Button'
import { Struct, validate, define, object, string } from 'superstruct'
import { useScroll } from '@/context/ScrollContext'

type FormState = { [key: string]: string }
type FormErrorState = { [key: string]: string }

const formSchema = object({
  firstName: string(),
  lastName: string(),
  email: string(),
  phoneNumber: string(),
  message: string(),
})

const usPhoneNumberRegex = /^(?:\+1\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/

const USPhoneNumber = define('USPhoneNumber', (value) => {
  return typeof value === 'string' && usPhoneNumberRegex.test(value)
})

const validators: { [key: string]: Struct<any, any> } = {
  phone: USPhoneNumber,
  // email: EmailValidator,
}

export function Contact() {
  const { targetRef } = useScroll()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  })

  const [formError, setFormError] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  })

  const handlePhoneChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    try {
      const { name, value } = e.target
      const [error] = validate(value, USPhoneNumber)
      if (error) throw error
      setForm((prev) => ({ ...prev, [name]: value }))
    } catch (error: unknown) {
      if (error instanceof Error) {
        const { name } = e.target
        setFormError((prev) => ({ ...prev, [name]: (error as Error).message }))
      }
    }
  }
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    try {
      const { name, value } = e.target
      const [error] = validate(value, USPhoneNumber)
      if (error) throw error
      setForm((prev) => ({ ...prev, [name]: value }))
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Validation error:', error.message)
      }
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formSchema.validate(form)) {
      console.log('Form is valid')
      console.log(form)
    }
  }

  return (
    <div ref={targetRef} className="relative isolate">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 lg:static lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Get in touch
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Reach out to apply for a scholarship or You&apos;ll find us at
              nearly every Cycle Gear event and most track days in the Pheonix
              area, but this form works too.
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={handleChange}
                    id="firstName"
                    name="firstName"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={handleChange}
                    id="lastName"
                    name="lastName"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={handleChange}
                    id="email"
                    name="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={handlePhoneChange}
                    id="phoneNumber"
                    name="phoneNumber"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm/6"
                  />
                  <span>
                    {formError?.phoneNumber ? formError.phoneNumber : ''}
                  </span>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    onChange={handleChange}
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm/6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <Button className="border-2" outline type="submit" ring={false}>
                Send message
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
