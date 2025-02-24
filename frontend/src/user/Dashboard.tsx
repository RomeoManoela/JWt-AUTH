import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUsername } from './userSlice.ts'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <div className={'text-center'}>
      <button
        onClick={() => {
          localStorage.clear()
          navigate('/')
          dispatch(setUsername(''))
        }}
      >
        Logout
      </button>
    </div>
  )
}

export default Dashboard
