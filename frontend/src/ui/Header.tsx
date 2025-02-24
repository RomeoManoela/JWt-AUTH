import { Link, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUser } from '../services/apis.ts'
import { setUsername } from '../user/userSlice.ts'

function Header() {
  const username = useSelector(
    (state: { user: { username: string } }) => state.user.username,
  )
  const dispatch = useDispatch()
  useEffect((): any => {
    const username = getUser()
    if (username !== null) dispatch(setUsername(username))
    else return <Navigate to={'/login'} />
  }, [])
  return (
    <header className={'flex items-center justify-between bg-lime-800 p-2'}>
      <Link
        to={'/'}
        className={
          'tracking-[0.3rem] text-stone-400 transition-all duration-150' +
          ' hover:text-stone-500 md:tracking-[O.6rem]'
        }
      >
        JWT-AUTH
      </Link>
      <p
        className={
          'rounded bg-lime-900 px-1 text-stone-400 transition-all duration-150 hover:text-stone-500'
        }
      >
        {username}
      </p>
    </header>
  )
}

export default Header
