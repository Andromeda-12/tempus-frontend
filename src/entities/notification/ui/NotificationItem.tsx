import clsx from 'clsx'
import { useEvent, useUnit } from 'effector-react'
import { ReactNode, useRef } from 'react'
import {
  $duration,
  $position,
  dismissNotification,
  NotificationType
} from '../model'

export type Notification = {
  id: string
  message: string
  autoHideDuration?: number
  type?: NotificationType
  onClose?: () => void
  action?: ReactNode
}

const notificationStyleVariants: Record<
  NonNullable<Notification['type']>,
  string
> = {
  success: 'bg-green-3 border-green-6',
  error: 'bg-red-3 border-red-6',
  info: 'bg-purple-3 border-purple-6',
  warning: 'bg-yellow-3 border-yellow-6'
}

const notificationIcons: Record<
  NonNullable<Notification['type']>,
  ReactNode
> = {
  success: <span>success icon</span>,
  error: <span>error icon</span>,
  info: <span>info icon</span>,
  warning: <span>warning icon</span>
}

const closeButtonStyleVariants: Record<
  NonNullable<Notification['type']>,
  string
> = {
  success: 'hover:bg-green-5 active:bg-green-6',
  error: 'hover:bg-red-5 active:bg-red-6',
  info: 'hover:bg-purple-5 active:bg-purple-6',
  warning: 'hover:bg-yellow-5 active:bg-yellow-6'
}

interface NotificationProps {
  notification: Notification
}

export const NotificationItem = ({
  notification: { id, autoHideDuration, message, onClose, type = 'info' }
}: NotificationProps) => {
  const duration = useUnit($duration)
  const position = useUnit($position)
  const dismiss = useEvent(dismissNotification)

  const handleDismiss = () => {
    dismiss(id)
  }

  const timeout = useRef<NodeJS.Timeout>()
  timeout.current = setTimeout(handleDismiss, autoHideDuration ?? duration)

  return (
    <li
      className={clsx(
        'px-4 py-3 w-max min-w-[260px] text-sm flex items-center shadow border rounded transition-colors duration-100 pointer-events-auto',
        notificationStyleVariants[type]
      )}
    >
      <div className='flex gap-2 items-center'>
        {notificationIcons[type]}
        <span className='max-w-sm font-medium'>{message}</span>
      </div>

      <div className='pl-4 ml-auto'>
        <button
          onClick={handleDismiss}
          className={clsx(
            'p-1 rounded transition-colors duration-100',
            closeButtonStyleVariants[type]
          )}
        >
          <span>Close icon</span>
        </button>
      </div>
    </li>
  )
}
