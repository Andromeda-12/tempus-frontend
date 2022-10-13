import {
  ChangePasswordRequest,
  ChangePasswordResponse,
  IClientViewer,
  LoginResponse,
  LogoutResponse,
  MeResponse,
  RegisterResponse,
  viewerApi,
  ViewerRequestBody
} from '@/shared/api'
import {
  createEffect,
  createEvent,
  createStore,
  restore,
  sample
} from 'effector'

export const setViewer = createEvent<IClientViewer | null>()
export const logoutViewer = createEvent()

export const loadViewerFx = createEffect<string | void, MeResponse, Error>(
  async (cookie) => {
    const response = await viewerApi.me(cookie || undefined)
    return response
  }
)

export const registerFx = createEffect<
  ViewerRequestBody,
  RegisterResponse,
  Error
>(async (viewer) => {
  const response = await viewerApi.register(viewer)
  return response
})

export const loginFx = createEffect<ViewerRequestBody, LoginResponse, Error>(
  async (viewer) => {
    const response = await viewerApi.login(viewer)
    return response
  }
)

export const logoutFx = createEffect<void, LogoutResponse, Error>(async () => {
  const response = await viewerApi.logout()
  return response
})

export const changePasswordFx = createEffect<
  ChangePasswordRequest,
  ChangePasswordResponse,
  Error
>(async (body) => {
  const response = await viewerApi.changePassword(body)
  return response
})

export const $viewer = restore(setViewer, null).reset(logoutViewer)
export const $isAuthenticated = $viewer.map((viewer) => !!viewer);