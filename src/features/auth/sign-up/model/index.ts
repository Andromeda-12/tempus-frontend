import { combine, createEvent, createStore, restore, sample } from 'effector'
import { viewerModel } from '@/entities/viewer'
import { IClientViewer } from '@/shared/api'
import { NotificationType } from '@/entities/notification/model'
import { notificationModel } from '@/entities/notification'

export const setEmail = createEvent<string>()
export const setPassword = createEvent<string>()
export const formSubmitted = createEvent()

export const $email = restore(setEmail, '').reset(viewerModel.registerFx)
export const $password = restore(setPassword, '').reset(viewerModel.registerFx)
export const $loading = viewerModel.registerFx.pending
export const $error = createStore('').on(
  viewerModel.registerFx.failData,
  (_, { message }) => message
)

const $register = combine($email, $password, (email, password) => ({
  email,
  password
}))

sample({
  clock: formSubmitted,
  source: $register,
  target: viewerModel.registerFx
})

sample({
  clock: viewerModel.registerFx.doneData,
  filter: ({ success }) => success,
  fn: ({ data }) => data as IClientViewer,
  target: viewerModel.setViewer
})

// sample({
//   clock: viewerModel.registerFx.failData,
//   fn: (error) => ({
//     type: NotificationType.Error,
//     title: 'SignOut Error',
//     message: error.message
//   }),
//   target: notificationModel.setNotification
// })

// redirect to private page
// sample({
//   clock: viewerModel.registerFx.doneData,
//   filter: ({ success }) => success,
//   target: viewerModel.closeAuthModal
// })
