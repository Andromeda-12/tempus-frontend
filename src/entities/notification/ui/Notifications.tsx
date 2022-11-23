import { useUnit } from 'effector-react'
import { $notifications } from '../model'
import { NotificationItem } from './NotificationItem'
import { NotificationList } from './NotificationList'

export const Notifications = () => {
  const notifications = useUnit($notifications)

  return (
    <NotificationList>
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </NotificationList>
  )
}
