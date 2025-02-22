import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8001/api',
  withCredentials: true,
})

api.interceptors.request.use(
  (config) => {
    const token: string | null = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export const getToken = async (formData: {
  username: string
  password: string
}): Promise<string | null> => {
  try {
    const res = await api.post('token-obtain/', formData)
    return res.data
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
    return res.data
  } catch (e) {
    console.log(e)
    return null
  }
}
