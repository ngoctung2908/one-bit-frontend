import { memo } from 'react'
import Button from 'components/button/button'

export const Nav = memo(() => {
  return (
    <div className="flex justify-between items-center">
      <h6 className="font-semibold text-[32px] tracking-[-1.13533px] text-primary-light-8">
        Home
      </h6>
      <Button>Connect wallet</Button>
    </div>
  )
})
