import { getToken, register } from './apis.ts'
import { formType } from '../util/types.ts'
import { redirect } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

export const loginAction = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData) as formType
  const accessToken: string | null = await getToken(data)
  if (accessToken) {
    localStorage.setItem('access', accessToken)
    console.log(jwtDecode(accessToken))
    return redirect('/dashboard')
  } else return 'Verify your login credentials'
}

export const registerAction = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData) as formType
  const username: string | null = await register(data)
  if (username) {
    return redirect('/login')
  } else return 'Maybe the username is already registered'
}
