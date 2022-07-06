import { memo, useEffect } from 'react'
import { useCircleAnimate } from './useCircleAnimate'

export const CircleAnimate = memo(() => {
  const { init, animate, circelRef } = useCircleAnimate()

  // window.onload = () => {
  //   init()
  //   animate()
  // }

  useEffect(() => {
    init()
    animate()
  }, [])

  return (
    <div id="circle" className="w-full h-full" ref={circelRef}>
      <div id="canvas"></div>
    </div>
  )
})
