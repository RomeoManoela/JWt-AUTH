import { Link } from 'react-router-dom'

function Header() {
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
        Roméo
      </p>
    </header>
  )
}

export default Header
