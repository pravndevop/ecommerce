import React from 'react'
import { ApiTopPropducts } from '../apifolder/TopProducctApi'
import Product from './Product'
function TopProducts() {
  return (
    <div className='p-5 flex flex-wrap'>
        {
            ApiTopPropducts.map((product, index)=>(
                <Product item={product} key={index}/>
            ))
        }
    </div>
  )
};

export default TopProducts