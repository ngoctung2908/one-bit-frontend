import { memo } from 'react'
import { CircleAnimate } from './components/circleAnimate/circleAnimate'
import { HeadIntro } from './components/headIntro/headIntro'

export const HeadPanel = memo(() => {
  return (
    <div className="h-screen flex flex-col">
      <div className="grid grid-cols-2 flex-1">
        <HeadIntro />
        <CircleAnimate />
      </div>
      <div className="h-[400px]"></div>
    </div>
  )
})
