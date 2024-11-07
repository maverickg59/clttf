import clsx from 'clsx'

export function BackgroundImage({
  className,
  children,
}: Readonly<{
  children: React.ReactNode
  className?: string
}>) {
  return (
    <div
      className={clsx('absolute inset-0 overflow-hidden bg-white', className)}
    >
      {children}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white" />
    </div>
  )
}
