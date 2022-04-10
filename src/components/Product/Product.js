import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {name, img, seller, ratings,price} = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price: {price}</p>
            <p>Seller: {seller}</p>
            <p>Rating: {ratings}</p>
            </div>
            <button onClick={()=>props.handleToCart(props.product)} className='btn-cart'>
               <p className='cart-text'>Add to cart</p>
               <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Product;