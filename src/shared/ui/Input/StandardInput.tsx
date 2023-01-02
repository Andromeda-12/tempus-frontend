import clsx from 'clsx'
import { Input, InputProps as BaseInputProps } from './Input'

const sizeMap = {
  sm: 'pt-1',
  md: 'pt-3',
  xl: 'pt-6'
}

interface InputProps extends BaseInputProps {
  error?: boolean
}

export const StandardInput = ({ error, ...rest }: InputProps) => {
  let conditionalStyles = 'border-primary/50 focus:border-primary disabled:border-primary-disabled'

  if (error) conditionalStyles = 'border-error text-error disabled:border-error/50'

  if (rest.startIconName) conditionalStyles += ' pl-8'
  if (rest.endIconName) conditionalStyles += ' pr-8'

  return (
    <Input
      passwordIconStyle='right-4 top-4'
      inputStyles={clsx(
        'outline-none bg-transparent border-b rounded-t-lg ',
        conditionalStyles,
        sizeMap[rest.size || 'md']
      )}
      startIconStyles='left-0 top-4'
      endIconStyles='right-0 top-4'
      {...rest}
    />
  )
}
