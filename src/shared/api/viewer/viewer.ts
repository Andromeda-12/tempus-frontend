import { AxiosRequestConfig } from 'axios'
import { BaseApi } from '../base'
import { catchError } from '../lib'
import { apiInstance } from './config'
import {
    ChangePasswordRequest,
  ChangePasswordResponse,
  LoginResponse,
  LogoutResponse,
  MeResponse,
  RegisterResponse,
  ViewerRequestBody
} from './models'

const VIEWER_API = '/api/viewer'

const ME_URL = `${VIEWER_API}/me`
const LOGIN_URL = `${VIEWER_API}/login`
const REGISTER_URL = `${VIEWER_API}/register`
const LOGOUT_URL = `${VIEWER_API}/logout`
const CHANGE_PASSWORD_URL = `${VIEWER_API}/change-password`

class ViewerApi extends BaseApi {
  async me(cookieValue?: string) {
    try {
      const options: AxiosRequestConfig = {
        headers: {}
      }

      if (typeof window === 'undefined') {
        options.withCredentials = true
        options.headers!.Cookie = cookieValue
          ? `${COOKIE_NAME}=${cookieValue};`
          : ''
      }

      const { data } = await apiInstance.get<MeResponse>(ME_URL, options)

      return data
    } catch (error) {
      throw catchError(error)
    }
  }

  async login(body: ViewerRequestBody) {
    const response = await this.postRequest<LoginResponse>(LOGIN_URL, body)

    return response
  }

  async register(body: ViewerRequestBody) {
    const response = await this.postRequest<RegisterResponse>(
      REGISTER_URL,
      body
    )

    return response
  }

  async logout() {
    try {
      const { data } = await apiInstance.post<LogoutResponse>(LOGOUT_URL)

      return data
    } catch (error) {
      throw catchError(error)
    }
  }

  async changePassword(body: ChangePasswordRequest) {
    try {
      const { data } = await apiInstance.patch<ChangePasswordResponse>(
        CHANGE_PASSWORD_URL,
        body
      )

      return data
    } catch (error) {
      throw catchError(error)
    }
  }
}

export const viewerApi = new ViewerApi(apiInstance)
