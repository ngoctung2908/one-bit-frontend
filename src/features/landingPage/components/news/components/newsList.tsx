import { NewsItem } from './newsItem/newsItem'
import { useNewsList } from './useNewsList'
export const NewsList = () => {
  const { news } = useNewsList()
  return (
    <>
      {news.map((item) => {
        return (
          <NewsItem
            key={item.thumnail}
            thumnail={item.thumnail}
            title={item.title}
            shortDescription={item.shortDescription}
          />
        )
      })}
    </>
  )
}
