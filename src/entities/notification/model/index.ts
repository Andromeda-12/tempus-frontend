import { createEvent, createStore } from 'effector'

export enum NotificationType {
  Error = 'error',
  Notification = 'success',
  Info = 'info',
  Warning = 'warning',
  Loading = 'loading'
}

export interface INotification {
  title?: string
  message: string
  type: NotificationType
}

export const setNotification = createEvent<INotification>()

export const $notification = createStore({} as INotification).on(
  setNotification,
  (_, notification) => {
    if (!notification.type) notification.type = NotificationType.Notification
    if (!notification.title) notification.title = 'Notification'
    return notification
  }
)

export const $isNotification = $notification.map(
  (notification) => !!notification.message
)
