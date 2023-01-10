import clsx from 'clsx'

interface SpinnerProps {
  className?: string
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
  accent?: boolean
}

const sizeMap = {
  xs: 'w-3.5 h-3.5',
  sm: 'w-4 h-4',
  base: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-16 h-16'
}

export const Spinner = ({ className, accent, size = 'base' }: SpinnerProps) => {
  return (
    <div
      className={clsx(
        'inline-block border-2 border-gray-300 border-l-gray-200 border-t-gray-200 dark:border-l-gray-600 dark:border-t-gray-600 animate-spin rounded-full',
        sizeMap[size],
        accent && '!border-l-accent !border-t-accent border-accent/50',
        className
      )}
      role='status'
    >
      <span className='sr-only'>Loading...</span>
    </div>
  )
}
