import  { useState, useEffect } from "react"

type Tokenomic = {
    percent: number
    name: string
    description: string
    token: number
}

export const useTokenomicsList = () => {
    const [tokenomics, setTokenomics] = useState<Tokenomic[]>([])

    useEffect(() => {
        const url = "https://raw.githubusercontent.com/ngoctung2908/onebit-data/main/data/tokenomics.json"
        const fetchData = async () => {
            try {
              const response = await fetch(url);
              const json = await response.json();
              setTokenomics(json.tokenomics)
            } catch (error) {
              console.log("error", error);
            }
          };
      
          fetchData();
      }, []);



    
    return { tokenomics }
    
}