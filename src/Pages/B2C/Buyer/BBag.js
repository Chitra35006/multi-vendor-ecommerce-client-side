import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Bbag2 from './Bbag2';
import './AllProducts.css'
const BBag = () => {
    const { data: bags = []} = useQuery({
        queryKey: ["bags"],
        queryFn: async () => {
          const res = await fetch("http://localhost:5000/b2bProducts/bag");
          const data = await res.json();
          return data;
        },
      });
    return (
        <div>
            <div>
                <p className='mt-4 mb-4'>Total Bag Item:{bags.length}</p>
            </div>
            <div className='mt-product-div grid lg:grid-cols-2 md:grid-cols-2 gap-3  grid-cols-1'>
                {
                    bags.map(bag=><Bbag2
                        key ={bag._id}
                        bag = {bag}
                    ></Bbag2>)
                }
            </div>
            
        </div>
    );
};

export default BBag;