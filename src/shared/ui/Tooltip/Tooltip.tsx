import { ReactNode } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import {
  Provider as TooltipProvider,
  Root as TooltipRoot,
  Trigger as TooltipTrigger,
  Content as TooltipContent,
  Arrow as TooltipArrow
} from '@radix-ui/react-tooltip'
import clsx from 'clsx'

interface TooltipProps {
  children: ReactNode
  className?: string
  text: string
  offset?: number
  side?: 'top' | 'right' | 'bottom' | 'left'
}

export const Tooltip = ({
  children,
  className,
  text,
  offset = 6,
  side
}: TooltipProps) => {
  return (
    <TooltipProvider delayDuration={100} skipDelayDuration={1000}>
      <TooltipRoot>
        <TooltipTrigger>{children}</TooltipTrigger>

        <TooltipContent
          side={side}
          sideOffset={offset}
          className={clsx(
            'radix-side-top:animate-slide-down-fade',
            'radix-side-right:animate-slide-left-fade',
            'radix-side-bottom:animate-slide-up-fade',
            'radix-side-left:animate-slide-right-fade',
            'inline-flex items-center rounded-md px-4 py-2.5',
            'bg-primary dark:bg-slate-800'
          )}
        >
          <TooltipArrow className='fill-current -mt-[0.6px] text-primary dark:text-slate-800' />

          <span className='block text-xs leading-none text-gray-700 dark:text-gray-100'>
            {text}
          </span>
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  )
}
