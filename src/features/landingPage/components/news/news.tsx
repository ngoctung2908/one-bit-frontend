import React from 'react'
import { Link } from 'react-router-dom'
import blogThumbnailPng from 'assets/images/blogthumbnail.png'
import Button from 'components/button/button'

export const News = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-x-4">
        <div className="">
          <img src={blogThumbnailPng} alt="" />
          <Link
            to=""
            className="text-primary-light-8 font-semibold text-xl mt-8 tracking-[0.7px] inline-block line-clamp-2"
          >
            How to compress image size without losing quality
          </Link>
          <p className="text-primary-light-8 font-medium text-lg mt-4 tracking-[1px] line-clamp-2">
            Small images can speed up website load times
          </p>
        </div>
        <div className="">
          <img src={blogThumbnailPng} alt="" />
          <Link
            to=""
            className="text-primary-light-8 font-semibold text-xl mt-8 tracking-[0.7px] inline-block line-clamp-2"
          >
            Why is Google still not recognizing my website?
          </Link>
          <p className="text-primary-light-8 font-medium text-lg mt-4 tracking-[1px] line-clamp-2">
            Improve the SEO techniques that you have used so far
          </p>
        </div>
        <div className="">
          <img src={blogThumbnailPng} alt="" />
          <Link
            to=""
            className="text-primary-light-8 font-semibold text-xl mt-8 tracking-[0.7px] inline-block line-clamp-2"
          >
            How to compress image size without losing quality
          </Link>
          <p className="text-primary-light-8 font-medium text-lg mt-4 tracking-[1px] line-clamp-2">
            Small images can speed up website load times
          </p>
        </div>
        <div>
          <div className="max-w-[278px] h-[178.4px]">
            <h6 className="uppercase text-accent-blue font-bold">news</h6>
            <p className="text-primary-light-8 font-bold text-4xl mt-4">
              Hot News Update Today
            </p>
          </div>
          <div className="mt-8 flex justify-center gap-x-16">
            <Button size="sm">
              <span className="icon-arrow-left"></span>
            </Button>
            <Button size="sm">
              <span className="icon-arrow-right"></span>
            </Button>
          </div>
          <Button size="md" className="mx-auto mt-16">
            Load more
          </Button>
        </div>
      </div>
    </div>
  )
}
