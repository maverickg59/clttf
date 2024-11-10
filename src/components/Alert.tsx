type AlertProps = {
  message: string
}

export function Alert({ message }: AlertProps) {
  return (
    <div className="absolute mt-2 flex h-16 w-1/5 items-center rounded-3xl bg-white p-4">
      <span className="ml-2 block min-h-[1.25em] text-sm text-red-600">
        {message}
      </span>
    </div>
  )
}
