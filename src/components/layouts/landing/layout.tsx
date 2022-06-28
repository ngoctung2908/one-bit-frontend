import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className="bg-primary-dark min-h-screen">
      <Outlet />
    </div>
  )
}
