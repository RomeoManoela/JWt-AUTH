import { Form, Link } from 'react-router-dom'
import { JSX } from 'react'

function MyForm({ actionType }: { actionType: string }): JSX.Element {
  return (
    <Form className={'mx-auto w-2/5 space-y-3 text-center'}>
      <h1>{actionType}</h1>
      <input className={'input'} type='text' name='username' placeholder='Username' />
      <br />
      <input className={'input'} type='password' name='password' placeholder='Password' />
      <br />
      <button
        className={
          'inline-block rounded bg-teal-800 px-2 py-1 text-sm ' +
          'transition-all duration-150 hover:bg-teal-900'
        }
      >
        {actionType}
      </button>
      <br />
      {actionType === 'Login' ? (
        <Link to={'/register'} className={'text-sm'}>
          Want to create an account ? sign up
        </Link>
      ) : (
        <Link className={'text-sm'} to={'/login'}>
          Already had an account? login
        </Link>
      )}
    </Form>
  )
}

export default MyForm
