import { useRef } from 'react'
import { useNews } from './useNews'
import Button from 'components/button/button'
import { NewsList } from './components/newsList'

export const News = () => {
  const { sideScroll } = useNews()
  const scrollRef = useRef<any>(null)
  return (
    <div>
      <div className="flex flex-col gap-y-4 md:gap-y-0 md:flex-row md:gap-x-4">
        <div
          ref={scrollRef}
          className="overflow-hidden flex gap-x-4 max-w-[calc(100vw-32px)] md:max-w-[866px] order-2 md:order-none"
        >
          <NewsList />
        </div>

        <div className="md:hidden order-3">
          <div className="mt-8 flex justify-center gap-x-16">
            <Button
              size="sm"
              onClick={() => {
                sideScroll(scrollRef.current, 25, 100, -294)
              }}
            >
              <span className="icon-arrow-left"></span>
            </Button>
            <Button
              size="sm"
              onClick={() => {
                sideScroll(scrollRef.current, 25, 100, 294)
              }}
            >
              <span className="icon-arrow-right"></span>
            </Button>
          </div>
          <Button size="md" className="mx-auto mt-4 md:mt-16">
            Load more
          </Button>
        </div>

        <div className="md:ml-auto order-1 md:order-none">
          <div className="w-[278px] h-[178.4px]">
            <h6 className="uppercase text-accent-blue font-bold">news</h6>
            <p className="text-primary-light-8 font-bold text-4xl mt-4">
              Hot News Update Today
            </p>
          </div>
          <div className="hidden md:block">
            <div className="mt-8 flex justify-center gap-x-16">
              <Button
                size="sm"
                onClick={() => {
                  sideScroll(scrollRef.current, 25, 100, -294)
                }}
              >
                <span className="icon-arrow-left"></span>
              </Button>
              <Button
                size="sm"
                onClick={() => {
                  sideScroll(scrollRef.current, 25, 100, 294)
                }}
              >
                <span className="icon-arrow-right"></span>
              </Button>
            </div>
            <Button size="md" className="mx-auto mt-16">
              Load more
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
