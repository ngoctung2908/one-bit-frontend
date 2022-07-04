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
    <div className="flex border-l-8 border-solid border-primary-light-2 p-4  bg-accent-dark-1 rounded tracking-[0.5px]">
      <div className="text-primary-light-8 flex-1 gap-4">
        <h5 className="text-xs font-bold">
          <span className="text-accent-blue">{props.percent}%</span>{' '}
          {props.name}
        </h5>
        <p className="mt-2 font-normal text-xs">{props.description}</p>
      </div>
      <div className="flex flex-col box-border  gap-y-2 text-xs text-primary-light-8 w-[80px]">
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
