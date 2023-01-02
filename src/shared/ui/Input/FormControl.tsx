import { OutlinedInput } from './OutlinedInput'
import { InputProps as BaseInputProps } from './Input'
import clsx from 'clsx'

interface InputProps extends BaseInputProps {
  error?: boolean
  label?: string
  helperText?: string
}

export const FormControl = ({ label, helperText, ...rest }: InputProps) => {
  return (
    <div className={clsx('flex flex-col w-full')}>
      <label
        htmlFor={rest.name}
        className={clsx(
          'px-1 pb-2 pt-1 text-sm w-fit text-color-light/80',
          rest.error && 'text-error'
        )}
      >
        {label}
      </label>
      <OutlinedInput {...rest} id={rest.name} />
      <span
        className={clsx(
          'px-1 py-1 text-sm whitespace-normal',
          rest.error ? 'text-error' : 'text-color-light/50 '
        )}
      >
        {helperText || ' '}
      </span>
    </div>
  )
}
