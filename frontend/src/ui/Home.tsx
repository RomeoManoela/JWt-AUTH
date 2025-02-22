import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div className={'mt-2 space-y-10 text-center'}>
      <h1 className={'text-[2rem]'}>Hello World ! </h1>
      <h2>
        Welcome to my <span className={'text-xl text-lime-800'}>JWT-AUTH-TRAINING</span>{' '}
        project
      </h2>
      <p>
        A built this project to really understand how JWTs work, especially using an
        HTTP-only cookie, only the server can access to the refresh token for more secure
        app
      </p>
      <div className={'mx-auto flex w-1/4 justify-between'}>
        <button
          onClick={() => navigate('/login')}
          className={
            'inline-block rounded bg-lime-800 px-2 py-1 text-sm' +
            ' transition-all duration-150 hover:bg-lime-900'
          }
        >
          Login
        </button>
        <button
          onClick={() => navigate('/register')}
          className={
            'inline-block rounded bg-teal-800 px-2 py-1 text-sm ' +
            'transition-all duration-150 hover:bg-teal-900'
          }
        >
          Register
        </button>
      </div>
    </div>
  )
}

export default Home
