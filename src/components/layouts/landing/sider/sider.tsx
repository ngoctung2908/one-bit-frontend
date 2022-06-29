import { memo } from 'react'
import { Link } from 'react-router-dom'
import logoSvg from 'assets/images/logo.svg'

export const Sider = memo(() => {
  return (
    <div className="w-[323px] pl-6 pr-4 py-8 border-solid border-neutral-8 border-r-[0.5px] items-stretch relative">
      <Link to="/">
        <img src={logoSvg} alt="logo" className="mx-auto" />
      </Link>
      <ul className="mt-28 flex flex-col gap-y-14">
        <li className="pl-8 bg-linear-gradient py-[18px] rounded-lg relative before:menu-before">
          <Link
            to="/"
            className="text-primary-light-8 font-bold flex items-center gap-x-8"
          >
            <span className="icon-home-line text-2xl"></span>
            <span className="uppercase tracking-[2px]">Home</span>
          </Link>
        </li>
        <li className="pl-8 py-[18px] relative group hover:before:menu-before hover:bg-linear-gradient rounded-lg transition ease-in-out duration-200">
          <Link
            to="/"
            className="text-neutral-7 group-hover:text-primary-light-8 font-bold flex items-center gap-x-8"
          >
            <span className="icon-presentation-chart-02 text-2xl"></span>
            <span className="uppercase tracking-[2px]">Lauch</span>
          </Link>
        </li>
        <li className="pl-8 py-[18px] relative group hover:before:menu-before hover:bg-linear-gradient rounded-lg transition ease-in-out duration-200">
          <Link
            to="/"
            className="text-neutral-7 group-hover:text-primary-light-8 font-bold flex items-center gap-x-8"
          >
            <span className="icon-rocket-02 text-2xl"></span>
            <span className="uppercase tracking-[2px]">Incubator</span>
          </Link>
        </li>
        <li className="pl-8 py-[18px] relative group hover:before:menu-before hover:bg-linear-gradient rounded-lg transition ease-in-out duration-200">
          <Link
            to="/"
            className="text-neutral-7 group-hover:text-primary-light-8 font-bold flex items-center gap-x-8"
          >
            <span className="icon-server-06 text-2xl"></span>
            <span className="uppercase tracking-[2px]">Advertising</span>
          </Link>
        </li>
        <li className="pl-8 py-[18px] relative group hover:before:menu-before hover:bg-linear-gradient rounded-lg transition ease-in-out duration-200">
          <Link
            to="/"
            className="text-neutral-7 group-hover:text-primary-light-8 font-bold flex items-center gap-x-8"
          >
            <span className="icon-shield-dollar text-2xl"></span>
            <span className="uppercase tracking-[2px]">Insurance</span>
          </Link>
        </li>
        <li className="pl-8 py-[18px] relative group hover:before:menu-before hover:bg-linear-gradient rounded-lg transition ease-in-out duration-200">
          <Link
            to="/"
            className="text-neutral-7 group-hover:text-primary-light-8 font-bold flex items-center gap-x-8"
          >
            <span className="icon-coins-stacked-02 text-2xl"></span>
            <span className="uppercase tracking-[2px]">Stake</span>
          </Link>
        </li>
        <li className="pl-8 py-[18px] relative group hover:before:menu-before hover:bg-linear-gradient rounded-lg transition ease-in-out duration-200">
          <Link
            to="/"
            className="text-neutral-7 group-hover:text-primary-light-8 font-bold flex items-center gap-x-8"
          >
            <span className="icon-user-01 text-2xl"></span>
            <span className="uppercase tracking-[2px]">User</span>
          </Link>
        </li>
      </ul>
    </div>
  )
})
