export interface IClientViewer {
  email: string
}

export interface IViewer extends IClientViewer {
  firstname: string
  secondname: string
}

export type ViewerRequestBody = { email: string; password: string }

export type MeResponse = { success: boolean; data: IClientViewer | null }

export type RegisterResponse =
  | {
      success: true
      data: IClientViewer
    }
  | {
      success: false
      data: string
    }

export type LoginResponse = RegisterResponse

export type LogoutResponse =
  | { success: true; data: null }
  | { success: false; data: string }

export type ChangePasswordRequest = {
  oldPassword: string
  newPassword: string
}
export type ChangePasswordResponse = LogoutResponse
