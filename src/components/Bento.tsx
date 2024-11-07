import clsx from 'clsx'

type BBProps = {
  name: string
  title: string
  description: string
  top?: boolean
}

type BGProps = {
  children: React.ReactNode
}

export function LeftColumnBentoBox({
  name,
  title,
  description,
}: Readonly<BBProps>) {
  return (
    <div className="relative lg:row-span-2">
      <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
        <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
          <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
            {name}
          </p>
          <span className="text-xs">{title}</span>
          <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
            {description}
          </p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
    </div>
  )
}

export function RightColumnBentoBox({
  name,
  title,
  description,
}: Readonly<BBProps>) {
  return (
    <div className="relative lg:row-span-2">
      <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
        <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
          <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
            {name}
          </p>
          <span className="text-xs">{title}</span>
          <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
            {description}
          </p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
    </div>
  )
}

export function CenterColumnBentoBox({
  name,
  title,
  description,
  top,
}: Readonly<BBProps>) {
  return (
    <div
      className={clsx(
        top
          ? 'relative max-lg:row-start-1'
          : 'relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2',
      )}
    >
      <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
        <div className="px-8 pt-8 sm:px-10 sm:pt-10">
          <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
            {name}
          </p>
          <span className="text-xs">{title}</span>
          <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
            {description}
          </p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
    </div>
  )
}

export function TripleColumnBentoGrid({ children }: Readonly<BGProps>) {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {children}
        </div>
      </div>
    </div>
  )
}

export function TopLeftDoubleRowBentoBox({
  name,
  title,
  description,
}: Readonly<BBProps>) {
  return (
    <div className="flex p-px lg:col-span-3">
      <div className="overflow-hidden rounded-lg bg-white ring-1 ring-black/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
        <div className="p-10">
          <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
            {name}
          </p>
          <span className="text-xs">{title}</span>
          <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export function BottomLeftDoubleRowBentoBox({
  name,
  title,
  description,
}: Readonly<BBProps>) {
  return (
    <div className="flex p-px lg:col-span-3">
      <div className="overflow-hidden rounded-lg bg-white ring-1 ring-black/15 lg:rounded-bl-[2rem]">
        <div className="p-10">
          <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
            {name}
          </p>
          <span className="text-xs">{title}</span>
          <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export function TopRightDoubleRowBentoBox({
  name,
  title,
  description,
}: Readonly<BBProps>) {
  return (
    <div className="flex p-px lg:col-span-3">
      <div className="overflow-hidden rounded-lg bg-white ring-1 ring-black/15 lg:rounded-tr-[2rem]">
        <div className="p-10">
          <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
            {name}
          </p>
          <span className="text-xs">{title}</span>
          <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export function BottomRightDoubleRowBentoBox({
  name,
  title,
  description,
}: Readonly<BBProps>) {
  return (
    <div className="flex p-px lg:col-span-3">
      <div className="overflow-hidden rounded-lg bg-white ring-1 ring-black/15 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
        <div className="p-10">
          <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
            {name}
          </p>
          <span className="text-xs">{title}</span>
          <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export function DoubleRowBentoGrid({ children }: Readonly<BGProps>) {
  return (
    <div className="sm:py- py-">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {children}
        </div>
      </div>
    </div>
  )
}
