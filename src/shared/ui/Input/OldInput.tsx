import clsx from 'clsx'
import { useId } from 'react'

interface InputProps {
  className?: string
  placeholder?: string
  variant?: 'outlined' | 'standard' | 'filled'
  filled?: boolean
  label?: string
  labelBackground?: string
  disabled?: boolean
  type?: 'password' | 'email' | 'number'
  helperText?: string
  error?: boolean
}

export const OldInput = ({
  className,
  placeholder,
  variant = 'standard',
  filled,
  label,
  labelBackground,
  disabled,
  helperText,
  error
}: InputProps) => {
  const id = useId()
  // bg-clip-padding
  return (
    <div className='relative z-0 w-full'>
      <input
        id={id}
        type='text'
        placeholder={placeholder || ' '}
        disabled={disabled}
        className={clsx(
          'w-full bg-transparent focus:outline-none peer transition-colors duration-150',
          variant === 'outlined' &&
            'px-3 py-3 border focus:shadow-input-shadow rounded-md',
          variant === 'standard' &&
            'pb-1 pt-3 border-b-2 -z-1',
          disabled &&
            'text-gray-700 bg-gray-100 dark:bg-primary-disable/10 border-dotted cursor-not-allowed',
          label && 'placeholder:opacity-0 focus:placeholder:opacity-100',
          filled && 'bg-gray-100 dark:bg-primary/7',
          filled && variant === 'standard' && 'px-2 pt-5 rounded-t-md',
          error ? 'focus:border-error' : 'focus:border-primary',
          error && variant === 'outlined'
            ? 'border-error dark:border-error focus:dark:border-error focus:shadow-error'
            : 'dark:border-primary/50 focus:shadow-primary',
          error && variant === 'standard' ? 'border-error dark:border-error' : 'border-slate-500 dark:border-primary/50 focus:dark:border-primary',
          className
        )}
      />

      {label && (
        <label
          htmlFor={id}
          className={clsx(
            'absolute duration-150 transform -translate-y-6 scale-85',
            'peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85',
            variant === 'standard' &&
              '-z-2 peer-focus:-translate-y-6',
            variant === 'standard' && filled ? 'top-5 left-2 peer-focus:left-2 origin-[0]' : 'top-3 left-0 peer-focus:left-0 origin-[0]',
            variant === 'outlined' &&
              'px-1 top-3 left-2 peer-focus:left-2 peer-focus:-translate-y-6',
            labelBackground
              ? labelBackground
              : filled || disabled
              ? ''
              : 'bg-background-light dark:bg-background-dark',
            error
              ? 'text-error peer-focus:text-error'
              : 'text-gray-400 peer-focus:text-primary'
          )}
        >
          {label}
        </label>
      )}

      <div
        className={clsx(
          'text-sm text-start mt-1',
          error ? 'text-error' : 'text-color-light/60 dark:text-color-dark/60'
        )}
      >
        {helperText}
      </div>
    </div>
  )
}
// transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
// !pr-9'
// icon: {
//   top: "top-2/4",
//   right: "right-3",
//   transform: "-translate-y-2/4",
// },