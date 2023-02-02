import { ReactNode } from 'react'
import clsx from 'clsx'
import * as PopoverPrimitive from '@radix-ui/react-popover'

interface PropsProps {
  className?: string
  rootClassName?: string
  children: ReactNode
  trigger?: ReactNode
  withArrow?: boolean
  sideOffset?: number
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

export const Popover = ({
  className,
  rootClassName,
  children,
  trigger,
  withArrow,
  sideOffset,
  isOpen,
  onOpenChange
}: PropsProps) => {
  return (
    <div className={clsx('', rootClassName)}>
      <PopoverPrimitive.Root  open={isOpen} onOpenChange={onOpenChange}>
        {trigger && (
          <PopoverPrimitive.Trigger asChild>
            <div>{trigger}</div>
          </PopoverPrimitive.Trigger>
        )}

        <PopoverPrimitive.Content
          align='start'
          className={clsx(
            'rounded-lg overflow-hidden shadow-lg shadow-background-dark/20 dark:shadow-background-dark',
            'bg-white dark:bg-neutral',
            className
          )}
          sideOffset={sideOffset}
        >
          {withArrow && <PopoverPrimitive.Arrow className='fill-current' />}

          {children}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Root>
    </div>
  )
}
