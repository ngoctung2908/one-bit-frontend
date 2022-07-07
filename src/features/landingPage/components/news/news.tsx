import { useRef } from 'react'
import { useNews } from './useNews'
import Button from 'components/button/button'
import { NewsList } from './components/newsList'

export const News = () => {
  const { sideScroll } = useNews()
  const scrollRef = useRef<any>(null)
  return (
    <div>
      <div className="flex">
        <div
          ref={scrollRef}
          className="overflow-hidden flex gap-x-4 max-w-[866px] "
        >
          <NewsList />
        </div>

        <div className="ml-auto">
          <div className="max-w-[278px] h-[178.4px]">
            <h6 className="uppercase text-accent-blue font-bold">news</h6>
            <p className="text-primary-light-8 font-bold text-4xl mt-4">
              Hot News Update Today
            </p>
          </div>
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
  )
}
