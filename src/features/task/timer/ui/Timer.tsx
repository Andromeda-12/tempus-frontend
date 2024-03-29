import clsx from 'clsx'
import { useUnit } from 'effector-react'
import { formatTime } from '@/shared/lib'
import { $isLoading, $timer } from '../model'

interface TimerProps {
  disabled?: boolean
}

export const Timer = ({ disabled }: TimerProps) => {
  const isLoading = useUnit($isLoading)
  const timer = useUnit($timer)

  if (isLoading)
    return (
      <div className='h-[1.5em] w-[70px] bg-gray-500/30 animate-fast-pulse'></div>
    )

  return (
    <span
      className={clsx(
        'text-xl font-semibold',
        disabled && 'dark:text-color-dark/40 text-color-light/40'
      )}
    >
      {formatTime(timer, true)}
    </span>
  )
}
