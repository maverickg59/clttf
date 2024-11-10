type AlertProps = {
  message: string
}

import { XCircleIcon } from '@heroicons/react/20/solid'

export function Alert({ message }: AlertProps) {
  return (
    <div className="absolute mt-2 w-1/5 rounded-4xl bg-red-50 p-4">
      <div className="flex items-center">
        <div className="shrink-0">
          <XCircleIcon aria-hidden="true" className="h-5 w-5 text-red-400" />
        </div>
        <span className="ml-2 block min-h-[1.25em] text-xs text-red-600">
          {message}
        </span>
      </div>
    </div>
  )
}
