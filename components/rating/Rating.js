import React, { useEffect, useState } from 'react'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'
import { GetProducts as getProducts } from '../../hooks/useAPI'
function Rating(props){
    const [data, setData] = useState([]) //initial state empty array
    const [recommendedProducts, setRecommendedProducts] = useState([]) //initial state empty array
    useEffect(() => {
      async function fetchData() {
        const data = await getProducts();
        setData(data);
        console.log('dcata', data)
  
        setRecommendedProducts(data.recommendedproducts);
      }
      fetchData();
    }, []);

    console.log('recommendedProducts', recommendedProducts)
    
    const rate = recommendedProducts.map((product) =>(
         product.product_rating
    ) )

  const [rating, setRating] = useState(rate)
  return (
    <div style={styles.starStyle}>
      {rating >= 1 ? (
        <IoIosStar  onClick={() => setRating(1)}/>
      ) : (
        <IoIosStarOutline  onClick={() => setRating(1)} />
      )}
       {rating >= 2 ? (
        <IoIosStar  onClick={() => setRating(2)}/>
      ) : (
        <IoIosStarOutline  onClick={() => setRating(2)} />
      )}
      {rating >= 3 ? (
        <IoIosStar  onClick={() => setRating(3)}/>
      ) : (
        <IoIosStarOutline  onClick={() => setRating(3)}/>
      )}
       {rating >= 4 ? (
        <IoIosStar  onClick={() => setRating(4)} />
      ) : (
        <IoIosStarOutline  onClick={() => setRating(4)} />
      )}
       {rating >= 5 ? (
        <IoIosStar onClick={() => setRating(5)} />
      ) : (
        <IoIosStarOutline  onClick={() => setRating(5)}/>
      )}
    </div>
  )
}

export default Rating

const styles={
  starStyle:{
    color:'orange'
  }
}