import clsx from 'clsx'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className: string
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={clsx(
        'bg-white dark:bg-slate-700 shadow-md rounded-xl max-w-sm dark:border-gray-700 overflow-hidden',
        className
      )}
    >
      {children}
    </div>
  )
}
