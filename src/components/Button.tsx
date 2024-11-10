import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps =
  | (React.ComponentPropsWithoutRef<typeof Link> & {
      rounded?: boolean
      outline?: boolean
      ring?: boolean
    })
  | (React.ComponentPropsWithoutRef<'button'> & {
      href?: undefined
      rounded?: boolean
      outline?: boolean
      ring?: boolean
    })

export function Button({
  className,
  rounded,
  outline,
  ring = true,
  ...props
}: ButtonProps) {
  className = clsx(
    outline
      ? 'focus:border-zinc-900 focus:bg-opacity-15 focus:bg-zinc-900 hover:bg-opacity-15 rounded px-10 py-2.5 text-lg font-semibold text-slate-900 shadow-sm hover:bg-zinc-900 focus:outline-none'
      : 'inline-flex justify-center focus:ring-slate-950 bg-slate-600 p-4 text-base font-semibold text-white hover:bg-slate-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 active:text-white/70',
    rounded ? 'rounded-2xl' : '',
    ring
      ? 'ring-1 ring-inset ring-slate-950'
      : 'hover:ring-slate-950 focus:ring-slate-950',
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button type="button" className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
