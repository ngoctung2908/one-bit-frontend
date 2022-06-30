import { useTokenomicsList } from './useTokenomicsList'
import { TokenomicsItem } from './components/tokenomicsItem/tokenomicsItem'

export const TokennomicsList = () => {
  const { tokenomics } = useTokenomicsList()

  return (
    <div className="max-h-[800px] overflow-y-auto">
      <>
        {tokenomics.map((item) => {
          return (
            <TokenomicsItem
              key={item.name}
              percent={item.percent}
              name={item.name}
              description={item.description}
              token={item.token}
            />
          )
        })}
      </>
    </div>
  )
}
