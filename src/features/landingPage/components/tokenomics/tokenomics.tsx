import { TokenomicsChart } from './components/tokenomicsChart/tokenomicsChart'
import { TokennomicsList } from './components/tokenomicsList/tokenomicsList'

export const Tokenomics = () => {
  return (
    <div className="mt-48">
      <div className=" font-bold text-sm md:text-base leading-6 text-center text-accent-blue">
        TOKENOMICS
      </div>
      <div className="mt-4 text-center font-bold text-[32px] md:text-4xl leading-10 text-accent-light capitalize ">
        The Real Value
      </div>
      <div className="mt-9 md:mt-14 font-semibold text-lg md:text-[28px] leading-6 md:leading-9 tracking-[0.5px] text-accent-blue">
        TOKEN METRICS Onebit ventures
      </div>
      <div className="mt-2 font-semibold text-lg md:text-[28px] leading-6 md:leading-9 tracking-[0.5px] text-accent-light">
        28.000.000
      </div>
      <TokenomicsChart />
      <TokennomicsList />
    </div>
  )
}
