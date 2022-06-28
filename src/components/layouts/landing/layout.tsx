import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className="bg-[#0B0B22] min-h-screen">
      <Outlet />
    </div>
  )
}
