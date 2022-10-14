import type { ErrorResponse, MessageResponse } from '$lib/shared/responses'
import type { GetJobsResponse } from '$lib/shared/responses/jobs'
import type { ICreateJobInput, ITakeJobInput } from '$lib/shared/types/jobs'
import type { ILoginInput, ISignupInput } from '$lib/shared/types/user'
import axios, { type AxiosError } from 'axios'

export type RequestMethod = 'GET' | 'POST' | 'DELETE' | 'PATCH'

interface ISendRequest {
  method: RequestMethod
  path: string
  body?: any
}

export interface IResponse<DataType> {
  data?: DataType
  error?: ErrorResponse
  status: number
}

const apiUrl = import.meta.env.VITE_API_URL

const axiosInstance = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
})

export async function sendRequest<DataType>(request: ISendRequest) {
  let response: IResponse<DataType> = { data: undefined, error: undefined, status: 0 }

  try {
    const res = await axiosInstance.request({
      url: request.path,
      method: request.method,
      data: request.body,
    })

    response = {
      status: res.status,
      data: res.data,
    }
  } catch (error: any) {
    const err = error as AxiosError

    const errorData = err.response as { data: ErrorResponse; status: number }

    response = {
      status: errorData.status,
      error: errorData.data,
    }
  } finally {
    return response
  }
}

const getRoutes = () => ({
  auth: {
    signup: (input: ISignupInput) => {
      return sendRequest<MessageResponse>({
        method: 'POST',
        path: '/auth/signup',
        body: input,
      })
    },
    login: (input: ILoginInput) => {
      return sendRequest<MessageResponse>({
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
  jobs: {
    get: () => {
      return sendRequest<GetJobsResponse>({
        method: 'GET',
        path: '/api/jobs',
      })
    },
    post: (input: ICreateJobInput) => {
      return sendRequest({
        method: 'POST',
        path: '/api/jobs',
        body: input,
      })
    },
    takeJob: {
      post: (input: ITakeJobInput) => {
        return sendRequest({
          method: 'POST',
          path: '/api/jobs/take-job',
          body: input,
        })
      },
    },
  },
})

export default { sendRequest, getRoutes }
