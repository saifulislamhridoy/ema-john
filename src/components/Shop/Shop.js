import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart, } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts]= useProducts()
    const [cart, setCart]=useState([])
   useEffect(()=>{
       const storedCart = getStoredCart()
       const saveCart=[]
      for(const id in storedCart){
          const addedProduct = products.find(product => product.id ===id)
          if(addedProduct){
            const quantity = storedCart[id]
            addedProduct.quantity=quantity
            saveCart.push(addedProduct)
          } 
      }
      setCart(saveCart)
   },[products])
    const handleToCart =(selectedProduct)=>{
        let newCart=[]
        const exiest = cart.find(product => product.id === selectedProduct.id)
        if(!exiest){
            selectedProduct.quantity=1
            newCart=[...cart,selectedProduct]
        }
        else{
            const rest = cart.filter(product=> product.id!==selectedProduct.id)
            exiest.quantity=exiest.quantity+1
            newCart=[...rest,exiest]
        }
         setCart(newCart)
         addToDb(selectedProduct.id)
    }
    return (
        <div className='shop-container'>
           <div className='product-container'>
                {
                    products.map(product => <Product                                
                    key={product.id}
                    product={product}
                    handleToCart={handleToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-summary'>
                <Cart cart={cart}> 
                <Link to='/orders'> <button>Order Review</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;