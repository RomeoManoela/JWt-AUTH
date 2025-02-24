import MyForm from './MyForm.tsx'
import { useActionData } from 'react-router-dom'

function Login() {
  const errorMessage: string | null = useActionData() as string | null

  return (
    <div>
      <MyForm actionType={'Login'} error={errorMessage} />
    </div>
  )
}

export default Login
