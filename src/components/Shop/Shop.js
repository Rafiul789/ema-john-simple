import React,{useState,useEffect} from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const[products,setProduct]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    })
    const handleAddToCart=(product)=>{
      console.log(product)
      }


    return (
        <div  className="shop-container">
            <div className="products-container">{products.map(product=><Product key={product.id} product={product}  handleAddToCart={handleAddToCart} ></Product>)} </div>
            <div className="cart-container"> <h3>Order Summary</h3> </div>
        </div>
    );
};

export default Shop;