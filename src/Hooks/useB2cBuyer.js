import { useEffect, useState } from 'react';

const useB2cBuyer = email => {
   const [isB2Cbuyer, setisB2Cbuyer] = useState(false);
   const [isB2CbuyerLoading, setisB2CbuyerLoading] = useState(true);
   useEffect(()=>{
    if(email){
        fetch(`https://y-alpha-six.vercel.app/users/b2cb/${email}`)
        .then(res => res.json())
        .then(data =>{
           console.log(data);
           setisB2Cbuyer(data.isB2Cbuyer); 
           setisB2CbuyerLoading(false);
        })
    }
   },[email])
   return [isB2Cbuyer,isB2CbuyerLoading]
}
export default useB2cBuyer;