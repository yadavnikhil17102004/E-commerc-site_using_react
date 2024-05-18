import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DiscriptionBox from '../Components/DiscriptionBox/DiscriptionBox';

const Product = () => {
  const {all_pets}= useContext(ShopContext);
  const {productId} = useParams()
  const product = all_pets.find((e)=> e.id === Number(productId) )
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DiscriptionBox/>
    </div>
  )
}

export default Product