import { memo } from 'react'
import { CircleAnimate } from './components/circleAnimate/circleAnimate'
import { HeadIntro } from './components/headIntro/headIntro'

export const HeadPanel = memo(() => {
  return (
    <div className="grid grid-cols-2 h-[calc(100vh-80px)]">
      <HeadIntro />
      <CircleAnimate />
    </div>
  )
})
