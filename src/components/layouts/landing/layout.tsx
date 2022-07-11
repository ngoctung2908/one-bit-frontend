import { Outlet } from 'react-router-dom'
import { Sider } from './sider/sider'
import { Nav } from './nav/nav'
import Footer from './footer/footer'
import { Partner } from 'components/partner/partner'
import topBgPng from 'assets/images/top-bg.png'
import bottomBgPng from 'assets/images/bottom-bg.png'

export const Layout = () => {
  return (
    <div
      className="min-h-screen flex relative pb-24 md:pb-0 bg-no-repeat"
      // style={{
      //   backgroundImage: `url(${topBgPng})`,
      //   backgroundPositionX: 'right',
      //   backgroundPositionY: 'calc(100vh - 313px)',
      //   backgroundSize: '100% auto',
      // }}
    >
      <div
        className="min-h-screen flex relative overflow-x-hidden w-full bg-no-repeat"
        // style={{
        //   backgroundImage: `url(${bottomBgPng})`,
        //   backgroundPositionX: 'center',
        //   backgroundPositionY: 'bottom',
        //   backgroundSize: '100% auto',
        // }}
      >
        <Sider />
        <div className="block sm:flex-1 p-4 sm:p-8">
          <Nav />
          <Outlet />
          <Partner />
          <Footer />
        </div>
      </div>
    </div>
  )
}
