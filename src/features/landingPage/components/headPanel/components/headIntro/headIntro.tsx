import { memo } from 'react'

export const HeadIntro = memo(() => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-primary-light-8 text-[34px] leading-[40px] sm:text-[56px] sm:leading-[72px] font-bold">
        Invest to create real values
      </h1>
      <p className="text-accent-light mt-8">
        Onebit Ventures hoạt động với tư cách quỹ chuyên đầu tư, tư vấn, ươm tạo
        và hỗ trợ sự phát triển của các công ty và dự án mới thành lập.
      </p>
      <ul className="mt-8 flex flex-col gap-y-4">
        <li className="text-accent-light leading-6 tracking-[0.5px] flex items-center gap-x-4">
          <span className="inline-block w-2 h-2 rounded-full bg-accent-blue"></span>{' '}
          ONEBIT Startup Launchpad
        </li>
        <li className="text-accent-light leading-6 tracking-[0.5px] flex items-center gap-x-4">
          <span className="inline-block w-2 h-2 rounded-full bg-accent-blue"></span>{' '}
          Onebit Crypto Insurance
        </li>
        <li className="text-accent-light leading-6 tracking-[0.5px] flex items-center gap-x-4">
          <span className="inline-block w-2 h-2 rounded-full bg-accent-blue"></span>{' '}
          ONEBIT Incubator
        </li>
        <li className="text-accent-light leading-6 tracking-[0.5px] flex items-center gap-x-4">
          <span className="inline-block w-2 h-2 rounded-full bg-accent-blue"></span>
          Onebit Crypto advertising
        </li>
      </ul>
    </div>
  )
})
