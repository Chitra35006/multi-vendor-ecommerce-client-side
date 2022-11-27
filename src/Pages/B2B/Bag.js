import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Bag2 from './Bag2';
import '../B2B/AllProductsB.css'
const Bag = () => {
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
                    bags.map(bag=><Bag2
                        key ={bag._id}
                        bag = {bag}
                    ></Bag2>)
                }
            </div>
            
        </div>
    );
};

export default Bag;