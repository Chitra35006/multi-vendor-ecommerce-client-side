import { useQuery } from '@tanstack/react-query';
import React from 'react';
import BJacket2 from './BJacket2';
import './AllProducts.css'

const BJacket = () => {
    const { data: jackets = []} = useQuery({
        queryKey: ["jackets"],
        queryFn: async () => {
          const res = await fetch("https://y-alpha-six.vercel.app/b2cProducts/jacket");
          const data = await res.json();
          return data;
        },
      });
    return (
        <div>
            <div>
                <p className='mt-4 mb-4'>Total Jacket Item:{jackets.length}</p>
            </div>
            <div className='mt-product-div grid lg:grid-cols-2 md:grid-cols-2 gap-3  grid-cols-1'>
                {
                    jackets.map(jacket=><BJacket2
                        key ={jacket._id}
                        jacket = {jacket}
                    ></BJacket2>)
                }
            </div>
            
        </div>
    );
};

export default BJacket;