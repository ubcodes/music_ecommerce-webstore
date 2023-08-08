import React from 'react'

//We can import all of them in one line
import  { Product, FooterBanner, HeroBanner } from '../components'

import { client } from '../lib/client'
//in next.js to fetch data we se soething known as getSeverSideProps
//whenever you're fetching data from API or from a CMS, you can use the getServerSideProp function


const Home = ({ products, bannerData }) => 
 (
    <div >
    <HeroBanner heroBanner={bannerData?.length && bannerData[0]} />
    {/* what is the bannerData and in what form is it return the data to us */}
    {console.log(bannerData)}

    <div className='products-heading'> 
      <h2>Turn Up The Beat & Discover the Best Bass</h2>
      <p>Instruments of many variations</p>
    </div>

    {/* Here would loop over our products */ }
    <div className='products-container'>
      {/* We cannot yet loop over our real product because we haven't fetch them over from sanity  */}
      {/* we'll loop over the product right here */}
      {/* {['Product 1', 'Product 2'].map((product)=> product)} */}
      {products?.map((product)=> product.name)}
    </div>


    <FooterBanner />
    </div>
  );

 /*  export const getServerSideProps = async () =>  {
    //first let's gets the data from sanity  query
    const  query = '*[_type == "product"]'; // here ware are trying to get all our products from sanity dashboard
    const products = await client.fetch(query);

    //we can also get the data for our banner

    const  bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    return { 
      //so we can retrun an object taht includes the props object where we are going to pass in the product and bannerdata
      props: { products, bannerData  }
    }


  }  */
  

  export const getServerSideProps = async () => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo = await res.json()
  return { props: { repo } }
}
 



export default Home;




