import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { base, variantMap } from './styles'

interface InputProps extends Omit<React.ComponentProps<'input'>, 'size'> {
  variant?: 'standard' | 'outlined' | 'filled'
  size?: 'md' | 'lg'
  label?: string
  placeholder?: string
  error?: boolean
  icon?: ReactNode
  labelClassName?: string
  containerClassName?: string
  className?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'standard',
      size = 'md',
      label,
      placeholder,
      error,
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
        ? 'dark:placeholder-shown:!border-t-primary/50 placeholder-shown:!border-t-black'
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

    return (
      <div ref={ref} className={containerClasses}>
        {icon && <div className={iconClasses}>{icon}</div>}
        <input
          {...rest}
          className={inputClasses}
          placeholder={placeholder || ' '}
        />
        {label && <label className={labelClasses}>{label}</label>}
      </div>
    )
  }
)

Input.displayName = 'Input'
