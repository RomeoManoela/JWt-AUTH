import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className={'bg-lime-800 text-center text-stone-400 text-stone-950'}>
      Developed by{' '}
      <Link
        className={'text-stone-100 transition-all duration-150 hover:text-stone-400'}
        to={'https://github.com/RomeoManoela'}
      >
        Romeo
      </Link>
    </footer>
  )
}

export default Footer
