'use client'
import { useScroll } from '@/context/ScrollContext'
import { useState } from 'react'
import { Button } from './Button'
import { z } from 'zod'
import Link from 'next/link'
import { FacebookIcon } from '@/components/Icons'

const FormSchema = z.object({
  firstName: z
    .string()
    .min(1, 'Minimum: 1 character')
    .regex(/^[a-zA-Z]+$/, 'A to Z only'),
  lastName: z
    .string()
    .min(1, 'Minimum: 1 character.')
    .regex(/^[a-zA-Z]+$/, 'A to Z only'),
  email: z.string().regex(/^\S+@\S+\.\S+$/, 'Example: john@doe.com'),
  phoneNumber: z
    .string()
    .regex(
      /^(\+1\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/,
      'Example: (555) 123-4567',
    )
    .transform((val) => val.replace(/\D/g, ''))
    .refine((val) => val.length === 10, {
      message: 'Example: (555) 123-4567',
    }),
  message: z
    .string()
    .min(15, 'Minimum: 15 characters')
    .max(400, 'Maximum: 400 characters'),
})

export function Contact() {
  const { targetRef } = useScroll()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  })

  const formValidationInitialState = {
    firstName: {
      label: 'Example: John',
      isError: false,
    },
    lastName: { label: 'Example: Doe', isError: false },
    email: {
      label: 'Example: johndoe@example.com',
      isError: false,
    },
    phoneNumber: {
      label: 'Example: (555) 123-4567',
      isError: false,
    },
    message: {
      label: undefined,
      isError: false,
    },
  }

  const [formValidation, setFormValidation] = useState(
    formValidationInitialState,
  )

  const formatPhoneNumber = (number: string) => {
    return number.length === 10
      ? number.replace(/^(\d{3})(\d{3})(\d{4})$/, '($1) $2-$3')
      : number
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.currentTarget
    try {
      const cleanedValue =
        name === 'phoneNumber' ? value.replace(/\D/g, '') : value
      const formattedValue =
        name === 'phoneNumber' ? formatPhoneNumber(cleanedValue) : value
      setForm((prev) => ({ ...prev, [name]: formattedValue }))
      const fieldSchema =
        FormSchema.shape[name as keyof typeof FormSchema.shape]
      const parsed = fieldSchema.safeParse(cleanedValue)
      if (!parsed.success) {
        setFormValidation((prev) => ({
          ...prev,
          [name]: {
            label: parsed.error.errors[0]?.message || 'Invalid input',
            isError: true,
          },
        }))
      } else {
        setFormValidation((prev) => ({
          ...prev,
          [name]: { label: '', isError: false },
        }))
      }
    } catch (error) {
      setFormValidation((prev) => ({
        ...prev,
        [name]: {
          label: 'An unexpected error occurred',
          isError: true,
        },
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const parsedResult = FormSchema.safeParse(form)
    if (!parsedResult.success) {
      parsedResult.error.issues.forEach((issue) => {
        setFormValidation((prev) => ({
          ...prev,
          [issue.path[0]]: { label: issue.message, isError: true },
        }))
      })
      parsedResult.error.issues.forEach((issue) => {
        const { path, message } = issue
        const inputName = path[0]
        setFormValidation((prev) => ({
          ...prev,
          [inputName]: { label: message, isError: true },
        }))
      })
    } else {
      setFormValidation(formValidationInitialState)
      // Send form data to server
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
            <div className="mt-8 flex items-center fill-slate-500 hover:fill-slate-900">
              <Link
                href="https://www.facebook.com/Coach-Lawson-Training-and-Track-Foundation-102960111692089/"
                className="mt-6 text-lg/8 text-gray-600 hover:text-slate-900 md:mt-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                You can follow us on Facebook
              </Link>
              <FacebookIcon className="ml-1 h-5 w-5" />
            </div>
            <p className="mt-6 text-lg/8 text-gray-600">
              Or send a message with this form. You&apos;ll find us at nearly
              every Cycle Gear event and most track days in the Pheonix area,
              but this form works too.
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
                <div className="mt-2.5 text-right">
                  <input
                    onChange={handleChange}
                    id="firstName"
                    name="firstName"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm/6"
                  />
                  <span className="block min-h-[1.25em] text-xs text-red-600">
                    {formValidation?.firstName?.isError
                      ? formValidation.firstName.label
                      : '\u00A0'}
                  </span>
                </div>
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2.5 text-right">
                  <input
                    onChange={handleChange}
                    id="lastName"
                    name="lastName"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm/6"
                  />
                  <span className="block min-h-[1.25em] text-xs text-red-600">
                    {formValidation?.lastName?.isError
                      ? formValidation.lastName.label
                      : '\u00A0'}
                  </span>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5 text-right">
                  <input
                    onChange={handleChange}
                    id="email"
                    name="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm/6"
                  />
                  <span className="block min-h-[1.25em] text-xs text-red-600">
                    {formValidation?.email.isError
                      ? formValidation.email.label
                      : '\u00A0'}
                  </span>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Phone number
                </label>
                <div className="mt-2.5 text-right">
                  <input
                    onChange={handleChange}
                    value={form.phoneNumber}
                    id="phoneNumber"
                    name="phoneNumber"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm/6"
                  />
                  <span className="block min-h-[1.25em] text-xs text-red-600">
                    {formValidation?.phoneNumber.isError
                      ? formValidation.phoneNumber.label
                      : '\u00A0'}
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
                <div className="mt-2.5 text-right">
                  <textarea
                    onChange={handleChange}
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm/6"
                    defaultValue={''}
                  />
                  <span className="block min-h-[1.25em] text-xs text-red-600">
                    {formValidation?.message?.isError
                      ? formValidation.message.label
                      : '\u00A0'}
                  </span>
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
