import clsx from 'clsx'
import { ReactNode } from 'react'
import { Spinner } from '../Spinner'

interface ButtonProps {
  children?: ReactNode
  className?: string
  type?: 'button' | 'icon'
  variant?: 'contained' | 'outline' | 'text'
  startIcon?: ReactNode
  endIcon?: ReactNode
  withGlow?: boolean
  withShadow?: boolean
  rounded?:
    | 'rounded-none'
    | 'rounded'
    | 'rounded-sm'
    | 'rounded-md'
    | 'rounded-lg'
    | 'rounded-xl'
    | 'rounded-full'
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
}

const Icon = ({
  children,
  className
}: {
  children: ReactNode
  className: string
}) => <span className={clsx('w-5 h-5', className)}>{children}</span>

export const Button = ({
  children,
  className,
  type = 'button',
  variant = 'contained',
  startIcon,
  endIcon,
  withGlow,
  withShadow = false,
  rounded = 'rounded-lg',
  disabled,
  loading,
  onClick
}: ButtonProps) => {
  return (
    <button
      type='button'
      disabled={disabled || loading}
      className={clsx(
        'ring-primary/40 inline-flex items-center justify-center text-sm font-medium transition duration-150 ease-in-out',
        'focus-visible:ring-4 focus:outline-none',
        type === 'button' ? 'px-5 py-2.5' : 'px-2.5 py-2.5',
        variant === 'contained' &&
          'bg-primary text-white dark:text-slate-800 hover:bg-primary-hover active:bg-primary-hover/70 focus-visible:bg-primary-hover',
        variant === 'outline' &&
          'py-[0.563rem] bg-transparent hover:bg-primary/10 active:bg-primary/15 text-primary border border-primary/60 hover:border-primary',
        variant === 'text' &&
          'bg-transparent text-primary hover:bg-primary/10 focus-visible:bg-primary/10 active:bg-primary/15 shadow-none hover:shadow-sm',
        withGlow &&
          'shadow-lg shadow-primary/50 hover:shadow-primary-hover active:shadow-primary-hover/70',
        withShadow && 'shadow-md hover:shadow-lg',
        (disabled || loading) &&
          variant === 'contained' &&
          'cursor-not-allowed bg-primary/50 active:bg-primary/50 hover:bg-primary/50',
        rounded,
        className
      )}
      onClick={onClick}
    >
      {loading && (
        <Spinner
          className={clsx('w-3.5 h-3.5', children && 'mr-1 -mb-[1px] -ml-1')}
        />
      )}

      {startIcon && <Icon className='mr-2 -ml-1'>{startIcon}</Icon>}

      {children}

      {endIcon && <Icon className='ml-2 -mr-1'>{endIcon}</Icon>}
    </button>
  )
}
