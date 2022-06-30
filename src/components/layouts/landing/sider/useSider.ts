import { useState } from 'react'

export const useSider = () => {
  const [isShowSider, setIsShowSider] = useState(true)

  const handleCloseSider = () => {
    setIsShowSider((isShowSider) => {
      return !isShowSider
    })
  }

  return { handleCloseSider, isShowSider }
}
