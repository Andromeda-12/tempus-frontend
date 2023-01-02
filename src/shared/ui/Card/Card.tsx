import clsx from 'clsx'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={clsx(
        'bg-white dark:bg-white shadow-md rounded-xl dark:border-gray-700 overflow-hidden',
        className
      )}
    >
      {children}
    </div>
  )
}
