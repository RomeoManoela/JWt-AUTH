import MyForm from './MyForm.tsx'
import { useActionData } from 'react-router-dom'

function Register() {
  const errorMessage: string | null = useActionData() as string | null
  return (
    <div>
      <MyForm error={errorMessage} actionType={'Register'} />
    </div>
  )
}

export default Register
