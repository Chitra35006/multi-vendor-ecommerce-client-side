import React from 'react';
import gif1 from '../assets/warning.gif'
const Offer = () => {
    return (
        <div className='flex flex-col justify-center items-center m-36'>
            <img className='h-24 w-24 mt-5' src={gif1} alt=""/>
            <h2 className='mt-5'>This page is under maintainance!</h2>
        </div>
    );
};

export default Offer;