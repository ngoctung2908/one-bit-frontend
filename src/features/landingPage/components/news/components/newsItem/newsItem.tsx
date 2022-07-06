import { memo } from 'react'
import { Link } from 'react-router-dom'
import Button from 'components/button/button'

type NewProps = {
  thumnail: string
  title: string
  shortDescription: string
}
export const NewsItem = memo((props: NewProps) => {
  return (
    <div className="snap-start min-w-[278px] max-w-[278px]">
      <img src={props.thumnail} alt="" />
      <Link
        to=""
        className="text-primary-light-8 font-semibold text-xl mt-8 tracking-[0.7px] inline-block line-clamp-2"
      >
        {props.title}
      </Link>
      <p className="text-primary-light-8 font-medium text-lg mt-4 tracking-[1px] line-clamp-2">
        {props.shortDescription}
      </p>
    </div>
  )
})
