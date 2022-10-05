import axios from 'axios'
import { useEffect, useState } from 'react'

const useAPI =  () => {
    const [data, setData] = useState([]) //initial state empty array

    // to call data when component is mount
    useEffect(()=> {
        getData()
    }, [])

    const getData = async () => {
        const response = await axios.post(`https://dev.pricepally.com/api/GetRecommendedProducts`, {
            body: {
                
                    "user_id":"nothing",
                    "offset":"0"
                
            }
        })
        .then((response) =>{
            console.log(response)
            
        setData(response.data)
        }, (error) =>{
            console.log(error)
        })
    //     setData(response.data)
    // }

    // console.log('data is', data)


        }
    return data
}
export default useAPI