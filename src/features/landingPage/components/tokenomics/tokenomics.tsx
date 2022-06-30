import { TokenomicsChart } from './components/tokenomicsChart/tokenomicsChart'
import { TokennomicsList } from './components/tokenomicsList/tokenomicsList'

export const Tokenomics = () => {
  return (
    <div>
      <div className=" font-bold text-base text-center text-accent-blue">
        TOKENOMICS
      </div>
      <div className="mt-4 text-center font-bold text-4xl leading-[52px] text-accent-light  capitalize ">
        The Real Value
      </div>
      <div className="mt-14 font-semibold text-[28px] leading-9 tracking-[0.5px] text-accent-blue">
        TOKEN METRICS Onebit ventures
      </div>
      <div className="mt-2 font-semibold text-[28px] leading-9 tracking-[0.5px] text-accent-light">
        28.000.000
      </div>
      <TokenomicsChart />
      <TokennomicsList />
    </div>
  )
}
