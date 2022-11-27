import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Shoes2 from './Shoes2';
import '../B2B/AllProductsB.css'
const Shoe = () => {
    const { data: shoes = []} = useQuery({
        queryKey: ["shoes"],
        queryFn: async () => {
          const res = await fetch("http://localhost:5000/b2bProducts/shoe");
          const data = await res.json();
          return data;
        },
      });
    return (
        <div>
            <div>
                <p className='mt-4 mb-4'>Total Shoe Item:{shoes.length}</p>
            </div>
            <div className='mt-product-div grid lg:grid-cols-2 md:grid-cols-2 gap-3  grid-cols-1'>
                {
                    shoes.map(shoe=><Shoes2
                    key ={shoe._id}
                    shoe = {shoe}
                    ></Shoes2>)
                }
            </div>
            
        </div>
    );
};

export default Shoe;