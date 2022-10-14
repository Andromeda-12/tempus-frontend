import { Root as CheckboxRoot, Indicator } from '@radix-ui/react-checkbox'
import { Label } from '@radix-ui/react-label'
import clsx from 'clsx'

const CheckIcon = ({ className }: { className: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className={clsx('', className)}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M4.5 12.75l6 6 9-13.5'
    />
  </svg>
)

interface CheckboxProps {
  name?: string
  label?: string
  checked?: boolean
  disabled?: boolean
  onChange?: () => void
}

export const Checkbox = ({
  name,
  label,
  checked,
  disabled,
  onChange
}: CheckboxProps) => {
  return (
    <div className='flex'>
      <CheckboxRoot
        id={name}
        checked={checked}
        disabled={disabled}
        className={clsx(
          'flex h-5 w-5 items-center justify-center rounded',
          'radix-state-checked:bg-primary radix-state-unchecked:bg-gray-200 dark:radix-state-unchecked:bg-gray-700',
          'focus:outline-none focus-visible:ring ring-primary/40 focus-visible:ring-opacity-75',
          'disabled:radix-state-checked:bg-primary/50 disabled:cursor-not-allowed'
        )}
        onCheckedChange={onChange}
      >
        <Indicator>
          <CheckIcon className='h-4 w-4 self-center text-white dark:text-slate-800' />
        </Indicator>
      </CheckboxRoot>

      {label && (
        <Label
          htmlFor={name}
          className='ml-3 cursor-pointer select-none text-sm font-medium text-gray-900 dark:text-gray-100'
        >
          {label}
        </Label>
      )}
    </div>
  )
}
