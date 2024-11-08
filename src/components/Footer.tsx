import { Container } from '@/components/Container'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="flex items-center py-16">
      <Container>
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Image
            src="/images/clttf_logo_black.png"
            alt="logo"
            width={120}
            height={120}
            className="w-40"
            unoptimized
          />
        </div>
      </Container>
      <Container className="flex h-3/4 flex-col items-end justify-between">
        <p className="mt-6 text-sm text-slate-500 md:mt-0">
          Copyright &copy; {new Date().getFullYear()} Coach Lawson Training and
          Track Foundation.
        </p>
        <p className="mt-6 text-sm text-slate-500 md:mt-0">
          Coach Lawson Training and Track Foundation is a 501(c)(3) not for
          profit organization.
        </p>
        <p className="mt-6 text-sm text-slate-500 md:mt-0">
          The development and maintainance of this site is provided free of
          charge by{' '}
          <a
            href="https://chriswhite.rocks"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            chriswhite.rocks
          </a>
        </p>
      </Container>
    </footer>
  )
}
