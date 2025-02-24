import axios from 'axios'
import { formType } from '../util/types.ts'

const api = axios.create({
  baseURL: 'http://localhost:8001/api',
  withCredentials: true,
})

api.interceptors.request.use(
  (config) => {
    const token: string | null = localStorage.getItem('token')
    if (token && !config?.url?.includes('register')) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export const register = async (formData: formType): Promise<string | null> => {
  try {
    const res = await api.post('register/', formData)
    return res.data
  } catch (e) {
    console.error(e)
    return null
  }
}

export const getToken = async (formData: formType): Promise<string | null> => {
  try {
    const res = await api.post('token-obtain/', formData)
    return res.data.access
  } catch (e) {
    console.log(e)
    return null
  }
}

export const refreshToken = async (): Promise<string | null> => {
  try {
    const res = await api.post('token-refresh/', {
      withCredentials: true,
    })
    return res.data.access
  } catch (e) {
    console.log(e)
    return null
  }
}

export const getUser = async (): Promise<string | null> => {
  try {
    const res = await api.get('get-user/')
    return res.data.username
  } catch (e) {
    console.log(e)
    return null
  }
}
