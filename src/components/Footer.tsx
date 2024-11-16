'use client'
import { Container } from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'
import { FacebookIcon } from '@/components/Icons'

export function Footer() {
  return (
    <footer className="flex flex-col py-16 text-center lg:flex-row">
      <Container>
        <Image
          src="/images/clttf_logo_black.png"
          alt="logo"
          width={120}
          height={120}
          className="w-40"
          unoptimized
        />
      </Container>
      <Container className="flex flex-col justify-center gap-2 lg:items-end lg:text-right">
        <p className="flex items-center justify-center fill-zinc-500 text-zinc-500 hover:fill-zinc-900 hover:text-zinc-900">
          <Link
            href="https://m.facebook.com/102960111692089"
            className="text-sm focus:outline-zinc-500 md:mt-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow us on Facebook
          </Link>
          <FacebookIcon className="ml-1 h-5 w-5" />
        </p>
        <p className="text-sm text-slate-500 md:mt-0">
          Copyright &copy; {new Date().getFullYear()} Coach Lawson Training and
          Track Foundation.
        </p>
        <p className="text-sm text-slate-500 md:mt-0">
          Coach Lawson Training and Track Foundation is a 501(c)(3) not for
          profit organization.
        </p>
        <p className="text-sm text-slate-500 md:mt-0">
          The development and maintenance of this site is provided free of
          charge by{' '}
          <Link
            href="https://chriswhite.rocks"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-zinc-900 focus:outline-zinc-500"
          >
            chriswhite.rocks
          </Link>
        </p>
      </Container>
    </footer>
  )
}
