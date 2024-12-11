import React, { useEffect } from 'react'
import ProductCardList from '../components/productCardList'
// import ProductList from '../components/productlist'

export default function Products() {
  useEffect(() => {
    // Scroll to the top of the page when the component loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='mt-16'>
      <ProductCardList/>
      {/* <ProductList /> */}
      
    </div>
  )
}
