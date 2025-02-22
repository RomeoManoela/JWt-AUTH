import { jwtDecode } from 'jwt-decode'
import { refreshToken } from './apis.ts'

export const guardLoader = async (): Promise<boolean> => {
  const token: string | null = localStorage.getItem('token')
  if (!token) return false
  const exp: number = jwtDecode(token).exp as number
  if (!exp) return false
  const now: number = Date.now()
  if (exp < now) {
    const newToken: string | null = await refreshToken()
    if (!newToken) return false
    localStorage.setItem('token', newToken)
  }
  return true
}
