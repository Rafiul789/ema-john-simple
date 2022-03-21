import React from 'react';
import './Product.css'
const Product = (props) => {
    const{name,img,seller,price,ratings}=props.product;
    return (
        <div className="product">
          <img src={img} alt="product-img"></img>
          <h3>{name}</h3>
          <p>{seller}</p>
          <p>{price}$</p>
          <p>{ratings}</p>
        </div>
    );
};

export default Product;