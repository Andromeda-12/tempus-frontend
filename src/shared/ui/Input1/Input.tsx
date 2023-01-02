import React, { ReactNode, useState } from 'react'
import clsx from 'clsx'
import { base, variantMap } from './styles'

const EyeIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    stroke-width='1.5'
    stroke='currentColor'
    className='w-6 h-6'
  >
    <path
      stroke-linecap='round'
      stroke-linejoin='round'
      d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
    />
    <path
      stroke-linecap='round'
      stroke-linejoin='round'
      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
    />
  </svg>
)

const EyeClosedIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='w-6 h-6'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
    />
  </svg>
)

interface InputProps extends Omit<React.ComponentProps<'input'>, 'size'> {
  variant?: 'standard' | 'outlined' | 'filled'
  size?: 'md' | 'lg'
  label?: string
  placeholder?: string
  error?: boolean
  password?: boolean
  helperText?: string
  icon?: ReactNode
  labelClassName?: string
  containerClassName?: string
  className?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'outlined',
      size = 'md',
      label,
      placeholder,
      error,
      password,
      helperText,
      icon,
      labelClassName,
      containerClassName,
      className,
      ...rest
    },
    ref
  ) => {
    //   const sizeMap = {
    //     'sm' : '',
    //     'md' : 'h-11 text-sm pt-4 pb-1.5 peer-placeholder-shown:leading-[4.25]',
    //     'lg' : 'h-12 text-sm px-px pt-5 pb-2 peer-placeholder-shown:leading-[4.875]'
    //   }

    //   const variantMap = {
    //     'standard': 'border-b placeholder-shown:border-blue-gray-200 ',
    //     'outlined': '',
    //     'filled': '',
    //   }

    //   const withIconMap = {
    //     'standard:': '!pr-7'
    //   }

    //   const iconVariantMap = {
    //     'standard': 'top-2/4 right-0 -translate-y-1/4',
    //   }

    const inputVariant = variantMap[variant]
    const inputSize = inputVariant.sizes[size]
    const inputError = inputVariant.error.input
    const labelError = inputVariant.error.label

    const containerClasses = clsx(
      base.container,
      inputSize.container,
      containerClassName
    )

    const inputClasses = clsx(
      base.input,
      //   inputVariant.input,
      variant === 'outlined' && label
        ? 'border !border-t-transparent focus:!border-t-transparent dark:focus:!border-t-transparent'
        : inputVariant.input,
      inputSize.input,
      icon && inputVariant.inputWithIcon,
      error && inputError,
      // error && variant === 'outlined' && label ? 'placeholder-shown:!border-t-error' :
      // error && variant==='outlined'  && 'placeholder-shown:!border-t-primary/50',
      variant === 'outlined' && label && !error
        ? 'dark:placeholder-shown:!border-t-primary/50 placeholder-shown:!border-t-slate-500'
        : variant === 'outlined' &&
            label &&
            error &&
            'placeholder-shown:!border-t-error',
      className
    )

    const labelClasses = clsx(
      base.label,
      inputVariant.label,
      inputSize.label,
      error && labelError,
      labelClassName
    )

    const iconClasses = clsx(base.icon, inputVariant.icon, inputSize.icon)

    const helperTextClasses = clsx(
      'text-sm self-start text-justify h-5',
      variant === 'outlined' && 'ml-3 mr-3',
      error ? 'text-error' : 'text-slate-600 dark:text-slate-300'
    )

    const [showPassword, setShowPassword] = useState(false)

    return (
      <div ref={ref} className={containerClasses}>
        <div>
          {icon && <div className={iconClasses}>{icon}</div>}
          {password && (
            <div
              className={iconClasses}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeIcon /> : <EyeClosedIcon />}
            </div>
          )}
          <input
            {...rest}
            type={password && !showPassword ? 'password' : 'text'}
            className={inputClasses}
            placeholder={placeholder || ' '}
          />
          {label && <label className={labelClasses}>{label}</label>}
        </div>
        <div className={helperTextClasses}>{helperText}</div>
      </div>
    )
  }
)

Input.displayName = 'Input'
