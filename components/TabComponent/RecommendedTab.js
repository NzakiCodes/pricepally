import React from 'react'

const RecommendedTab = () => {
  return (
    <div>
        {/* recommended */}
        <div className="tab-pane show recommended-bg" id="recommended" role="tabpanel" aria-labelledby="recommended-tab">
            <h6 className="inner-head mb-3 mt-3">12 Available Deals</h6>
            <div className="">
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="pally-inner ">
                            <div className="products-img-wrapper  mb-3 pointer">
                                <a href="#">
                                    <div className="heart-icon">
                                        <span className="material-icons">
                                            favorite_border
                                        </span>
                                    </div>
                                    <img className="mb-3 product-img" src="/images/Product-img5.png" alt="Product-img1" />
                                </a>
                            </div>

                            <div className="pally-content">
                                <a href="#" className="inner-head">
                                    <h5 className="mb-2">Irish Potato (5kg) </h5>
                                </a>
                                <a href="#" className="green-bg"><span className="material-icons-outlined">
                                        arrow_right_alt
                                    </span>3% | <span className="clr-red">Off Season</span></a>
                                <h5 className="mb-2 mt-2 font-weight-bold simhead">₦73,000
                                    <s>(₦78,000)</s>
                                </h5>
                                <section className='rating-widget'>
                                    <div className="no-ratings"><p>No ratings yet</p></div>
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
                    <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                            <div className="products-img-wrapper  mb-3 pointer">
                                <a href="#">
                                    <div className="heart-icon">
                                        <span className="material-icons">
                                            favorite_border
                                        </span>
                                    </div>
                                    <img className="mb-3 product-img" src="/images/Product-img6.png" alt="Product-img6" />
                                </a>
                            </div>

                            <div className="pally-content">
                                <a href="#" className="inner-head">
                                    <h5 className="mb-2">Soya Beans (100kg)</h5>
                                </a>
                                <a href="#" className="green-bg"><span className="material-icons-outlined">
                                        arrow_right_alt
                                    </span>3% | In Season</a>
                                <h5 className="mb-2 mt-2 font-weight-bold simhead">₦73,000
                                    <s>(₦78,000)</s>
                                </h5>
                                <section className='rating-widget'>
                                    <div className="rating-main pro-detail-star" data-vote="0">
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
                                    </div>
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
                    <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                            <div className="products-img-wrapper  mb-3 pointer">
                                <a href="#">
                                    <div className="heart-icon">
                                        <span className="material-icons">
                                            favorite_border
                                        </span>
                                    </div>
                                    <img className="mb-3 product-img" src="/images/Product-img3.png" alt="Product-img1" />
                                </a>
                            </div>
                            <div className="pally-content">
                                <a href="#" className="inner-head">
                                    <h5 className="mb-2">White Onions (40kg)</h5>
                                </a>
                                <a href="#" className="green-bg"><span className="material-icons-outlined">
                                        arrow_right_alt
                                    </span>3% | In Season</a>
                                <h5 className="mb-2 mt-2 font-weight-bold simhead">₦73,000
                                    <s>(₦78,000)</s>
                                </h5>
                                <section className='rating-widget'>
                                    <div className="no-ratings"><p>No ratings yet</p></div>
                                    {/* <div className="rating-main pro-detail-star" data-vote="0">
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
                                    </div>  */}
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
                    <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                            <div className="products-img-wrapper  mb-3 pointer">
                                <a href="#">
                                    <div className="heart-icon">
                                        <span className="material-icons">
                                            favorite_border
                                        </span>
                                    </div>
                                    <img className="mb-3 product-img" src="/images/Product-img4.png" alt="Product-img1" />
                                </a>
                            </div>
                            <div className="pally-content">
                                <a href="#" className="inner-head">
                                    <h5 className="mb-2">Guinea Corn Red (Paint... </h5>
                                </a>
                                <a href="#" className="green-bg"><span className="material-icons-outlined">
                                        arrow_right_alt
                                    </span>3% | In Season</a>
                                <h5 className="mb-2 mt-2 font-weight-bold simhead">₦73,000
                                    <s>(₦78,000)</s>
                                </h5>
                                <section className='rating-widget'>
                                    <div className="rating-main pro-detail-star" data-vote="0">
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
                                    </div>
                                    <div className='success-box'>
                                        <div className='text-message'>(4.5/5.0)</div>
                                    </div>
                                </section>
                                <a href="#">
                                    <button type="button" className="brown-btn  text-uppercase btn-effects ">SELECT ORDER
                                        TYPE</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                            <div className="products-img-wrapper  mb-3 pointer">
                                <a href="#">
                                    <div className="heart-icon">
                                        <span className="material-icons">
                                            favorite_border
                                        </span>
                                    </div>
                                    <img className="mb-3 product-img" src="/images/Product-img5.png" alt="Product-img1" />
                                </a>
                            </div>
                            <div className="pally-content">
                                <a href="#" className="inner-head">
                                    <h5 className="mb-2">Soya Beans (Paint Bucket) </h5>
                                </a>
                                <a href="#" className="green-bg"><span className="material-icons-outlined">
                                        arrow_right_alt
                                    </span>3% | In Season</a>
                                <h5 className="mb-2 mt-2 font-weight-bold simhead">₦73,000
                                    <s>(₦78,000)</s>
                                </h5>
                                <section className='rating-widget '>
                                    <div className="rating-main pro-detail-star" data-vote="0">
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
                                    </div>
                                    <div className='success-box'>
                                        <div className='text-message'>(4.5/5.0)</div>
                                    </div>
                                </section>
                                <a href="#">
                                    <button type="button" className="brown-btn  text-uppercase btn-effects ">SELECT ORDER
                                        TYPE</button>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                            <div className="products-img-wrapper  mb-3 pointer">
                                <a href="#">
                                    <div className="heart-icon">
                                        <span className="material-icons">
                                            favorite_border
                                        </span>
                                    </div>
                                    <img className="mb-3 product-img" src="/images/Product-img6.png" alt="Product-img1" />
                                </a>
                            </div>
                            <div className="pally-content">
                                <a href="#" className="inner-head">
                                    <h5 className="mb-2 ">Soya Beans (100kg) </h5>
                                </a>
                                <a href="#" className="green-bg"><span className="material-icons-outlined">
                                        arrow_right_alt
                                    </span>3% | In Season</a>
                                <h5 className="mb-2 mt-2 font-weight-bold simhead">₦73,000
                                    <s>(₦78,000)</s>
                                </h5>
                                <section className='rating-widget'>
                                    <div className="rating-main pro-detail-star" data-vote="0">
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
                                    </div>
                                    <div className='success-box'>
                                        <div className='text-message'>(4.5/5.0)</div>
                                    </div>
                                </section>
                                <a href="#">
                                    <button type="button" className="brown-btn  text-uppercase btn-effects ">SELECT ORDER
                                        TYPE</button>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                            <div className="products-img-wrapper  mb-3 pointer">
                                <a href="#">
                                    <div className="heart-icon">
                                        <span className="material-icons">
                                            favorite_border
                                        </span>
                                    </div>
                                    <img className="mb-3 product-img" src="/images/Product-img7.png" alt="Product-img1" />
                                </a>
                            </div>
                            <div className="pally-content">
                                <a href="#" className="inner-head">
                                    <h5 className="mb-2">Tuwo Rice (50kg)</h5>
                                </a>
                                <a href="#" className="green-bg"><span className="material-icons-outlined">
                                        arrow_right_alt
                                    </span>3% | In Season</a>
                                <h5 className="mb-2 mt-2 font-weight-bold simhead">₦73,000
                                    <s>(₦78,000)</s>
                                </h5>
                                <section className='rating-widget'>
                                    <div className="rating-main pro-detail-star" data-vote="0">
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
                                    </div>
                                    <div className='success-box'>
                                        <div className='text-message'>(4.5/5.0)</div>
                                    </div>
                                </section>
                                <a href="#">
                                    <button type="button" className="brown-btn  text-uppercase btn-effects ">SELECT ORDER
                                        TYPE</button>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                            <div className="products-img-wrapper  mb-3 pointer">
                                <a href="#">
                                    <div className="heart-icon">
                                        <span className="material-icons">
                                            favorite_border
                                        </span>
                                    </div>
                                    <img className="mb-3 product-img" src="/images/Product-img8.png" alt="Product-img1" />
                                </a>
                            </div>

                            <div className="pally-content">
                                <a href="#" className="inner-head">
                                    <h5 className="mb-2">Beans Oloyin - original (100kg) </h5>
                                </a>
                                <a href="#" className="green-bg"><span className="material-icons-outlined">
                                        arrow_right_alt
                                    </span>3% | In Season</a>
                                <h5 className="mb-2 mt-2 font-weight-bold simhead">₦73,000
                                    <s>(₦78,000)</s>
                                </h5>
                                <section className='rating-widget'>
                                    <div className="rating-main pro-detail-star" data-vote="0">
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
                                    </div>
                                    <div className='success-box'>
                                        <div className='text-message'>(4.5/5.0)</div>
                                    </div>
                                </section>
                                <a href="#">
                                    <button type="button" className="brown-btn  text-uppercase btn-effects ">SELECT ORDER
                                        TYPE</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                            <div className="products-img-wrapper  mb-3 pointer">
                                <a href="#">
                                    <div className="heart-icon">
                                        <span className="material-icons">
                                            favorite_border
                                        </span>
                                    </div>
                                    <img className="mb-3 product-img" src="/images/Product-img9.png" alt="Product-img1" />
                                </a>
                            </div>

                            <div className="pally-content">
                                <a href="#" className="inner-head">
                                    <h5 className="mb-2">Irish Potato (5kg) </h5>
                                </a>
                                <a href="#" className="green-bg"><span className="material-icons-outlined">
                                        arrow_right_alt
                                    </span>3% | In Season</a>
                                <h5 className="mb-2 mt-2 font-weight-bold simhead">₦73,000
                                    <s>(₦78,000)</s>
                                </h5>
                                <section className='rating-widget'>
                                    <div className="rating-main pro-detail-star" data-vote="0">
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
                                    </div>
                                    <div className='success-box'>
                                        <div className='text-message'>(4.5/5.0)</div>
                                    </div>
                                </section>
                                <a href="#">
                                    <button type="button" className="brown-btn  text-uppercase btn-effects ">SELECT ORDER
                                        TYPE</button>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                            <div className="products-img-wrapper  mb-3 pointer">
                                <a href="#">
                                    <div className="heart-icon">
                                        <span className="material-icons">
                                            favorite_border
                                        </span>
                                    </div>
                                    <img className="mb-3 product-img" src="/images/Product-img10.png" alt="Product-img1" />
                                </a>
                            </div>
                            <div className="pally-content">
                                <a href="#" className="inner-head">
                                    <h5 className="mb-2">Ofada Rice (50kg) </h5>
                                </a>
                                <a href="#" className="green-bg"><span className="material-icons-outlined">
                                        arrow_right_alt
                                    </span>3% | In Season</a>
                                <h5 className="mb-2 mt-2 font-weight-bold simhead">₦73,000
                                    <s>(₦78,000)</s>
                                </h5>
                                <section className='rating-widget'>
                                    <div className="rating-main pro-detail-star" data-vote="0">
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
                                    </div>
                                    <div className='success-box'>
                                        <div className='text-message'>(4.5/5.0)</div>
                                    </div>
                                </section>
                                <a href="#">
                                    <button type="button" className="brown-btn  text-uppercase btn-effects ">SELECT ORDER
                                        TYPE</button>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                            <div className="products-img-wrapper  mb-3 pointer">
                                <a href="#">
                                    <div className="heart-icon">
                                        <span className="material-icons">
                                            favorite_border
                                        </span>
                                    </div>
                                    <img className="mb-3 product-img" src="/images/Product-img11.png" alt="Product-img1" />
                                </a>
                            </div>
                            <div className="pally-content">
                                <a href="#" className="inner-head">
                                    <h5 className="mb-2">Sombo Pepper - Grade(...</h5>
                                </a>
                                <a href="#" className="green-bg"><span className="material-icons-outlined">
                                        arrow_right_alt
                                    </span>3% | In Season</a>
                                <h5 className="mb-2 mt-2 font-weight-bold simhead">₦73,000
                                    <s>(₦78,000)</s>
                                </h5>
                                <section className='rating-widget'>
                                    <div className="rating-main pro-detail-star" data-vote="0">
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
                                    </div>
                                    <div className='success-box'>
                                        <div className='text-message'>(4.5/5.0)</div>
                                    </div>
                                </section>
                                <a href="#">
                                    <button type="button" className="brown-btn  text-uppercase btn-effects ">SELECT ORDER
                                        TYPE</button>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                            <div className="products-img-wrapper  mb-3 pointer">
                                <a href="#">
                                    <div className="heart-icon">
                                        <span className="material-icons">
                                            favorite_border
                                        </span>
                                    </div>
                                    <img className="mb-3 product-img" src="/images/Product-img12.png" alt="Product-img1" />
                                </a>
                            </div>

                            <div className="pally-content">
                                <a href="#" className="inner-head">
                                    <h5 className="mb-2">Plantain Big Unripe (Stem of </h5>
                                </a>
                                <a href="#" className="green-bg"><span className="material-icons-outlined">
                                        arrow_right_alt
                                    </span>3% | In Season</a>
                                <h5 className="mb-2 mt-2 font-weight-bold simhead">₦73,000
                                    <s>(₦78,000)</s>
                                </h5>
                                <section className='rating-widget'>
                                    <div className="rating-main pro-detail-star" data-vote="0">
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
                                    </div>
                                    <div className='success-box'>
                                        <div className='text-message'>(4.5/5.0)</div>
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
            </div>
        </div>
        
    </div>
  )
}

export default RecommendedTab