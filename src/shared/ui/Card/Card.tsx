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
        'bg-white text-black dark:text-white dark:bg-neutral shadow-md rounded-xl dark:border-gray-700 overflow-hidden',
        className
      )}
    >
      {children}
    </div>
  )
}
