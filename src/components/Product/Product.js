import React from 'react';
import './Product.css'
const Product = (props) => {
  const{product,handleAddToCart }=props;
    const{name,img,seller,price,ratings}=props.product;
  
    return (
        <div className="product">
          <img src={img} alt="product-img"></img>
          <div className="product-info">
          <h3>{name}</h3>
          <p>Seller:{seller}</p>
          <h4>{price}$</h4>
          <p>Ratings: {ratings} Stars</p>

         
          </div>
          <button onClick={()=>  handleAddToCart(product)}  className="btn-cart" >  <p>Add to Cart</p>  </button>
        </div>
    );
};

export default Product;