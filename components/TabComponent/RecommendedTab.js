import React, { useEffect, useState } from 'react'
import { GetProducts as getProducts } from '../../hooks/useAPI'
import ProductCard from '../products/ProductCard'
const RecommendedTab = () => {
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
  return (
    <div>
        {/* recommended */}
        <div className="tab-pane show recommended-bg" id="recommended" role="tabpanel" aria-labelledby="recommended-tab">
            <h6 className="inner-head mb-3 mt-3">12 Available Deals</h6>
            <div className="">
            {recommendedProducts.map((product) =>(
                //  <div className="row" key={product.id}>
                <div>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            ))}
            </div>
        </div>
        
    </div>
  )
}

export default RecommendedTab