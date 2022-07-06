import { memo } from 'react'
import { useCircleAnimate } from './useCircleAnimate'

export const CircleAnimate = memo(() => {
  const { init, animate, circelRef } = useCircleAnimate()

  window.onload = () => {
    init()
    animate()
  }

  return (
    <div id="circle" className="w-full h-[400px] sm:h-full" ref={circelRef}>
      <div id="canvas"></div>
    </div>
  )
})
