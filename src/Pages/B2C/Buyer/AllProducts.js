
import React, { useEffect, useState } from 'react';
import AllProducts2 from './AllProducts2';
import './AllProducts.css'
import Cart from './Cart';
import { addToDb, getStoredCart } from './fakeDb';

const AllProducts = () => {
    const [b2cProducts,setb2cProduct] = useState ([]);
    const [cart,setCart] = useState([])
    useEffect(()=>{
      fetch('https://y-alpha-six.vercel.app/b2cProducts')
      .then(res=>res.json())
      .then(data => setb2cProduct(data))
    },[]);


    useEffect(()=>{
      const storedCart = getStoredCart();
      for(const id in storedCart){
        const addedProduct = b2cProducts.find(b2cProduct=>b2cProduct._id ===id);
        // console.log(addedProduct);
        if(addedProduct){
          
        }
      }
    },[b2cProducts])

    const handleAddTocartClick = (b2cProduct) =>{
      console.log(b2cProduct);
      const newCart = [...cart,b2cProduct];
      setCart(newCart);
      addToDb(b2cProduct._id);
    }

     
      return (
        <div className='shop-container'>
          <div className='products-container'>
            <h2 className="mt-5"> Total Products : {b2cProducts?.length}</h2>
          </div>
         <div className=" mt-product-div grid lg:grid-cols-2 md:grid-cols-1 gap-3  grid-cols-1">
            {
                b2cProducts.map(b2cProduct =><AllProducts2
                    key={b2cProduct._id}
                    b2cProduct={b2cProduct}
                    handleAddTocartClick={handleAddTocartClick}
                ></AllProducts2> )
            }
         </div>
         <div className='cart-container'>
            <Cart cart={cart}></Cart>
         </div>
        </div>
      );
    };

export default AllProducts;