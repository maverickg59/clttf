'use client'
import { useScroll } from '@/context/ScrollContext'
import { useState, useRef } from 'react'
import { Alert } from '@/components/Alert'
import { Button } from './Button'
import { z } from 'zod'
import clsx from 'clsx'

const FormSchema = z.object({
  firstName: z
    .string()
    .min(1, 'Minimum: 1 character')
    .regex(/^[a-zA-Z]+$/, 'A to Z only'),
  lastName: z
    .string()
    .min(1, 'Minimum: 1 character.')
    .regex(/^[a-zA-Z]+$/, 'A to Z only'),
  email: z
    .string()
    .regex(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      'Example: john@doe.com',
    ),
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
  beetlepot: z.string(),
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
const formInitialState = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  message: '',
  beetlepot: '',
}

const formatPhoneNumber = (number: string) => {
  return number.length === 10
    ? number.replace(/^(\d{3})(\d{3})(\d{4})$/, '($1) $2-$3')
    : number
}

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setForm: React.Dispatch<React.SetStateAction<(typeof FormSchema)['_output']>>,
  setFormValidation: React.Dispatch<
    React.SetStateAction<typeof formValidationInitialState>
  >,
) => {
  const { name, value } = e.currentTarget
  try {
    const cleanedValue =
      name === 'phoneNumber' ? value.replace(/\D/g, '') : value
    const formattedValue =
      name === 'phoneNumber' ? formatPhoneNumber(cleanedValue) : value
    setForm((prev) => ({ ...prev, [name]: formattedValue }))
    const fieldSchema = FormSchema.shape[name as keyof typeof FormSchema.shape]
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

type ContactForm = {
  contact_first_name: string
  contact_last_name: string
  contact_email: string
  contact_phone_number: string
  contact_message: string
  beetlepot: string
}

async function submitContactForm(form: ContactForm) {
  const url = process.env.NEXT_PUBLIC_API_ENDPOINT
  const response = await fetch(`${url}/contact/clttf/submit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  })

  if (!response.ok) {
    const errorResponse = await response.json()
    throw new Error(errorResponse.message || 'Failed to submit email')
  }
  return await response.json()
}

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  setFormValidation: React.Dispatch<
    React.SetStateAction<typeof formValidationInitialState>
  >,
  setIsReceived: React.Dispatch<
    React.SetStateAction<{ message: string; isError: boolean }>
  >,
  formRef: React.RefObject<HTMLFormElement>,
  form: (typeof FormSchema)['_output'],
  setForm: React.Dispatch<React.SetStateAction<(typeof FormSchema)['_output']>>,
) => {
  e.preventDefault()
  try {
    const parsedResult = FormSchema.safeParse(form)
    if (!parsedResult.success) {
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
    }
    const strippedPhoneNumber = form.phoneNumber.replace(/\D/g, '');
    const { message } = await submitContactForm({
      contact_first_name: form.firstName,
      contact_last_name: form.lastName,
      contact_email: form.email,
      contact_phone_number: strippedPhoneNumber,
      contact_message: form.message,
      beetlepot: form.beetlepot,
    })

    if (message) {
      setIsReceived({ message, isError: false })
      formRef.current?.reset()
      setForm(formInitialState)
      setTimeout(() => {
        setIsReceived({ message: '', isError: false })
      }, 2000)
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unexpected error occurred'
    setIsReceived({ message: errorMessage, isError: true })
    setTimeout(() => {
      setIsReceived({ message: '', isError: false })
    }, 2000)
  }
}

export function Contact() {
  const { targetRef } = useScroll()
  const formRef = useRef<HTMLFormElement>(null)
  const [isReceived, setIsReceived] = useState({
    message: '',
    isError: false,
  })
  const [form, setForm] = useState(formInitialState)

  const [formValidation, setFormValidation] = useState(
    formValidationInitialState,
  )

  return (
    <section>
      <div ref={targetRef} className="relative isolate">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-10 pt-24 lg:static lg:px-8 lg:pb-20">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Get in touch
              </h2>
              <p className="mt-4 text-lg/8 text-gray-600">
                Send a message and we&apos;ll respond as soon as possible.
              </p>
            </div>
          </div>
          <form
            onSubmit={(e) =>
              handleSubmit(
                e,
                setFormValidation,
                setIsReceived,
                formRef,
                form,
                setForm,
              )
            }
            ref={formRef}
            className="px-6 pb-24 pt-10 sm:pb-32 lg:px-8 lg:pt-20"
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
                      onChange={(e) =>
                        handleChange(e, setForm, setFormValidation)
                      }
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
                      onChange={(e) =>
                        handleChange(e, setForm, setFormValidation)
                      }
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
                      onChange={(e) =>
                        handleChange(e, setForm, setFormValidation)
                      }
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
                      onChange={(e) =>
                        handleChange(e, setForm, setFormValidation)
                      }
                      value={form.phoneNumber}
                      id="phoneNumber"
                      name="phoneNumber"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm/6"
                    />
                    <input
                      type="text"
                      name="beetlepot"
                      aria-hidden="true"
                      style={{ display: 'none' }}
                      tabIndex={-1}
                      autoComplete="off"
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
                      onChange={(e) =>
                        handleChange(e, setForm, setFormValidation)
                      }
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
              <div className="flex h-fit justify-end">
                {isReceived.message && (
                  <Alert
                    success={!isReceived.isError}
                    message={isReceived.message}
                    className={clsx(
                      'rounded-sm px-6 py-3 shadow-md',
                      isReceived.isError
                        ? 'shadow-red-300'
                        : 'shadow-emerald-300',
                    )}
                  />
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
