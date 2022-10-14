import type { ILoginInput, ISignupInput } from '$lib/shared/types/user'
import axios, { type AxiosError } from 'axios'

export type RequestMethod = 'GET' | 'POST' | 'DELETE' | 'PATCH'

interface ISendRequest {
  method: RequestMethod
  path: string
  body?: any
}

interface IError {
  data: {
    message?: string
  }
  status: number
  statusText: string
}

export interface IResponse<DataType> {
  data?: DataType
  error?: IError
}

const apiUrl = import.meta.env.VITE_API_URL

const axiosInstance = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
})

export async function sendRequest<DataType extends unknown>(request: ISendRequest) {
  let response: IResponse<DataType> = { data: undefined, error: undefined }

  try {
    const res = await axiosInstance.request({
      url: request.path,
      method: request.method,
      data: request.body,
    })

    response.data = res.data
  } catch (error: any) {
    const err = error as AxiosError

    const errorData: IError = err.response as IError

    if (errorData) {
      response.error = errorData
    }
  } finally {
    return response
  }
}

const getRoutes = () => ({
  auth: {
    signup: (input: ISignupInput) => {
      return sendRequest({
        method: 'POST',
        path: '/auth/signup',
        body: input,
      })
    },
    login: (input: ILoginInput) => {
      return sendRequest({
        method: 'POST',
        path: '/auth/login',
        body: input,
      })
    },
    logout: () => {
      return sendRequest({
        method: 'DELETE',
        path: '/auth/logout',
      })
    },
  },
})

export default { sendRequest, getRoutes }
