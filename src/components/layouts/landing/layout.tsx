import { Outlet } from 'react-router-dom'
import { Sider } from './sider/sider'
import { Nav } from './nav/nav'

export const Layout = () => {
  return (
    <div className="bg-accent-dark-0 min-h-screen flex">
      <Sider />
      <div className="flex-1 p-8">
        <Nav />
        <Outlet />
      </div>
    </div>
  )
}
