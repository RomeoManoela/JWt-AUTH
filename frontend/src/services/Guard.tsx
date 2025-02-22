import { Navigate, useLoaderData } from 'react-router-dom'
import React from 'react'

function Guard({ children }: { children: React.ReactNode }): React.ReactNode {
  const isAuthenticated: boolean = useLoaderData() as boolean
  return isAuthenticated ? children : <Navigate to={'/login'} />
}

export default Guard
