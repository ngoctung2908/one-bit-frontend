import { memo } from 'react'
// import { formatNumberWithCommas } from 'utils'

type TokenomicsItemProps = {
  percent: number
  name: string
  description: string
  token: number
}

export const TokenomicsItem = memo((props: TokenomicsItemProps) => {
  return (
    <div className="mb-4 border-l-8 border-solid border-primary-light-2 p-4  bg-accent-dark-1 flex  items-center justify-between rounded tracking-[0.5px]">
      <div className="text-primary-light-8 flex-1 mr-14">
        <h5 className="text-xs font-bold">
          <span className="text-accent-blue">{props.percent}%</span>{' '}
          {props.name}
        </h5>
        <p className="mt-2 font-normal text-xs">{props.description}</p>
      </div>
      <div className="grid box-border grid-flow-row gap-2 text-xs text-primary-light-8 w-[80px]">
        <h5 className="">Tokens</h5>
        <p className=" mt-2">
          {props.token.toLocaleString('it-IT', {
            minimumFractionDigits: 0,
          })}
          {/* {formatNumberWithCommas(props.token)} */}
        </p>
      </div>
    </div>
  )
})
