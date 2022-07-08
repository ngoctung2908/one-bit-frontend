import { useState } from 'react'

export const useSider = () => {
  const [isShowSider, setIsShowSider] = useState(true)
  const [isShowMenu, setIsShowMenu] = useState(false)

  const handleCloseSider = () => {
    setIsShowSider((isShowSider) => {
      return !isShowSider
    })
  }
  
  const handleExpandMenu = () => {
    setIsShowMenu((isShowMenu)=>{
      return !isShowMenu
    })
     

  }



  return { handleCloseSider, isShowSider,handleExpandMenu,isShowMenu }
}

