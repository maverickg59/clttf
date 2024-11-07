import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Layout } from '@/components/Layout'
import Image from 'next/image'
import backgroundImage from '@/images/clttf_logo_white.png'

export default function NotFound() {
  return (
    <Layout showFooter={false}>
      <div className="relative flex h-full items-center py-20 sm:py-36">
        <BackgroundImage className="absolute inset-0 z-[-1] bg-contain bg-center bg-no-repeat">
          <Image
            src={backgroundImage}
            alt="CLTTF logo"
            className="mx-auto w-3/5"
          />
        </BackgroundImage>
        <Container className="relative flex w-full flex-col items-center">
          <p className="font-display text-2xl tracking-tight text-zinc-900">
            404
          </p>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-tighter text-zinc-600 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-4 text-lg tracking-tight text-zinc-900">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <Button href="/" className="mt-8">
            Go back home
          </Button>
        </Container>
      </div>
    </Layout>
  )
}
