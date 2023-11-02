import React from 'react'
import Card from './Card'
const ProductsContainer = ({products,startIndex,lastIndex}) => {
  return (
    products.map((item,i)=>{
        if(i>=startIndex && i<lastIndex){
        return <Card image={item.image} price={item.price} description={item.title} rating={item.rating.rate} count={item.rating.count} key={i}/>
        }
      })
  )
}

export default ProductsContainer