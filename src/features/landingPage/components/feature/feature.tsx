import React, { memo } from 'react'

import visionSvg from 'assets/images/vision.svg'
import missionSvg from 'assets/images/mission.svg'
import valueSvg from 'assets/images/value.svg'

export const Feature = memo(() => {
  return (
    <div className="mt-48">
      <h6 className="text-center text-sm md:text-base text-accent-blue font-bold uppercase">
        features
      </h6>
      <p className="text-center text-primary-light-8 leading-10 text-[32px] md:text-4xl font-bold mt-4">
        Why choose Onebit
      </p>
      <div className="mt-16 flex flex-col gap-y-4 md:gap-y-0 md:flex-row md:gap-x-4">
        <div className="rounded-[5px] border border-solid border-accent-blue p-8">
          <img src={visionSvg} className="mx-auto max-h-[151px]" alt="" />
          <p className="text-primary-light-8 text-[28px] font-semibold leading-9 tracking-[0.5px] mt-4 text-center">
            Vision
          </p>
          <p className="text-accent-light mt-4 tracking-[0.5px] text-justify">
            Chúng tôi là những người mở đường cho sự thay đổi của hệ thống công
            cụ hữu ích cho cộng đồng. Với sự kết hợp giữa những nhân tài và cuộc
            cách mạng công nghệ, chúng tôi khao khát có thể qua mặt các quốc gia
            phát triển nhất.{' '}
          </p>
        </div>
        <div className="rounded-[5px] border border-solid border-accent-blue p-8">
          <img src={missionSvg} className="mx-auto  max-h-[151px]" alt="" />
          <p className="text-primary-light-8 text-[28px] font-semibold leading-9 tracking-[0.5px] mt-4 text-center">
            Mission
          </p>
          <p className="text-accent-light mt-4 tracking-[0.5px] text-justify">
            Chúng tôi là những người mở đường cho sự thay đổi của hệ thống công
            cụ hữu ích cho cộng đồng. Với sự kết hợp giữa những nhân tài và cuộc
            cách mạng công nghệ, chúng tôi khao khát có thể qua mặt các quốc gia
            phát triển nhất.{' '}
          </p>
        </div>
        <div className="rounded-[5px] border border-solid border-accent-blue p-8">
          <img src={valueSvg} className="mx-auto  max-h-[151px]" alt="" />
          <p className="text-primary-light-8 text-[28px] font-semibold leading-9 tracking-[0.5px] mt-4 text-center">
            Value
          </p>
          <p className="text-accent-light mt-4 tracking-[0.5px] text-justify">
            Chúng tôi là những người mở đường cho sự thay đổi của hệ thống công
            cụ hữu ích cho cộng đồng. Với sự kết hợp giữa những nhân tài và cuộc
            cách mạng công nghệ, chúng tôi khao khát có thể qua mặt các quốc gia
            phát triển nhất.{' '}
          </p>
        </div>
      </div>
    </div>
  )
})
