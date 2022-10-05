import React, { useEffect, useState } from 'react'
import { GetProducts as getProducts } from '../../hooks/useAPI'
import ProductCard from '../products/ProductCard'
import MobileLoader from '../loader/MobileLoader'
import LoadingSpinner from '../loader/Loader'
const RecommendedTab = () => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]) //initial state empty array
    const [recommendedProducts, setRecommendedProducts] = useState([]) //initial state empty array
    useEffect(() => {
      async function fetchData() {
        setLoading(true)

        const data = await getProducts();
        setData(data);
        setLoading(false)
        console.log('dcata', data)
  
        setRecommendedProducts(data.recommendedproducts);
      }
      fetchData();
    }, []);

    console.log('recommendedProducts', recommendedProducts)
    const products = recommendedProducts.map((product) =>(
        <ProductCard key={product}/>
    ) )
  
    console.log('recommendedProducts', recommendedProducts)
  return (

    <div>
    {loading ? (<LoadingSpinner/>) : 
    // recommeded tab
    (
        <div className="tab-pane show recommended-bg" id="recommended" role="tabpanel" aria-labelledby="recommended-tab">
            <h6 className="inner-head mb-3 mt-3">12 Available Deals</h6>
            <div className="">
                {/* <div className="row" > */}
                <div>
                    {products}
                </div>
                {/* </div> */}
            </div>
        </div>
    )
        

    }

       
        
        
    </div>
  )
}

export default RecommendedTab