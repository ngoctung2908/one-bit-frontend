import { NewsItem } from './newsItem/newsItem'
import { useNewsList } from './useNewsList'
export const NewsList = () => {
  const { news } = useNewsList()
  return (
    <div className="snap-x snap-mandatory overflow-x-auto flex gap-x-4 max-w-[866px] ">
      {news.map((item) => {
        return (
          <NewsItem
            thumnail={item.thumnail}
            title={item.title}
            shortDescription={item.shortDescription}
          />
        )
      })}
    </div>
  )
}
