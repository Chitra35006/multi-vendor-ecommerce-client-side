import React from 'react';
import PrimaryButton from '../../../Components/PrimaryButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const AllProducts2 = ({b2cProduct,handleAddTocartClick}) => {

    // const{b2cProduct,handleAddTocartClick} =props;
    const { image, p_details, p_price, p_category } = b2cProduct;
    
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
            <p className="text=2xl">Total Price: <strong className="text-2xl">{p_price}</strong><span className="text-xl">Tk</span></p>
            </div>
            <div onClick={()=>handleAddTocartClick(b2cProduct)} className="card-actions justify-end">
              <PrimaryButton><span className='m-2'>Add To cart</span> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default AllProducts2;