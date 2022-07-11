import { memo } from 'react'
import { CircleAnimate } from './components/circleAnimate/circleAnimate'
import { HeadIntro } from './components/headIntro/headIntro'

export const HeadPanel = memo(() => {
  return (
    <div className="grid md:grid-cols-2 mt-14 md:mt-0 md:h-[calc(100vh-80px)]">
      <HeadIntro />
      <CircleAnimate />
    </div>
  )
})
