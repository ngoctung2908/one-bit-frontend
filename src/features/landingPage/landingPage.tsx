import Button from 'components/button/button'
import { memo, FC } from 'react'
import { HeadPanel } from './components/headPanel/headPanel'
import { Tokenomics } from './components/tokenomics/tokenomics'
import { News } from './components/news/news'

export const LandingPage: FC = memo(() => {
  return (
    <div className="text-primary-light-8 max-w-[1322px] mx-auto">
      <HeadPanel />
      <News />
      <Tokenomics />
    </div>
    // <div className="min-h-0 h-full flex flex-col p-2.5">
    //   <span className="icon-activity-heart text-primary-50 text-2xl"></span>
    //   <div>
    //     <Button
    //       color="primary"
    //       outline={true}
    //       className="text-primary-0"
    //       size="lg"
    //     >
    //       <span className="icon-loading-01 text-primary-50 text-2xl border-neutral-8 animate-spin"></span>{' '}
    //       Test button
    //     </Button>
    //   </div>
    // </div>
  )
})
