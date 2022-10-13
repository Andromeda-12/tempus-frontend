import clsx from 'clsx'

interface SpinnerProps {
  className?: string
}

export const Spinner = ({ className }: SpinnerProps) => {
  return (
    <div
      className={clsx(
        'inline-block h-5 w-5 border-2 border-primary border-l-gray-200 border-t-gray-200 dark:border-l-gray-600 dark:border-t-gray-600 animate-spin rounded-full',
        className
      )}
      role='status'
    >
      <span className='sr-only'>Loading...</span>
    </div>
  )
}
