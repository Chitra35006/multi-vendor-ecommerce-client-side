import { useQuery } from '@tanstack/react-query';
import React from 'react';
import BShoe2 from './BShoe2';
import './AllProducts.css'

const BShoe = () => {
    const { data: shoes = []} = useQuery({
        queryKey: ["shoes"],
        queryFn: async () => {
          const res = await fetch("https://y-alpha-six.vercel.app/b2cProducts/shoe");
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
                    shoes.map(shoe=><BShoe2
                        key ={shoe._id}
                        shoe = {shoe}
                    ></BShoe2>)
                }
            </div>
            
        </div>
    );
};

export default BShoe;