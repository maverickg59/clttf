import clsx from 'clsx'
type AlertProps = {
  message: string
  success?: boolean
}

export function Alert({ message, success = false }: AlertProps) {
  return (
    <div className="absolute mt-2 flex h-16 w-max items-center rounded-3xl bg-white p-4">
      <span
        className={clsx(
          'block min-h-[1.25em] text-sm',
          success ? 'text-green-600' : 'text-red-600',
        )}
      >
        {message}
      </span>
    </div>
  )
}
