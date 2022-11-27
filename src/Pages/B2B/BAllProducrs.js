import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Shared/Loading';
import BAllProducts2 from './BAllProducts2';

const BAllProducrs = () => {
    const { data: b2bProducts,isLoading } = useQuery({
        queryKe: ["b2bProducts "],
        queryFn: async () => {
          try {
            const res = await fetch("http://localhost:5000/b2bProducts", {
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
            <h2 className="mt-5"> Total Products : {b2bProducts?.length}</h2>
          </div>
         <div className=" mt-product-div grid lg:grid-cols-2 md:grid-cols-2 gap-3  grid-cols-1">
            {
                b2bProducts.map(b2bProduct => <BAllProducts2
                    key={b2bProduct._id}
                    b2bProduct={b2bProduct}
                ></BAllProducts2>)
            }
         </div>
        </div>
      );
    };
export default BAllProducrs;