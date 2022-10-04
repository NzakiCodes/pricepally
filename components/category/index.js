import React, { useEffect, useState } from 'react'

const Category = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, [])
  return (
    <>
    {domLoaded && (
    <div>
       
        {/* <!------ CATEGORIES_SECTION_START  ------> */}
        <section className="categoires_wrapper mt-3 mb-3  d-lg-block">
            <div className="container">
                <div id="categoires-bg">
                    <div className="row">
                        <div className="col-6 col-md-6 col-lg-6">
                            <h4 className="heading">Category</h4>
                        </div>
                        <div className="col-6 col-md-6 col-lg-6 text-right">
                            <a href="#" className="text-uppercase brown-text viewall-btn">View All</a>
                        </div>
                    </div>
                    <div id="folloersSlider" className="dvslider">

                        <div className="">
                            <div className="item">
                                <div className="followers-inner">
                                    <a href="listing.html">
                                        <img src="/images/foodstuff-img.png" />
                                    </a>
                                    </div>
                            </div>
                            <div className="item">
                                <div className="followers-inner">
                                    <a href="listing.html"> 
                                        <img src="/images/packfood_img.png" />
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="followers-inner">
                                    <a href="listing.html">
                                        <img src="/images/fruits-img.png" />
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="followers-inner">
                                    <a href="listing.html">
                                        <img src="/images/packfood_img.png" />
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="followers-inner">
                                    <a href="listing.html">
                                        <img src="/images/foodstuff-img.png" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>


    </div>
    )}
    </>
  )
}

export default Category