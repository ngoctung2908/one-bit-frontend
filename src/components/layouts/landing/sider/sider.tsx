import { memo } from 'react'
import { Link } from 'react-router-dom'
import logoSvg from 'assets/images/logo.svg'
import smallLogoSvg from 'assets/images/small-logo.svg'
import { useSider } from './useSider'

export const Sider = memo(() => {
  const { handleExpandMenu, handleCloseSider, isShowSider, isShowMenu } =
    useSider()
  return (
    <div>
      <div
        className={`pl-6 pr-4 py-8 border-solid border-neutral-8 hidden sm:block border-r-[0.5px] items-stretch relative top-0 left-0 transition-all ${
          isShowSider ? '2xl:w-[323px] w-[270px]' : 'w-[128px]'
        }`}
      >
        <Link to="/">
          <img
            src={isShowSider ? logoSvg : smallLogoSvg}
            alt="logo"
            className="mx-auto"
          />
        </Link>
        <ul className="mt-28 flex flex-col gap-y-14">
          <li className="pl-8 bg-linear-gradient py-[18px] rounded-lg relative before:menu-before">
            <Link
              to="/"
              className="text-primary-light-8 font-bold flex items-center gap-x-8"
            >
              <span className="icon-home-line text-2xl"></span>
              <span
                className={`uppercase tracking-[2px] transition-opacity ${
                  isShowSider ? '' : 'w-0 overflow-hidden'
                }`}
              >
                Home
              </span>
            </Link>
          </li>
          <li className="pl-8 py-[18px] relative group hover:before:menu-before hover:bg-linear-gradient rounded-lg transition ease-in-out duration-200">
            <Link
              to="/"
              className="text-neutral-7 group-hover:text-primary-light-8 font-bold flex items-center gap-x-8"
            >
              <span className="icon-presentation-chart-02 text-2xl"></span>
              <span
                className={`uppercase tracking-[2px] transition-opacity ${
                  isShowSider ? '' : 'w-0 overflow-hidden'
                }`}
              >
                Lauch
              </span>
            </Link>
          </li>
          <li className="pl-8 py-[18px] relative group hover:before:menu-before hover:bg-linear-gradient rounded-lg transition ease-in-out duration-200">
            <Link
              to="/"
              className="text-neutral-7 group-hover:text-primary-light-8 font-bold flex items-center gap-x-8"
            >
              <span className="icon-rocket-02 text-2xl"></span>
              <span
                className={`uppercase tracking-[2px] transition-opacity ${
                  isShowSider ? '' : 'w-0 overflow-hidden'
                }`}
              >
                Incubator
              </span>
            </Link>
          </li>
          <li className="pl-8 py-[18px] relative group hover:before:menu-before hover:bg-linear-gradient rounded-lg transition ease-in-out duration-200">
            <Link
              to="/"
              className="text-neutral-7 group-hover:text-primary-light-8 font-bold flex items-center gap-x-8"
            >
              <span className="icon-server-06 text-2xl"></span>
              <span
                className={`uppercase tracking-[2px] transition-opacity ${
                  isShowSider ? '' : 'w-0 overflow-hidden'
                }`}
              >
                Advertising
              </span>
            </Link>
          </li>
          <li className="pl-8 py-[18px] relative group hover:before:menu-before hover:bg-linear-gradient rounded-lg transition ease-in-out duration-200">
            <Link
              to="/"
              className="text-neutral-7 group-hover:text-primary-light-8 font-bold flex items-center gap-x-8"
            >
              <span className="icon-shield-dollar text-2xl"></span>
              <span
                className={`uppercase tracking-[2px] transition-opacity ${
                  isShowSider ? '' : 'w-0 overflow-hidden'
                }`}
              >
                Insurance
              </span>
            </Link>
          </li>
          <li className="pl-8 py-[18px] relative group hover:before:menu-before hover:bg-linear-gradient rounded-lg transition ease-in-out duration-200">
            <Link
              to="/"
              className="text-neutral-7 group-hover:text-primary-light-8 font-bold flex items-center gap-x-8"
            >
              <span className="icon-coins-stacked-02 text-2xl"></span>
              <span
                className={`uppercase tracking-[2px] transition-opacity ${
                  isShowSider ? '' : 'w-0 overflow-hidden'
                }`}
              >
                Stake
              </span>
            </Link>
          </li>
          <li className="pl-8 py-[18px] relative group hover:before:menu-before hover:bg-linear-gradient rounded-lg transition ease-in-out duration-200">
            <Link
              to="/"
              className="text-neutral-7 group-hover:text-primary-light-8 font-bold flex items-center gap-x-8"
            >
              <span className="icon-user-01 text-2xl"></span>
              <span
                className={`uppercase tracking-[2px] transition-all ${
                  isShowSider ? '' : 'w-0 overflow-hidden'
                }`}
              >
                User
              </span>
            </Link>
          </li>
        </ul>
        <ul className="mt-28 flex flex-col gap-y-14">
          <li className="pl-8 py-[18px] relative group hover:before:menu-before hover:bg-linear-gradient rounded-lg transition ease-in-out duration-200">
            <button
              className="text-primary-light-8 group-hover:text-primary-light-8 font-bold flex items-center gap-x-8"
              onClick={handleCloseSider}
            >
              <span className="icon-layout-left text-2xl"></span>
              <span
                className={`uppercase tracking-[2px] transition-all ${
                  isShowSider ? '' : 'w-0 overflow-hidden'
                }`}
              >
                Close
              </span>
            </button>
          </li>
        </ul>
      </div>
      <div className="fixed bottom-0 left-0 w-full h-auto bg-accent-dark-2 sm:hidden">
        <ul className="grid grid-cols-4 gap-x-4">
          <li className="py-2">
            <Link
              to="/launch"
              className="flex flex-col gap-y-2 text-[8px] uppercase text-neutral-7 justify-center items-center"
            >
              <span className="icon-presentation-chart-02 text-2xl"></span>
              Launchpad
            </Link>
          </li>
          <li className="py-2">
            <Link
              to="/incubator"
              className="flex flex-col gap-y-2 text-[8px] uppercase text-neutral-7 justify-center items-center"
            >
              <span className="icon-rocket-02 text-2xl"></span>
              Incubator
            </Link>
          </li>
          <li className="py-2">
            <Link
              to="/advertising"
              className="flex flex-col gap-y-2 text-[8px] uppercase text-neutral-7 justify-center items-center"
            >
              <span className="icon-server-06 text-2xl"></span>
              Advertising
            </Link>
          </li>
          <li className="py-2">
            <button
              onClick={handleExpandMenu}
              className="flex flex-col gap-y-2 text-[8px] uppercase text-neutral-7 justify-center items-center w-full"
            >
              <span className="icon-menu-01 text-2xl"></span>
              Menu
            </button>
          </li>
        </ul>
        <div
          className={`absolute top-0 right-0 -translate-y-full bg-accent-dark-2 transition-all duration-500 ease-linear ${
            !isShowMenu ? 'max-h-0 overflow-hidden' : 'max-h-80'
          }`}
        >
          <ul className="text-neutral-7 p-2">
            <li className="flex  gap-x-2 p-2 text-[8px] uppercase text-neutral-7  items-center">
              <span className="icon-shield-dollar text-2xl"></span>
              Insurance
            </li>
            <li className="flex  gap-x-2 p-2 text-[8px] uppercase text-neutral-7  items-center">
              <span className="icon-coins-stacked-02 text-2xl"></span>
              Stake
            </li>
            <li className="flex  gap-x-2 p-2 text-[8px] uppercase text-neutral-7  items-center">
              <span className="icon-user-01 text-2xl"></span>
              User
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
})
