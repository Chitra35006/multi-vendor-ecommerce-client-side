import { useEffect, useState } from 'react';

const useB2cSeller = email => {
   const [isB2Cseller, setisB2Cseller] = useState(false);
   const [isB2CsellerLoading, setisB2CsellerLoading] = useState(true);
   useEffect(()=>{
    if(email){
        fetch(`https://y-alpha-six.vercel.app/users/b2cseller/${email}`)
        .then(res => res.json())
        .then(data =>{
           console.log(data);
           setisB2Cseller(data.isB2Cseller); 
           setisB2CsellerLoading(false);
        })
    }
   },[email])
   return [isB2Cseller,isB2CsellerLoading]
}
export default useB2cSeller;