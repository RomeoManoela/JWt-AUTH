import Header from './Header.tsx'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from './Footer.tsx'
import React from 'react'
import Loader from './Loader.tsx'

function AppLayout(): React.ReactNode {
  const navigation = useNavigation()
  const isLoading: boolean =
    navigation.state === 'loading' || navigation.state === 'submitting'
  return (
    <div className={'grid h-screen grid-rows-[auto_1fr_auto]'}>
      {isLoading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout
