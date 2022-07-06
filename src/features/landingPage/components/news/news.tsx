import React from 'react'
import { Link } from 'react-router-dom'
import blogThumbnailPng from 'assets/images/blogthumbnail.png'
import Button from 'components/button/button'
import { NewsList } from './components/newsList'

export const News = () => {
  return (
    <div>
      <div className="  flex ">
        <NewsList />

        <div className="ml-auto">
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
