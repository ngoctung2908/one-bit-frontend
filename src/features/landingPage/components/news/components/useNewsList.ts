
import  { useState, useEffect } from "react"
type News= {

     thumnail:string
     title: string
     shortDescription: string
}
export const useNewsList = () => {
    const [news, setNews] = useState<News[]>([])

    useEffect(() => {
        const url = "https://raw.githubusercontent.com/ngoctung2908/onebit-data/main/data/news.json"
        const fetchData = async () => {
            try {
              
              const response = await fetch(url);
              const json = await response.json();
              setNews(json.news)
             console.log(json)
            } catch (error) {
              console.log("error", error);
            }
          };
      
          fetchData();
      }, []);



    
    return { news }
    
}

