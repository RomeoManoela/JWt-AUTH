import { Form, Link } from 'react-router-dom'
import { JSX } from 'react'

function MyForm({
  actionType,
  error,
}: {
  actionType: string
  error: string | null
}): JSX.Element {
  return (
    <Form method={'POST'} className={'mx-auto w-2/5 space-y-3 text-center'}>
      <h1>{actionType}</h1>
      {error && (
        <>
          <p className={'inline rounded bg-red-800 p-1 text-white'}>{error}</p>
          <br />
        </>
      )}
      <input
        className={'input'}
        type='text'
        name='username'
        placeholder='Username'
        required
      />
      <br />
      <input
        className={'input'}
        type='password'
        name='password'
        placeholder='Password'
        required
      />
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
