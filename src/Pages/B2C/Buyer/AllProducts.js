import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AllProducts2 from './AllProducts2';
import Loading from '../../Shared/Loading';
import './AllProducts.css'

const AllProducts = () => {
    const { data: b2cProducts,isLoading } = useQuery({
        queryKe: ["b2cProducts "],
        queryFn: async () => {
          try {
            const res = await fetch("http://localhost:5000/b2cProducts", {
              headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
              },
            });
            const data = await res.json();
            return data;
          } catch (error) {}
        },
      })
      
      if (isLoading) {
        return <Loading></Loading>;
      }
      return (
        <div>
          <div>
            <h2 className="mt-5"> Total Products : {b2cProducts?.length}</h2>
          </div>
         <div className=" mt-product-div grid lg:grid-cols-2 md:grid-cols-2 gap-3  grid-cols-1">
            {
                b2cProducts.map(b2cProduct =><AllProducts2
                    key={b2cProduct._id}
                    b2cProduct={b2cProduct}
                ></AllProducts2> )
            }
         </div>
        </div>
      );
    };

export default AllProducts;