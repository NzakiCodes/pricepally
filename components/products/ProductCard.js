import React, { useEffect, useState } from 'react'
import { GetProducts as getProducts } from '../../hooks/useAPI';
import Rating from '../rating/Rating';

const ProductCard = (props) => {
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

    const rate = recommendedProducts.map((product) =>(
      product.product_rating
   ) )
  
    
  

  
  return (
    <div>
        
        {recommendedProducts.map((product) => (
        <div className="row">
        <div className="col-md-6 col-lg-3" key={product.id}>
            <div className="pally-inner ">
                <div className="products-img-wrapper  mb-3 pointer">
                    <a href="#">
                        <div className="heart-icon">
                            <span className="material-icons">
                                favorite_border
                            </span>
                        </div>
                        <img className="mb-3 product-img" src={product.product_images} alt="Product-img1" />
                    </a>
                </div>

                <div className="pally-content">
                    <a href="#" className="inner-head">
                        <h5 className="mb-2">{product.product_name} (5kg) </h5>
                    </a>
                    <a href="#" className="green-bg"><span className="material-icons-outlined">
                            arrow_right_alt
                        </span>{product.product_discount}% | <span className="clr-red">Off Season</span></a>
                    <h5 className="mb-2 mt-2 font-weight-bold simhead">₦{product.product_price - (product.product_discount/100 * product.product_price)}
                        {/* <s>({product.product_discount} * (₦78,000))</s> */}
                        <s>{product.product_price}</s>

                    </h5>
                    <section className='rating-widget'>
                        {/* <div className="no-ratings"><p>No ratings yet</p></div> */}
                        <div className="rating-main pro-detail-star" data-vote="0">
                        <div className="star">
                        <span><Rating 
                            rating={rate} numOfReviews={product.total_reviews}
                            /></span><span>{product.total_reviews}</span>
                                {/* <span className="full" data-value={product.total_reviews}>{product.total_reviews}</span> */}
                                {/* <span className="half" data-value="0.5"></span> */}
                                {/* <span className="selected"></span> */}

                        </div>
                        </div>
                        {/* <div className="rating-main pro-detail-star" data-vote="0"> */}
                            {/* <div className="mainstar hidden"> */}
                            
                                {/* <span className="full" data-value="0"></span>
                                <span className="half" data-value="0"></span> */}
                            {/* </div> */}
                        {/* </div> */}
                        {/* <!-- <div className="rating-main pro-detail-star" data-vote="0">
                            <div className="mainstar hidden">
                                <span className="full" data-value="0"></span>
                                <span className="half" data-value="0"></span>
                            </div>
                            <div className="star">
                                <span className="full" data-value="1"></span>
                                <span className="half" data-value="0.5"></span>
                                <span className="selected"></span>

                            </div>
                            <div className="star">
                                <span className="full" data-value="2"></span>
                                <span className="half" data-value="1.5"></span>
                                <span className="selected"></span>

                            </div>

                            <div className="star">
                                <span className="full" data-value="3"></span>
                                <span className="half" data-value="2.5"></span>
                                <span className="selected"></span>
                            </div>

                            <div className="star">
                                <span className="full" data-value="4"></span>
                                <span className="half" data-value="3.5"></span>
                                <span className="selected"></span>
                            </div>

                            <div className="star">
                                <span className="full" data-value="5"></span>
                                <span className="half" data-value="4.5"></span>
                                <span className="selected"></span>
                            </div>
                        </div> --> */}
                        <div className='success-box'>
                            <div className='text-message'></div>
                        </div>
                    </section>
                    <a href="#">
                        <button type="button" className="brown-btn  text-uppercase btn-effects ">SELECT ORDER
                            TYPE</button>
                    </a>
                </div>

            </div>
        </div>
        </div>
        
        ))}
        
    </div>
  )
}

export default ProductCard