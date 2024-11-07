import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps =
  | (React.ComponentPropsWithoutRef<typeof Link> & {
      rounded?: boolean
      outline?: boolean
    })
  | (React.ComponentPropsWithoutRef<'button'> & {
      href?: undefined
      rounded?: boolean
      outline?: boolean
    })

export function Button({ className, rounded, outline, ...props }: ButtonProps) {
  className = clsx(
    outline
      ? 'ml-6 hover:bg-opacity-15 rounded px-10 py-2.5 text-lg font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-950 hover:bg-zinc-900'
      : 'inline-flex justify-center bg-slate-600 p-4 text-base font-semibold text-white hover:bg-slate-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 active:text-white/70',
    rounded ? 'rounded-2xl' : '',
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button type="button" className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
