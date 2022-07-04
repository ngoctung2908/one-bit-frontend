import React, { memo } from 'react'
import logoFacebook from 'assets/images/logo-facebook.svg'
import logoForbes from 'assets/images/logo-forbes.svg'
import logoGithub from 'assets/images/logo-github.svg'
import logoGoogle from 'assets/images/logo-google.svg'
import logoMicrosoft from 'assets/images/logo-microsoft.svg'

export const Partner = memo(() => {
  return (
    <div className="mt-48 flex flex-col justify-center items-center">
      <div className="flex py-11  gap-x-14  items-center justify-center border-y border-accent-dark-2 border-solid   ">
        <img src={logoGithub} alt="" />
        <img src={logoForbes} alt="" />
        <img src={logoGoogle} alt="" />
        <img src={logoMicrosoft} alt="" />
        <img src={logoFacebook} alt="" />
      </div>
    </div>
  )
})
