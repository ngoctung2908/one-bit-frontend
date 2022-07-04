import { Outlet } from 'react-router-dom'
import { Sider } from './sider/sider'
import { Nav } from './nav/nav'
import Footer from './footer/footer'
import { Partner } from 'components/partner/partner'

export const Layout = () => {
  return (
    <div className="min-h-screen flex relative">
      <div className="min-h-screen flex relative overflow-x-hidden">
        <Sider />
        <div className="flex-1 p-8">
          <Nav />
          <Outlet />
          <Partner />
          <Footer />
        </div>
      </div>
    </div>
  )
}
