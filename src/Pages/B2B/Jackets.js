import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Jackets2 from './Jackets2';

const Jackets = () => {
    const { data: jackets = []} = useQuery({
        queryKey: ["jackets"],
        queryFn: async () => {
          const res = await fetch("http://localhost:5000/b2bProducts/jacket");
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
                    jackets.map(jacket=><Jackets2
                        key ={jacket._id}
                        jacket = {jacket}
                    ></Jackets2>)
                }
            </div>
            
        </div>
    );
};

export default Jackets;