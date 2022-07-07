import { memo } from 'react'
import { CircleAnimate } from './components/circleAnimate/circleAnimate'
import { HeadIntro } from './components/headIntro/headIntro'

export const HeadPanel = memo(() => {
  return (
    <div className="grid sm:grid-cols-2 mt-14 sm:mt-0 sm:h-[calc(100vh-80px)]">
      <HeadIntro />
      <CircleAnimate />
    </div>
  )
})
