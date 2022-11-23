import { createEvent, createStore } from 'effector'

export type NotificationType = 'success' | 'error' | 'warning' | 'info'

export type NotificationPositions =
  | 'top'
  | 'top-right'
  | 'top-left'
  | 'bottom'
  | 'bottom-right'
  | 'bottom-left'

export interface Notification {
  id: string
  message: string
  title?: string
  type?: NotificationType
  // autoHideDuration?: number
  // onClose?: () => void
}

export const addNotification = createEvent<Notification>()
export const dismissNotification = createEvent<string>()
export const setDuration = createEvent<number>()
export const setPosition = createEvent<NotificationPositions>()

export const $notifications = createStore<Notification[]>([])
  .on(addNotification, (notifications, notification) => [
    ...notifications,
    notification
  ])
  .on(dismissNotification, (_notifications, notificationId) => {
    const notifications = [..._notifications]
    const index = notifications.findIndex((n) => n.id === notificationId)
    notifications.splice(index, 1)
    if (index !== -1) return notifications
  })
export const $position = createStore<NotificationPositions>('bottom-right').on(
  setPosition,
  (_, position) => position
)
export const $duration = createStore(5000).on(
  setDuration,
  (_, duration) => duration
)

// export const setNotification = createEvent<INotification>()

// export const $notification = createStore({} as INotification).on(
//   setNotification,
//   (_, notification) => {
//     if (!notification.type) notification.type = 'info'
//     if (!notification.title) notification.title = 'Notification'
//     return notification
//   }
// )

// export const $isNotification = $notification.map(
//   (notification) => !!notification.message
// )
