import React, { memo } from 'react'
import logoFooter from 'assets/images/logo.svg'
import logotwiter from 'assets/images/ic-twitter.svg'
import logofacebook from 'assets/images/ic-facebook.svg'
import logoinstagram from 'assets/images/ic-instagram.svg'
import logocamera from 'assets/images/ic-camera.svg'
import logotelegram from 'assets/images/ic-telegram.svg'
import logoyoutube from 'assets/images/ic-youtube.svg'

export const Footer = memo(() => {
  return (
    <div className="pt-8 mt-24 md:mt-48 max-w-[1322px] mx-auto">
      <div className="flex flex-col gap-y-8 md:gap-y-0 md:flex-row justify-between">
        <img src={logoFooter} alt="" />
        <h5 className="text-accent-light text-base md:hidden">
          134 7th street, Go Vap District, Ho Chi Minh City, Vietnam
        </h5>
        <div className="flex flex-col mr-16 ">
          <h6 className="text-accent-light text-xl  tracking-[0.7px]">
            Join Our Comunity
          </h6>
          <div className="flex mt-8 gap-x-10 text-accent-light">
            <img src={logotwiter} alt="" />
            <img src={logofacebook} alt="" />
            <img src={logoinstagram} alt="" />
            <img src={logocamera} alt="" />
            <img src={logotelegram} alt="" />
            <img src={logoyoutube} alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <h5 className="text-accent-light text-base hidden md:block">
          134 7th street, Go Vap District, Ho Chi Minh City, Vietnam
        </h5>
        <div className="text-neutral-6 text-center md:text-left">
          Copyright © 2022 Onebit Ventures. All Rights Reserved.
        </div>
      </div>
    </div>
  )
})
export default Footer
