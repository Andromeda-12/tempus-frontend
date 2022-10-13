import { notificationModel } from '@/entities/notification'
import { NotificationType } from '@/entities/notification/model'
import { viewerModel } from '@/entities/viewer'
import { createEvent, sample } from 'effector'

export const signOut = createEvent()

sample({
  clock: signOut,
  target: viewerModel.logoutFx
})

sample({
  clock: viewerModel.logoutFx.doneData,
  filter: ({ success }) => success,
  target: viewerModel.logoutViewer
})

sample({
  clock: viewerModel.logoutFx.failData,
  fn: (error) => ({
    type: NotificationType.Error,
    title: 'SignOut Error',
    message: error.message
  }),
  target: notificationModel.setNotification
})
