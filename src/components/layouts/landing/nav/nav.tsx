import { memo } from 'react'
import Button from 'components/button/button'
import logoSvg from 'assets/images/logo.svg'
import { Link } from 'react-router-dom'

export const Nav = memo(() => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <Link to="/" className="block sm:hidden">
          <img src={logoSvg} alt="logo" className="mx-auto max-w-[108px]" />
        </Link>
        <h6 className="hidden sm:block font-semibold text-[32px] tracking-[-1.13533px] text-primary-light-8">
          Home
        </h6>
        <Button>Connect wallet</Button>
      </div>
      <h6 className="sm:hidden block font-semibold text-2xl mt-8 tracking-[-1.13533px] text-primary-light-8">
        Home
      </h6>
    </div>
  )
})
