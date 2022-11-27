import React from 'react';
import PrimaryButton from '../../Components/PrimaryButton';

const BAllProducts2 = ({b2bProduct}) => {
    const { image, p_details, p_price, p_quantity, p_category } = b2bProduct;
    return (
      <div>
        <div className="card w-96 bg-emerald-100 shadow-xl mb-4">
          <figure>
            <img className="mt-4" src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{p_category }</h2>
            <h2 className="text-2xl">{p_details}</h2>
            <div className="flex  flex-row ">
            <p className="text=2xl">Quantity : {p_quantity}</p>
            <p className="text=2xl">Total Price: <strong className="text">{p_price}</strong><span className="text-xl">Tk</span></p>
            </div>
            <div className="card-actions justify-end">
              <PrimaryButton>Add To cart</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default BAllProducts2;