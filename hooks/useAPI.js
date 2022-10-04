import axios from 'axios'
import { useEffect, useState } from 'react'

const useAPI =  () => {
    const [data, setData] = useState([]) //initial state empty array

    // to call data when component is mount
    useEffect(()=> {
        getData()
    }, [])

    const getData = async () => {
        const response = await axios.get(`https://dev.pricepally.com/api/GetRecommendedProducts`);
        setData(response.data)
    }

    console.log('data is', data)


return data
}

export default useAPI;