import clsx from 'clsx'
import { Button } from '../Button1'

interface HamburgerButtonProps {
  open: boolean
  onClick: () => void
  className?: string
}

export const HamburgerButton = ({
  open = false,
  onClick,
  className
}: HamburgerButtonProps) => (
  <button
    type='button'
    onClick={onClick}
    className={clsx(
      'inline-flex items-center px-2.5 py-2.5 text-sm rounded-lg duration-100',
      'text-accent hover:text-background-light dark:hover:text-primary hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent',
      className
    )}
  >
    <span className='sr-only'>Open main menu</span>
    {!open ? (
      <svg
        className='w-6 h-6'
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
          clipRule='evenodd'
        ></path>
      </svg>
    ) : (
      <svg
        className='w-6 h-6'
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
          clipRule='evenodd'
        ></path>
      </svg>
    )}
  </button>
)
