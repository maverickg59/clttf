import clsx from 'clsx'

type AlertProps = Readonly<{
  message: string
  success?: boolean
  className?: string
}>

export function Alert({ message, success = false, className }: AlertProps) {
  return (
    <div className="absolute mt-2 flex h-16 w-max items-center rounded-3xl bg-white p-4">
      <span
        className={clsx(
          'block min-h-[1.25em] text-sm',
          className,
          success ? 'text-green-600' : 'text-red-600',
        )}
      >
        {message}
      </span>
    </div>
  )
}
