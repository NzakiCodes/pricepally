import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Categories from '../components/categories'
import Partner from '../components/partner'
import Download from '../components/download'
import Footer from '../components/footer'
import TestCategory from '../components/category/Test'
// import Category from '../components/category'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Lagos Grocery Store | Affordable foodstuff Shopping at Pricepally</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/images/favicon.png" />

        
       
      </Head>
      {/* <main> */}
        <Navbar />
        <Hero />
        {/* <Category /> */}
        <TestCategory />
        <Categories />
        {/* <Partner /> */}
        <Download />
        <Footer />
      {/* </main> */}
      
      
      
      
      <script src="/static/js/jquery.min.js"></script>
        <script src="/static/js/popper.min.js"></script>
        <script src="/static/js/owl.carousel.min.js"></script>
        <script src="/static/js/bootstrap.min.js"></script>
        <script src="/static/js/script.js"></script>
        <script src="/static/js/multislider.js"></script>
        {/* <script src="/static/js/multislider.min.js"></script> */}
    </div>
  )
}
