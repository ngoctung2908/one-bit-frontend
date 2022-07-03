import { Outlet } from 'react-router-dom'
import { Sider } from './sider/sider'
import { Nav } from './nav/nav'

export const Layout = () => {
  return (
    <div className="min-h-screen flex relative overflow-x-hidden">
      <Sider />
      <div className="flex-1 p-8">
        <Nav />
        <Outlet />
      </div>
    </div>
  )
}
