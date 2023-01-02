import React, { ReactNode, useEffect, useState } from 'react'
import clsx from 'clsx'
import { Icon } from '../Icon'

const sizeMap = {
  sm: 'h-10 text-sm',
  md: 'h-12 text-base',
  xl: 'h-14 text-lg'
}

const breakpointsSizes = Object.keys(sizeMap)
  .map((key) => {
    const styles = sizeMap[key as keyof typeof sizeMap]

    if (key === 'sm') return styles

    return styles
      .split(' ')
      .map((style) => `${key}:${style}`)
      .join(' ')
  })
  .join(' ')

export interface InputProps
  extends Omit<React.ComponentProps<'input'>, 'size'> {
  size?: 'sm' | 'md' | 'xl'
  placeholder?: string
  className?: string
  type?: 'text' | 'password'
  passwordIconStyle?: string
  containerStyles?: string
  inputStyles?: string
  startIconStyles?: string
  endIconStyles?: string
  startIconName?: string
  endIconName?: string
  ref?: React.ForwardedRef<HTMLInputElement>
}

export const Input = ({
  type = 'text',
  size,
  placeholder,
  className,
  passwordIconStyle,
  containerStyles,
  inputStyles,
  startIconName,
  startIconStyles,
  endIconStyles,
  endIconName,
  ref,
  ...rest
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  // const handleIconClick = () => {
  //   if (type === 'password') setShowPassword(!showPassword)
  // }

  // const breakpointsSizes = Object.keys(sizeMap)
  //   .map((key) => {
  //     const styles = sizeMap[key as keyof typeof sizeMap]

  //     if (key === 'sm') return styles

  //     return styles
  //       .split(' ')
  //       .map((style) => `${key}:${style}`)
  //       .join(' ')
  //   })
  //   .join(' ')

  //   console.log(breakpointsSizes);

  return (
    <div
      className={clsx(
        'relative ',
        !size && 'h-12 text-base',
        size && sizeMap[size],
        containerStyles
      )}
    >
      {startIconName && (
        <Icon
          size={size}
          name={startIconName}
          className={clsx('absolute top-0 bottom-0 my-auto', startIconStyles)}
        />
      )}
      {endIconName && (
        <Icon
          size={size}
          name={endIconName}
          className={clsx('absolute top-0 bottom-0 my-auto', endIconStyles)}
        />
      )}

      <input
        {...rest}
        className={clsx('h-full w-full  disabled:text-gray-400', inputStyles)}
        ref={ref}
        type={type === 'password' && !showPassword ? 'password' : 'text'}
        placeholder={placeholder}
      />

      {type === 'password' && (
        <div onClick={() => setShowPassword(!showPassword)}>
          <Icon
            size={size}
            name={showPassword ? 'eye' : 'eye-slash'}
            className={clsx(
              'absolute top-1 bottom-0 my-auto',
              passwordIconStyle
            )}
          />
        </div>
      )}
    </div>
  )
}
