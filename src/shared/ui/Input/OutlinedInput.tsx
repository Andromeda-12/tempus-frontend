import clsx from 'clsx'
import { Input, InputProps as BaseInputProps } from './Input'

interface InputProps extends BaseInputProps {
  error?: boolean
}

const sizeMap = {
  sm: 'left-2',
  md: 'left-4',
  xl: 'left-6'
}

export const OutlinedInput = ({
  error,
  startIconStyles,
  className,
  ...rest
}: InputProps) => {
  let conditionalStyles =
    'border-primary/50 focus:border-primary text-color-light focus:ring-1 ring-primary disabled:border-primary-disabled'

  if (error)
    conditionalStyles = 'border-error disabled:border-error/50 text-error'

  if (rest.startIconName) conditionalStyles += ' pl-12'
  if (rest.endIconName) conditionalStyles += ' pr-12'

  return (
    <Input
      passwordIconStyle='right-4'
      inputStyles={clsx(
        'px-4 outline-none bg-transparent rounded-xl border ring-primary/40',
        conditionalStyles,
        className
      )}
      startIconStyles={clsx(sizeMap[rest.size || 'md'], startIconStyles)}
      endIconStyles='right-4 top-1'
      {...rest}
    />
  )
}
